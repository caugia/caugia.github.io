#!/usr/bin/env node
// =============================================================================
// Translate the Framework v1 article from EN → NL/FR/DE/ES/PL
// =============================================================================
// Reads intelligence/caugia-gtm-intelligence-framework-v1.html and replaces the
// translatable strings (h1, lead, h2s, paragraphs, list items, table headers,
// callouts, CTA copy) with native versions via OpenAI gpt-4o-mini.
//
// Brand & technical terms are preserved verbatim:
//   Caugia, GRIP, K_DRAG, DIMENSION_WEIGHTS, RECOVERY_FACTORS, Constraint
//   Engine, Bessemer, OpenView, Drivepoint, Triple Whale, Acrew, FT Partners,
//   SPI, Kennedy, Plaid, Stripe Atlas, NRR, MER, AOV, ARR, R², G, R, I, P,
//   SaaS B2B, DTC, Fintech B2B, Professional Services.
//
// Output: <locale>/intelligence/caugia-gtm-intelligence-framework-v1.html × 5
//
// Run: node scripts/translate-framework-v1-article.mjs
// =============================================================================

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));

// ============================================================
// Load OPENAI_API_KEY from grip-os/.env.local
// ============================================================
function loadOpenAIKey() {
  const envPath = path.resolve(ROOT, '..', 'grip-os', '.env.local');
  if (!fs.existsSync(envPath)) throw new Error(`Missing ${envPath}`);
  const content = fs.readFileSync(envPath, 'utf8');
  const match = content.match(/^OPENAI_API_KEY=(.+)$/m);
  if (!match) throw new Error('OPENAI_API_KEY not found in grip-os/.env.local');
  return match[1].trim().replace(/^["']|["']$/g, '');
}

const OPENAI_KEY = loadOpenAIKey();

// ============================================================
// Translatable strings extracted from EN article
// Keys are short identifiers; values are EN source strings.
// HTML entities (&mdash;, &nbsp;, &laquo;, etc.) preserved as-is — OpenAI
// is instructed to keep them intact.
// ============================================================
const EN_STRINGS = {
  page_title: 'Caugia GTM Intelligence Framework v1: Calibrated Against Public Benchmarks | Caugia',
  meta_desc: 'Every per-vertical constant Caugia publishes is anchored to a named source from the public benchmark literature. Here is how the framework calibrates K_DRAG, dimension weights, and recovery factors across SaaS B2B, DTC, Fintech B2B, and Professional Services.',
  og_title: 'Caugia GTM Intelligence Framework v1: Calibrated Against Public Benchmarks',
  og_desc: 'Every per-vertical constant anchored to a named source. The methodology behind the Caugia Constraint Engine.',
  schema_headline: 'Caugia GTM Intelligence Framework v1: Calibrated Against Public Benchmarks',
  schema_desc: 'Every per-vertical constant Caugia publishes is anchored to a named source from the public benchmark literature.',

  back_link: '&larr; Back to Intelligence',
  tag_methodology: 'Methodology &middot; Framework v1',
  hero_h1: 'How Caugia calibrates a GTM framework against public benchmarks',
  hero_lead: 'Most GTM frameworks ship with constants that were never explained. Caugia publishes the math. Every per-vertical sensitivity, dimension weight, and recovery factor is anchored to a named source from the public benchmark literature. A prospect can verify each number independently. Here is how it works.',
  hero_meta: '14 min read &middot; Updated 13&nbsp;May&nbsp;2026',

  h2_opacity: 'The opacity problem',
  p_opacity_1: 'Every consulting framework, every diagnostic tool, every &laquo;benchmark&raquo; spreadsheet operates on constants. Multipliers. Sensitivities. Recovery rates. Weights. They show up in board decks as if they were laws of nature.',
  p_opacity_2: 'Almost none of them tell you where the number came from.',
  p_opacity_3: 'Ask the partner: <em>&laquo;Why is your churn-to-leakage multiplier 4.2 and not 3.6?&raquo;</em> The answer is usually a hand-wave about &laquo;our experience across hundreds of engagements.&raquo; That is opinion, presented as data, sold at consultancy rates.',
  p_opacity_4: 'Caugia inverts this. The constants behind our Constraint Engine, our simulator, and our 45-page report are all published, version-controlled, and cited to named public sources. If you disagree with the source, you can audit it. If the underlying study revises, our constant moves with it.',

  h2_calibrates: 'What the framework calibrates',
  p_calibrates_1: 'The Caugia GTM Intelligence Framework v1 calibrates three families of constants, per vertical. The Constraint Engine and the what-if simulator both depend on them.',
  li_calibrates_1: '<strong>K_DRAG</strong> &mdash; the sensitivity of revenue drag to system weakness. Higher K_DRAG means a 10-point GRIP gap creates more euro impact.',
  li_calibrates_2: '<strong>DIMENSION_WEIGHTS</strong> &mdash; the relative importance of Guidance, Resources, Implementation, and Performance per vertical. Always sums to 1.00.',
  li_calibrates_3: '<strong>RECOVERY_FACTORS</strong> &mdash; the share of identified leakage that is realistically recoverable per dimension, over a 12-month horizon.',
  p_calibrates_2: 'These constants are not invented. They are <strong>conservative central estimates from named studies</strong>. Below is the current Phase&nbsp;1 calibration, with the source anchor for each.',

  h2_saas: 'SaaS B2B',
  table_th_constant: 'Constant',
  table_th_value: 'Value',
  saas_callout_intro: '<strong>Anchored to:</strong>',
  saas_li_1: '<strong>Bessemer Cloud Index 2024.</strong> Rule-of-40 dispersion shows ~60% of below-median performers attribute their gap to identifiable GTM-system weakness &rarr; drives K_DRAG&nbsp;=&nbsp;0.60.',
  saas_li_2: '<strong>OpenView SaaS Benchmarks 2024.</strong> Performance-weighted dimension importance (NRR + win-rate + churn dominate rule-of-40 valuations) drives P&nbsp;=&nbsp;0.35.',
  saas_li_3: '<strong>OpenView cohort-turnaround studies 2022-2024.</strong> Performance fixes recover faster than Guidance &mdash; NRR improvements compound monthly, while org-design changes take quarters &mdash; drives the RECOVERY_FACTORS gradient (G&nbsp;&lt;&nbsp;R&nbsp;&lt;&nbsp;I&nbsp;&lt;&nbsp;P).',

  h2_dtc: 'DTC',
  dtc_callout_intro: '<strong>Anchored to:</strong>',
  dtc_li_1: '<strong>Drivepoint cohort recovery studies 2022-2024</strong> (n=188 brands, &euro;5-15M ARR). DTC drag-to-fix half-life is roughly 4 months, against SaaS&rsquo;s 9 months. The short cash-conversion cycle drives a lower K_DRAG than SaaS.',
  dtc_li_2: '<strong>Triple Whale State of DTC 2024.</strong> Performance dominates the model &mdash; repeat-rate, MER, and AOV are existential &mdash; driving P&nbsp;=&nbsp;0.45 (vs SaaS&rsquo;s 0.35).',
  dtc_li_3: '<strong>Drivepoint margin studies.</strong> Category demand elasticity in DTC drives the high RECOVERY_FACTORS across the board.',

  h2_fintech: 'Fintech B2B',
  fintech_callout_intro: '<strong>Anchored to:</strong>',
  fintech_li_1: '<strong>Acrew Capital State of Fintech 2024.</strong> Median time-to-recover from a compliance block is approximately 14 months. Regulatory drag compounds &rarr; K_DRAG&nbsp;=&nbsp;0.70 (the highest of the four verticals).',
  fintech_li_2: '<strong>FT Partners B2B Fintech Benchmarks 2024.</strong> Resources + Implementation dominate the model &mdash; compliance headcount, integration cost, sandbox-to-prod conversion &mdash; so R&nbsp;+&nbsp;I&nbsp;=&nbsp;0.60 and P is constrained to 0.15.',
  fintech_li_3: '<strong>Plaid + Stripe Atlas onboarding cohort data 2022-2024.</strong> Regulatory inertia drives slower recovery &rarr; RECOVERY_FACTORS ceiling at P&nbsp;=&nbsp;0.60.',

  h2_profsvc: 'Professional Services',
  profsvc_callout_intro: '<strong>Anchored to:</strong>',
  profsvc_li_1: '<strong>Service Performance Insights PS Maturity Benchmark 2024.</strong> ProfSvc scales linearly with headcount, not exponentially through bottlenecks. A 10% utilization gap creates a roughly 10% revenue gap, not a compounding cascade &rarr; K_DRAG&nbsp;=&nbsp;0.50 (the lowest of the four).',
  profsvc_li_2: '<strong>Kennedy Pulse Survey 2024</strong> (consulting). Guidance + Resources dominate &mdash; people-business: strategy and talent drive outcomes &rarr; G&nbsp;+&nbsp;R&nbsp;=&nbsp;0.60.',
  profsvc_li_3: '<strong>SPI Annual PS Operational Excellence 2024.</strong> Engagement-margin feedback loops drive medium-rate recovery uniformly across dimensions.',

  h2_confidence: 'Confidence bands, not single numbers',
  p_confidence_1: 'The simulator never reports a single number. Every projection comes with a 50% confidence interval &mdash; a P25/P75 spread around the P50 point estimate.',
  p_confidence_2: 'The width of the interval follows the prediction-interval methodology documented in <strong>Bessemer&rsquo;s 2024 SaaS forecasting playbook</strong>: roughly &plusmn;25% of the central estimate, as the operating-frontier band for forward-looking GTM projections.',
  p_confidence_3: 'The reason is intellectual honesty. We can tell you with reasonable confidence where the number is likely to land. We cannot tell you with certainty where it <em>will</em> land, because no one can. Showing the band makes that explicit, and stops the customer from anchoring on the midpoint as a promise.',

  h2_phases: 'Phase 1 is calibration. Phase 2 is backtest.',
  p_phases_1: 'The Caugia framework runs in two phases.',
  phase1_label: 'Phase 1 &middot; Shipped',
  phase1_title: 'Public-benchmark calibration',
  phase1_p: 'All current constants &mdash; per-vertical K_DRAG, dimension weights, recovery factors, slider-to-GRIP weights, stage benchmarks, confidence-band swing parameters &mdash; are anchored against the named studies above. They are conservative central estimates from the public literature, not Caugia opinions. A prospect can independently verify every number against the source we cite.',
  phase2_label: 'Phase 2 &middot; Q3 2026',
  phase2_title: 'Cohort backtest',
  phase2_intro: 'Once 10 paying customers per vertical (40 customers total) have at least 6 months of monthly snapshots, the calibration program refits the constants against observed outcomes:',
  phase2_li_1: '<strong>K_DRAG per vertical</strong> against observed drag-to-fix half-life.',
  phase2_li_2: '<strong>Dimension weights per vertical</strong> against observed predictive power per dimension.',
  phase2_li_3: '<strong>Recovery factors per vertical</strong> against observed 12-month recovery trajectories.',
  phase2_li_4: '<strong>Confidence-band swing</strong> against observed prediction-vs-outcome dispersion &mdash; the cohort-derived bounds replace the Bessemer-derived &plusmn;25% default.',
  phase2_li_5: '<strong>Per-pillar within-dimension weights</strong> replace the equal-weighting default.',
  phase2_p_outro: 'Deliverable: a mean-absolute-error report per vertical, R&sup2; of <code>upsideIfFixed</code> predictions vs realised 6- and 12-month outcomes, and a Phase-2 constant table committed to the methodology document with a per-constant delta against Phase 1.',

  h2_what_means: 'What this means for you',
  p_what_means_1: '<strong>If you are a prospect:</strong> every Caugia number on your screen has an audit trail. The methodology document on the Caugia repo lists each constant with its source. Disagree with Bessemer&rsquo;s 2024 dispersion analysis? Push back. We will explain how the constant was derived and what would need to be true for it to move.',
  p_what_means_2: '<strong>If you are a VC running diligence:</strong> the framework is productized, not improvised. Every constant has a roadmap to empirical recalibration with explicit gates. The Phase 2 backtest is a public commitment with a date attached. If we miss it, you can hold us to it.',
  p_what_means_3: '<strong>If you are a customer:</strong> the engine you are paying for is not a black box. You can trace every number on your 45-page report back to the framework, and every framework constant back to a named public study. If the underlying study revises, our constant moves &mdash; and we publish the delta.',

  h2_anti_framework: 'The anti-framework position',
  p_anti_1: 'Caugia is not Gartner. We are not McKinsey. We are not building a thought-leadership franchise on top of opinion.',
  p_anti_2: 'We are building a deterministic engine with published math, calibrated against named sources, with a public roadmap to empirical recalibration. That discipline is the product. Everything else &mdash; the assessment, the simulator, the brief, the actions &mdash; runs on top of it.',
  p_anti_3: 'If a competitor publishes a more rigorous methodology than ours, we lose. That is the point. We have made the methodology auditable on purpose, so the discipline of publishing the math is the durable advantage.',

  cta_h3: 'Read the framework foundations',
  cta_p: 'The Caugia GTM Intelligence Framework v1 sits on top of the GRIP model &mdash; four dimensions, twelve pillars. Start there for the structural layer, then come back here for the calibration.',
  cta_btn_primary: 'Read the GRIP Framework',
  cta_btn_outline: 'Unlock the Constraint Engine',
};

const LOCALES = ['nl', 'fr', 'de', 'es', 'pl'];

// ============================================================
// OpenAI translation — one batched call per locale
// ============================================================
const LOCALE_NAMES = {
  nl: 'Dutch (Netherlands), informal "je"',
  fr: 'French (France), formal "vous"',
  de: 'German (DE), formal "Sie"',
  es: 'Spanish (Spain), informal "tú"',
  pl: 'Polish (Poland), informal "ty" but professional register',
};

async function translateForLocale(locale) {
  const localeName = LOCALE_NAMES[locale];
  const keyList = Object.keys(EN_STRINGS);
  const enJson = JSON.stringify(EN_STRINGS, null, 2);

  const prompt = `You are a senior B2B SaaS marketing translator. Translate the following English JSON of HTML-fragment strings into ${localeName}.

CRITICAL RULES:
1. Preserve EVERY HTML entity exactly as-is: &mdash; &nbsp; &laquo; &raquo; &lsquo; &rsquo; &larr; &rarr; &middot; &euro; &sup2; &plusmn; &lt; &gt;
2. Preserve EVERY inline HTML tag exactly: <strong>, </strong>, <em>, </em>, <code>, </code>
3. Keep these brand/technical names UNCHANGED (do not translate): Caugia, GRIP, GTM, K_DRAG, DIMENSION_WEIGHTS, RECOVERY_FACTORS, Constraint Engine, Bessemer, Cloud Index, OpenView, SaaS Benchmarks, Drivepoint, Triple Whale, State of DTC, Acrew, Capital, State of Fintech, FT Partners, B2B Fintech Benchmarks, SPI, Service Performance Insights, PS Maturity Benchmark, PS Operational Excellence, Kennedy, Pulse Survey, Plaid, Stripe Atlas, NRR, MER, AOV, ARR, R², SaaS B2B, DTC, Fintech B2B, Professional Services, Gartner, McKinsey, ProfSvc, GTM.
4. Preserve G, R, I, P as single-letter dimension labels (do not translate "Guidance", "Resources", "Implementation", "Performance" inside formulas; you may translate them when they appear as standalone words in body prose).
5. Preserve numeric values exactly (0.60, 0.35, etc.) and "Phase 1" / "Phase 2" labels (translate "Phase" to the local equivalent).
6. Output ONLY a valid JSON object with the same keys, no commentary, no markdown fences.
7. Voice: professional, energetic, citation-driven. Match the same tone as the English ("Nova-energetic" — direct, confident, technically precise).
8. The translation must use NATIVE diakritieken (German ä/ö/ü/ß, Polish ą/ć/ę/ł/ń/ó/ś/ź/ż, etc.) — NEVER ASCII-strip.

English source JSON:
${enJson}

Return only the translated JSON, no other text.`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.3,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenAI ${locale} ${res.status}: ${text.slice(0, 400)}`);
  }
  const body = await res.json();
  const content = body.choices?.[0]?.message?.content;
  if (!content) throw new Error(`Empty response for ${locale}`);

  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch (e) {
    throw new Error(`Invalid JSON from ${locale}: ${content.slice(0, 300)}`);
  }

  // Sanity: ensure all keys present
  const missing = keyList.filter((k) => !(k in parsed));
  if (missing.length) {
    throw new Error(`${locale} missing keys: ${missing.slice(0, 5).join(',')}`);
  }
  return parsed;
}

// ============================================================
// Render locale HTML file from template
// ============================================================
function renderLocaleHtml(locale, strings) {
  const langCode = locale === 'en' ? 'en' : locale;
  return `<!--email_off-->
<!DOCTYPE html>
<html lang="${langCode}">
<head>
<meta charset="UTF-8" />
<!-- Analytics opt-out: visit any page with ?analytics_optout=true to disable tracking -->
<script>
(function(){
  try {
    var p=new URLSearchParams(window.location.search);
    if(p.get("analytics_optout")==="true"){localStorage.setItem("analytics_optout","true");document.cookie="caugia_optout=true;Domain=.caugia.com;Max-Age=31536000;Path=/;SameSite=Lax";}
    if(p.get("analytics_optout")==="false"){localStorage.removeItem("analytics_optout");document.cookie="caugia_optout=;Domain=.caugia.com;Max-Age=0;Path=/";}
    if(localStorage.getItem("analytics_optout")==="true"||/(?:^|;\\s*)caugia_optout=true/.test(document.cookie)) window["ga-disable-G-YDP8FW3T3Z"]=true;
  } catch(e){}
})();
</script>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YDP8FW3T3Z"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YDP8FW3T3Z');
</script>
  <meta name="google-site-verification" content="MJ7qIuQm097NeOdxKSV34apfgQNz3UbOPbufxWgv7Uc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>${strings.page_title}</title>
  <meta name="description" content="${strings.meta_desc}" />
  <link rel="canonical" href="https://www.caugia.com/${locale}/intelligence/caugia-gtm-intelligence-framework-v1.html" />
  <link rel="alternate" hreflang="en" href="https://www.caugia.com/intelligence/caugia-gtm-intelligence-framework-v1.html" />
  <link rel="alternate" hreflang="fr" href="https://www.caugia.com/fr/intelligence/caugia-gtm-intelligence-framework-v1.html" />
  <link rel="alternate" hreflang="de" href="https://www.caugia.com/de/intelligence/caugia-gtm-intelligence-framework-v1.html" />
  <link rel="alternate" hreflang="es" href="https://www.caugia.com/es/intelligence/caugia-gtm-intelligence-framework-v1.html" />
  <link rel="alternate" hreflang="pl" href="https://www.caugia.com/pl/intelligence/caugia-gtm-intelligence-framework-v1.html" />
  <link rel="alternate" hreflang="nl" href="https://www.caugia.com/nl/intelligence/caugia-gtm-intelligence-framework-v1.html" />
  <link rel="alternate" hreflang="x-default" href="https://www.caugia.com/intelligence/caugia-gtm-intelligence-framework-v1.html" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://www.caugia.com/${locale}/intelligence/caugia-gtm-intelligence-framework-v1.html" />
  <meta property="og:title" content="${strings.og_title}" />
  <meta property="og:description" content="${strings.og_desc}" />
  <meta property="og:image" content="https://www.caugia.com/assets/logo-final.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${strings.og_title}" />
  <meta name="twitter:description" content="${strings.og_desc}" />
  <meta name="twitter:image" content="https://www.caugia.com/assets/logo-final.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <link rel="icon" type="image/png" sizes="32x32" href="../../icon.png">
  <link rel="apple-touch-icon" href="../../icon.png">

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Merriweather:wght@400;700;900&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="../../assets/caugia-base.css">

  <style>
    .article-hero { max-width: 720px; margin: 0 auto; padding-top: 60px; padding-bottom: 40px; }
    .article-hero .intel-back { font-size: 0.82rem; font-weight: 700; color: var(--primary); text-decoration: none; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 24px; }
    .article-hero .intel-back:hover { text-decoration: underline; }
    .article-tag { display: inline-block; font-size: 0.65rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 5px; background: rgba(96,165,250,0.15); color: var(--primary); margin-bottom: 16px; }
    .article-hero h1 { font-size: 2.5rem; line-height: 1.15; margin-bottom: 18px; }
    .article-hero .article-lead { font-size: 1.15rem; color: var(--text-body); line-height: 1.6; }
    .article-meta { font-size: 0.8rem; color: #94a3b8; margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--line); }
    .article-body { max-width: 720px; margin: 0 auto; padding-bottom: 60px; }
    .article-body h2 { font-family: Merriweather, serif; font-size: 1.6rem; font-weight: 900; color: #0f172a; margin: 48px 0 16px; line-height: 1.25; }
    .article-body h3 { font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 32px 0 12px; }
    .article-body p { font-size: 1.02rem; color: #334155; line-height: 1.75; margin-bottom: 18px; }
    .article-body strong { color: #0f172a; }
    .article-body ul { margin: 0 0 22px 0; padding-left: 22px; }
    .article-body li { font-size: 1.02rem; color: #334155; line-height: 1.75; margin-bottom: 8px; }
    .constants-table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 0.92rem; }
    .constants-table th, .constants-table td { padding: 12px 14px; border-bottom: 1px solid var(--line); text-align: left; }
    .constants-table th { background: #f8fafc; font-weight: 800; color: #0f172a; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em; }
    .constants-table td:first-child { font-weight: 700; color: #0f172a; }
    .constants-table code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.86rem; color: #334155; }
    .source-callout { background: #f8fafc; border-left: 3px solid var(--primary); padding: 18px 22px; border-radius: 0 10px 10px 0; margin: 20px 0; font-size: 0.94rem; line-height: 1.7; color: #334155; }
    .source-callout strong { color: #0f172a; }
    .phase-card { background: linear-gradient(135deg, rgba(59,108,216,0.04), rgba(96,165,250,0.05)); border: 1px solid rgba(59,108,216,0.18); border-radius: 14px; padding: 24px 26px; margin: 20px 0; }
    .phase-card h3 { margin-top: 0; }
    .phase-card .phase-label { display: inline-block; font-size: 0.65rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; padding: 3px 9px; border-radius: 5px; background: rgba(59,108,216,0.12); color: var(--primary); margin-bottom: 10px; }
    .article-cta { background: #0f172a; border-radius: 14px; padding: 40px 36px; margin: 48px 0 24px; text-align: center; }
    .article-cta h3 { font-family: Merriweather, serif; color: #fff; font-size: 1.4rem; margin: 0 0 12px; }
    .article-cta p { color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin: 0 0 22px; }
    .article-cta .btn-pair { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .article-cta .btn { padding: 12px 26px; border-radius: 10px; font-size: 0.92rem; font-weight: 700; text-decoration: none; display: inline-block; }
    .article-cta .btn-primary { background: var(--primary); color: #fff; }
    .article-cta .btn-outline { background: transparent; color: #fff; border: 1px solid #475569; }
    @media (max-width: 600px) {
      .article-hero h1 { font-size: 1.8rem; }
      .article-body h2 { font-size: 1.3rem; }
      .constants-table { font-size: 0.82rem; }
      .constants-table th, .constants-table td { padding: 8px 10px; }
      .article-cta { padding: 28px 22px; }
    }
  </style>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(strings.schema_headline)},
    "description": ${JSON.stringify(strings.schema_desc)},
    "image": "https://www.caugia.com/assets/logo-final.png",
    "author": { "@type": "Organization", "name": "Caugia", "url": "https://www.caugia.com" },
    "publisher": { "@type": "Organization", "name": "Caugia", "logo": { "@type": "ImageObject", "url": "https://www.caugia.com/assets/logo-final.png" } },
    "datePublished": "2026-05-13",
    "dateModified": "2026-05-13",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.caugia.com/${locale}/intelligence/caugia-gtm-intelligence-framework-v1.html" },
    "inLanguage": "${langCode}"
  }
  </script>
</head>
<body>
  <script src="../../assets/header.js"></script>
  <main>

    <section class="container article-hero">
      <a href="../intelligence.html" class="intel-back">${strings.back_link}</a>
      <span class="article-tag">${strings.tag_methodology}</span>
      <h1>${strings.hero_h1}</h1>
      <p class="article-lead">${strings.hero_lead}</p>
      <div class="article-meta">${strings.hero_meta}</div>
    </section>

    <section class="container article-body">

      <h2>${strings.h2_opacity}</h2>
      <p>${strings.p_opacity_1}</p>
      <p>${strings.p_opacity_2}</p>
      <p>${strings.p_opacity_3}</p>
      <p>${strings.p_opacity_4}</p>

      <h2>${strings.h2_calibrates}</h2>
      <p>${strings.p_calibrates_1}</p>
      <ul>
        <li>${strings.li_calibrates_1}</li>
        <li>${strings.li_calibrates_2}</li>
        <li>${strings.li_calibrates_3}</li>
      </ul>
      <p>${strings.p_calibrates_2}</p>

      <h2>${strings.h2_saas}</h2>
      <table class="constants-table">
        <tr><th>${strings.table_th_constant}</th><th>${strings.table_th_value}</th></tr>
        <tr><td>K_DRAG</td><td><code>0.60</code></td></tr>
        <tr><td>DIMENSION_WEIGHTS</td><td><code>G&nbsp;0.20 &middot; R&nbsp;0.20 &middot; I&nbsp;0.25 &middot; P&nbsp;0.35</code></td></tr>
        <tr><td>RECOVERY_FACTORS</td><td><code>G&nbsp;0.55 &middot; R&nbsp;0.60 &middot; I&nbsp;0.65 &middot; P&nbsp;0.70</code></td></tr>
      </table>
      <div class="source-callout">
        ${strings.saas_callout_intro}
        <ul style="margin: 8px 0 0 0;">
          <li>${strings.saas_li_1}</li>
          <li>${strings.saas_li_2}</li>
          <li>${strings.saas_li_3}</li>
        </ul>
      </div>

      <h2>${strings.h2_dtc}</h2>
      <table class="constants-table">
        <tr><th>${strings.table_th_constant}</th><th>${strings.table_th_value}</th></tr>
        <tr><td>K_DRAG</td><td><code>0.55</code></td></tr>
        <tr><td>DIMENSION_WEIGHTS</td><td><code>G&nbsp;0.15 &middot; R&nbsp;0.18 &middot; I&nbsp;0.22 &middot; P&nbsp;0.45</code></td></tr>
        <tr><td>RECOVERY_FACTORS</td><td><code>G&nbsp;0.50 &middot; R&nbsp;0.65 &middot; I&nbsp;0.70 &middot; P&nbsp;0.75</code></td></tr>
      </table>
      <div class="source-callout">
        ${strings.dtc_callout_intro}
        <ul style="margin: 8px 0 0 0;">
          <li>${strings.dtc_li_1}</li>
          <li>${strings.dtc_li_2}</li>
          <li>${strings.dtc_li_3}</li>
        </ul>
      </div>

      <h2>${strings.h2_fintech}</h2>
      <table class="constants-table">
        <tr><th>${strings.table_th_constant}</th><th>${strings.table_th_value}</th></tr>
        <tr><td>K_DRAG</td><td><code>0.70</code></td></tr>
        <tr><td>DIMENSION_WEIGHTS</td><td><code>G&nbsp;0.25 &middot; R&nbsp;0.30 &middot; I&nbsp;0.30 &middot; P&nbsp;0.15</code></td></tr>
        <tr><td>RECOVERY_FACTORS</td><td><code>G&nbsp;0.45 &middot; R&nbsp;0.50 &middot; I&nbsp;0.55 &middot; P&nbsp;0.60</code></td></tr>
      </table>
      <div class="source-callout">
        ${strings.fintech_callout_intro}
        <ul style="margin: 8px 0 0 0;">
          <li>${strings.fintech_li_1}</li>
          <li>${strings.fintech_li_2}</li>
          <li>${strings.fintech_li_3}</li>
        </ul>
      </div>

      <h2>${strings.h2_profsvc}</h2>
      <table class="constants-table">
        <tr><th>${strings.table_th_constant}</th><th>${strings.table_th_value}</th></tr>
        <tr><td>K_DRAG</td><td><code>0.50</code></td></tr>
        <tr><td>DIMENSION_WEIGHTS</td><td><code>G&nbsp;0.30 &middot; R&nbsp;0.30 &middot; I&nbsp;0.20 &middot; P&nbsp;0.20</code></td></tr>
        <tr><td>RECOVERY_FACTORS</td><td><code>G&nbsp;0.60 &middot; R&nbsp;0.65 &middot; I&nbsp;0.65 &middot; P&nbsp;0.60</code></td></tr>
      </table>
      <div class="source-callout">
        ${strings.profsvc_callout_intro}
        <ul style="margin: 8px 0 0 0;">
          <li>${strings.profsvc_li_1}</li>
          <li>${strings.profsvc_li_2}</li>
          <li>${strings.profsvc_li_3}</li>
        </ul>
      </div>

      <h2>${strings.h2_confidence}</h2>
      <p>${strings.p_confidence_1}</p>
      <p>${strings.p_confidence_2}</p>
      <p>${strings.p_confidence_3}</p>

      <h2>${strings.h2_phases}</h2>
      <p>${strings.p_phases_1}</p>

      <div class="phase-card">
        <span class="phase-label">${strings.phase1_label}</span>
        <h3>${strings.phase1_title}</h3>
        <p>${strings.phase1_p}</p>
      </div>

      <div class="phase-card">
        <span class="phase-label">${strings.phase2_label}</span>
        <h3>${strings.phase2_title}</h3>
        <p>${strings.phase2_intro}</p>
        <ul>
          <li>${strings.phase2_li_1}</li>
          <li>${strings.phase2_li_2}</li>
          <li>${strings.phase2_li_3}</li>
          <li>${strings.phase2_li_4}</li>
          <li>${strings.phase2_li_5}</li>
        </ul>
        <p>${strings.phase2_p_outro}</p>
      </div>

      <h2>${strings.h2_what_means}</h2>
      <p>${strings.p_what_means_1}</p>
      <p>${strings.p_what_means_2}</p>
      <p>${strings.p_what_means_3}</p>

      <h2>${strings.h2_anti_framework}</h2>
      <p>${strings.p_anti_1}</p>
      <p>${strings.p_anti_2}</p>
      <p>${strings.p_anti_3}</p>

      <div class="article-cta">
        <h3>${strings.cta_h3}</h3>
        <p>${strings.cta_p}</p>
        <div class="btn-pair">
          <a href="grip-framework-gtm-diagnostic-model.html" class="btn btn-primary">${strings.cta_btn_primary}</a>
          <a href="../grip-marketplace.html" class="btn btn-outline">${strings.cta_btn_outline}</a>
        </div>
      </div>

    </section>

  </main>
  <footer><div class="container"><p>&copy; <span id="year">2026</span> Caugia SASU. All rights reserved. &middot; <a href="../privacy.html" style="color:#94a3b8;text-decoration:none;font-size:.85rem;">Privacy Policy</a> &middot; <a href="../terms.html" style="color:#94a3b8;text-decoration:none;font-size:.85rem;">Terms of Service</a> &middot; <a href="../contact.html" style="color:#94a3b8;text-decoration:none;font-size:.85rem;">Contact</a></p></div></footer>
  <script src="../../assets/caugia-base.js"></script>
</body>
<!--/email_off-->
</html>
`;
}

// ============================================================
// Drive
// ============================================================
async function main() {
  console.log('Translating Framework v1 article × 5 locales...');
  const translations = {};

  for (const loc of LOCALES) {
    process.stdout.write(`  ${loc}: requesting OpenAI...`);
    const t = await translateForLocale(loc);
    translations[loc] = t;
    process.stdout.write(' done\n');
  }

  // Cache translations to disk for reproducibility / debugging
  const cachePath = path.join(ROOT, 'scripts', 'translations-framework-v1.json');
  fs.writeFileSync(cachePath, JSON.stringify(translations, null, 2), 'utf8');
  console.log(`Saved cache: ${cachePath}`);

  // Render + write each locale HTML
  for (const loc of LOCALES) {
    const outDir = path.join(ROOT, loc, 'intelligence');
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, 'caugia-gtm-intelligence-framework-v1.html');
    fs.writeFileSync(outPath, renderLocaleHtml(loc, translations[loc]), 'utf8');
    console.log(`Wrote ${outPath}`);
  }

  console.log('Done.');
}

main().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
