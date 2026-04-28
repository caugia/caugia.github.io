#!/usr/bin/env python3
"""
Locale-drift detector for caugia.github.io.

Compares each EN canonical HTML page against its locale copies in fr/, de/,
es/, pl/, nl/. Flags any locale page whose line count is more than DRIFT_PCT
percent below the EN canonical. The intent is to catch the failure mode where
an EN page gets new sections (a "Meet Sophie" block, a new module breakdown,
etc.) and the locale copies are not updated, leaving non-EN visitors looking
at an out-of-date version of the site.

Used by:
  - .github/workflows/locale-drift.yml  (PR + main check, fails the build)
  - manual dev runs (`python3 scripts/check-locale-drift.py`)

Tunables:
  DRIFT_PCT       max allowed line-count difference, percent (default 12)
  EXEMPT_PAGES    pages that legitimately diverge per locale
"""

from __future__ import annotations

import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LOCALES = ["fr", "de", "es", "pl", "nl"]
DRIFT_PCT = 12  # locale page can be at most 12% shorter than EN
MIN_ABS_DIFF = 30  # ignore tiny diffs even if pct is high (<30 lines)

# Pages with locale-specific layouts that legitimately differ in length.
EXEMPT_PAGES: set[str] = set()


def line_count(p: Path) -> int:
    try:
        with p.open(encoding="utf-8", errors="replace") as f:
            return sum(1 for _ in f)
    except FileNotFoundError:
        return 0


def main() -> int:
    en_pages = sorted(p.name for p in ROOT.glob("*.html") if not p.name.startswith("CODE"))
    failures: list[tuple[str, str, int, int, float]] = []

    print(f"Locale-drift check (DRIFT_PCT={DRIFT_PCT}%, MIN_ABS={MIN_ABS_DIFF} lines)")
    print(f"{'page':<40} {'EN':>6}  {'FR':>6}  {'DE':>6}  {'ES':>6}  {'PL':>6}  {'NL':>6}")
    print("-" * 90)

    for page in en_pages:
        if page in EXEMPT_PAGES:
            continue
        en_count = line_count(ROOT / page)
        if en_count == 0:
            continue
        # Skip pages that don't have a locale equivalent at all (404.html etc.)
        if not (ROOT / "fr" / page).exists():
            continue

        counts = {"en": en_count}
        row_failures: list[tuple[str, int, float]] = []
        for loc in LOCALES:
            p = ROOT / loc / page
            counts[loc] = line_count(p)
            if counts[loc] == 0:
                row_failures.append((loc, 0, 100.0))
                continue
            diff = en_count - counts[loc]
            pct = (diff / en_count) * 100
            if diff >= MIN_ABS_DIFF and pct > DRIFT_PCT:
                row_failures.append((loc, diff, pct))

        marker = "  ".join([f"{counts[k]:>6}" for k in ["en", "fr", "de", "es", "pl", "nl"]])
        flag = ""
        if row_failures:
            flag = "  DRIFT: " + ", ".join(
                f"{loc.upper()}(-{d}, -{p:.0f}%)" for loc, d, p in row_failures
            )
        print(f"{page:<40} {marker}{flag}")

        for loc, d, pct in row_failures:
            failures.append((page, loc, en_count, counts[loc], pct))

    print("-" * 90)
    if not failures:
        print(f"OK · no locale drift > {DRIFT_PCT}% across {len(en_pages)} pages.")
        return 0

    print(f"FAIL · {len(failures)} locale-page drifts > {DRIFT_PCT}%:")
    for page, loc, en_n, loc_n, pct in failures:
        print(f"  {loc}/{page}  EN={en_n} vs {loc.upper()}={loc_n}  ({pct:.0f}% short)")
    print()
    print("Action: open the locale page next to the EN canonical, port the missing sections,")
    print("and translate every visible string per the Caugia voice rules.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
