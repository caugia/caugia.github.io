#!/usr/bin/env node
// Translate "AI Answer Market" article × 5 locales (mirror of framework-v1 script)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const SLUG = 'ai-answer-market-pipeline-generation';

function loadOpenAIKey() {
  const envPath = path.resolve(ROOT, '..', 'grip-os', '.env.local');
  const match = fs.readFileSync(envPath, 'utf8').match(/^OPENAI_API_KEY=(.+)$/m);
  return match[1].trim().replace(/^["']|["']$/g, '');
}
const OPENAI_KEY = loadOpenAIKey();

const EN_STRINGS = {
  page_title: 'AI Answer Market: Where Your Next Pipeline Is Being Generated | Caugia',
  meta_desc: "40% of B2B buyers now research with ChatGPT, Claude, Perplexity, or Gemini before they ever touch Google. Pipeline is being generated inside someone else's prompt window. Caugia tracks the AI Answer Market weekly across 5 engines and 8 query categories.",
  og_title: 'AI Answer Market: Where Your Next Pipeline Is Being Generated',
  og_desc: '40% of B2B buyers research with AI before Google. Caugia tracks the AI Answer Market weekly across 5 engines and 8 query categories.',
  twitter_desc: '40% of B2B buyers research with AI before Google. Caugia tracks the AI Answer Market weekly.',
  schema_headline: 'AI Answer Market: Where Your Next Pipeline Is Being Generated',
  schema_desc: '40% of B2B buyers research with AI before Google. Caugia tracks the AI Answer Market weekly across 5 engines and 8 query categories.',

  back_link: '&larr; Back to Intelligence',
  tag_label: 'Implementation &middot; AI Answer Market',
  hero_h1: 'The AI Answer Market is the new front door to your pipeline',
  hero_lead: 'Your next prospect is not on Google. They are inside ChatGPT, Claude, Perplexity, or Gemini, asking a question that ends with a recommendation. If your company is in the answer, you got the at-bat. If not, you never knew the deal existed. This is the AI Answer Market, and most GTM teams cannot tell you where they stand in it.',
  hero_meta: '11 min read &middot; Updated 13&nbsp;May&nbsp;2026',

  h2_front_door: 'The new front door',
  p_front_door_1: 'For two decades the B2B buying journey opened with a Google query. The funnel started at a search bar, ran through a ranked page of blue links, and converged on a handful of vendor sites. SEO was the GTM team&rsquo;s lever. Position 1 meant pipeline.',
  p_front_door_2: 'That funnel is fracturing. Buyers now open ChatGPT, type a problem statement in plain English, and read a synthesised answer that already names the three or four vendors worth talking to. There is no ranked page. There are no blue links. There is one paragraph that decides whether you exist in the consideration set.',

  stat_number: '40%',
  stat_body: 'of B2B buyers now use a generative AI tool as the <strong>first step</strong> of vendor research, before any Google query. Source: HubSpot State of AI in B2B 2025.',

  p_front_door_3: 'Caugia calls this layer the <strong>AI Answer Market</strong>. It is a market because attention flows through it, decisions are made inside it, and revenue downstream depends on whether your category and your brand show up correctly. It is an answer market &mdash; not a search market &mdash; because the unit of output is a single recommendation, not a ranked list.',

  h2_track_weekly: 'What Caugia tracks every week',
  p_track_1: 'The AI Answer Market module runs on a weekly cadence. For each Caugia workspace it tests the same set of buyer-style queries against five engines and scores the result on inclusion, framing, and competitor proximity.',
  p_track_2: 'The 8 query categories cover the buyer-journey surface area where AI-generated answers matter most:',
  q_category_def: '<strong>Category definition</strong> &mdash; &laquo;What is a [your-category] tool?&raquo;',
  q_top_n: '<strong>Top-N lists</strong> &mdash; &laquo;Best [your-category] vendors for [segment]&raquo;',
  q_comparative: '<strong>Comparative</strong> &mdash; &laquo;Vendor A vs Vendor B vs Vendor C&raquo;',
  q_use_case: '<strong>Use-case fit</strong> &mdash; &laquo;Which tool should I use for [specific job]?&raquo;',
  q_pricing: '<strong>Pricing</strong> &mdash; &laquo;How is [your-category] priced?&raquo;',
  q_integration: '<strong>Integration</strong> &mdash; &laquo;Does [your tool] integrate with [adjacent stack]?&raquo;',
  q_trust: '<strong>Trust signals</strong> &mdash; &laquo;Who funds [your company]? Is it venture-backed?&raquo;',
  q_implementation: '<strong>Implementation</strong> &mdash; &laquo;How long does [your-category] take to deploy?&raquo;',
  p_track_3: 'Each query produces a row in the report: which engines mentioned you, where you sat relative to the competitor set, what the AI claimed about you, and where the AI sourced its answer.',

  h2_seo_vs_aam: 'SEO and AAM are not the same problem',
  p_seo_vs_aam_intro: 'Most GTM teams reflex back to their SEO playbook when they hear &laquo;AI visibility.&raquo; That is a mistake. The optimisation surfaces are structurally different.',
  th_seo: 'SEO',
  th_aam: 'AI Answer Market',
  tr_output_label: 'Output',
  tr_output_seo: 'Ranked list of links',
  tr_output_aam: 'Synthesised paragraph, often citing 0-3 sources',
  tr_click_label: 'Buyer click',
  tr_click_seo: 'Required to learn anything',
  tr_click_aam: 'Optional; answer is consumed inline',
  tr_signal_label: 'Inclusion signal',
  tr_signal_seo: 'Crawled and ranked by relevance + authority',
  tr_signal_aam: 'Cited by the model as a source for a specific claim',
  tr_optimise_label: 'What you optimise',
  tr_optimise_seo: 'Keywords, backlinks, page authority',
  tr_optimise_aam: 'Citation-worthy structured content + named-source positioning',
  tr_refresh_label: 'Refresh latency',
  tr_refresh_seo: 'Days to weeks',
  tr_refresh_aam: 'Model training cutoff + retrieval refresh window (variable, often weeks-to-months)',
  tr_measure_label: 'Measurement',
  tr_measure_seo: 'Position, CTR, organic traffic',
  tr_measure_aam: 'Share of voice, comparative inclusion, claim accuracy',
  p_seo_vs_aam_outro: 'Two consequences. First: ranking page 1 on Google does <em>not</em> guarantee you show up in an AI answer. The model decides on relevance using a different signal mix &mdash; structured data, citation graph, conversational match, and the corpora it trained on. Second: an AI-friendly content strategy looks more like an academic citation strategy than a keyword strategy. The asset is not the page rank, it is the page&rsquo;s status as a source the model wants to cite.',

  h2_403030: 'The 40/30/30 reality',
  p_403030_1: 'The buying journey is splitting three ways, not two. Caugia&rsquo;s working model for a mid-market B2B SaaS buyer in 2026:',
  li_403030_1: '<strong>~40% AI-first.</strong> Open ChatGPT or equivalent. Get a recommendation. Use Google only to confirm.',
  li_403030_2: '<strong>~30% Google-first.</strong> Old habit. Funnel runs through SEO + paid search as before.',
  li_403030_3: '<strong>~30% Peer-first.</strong> LinkedIn, communities, podcasts, peer Slack. Vendor names come from human sources, then validated in Google or AI.',
  p_403030_2: 'The split varies by persona &mdash; CFOs skew Google-first, IC product folk skew AI-first, RevOps leaders skew peer-first &mdash; but the directional reality holds. If you optimise only for the 30% that still starts on Google, you cede 70% of the journey to whoever wins the AI answer and the peer recommendation.',

  h2_move_needle: 'How teams move the AAM needle',
  p_move_needle: 'There is no &laquo;rank-tracking tool for AI&raquo; that works the way SEMrush works for Google. AI engines do not expose a stable ranking API. Caugia&rsquo;s AAM module instead samples real answers each week, measures share of voice and comparative position, and reports the deltas. The interventions follow a different pattern than SEO.',

  h3_citation: '1. Citation-worthy structured content',
  p_citation: 'Models cite sources that read like authority. Tables of data, named methodology, original research, taxonomies. The Caugia Framework v1 article is itself an example: every constant is anchored to a named source, which makes the page citable by a model asked &laquo;how do you calibrate GTM frameworks?&raquo;',

  h3_named_source: '2. Named-source positioning',
  p_named_source: 'If your company is the named source for a category-defining claim, you become the model&rsquo;s default citation. This is why category-defining work &mdash; coining the term, publishing the canonical comparison &mdash; produces compounding AAM returns. The first vendor to publish a defensible &laquo;what is X&raquo; article is the one models cite when asked about X.',

  h3_trust_graph: '3. Trust-graph clean-up',
  p_trust_graph: 'AI models lean on review platforms, analyst reports, and structured business directories for trust signals. A clean, current G2 + Capterra + Crunchbase + LinkedIn presence is not optional. Stale data on these sources gets baked into the AI&rsquo;s answer for months.',

  h3_schema: '4. Conversational schema',
  p_schema: 'FAQ schema, HowTo schema, and well-structured Q&amp;A blocks make pages directly consumable by models. This is the technical layer of AAM optimisation. It overlaps with SEO best practice but the bar is higher: the answer has to be self-contained in a paragraph.',

  h2_in_gtm_os: 'Why AAM belongs in the GTM OS, not the marketing dashboard',
  p_in_gtm_os_intro: 'AI Answer Market performance is a structural GTM signal, not a marketing-team KPI. When you are absent from the AI answer, the consequence is not just lower top-of-funnel volume. It is:',
  li_in_gtm_os_1: '<strong>Pipeline composition shifts.</strong> The deals that reach you are filtered through whichever AI answer mentioned you. Your funnel looks like that AI&rsquo;s opinion of you, not your own positioning.',
  li_in_gtm_os_2: '<strong>Win-rate degrades silently.</strong> When the AI describes you inaccurately, your sales team spends the first call correcting the framing instead of qualifying the buyer.',
  li_in_gtm_os_3: '<strong>Competitive lock-in.</strong> If three competitors are consistently named together and you are not, the buyer&rsquo;s short-list is locked before you ever see the deal.',
  p_in_gtm_os_outro: 'None of this shows up in a marketing dashboard. It shows up in the CRO&rsquo;s pipeline composition report and the CFO&rsquo;s CAC analysis, six months later, as a structural deterioration that no one can explain. That is why AAM lives in the Caugia OS at the same level as win-rate analysis, not as a marketing widget.',

  cta_h3: 'See your AI Answer Market position',
  cta_p: 'The AAM module is part of the Caugia OS. Sample queries, weekly tracking, comparison against your top three competitors, deltas over time. Same engine the Full plan uses.',
  cta_btn_primary: 'Free GTM analysis',
  cta_btn_outline: 'Read the diagnostic case',
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
1. Preserve EVERY HTML entity exactly as-is: &mdash; &nbsp; &laquo; &raquo; &lsquo; &rsquo; &larr; &rarr; &middot; &euro; &sup2; &plusmn; &lt; &gt; &amp;
2. Preserve EVERY inline HTML tag exactly: <strong>, </strong>, <em>, </em>, <code>, </code>
3. Keep these brand/technical names UNCHANGED (do not translate): Caugia, GRIP, GTM, AAM, AI Answer Market, ChatGPT, Claude, Perplexity, Gemini, Google AI Overview, SEO, SEMrush, HubSpot, State of AI in B2B 2025, G2, Capterra, Crunchbase, LinkedIn, FAQ schema, HowTo schema, CTR, CRO, CFO, B2B SaaS, GPT-4o, Sonnet, RevOps, CAC.
4. Preserve numeric values exactly (40%, 30%, etc.) and section numbers (1., 2., 3., 4.).
5. Preserve the literal placeholder strings like [your-category], [segment], [specific job], [your tool], [adjacent stack], [your company] — do NOT translate the bracket contents, keep them as English placeholders.
6. Output ONLY a valid JSON object with the same keys, no commentary, no markdown fences.
7. Voice: professional, energetic, citation-driven. Same Nova-energetic tone as English.
8. Use NATIVE diakritieken (German ä/ö/ü/ß, Polish ą/ć/ę/ł/ń/ó/ś/ź/ż, Spanish ñ/á/é/í/ó/ú, French accents) — NEVER ASCII-strip.

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
  const body = await res.json();
  const parsed = JSON.parse(body.choices[0].message.content);
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
    .article-tag { display: inline-block; font-size: 0.65rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 5px; background: #fff1f2; color: #9f1239; margin-bottom: 16px; }
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
    .stat-card { display: grid; grid-template-columns: auto 1fr; gap: 18px; align-items: center; background: linear-gradient(135deg, rgba(224,120,48,0.06), rgba(224,120,48,0.02)); border-left: 3px solid #E07830; padding: 18px 22px; border-radius: 0 10px 10px 0; margin: 20px 0; }
    .stat-number { font-family: Merriweather, serif; font-size: 2rem; font-weight: 900; color: #E07830; line-height: 1; }
    .stat-body { font-size: 0.95rem; line-height: 1.6; color: #334155; }
    .comparison-table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 0.92rem; }
    .comparison-table th, .comparison-table td { padding: 12px 14px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }
    .comparison-table th { background: #f8fafc; font-weight: 800; color: #0f172a; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em; }
    .comparison-table td:first-child { font-weight: 700; color: #0f172a; }
    .engine-list { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0 22px; }
    .engine-list span { background: #f1f5f9; border: 1px solid var(--line); color: #334155; font-size: 0.82rem; font-weight: 600; padding: 6px 12px; border-radius: 6px; }
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
      .stat-card { grid-template-columns: 1fr; gap: 8px; }
      .comparison-table { font-size: 0.82rem; }
      .comparison-table th, .comparison-table td { padding: 8px 10px; }
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

      <h2>${s.h2_front_door}</h2>
      <p>${s.p_front_door_1}</p>
      <p>${s.p_front_door_2}</p>

      <div class="stat-card">
        <div class="stat-number">${s.stat_number}</div>
        <div class="stat-body">${s.stat_body}</div>
      </div>

      <p>${s.p_front_door_3}</p>

      <h2>${s.h2_track_weekly}</h2>
      <p>${s.p_track_1}</p>
      <div class="engine-list">
        <span>ChatGPT (GPT-4o)</span>
        <span>Claude (Sonnet)</span>
        <span>Perplexity</span>
        <span>Gemini</span>
        <span>Google AI Overview</span>
      </div>

      <p>${s.p_track_2}</p>
      <ul>
        <li>${s.q_category_def}</li>
        <li>${s.q_top_n}</li>
        <li>${s.q_comparative}</li>
        <li>${s.q_use_case}</li>
        <li>${s.q_pricing}</li>
        <li>${s.q_integration}</li>
        <li>${s.q_trust}</li>
        <li>${s.q_implementation}</li>
      </ul>
      <p>${s.p_track_3}</p>

      <h2>${s.h2_seo_vs_aam}</h2>
      <p>${s.p_seo_vs_aam_intro}</p>

      <table class="comparison-table">
        <tr><th></th><th>${s.th_seo}</th><th>${s.th_aam}</th></tr>
        <tr><td>${s.tr_output_label}</td><td>${s.tr_output_seo}</td><td>${s.tr_output_aam}</td></tr>
        <tr><td>${s.tr_click_label}</td><td>${s.tr_click_seo}</td><td>${s.tr_click_aam}</td></tr>
        <tr><td>${s.tr_signal_label}</td><td>${s.tr_signal_seo}</td><td>${s.tr_signal_aam}</td></tr>
        <tr><td>${s.tr_optimise_label}</td><td>${s.tr_optimise_seo}</td><td>${s.tr_optimise_aam}</td></tr>
        <tr><td>${s.tr_refresh_label}</td><td>${s.tr_refresh_seo}</td><td>${s.tr_refresh_aam}</td></tr>
        <tr><td>${s.tr_measure_label}</td><td>${s.tr_measure_seo}</td><td>${s.tr_measure_aam}</td></tr>
      </table>

      <p>${s.p_seo_vs_aam_outro}</p>

      <h2>${s.h2_403030}</h2>
      <p>${s.p_403030_1}</p>
      <ul>
        <li>${s.li_403030_1}</li>
        <li>${s.li_403030_2}</li>
        <li>${s.li_403030_3}</li>
      </ul>
      <p>${s.p_403030_2}</p>

      <h2>${s.h2_move_needle}</h2>
      <p>${s.p_move_needle}</p>

      <h3>${s.h3_citation}</h3>
      <p>${s.p_citation}</p>

      <h3>${s.h3_named_source}</h3>
      <p>${s.p_named_source}</p>

      <h3>${s.h3_trust_graph}</h3>
      <p>${s.p_trust_graph}</p>

      <h3>${s.h3_schema}</h3>
      <p>${s.p_schema}</p>

      <h2>${s.h2_in_gtm_os}</h2>
      <p>${s.p_in_gtm_os_intro}</p>
      <ul>
        <li>${s.li_in_gtm_os_1}</li>
        <li>${s.li_in_gtm_os_2}</li>
        <li>${s.li_in_gtm_os_3}</li>
      </ul>
      <p>${s.p_in_gtm_os_outro}</p>

      <div class="article-cta">
        <h3>${s.cta_h3}</h3>
        <p>${s.cta_p}</p>
        <div class="btn-pair">
          <a href="https://os.caugia.com/try" class="btn btn-primary">${s.cta_btn_primary}</a>
          <a href="ai-visibility-invisible-brand.html" class="btn btn-outline">${s.cta_btn_outline}</a>
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
    const outPath = path.join(dir, `${SLUG}.html`);
    fs.writeFileSync(outPath, renderLocaleHtml(loc, out[loc]), 'utf8');
    console.log(`Wrote ${outPath}`);
  }
}

main().catch((e) => { console.error('FATAL:', e.message); process.exit(1); });
