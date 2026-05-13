#!/usr/bin/env node
// Locale-agnostic brand-name sweep across all 42 persona pages.
// Replaces specific named-source strings with neutral equivalents.
// Order matters: longer specific phrases first to avoid mid-replacement breakage.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));

// Long phrases first
const REPLACEMENTS = [
  // Bessemer
  ['Bessemer Cloud Index 2024 dispersion', 'public Rule-of-40 dispersion data'],
  ['Bessemer Cloud Index 2024', 'public Rule-of-40 dispersion data'],
  ['Bessemer Cloud Index', 'public Rule-of-40 dispersion data'],
  ['Bessemer&rsquo;s 2024 SaaS forecasting playbook', 'the SaaS forecasting playbook'],
  ["Bessemer's 2024 SaaS forecasting playbook", 'the SaaS forecasting playbook'],
  ['Bessemer 2024', 'the public benchmark literature'],
  // OpenView
  ['OpenView SaaS Benchmarks 2024', 'public SaaS benchmark literature'],
  ['OpenView SaaS Benchmarks', 'public SaaS benchmark literature'],
  ['OpenView', 'public SaaS benchmark literature'],
  // Drivepoint
  ['Drivepoint cohort recovery studies 2022-2024', 'DTC recovery cohort studies'],
  ['Drivepoint cohort recovery studies', 'DTC recovery cohort studies'],
  ['Drivepoint cohort studies', 'DTC recovery cohort studies'],
  ['Drivepoint cohort data', 'DTC cohort data'],
  ['Drivepoint margin studies', 'DTC margin studies'],
  ['Drivepoint', 'DTC research'],
  // Triple Whale
  ['Triple Whale State of DTC 2024', 'the State of DTC literature'],
  ['Triple Whale State of DTC', 'the State of DTC literature'],
  ['Triple Whale&rsquo;s State of DTC 2024', 'the State of DTC literature'],
  ["Triple Whale's State of DTC 2024", 'the State of DTC literature'],
  ['Triple Whale', 'DTC research'],
  // Acrew
  ['Acrew Capital State of Fintech 2024', 'the State of Fintech literature'],
  ['Acrew Capital&rsquo;s State of Fintech 2024', 'the State of Fintech literature'],
  ["Acrew Capital's State of Fintech 2024", 'the State of Fintech literature'],
  ['Acrew Capital 2024', 'Fintech recovery research'],
  ['Acrew 2024', 'Fintech recovery research'],
  ['Acrew Capital', 'Fintech recovery research'],
  ['Acrew', 'Fintech recovery research'],
  // FT Partners
  ['FT Partners B2B Fintech Benchmarks 2024', 'B2B Fintech benchmark literature'],
  ['FT Partners', 'B2B Fintech research'],
  // SPI / Kennedy / Source Global / Hinge
  ['SPI Annual PS Operational Excellence 2024', 'PS operational excellence research'],
  ['SPI&rsquo;s PS Maturity Benchmark 2024', 'PS maturity benchmark research'],
  ["SPI's PS Maturity Benchmark 2024", 'PS maturity benchmark research'],
  ['SPI&rsquo;s PS Maturity Benchmark', 'PS maturity benchmark research'],
  ["SPI's PS Maturity Benchmark", 'PS maturity benchmark research'],
  ['SPI PS Maturity Benchmark', 'PS maturity benchmark research'],
  ['Service Performance Insights PS Maturity Benchmark 2024', 'PS maturity benchmark research'],
  ['Service Performance Insights', 'PS maturity research'],
  ['SPI Research', 'PS maturity research'],
  ['SPI and Kennedy', 'PS maturity benchmarks'],
  ['Kennedy Pulse Survey 2024', 'consulting pulse research'],
  ['Kennedy Pulse Survey', 'consulting pulse research'],
  ['Kennedy Pulse', 'consulting pulse research'],
  ['Kennedy', 'consulting pulse research'],
  ['Source Global', 'consulting research'],
  ['Hinge', 'professional-services research'],
  // Plaid + Stripe Atlas
  ['Plaid + Stripe Atlas onboarding cohort data 2022-2024', 'public onboarding cohort data'],
  ['Plaid + Stripe Atlas onboarding cohort data', 'public onboarding cohort data'],
  ['Plaid + Stripe Atlas', 'onboarding cohort'],
  ['Plaid', 'fintech onboarding research'],
  ['Stripe Atlas', 'startup onboarding research'],
  // McKinsey/Bain/BCG — these stay if they're in legitimate comparison context,
  // but on persona pages we strip the trio to avoid name-drop framing.
  // The "Caugia vs McKinsey or BCG" FAQ keeps the names as it's a comparison Q.
  // (Don't touch standalone McKinsey/BCG/Bain mentions outside FAQ context.)
];

// Cleanup duplicates from chained replacements (e.g. "Acrew Acrew" if SPI replaced
// to "PS maturity research" and Kennedy also "PS maturity research" appeared together)
const POST_CLEANUP = [
  [/public Rule-of-40 dispersion data and public Rule-of-40 dispersion data/g, 'public Rule-of-40 dispersion data'],
  [/public Rule-of-40 dispersion data, public Rule-of-40 dispersion data/g, 'public Rule-of-40 dispersion data'],
  [/public SaaS benchmark literature, public SaaS benchmark literature/g, 'public SaaS benchmark literature'],
  [/DTC research, DTC research/g, 'DTC research'],
  [/Fintech recovery research, Fintech recovery research/g, 'Fintech recovery research'],
  [/consulting pulse research, consulting pulse research/g, 'consulting pulse research'],
  [/PS maturity research, PS maturity research/g, 'PS maturity research'],
  [/, and consulting pulse research/g, ' and consulting pulse research'],
  // Cleanup: "public Rule-of-40 dispersion data, public SaaS benchmark literature, ..."
  // would be a citation list. Replace with cleaner phrasing.
  [/public Rule-of-40 dispersion data, public SaaS benchmark literature, DTC research, Fintech recovery research, B2B Fintech research, PS maturity research, consulting pulse research/g, 'named public benchmark sources'],
];

const TARGETS = [];
const personaSlugs = ['for-ceo', 'for-cro', 'for-cfo', 'for-cmo', 'for-investor', 'for-consultant', 'for-newcomer'];
const locales = ['', 'nl', 'fr', 'de', 'es', 'pl'];
for (const slug of personaSlugs) {
  for (const loc of locales) {
    TARGETS.push(loc === '' ? `intelligence/${slug}.html` : `${loc}/intelligence/${slug}.html`);
  }
}

let changed = 0;
for (const t of TARGETS) {
  const abs = path.join(ROOT, t);
  if (!fs.existsSync(abs)) continue;
  let html = fs.readFileSync(abs, 'utf8');
  const orig = html;
  for (const [find, replace] of REPLACEMENTS) {
    html = html.split(find).join(replace);
  }
  for (const [regex, replace] of POST_CLEANUP) {
    html = html.replace(regex, replace);
  }
  if (html !== orig) {
    fs.writeFileSync(abs, html, 'utf8');
    changed++;
  }
}
console.log(`Brand-name sweep: ${changed}/${TARGETS.length} persona files updated.`);
