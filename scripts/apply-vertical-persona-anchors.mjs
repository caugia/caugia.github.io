#!/usr/bin/env node
// =============================================================================
// Phase 3.2 — Persona-anchor section on every vertical-page × 6 locales
// =============================================================================
// Inserts a compact "By role" persona-card row before the final CTA section
// of each vertical landing page. Reuses the localised wayfinder copy.
//
// Vertical pages: saas-b2b.html / dtc.html / fintech.html / professional-services.html
// Locales: root (EN) + nl/fr/de/es/pl
// Total patches: 4 × 6 = 24

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));

// Reuse already-translated wayfinder strings (NL/FR/DE/ES/PL).
const cache = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'translations-intelligence-phase-12.json'), 'utf8'));

// EN source for the persona-strip — slightly different framing than the hub's
// wayfinder (this is "from your vertical's POV, see your role's perspective")
const EN_STRINGS = {
  section_h2: 'Read the GTM intelligence by role',
  section_sub: 'Same framework, different lens. Pick your role for a curated reading path.',

  // Persona labels reused from wayfinder
  ceo_role: 'CEO &middot; Founder', ceo_short: 'CEO/Founder reading path',
  cro_role: 'CRO &middot; VP Sales', cro_short: 'CRO/VP Sales reading path',
  cfo_role: 'CFO', cfo_short: 'CFO reading path',
  cmo_role: 'CMO', cmo_short: 'CMO reading path',
  investor_role: 'Investor &middot; VC/PE', investor_short: 'Investor reading path',
  consultant_role: 'Consultant &middot; Partner', consultant_short: 'Consultant reading path',
  newcomer_role: 'New here', newcomer_short: 'Start with the basics',
};

// Localised strings — extract from the wayfinder cache when available,
// fall back to English short labels for the new "_short" fields.
function localiseFor(loc) {
  if (loc === 'en') return EN_STRINGS;
  const w = cache[loc] || {};

  // Quick translations for the new strings (section header + short labels)
  // Hardcoded per locale to avoid another OpenAI roundtrip.
  const overrides = {
    nl: {
      section_h2: 'Lees de GTM-intelligence per rol',
      section_sub: 'Hetzelfde framework, een andere lens. Kies je rol voor een gericht leespad.',
      ceo_short: 'CEO/Founder leespad',
      cro_short: 'CRO/VP Sales leespad',
      cfo_short: 'CFO leespad',
      cmo_short: 'CMO leespad',
      investor_short: 'Investor leespad',
      consultant_short: 'Consultant leespad',
      newcomer_short: 'Start met de basics',
    },
    fr: {
      section_h2: "Lire l'intelligence GTM par rôle",
      section_sub: "Même framework, autre lentille. Choisissez votre rôle pour un parcours de lecture ciblé.",
      ceo_short: 'Parcours CEO/Fondateur',
      cro_short: 'Parcours CRO/VP Sales',
      cfo_short: 'Parcours CFO',
      cmo_short: 'Parcours CMO',
      investor_short: "Parcours Investisseur",
      consultant_short: 'Parcours Consultant',
      newcomer_short: 'Commencez par les bases',
    },
    de: {
      section_h2: 'GTM-Intelligence nach Rolle lesen',
      section_sub: 'Dasselbe Framework, ein anderer Blickwinkel. Wählen Sie Ihre Rolle für einen kuratierten Lesepfad.',
      ceo_short: 'CEO/Gründer Lesepfad',
      cro_short: 'CRO/VP Sales Lesepfad',
      cfo_short: 'CFO Lesepfad',
      cmo_short: 'CMO Lesepfad',
      investor_short: 'Investoren-Lesepfad',
      consultant_short: 'Consultant-Lesepfad',
      newcomer_short: 'Mit den Grundlagen starten',
    },
    es: {
      section_h2: 'Lee la inteligencia GTM por rol',
      section_sub: 'El mismo framework, otra lente. Elige tu rol para una ruta de lectura curada.',
      ceo_short: 'Ruta CEO/Fundador',
      cro_short: 'Ruta CRO/VP Sales',
      cfo_short: 'Ruta CFO',
      cmo_short: 'Ruta CMO',
      investor_short: 'Ruta Inversor',
      consultant_short: 'Ruta Consultor',
      newcomer_short: 'Empieza por lo básico',
    },
    pl: {
      section_h2: 'Czytaj inteligencję GTM według roli',
      section_sub: 'Ten sam framework, inna perspektywa. Wybierz swoją rolę dla wyselekcjonowanej ścieżki lektury.',
      ceo_short: 'Ścieżka CEO/Założyciel',
      cro_short: 'Ścieżka CRO/VP Sales',
      cfo_short: 'Ścieżka CFO',
      cmo_short: 'Ścieżka CMO',
      investor_short: 'Ścieżka Inwestora',
      consultant_short: 'Ścieżka Konsultanta',
      newcomer_short: 'Zacznij od podstaw',
    },
  };

  return {
    section_h2: overrides[loc].section_h2,
    section_sub: overrides[loc].section_sub,
    ceo_role: w.wf_card2_role || EN_STRINGS.ceo_role,
    ceo_short: overrides[loc].ceo_short,
    cro_role: w.wf_card3_role || EN_STRINGS.cro_role,
    cro_short: overrides[loc].cro_short,
    cfo_role: w.wf_card4_role || EN_STRINGS.cfo_role,
    cfo_short: overrides[loc].cfo_short,
    cmo_role: w.wf_card5_role || EN_STRINGS.cmo_role,
    cmo_short: overrides[loc].cmo_short,
    investor_role: w.wf_card6_role || EN_STRINGS.investor_role,
    investor_short: overrides[loc].investor_short,
    consultant_role: w.wf_card7_role || EN_STRINGS.consultant_role,
    consultant_short: overrides[loc].consultant_short,
    newcomer_role: w.wf_card1_role || EN_STRINGS.newcomer_role,
    newcomer_short: overrides[loc].newcomer_short,
  };
}

