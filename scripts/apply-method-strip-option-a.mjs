#!/usr/bin/env node
// Collapse methodology-strip to Option A: minimal. Removes the 9-chip source
// list. Replaces sub-paragraph with a single clean sentence. CTA unchanged.
//
// Localised copy per file, idempotent (no-ops on re-run).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));

const COPY = {
  en: 'Every per-vertical constant cites a named public source.',
  nl: 'Elke per-vertical constante is verankerd aan een benoemde publieke bron.',
  fr: 'Chaque constante par vertical cite une source publique nommée.',
  de: 'Jede per-vertikale Konstante zitiert eine benannte öffentliche Quelle.',
  es: 'Cada constante por vertical cita una fuente pública nombrada.',
  pl: 'Każda per-vertical stała cytuje nazwane publiczne źródło.',
};

function processFile(absPath, locale) {
  let html = fs.readFileSync(absPath, 'utf8');
  const original = html;

  // 1. Replace the sub-paragraph content with the new minimal copy.
  // Matches: <p class="method-strip-sub">...</p>
  html = html.replace(
    /<p class="method-strip-sub">[\s\S]*?<\/p>/,
    `<p class="method-strip-sub">${COPY[locale]}</p>`
  );

  // 2. Remove the entire <div class="method-sources">...</div> block.
  html = html.replace(
    /\s*<div class="method-sources">[\s\S]*?<\/div>/,
    ''
  );

  if (html === original) {
    console.log(`  ${locale}: no change`);
    return false;
  }
  fs.writeFileSync(absPath, html, 'utf8');
  console.log(`  ${locale}: wrote (${original.length} → ${html.length} bytes)`);
  return true;
}

const TARGETS = [
  { file: 'intelligence.html', locale: 'en' },
  { file: 'nl/intelligence.html', locale: 'nl' },
  { file: 'fr/intelligence.html', locale: 'fr' },
  { file: 'de/intelligence.html', locale: 'de' },
  { file: 'es/intelligence.html', locale: 'es' },
  { file: 'pl/intelligence.html', locale: 'pl' },
];

let count = 0;
for (const t of TARGETS) {
  const abs = path.join(ROOT, t.file);
  if (processFile(abs, t.locale)) count++;
}
console.log(`\n${count}/${TARGETS.length} files updated.`);
