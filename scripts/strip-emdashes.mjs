#!/usr/bin/env node
// =============================================================================
// Em-dash sweep — minimize &mdash; and — usage across recent work
// =============================================================================
// Tom: "zo min mogelijk gebruiken, overal...ik haat die AI streep"
//
// Rule: replace em-dashes with commas (clause-break semantics). Most uses
// in our drafting are "X — Y" style which reads cleanly as "X, Y".
//
// Cleanup post-pass: collapse double commas, fix comma-period artefacts.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));

function stripFile(absPath) {
  let html = fs.readFileSync(absPath, 'utf8');
  const orig = html;

  // 1. HTML entity em-dash with spaces around it
  html = html.replace(/ &mdash; /g, ', ');
  // 2. Unicode em-dash with spaces around it
  html = html.replace(/ — /g, ', ');
  // 3. HTML entity em-dash without spaces (rare but exists)
  html = html.replace(/&mdash;/g, ', ');
  // 4. Unicode em-dash without spaces
  html = html.replace(/—/g, ', ');
  // 5. Clean up double commas + comma-period artefacts
  html = html.replace(/,\s*,/g, ',');
  html = html.replace(/,\s*\./g, '.');
  html = html.replace(/,\s*!/g, '!');
  html = html.replace(/,\s*\?/g, '?');
  // 6. Comma before closing tag becomes nothing (",</p>" → "</p>")
  html = html.replace(/,(\s*<\/[a-z]+>)/g, '$1');
  // 7. Comma immediately after opening quote inside attribute is broken JSON
  //    but JSON strings shouldn't be touched in normal flow.
  // 8. Mid-sentence ",  " (double space) → ", "
  html = html.replace(/,  +/g, ', ');

  if (html === orig) return { written: false, delta: 0 };
  fs.writeFileSync(absPath, html, 'utf8');
  return { written: true, delta: orig.length - html.length };
}

// Files to process: only the ones touched today
const TARGETS = [
  // Hub × 6 locales
  'intelligence.html',
  'nl/intelligence.html',
  'fr/intelligence.html',
  'de/intelligence.html',
  'es/intelligence.html',
  'pl/intelligence.html',
  // Marketplace × 6 locales
  'grip-marketplace.html',
  'nl/grip-marketplace.html',
  'fr/grip-marketplace.html',
  'de/grip-marketplace.html',
  'es/grip-marketplace.html',
  'pl/grip-marketplace.html',
  // Product × 6 locales (Sophie-callouts shipped today)
  'product.html',
  'nl/product.html',
  'fr/product.html',
  'de/product.html',
  'es/product.html',
  'pl/product.html',
  // Pricing × 6 locales (Tom didn't touch but the count is high)
  'pricing.html',
  'nl/pricing.html',
  'fr/pricing.html',
  'de/pricing.html',
  'es/pricing.html',
  'pl/pricing.html',
];

// New pillar articles × 6 locales
const NEW_PILLAR_SLUGS = [
  'grip-framework-calibration',
  'ai-answer-market-pipeline-generation',
  'per-vertical-calibration-gtm-framework',
  'sophie-second-brain-revenue',
  'from-diagnostic-to-operating-system',
];
for (const slug of NEW_PILLAR_SLUGS) {
  TARGETS.push(`intelligence/${slug}.html`);
  for (const loc of ['nl', 'fr', 'de', 'es', 'pl']) {
    TARGETS.push(`${loc}/intelligence/${slug}.html`);
  }
}

// Persona pages × 6 locales
const PERSONA_SLUGS = ['for-ceo', 'for-cro', 'for-cfo', 'for-cmo', 'for-investor', 'for-consultant', 'for-newcomer'];
for (const slug of PERSONA_SLUGS) {
  TARGETS.push(`intelligence/${slug}.html`);
  for (const loc of ['nl', 'fr', 'de', 'es', 'pl']) {
    TARGETS.push(`${loc}/intelligence/${slug}.html`);
  }
}

let written = 0, totalDelta = 0;
for (const t of TARGETS) {
  const abs = path.join(ROOT, t);
  if (!fs.existsSync(abs)) continue;
  const { written: w, delta } = stripFile(abs);
  if (w) {
    written++;
    totalDelta += delta;
  }
}
console.log(`Stripped em-dashes in ${written}/${TARGETS.length} files. Total bytes saved: ${totalDelta}`);