function intelPath(loc) {
  return loc === 'en' ? 'intelligence' : '../intelligence';
}

function personaSectionHtml(loc, s) {
  const ipath = intelPath(loc);
  return `
<section class="s-persona-anchors" style="padding:64px 0;background:#f8fafc;border-top:1px solid var(--line);border-bottom:1px solid var(--line);">
  <div class="container" style="max-width:960px;">
    <div style="text-align:center;margin-bottom:28px;">
      <h2 style="font-family:Merriweather,serif;font-size:1.5rem;font-weight:900;color:#0f172a;margin:0 0 8px;line-height:1.25;">${s.section_h2}</h2>
      <p style="font-size:.92rem;color:#64748b;margin:0;max-width:580px;margin-left:auto;margin-right:auto;line-height:1.55;">${s.section_sub}</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">
      <a href="${ipath}/for-newcomer.html" style="text-decoration:none;background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px 16px;display:flex;flex-direction:column;gap:4px;transition:all .18s;">
        <span style="font-size:.62rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);">${s.newcomer_role}</span>
        <span style="font-size:.84rem;font-weight:700;color:#0f172a;line-height:1.3;">${s.newcomer_short} &rarr;</span>
      </a>
      <a href="${ipath}/for-ceo.html" style="text-decoration:none;background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px 16px;display:flex;flex-direction:column;gap:4px;transition:all .18s;">
        <span style="font-size:.62rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);">${s.ceo_role}</span>
        <span style="font-size:.84rem;font-weight:700;color:#0f172a;line-height:1.3;">${s.ceo_short} &rarr;</span>
      </a>
      <a href="${ipath}/for-cro.html" style="text-decoration:none;background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px 16px;display:flex;flex-direction:column;gap:4px;transition:all .18s;">
        <span style="font-size:.62rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);">${s.cro_role}</span>
        <span style="font-size:.84rem;font-weight:700;color:#0f172a;line-height:1.3;">${s.cro_short} &rarr;</span>
      </a>
      <a href="${ipath}/for-cfo.html" style="text-decoration:none;background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px 16px;display:flex;flex-direction:column;gap:4px;transition:all .18s;">
        <span style="font-size:.62rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);">${s.cfo_role}</span>
        <span style="font-size:.84rem;font-weight:700;color:#0f172a;line-height:1.3;">${s.cfo_short} &rarr;</span>
      </a>
      <a href="${ipath}/for-cmo.html" style="text-decoration:none;background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px 16px;display:flex;flex-direction:column;gap:4px;transition:all .18s;">
        <span style="font-size:.62rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);">${s.cmo_role}</span>
        <span style="font-size:.84rem;font-weight:700;color:#0f172a;line-height:1.3;">${s.cmo_short} &rarr;</span>
      </a>
      <a href="${ipath}/for-investor.html" style="text-decoration:none;background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px 16px;display:flex;flex-direction:column;gap:4px;transition:all .18s;">
        <span style="font-size:.62rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);">${s.investor_role}</span>
        <span style="font-size:.84rem;font-weight:700;color:#0f172a;line-height:1.3;">${s.investor_short} &rarr;</span>
      </a>
      <a href="${ipath}/for-consultant.html" style="text-decoration:none;background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px 16px;display:flex;flex-direction:column;gap:4px;transition:all .18s;">
        <span style="font-size:.62rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);">${s.consultant_role}</span>
        <span style="font-size:.84rem;font-weight:700;color:#0f172a;line-height:1.3;">${s.consultant_short} &rarr;</span>
      </a>
    </div>
  </div>
</section>`;
}

// Find the CTA section "s5" and insert persona-anchor section BEFORE it.
function applyToFile(absPath, locale, s) {
  let html = fs.readFileSync(absPath, 'utf8');
  if (html.includes('s-persona-anchors')) {
    console.log(`  ${absPath}: already has anchors, skipping`);
    return false;
  }

  // Anchor: the final CTA section ("s5")
  const ctaMatch = html.match(/<section class="s5">/);
  if (!ctaMatch) {
    console.warn(`  ${absPath}: no <section class="s5"> found, skipping`);
    return false;
  }
  const insertAt = ctaMatch.index;
  html = html.slice(0, insertAt) + personaSectionHtml(locale, s) + '\n\n' + html.slice(insertAt);
  fs.writeFileSync(absPath, html, 'utf8');
  console.log(`  ${absPath}: wrote`);
  return true;
}

// Drive
const VERTICALS = ['saas-b2b.html', 'dtc.html', 'fintech.html', 'professional-services.html'];
const LOCALES = ['en', 'nl', 'fr', 'de', 'es', 'pl'];

for (const loc of LOCALES) {
  const s = localiseFor(loc);
  for (const v of VERTICALS) {
    const abs = loc === 'en' ? path.join(ROOT, v) : path.join(ROOT, loc, v);
    if (!fs.existsSync(abs)) {
      console.warn(`  SKIP ${abs} missing`);
      continue;
    }
    applyToFile(abs, loc, s);
  }
}
console.log('\nDone.');
