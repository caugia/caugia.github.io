#!/usr/bin/env node
// Refine Sophie Format-C callouts:
//   1. New CSS: uppercase eyebrow-style labels, dark-variant modifier,
//      tighter spacing, bigger avatar, min-width:0 on body for clean wrap.
//   2. Intel + Connector callouts switch from LIGHT to DARK variant
//      (they sit on the s-intel dark gradient — light-on-light = ugly).
//   3. Brief callout inline style overrides replaced by --dark modifier.
//
// Run: node scripts/refine-sophie-callouts.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));

// ============================================================
// New CSS (replaces the v1 block)
// ============================================================
const CSS_V1_MARKER = '/* === Sophie callout (Format C) === */';
const CSS_V2_END_MARKER = '/* === /Sophie callout === */';
const CSS_V2 = `/* === Sophie callout (Format C v2) === */
.sophie-callout {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin: 24px 0 18px;
  padding: 18px 20px;
  background: rgba(59, 108, 216, 0.05);
  border-left: 3px solid #3B6CD8;
  border-radius: 10px;
  font-size: 14.5px;
  line-height: 1.6;
  color: #1f2a44;
}
.sophie-callout__avatar {
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 1px;
}
.sophie-callout__body { flex: 1; min-width: 0; }
.sophie-callout__row { margin: 0; }
.sophie-callout__row + .sophie-callout__row { margin-top: 10px; }
.sophie-callout__label {
  display: inline-block;
  color: #3B6CD8;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-right: 8px;
  vertical-align: 1px;
}
.sophie-callout--dark {
  background: rgba(255, 255, 255, 0.05);
  border-left-color: #7aa3ff;
  color: #f1f5f9;
}
.sophie-callout--dark .sophie-callout__label { color: #7aa3ff; }
@media (max-width: 600px) {
  .sophie-callout { font-size: 13.5px; padding: 14px 16px; gap: 12px; }
  .sophie-callout__avatar { flex: 0 0 32px; width: 32px; height: 32px; }
}
/* === /Sophie callout === */`;

