#!/usr/bin/env node
// =============================================================================
// Phase 3.1 — Persona landing pages × 6 locales
// =============================================================================
// 7 personas × 6 locales = 42 HTML files. Each page = hero + persona-specific
// curated article cards + per-vertical lens + FAQ + CTA. Independently
// indexable URLs for SEO long-tail coverage and AEO/GEO direct-answer pulls.
//
// Slugs (all under /intelligence/):
//   for-ceo.html
//   for-cro.html
//   for-cfo.html
//   for-cmo.html
//   for-investor.html
//   for-consultant.html
//   for-newcomer.html

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const OPENAI_KEY = fs.readFileSync(path.resolve(ROOT, '..', 'grip-os', '.env.local'), 'utf8')
  .match(/^OPENAI_API_KEY=(.+)$/m)[1].trim().replace(/^["']|["']$/g, '');

// =============================================================
// Persona configs (EN — source of truth)
// =============================================================
const PERSONAS = {
  ceo: {
    slug: 'for-ceo',
    role_label: 'CEO &middot; Founder',
    page_title: 'GTM Intelligence for the CEO/Founder | Caugia',
    meta_desc: 'Board-level GTM intelligence built for the CEO/Founder. Structural diagnosis of revenue health, operating-system delivery surface, and per-vertical calibration anchored to public benchmarks.',
    hero_h1: 'GTM Intelligence for the CEO/Founder',
    hero_lead: 'You sit at the top of the revenue system. You do not need another consulting deck. You need a structural diagnosis of where the constraint is, what it costs per month, and a delivery surface that survives the next board meeting. That is what Caugia is.',
    intro: 'Caugia is calibrated for the four verticals your portfolio lives in: SaaS B2B, DTC, Fintech B2B, and Professional Services. Below: the recommended reading for the CEO/Founder lens.',
    articles: [
      { slug: 'from-diagnostic-to-operating-system', label: 'From Diagnostic to Operating System', tag: 'Category Shift', desc: 'Why decks change nothing and what a GTM OS does instead.' },
      { slug: 'grip-framework-gtm-diagnostic-model', label: 'The GRIP Framework', tag: 'Framework', desc: 'Four dimensions, twelve pillars, one structural diagnosis.' },
      { slug: 'grip-framework-calibration', label: 'GRIP Framework: Calibration Methodology', tag: 'Methodology', desc: 'Every per-vertical constant cites a named public source.' },
      { slug: 'why-every-b2b-saas-needs-gtm-operating-system', label: 'Why Every B2B SaaS Needs a GTM OS', tag: 'Point of View', desc: 'The fragmented stack and the case for a unified operating layer.' },
      { slug: 'series-b-gtm-misalignment-cost', label: 'The Hidden Cost of GTM Misalignment', tag: 'Diagnostic', desc: 'How Series B companies leak 15-30% of ARR without noticing.' },
    ],
    vertical_focus: {
      saas: 'In SaaS B2B, the compounding mechanic is retention. Caugia surfaces whether your Performance dimension (NRR, win-rate, churn) is the constraint or whether it is upstream in Resources (enablement) or Implementation (RevOps).',
      dtc: 'In DTC, the clock is faster. Cash-conversion cycle is 90 days. Caugia tracks MER, repeat-rate, and AOV with a P-weight of 0.45 — the highest of the four verticals — because Performance is existential.',
      fintech: 'In Fintech B2B, the model has to absorb regulatory drag. Caugia&rsquo;s K_DRAG = 0.70 for Fintech is the highest of the four verticals, reflecting the 14-month median time-to-recover from a compliance block per Acrew 2024.',
      profsvc: 'In Professional Services, scaling is linear. Caugia&rsquo;s ProfSvc calibration weights Guidance + Resources at 0.60 combined — strategy and practice leadership dominate engagement outcomes per SPI and Kennedy.',
    },
    faqs: [
      { q: 'How fast can I get a diagnosis?', a: 'The Level 1 GTM Due Diligence returns in 1-2 minutes from external signal only. The full scored diagnostic with 265 assessment questions and a 45-page report is delivered within one hour after submission.' },
      { q: 'What does my board actually see?', a: 'The Monday Brief is auto-generated from your live workspace: constraint status, leakage estimate, action progress, AI Answer Market position, key deltas. Six minutes to forward, six hours saved per month.' },
      { q: 'How does Caugia differ from hiring a fractional CRO?', a: 'A fractional CRO gives you experience. Caugia gives you a deterministic engine with cited math. Both have value. Most CEOs end up running the fractional CRO and Caugia side by side — Caugia handles the diagnosis and projection, the fractional CRO handles the human execution.' },
      { q: 'Will the diagnosis change as my numbers change?', a: 'Yes. The constraint diagnosis is a living thing. As signal updates from your connectors, the workspace recomputes which dimension is currently the binding constraint and surfaces the new top action.' },
    ],
    cta_h3: 'Spin up a workspace and see the diagnosis',
    cta_p: 'Free tier. No card. The same engine the Full plan uses, scoped to a quick first signal-check.',
  },

  cro: {
    slug: 'for-cro',
    role_label: 'CRO &middot; VP Sales',
    page_title: 'GTM Intelligence for the CRO/VP Sales | Caugia',
    meta_desc: 'Built for the CRO/VP Sales: revenue leakage diagnosis, sales execution scoring, pipeline composition signals, and the four levers that move win-rate, conversion, pricing, and expansion.',
    hero_h1: 'GTM Intelligence for the CRO/VP Sales',
    hero_lead: 'Pipeline coverage is fine. Win-rate moved 3 points. Forecast accuracy is at 75%. None of that tells you where revenue is actually leaking. Caugia tells you which of the twelve GRIP pillars is currently constraining your number and what fixing it is worth per month.',
    intro: 'The CRO lens: where leakage lives, which lever moves it, and how to read the board narrative your CFO is about to question.',
    articles: [
      { slug: 'revenue-leakage-saas', label: 'Revenue Leakage', tag: 'Diagnostic', desc: 'Where 15-30% of ARR disappears before churn even shows up.' },
      { slug: 'sales-execution-diagnostic', label: 'Sales Execution Diagnostic', tag: 'Pillar', desc: 'System-dependent revenue vs hero-dependent revenue.' },
      { slug: 'nrr-expansion-revenue-playbook', label: 'NRR and Expansion Revenue', tag: 'Playbook', desc: 'The underinvested growth engine. Most CS teams are structured to fail at expansion.' },
      { slug: 'cro-board-reporting-metrics', label: 'What Your Board Actually Wants to See', tag: 'Operations', desc: 'The metrics board members use to evaluate GTM health.' },
      { slug: 'gtm-strategy-framework-b2b-saas', label: 'GTM Strategy Framework', tag: 'Framework', desc: 'From founder-led to system-led growth.' },
    ],
    vertical_focus: {
      saas: 'SaaS B2B: your Performance dimension (NRR + win-rate + churn) is weighted at 0.35 — the dominant dimension. Most pipeline pain is downstream of a Performance signal that has not been surfaced yet.',
      dtc: 'DTC: there is no CRO in the traditional sense — your VP Growth orchestrates SEM, paid social, retention, and CRO together. Caugia&rsquo;s DTC calibration reflects this with a P-weight of 0.45 (the highest).',
      fintech: 'Fintech B2B: Resources + Implementation dominate your model at a combined 0.60. Compliance headcount, sandbox-to-prod conversion, and partnership operations move your win-rate more than any sales-execution lever.',
      profsvc: 'Professional Services: utilisation is the lever. A 10% utilisation gap is a 10% revenue gap. There is no compounding flywheel to mask the leakage.',
    },
    faqs: [
      { q: 'How does Caugia score sales execution?', a: 'The Sales Execution diagnostic measures whether your revenue depends on the system or on individual heroes. Win-rate distribution by segment, qualification consistency, stage-to-stage conversion, and forecasting accuracy combine into a single pillar score in the Implementation dimension.' },
      { q: 'Can I see win-rate by segment?', a: 'Yes. The workspace connects to your CRM and decomposes win-rate by segment, deal size, source, and competitor presence. The simulator then surfaces which segment-level fix produces the largest upside-if-fixed.' },
      { q: 'What if my pipeline composition is the constraint?', a: 'Pipeline composition is in the Implementation dimension. The diagnostic catches the pattern when the funnel looks healthy but the win-rate degrades — usually a signal that the wrong shape of pipeline is being created upstream.' },
      { q: 'How does this work with my forecasting cadence?', a: 'Caugia does not replace your forecast. It explains why the forecast looks the way it does — which structural weakness is creating the variance — and what would have to change for the next forecast to come in differently.' },
    ],
    cta_h3: 'Run the diagnosis on your number',
    cta_p: 'Free tier. Surface the constraint in your specific GTM. The simulator shows upside-if-fixed with confidence bands.',
  },

  cfo: {
    slug: 'for-cfo',
    role_label: 'CFO',
    page_title: 'GTM Intelligence for the CFO | Caugia',
    meta_desc: 'Built for the CFO: GTM unit economics, Rule of 40 dispersion, CAC payback, leakage quantification in euros, and the confidence band methodology behind every projected number.',
    hero_h1: 'GTM Intelligence for the CFO',
    hero_lead: 'You signed off on the budget that funded the GTM system that is now under-performing. The question is no longer "are we missing the number" but "where is the structural leakage and what would fixing it be worth". Caugia answers that with cited math.',
    intro: 'The CFO lens: unit economics, leakage in euros, confidence bands on every projection, and the methodology that makes the numbers defensible to the board.',
    articles: [
      { slug: 'cfo-gtm-unit-economics', label: 'GTM Unit Economics', tag: 'CFO Perspective', desc: 'When growth costs more than it should — Rule of 40, CAC payback, burn multiple.' },
      { slug: 'revenue-leakage-saas', label: 'Revenue Leakage', tag: 'Diagnostic', desc: '15-30% of ARR lost to invisible system friction.' },
      { slug: 'series-b-gtm-misalignment-cost', label: 'The Hidden Cost of GTM Misalignment', tag: 'Diagnostic', desc: 'How a EUR 30M company leaks EUR 6M annually without knowing it.' },
      { slug: 'grip-framework-calibration', label: 'GRIP Framework: Calibration Methodology', tag: 'Methodology', desc: 'Every constant in the simulator is cited to a named public source.' },
      { slug: 'grip-framework-gtm-diagnostic-model', label: 'The GRIP Framework', tag: 'Framework', desc: 'The diagnostic model behind the numbers.' },
    ],
    vertical_focus: {
      saas: 'SaaS B2B: the Bessemer Cloud Index 2024 anchors our drag sensitivity. Rule-of-40 dispersion is the public signal that calibrates K_DRAG = 0.60 for your vertical.',
      dtc: 'DTC: Drivepoint cohort studies confirm a 4-month drag-to-fix half-life. Your leakage estimate is bounded by the same cohort-derived recovery factors.',
      fintech: 'Fintech B2B: Acrew Capital 2024 puts compliance recovery at a 14-month median. The simulator&rsquo;s K_DRAG = 0.70 reflects regulatory drag that compounds against your CAC payback.',
      profsvc: 'Professional Services: SPI&rsquo;s PS Maturity Benchmark codifies the linear-scaling reality. K_DRAG = 0.50 is the lowest of the four verticals.',
    },
    faqs: [
      { q: 'How do you quantify leakage in euros?', a: 'The simulator combines your current GRIP scores with the per-vertical K_DRAG sensitivity and your reported ARR to produce a Strategic Drag and a System Leakage estimate (annualised, in EUR). Both are bounded by a 50% confidence interval (P25-P75 spread around P50).' },
      { q: 'What is the confidence band on the simulator?', a: 'Every projection comes with a ±25% band around the central estimate, derived from Bessemer&rsquo;s 2024 SaaS forecasting playbook prediction-interval methodology. Phase 2 (Q3 2026) replaces the literature-derived band with cohort-observed bounds.' },
      { q: 'How does this affect my Rule of 40?', a: 'Caugia surfaces which side of the Rule of 40 is under-performing (growth or profitability) and which dimension of GRIP is creating that drag. The simulator projects what fixing each constraint would do to your Rule-of-40 over a 12-month window.' },
      { q: 'Can the board independently verify your math?', a: 'Yes. Every constant in the framework is cited to a named public source — Bessemer Cloud Index, OpenView SaaS Benchmarks, Drivepoint, Acrew, FT Partners, SPI, Kennedy. The methodology page lists each constant with its anchor.' },
    ],
    cta_h3: 'See your structural drag, in euros',
    cta_p: 'Free tier. Strategic drag and system leakage estimates with confidence bands, on your own numbers.',
  },

  cmo: {
    slug: 'for-cmo',
    role_label: 'CMO &middot; VP Marketing',
    page_title: 'GTM Intelligence for the CMO/VP Marketing | Caugia',
    meta_desc: 'Built for the CMO/VP Marketing: structural role in revenue architecture, AI Answer Market positioning, product-marketing diagnostic, demand-generation pillar scoring, and the four GRIP pillars marketing actually owns.',
    hero_h1: 'GTM Intelligence for the CMO/VP Marketing',
    hero_lead: 'Marketing leadership spans four of the twelve GRIP pillars: Market Intelligence, Product Marketing, Demand Generation, and increasingly AI Answer Market. The CMO diagnostic is not about generating more leads. It is about structural contribution to the revenue system.',
    intro: 'The CMO lens: AI visibility as a new GTM priority, structural contribution scoring across four pillars, and how to read marketing&rsquo;s role in the constraint diagnosis.',
    articles: [
      { slug: 'cmo-marketing-revenue-architecture', label: "Marketing's Role in Revenue Architecture", tag: 'CMO Perspective', desc: 'Marketing spans four GRIP pillars. The diagnostic is structural.' },
      { slug: 'ai-visibility-invisible-brand', label: 'Your Brand Is Invisible to AI', tag: 'AI Answer Market', desc: '40% of B2B buyers research with AI before Google. Are you in the answer?' },
      { slug: 'ai-answer-market-pipeline-generation', label: 'The AI Answer Market', tag: 'Implementation', desc: 'Where your next pipeline is being generated — in someone else&rsquo;s prompt window.' },
      { slug: 'demand-generation-diagnostic', label: 'Demand Generation Diagnostic', tag: 'Pillar', desc: 'Pipeline volume that does not convert is noise. Diagnose the engine.' },
      { slug: 'product-marketing-diagnostic', label: 'Product Marketing Diagnostic', tag: 'Pillar', desc: 'When PMM is weak, Sales creates its own messaging.' },
    ],
    vertical_focus: {
      saas: 'SaaS B2B: PMM and Demand Gen drive most pipeline composition. Caugia surfaces whether the pipeline-volume signal hides a structural PMM or positioning problem.',
      dtc: 'DTC: your CMO is also your Acquisition lead. MER and creative testing dominate. Caugia&rsquo;s DTC calibration places Performance at 0.45 — repeat-rate and AOV are existential.',
      fintech: 'Fintech B2B: PMM is shaped by compliance constraints. Messaging fidelity to regulatory boundaries is a structural quality, not a creative one. Caugia surfaces this in the Resources dimension.',
      profsvc: 'Professional Services: marketing is partner-driven and content-led. The Guidance dimension dominates — strategic clarity and Practice Lead positioning move outcomes more than demand programs.',
    },
    faqs: [
      { q: 'How does AAM differ from SEO?', a: 'SEO produces a ranked list of links; the buyer clicks to learn anything. AAM produces a synthesised paragraph; the buyer reads the answer inline. Optimising for one does not guarantee inclusion in the other. Caugia treats AAM as a separate weekly-tracked surface across 5 AI engines.' },
      { q: 'Where does marketing show up in GRIP?', a: 'Marketing leadership owns or contributes to Market Intelligence (Guidance), Product Marketing (Guidance), Demand Generation (Implementation), and increasingly the AI Answer Market layer (Implementation). The CMO diagnostic decomposes contribution per pillar.' },
      { q: 'How do I tell if PMM is the constraint?', a: 'When competitive deals are lost on positioning rather than features, when Sales is generating its own messaging deck, when launches have no measurable impact on pipeline composition — PMM is usually the binding constraint, even if Demand looks healthy.' },
      { q: 'Does Caugia track AI Answer Market for my brand?', a: 'Yes. The AAM module runs weekly across ChatGPT, Claude, Perplexity, Gemini, and Google AI Overview. It tracks 8 query categories — category definition, top-N lists, comparative, use-case fit, pricing, integration, trust signals, implementation — and reports share-of-voice and competitor proximity per query.' },
    ],
    cta_h3: 'See your AI Answer Market position',
    cta_p: 'Free tier. Sample queries, weekly tracking, comparison against your top three competitors.',
  },

  investor: {
    slug: 'for-investor',
    role_label: 'Investor &middot; VC/PE',
    page_title: 'GTM Intelligence for the Investor (VC/PE) | Caugia',
    meta_desc: 'GTM due diligence at venture-grade rigor. Level 1 DD from external signals only — AI visibility, competitive position, review narrative, exec turnover, down rounds, growth trajectory. No company cooperation required.',
    hero_h1: 'GTM Intelligence for the Investor (VC/PE)',
    hero_lead: 'Product, market, and team get rigorous diligence. GTM system architecture rarely does. That blind spot costs investors money. Caugia is the venture-grade GTM diagnostic tool — fast, external-signal only, calibrated against the public benchmark literature.',
    intro: 'The investor lens: Level 1 DD on any portfolio target without their cooperation, GTM red-flag detection, and the methodology that makes the output defensible at IC.',
    articles: [
      { slug: 'vc-gtm-due-diligence', label: 'GTM Due Diligence: What VCs Miss', tag: 'Investor Perspective', desc: 'Product, market, team get rigorous DD. GTM rarely does.' },
      { slug: 'series-b-gtm-misalignment-cost', label: 'The Hidden Cost of GTM Misalignment', tag: 'Diagnostic', desc: 'EUR 30M companies leak EUR 6M annually without knowing it.' },
      { slug: 'from-diagnostic-to-operating-system', label: 'From Diagnostic to Operating System', tag: 'Category Shift', desc: 'Why the deck-based diagnostic era is ending.' },
      { slug: 'grip-framework-gtm-diagnostic-model', label: 'The GRIP Framework', tag: 'Framework', desc: 'The diagnostic model behind every Caugia DD output.' },
      { slug: 'grip-framework-calibration', label: 'GRIP Framework: Calibration Methodology', tag: 'Methodology', desc: 'Every per-vertical constant cited to a named source.' },
    ],
    vertical_focus: {
      saas: 'SaaS B2B portfolio: Caugia&rsquo;s constants are calibrated to Bessemer Cloud Index 2024 dispersion and OpenView SaaS Benchmarks. Same anchors most B2B SaaS DD frameworks reach for, but applied deterministically.',
      dtc: 'DTC portfolio: Drivepoint cohort data (n=188, EUR 5-15M ARR) anchors the per-vertical constants. DTC drag-to-fix half-life is roughly 4 months vs SaaS&rsquo;s 9.',
      fintech: 'Fintech B2B portfolio: regulatory risk is structural. Caugia surfaces compliance posture, sandbox-to-prod ratio, and integration partnership health — the variables that explain post-investment outcome variance per Acrew 2024.',
      profsvc: 'ProfSvc portfolio: linear-scaling realities mean utilisation and engagement margin dominate. SPI and Kennedy anchor the calibration. K_DRAG = 0.50 reflects the absence of compounding flywheel risk.',
    },
    faqs: [
      { q: 'How does Level 1 DD work?', a: 'Level 1 GTM Due Diligence pulls from external signals only — AI visibility, review platforms (G2, Capterra, Trustpilot), competitive position, public hiring patterns, exec turnover, down rounds, growth trajectory. No cooperation from the company. Output in 1-2 minutes.' },
      { q: 'Can I assess a portfolio company without their cooperation?', a: 'Yes — that is the design. The Level 1 DD is what an investor uses to triage a portfolio or assess a competitor. Full diagnostic with 265-question scoring requires the company&rsquo;s participation.' },
      { q: 'What are the red flags Caugia surfaces?', a: 'Exec turnover spikes, declining AI Answer Market share-of-voice, deteriorating review narrative (sentiment + volume), competitor displacement in comparison queries, public hiring contractions, and structural GRIP weakness against the per-vertical benchmark band.' },
      { q: 'How is the math defensible to my IC?', a: 'Every constant in the framework — K_DRAG, dimension weights, recovery factors — cites a named public source. The methodology page documents each anchor. The Phase 2 cohort backtest in Q3 2026 narrows the confidence bands against observed customer outcomes.' },
    ],
    cta_h3: 'Run DD on any company in 2 minutes',
    cta_p: 'External-signal only. No cooperation needed. The same DD engine the staged VC demos use.',
  },

  consultant: {
    slug: 'for-consultant',
    role_label: 'Consultant &middot; Partner',
    page_title: 'GTM Intelligence for the Consultant/Partner | Caugia',
    meta_desc: 'For consultants, advisory firms, fractional CROs, and partners: diagnostic infrastructure that gives you leverage, portfolio visibility, and evidence-based advisory tools instead of a referral link.',
    hero_h1: 'GTM Intelligence for the Consultant/Partner',
    hero_lead: 'Most partner programs offer a referral link and a commission. The best partners need diagnostic leverage, portfolio visibility, and evidence-based advisory tools. Caugia is the infrastructure for that.',
    intro: 'The advisor lens: diagnostic infrastructure as your leverage, the Caugia methodology as your tool, and the partner program as the commercial layer.',
    articles: [
      { slug: 'why-gtm-partners-need-diagnostic-infrastructure', label: 'Why GTM Partners Need Diagnostic Infrastructure', tag: 'Point of View', desc: 'Referral links are not leverage. Portfolio visibility is.' },
      { slug: 'gtm-diagnostics-vs-consulting', label: 'GTM Diagnostics vs Traditional Consulting', tag: 'Point of View', desc: 'Deterministic engines vs deck-based opinion. What changes and what stays.' },
      { slug: 'from-diagnostic-to-operating-system', label: 'From Diagnostic to Operating System', tag: 'Category Shift', desc: 'Why the diagnostic-deck era is ending and what replaces it.' },
      { slug: 'grip-framework-gtm-diagnostic-model', label: 'The GRIP Framework', tag: 'Framework', desc: 'The diagnostic model your engagements can run on.' },
      { slug: 'grip-framework-calibration', label: 'GRIP Framework: Calibration Methodology', tag: 'Methodology', desc: 'The cited math behind every output you put in front of your client.' },
    ],
    vertical_focus: {
      saas: 'If your practice serves SaaS B2B clients, Caugia surfaces structural diagnoses calibrated against the same Bessemer and OpenView benchmarks your clients already trust.',
      dtc: 'If your practice serves DTC brands, Caugia uses Drivepoint cohort data and Triple Whale State of DTC 2024 as anchor benchmarks — recognisable to the operators you advise.',
      fintech: 'If your practice serves Fintech B2B, Caugia&rsquo;s compliance-aware calibration (Acrew, FT Partners, Plaid/Stripe Atlas data) maps to the regulatory realities your clients operate under.',
      profsvc: 'If your practice serves Professional Services firms, Caugia&rsquo;s SPI and Kennedy-anchored ProfSvc calibration is the language your clients already use internally.',
    },
    faqs: [
      { q: 'How does Caugia work for advisory firms?', a: 'Caugia is the diagnostic surface your engagements run on top of. You bring strategic interpretation, executive-level translation, and lived experience. Caugia brings the deterministic diagnosis, the simulator projection, and the auto-generated artefacts. Your hourly rate goes up because your output gets sharper.' },
      { q: 'Can I white-label?', a: 'The partner program supports tiered relationships. White-label tier is the highest tier and includes co-branded workspaces, your-firm-name DD reports, and a revenue share. Reach out via the Partners page to discuss tier fit.' },
      { q: 'Does it replace my engagement model?', a: 'No. It replaces the artefact your engagement used to produce — the diagnostic deck — with a living workspace your client keeps using after you leave. Your engagement value moves from the deliverable to the strategic interpretation around it. Most partners report higher renewal rates because the workspace keeps surfacing the value.' },
      { q: 'How fast can I onboard?', a: 'A typical partner is operational on the Caugia methodology within one week: free-tier exploration, methodology review, two practice diagnoses on internal proxies, then live engagements. The framework is publishable, so your team can learn it without dependence on Caugia.' },
    ],
    cta_h3: 'Become a Caugia partner',
    cta_p: 'Diagnostic infrastructure, portfolio visibility, and evidence-based advisory tools. Three tiers, transparent commercial terms.',
  },

  newcomer: {
    slug: 'for-newcomer',
    role_label: 'New to GTM diagnostics',
    page_title: 'New to GTM Diagnostics? Start Here | Caugia',
    meta_desc: 'A starting point for revenue leaders, operators, and consultants who are new to structured GTM diagnostics. Category definition, the GRIP framework, and the first three reads in the right order.',
    hero_h1: 'New to GTM diagnostics? Start here.',
    hero_lead: 'A GTM diagnostic is not a strategy offsite, a consulting deck, or a dashboard with 47 tabs. It is a structured assessment of your Go-to-Market system that identifies which structural constraint is currently limiting revenue. Below: the canonical three reads, in order.',
    intro: 'No prior context needed. These three articles cover the category, the model, and the first place to look for revenue leakage. Read in sequence.',
    articles: [
      { slug: 'what-is-a-gtm-diagnostic', label: 'What Is a GTM Diagnostic?', tag: 'Category Definition', desc: 'Start here. The canonical definition of what a GTM diagnostic is and is not.' },
      { slug: 'grip-framework-gtm-diagnostic-model', label: 'The GRIP Framework', tag: 'Framework', desc: 'Four dimensions, twelve pillars, one diagnosis. The model behind every Caugia output.' },
      { slug: 'revenue-leakage-saas', label: 'Revenue Leakage', tag: 'Diagnostic', desc: 'The first place to look. Where 15-30% of ARR disappears before churn shows up.' },
      { slug: 'gtm-diagnostics-vs-consulting', label: 'Diagnostics vs Consulting', tag: 'Point of View', desc: 'Why the framework is deterministic, not subjective. What changes and what stays.' },
    ],
    vertical_focus: {
      saas: 'If your company is SaaS B2B, the GRIP framework is calibrated against the Bessemer Cloud Index and OpenView SaaS Benchmarks. Performance dominates the model.',
      dtc: 'If your company is DTC, the GRIP framework is calibrated against Drivepoint cohort data and Triple Whale State of DTC. Performance is existential (P weight = 0.45).',
      fintech: 'If your company is Fintech B2B, the framework absorbs regulatory drag explicitly. Resources + Implementation dominate (combined 0.60 weight).',
      profsvc: 'If your company is in Professional Services, the framework reflects linear-scaling realities. Guidance + Resources dominate (combined 0.60 weight).',
    },
    faqs: [
      { q: 'I have never seen a GTM diagnostic — where do I start?', a: 'Read "What Is a GTM Diagnostic?" first (the category definition), then "The GRIP Framework" (the model), then "Revenue Leakage" (the first place to look). About 30 minutes of reading total, no prior context needed.' },
      { q: 'How is this different from a strategy consultancy?', a: 'A strategy consultancy gives you a deck full of expert opinion. A GTM diagnostic gives you a scored diagnosis with audit-ready math. The math is published. The constants are cited to public sources. The output is repeatable.' },
      { q: 'Is this for my company size?', a: 'The framework applies across stages. The simulator is calibrated to four verticals (SaaS B2B, DTC, Fintech B2B, Professional Services). Companies between EUR 1M and EUR 100M ARR get the cleanest signal — earlier than that the system is too small to diagnose structurally; later than that the diagnosis becomes a portfolio of sub-systems.' },
      { q: 'What does a Caugia output actually look like?', a: 'A 45-page report covering: constraint diagnosis with cost-of-inaction in EUR/month, simulator projections with 50% confidence bands, action cascade routed to strategic/tactical/operational levels, AI Answer Market position vs competitors, and a Monday Brief auto-generated from your live numbers.' },
    ],
    cta_h3: 'Start with the free first signal-check',
    cta_p: 'Free tier. No card. Open a workspace and run the quick assessment to see what a GTM diagnostic actually produces.',
  },
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
// OpenAI translation — one call per locale, all 7 personas at once
// =============================================================
async function translateLocale(locale) {
  const personaConfigs = Object.fromEntries(
    Object.entries(PERSONAS).map(([key, p]) => [
      key,
      {
        page_title: p.page_title,
        meta_desc: p.meta_desc,
        role_label: p.role_label,
        hero_h1: p.hero_h1,
        hero_lead: p.hero_lead,
        intro: p.intro,
        articles: p.articles.map((a) => ({ slug: a.slug, tag: a.tag, label: a.label, desc: a.desc })),
        vertical_focus: p.vertical_focus,
        faqs: p.faqs,
        cta_h3: p.cta_h3,
        cta_p: p.cta_p,
      },
    ])
  );
  const enJson = JSON.stringify(personaConfigs, null, 2);

  const prompt = `Translate this English JSON of GTM-intelligence persona-page strings into ${LOCALE_NAMES[locale]}.

RULES:
1. Preserve HTML entities: &mdash; &nbsp; &middot; &laquo; &raquo; &lsquo; &rsquo; &larr; &rarr; &amp; &euro;
2. Preserve inline tags: <strong></strong>, <em></em>, <code></code>
3. Keep UNCHANGED: Caugia, GRIP, GTM, GTM Operating System, GTM OS, GTM DD, AI Answer Market, AAM, K_DRAG, ChatGPT, Claude, Perplexity, Gemini, Google, Sophie, McKinsey, BCG, Bessemer, Cloud Index, OpenView, Drivepoint, Triple Whale, Acrew, FT Partners, Plaid, Stripe Atlas, SPI, Kennedy, G2, Capterra, Trustpilot, NRR, MER, AOV, ARR, CAC, CRO, CFO, CMO, CEO, VP Sales, VP Marketing, VP Growth, VP CS, RevOps, PMM, ICs, IC, SaaS B2B, B2B SaaS, DTC, Fintech B2B, Professional Services, ProfSvc, Rule of 40, Q1, Q2, Q3 2026, Level 1, Series B.
4. Preserve "article slug" values UNCHANGED (e.g., "from-diagnostic-to-operating-system") — those are file paths, NOT translatable.
5. Preserve numerics: 4 months, 9 months, 14 months, 90 days, 1-2 minutes, 265, 45-page, 30%, 15-30%, 40%, 60%, 110%, 50%, EUR 30M, EUR 6M, EUR 1M, EUR 100M, EUR 5-15M, 188 brands, 188, 4 verticals, twelve pillars, four dimensions.
6. Output ONLY valid JSON with the same nested structure and keys, no markdown fences.
7. Voice: professional, energetic, Nova-energetic — same tone as English.
8. NATIVE diakritieken always.

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
  if (!res.ok) throw new Error(`OpenAI ${locale} ${res.status}: ${(await res.text()).slice(0, 400)}`);
  const parsed = JSON.parse((await res.json()).choices[0].message.content);
  if (Object.keys(parsed).length !== Object.keys(PERSONAS).length) {
    throw new Error(`${locale}: persona count mismatch (got ${Object.keys(parsed).length})`);
  }
  return parsed;
}

// =============================================================
// HTML renderer — single template, parametrised per persona
// =============================================================
function renderPersonaHtml(locale, persona, langCode) {
  const isRoot = locale === 'en';
  const assetsPath = isRoot ? '../assets' : '../../assets';
  const iconPath = isRoot ? '../icon.png' : '../../icon.png';
  const hubHref = isRoot ? '../intelligence.html' : '../intelligence.html';
  const baseUrl = isRoot
    ? `https://www.caugia.com/intelligence/${persona.slug}.html`
    : `https://www.caugia.com/${locale}/intelligence/${persona.slug}.html`;

  // hreflang alternates — all locales
  const altLocales = ['en', 'fr', 'de', 'es', 'pl', 'nl'];
  const alternates = altLocales.map((l) => {
    const u = l === 'en'
      ? `https://www.caugia.com/intelligence/${persona.slug}.html`
      : `https://www.caugia.com/${l}/intelligence/${persona.slug}.html`;
    return `  <link rel="alternate" hreflang="${l}" href="${u}" />`;
  }).join('\n');

  // Card list
  const cardHtml = persona.articles.map((a) => `
        <a href="${a.slug}.html" class="persona-card">
          <span class="persona-card-tag">${a.tag}</span>
          <h3>${a.label}</h3>
          <p>${a.desc}</p>
          <span class="persona-card-arrow">Read &rarr;</span>
        </a>`).join('');

  // Vertical-lens
  const v = persona.vertical_focus;
  const verticalHtml = `
        <div class="vlens-card vlens-saas">
          <span class="vlens-pill">SaaS B2B</span>
          <p>${v.saas}</p>
        </div>
        <div class="vlens-card vlens-dtc">
          <span class="vlens-pill">DTC</span>
          <p>${v.dtc}</p>
        </div>
        <div class="vlens-card vlens-fintech">
          <span class="vlens-pill">Fintech B2B</span>
          <p>${v.fintech}</p>
        </div>
        <div class="vlens-card vlens-profsvc">
          <span class="vlens-pill">Professional Services</span>
          <p>${v.profsvc}</p>
        </div>`;

  // FAQ
  const faqHtml = persona.faqs.map((f) => `
        <div class="faq-item">
          <h3>${f.q}</h3>
          <p>${f.a}</p>
        </div>`).join('');

  // FAQPage schema mainEntity (strip HTML entities for clean schema text)
  const stripEntities = (str) => str
    .replace(/&mdash;/g, '—').replace(/&nbsp;/g, ' ').replace(/&middot;/g, '·')
    .replace(/&laquo;/g, '«').replace(/&raquo;/g, '»')
    .replace(/&lsquo;/g, '‘').replace(/&rsquo;/g, '’')
    .replace(/&rarr;/g, '→').replace(/&larr;/g, '←').replace(/&amp;/g, '&')
    .replace(/&euro;/g, '€');
  const faqSchemaEntities = persona.faqs.map((f) => ({
    '@type': 'Question',
    name: stripEntities(f.q),
    acceptedAnswer: { '@type': 'Answer', text: stripEntities(f.a) },
  }));

  return `<!--email_off-->
<!DOCTYPE html>
<html lang="${langCode}">
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

  <title>${persona.page_title}</title>
  <meta name="description" content="${persona.meta_desc}" />
  <link rel="canonical" href="${baseUrl}" />
${alternates}
  <link rel="alternate" hreflang="x-default" href="https://www.caugia.com/intelligence/${persona.slug}.html" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content="${baseUrl}" />
  <meta property="og:title" content="${persona.page_title}" />
  <meta property="og:description" content="${persona.meta_desc}" />
  <meta property="og:image" content="https://www.caugia.com/assets/logo-final.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${persona.page_title}" />
  <meta name="twitter:description" content="${persona.meta_desc}" />
  <meta name="twitter:image" content="https://www.caugia.com/assets/logo-final.png" />

  <link rel="icon" type="image/png" sizes="32x32" href="${iconPath}">
  <link rel="apple-touch-icon" href="${iconPath}">

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Merriweather:wght@400;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${assetsPath}/caugia-base.css">

  <style>
    .persona-hero { max-width: 760px; margin: 0 auto; padding: 60px 16px 32px; text-align: center; }
    .persona-hero .role-eyebrow { display: inline-block; font-size: 0.66rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--primary); margin-bottom: 14px; padding: 4px 12px; background: rgba(59,108,216,0.10); border-radius: 6px; }
    .persona-hero h1 { font-family: Merriweather, serif; font-size: 2.3rem; line-height: 1.15; color: #0f172a; margin: 0 0 18px; }
    .persona-hero p.lead { font-size: 1.08rem; color: var(--text-body); line-height: 1.65; margin: 0 auto; max-width: 640px; }
    .persona-intro { max-width: 760px; margin: 0 auto 32px; padding: 0 16px; }
    .persona-intro p { font-size: 0.96rem; color: #475569; line-height: 1.6; text-align: center; }
    .persona-section { max-width: 960px; margin: 0 auto 56px; padding: 0 16px; }
    .persona-section h2 { font-family: Merriweather, serif; font-size: 1.45rem; font-weight: 900; color: #0f172a; margin: 0 0 22px; text-align: center; }
    .persona-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
    .persona-card { text-decoration: none; background: #fff; border: 1px solid var(--line); border-radius: 14px; padding: 22px 24px; transition: all 0.18s; display: flex; flex-direction: column; }
    .persona-card:hover { border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.05); }
    .persona-card-tag { font-size: 0.62rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--primary); margin-bottom: 8px; }
    .persona-card h3 { font-family: Merriweather, serif; font-size: 1.05rem; font-weight: 800; color: #0f172a; margin: 0 0 8px; line-height: 1.3; }
    .persona-card p { font-size: 0.86rem; color: #475569; line-height: 1.55; margin: 0 0 10px; flex-grow: 1; }
    .persona-card-arrow { font-size: 0.78rem; font-weight: 700; color: var(--primary); }
    .vlens-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .vlens-card { background: #f8fafc; border: 1px solid var(--line); border-left: 3px solid var(--primary); border-radius: 0 12px 12px 0; padding: 20px 22px; }
    .vlens-card.vlens-saas { border-left-color: #3B6CD8; }
    .vlens-card.vlens-dtc { border-left-color: #E07830; }
    .vlens-card.vlens-fintech { border-left-color: #0c4a6e; }
    .vlens-card.vlens-profsvc { border-left-color: #065f46; }
    .vlens-pill { display: inline-block; font-size: 0.62rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; padding: 3px 9px; border-radius: 5px; margin-bottom: 10px; background: rgba(59,108,216,0.12); color: #3B6CD8; }
    .vlens-card.vlens-dtc .vlens-pill { background: rgba(224,120,48,0.12); color: #E07830; }
    .vlens-card.vlens-fintech .vlens-pill { background: rgba(12,74,110,0.12); color: #0c4a6e; }
    .vlens-card.vlens-profsvc .vlens-pill { background: rgba(6,95,70,0.12); color: #065f46; }
    .vlens-card p { font-size: 0.9rem; color: #334155; line-height: 1.6; margin: 0; }
    .persona-faq { max-width: 760px; margin: 0 auto 56px; padding: 0 16px; }
    .persona-faq h2 { font-family: Merriweather, serif; font-size: 1.45rem; font-weight: 900; color: #0f172a; margin: 0 0 20px; text-align: center; }
    .persona-faq .faq-item { border-bottom: 1px solid var(--line); padding: 18px 0; }
    .persona-faq .faq-item:last-child { border-bottom: none; }
    .persona-faq .faq-item h3 { font-size: 1.0rem; font-weight: 800; color: #0f172a; margin: 0 0 8px; line-height: 1.4; }
    .persona-faq .faq-item p { font-size: 0.93rem; color: #334155; line-height: 1.65; margin: 0; }
    .persona-cta { max-width: 760px; margin: 0 auto 56px; padding: 36px 32px; background: #0f172a; border-radius: 16px; text-align: center; }
    .persona-cta h3 { font-family: Merriweather, serif; color: #fff; font-size: 1.35rem; margin: 0 0 12px; }
    .persona-cta p { color: #94a3b8; font-size: 0.94rem; line-height: 1.6; margin: 0 0 22px; max-width: 520px; margin-left: auto; margin-right: auto; }
    .persona-cta .btn-pair { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .persona-cta .btn { padding: 12px 26px; border-radius: 10px; font-size: 0.92rem; font-weight: 700; text-decoration: none; }
    .persona-cta .btn-primary { background: var(--primary); color: #fff; }
    .persona-cta .btn-outline { background: transparent; color: #fff; border: 1px solid #475569; }
    .back-to-hub { max-width: 760px; margin: 24px auto 56px; padding: 0 16px; }
    .back-to-hub a { font-size: 0.82rem; font-weight: 700; color: var(--primary); text-decoration: none; }
    .back-to-hub a:hover { text-decoration: underline; }
    @media (max-width: 700px) {
      .persona-hero h1 { font-size: 1.7rem; }
      .persona-cards { grid-template-columns: 1fr; }
      .vlens-grid { grid-template-columns: 1fr; }
      .persona-cta { padding: 26px 22px; }
    }
  </style>

  <script type="application/ld+json">
  ${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: stripEntities(persona.page_title),
    description: persona.meta_desc,
    url: baseUrl,
    inLanguage: langCode,
    isPartOf: {
      '@type': 'CollectionPage',
      name: 'Caugia GTM Intelligence',
      url: isRoot ? 'https://www.caugia.com/intelligence.html' : `https://www.caugia.com/${locale}/intelligence.html`,
    },
  }, null, 2)}
  </script>

  <script type="application/ld+json">
  ${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSchemaEntities,
  }, null, 2)}
  </script>

  <script type="application/ld+json">
  ${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Caugia', item: isRoot ? 'https://www.caugia.com/' : `https://www.caugia.com/${locale}/` },
      { '@type': 'ListItem', position: 2, name: 'Intelligence', item: isRoot ? 'https://www.caugia.com/intelligence.html' : `https://www.caugia.com/${locale}/intelligence.html` },
      { '@type': 'ListItem', position: 3, name: stripEntities(persona.role_label).replace(/\s*·\s*/g, ' '), item: baseUrl },
    ],
  }, null, 2)}
  </script>
