#!/usr/bin/env node
// Translate "Per-Vertical Calibration" article × 5 locales
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const SLUG = 'per-vertical-calibration-gtm-framework';

function loadOpenAIKey() {
  const envPath = path.resolve(ROOT, '..', 'grip-os', '.env.local');
  const match = fs.readFileSync(envPath, 'utf8').match(/^OPENAI_API_KEY=(.+)$/m);
  return match[1].trim().replace(/^["']|["']$/g, '');
}
const OPENAI_KEY = loadOpenAIKey();

const EN_STRINGS = {
  page_title: "Per-Vertical Calibration: Why One GTM Framework Doesn't Fit Four Industries | Caugia",
  meta_desc: 'SaaS B2B compounds through retention. DTC turns inventory into cash in 90 days. Fintech B2B fails on compliance, not on demand. Professional Services scales linearly with utilization. One GTM framework cannot use the same constants for all four. Here is how Caugia calibrates per vertical.',
  og_title: "Per-Vertical Calibration: Why One GTM Framework Doesn't Fit Four Industries",
  og_desc: 'One GTM framework. Four industry calibrations. Here is why a SaaS playbook breaks in DTC, Fintech, and Professional Services — and what Caugia does about it.',
  twitter_desc: 'One framework. Four calibrations. Why a SaaS playbook breaks in DTC, Fintech, and Professional Services.',
  schema_headline: "Per-Vertical Calibration: Why One GTM Framework Doesn't Fit Four Industries",
  schema_desc: 'One GTM framework. Four industry calibrations. Why a SaaS playbook breaks in DTC, Fintech, and Professional Services.',

  back_link: '&larr; Back to Intelligence',
  tag_label: 'Guidance &middot; Calibration',
  hero_h1: 'Why one GTM framework cannot use the same constants for four industries',
  hero_lead: 'A SaaS B2B operator compounds through net-revenue retention. A DTC operator turns inventory into cash in 90 days. A Fintech B2B operator can be killed by a compliance block. A Professional Services operator scales linearly with utilisation. These are four different physical realities. Any framework that ignores them, by using the same drag sensitivity and the same recovery factors across the board, lies about the math.',
  hero_meta: '9 min read &middot; Updated 13&nbsp;May&nbsp;2026',

  h2_mistake: 'The &laquo;one framework fits all&raquo; mistake',
  p_mistake_1: 'Most consulting frameworks are calibrated against one industry &mdash; usually the one the partner came from &mdash; and then sold to the others with the constants unchanged. The model looks the same on the slide, but underneath, the multipliers, the recovery rates, the dimension weights are wrong for three of the four verticals. The customer cannot see this. The output looks like an opinion from an expert. It is in fact a SaaS opinion applied to a DTC business, or a Fintech opinion applied to a ProfSvc business.',
  p_mistake_2: 'Caugia calibrates the same GRIP framework against four different industries. The structure stays the same: four dimensions (Guidance, Resources, Implementation, Performance), twelve pillars, deterministic scoring. The <em>constants</em> change. Here is why they must.',

  h2_physics: 'The physics differ. So the math must.',

  saas_pill: 'SaaS B2B',
  saas_subtitle: 'Compounding through retention',
  saas_p_1: 'A SaaS company at &euro;30M ARR with 110% net-revenue retention doubles in roughly seven years without acquiring a single new customer. The math compounds. A 10-point gap in win-rate or expansion motion is not a 10% revenue gap &mdash; it is a 25-30% gap over five years, because the deficit compounds against the same retention curve. <strong>Performance dominates the model.</strong>',
  saas_p_2: 'Below-median Rule-of-40 performers in the Bessemer Cloud Index attribute roughly 60% of their gap to identifiable GTM-system weakness, not to product-market fit. That is the calibration anchor for the drag sensitivity, and it lands at a meaningfully high level.',

  dtc_pill: 'DTC',
  dtc_subtitle: 'Inventory turns, not retention curves',
  dtc_p_1: 'A DTC brand operates on a fundamentally faster clock. Cash-conversion cycle is measured in weeks. The half-life of a fix is roughly 4 months, against SaaS&rsquo;s 9 months &mdash; Drivepoint&rsquo;s cohort recovery work across 188 brands in the &euro;5-15M range confirms this. The brand can correct course inside a single inventory turn, but the cost of being wrong is also more immediate: a bad Q1 starves Q2 of working capital.',
  dtc_p_2: 'Performance dominates even more than in SaaS, because repeat-rate, MER, and AOV are existential. Triple Whale&rsquo;s State of DTC 2024 makes this explicit. But the drag sensitivity is <em>lower</em> than SaaS, because corrections happen inside a single quarter, not across multi-year retention curves.',

  fintech_pill: 'Fintech B2B',
  fintech_subtitle: 'Regulatory inertia compounds',
  fintech_p_1: 'A Fintech B2B operator can have great product, great pricing, and great demand &mdash; and still lose 14 months to a compliance block. Acrew Capital&rsquo;s State of Fintech 2024 puts the median time-to-recover from a regulatory event at roughly that, and the consequence cascades: integration partners freeze, prospects defer, the funnel restarts from the top.',
  fintech_p_2: 'The model has to reflect that. Resources (compliance headcount, sandbox-to-prod conversion, integration capability) and Implementation (regulatory operations) dominate. Performance is constrained because no Performance gain can outrun a regulatory drag. Recovery factors are systematically lower than SaaS or DTC because regulatory inertia is structural, not behavioural.',

  profsvc_pill: 'Professional Services',
  profsvc_subtitle: 'Linear scaling, not exponential',
  profsvc_p_1: 'A consulting practice or services firm scales linearly with headcount and utilisation. There is no compounding flywheel. A 10% utilisation gap creates roughly a 10% revenue gap &mdash; not 25% over five years, not a regulatory cascade, just a proportional shortfall. SPI&rsquo;s PS Maturity Benchmark 2024 codifies this: ProfSvc is a people-business with bounded operational leverage, not a system-business with compounding leverage.',
  profsvc_p_2: 'The drag sensitivity is the lowest of the four verticals. Guidance and Resources dominate (strategy, talent quality, practice leadership). Kennedy&rsquo;s Pulse Survey confirms G + R as the practical centre of gravity in consulting outcomes.',

  h2_changes_most: 'The constant that changes the most: K_DRAG',
  p_changes_most: 'K_DRAG is the framework&rsquo;s sensitivity coefficient &mdash; how much revenue impact follows from a unit of system weakness. Across our four verticals it ranges from 0.50 (ProfSvc) to 0.70 (Fintech), a 40% spread. The Bessemer/Acrew/Drivepoint/SPI literature gives us the anchors. Applying SaaS&rsquo;s 0.60 to ProfSvc would over-state drag by 20%; applying it to Fintech would under-state drag by 17%. Either error is fatal to the credibility of the output.',

  h2_changes_least: 'The constant that changes the least: GRIP itself',
  p_changes_least_1: 'What does <em>not</em> change is the structural model. Every vertical we have studied still has four dimensions of GTM health (Guidance, Resources, Implementation, Performance). Every vertical still has twelve pillars underneath them. The structural taxonomy is invariant. It is the <em>weights</em> on the taxonomy that change.',
  p_changes_least_2: 'This is what makes the framework portable. We do not invent a new GTM theory for each industry. We re-calibrate the same theory against industry-specific anchors. Same engine, four sets of constants, full transparency on which constant comes from which source.',

  h2_read_benchmarks: 'What this means for how you read benchmark data',
  p_read_benchmarks_1: 'The market is full of &laquo;benchmark&raquo; reports that publish a single number for &laquo;the median&raquo; GTM team. Without a per-vertical decomposition, those numbers are noise. A 110% NRR median across &laquo;the industry&raquo; is a SaaS-weighted statistic that has zero meaning for a DTC operator (where NRR is not even the right primary metric) and active harm for a ProfSvc operator (whose retention dynamics are entirely different from subscription software).',
  p_read_benchmarks_2: 'The Caugia approach: every constant we publish has a vertical scope attached. <code>K_DRAG&nbsp;=&nbsp;0.60</code> is a SaaS B2B constant, not a Caugia constant. The Phase 2 cohort backtest in Q3 2026 will tighten the per-vertical numbers further against observed customer outcomes, but the principle holds: <strong>numbers without a vertical scope are misleading</strong>.',

  h2_implications: 'Implications for cross-vertical advisors and VCs',
  p_implications_1: 'If you advise companies across more than one of these four verticals, or if you sit on the board of a SaaS company and a DTC company simultaneously, the per-vertical calibration matters operationally. The same red flag (low Performance score) does not mean the same thing in each portfolio company. In SaaS it usually points at the retention engine. In DTC it points at MER or repeat-rate. In Fintech it might be downstream of an upstream Implementation problem you have not surfaced yet. In ProfSvc it points at utilisation and engagement margin.',
  p_implications_2: 'One framework. Four lenses. Same math, different constants. The discipline is the same in all four cases: identify constraint location, quantify revenue leakage, sequence the intervention. The numbers behind each step depend on which industry you are inside.',

  cta_h3: 'See the calibration in your vertical',
  cta_p: 'The simulator and the assessment both auto-select the per-vertical constants based on your workspace setup. Run a quick analysis on your own company to see which constants apply and what they imply for your number.',
  cta_btn_primary: 'Free GTM analysis',
  cta_btn_outline: 'Read the methodology',
};

const LOCALES = ['nl', 'fr', 'de', 'es', 'pl'];
const LOCALE_NAMES = {
  nl: 'Dutch (Netherlands), informal "je"',
  fr: 'French (France), formal "vous"',
  de: 'German (DE), formal "Sie"',
  es: 'Spanish (Spain), informal "tú"',
  pl: 'Polish (Poland), informal "ty" but professional register',
};

async function translateForLocale(locale) {
  const localeName = LOCALE_NAMES[locale];
  const enJson = JSON.stringify(EN_STRINGS, null, 2);
  const prompt = `You are a senior B2B SaaS marketing translator. Translate the following English JSON of HTML-fragment strings into ${localeName}.

CRITICAL RULES:
1. Preserve EVERY HTML entity exactly: &mdash; &nbsp; &laquo; &raquo; &lsquo; &rsquo; &larr; &rarr; &middot; &euro; &lt; &gt; &amp;
2. Preserve EVERY inline HTML tag exactly: <strong>, </strong>, <em>, </em>, <code>, </code>
3. Keep these brand/technical names UNCHANGED: Caugia, GRIP, GTM, K_DRAG, DIMENSION_WEIGHTS, RECOVERY_FACTORS, Constraint Engine, Bessemer, Cloud Index, Rule-of-40, OpenView, Drivepoint, Triple Whale, State of DTC, Acrew, Capital, State of Fintech, FT Partners, Plaid, Stripe Atlas, SPI, Service Performance Insights, PS Maturity Benchmark, Kennedy, Pulse Survey, NRR, MER, AOV, ARR, SaaS B2B, DTC, Fintech B2B, Professional Services, ProfSvc, G, R, I, P, Q1, Q2, Q3 2026.
4. Preserve numeric values exactly (0.60, 0.55, 0.70, 0.50, 10%, 110%, 14 months, 4 months, 9 months, 188 brands, &euro;30M ARR, &euro;5-15M, 25-30%).
5. Output ONLY a valid JSON object with the same keys, no commentary, no markdown fences.
6. Voice: professional, energetic, citation-driven, Nova-energetic tone matching English.
7. Use NATIVE diakritieken (DE ä/ö/ü/ß, PL ą/ć/ę/ł/ń/ó/ś/ź/ż, ES ñ/á/é/í/ó/ú, FR accents) — NEVER ASCII-strip.

English source JSON:
${enJson}

Return only the translated JSON, no other text.`;

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

function renderLocaleHtml(locale, s) {
  return `<!--email_off-->
<!DOCTYPE html>
<html lang="${locale}">
<head>
<meta charset="UTF-8" />
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
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YDP8FW3T3Z"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YDP8FW3T3Z');
</script>
  <meta name="google-site-verification" content="MJ7qIuQm097NeOdxKSV34apfgQNz3UbOPbufxWgv7Uc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>${s.page_title}</title>
  <meta name="description" content="${s.meta_desc}" />
  <link rel="canonical" href="https://www.caugia.com/${locale}/intelligence/${SLUG}.html" />
  <link rel="alternate" hreflang="en" href="https://www.caugia.com/intelligence/${SLUG}.html" />
  <link rel="alternate" hreflang="fr" href="https://www.caugia.com/fr/intelligence/${SLUG}.html" />
  <link rel="alternate" hreflang="de" href="https://www.caugia.com/de/intelligence/${SLUG}.html" />
  <link rel="alternate" hreflang="es" href="https://www.caugia.com/es/intelligence/${SLUG}.html" />
  <link rel="alternate" hreflang="pl" href="https://www.caugia.com/pl/intelligence/${SLUG}.html" />
  <link rel="alternate" hreflang="nl" href="https://www.caugia.com/nl/intelligence/${SLUG}.html" />
  <link rel="alternate" hreflang="x-default" href="https://www.caugia.com/intelligence/${SLUG}.html" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://www.caugia.com/${locale}/intelligence/${SLUG}.html" />
  <meta property="og:title" content="${s.og_title}" />
  <meta property="og:description" content="${s.og_desc}" />
  <meta property="og:image" content="https://www.caugia.com/assets/logo-final.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${s.og_title}" />
  <meta name="twitter:description" content="${s.twitter_desc}" />
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
    .article-tag { display: inline-block; font-size: 0.65rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 5px; background: #eff6ff; color: var(--primary); margin-bottom: 16px; }
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
    .vertical-card { border-left: 3px solid var(--primary); background: #f8fafc; padding: 22px 26px; border-radius: 0 12px 12px 0; margin: 24px 0; }
    .vertical-card.saas { border-left-color: #3B6CD8; }
    .vertical-card.dtc { border-left-color: #E07830; }
    .vertical-card.fintech { border-left-color: #0c4a6e; }
    .vertical-card.profsvc { border-left-color: #065f46; }
    .vertical-card h3 { margin-top: 0; display: flex; align-items: baseline; gap: 10px; }
    .vertical-card .vertical-pill { display: inline-block; font-size: 0.65rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; padding: 3px 9px; border-radius: 5px; background: rgba(59,108,216,0.12); color: var(--primary); }
    .vertical-card.dtc .vertical-pill { background: rgba(224,120,48,0.12); color: #E07830; }
    .vertical-card.fintech .vertical-pill { background: rgba(12,74,110,0.12); color: #0c4a6e; }
    .vertical-card.profsvc .vertical-pill { background: rgba(6,95,70,0.12); color: #065f46; }
    .vertical-card .k-drag-row { background: #fff; border: 1px solid var(--line); border-radius: 8px; padding: 10px 14px; margin-top: 14px; font-size: 0.92rem; color: #334155; }
    .vertical-card code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.86rem; }
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
      .article-cta { padding: 28px 22px; }
    }
  </style>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(s.schema_headline)},
    "description": ${JSON.stringify(s.schema_desc)},
    "image": "https://www.caugia.com/assets/logo-final.png",
    "author": { "@type": "Organization", "name": "Caugia", "url": "https://www.caugia.com" },
    "publisher": { "@type": "Organization", "name": "Caugia", "logo": { "@type": "ImageObject", "url": "https://www.caugia.com/assets/logo-final.png" } },
    "datePublished": "2026-05-13",
    "dateModified": "2026-05-13",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.caugia.com/${locale}/intelligence/${SLUG}.html" },
    "inLanguage": "${locale}"
  }
  </script>
</head>
<body>
  <script src="../../assets/header.js"></script>
  <main>

    <section class="container article-hero">
      <a href="../intelligence.html" class="intel-back">${s.back_link}</a>
      <span class="article-tag">${s.tag_label}</span>
      <h1>${s.hero_h1}</h1>
      <p class="article-lead">${s.hero_lead}</p>
      <div class="article-meta">${s.hero_meta}</div>
    </section>

    <section class="container article-body">

      <h2>${s.h2_mistake}</h2>
      <p>${s.p_mistake_1}</p>
      <p>${s.p_mistake_2}</p>

      <h2>${s.h2_physics}</h2>

      <div class="vertical-card saas">
        <h3><span class="vertical-pill">${s.saas_pill}</span> ${s.saas_subtitle}</h3>
        <p>${s.saas_p_1}</p>
        <p>${s.saas_p_2}</p>
        <div class="k-drag-row"><code>K_DRAG&nbsp;=&nbsp;0.60</code> &middot; <code>P&nbsp;weight&nbsp;=&nbsp;0.35</code> &middot; <code>P&nbsp;recovery&nbsp;=&nbsp;0.70</code></div>
      </div>

      <div class="vertical-card dtc">
        <h3><span class="vertical-pill">${s.dtc_pill}</span> ${s.dtc_subtitle}</h3>
        <p>${s.dtc_p_1}</p>
        <p>${s.dtc_p_2}</p>
        <div class="k-drag-row"><code>K_DRAG&nbsp;=&nbsp;0.55</code> &middot; <code>P&nbsp;weight&nbsp;=&nbsp;0.45</code> &middot; <code>P&nbsp;recovery&nbsp;=&nbsp;0.75</code></div>
      </div>

      <div class="vertical-card fintech">
        <h3><span class="vertical-pill">${s.fintech_pill}</span> ${s.fintech_subtitle}</h3>
        <p>${s.fintech_p_1}</p>
        <p>${s.fintech_p_2}</p>
        <div class="k-drag-row"><code>K_DRAG&nbsp;=&nbsp;0.70</code> &middot; <code>R&nbsp;+&nbsp;I&nbsp;weight&nbsp;=&nbsp;0.60</code> &middot; <code>P&nbsp;recovery&nbsp;=&nbsp;0.60</code></div>
      </div>

      <div class="vertical-card profsvc">
        <h3><span class="vertical-pill">${s.profsvc_pill}</span> ${s.profsvc_subtitle}</h3>
        <p>${s.profsvc_p_1}</p>
        <p>${s.profsvc_p_2}</p>
        <div class="k-drag-row"><code>K_DRAG&nbsp;=&nbsp;0.50</code> &middot; <code>G&nbsp;+&nbsp;R&nbsp;weight&nbsp;=&nbsp;0.60</code> &middot; <code>P&nbsp;recovery&nbsp;=&nbsp;0.60</code></div>
      </div>

      <h2>${s.h2_changes_most}</h2>
      <p>${s.p_changes_most}</p>

      <h2>${s.h2_changes_least}</h2>
      <p>${s.p_changes_least_1}</p>
      <p>${s.p_changes_least_2}</p>

      <h2>${s.h2_read_benchmarks}</h2>
      <p>${s.p_read_benchmarks_1}</p>
      <p>${s.p_read_benchmarks_2}</p>

      <h2>${s.h2_implications}</h2>
      <p>${s.p_implications_1}</p>
      <p>${s.p_implications_2}</p>

      <div class="article-cta">
        <h3>${s.cta_h3}</h3>
        <p>${s.cta_p}</p>
        <div class="btn-pair">
          <a href="https://os.caugia.com/try" class="btn btn-primary">${s.cta_btn_primary}</a>
          <a href="caugia-gtm-intelligence-framework-v1.html" class="btn btn-outline">${s.cta_btn_outline}</a>
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

async function main() {
  console.log(`Translating ${SLUG} × 5 locales...`);
  const out = {};
  for (const loc of LOCALES) {
    process.stdout.write(`  ${loc}...`);
    out[loc] = await translateForLocale(loc);
    process.stdout.write(' done\n');
  }
  fs.writeFileSync(path.join(ROOT, 'scripts', `translations-${SLUG}.json`), JSON.stringify(out, null, 2));
  for (const loc of LOCALES) {
    const dir = path.join(ROOT, loc, 'intelligence');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${SLUG}.html`), renderLocaleHtml(loc, out[loc]), 'utf8');
    console.log(`Wrote ${loc}`);
  }
}

main().catch((e) => { console.error('FATAL:', e.message); process.exit(1); });
