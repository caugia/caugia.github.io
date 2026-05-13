#!/usr/bin/env node
// Translate "From Diagnostic to OS" article × 5 locales
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const SLUG = 'from-diagnostic-to-operating-system';

const OPENAI_KEY = fs.readFileSync(path.resolve(ROOT, '..', 'grip-os', '.env.local'), 'utf8')
  .match(/^OPENAI_API_KEY=(.+)$/m)[1].trim().replace(/^["']|["']$/g, '');

const EN_STRINGS = {
  page_title: 'From Diagnostic to Operating System: What a GTM OS Actually Does | Caugia',
  meta_desc: 'A diagnostic tells you what is broken. An operating system runs the operation. Why GTM teams need both — and why the diagnostic alone has never changed behaviour at scale. The category shift from board-deck to OS, explained.',
  og_title: 'From Diagnostic to Operating System: What a GTM OS Actually Does',
  og_desc: 'A diagnostic tells you what is broken. An operating system runs the operation. The category shift, explained.',
  twitter_desc: 'A diagnostic tells you what is broken. An OS runs the operation. The category shift, explained.',
  schema_headline: 'From Diagnostic to Operating System: What a GTM OS Actually Does',
  schema_desc: 'A diagnostic tells you what is broken. An operating system runs the operation. The category shift, explained.',

  back_link: '&larr; Back to Intelligence',
  tag_label: 'Performance &middot; Category Shift',
  hero_h1: 'What a GTM operating system actually does, and why diagnostics alone never changed behaviour',
  hero_lead: 'Every consulting firm has sold a GTM diagnostic. Every CRO has sat through one. The diagnoses have been accurate. The behaviour has changed almost nowhere. The reason is structural: a diagnostic is a one-time photograph of a system. An operating system is the daily surface on which the system runs. Those are two different products. Caugia is building the second one.',
  hero_meta: '10 min read &middot; Updated 13&nbsp;May&nbsp;2026',

  h2_diagnostic_fail: 'The diagnostic-only failure mode',
  p_diagnostic_fail_1: 'A GTM diagnostic produces a deck. The deck identifies the structural weaknesses, quantifies the leakage, and recommends an intervention sequence. The CRO presents the deck to the board. The board agrees. The team commits to the workstreams. Three months later the team is doing the same things it was doing before, and the leakage estimate is still on the deck that nobody opens.',
  p_diagnostic_fail_2: 'This is not a failure of the diagnosis. The diagnosis is usually correct. It is a failure of the <em>delivery surface</em>. A deck cannot enforce a routing of a deal through the right qualification motion. A deck cannot remind a CS manager that the expansion conversation was supposed to happen this quarter. A deck cannot recalculate the leakage estimate when a new pricing experiment ships. A deck sits in the same drawer as last year&rsquo;s strategy offsite, and it has the same operational half-life: zero.',

  h2_os_different: 'What an operating system does differently',
  p_os_different_1: 'An operating system is the surface on which work happens. For software developers it is the IDE plus the build system plus the version control plus the deployment pipeline. For finance teams it is the GL plus the close software plus the reporting layer. For revenue teams, until recently, there has not been one. There has been a CRM, an MAP, a CS tool, a BI dashboard, and a slide deck. Disconnected. Each owned by a different function. None of them telling you which of the twelve GRIP pillars is currently constraining your system.',
  p_os_different_2: 'A GTM operating system has four jobs that a diagnostic deck cannot do.',

  h3_living: '1. It maintains a living diagnosis',
  p_living: 'The constraint is not a fixed thing. It moves as you fix one bottleneck and a downstream one becomes the new ceiling. A diagnostic deck cannot track this. An OS recomputes the scored assessment every time the underlying signal moves, surfaces the new constraint, and shows the cost of inaction in euros per month. The diagnosis is always current. You never end up working off a six-month-old deck.',

  h3_routes: '2. It routes actions to the right level',
  p_routes: 'Strategic actions go to the CEO and the executive ring. Tactical actions go to function VPs. Operational actions go to ICs. Every action has an owner, a deadline, a KPI, and a gate that must clear before the next phase unlocks. The OS enforces the cascade. A deck cannot enforce anything.',

  h3_quantifies: '3. It quantifies projected impact, with confidence bands',
  p_quantifies: 'For every intervention under consideration, the simulator projects upside-if-fixed against confidence bands derived from the framework&rsquo;s vertical calibration. The number is not a promise, but it is a defensible midpoint. The CRO and the CFO can argue about which intervention to prioritise <em>with the same number on screen</em>, instead of with two competing opinions.',

  h3_brief: '4. It produces the artefact the board reads',
  p_brief: 'The monthly Brief is auto-generated from the current state of the workspace. Constraint status, leakage estimate, action progress, AI Answer Market position, key deltas. Six minutes to forward, instead of six hours to assemble. The CRO&rsquo;s monthly narrative becomes a one-pager the board actually reads, instead of a 25-slide deck the board scrolls.',

  h2_vs: 'Diagnostic vs operating system: the operational difference',
  th_diagnostic: 'Diagnostic',
  th_os: 'Operating system',

  tr_output: 'Output',
  tr_output_d: 'One-time deck',
  tr_output_os: 'Living workspace',
  tr_refresh: 'Refresh cadence',
  tr_refresh_d: 'Quarterly at best',
  tr_refresh_os: 'Real-time on signal change',
  tr_enforce: 'Enforcement',
  tr_enforce_d: 'None. Deck sits in a drawer.',
  tr_enforce_os: 'Action cascade with owners, deadlines, gates',
  tr_proj: 'Projection',
  tr_proj_d: 'Range in the slides',
  tr_proj_os: 'Simulator with confidence band',
  tr_narr: 'Board narrative',
  tr_narr_d: '6 hours to build',
  tr_narr_os: '6 minutes from auto-generated brief',
  tr_fit: 'Vertical fit',
  tr_fit_d: 'Single playbook applied across industries',
  tr_fit_os: 'Per-vertical calibration on the same framework',
  tr_ai: 'AI advisory',
  tr_ai_d: 'None, or generic ChatGPT',
  tr_ai_os: 'Sophie, with full operational context',
  tr_cost: 'Cost',
  tr_cost_d: '&euro;50K-300K per engagement',
  tr_cost_os: 'SaaS subscription',
  tr_decay: 'Decay',
  tr_decay_d: 'Conclusions stale within months',
  tr_decay_os: 'Re-grounds on every signal change',

  h2_shift: 'The category shift',
  p_shift_1: 'The market for GTM diagnostics has existed for thirty years. Consultancies, fractional CROs, and the &laquo;framework-as-a-product&raquo; tier of advisory firms have all played in it. The output is always the same: an artefact that diagnoses correctly and changes behaviour rarely.',
  p_shift_2: 'The category for a GTM operating system is new. It exists because three things finally converged. First: enough connector APIs to pull live signal from the CRM, ad platforms, comms tools, and billing into one workspace. Second: deterministic scoring engines that turn that signal into a constraint diagnosis without an LLM in the math path. Third: per-vertical benchmark literature complete enough to calibrate the constants against named public sources, not against opinion. Without those three, an OS would be a glorified dashboard. With them, it becomes a daily decision surface that earns its place in the workflow.',
  p_shift_3: 'Caugia is built around the conviction that the diagnostic alone is not the bottleneck. The delivery surface is. The OS is the delivery surface, and everything else &mdash; the assessment, the simulator, Sophie, the brief, the actions cascade &mdash; runs on top of it.',

  h2_buyers: 'What this means for buyers',
  p_buyers_1: 'If you are evaluating GTM advisory and one of the options is a diagnostic deck and another option is an OS, the correct mental model is: those are two different products solving two different problems. A diagnostic gives you a high-fidelity photograph of where you are. An OS gives you a daily surface where the team actually works. Most operations do not lack a diagnosis. They lack a place to put the diagnosis where the team will see it again next Tuesday.',
  p_buyers_2: 'The OS is not a replacement for advisory. It is a replacement for the artefact that advisory used to produce. The conversation that the advisor adds value to &mdash; the strategic interpretation, the executive-level translation, the lived experience &mdash; remains valuable. What changes is that the conversation now happens with the OS on screen, not with the deck on slide 12, and the next decision lands in an action cascade that someone owns, not in a Notion doc nobody opens.',

  cta_h3: 'See the OS in your own workspace',
  cta_p: 'Spin up a Caugia workspace, run the quick assessment, and watch the constraint diagnosis, the simulator, and Sophie land in your hands at the same time. Free tier, no card.',
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
1. Preserve HTML entities: &mdash; &nbsp; &laquo; &raquo; &lsquo; &rsquo; &larr; &rarr; &middot; &euro; &amp; &lt; &gt;
2. Preserve inline HTML tags: <strong></strong>, <em></em>, <code></code>
3. Keep UNCHANGED: Caugia, Sophie, GRIP, GTM, ChatGPT, AI Answer Market, CRO, CFO, CEO, CS, IC, VP, GL, CRM, MAP, BI, LLM, API, SaaS, Brief, Notion. Vertical names unchanged: SaaS B2B, DTC, Fintech B2B, Professional Services, ProfSvc.
4. Preserve numerics: 25-slide, 12 GRIP pillars, 6 minutes, 6 hours, &euro;50K-300K, 30 years, three things, four jobs.
5. Output ONLY valid JSON with same keys, no markdown fences.
6. Voice: professional, energetic, Nova-energetic.
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
  if (missing.length) throw new Error(`${locale} missing: ${missing.slice(0, 3).join(',')}`);
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
    .article-tag { display: inline-block; font-size: 0.65rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 5px; background: #ecfdf5; color: #065f46; margin-bottom: 16px; }
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
    .compare-table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 0.92rem; }
    .compare-table th, .compare-table td { padding: 14px 16px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }
    .compare-table th { background: #f8fafc; font-weight: 800; color: #0f172a; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em; }
    .compare-table td:first-child { font-weight: 700; color: #0f172a; }
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
      .compare-table { font-size: 0.82rem; }
      .compare-table th, .compare-table td { padding: 9px 11px; }
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

      <h2>${s.h2_diagnostic_fail}</h2>
      <p>${s.p_diagnostic_fail_1}</p>
      <p>${s.p_diagnostic_fail_2}</p>

      <h2>${s.h2_os_different}</h2>
      <p>${s.p_os_different_1}</p>
      <p>${s.p_os_different_2}</p>

      <h3>${s.h3_living}</h3>
      <p>${s.p_living}</p>

      <h3>${s.h3_routes}</h3>
      <p>${s.p_routes}</p>

      <h3>${s.h3_quantifies}</h3>
      <p>${s.p_quantifies}</p>

      <h3>${s.h3_brief}</h3>
      <p>${s.p_brief}</p>

      <h2>${s.h2_vs}</h2>

      <table class="compare-table">
        <tr><th></th><th>${s.th_diagnostic}</th><th>${s.th_os}</th></tr>
        <tr><td>${s.tr_output}</td><td>${s.tr_output_d}</td><td>${s.tr_output_os}</td></tr>
        <tr><td>${s.tr_refresh}</td><td>${s.tr_refresh_d}</td><td>${s.tr_refresh_os}</td></tr>
        <tr><td>${s.tr_enforce}</td><td>${s.tr_enforce_d}</td><td>${s.tr_enforce_os}</td></tr>
        <tr><td>${s.tr_proj}</td><td>${s.tr_proj_d}</td><td>${s.tr_proj_os}</td></tr>
        <tr><td>${s.tr_narr}</td><td>${s.tr_narr_d}</td><td>${s.tr_narr_os}</td></tr>
        <tr><td>${s.tr_fit}</td><td>${s.tr_fit_d}</td><td>${s.tr_fit_os}</td></tr>
        <tr><td>${s.tr_ai}</td><td>${s.tr_ai_d}</td><td>${s.tr_ai_os}</td></tr>
        <tr><td>${s.tr_cost}</td><td>${s.tr_cost_d}</td><td>${s.tr_cost_os}</td></tr>
        <tr><td>${s.tr_decay}</td><td>${s.tr_decay_d}</td><td>${s.tr_decay_os}</td></tr>
      </table>

      <h2>${s.h2_shift}</h2>
      <p>${s.p_shift_1}</p>
      <p>${s.p_shift_2}</p>
      <p>${s.p_shift_3}</p>

      <h2>${s.h2_buyers}</h2>
      <p>${s.p_buyers_1}</p>
      <p>${s.p_buyers_2}</p>

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