</head>
<body>
  <script src="${assetsPath}/header.js"></script>
  <main>

    <section class="container persona-hero">
      <div class="role-eyebrow">${persona.role_label}</div>
      <h1>${persona.hero_h1}</h1>
      <p class="lead">${persona.hero_lead}</p>
    </section>

    <div class="container persona-intro">
      <p>${persona.intro}</p>
    </div>

    <section class="persona-section">
      <h2>Recommended reading</h2>
      <div class="persona-cards">${cardHtml}
      </div>
    </section>

    <section class="persona-section">
      <h2>Per-vertical focus</h2>
      <div class="vlens-grid">${verticalHtml}
      </div>
    </section>

    <section class="persona-faq">
      <h2>Questions buyers in this role ask</h2>${faqHtml}
    </section>

    <div class="container persona-cta">
      <h3>${persona.cta_h3}</h3>
      <p>${persona.cta_p}</p>
      <div class="btn-pair">
        ${(() => {
          // Persona-specific CTA: investor → /dd, consultant → /partners.html, others → /try
          const partnersHref = isRoot ? 'partners.html' : '../../partners.html';
          if (persona.slug === 'for-investor') return `<a href="https://os.caugia.com/dd" class="btn btn-primary">Run DD on a company</a>`;
          if (persona.slug === 'for-consultant') return `<a href="${partnersHref}" class="btn btn-primary">See partner program</a>`;
          return `<a href="https://os.caugia.com/try" class="btn btn-primary">Free GTM analysis</a>`;
        })()}
        <a href="${hubHref}" class="btn btn-outline">Back to Intelligence</a>
      </div>
    </div>

    <div class="back-to-hub">
      <a href="${hubHref}">&larr; All Caugia Intelligence articles</a>
    </div>

  </main>
  <footer><div class="container"><p>&copy; <span id="year">2026</span> Caugia SASU. All rights reserved.</p></div></footer>
  <script src="${assetsPath}/caugia-base.js"></script>
