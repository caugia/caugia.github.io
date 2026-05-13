#!/usr/bin/env node
// Translate "Sophie Second Brain" article × 5 locales
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const SLUG = 'sophie-second-brain-revenue';

function loadOpenAIKey() {
  const envPath = path.resolve(ROOT, '..', 'grip-os', '.env.local');
  return fs.readFileSync(envPath, 'utf8').match(/^OPENAI_API_KEY=(.+)$/m)[1].trim().replace(/^["']|["']$/g, '');
}
const OPENAI_KEY = loadOpenAIKey();

const EN_STRINGS = {
  page_title: 'Sophie: A Second Brain for the Revenue Function | Caugia',
  meta_desc: 'Sophie is the AI advisor inside Caugia. She has read every dimension of your GTM operation. Four modes — board prep, sales gut-check, late-night reality check, strategic exploration. Every answer tagged as fact, inference, or hypothesis. Here is what that changes.',
  og_title: 'Sophie: A Second Brain for the Revenue Function',
  og_desc: 'Sophie is the AI advisor inside Caugia. She has read every dimension of your GTM operation. Every answer tagged as fact, inference, or hypothesis.',
  twitter_desc: 'Sophie is the AI advisor inside Caugia. Four modes. Every answer tagged as fact, inference, or hypothesis.',
  schema_headline: 'Sophie: A Second Brain for the Revenue Function',
  schema_desc: 'Sophie is the AI advisor inside Caugia. Every answer tagged as fact, inference, or hypothesis. Four modes.',

  back_link: '&larr; Back to Intelligence',
  tag_label: 'Resources &middot; Sophie',
  hero_h1: 'What a second brain for the revenue function actually does',
  hero_lead: 'A CRO already has a brain. The question is whether the first one has read every dimension of the operation it is steering. Sophie has. She is the AI advisor inside Caugia, calibrated against your assessment scores, your benchmarks, your pipeline composition, your actions cascade, and the GTM Intelligence Framework v1. Four modes. Every answer tagged as fact, inference, or hypothesis. Here is what that changes.',
  hero_meta: '8 min read &middot; Updated 13&nbsp;May&nbsp;2026',

  h2_generic_wrong: 'Generic AI is the wrong tool',
  p_generic_1: 'The default move when a revenue leader has a question is to open ChatGPT, paste in the situation, and read an answer. This is faster than calling an advisor and cheaper than buying a McKinsey deck. It is also the wrong tool. Generic AI does not know your retention curve, your win-rate distribution, your CAC payback by segment, or which of the twelve GRIP pillars is currently constraining your system. It answers in confident, plausible English. The English is correct grammatically. The substance is a hallucination calibrated against a thousand other companies, not yours.',
  p_generic_2: 'Sophie is the opposite of that. She is connected to <strong>your</strong> assessment scores, <strong>your</strong> simulator outputs, <strong>your</strong> connector signal, and the Framework v1 calibration for <strong>your</strong> vertical. When she answers a question, the answer is grounded in real numbers from your workspace, not in an averaged opinion from her training data.',

  h2_four_modes: 'Four modes, four jobs',
  p_four_modes: 'Sophie operates in four modes. Each mode is a different job to be done, with a different system prompt, a different output format, and a different threshold for what counts as a useful answer.',

  mode1_title: 'Board prep',
  mode1_desc: 'You have a board meeting Friday. Sophie pulls the constraint diagnosis, the leakage estimate, the action progress, and the past four weeks of simulator deltas, and drafts the board narrative. You edit, not write.',
  mode2_title: 'Sales gut-check',
  mode2_desc: 'A deal is stuck. You describe the situation. Sophie cross-references your win-rate distribution by segment, your pricing-packaging diagnostic score, and your demand-gen pillar, and tells you which of your structural weaknesses is most likely behind the stall.',
  mode3_title: 'Late-night reality check',
  mode3_desc: 'It is 23:00 and a number on your dashboard does not feel right. Sophie pressure-tests it against your historical pattern, your benchmark range, and your simulator&rsquo;s confidence band, and tells you whether the anomaly is noise or signal.',
  mode4_title: 'Strategic exploration',
  mode4_desc: 'You are considering a structural move. Sophie walks the what-if through the simulator across multiple slider configurations, surfaces the upside-if-fixed range with confidence band, and identifies which GRIP dimension the move actually touches.',

  h2_tags: 'The fact / inference / hypothesis discipline',
  p_tags_intro: 'Sophie tags every answer she gives with one of three labels. This is the most important design decision in the product, and it is the discipline that separates Sophie from any other AI advisor.',
  tag_fact: 'FACT',
  tag_inference: 'INFERENCE',
  tag_hypothesis: 'HYPOTHESIS',
  li_fact: '<strong>FACT</strong>. The claim is grounded in your data, your assessment, or a named public benchmark. Example: &laquo;Your Q1 NRR was 104%, against an OpenView SaaS Benchmarks 2024 median of 108%. This is a fact from your workspace.&raquo;',
  li_inference: '<strong>INFERENCE</strong>. The claim follows logically from one or more facts plus the framework&rsquo;s calibration. Example: &laquo;Given your Performance score of 47/100 and the SaaS B2B Performance weight of 0.35, your modelled drag is &euro;X/year. This is an inference, not a measurement.&raquo;',
  li_hypothesis: '<strong>HYPOTHESIS</strong>. The claim is plausible but not yet supported by your data or by a named benchmark. Example: &laquo;Hypothesis: your pricing packaging may be suppressing expansion. We have not measured this directly, but the inference would be testable by sampling renewal cohorts.&raquo;',
  p_tags_outro: 'This tagging is not aesthetic. It is operational. A board member who reads a Sophie-generated narrative tagged as inference does not treat it as a measured fact. A CRO who reads a hypothesis treats it as something to test, not something to budget against. The discipline of separating these three modalities is what stops AI-assisted decisions from drifting into confident nonsense.',

  h2_inside_os: 'Why this lives inside the GTM OS, not outside it',
  p_inside_os_1: 'An AI advisor disconnected from the operation it is advising is a research tool. An AI advisor connected to the assessment, the simulator, the action cascade, and the connector signal is an operational tool. Same model architecture; entirely different product.',
  p_inside_os_2: 'This is why Sophie lives inside the Caugia OS, not as a standalone product. Every answer she gives needs three things she cannot get from a generic API: the customer&rsquo;s scored assessment (the structural diagnosis), the customer&rsquo;s simulator state (the projection), and the framework&rsquo;s per-vertical calibration (the numerical anchors). Outside the OS those three are not available. Inside the OS they are the substrate every answer is built on.',
  p_inside_os_3: 'Sophie speaks every language the OS speaks. The role-vocabulary adjusts to your vertical: a SaaS workspace hears &laquo;your CRO&raquo;, a DTC workspace hears &laquo;your VP Growth&raquo;, a ProfSvc workspace hears &laquo;your Practice Lead.&raquo; A small detail, but it is the difference between a tool that <em>feels</em> like it was built for your industry and one that obviously was not.',

  h2_what_not: 'What Sophie is not',
  p_what_not_1: 'Sophie is not a replacement for your strategy work. She is a faster way to pressure-test the strategy work you do. She is not a replacement for human advisors. She is the layer between &laquo;I have a question&raquo; and &laquo;I have an advisor on the calendar&raquo;, which for most operational decisions is where the friction lives. She is not infallible. She tags her own hypotheses, which means she also tells you when she is least sure.',
  p_what_not_2: 'What she is: a second brain that has read every dimension of your operation, that operates 24/7, that does not get tired of your questions, and that hands you back answers labelled by their epistemic strength. The next decision happens faster. And it is harder to talk you out of, because the inference chain is on the page next to the conclusion.',

  cta_h3: 'Try Sophie inside your own workspace',
  cta_p: 'Sophie sits inside the Caugia OS. Spin up a workspace, run the quick assessment, and ask her something hard. The free tier gives you the same Sophie the Full plan uses.',
  cta_btn_primary: 'Open a workspace',
  cta_btn_outline: 'Read about the product',
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
  const enJson = JSON.stringify(EN_STRINGS, null, 2);
  const prompt = `Translate this English JSON of HTML fragments into ${LOCALE_NAMES[locale]}.

RULES:
1. Preserve HTML entities exactly: &mdash; &nbsp; &laquo; &raquo; &lsquo; &rsquo; &larr; &rarr; &middot; &euro; &amp; &lt; &gt;
2. Preserve inline HTML tags: <strong></strong>, <em></em>, <code></code>
3. Keep UNCHANGED: Caugia, Sophie, GRIP, GTM, ChatGPT, OpenAI, McKinsey, OpenView, SaaS Benchmarks, NRR, MER, AOV, ARR, CAC, CRO, VP Growth, Practice Lead, Q1, SaaS B2B, DTC, Fintech B2B, Professional Services, ProfSvc, B2B SaaS, Performance, Framework v1, FACT, INFERENCE, HYPOTHESIS (keep these three in CAPS even when translating).
4. Preserve numeric values (104%, 108%, 47/100, 0.35, 23:00, 4 weeks).
5. Output ONLY valid JSON with same keys, no markdown fences.
6. Voice: professional, energetic, Nova-energetic tone.
7. NATIVE diakritieken always.

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
  if (!res.ok) throw new Error(`${locale} ${res.status}`);
  const parsed = JSON.parse((await res.json()).choices[0].message.content);
  const missing = Object.keys(EN_STRINGS).filter((k) => !(k in parsed));
  if (missing.length) throw new Error(`${locale} missing keys: ${missing.slice(0, 3).join(',')}`);
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
    .article-tag { display: inline-block; font-size: 0.65rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 5px; background: #fef3c7; color: #92400e; margin-bottom: 16px; }
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
    .mode-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 24px 0; }
    .mode-card { background: #f8fafc; border: 1px solid var(--line); border-radius: 12px; padding: 22px 24px; }
    .mode-card .mode-num { font-family: Merriweather, serif; font-size: 1.6rem; font-weight: 900; color: #92400e; line-height: 1; margin-bottom: 8px; }
    .mode-card h3 { font-size: 1.02rem; font-weight: 800; color: #0f172a; margin: 0 0 8px; }
    .mode-card p { font-size: 0.92rem; color: #334155; line-height: 1.6; margin: 0; }
    .tag-row { display: flex; gap: 10px; flex-wrap: wrap; margin: 16px 0 22px; }
    .tag-row .answer-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 0.82rem; font-weight: 700; padding: 6px 12px; border-radius: 999px; border: 1px solid var(--line); background: #fff; }
    .tag-row .answer-tag.fact { color: #065f46; border-color: #6ee7b7; background: #ecfdf5; }
    .tag-row .answer-tag.inference { color: #92400e; border-color: #fcd34d; background: #fef3c7; }
    .tag-row .answer-tag.hypothesis { color: #9f1239; border-color: #fda4af; background: #fff1f2; }
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
      .mode-grid { grid-template-columns: 1fr; }
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

      <h2>${s.h2_generic_wrong}</h2>
      <p>${s.p_generic_1}</p>
      <p>${s.p_generic_2}</p>

      <h2>${s.h2_four_modes}</h2>
      <p>${s.p_four_modes}</p>

      <div class="mode-grid">
        <div class="mode-card">
          <div class="mode-num">01</div>
          <h3>${s.mode1_title}</h3>
          <p>${s.mode1_desc}</p>
        </div>
        <div class="mode-card">
          <div class="mode-num">02</div>
          <h3>${s.mode2_title}</h3>
          <p>${s.mode2_desc}</p>
        </div>
        <div class="mode-card">
          <div class="mode-num">03</div>
          <h3>${s.mode3_title}</h3>
          <p>${s.mode3_desc}</p>
        </div>
        <div class="mode-card">
          <div class="mode-num">04</div>
          <h3>${s.mode4_title}</h3>
          <p>${s.mode4_desc}</p>
        </div>
      </div>

      <h2>${s.h2_tags}</h2>
      <p>${s.p_tags_intro}</p>

      <div class="tag-row">
        <span class="answer-tag fact">&#9679; ${s.tag_fact}</span>
        <span class="answer-tag inference">&#9679; ${s.tag_inference}</span>
        <span class="answer-tag hypothesis">&#9679; ${s.tag_hypothesis}</span>
      </div>

      <ul>
        <li>${s.li_fact}</li>
        <li>${s.li_inference}</li>
        <li>${s.li_hypothesis}</li>
      </ul>

      <p>${s.p_tags_outro}</p>

      <h2>${s.h2_inside_os}</h2>
      <p>${s.p_inside_os_1}</p>
      <p>${s.p_inside_os_2}</p>
      <p>${s.p_inside_os_3}</p>

      <h2>${s.h2_what_not}</h2>
      <p>${s.p_what_not_1}</p>
      <p>${s.p_what_not_2}</p>

      <div class="article-cta">
        <h3>${s.cta_h3}</h3>
        <p>${s.cta_p}</p>
        <div class="btn-pair">
          <a href="https://os.caugia.com/try" class="btn btn-primary">${s.cta_btn_primary}</a>
          <a href="../product.html" class="btn btn-outline">${s.cta_btn_outline}</a>
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
  console.log(`Translating ${SLUG} × 5...`);
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
