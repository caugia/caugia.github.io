#!/usr/bin/env node
// =============================================================================
// Citation cleanup on persona pages
// =============================================================================
// Tom: "die citations moet je ook mee ophouden op hoofdpagina's...
//      totaal niet interessant...veel slimmer mee omgaan"
//
// Persona pages function as main pages for their role-audience. They should
// NOT list named sources (Bessemer/OpenView/Drivepoint/Acrew/SPI/Kennedy/
// FT Partners). Those references live in the calibration article only.
//
// This script replaces specific name-drops with generic-but-credible phrases
// that preserve the substantive claim while routing sourcing curiosity to
// the methodology article.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));

// Replacement table. Brand-name-stripped phrasings.
// Each entry: [regex, replacement]
const REPLACEMENTS = [
  // Vertical-focus paragraphs in persona pages
  ['the Bessemer Cloud Index 2024 anchors our drag sensitivity. Rule-of-40 dispersion is the public signal that calibrates K_DRAG = 0.60 for your vertical.',
   'the calibration is anchored to public Rule-of-40 dispersion data. K_DRAG = 0.60 reflects the dispersion pattern observed for the vertical.'],
  ['Drivepoint cohort studies confirm a 4-month drag-to-fix half-life. Your leakage estimate is bounded by the same cohort-derived recovery factors.',
   'DTC recovery research puts the drag-to-fix half-life at roughly 4 months. Your leakage estimate is bounded by the same cohort-derived recovery factors.'],
  ['Acrew Capital 2024 puts compliance recovery at a 14-month median. The simulator',
   'Fintech recovery research puts the median time-to-recover from a compliance block at roughly 14 months. The simulator'],
  ["SPI's PS Maturity Benchmark codifies the linear-scaling reality. K_DRAG = 0.50 is the lowest of the four verticals.",
   'PS maturity research codifies the linear-scaling reality. K_DRAG = 0.50 is the lowest of the four verticals.'],
  ['SPI&rsquo;s PS Maturity Benchmark codifies the linear-scaling reality. K_DRAG = 0.50 is the lowest of the four verticals.',
   'PS maturity research codifies the linear-scaling reality. K_DRAG = 0.50 is the lowest of the four verticals.'],
  // CFO FAQ confidence band
  ['derived from Bessemer&rsquo;s 2024 SaaS forecasting playbook prediction-interval methodology',
   'derived from the SaaS forecasting playbook prediction-interval methodology'],
  ["derived from Bessemer's 2024 SaaS forecasting playbook prediction-interval methodology",
   'derived from the SaaS forecasting playbook prediction-interval methodology'],
  // CFO FAQ "Can the board independently verify"
  ['cited to a named public source, Bessemer Cloud Index, OpenView SaaS Benchmarks, Drivepoint, Acrew, FT Partners, SPI, Kennedy. The methodology page lists each constant with its anchor.',
   'cited to a named public source. The methodology article lists each constant with its anchor.'],
  // Investor page references
  ['Caugia&rsquo;s constants are calibrated to Bessemer Cloud Index 2024 dispersion and OpenView SaaS Benchmarks. Same anchors most B2B SaaS DD frameworks reach for, but applied deterministically.',
   'Caugia&rsquo;s constants are calibrated to the public Rule-of-40 dispersion data and SaaS benchmark literature. Same anchors most B2B SaaS DD frameworks reach for, but applied deterministically.'],
  ["Caugia's constants are calibrated to Bessemer Cloud Index 2024 dispersion and OpenView SaaS Benchmarks. Same anchors most B2B SaaS DD frameworks reach for, but applied deterministically.",
   "Caugia's constants are calibrated to the public Rule-of-40 dispersion data and SaaS benchmark literature. Same anchors most B2B SaaS DD frameworks reach for, but applied deterministically."],
  ['Drivepoint cohort data (n=188, EUR 5-15M ARR) anchors the per-vertical constants. DTC drag-to-fix half-life is roughly 4 months vs SaaS&rsquo;s 9.',
   'DTC cohort data (n=188, EUR 5-15M ARR) anchors the per-vertical constants. Drag-to-fix half-life is roughly 4 months vs SaaS&rsquo;s 9.'],
  ["Drivepoint cohort data (n=188, EUR 5-15M ARR) anchors the per-vertical constants. DTC drag-to-fix half-life is roughly 4 months vs SaaS's 9.",
   "DTC cohort data (n=188, EUR 5-15M ARR) anchors the per-vertical constants. Drag-to-fix half-life is roughly 4 months vs SaaS's 9."],
  ['the variables that explain post-investment outcome variance per Acrew 2024',
   'the variables that explain post-investment outcome variance per Fintech recovery research'],
  ['SPI and Kennedy anchor the calibration. K_DRAG = 0.50 reflects the absence of compounding flywheel risk.',
   'PS maturity benchmarks anchor the calibration. K_DRAG = 0.50 reflects the absence of compounding flywheel risk.'],
  // Investor FAQ "How is the math defensible to my IC?"
  ['Every constant in the framework, K_DRAG, dimension weights, recovery factors, cites a named public source. The methodology page documents each anchor. The Phase 2 cohort backtest in Q3 2026 narrows the confidence bands against observed customer outcomes.',
   'Every constant in the framework, K_DRAG, dimension weights, recovery factors, cites a named public source. The calibration article documents each anchor. The Phase 2 cohort backtest in Q3 2026 narrows the confidence bands against observed customer outcomes.'],
  // Consultant page references (per-vertical advisor positioning)
  ['Caugia surfaces structural diagnoses calibrated against the same Bessemer and OpenView benchmarks your clients already trust.',
   'Caugia surfaces structural diagnoses calibrated against the SaaS benchmark literature your clients already trust.'],
  ['Caugia uses Drivepoint cohort data and Triple Whale State of DTC 2024 as anchor benchmarks, recognisable to the operators you advise.',
   'Caugia uses DTC cohort data and the State of DTC literature as anchor benchmarks, recognisable to the operators you advise.'],
  ['Caugia&rsquo;s compliance-aware calibration (Acrew, FT Partners, Plaid/Stripe Atlas data) maps to the regulatory realities your clients operate under.',
   'Caugia&rsquo;s compliance-aware calibration maps to the regulatory realities your clients operate under.'],
  ["Caugia's compliance-aware calibration (Acrew, FT Partners, Plaid/Stripe Atlas data) maps to the regulatory realities your clients operate under.",
   "Caugia's compliance-aware calibration maps to the regulatory realities your clients operate under."],
  ['Caugia&rsquo;s SPI and Kennedy-anchored ProfSvc calibration is the language your clients already use internally.',
   'Caugia&rsquo;s PS-maturity-anchored ProfSvc calibration is the language your clients already use internally.'],
  ["Caugia's SPI and Kennedy-anchored ProfSvc calibration is the language your clients already use internally.",
   "Caugia's PS-maturity-anchored ProfSvc calibration is the language your clients already use internally."],
  // Newcomer page references
  ['calibrated against the Bessemer Cloud Index and OpenView SaaS Benchmarks. Performance dominates the model.',
   'calibrated against public SaaS benchmark literature. Performance dominates the model.'],
  ['calibrated against Drivepoint cohort data and Triple Whale State of DTC. Performance is existential',
   'calibrated against DTC cohort data and the State of DTC literature. Performance is existential'],
];

const TARGETS = [];
const personaSlugs = ['for-ceo', 'for-cro', 'for-cfo', 'for-cmo', 'for-investor', 'for-consultant', 'for-newcomer'];
const locales = ['', 'nl', 'fr', 'de', 'es', 'pl'];
for (const slug of personaSlugs) {
  for (const loc of locales) {
    const p = loc === '' ? `intelligence/${slug}.html` : `${loc}/intelligence/${slug}.html`;
    TARGETS.push(p);
  }
}

let changed = 0;
let totalSubs = 0;
for (const t of TARGETS) {
  const abs = path.join(ROOT, t);
  if (!fs.existsSync(abs)) continue;
  let html = fs.readFileSync(abs, 'utf8');
  const orig = html;
  let subsInFile = 0;
  for (const [find, replace] of REPLACEMENTS) {
    const before = html;
    html = html.split(find).join(replace);
    if (html !== before) {
      subsInFile += (before.length - html.length === 0 ? 1 : Math.ceil((before.length - html.length) / 10));
    }
  }
  if (html !== orig) {
    fs.writeFileSync(abs, html, 'utf8');
    changed++;
    totalSubs += subsInFile;
  }
}
console.log(`Citation cleanup: ${changed}/${TARGETS.length} persona files updated.`);
