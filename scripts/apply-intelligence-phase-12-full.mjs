#!/usr/bin/env node
// =============================================================================
// Phase 1+2 hub redesign — applied to 5 locales (nl/fr/de/es/pl)
// =============================================================================
// EN intelligence.html was edited directly. This script applies the same
// structural changes (Wayfinder, FAQ, About panel + schema markup + CSS)
// to the 5 locale files with native-translated copy via OpenAI.
//
// Idempotent: skips locales that already have .wayfinder class present.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));

const OPENAI_KEY = fs.readFileSync(path.resolve(ROOT, '..', 'grip-os', '.env.local'), 'utf8')
  .match(/^OPENAI_API_KEY=(.+)$/m)[1].trim().replace(/^["']|["']$/g, '');

// =============================================================
// EN source strings — translate to each locale
// =============================================================
const EN_STRINGS = {
  // Wayfinder header
  wf_h3: 'Where should you start?',
  wf_sub: 'Pick your role. Each path leads to the right first read.',

  // Wayfinder cards (8)
  wf_card1_role: 'New here',
  wf_card1_headline: 'Start with the category definition',
  wf_card1_desc: 'What a GTM diagnostic is, and how it differs from consulting.',

  wf_card2_role: 'CEO &middot; Founder',
  wf_card2_headline: 'From diagnostic to operating system',
  wf_card2_desc: 'Why decks change nothing, and what a GTM OS does instead.',

  wf_card3_role: 'CRO &middot; VP Sales',
  wf_card3_headline: 'Where revenue actually leaks',
  wf_card3_desc: 'The four levers that move pipeline, conversion, pricing, and expansion.',

  wf_card4_role: 'CFO',
  wf_card4_headline: 'GTM unit economics',
  wf_card4_desc: 'When growth costs more than it should &mdash; and how to tell.',

  wf_card5_role: 'CMO',
  wf_card5_headline: "Marketing's role in revenue architecture",
  wf_card5_desc: 'Marketing spans four GRIP pillars. The CMO diagnostic is structural.',

  wf_card6_role: 'Investor &middot; VC/PE',
  wf_card6_headline: 'GTM due diligence: what most miss',
  wf_card6_desc: 'Product, market, team get rigorous diligence. GTM rarely does.',

  wf_card7_role: 'Consultant &middot; Partner',
  wf_card7_headline: 'Why advisory needs diagnostic infrastructure',
  wf_card7_desc: 'Referral links are not leverage. Portfolio visibility is.',

  wf_card8_role: 'Methodology',
  wf_card8_headline: 'How we calibrate the GRIP Framework',
  wf_card8_desc: 'Per-vertical constants, named public sources, audit-ready math.',

  wf_arrow: 'Read &rarr;',

  // FAQ
  faq_eyebrow: 'Frequently asked',
  faq_h2: 'Caugia, GRIP, and how it all connects',
  faq_intro: 'Short answers to the questions buyers, investors, and partners ask first. Each links to the full reading.',

  // 10 FAQ Q+A+link-label triplets
  faq_q1: 'What is a GTM diagnostic?',
  faq_a1: 'A GTM diagnostic is a structured assessment of your Go-to-Market system that identifies which structural constraint is currently limiting revenue, quantifies the cost of inaction, and sequences the intervention. It is different from consulting because the output is a scored, repeatable diagnosis, not an opinion.',
  faq_l1: 'Read the category definition &rarr;',

  faq_q2: 'What is the GRIP Framework?',
  faq_a2: "GRIP is Caugia's diagnostic framework. Four dimensions &mdash; Guidance, Resources, Implementation, Performance &mdash; and twelve pillars underneath them. The structure is invariant across industries; the calibration constants are per vertical.",
  faq_l2: 'Read the framework &rarr;',

  faq_q3: 'How does Caugia calibrate the framework per industry?',
  faq_a3: 'Each vertical (SaaS B2B, DTC, Fintech B2B, Professional Services) has its own K_DRAG, dimension weights, and recovery factors, anchored to named public sources from the public benchmark literature. Every constant is auditable against a named study.',
  faq_l3: 'Read the calibration &rarr;',

  faq_q4: 'What is the AI Answer Market?',
  faq_a4: 'The AI Answer Market is the layer where AI engines (ChatGPT, Claude, Perplexity, Gemini) synthesise vendor recommendations for B2B buyers. Roughly 40% of buyers now start there, not on Google. Caugia tracks AAM share-of-voice weekly across 5 engines and 8 query categories.',
  faq_l4: 'Read the AAM article &rarr;',

  faq_q5: 'What is Sophie?',
  faq_a5: 'Sophie is the AI advisor inside the Caugia OS. She has read every dimension of your operation (assessment, simulator, connector signal, framework calibration). Every answer is tagged as fact, inference, or hypothesis so you can read confidence directly off the response.',
  faq_l5: 'Read about Sophie &rarr;',

  faq_q6: 'How is Caugia different from McKinsey or BCG?',
  faq_a6: 'Traditional consultants produce decks. Caugia is a GTM operating system: a deterministic engine that runs continuously, recalculates the diagnosis on signal change, and produces an auto-generated board brief from live numbers. The math is published; the constants are cited.',
  faq_l6: 'Read the comparison &rarr;',

  faq_q7: 'Why does GTM need per-vertical calibration?',
  faq_a7: 'SaaS B2B compounds through retention. DTC turns inventory in 90 days. Fintech B2B is gated by compliance. Professional Services scales linearly with utilisation. One set of constants cannot fit four different physical realities.',
  faq_l7: 'Read the per-vertical breakdown &rarr;',

  faq_q8: 'What is a GTM Operating System?',
  faq_a8: 'A GTM Operating System is the daily surface on which revenue operations run &mdash; a living diagnosis, a routed action cascade, a confidence-banded simulator, and an auto-generated board brief. Different from a diagnostic deck, which is a one-time photograph.',
  faq_l8: 'Read the category shift &rarr;',

  faq_q9: 'How long does a Caugia diagnostic take?',
  faq_a9: 'The Level 1 GTM Due Diligence (external-signal only, no company cooperation) returns in 1 to 2 minutes. The full scored diagnostic with 265 assessment questions and a 45-page report is delivered within one hour after submission.',
  faq_l9: 'See the diagnostic &rarr;',

  faq_q10: 'Does Caugia work for industries other than SaaS B2B?',
  faq_a10: 'Yes. Same GRIP framework, four sets of calibration constants. SaaS B2B, DTC, Fintech B2B, and Professional Services each have their own per-vertical numbers. Per-vertical role-articles roll out from Q3 2026 alongside the cohort backtest.',
  faq_l10: 'Read the per-vertical breakdown &rarr;',

  // About Caugia
  about_eyebrow: 'About Caugia',
  about_h2: 'We are building the GTM Operating System for B2B revenue teams.',
  about_body: 'Caugia is a deterministic GTM diagnostic and operating system, calibrated against the public benchmark literature across SaaS B2B, DTC, Fintech B2B, and Professional Services. We publish the math behind every constant we use, version-controlled and auditable. The discipline of publishing the math is the product.',
  about_cta: 'Meet the team &rarr;',
};

const LOCALES = ['nl', 'fr', 'de', 'es', 'pl'];
const LOCALE_NAMES = {
  nl: 'Dutch (Netherlands), informal "je"',
  fr: 'French (France), formal "vous"',
  de: 'German (DE), formal "Sie"',
  es: 'Spanish (Spain), informal "tú"',
  pl: 'Polish (Poland), informal "ty" but professional register',
};

// =============================================================
// OpenAI translation per locale
// =============================================================
async function translate(locale) {
  const enJson = JSON.stringify(EN_STRINGS, null, 2);
  const prompt = `Translate this English JSON of HTML-fragment strings into ${LOCALE_NAMES[locale]}.

RULES:
1. Preserve HTML entities exactly: &mdash; &nbsp; &middot; &laquo; &raquo; &lsquo; &rsquo; &larr; &rarr; &amp; &lt; &gt; &euro;
2. Preserve inline HTML tags: <strong></strong>, <em></em>, <code></code>
3. Keep UNCHANGED: Caugia, GRIP, GRIP Framework, GTM, AI Answer Market, AAM, ChatGPT, Claude, Perplexity, Gemini, Google, Sophie, McKinsey, BCG, SaaS B2B, DTC, Fintech B2B, Professional Services, ProfSvc, B2B SaaS, K_DRAG, CRO, CFO, CMO, CEO, VP Sales, VP, GTM Operating System, GTM OS, Q3 2026, Level 1, GTM Due Diligence.
4. Preserve numerics: 40%, 90 days, 4 dimensions, 12 pillars, 1 to 2 minutes, one hour, 265, 45-page, 5 engines, 8 query categories.
5. Output ONLY valid JSON with same keys, no markdown fences.
6. Voice: professional, clean, marketing-magazine quality, Nova-energetic.
7. NATIVE diakritieken always (German ä/ö/ü/ß, Polish ą/ć/ę/ł/ń/ó/ś/ź/ż, Spanish ñ/á/é/í/ó/ú, French accents).

Source:
${enJson}`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${OPENAI_KEY}` },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.3,
    }),
  });
  if (!res.ok) throw new Error(`OpenAI ${locale} ${res.status}`);
  const parsed = JSON.parse((await res.json()).choices[0].message.content);
  const missing = Object.keys(EN_STRINGS).filter((k) => !(k in parsed));
  if (missing.length) throw new Error(`${locale} missing keys: ${missing.slice(0, 5).join(',')}`);
  return parsed;
}

// =============================================================
// New CSS block (same across locales)
// =============================================================
const NEW_CSS = `    /* === Wayfinder persona grid === */
    .wayfinder{max-width:960px;margin:0 auto 56px;padding:0 16px}
    .wayfinder-head{text-align:center;margin-bottom:22px}
    .wayfinder-head h3{font-family:Merriweather,serif;font-size:1.45rem;font-weight:900;color:#0f172a;margin:0 0 6px;line-height:1.25}
    .wayfinder-head p{font-size:.92rem;color:#64748b;margin:0}
    .wayfinder-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
    .wayfinder-card{text-decoration:none;background:#fff;border:1px solid var(--line);border-radius:12px;padding:18px 20px;display:flex;flex-direction:column;transition:all .18s}
    .wayfinder-card:hover{border-color:var(--primary);transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.05)}
    .wayfinder-card .wf-role{font-size:.66rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px}
    .wayfinder-card .wf-headline{font-family:Merriweather,serif;font-size:1.02rem;font-weight:800;color:#0f172a;line-height:1.3;margin:0 0 6px}
    .wayfinder-card .wf-desc{font-size:.82rem;color:#64748b;line-height:1.5;margin:0 0 8px;flex-grow:1}
    .wayfinder-card .wf-arrow{font-size:.78rem;font-weight:700;color:var(--primary)}
    @media(max-width:900px){.wayfinder-grid{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:520px){.wayfinder-grid{grid-template-columns:1fr}}
    /* === FAQ section === */
    .faq-section{max-width:860px;margin:64px auto 24px;padding:0 16px}
    .faq-section .faq-eyebrow{font-size:.66rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);text-align:center;margin-bottom:10px}
    .faq-section h2{font-family:Merriweather,serif;font-size:1.7rem;font-weight:900;color:#0f172a;margin:0 0 8px;text-align:center}
    .faq-section .faq-intro{font-size:.92rem;color:#64748b;text-align:center;margin:0 auto 32px;max-width:580px;line-height:1.55}
    .faq-list{border-top:1px solid var(--line)}
    .faq-item{border-bottom:1px solid var(--line);padding:22px 0}
    .faq-item h3{font-size:1.06rem;font-weight:800;color:#0f172a;margin:0 0 10px;line-height:1.4}
    .faq-item p{font-size:.94rem;color:#334155;line-height:1.65;margin:0 0 8px}
    .faq-item a.faq-link{font-size:.84rem;font-weight:700;color:var(--primary);text-decoration:none}
    .faq-item a.faq-link:hover{text-decoration:underline}
    /* === About Caugia panel === */
    .about-caugia{max-width:760px;margin:56px auto 0;padding:34px 36px;background:linear-gradient(135deg,rgba(59,108,216,.05),rgba(96,165,250,.03));border:1px solid var(--line);border-radius:16px;text-align:center}
    .about-caugia .ab-eyebrow{font-size:.66rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);margin-bottom:10px}
    .about-caugia h2{font-family:Merriweather,serif;font-size:1.5rem;font-weight:900;color:#0f172a;margin:0 0 14px;line-height:1.3}
    .about-caugia p{font-size:.96rem;color:#334155;line-height:1.7;margin:0 auto 18px;max-width:580px}
    .about-caugia .ab-cta{display:inline-block;font-size:.86rem;font-weight:700;color:var(--primary);text-decoration:none}
    .about-caugia .ab-cta:hover{text-decoration:underline}
    @media(max-width:600px){.about-caugia{margin:48px 16px 0;padding:24px 22px}.about-caugia h2{font-size:1.25rem}.faq-section{margin:48px auto 16px}.faq-section h2{font-size:1.4rem}}`;

// =============================================================
// Schema markup blocks (FAQPage is locale-aware; others static)
// =============================================================
function faqSchema(loc, s) {
  const items = [
    [s.faq_q1, s.faq_a1],
    [s.faq_q2, s.faq_a2],
    [s.faq_q3, s.faq_a3],
    [s.faq_q4, s.faq_a4],
    [s.faq_q5, s.faq_a5],
    [s.faq_q6, s.faq_a6],
    [s.faq_q7, s.faq_a7],
    [s.faq_q8, s.faq_a8],
    [s.faq_q9, s.faq_a9],
    [s.faq_q10, s.faq_a10],
  ];
  const stripEntities = (str) => str
    .replace(/&mdash;/g, '—')
    .replace(/&nbsp;/g, ' ')
    .replace(/&middot;/g, '·')
    .replace(/&laquo;/g, '«')
    .replace(/&raquo;/g, '»')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rsquo;/g, '’')
    .replace(/&rarr;/g, '→')
    .replace(/&larr;/g, '←')
    .replace(/&amp;/g, '&');
  const entityList = items.map(([q, a]) => ({
    '@type': 'Question',
    name: stripEntities(q),
    acceptedAnswer: { '@type': 'Answer', text: stripEntities(a) },
  }));
  return `<script type="application/ld+json">
${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: entityList }, null, 2)}
</script>`;
}

function collectionPageSchema(loc) {
  const localeUrl = loc === 'en' ? 'https://www.caugia.com/intelligence.html' : `https://www.caugia.com/${loc}/intelligence.html`;
  return `<script type="application/ld+json">
${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Caugia GTM Intelligence',
    description: 'Board-level GTM intelligence calibrated for SaaS B2B, DTC, Fintech B2B, and Professional Services.',
    url: localeUrl,
    inLanguage: loc,
    about: [
      { '@type': 'Thing', name: 'GTM Diagnostics' },
      { '@type': 'Thing', name: 'GRIP Framework' },
      { '@type': 'Thing', name: 'Per-Vertical Calibration' },
      { '@type': 'Thing', name: 'AI Answer Market' },
      { '@type': 'Thing', name: 'GTM Operating System' },
    ],
  }, null, 2)}
</script>`;
}

function breadcrumbSchema(loc) {
  const root = loc === 'en' ? 'https://www.caugia.com/' : `https://www.caugia.com/${loc}/`;
  const hub = loc === 'en' ? 'https://www.caugia.com/intelligence.html' : `https://www.caugia.com/${loc}/intelligence.html`;
  return `<script type="application/ld+json">
${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Caugia', item: root },
      { '@type': 'ListItem', position: 2, name: 'Intelligence', item: hub },
    ],
  }, null, 2)}
</script>`;
}

// =============================================================
// New HTML blocks per locale
// =============================================================
function wayfinderBlock(s) {
  return `
    <!-- ═══ WAYFINDER ═══ -->
    <div class="container wayfinder">
      <div class="wayfinder-head">
        <h3>${s.wf_h3}</h3>
        <p>${s.wf_sub}</p>
      </div>
      <div class="wayfinder-grid">
        <a href="intelligence/what-is-a-gtm-diagnostic.html" class="wayfinder-card">
          <span class="wf-role">${s.wf_card1_role}</span>
          <span class="wf-headline">${s.wf_card1_headline}</span>
          <span class="wf-desc">${s.wf_card1_desc}</span>
          <span class="wf-arrow">${s.wf_arrow}</span>
        </a>
        <a href="intelligence/from-diagnostic-to-operating-system.html" class="wayfinder-card">
          <span class="wf-role">${s.wf_card2_role}</span>
          <span class="wf-headline">${s.wf_card2_headline}</span>
          <span class="wf-desc">${s.wf_card2_desc}</span>
          <span class="wf-arrow">${s.wf_arrow}</span>
        </a>
        <a href="intelligence/revenue-leakage-saas.html" class="wayfinder-card">
          <span class="wf-role">${s.wf_card3_role}</span>
          <span class="wf-headline">${s.wf_card3_headline}</span>
          <span class="wf-desc">${s.wf_card3_desc}</span>
          <span class="wf-arrow">${s.wf_arrow}</span>
        </a>
        <a href="intelligence/cfo-gtm-unit-economics.html" class="wayfinder-card">
          <span class="wf-role">${s.wf_card4_role}</span>
          <span class="wf-headline">${s.wf_card4_headline}</span>
          <span class="wf-desc">${s.wf_card4_desc}</span>
          <span class="wf-arrow">${s.wf_arrow}</span>
        </a>
        <a href="intelligence/cmo-marketing-revenue-architecture.html" class="wayfinder-card">
          <span class="wf-role">${s.wf_card5_role}</span>
          <span class="wf-headline">${s.wf_card5_headline}</span>
          <span class="wf-desc">${s.wf_card5_desc}</span>
          <span class="wf-arrow">${s.wf_arrow}</span>
        </a>
        <a href="intelligence/vc-gtm-due-diligence.html" class="wayfinder-card">
          <span class="wf-role">${s.wf_card6_role}</span>
          <span class="wf-headline">${s.wf_card6_headline}</span>
          <span class="wf-desc">${s.wf_card6_desc}</span>
          <span class="wf-arrow">${s.wf_arrow}</span>
        </a>
        <a href="intelligence/why-gtm-partners-need-diagnostic-infrastructure.html" class="wayfinder-card">
          <span class="wf-role">${s.wf_card7_role}</span>
          <span class="wf-headline">${s.wf_card7_headline}</span>
          <span class="wf-desc">${s.wf_card7_desc}</span>
          <span class="wf-arrow">${s.wf_arrow}</span>
        </a>
        <a href="intelligence/grip-framework-calibration.html" class="wayfinder-card">
          <span class="wf-role">${s.wf_card8_role}</span>
          <span class="wf-headline">${s.wf_card8_headline}</span>
          <span class="wf-desc">${s.wf_card8_desc}</span>
          <span class="wf-arrow">${s.wf_arrow}</span>
        </a>
      </div>
    </div>`;
}

function faqAboutBlock(s) {
  return `
    <!-- ═══ FAQ — AEO magnet ═══ -->
    <section class="container faq-section" id="faq">
      <div class="faq-eyebrow">${s.faq_eyebrow}</div>
      <h2>${s.faq_h2}</h2>
      <p class="faq-intro">${s.faq_intro}</p>
      <div class="faq-list">
        <div class="faq-item"><h3>${s.faq_q1}</h3><p>${s.faq_a1}</p><a href="intelligence/what-is-a-gtm-diagnostic.html" class="faq-link">${s.faq_l1}</a></div>
        <div class="faq-item"><h3>${s.faq_q2}</h3><p>${s.faq_a2}</p><a href="intelligence/grip-framework-gtm-diagnostic-model.html" class="faq-link">${s.faq_l2}</a></div>
        <div class="faq-item"><h3>${s.faq_q3}</h3><p>${s.faq_a3}</p><a href="intelligence/grip-framework-calibration.html" class="faq-link">${s.faq_l3}</a></div>
        <div class="faq-item"><h3>${s.faq_q4}</h3><p>${s.faq_a4}</p><a href="intelligence/ai-answer-market-pipeline-generation.html" class="faq-link">${s.faq_l4}</a></div>
        <div class="faq-item"><h3>${s.faq_q5}</h3><p>${s.faq_a5}</p><a href="intelligence/sophie-second-brain-revenue.html" class="faq-link">${s.faq_l5}</a></div>
        <div class="faq-item"><h3>${s.faq_q6}</h3><p>${s.faq_a6}</p><a href="intelligence/gtm-diagnostics-vs-consulting.html" class="faq-link">${s.faq_l6}</a></div>
        <div class="faq-item"><h3>${s.faq_q7}</h3><p>${s.faq_a7}</p><a href="intelligence/per-vertical-calibration-gtm-framework.html" class="faq-link">${s.faq_l7}</a></div>
        <div class="faq-item"><h3>${s.faq_q8}</h3><p>${s.faq_a8}</p><a href="intelligence/from-diagnostic-to-operating-system.html" class="faq-link">${s.faq_l8}</a></div>
        <div class="faq-item"><h3>${s.faq_q9}</h3><p>${s.faq_a9}</p><a href="the-gtm-score.html" class="faq-link">${s.faq_l9}</a></div>
        <div class="faq-item"><h3>${s.faq_q10}</h3><p>${s.faq_a10}</p><a href="intelligence/per-vertical-calibration-gtm-framework.html" class="faq-link">${s.faq_l10}</a></div>
      </div>
    </section>

    <!-- ═══ ABOUT CAUGIA ═══ -->
    <section class="container">
      <div class="about-caugia">
        <div class="ab-eyebrow">${s.about_eyebrow}</div>
        <h2>${s.about_h2}</h2>
        <p>${s.about_body}</p>
        <a href="about.html" class="ab-cta">${s.about_cta}</a>
      </div>
    </section>`;
}

// =============================================================
// File mutator
// =============================================================
function applyToFile(absPath, locale, strings) {
  let html = fs.readFileSync(absPath, 'utf8');
  const original = html;

  if (html.includes('class="wayfinder"')) {
    console.log(`  ${locale}: already has wayfinder, skipping`);
    return false;
  }

  // 1. Inject new CSS before existing </style>
  const styleClose = html.lastIndexOf('</style>');
  if (styleClose !== -1) {
    html = html.slice(0, styleClose) + NEW_CSS + '\n  ' + html.slice(styleClose);
  }

  // 2. Inject schema markup blocks before </head>
  const headClose = html.lastIndexOf('</head>');
  if (headClose !== -1) {
    const schemaBlocks = `\n<!-- FAQPage schema — AEO -->\n${faqSchema(locale, strings)}\n\n<!-- CollectionPage schema -->\n${collectionPageSchema(locale)}\n\n<!-- BreadcrumbList schema -->\n${breadcrumbSchema(locale)}\n`;
    html = html.slice(0, headClose) + schemaBlocks + html.slice(headClose);
  }

  // 3. Replace guided-path block with Wayfinder
  html = html.replace(
    /<div class="container">\s*<div class="guided-path">[\s\S]*?<\/div>\s*<\/div>/,
    wayfinderBlock(strings)
  );

  // 4. Insert FAQ + About panel BEFORE the existing CTA section
  const ctaMatch = /<!-- ═══ CTA ═══ -->\s*<section class="intel-cta">/;
  if (ctaMatch.test(html)) {
    html = html.replace(ctaMatch, faqAboutBlock(strings) + '\n\n    <!-- ═══ CTA ═══ -->\n    <section class="intel-cta">');
  } else {
    console.warn(`  ${locale}: CTA anchor not found, skipping FAQ insert`);
  }

  if (html === original) return false;

  fs.writeFileSync(absPath, html, 'utf8');
  console.log(`  ${locale}: wrote (${original.length} → ${html.length})`);
  return true;
}

// =============================================================
// Drive
// =============================================================
async function main() {
  console.log('Translating Phase 1+2 strings...');
  const out = {};
  for (const loc of LOCALES) {
    process.stdout.write(`  ${loc}...`);
    out[loc] = await translate(loc);
    process.stdout.write(' done\n');
  }
  fs.writeFileSync(
    path.join(ROOT, 'scripts', 'translations-intelligence-phase-12.json'),
    JSON.stringify(out, null, 2)
  );

  console.log('\nApplying to locale files...');
  for (const loc of LOCALES) {
    const abs = path.join(ROOT, loc, 'intelligence.html');
    applyToFile(abs, loc, out[loc]);
  }
}

main().catch((e) => { console.error('FATAL:', e.message); process.exit(1); });