// ============================================================
// File-mutation
// ============================================================
function processFile(absPath) {
  console.log(`\nProcessing ${absPath}`);
  let html = fs.readFileSync(absPath, 'utf8');
  const original = html;

  // 1. Replace v1 CSS block. v1 starts with the marker comment and ends just
  //    before the next `}` that closes the @media query (last rule of v1).
  const v1Start = html.indexOf(CSS_V1_MARKER);
  if (v1Start === -1) {
    console.warn('  no v1 marker found — skipping');
    return false;
  }
  // v1 ends at the closing brace of the @media query. The line right after
  // the @media closing brace is `</style>` (preceded by other style content).
  // Strategy: find the closing brace of the @media (look for `padding: 12px 14px; }` then `}`).
  const mediaSentinel = '.sophie-callout { font-size: 13.5px; padding: 12px 14px; }';
  const mediaSentinelEnd = html.indexOf(mediaSentinel, v1Start);
  if (mediaSentinelEnd === -1) {
    console.warn('  no @media sentinel found — skipping');
    return false;
  }
  // The @media block closes with `}` on the next line after the sentinel
  const v1End = html.indexOf('}', mediaSentinelEnd + mediaSentinel.length);
  if (v1End === -1) {
    console.warn('  no @media closing brace — skipping');
    return false;
  }
  // Walk forward to include trailing newline
  let v1EndInclusive = v1End + 1;
  while (v1EndInclusive < html.length && html[v1EndInclusive] === '\n') v1EndInclusive++;

  html = html.slice(0, v1Start) + CSS_V2 + '\n' + html.slice(v1EndInclusive);
  console.log('  CSS v1 → v2 replaced');

  // 2. Intel callout: light → dark. Anchor by the unique "Three feeds" / "Drie feeds"
  //    pattern won't work (varies per locale). Use the IMG src of sophie + the
  //    fact that the intel callout sits between the `s-intro` close and the
  //    `grid-template-columns:1fr 1fr 1fr` line.
  //    Simpler: find every `<div class="sophie-callout">` whose immediately
  //    following line(s) up to its closing `</div>` is followed by the intel
  //    grid div. We'll handle it with a regex that matches sophie-callout
  //    blocks and check what follows.
  //
  //    Approach: find each `<div class="sophie-callout"` block, parse its
  //    content, and decide whether to add --dark based on what comes
  //    immediately after the block closes.
  const calloutOpenRe = /<div class="sophie-callout"([^>]*)>/g;
  const transforms = [];
  let m;
  while ((m = calloutOpenRe.exec(html)) !== null) {
    const startIdx = m.index;
    const openTagEnd = m.index + m[0].length;
    // Find the matching </div> — naive: find the next </div> after we've
    // counted matching <div>s. Each callout has 1 nested <div class="sophie-callout__body">.
    // So we look for the SECOND </div> after the start.
    const firstClose = html.indexOf('</div>', openTagEnd);
    if (firstClose === -1) continue;
    const secondClose = html.indexOf('</div>', firstClose + 6);
    if (secondClose === -1) continue;
    const blockEnd = secondClose + '</div>'.length;
    const afterBlock = html.slice(blockEnd, blockEnd + 400);

    // Detect context. Order matters.
    let variant = 'light';
    if (afterBlock.includes('grid-template-columns:1fr 1fr 1fr')) {
      variant = 'dark'; // intel callout precedes the 3-thumb grid
    } else if (afterBlock.includes('screenshot-connector.png')) {
      // The connector callout sits inside the left card; the screenshot
      // appears further down in the same row layout. Inside s-intel = dark.
      variant = 'dark';
    } else if (m[1].includes('background:rgba(255,255,255,0.06)')) {
      // Brief callout — was inline-styled dark
      variant = 'dark';
    }
    transforms.push({ startIdx, openTagEnd, attrs: m[1], variant });
  }

  // Apply transforms back-to-front so indices stay valid.
  transforms.reverse();
  for (const t of transforms) {
    if (t.variant === 'dark') {
      // Strip the inline color/background overrides we had for the Brief
      // callout (now handled by --dark modifier). Keep layout-only styles
      // like max-width / margin / margin-top.
      let attrs = t.attrs;
      // Remove any style attribute that contains color/background and rebuild
      // it without those declarations.
      const styleMatch = attrs.match(/\sstyle="([^"]*)"/);
      if (styleMatch) {
        const decls = styleMatch[1]
          .split(';')
          .map((d) => d.trim())
          .filter(Boolean)
          .filter((d) => !/^(background|color)\s*:/i.test(d));
        const newStyle = decls.length ? ` style="${decls.join(';')};"` : '';
        attrs = attrs.replace(styleMatch[0], newStyle);
      }
      const newOpen = `<div class="sophie-callout sophie-callout--dark"${attrs}>`;
      html = html.slice(0, t.startIdx) + newOpen + html.slice(t.openTagEnd);
    }
  }

  // 3. Strip inline color overrides on .sophie-callout__label inside dark
  //    variants (the --dark modifier handles it now).
  html = html.replace(
    /<span class="sophie-callout__label" style="color:#7aa3ff;">/g,
    '<span class="sophie-callout__label">'
  );

  // 4. Strip inline text-align on .sophie-callout__body (it was a leftover
  //    from the Brief callout fitting inside a `text-align:center` ancestor;
  //    the body div is already left-aligned by default flex layout).
  html = html.replace(
    /<div class="sophie-callout__body" style="text-align:left;">/g,
    '<div class="sophie-callout__body">'
  );

  if (html === original) {
    console.log('  no changes');
    return false;
  }

  // Sanity (only count outer container — class is exactly "sophie-callout"
  // or "sophie-callout sophie-callout--dark", not the __avatar/__body etc.)
  const calloutCount = (html.match(/<div class="sophie-callout(?: sophie-callout--dark)?"/g) || []).length;
  const darkCount = (html.match(/sophie-callout--dark/g) || []).length;
  console.log(`  callouts=${calloutCount}, dark=${darkCount}`);
  if (calloutCount !== 7) {
    console.error(`  ERROR: expected 7 callouts, got ${calloutCount} — not writing`);
    return false;
  }
  // Expected dark variants: intel + connector + brief = 3
  if (darkCount !== 3) {
    console.warn(`  WARNING: expected 3 dark variants, got ${darkCount}`);
  }

  fs.writeFileSync(absPath, html, 'utf8');
  console.log('  wrote');
  return true;
}

// ============================================================
// Drive
// ============================================================
const TARGETS = [
  'product.html',
  'nl/product.html',
  'fr/product.html',
  'de/product.html',
  'es/product.html',
  'pl/product.html',
];

let touched = 0;
for (const t of TARGETS) {
  const abs = path.join(ROOT, t);
  if (!fs.existsSync(abs)) {
    console.warn(`SKIP: ${abs} missing`);
    continue;
  }
  if (processFile(abs)) touched++;
}
console.log(`\nDone. ${touched}/${TARGETS.length} files updated.`);
