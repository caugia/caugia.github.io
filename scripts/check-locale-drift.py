#!/usr/bin/env python3
"""
Locale-drift detector for caugia.github.io.

Compares each EN canonical HTML page against its locale copies in fr/, de/,
es/, pl/, nl/. Strips tags, <script>, <style> and counts visible text words.
Flags any locale page whose word count is more than DRIFT_PCT percent below
the EN canonical. Word count survives minification (line-count would not).

Used by:
  - .github/workflows/locale-drift.yml  (PR + main check, fails the build)
  - manual dev runs (`python3 scripts/check-locale-drift.py`)

Why words and not lines: a subagent earlier discovered locale pages can be
minified (CSS, multi-line HTML collapsed) which inflates line-count drift
to 50%+ even when every section is present and natively translated. Word
count measures actual visible content the user reads.

Tunables:
  DRIFT_PCT       max allowed visible-word-count gap, percent (default 18)
  MIN_ABS_DIFF    ignore tiny absolute diffs even if pct is high
  EXEMPT_PAGES    pages that legitimately diverge per locale
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LOCALES = ["fr", "de", "es", "pl", "nl"]
DRIFT_PCT = 18  # locale page can be at most ~18% lighter on visible text than EN
MIN_ABS_DIFF = 80  # ignore drifts < 80 words (small intentional re-phrasings, footers)

EXEMPT_PAGES: set[str] = set()

SCRIPT_RE = re.compile(r"<script\b[^>]*>.*?</script>", re.DOTALL | re.IGNORECASE)
STYLE_RE = re.compile(r"<style\b[^>]*>.*?</style>", re.DOTALL | re.IGNORECASE)
COMMENT_RE = re.compile(r"<!--.*?-->", re.DOTALL)
TAG_RE = re.compile(r"<[^>]+>")
WHITESPACE_RE = re.compile(r"\s+")
WORD_RE = re.compile(r"[\wÀ-ÿ'-]+", re.UNICODE)
CLASS_RE = re.compile(r'class\s*=\s*"([^"]+)"', re.IGNORECASE)
ID_RE = re.compile(r'\sid\s*=\s*"([^"]+)"', re.IGNORECASE)


def structural_tokens(p: Path) -> set[str]:
    """Set of class names + ids in the page. Survives translation but reflects
    structural sections — if EN has a `mk-brain-title` class that the locale
    pages don't, that's a missing section, not a translation choice."""
    try:
        with p.open(encoding="utf-8", errors="replace") as f:
            html = f.read()
    except FileNotFoundError:
        return set()
    html = SCRIPT_RE.sub(" ", html)
    html = STYLE_RE.sub(" ", html)
    tokens: set[str] = set()
    for m in CLASS_RE.finditer(html):
        for cls in m.group(1).split():
            # ignore tailwind utility-style spam (m-3, p-2, text-xs etc.) and
            # one-letter / numeric tokens. Section-class names tend to use
            # hyphens and are 4+ characters of meaningful text.
            if len(cls) >= 4 and "-" in cls and not cls[0].isdigit():
                tokens.add(cls)
    for m in ID_RE.finditer(html):
        tokens.add(f"#{m.group(1)}")
    return tokens


def visible_word_count(p: Path) -> int:
    """Strip <script>, <style>, comments, tags. Count words in remainder."""
    try:
        with p.open(encoding="utf-8", errors="replace") as f:
            html = f.read()
    except FileNotFoundError:
        return 0
    html = SCRIPT_RE.sub(" ", html)
    html = STYLE_RE.sub(" ", html)
    html = COMMENT_RE.sub(" ", html)
    html = TAG_RE.sub(" ", html)
    html = WHITESPACE_RE.sub(" ", html)
    return len(WORD_RE.findall(html))


def main() -> int:
    en_pages = sorted(p.name for p in ROOT.glob("*.html") if not p.name.startswith("CODE"))
    word_failures: list[tuple[str, str, int, int, float]] = []
    structural_failures: list[tuple[str, str, list[str]]] = []

    print(f"Locale-drift check (visible-word count, DRIFT_PCT={DRIFT_PCT}%, MIN_ABS={MIN_ABS_DIFF} words)")
    print(f"{'page':<40} {'EN':>6}  {'FR':>6}  {'DE':>6}  {'ES':>6}  {'PL':>6}  {'NL':>6}")
    print("-" * 95)

    for page in en_pages:
        if page in EXEMPT_PAGES:
            continue
        en_count = visible_word_count(ROOT / page)
        if en_count == 0:
            continue
        if not (ROOT / "fr" / page).exists():
            continue

        en_tokens = structural_tokens(ROOT / page)

        counts = {"en": en_count}
        row_word_fail: list[tuple[str, int, float]] = []
        row_struct_fail: list[tuple[str, list[str]]] = []
        for loc in LOCALES:
            p = ROOT / loc / page
            counts[loc] = visible_word_count(p)
            if counts[loc] == 0:
                row_word_fail.append((loc, en_count, 100.0))
                continue
            diff = en_count - counts[loc]
            pct = (diff / en_count) * 100
            if diff >= MIN_ABS_DIFF and pct > DRIFT_PCT:
                row_word_fail.append((loc, diff, pct))
            # Structural check: classes/ids that exist in EN but not in locale
            loc_tokens = structural_tokens(p)
            missing = sorted(en_tokens - loc_tokens)
            if missing:
                row_struct_fail.append((loc, missing[:5]))

        marker = "  ".join([f"{counts[k]:>6}" for k in ["en", "fr", "de", "es", "pl", "nl"]])
        flag = ""
        if row_word_fail:
            flag += "  DRIFT(words): " + ", ".join(
                f"{loc.upper()}(-{d}, -{p:.0f}%)" for loc, d, p in row_word_fail
            )
        if row_struct_fail:
            flag += "  MISSING-STRUCT: " + ", ".join(
                f"{loc.upper()}(missing {len(m)} classes/ids)" for loc, m in row_struct_fail
            )
        print(f"{page:<40} {marker}{flag}")

        for loc, d, pct in row_word_fail:
            word_failures.append((page, loc, en_count, counts[loc], pct))
        for loc, missing in row_struct_fail:
            structural_failures.append((page, loc, missing))

    print("-" * 95)
    n = len(word_failures) + len(structural_failures)
    if n == 0:
        print(f"OK · no locale drift across {len(en_pages)} pages.")
        return 0

    if word_failures:
        print(f"FAIL (words) · {len(word_failures)} drift cases > {DRIFT_PCT}%:")
        for page, loc, en_n, loc_n, pct in word_failures:
            print(f"  {loc}/{page}  EN={en_n} words vs {loc.upper()}={loc_n}  ({pct:.0f}% lighter)")
    if structural_failures:
        print(f"FAIL (structure) · {len(structural_failures)} pages where locale lacks classes/ids that EN has:")
        for page, loc, missing in structural_failures:
            sample = ", ".join(missing)
            print(f"  {loc}/{page}  missing in locale: {sample}{'...' if len(missing) == 5 else ''}")
    print()
    print("Action: open the locale page next to the EN canonical, port the missing sections,")
    print("and translate every visible string per the Caugia voice rules.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