</body>
<!--/email_off-->
</html>
`;
}

// =============================================================
// Drive
// =============================================================
async function main() {
  // 1. Write EN files
  console.log('Writing EN persona files...');
  for (const [key, persona] of Object.entries(PERSONAS)) {
    const out = path.join(ROOT, 'intelligence', `${persona.slug}.html`);
    fs.writeFileSync(out, renderPersonaHtml('en', persona, 'en'), 'utf8');
    console.log(`  EN ${persona.slug}: ${fs.statSync(out).size} bytes`);
  }

  // 2. Translate per locale (one OpenAI call per locale, all 7 personas batched)
  console.log('\nTranslating × 5 locales (batched)...');
  const translationsByLocale = {};
  for (const loc of LOCALES) {
    process.stdout.write(`  ${loc}...`);
    translationsByLocale[loc] = await translateLocale(loc);
    process.stdout.write(' done\n');
  }
  fs.writeFileSync(
    path.join(ROOT, 'scripts', 'translations-persona-pages.json'),
    JSON.stringify(translationsByLocale, null, 2)
  );

  // 3. Write locale files
  console.log('\nWriting locale files...');
  for (const loc of LOCALES) {
    const dir = path.join(ROOT, loc, 'intelligence');
    fs.mkdirSync(dir, { recursive: true });
    for (const [key, persona] of Object.entries(PERSONAS)) {
      const localePersona = { ...persona, ...translationsByLocale[loc][key] };
      // Preserve untranslated technical fields
      localePersona.slug = persona.slug;
      localePersona.articles = translationsByLocale[loc][key].articles.map((a, i) => ({
        ...a,
        slug: persona.articles[i].slug, // keep original slug
      }));
      const out = path.join(dir, `${persona.slug}.html`);
      fs.writeFileSync(out, renderPersonaHtml(loc, localePersona, loc), 'utf8');
    }
    console.log(`  ${loc}: 7 persona files written`);
  }

  console.log('\nDone. 7 personas × 6 locales = 42 files.');
}

main().catch((e) => { console.error('FATAL:', e.message); process.exit(1); });
