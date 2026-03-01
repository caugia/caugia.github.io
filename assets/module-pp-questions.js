// PP Deep Dive Questions — 60 questions, 6 engines
// Auto-generated from PP v1.0 spec
var QUESTIONS = [
  {
    "id": 1001,
    "pillar": 1,
    "pillar_name": "Pricing Strategy & Architecture",
    "grip": "G",
    "qid": "PP-1001",
    "type": "scale",
    "title": "We have a documented pricing strategy that is explicitly linked to our overall GTM and business strategy.",
    "sub": "Is your pricing STRATEGIC or just inherited?",
    "options": [
      "No pricing strategy",
      "Informal/ad-hoc pricing",
      "Basic documented approach",
      "Strong documented strategy",
      "Dynamic pricing strategy with regular strategic review"
    ]
  },
  {
    "id": 1002,
    "pillar": 1,
    "pillar_name": "Pricing Strategy & Architecture",
    "grip": "G",
    "qid": "PP-1002",
    "type": "scale",
    "title": "Our pricing model is based on a clear value metric that customers understand and correlates with value delivered.",
    "sub": "Is your pricing STRATEGIC or just inherited?",
    "options": [
      "No clear metric",
      "Arbitrary metric",
      "Reasonable metric",
      "Strong value-aligned metric",
      "Validated metric that scales with customer value realization"
    ]
  },
  {
    "id": 1003,
    "pillar": 1,
    "pillar_name": "Pricing Strategy & Architecture",
    "grip": "R",
    "qid": "PP-1003",
    "type": "text",
    "title": "How many pricing tiers or plans do you currently offer?",
    "sub": "Is your pricing STRATEGIC or just inherited?"
  },
  {
    "id": 1004,
    "pillar": 1,
    "pillar_name": "Pricing Strategy & Architecture",
    "grip": "R",
    "qid": "PP-1004",
    "type": "scale",
    "title": "Our pricing architecture allows customers to naturally expand usage and spend over time (land-and-expand built in).",
    "sub": "Is your pricing STRATEGIC or just inherited?",
    "options": [
      "No expansion path",
      "Only through upsell conversations",
      "Some natural expansion",
      "Strong expansion mechanics",
      "Self-serve expansion with automated triggers"
    ]
  },
  {
    "id": 1005,
    "pillar": 1,
    "pillar_name": "Pricing Strategy & Architecture",
    "grip": "I",
    "qid": "PP-1005",
    "type": "scale",
    "title": "Pricing decisions are made using data (win rates, churn by plan, willingness-to-pay research) rather than intuition.",
    "sub": "Is your pricing STRATEGIC or just inherited?",
    "options": [
      "Pure intuition",
      "Mostly gut feel",
      "Some data inputs",
      "Strong data-driven",
      "Systematic pricing analytics with experimentation"
    ]
  },
  {
    "id": 1006,
    "pillar": 1,
    "pillar_name": "Pricing Strategy & Architecture",
    "grip": "I",
    "qid": "PP-1006",
    "type": "scale",
    "title": "We review and adjust pricing at a defined cadence based on market conditions, costs, and competitive positioning.",
    "sub": "Is your pricing STRATEGIC or just inherited?",
    "options": [
      "Never reviewed",
      "Only when forced",
      "Annual review",
      "Semi-annual structured review",
      "Continuous pricing optimization program"
    ]
  },
  {
    "id": 1007,
    "pillar": 1,
    "pillar_name": "Pricing Strategy & Architecture",
    "grip": "I",
    "qid": "PP-1007",
    "type": "scale",
    "title": "We have a defined process for pricing changes including impact assessment, communication plan, and grandfathering policy.",
    "sub": "Is your pricing STRATEGIC or just inherited?",
    "options": [
      "No process",
      "Ad-hoc changes",
      "Basic process",
      "Strong change management",
      "Full governance with A/B testing and rollback capability"
    ]
  },
  {
    "id": 1008,
    "pillar": 1,
    "pillar_name": "Pricing Strategy & Architecture",
    "grip": "P",
    "qid": "PP-1008",
    "type": "text",
    "title": "What is your average discount rate on list price? (% discount given across all deals)",
    "sub": "Is your pricing STRATEGIC or just inherited?"
  },
  {
    "id": 1009,
    "pillar": 1,
    "pillar_name": "Pricing Strategy & Architecture",
    "grip": "P",
    "qid": "PP-1009",
    "type": "text",
    "title": "Win rate difference between deals at list price vs discounted deals? (percentage points)",
    "sub": "Is your pricing STRATEGIC or just inherited?"
  },
  {
    "id": 1010,
    "pillar": 1,
    "pillar_name": "Pricing Strategy & Architecture",
    "grip": "P",
    "qid": "PP-1010",
    "type": "scale",
    "title": "Our pricing is perceived as fair by customers and rarely cited as a primary churn reason.",
    "sub": "Is your pricing STRATEGIC or just inherited?",
    "options": [
      "Pricing is #1 churn driver",
      "Frequently cited",
      "Sometimes cited",
      "Rarely cited",
      "Almost never --- strong value perception **Engine 2: Packaging & Plan Design**"
    ]
  },
  {
    "id": 2001,
    "pillar": 2,
    "pillar_name": "Packaging & Plan Design",
    "grip": "G",
    "qid": "PP-2001",
    "type": "scale",
    "title": "Our packaging clearly differentiates plans based on customer needs, not just feature quantity.",
    "sub": "Do your packages make it EASY to buy?",
    "options": [
      "No differentiation",
      "Mostly feature gating",
      "Some value-based differentiation",
      "Strong needs-based packaging",
      "Validated packaging aligned to buyer personas and use cases"
    ]
  },
  {
    "id": 2002,
    "pillar": 2,
    "pillar_name": "Packaging & Plan Design",
    "grip": "G",
    "qid": "PP-2002",
    "type": "scale",
    "title": "Each plan has a clear target buyer persona and the packaging makes it easy for buyers to self-select the right plan.",
    "sub": "Do your packages make it EASY to buy?",
    "options": [
      "Confusing plans",
      "Mostly confusing",
      "Somewhat clear",
      "Clear self-selection",
      "Intuitive self-selection validated by conversion data"
    ]
  },
  {
    "id": 2003,
    "pillar": 2,
    "pillar_name": "Packaging & Plan Design",
    "grip": "R",
    "qid": "PP-2003",
    "type": "text",
    "title": "What percentage of new customers select the plan you intended for their segment? (plan-fit rate)",
    "sub": "Do your packages make it EASY to buy?"
  },
  {
    "id": 2004,
    "pillar": 2,
    "pillar_name": "Packaging & Plan Design",
    "grip": "R",
    "qid": "PP-2004",
    "type": "scale",
    "title": "Our free tier or trial is strategically designed to convert users to paid (not just give away value).",
    "sub": "Do your packages make it EASY to buy?",
    "options": [
      "No free option",
      "Free tier bleeds value",
      "Basic trial",
      "Strategic conversion design",
      "Optimized PQL-to-paid pipeline with measured conversion"
    ]
  },
  {
    "id": 2005,
    "pillar": 2,
    "pillar_name": "Packaging & Plan Design",
    "grip": "I",
    "qid": "PP-2005",
    "type": "scale",
    "title": "We test packaging changes with data before rolling them out (A/B tests, cohort analysis, customer research).",
    "sub": "Do your packages make it EASY to buy?",
    "options": [
      "Never test",
      "Rarely",
      "Sometimes",
      "Usually",
      "Always --- systematic experimentation"
    ]
  },
  {
    "id": 2006,
    "pillar": 2,
    "pillar_name": "Packaging & Plan Design",
    "grip": "I",
    "qid": "PP-2006",
    "type": "scale",
    "title": "Packaging is designed to minimize friction for upgrades --- customers can move between plans without disruption.",
    "sub": "Do your packages make it EASY to buy?",
    "options": [
      "Upgrade is painful",
      "Significant friction",
      "Some friction",
      "Smooth upgrade path",
      "Frictionless self-serve upgrade with prorated billing"
    ]
  },
  {
    "id": 2007,
    "pillar": 2,
    "pillar_name": "Packaging & Plan Design",
    "grip": "I",
    "qid": "PP-2007",
    "type": "scale",
    "title": "We regularly analyze which features drive adoption, retention, and expansion to inform packaging decisions.",
    "sub": "Do your packages make it EASY to buy?",
    "options": [
      "No analysis",
      "Anecdotal",
      "Basic usage data",
      "Strong feature analytics",
      "Systematic feature-value mapping driving packaging strategy"
    ]
  },
  {
    "id": 2008,
    "pillar": 2,
    "pillar_name": "Packaging & Plan Design",
    "grip": "P",
    "qid": "PP-2008",
    "type": "text",
    "title": "Free-to-paid conversion rate? (% of free users/trialists who become paying customers)",
    "sub": "Do your packages make it EASY to buy?"
  },
  {
    "id": 2009,
    "pillar": 2,
    "pillar_name": "Packaging & Plan Design",
    "grip": "P",
    "qid": "PP-2009",
    "type": "text",
    "title": "Plan upgrade rate? (% of customers who upgrade to a higher plan within 12 months)",
    "sub": "Do your packages make it EASY to buy?"
  },
  {
    "id": 2010,
    "pillar": 2,
    "pillar_name": "Packaging & Plan Design",
    "grip": "P",
    "qid": "PP-2010",
    "type": "scale",
    "title": "Customers report that our pricing page is clear, easy to understand, and helps them choose the right plan.",
    "sub": "Do your packages make it EASY to buy?",
    "options": [
      "Confusing",
      "Mostly confusing",
      "Acceptable",
      "Clear",
      "Praised for clarity **Engine 3: Revenue Model & Unit Economics**"
    ]
  },
  {
    "id": 3001,
    "pillar": 3,
    "pillar_name": "Revenue Model & Unit Economics",
    "grip": "G",
    "qid": "PP-3001",
    "type": "scale",
    "title": "We have a clearly defined revenue model with understood unit economics (CAC, LTV, payback, margins).",
    "sub": "Do your unit economics actually WORK?",
    "options": [
      "No model",
      "Basic awareness",
      "Documented model",
      "Strong model with targets",
      "Optimized model with benchmarks and scenario planning"
    ]
  },
  {
    "id": 3002,
    "pillar": 3,
    "pillar_name": "Revenue Model & Unit Economics",
    "grip": "G",
    "qid": "PP-3002",
    "type": "scale",
    "title": "Our pricing supports healthy gross margins that are understood and tracked at the cohort/segment level.",
    "sub": "Do your unit economics actually WORK?",
    "options": [
      "Margins unknown",
      "Company-level only",
      "Basic tracking",
      "Segment-level tracking",
      "Cohort-level with optimization targets"
    ]
  },
  {
    "id": 3003,
    "pillar": 3,
    "pillar_name": "Revenue Model & Unit Economics",
    "grip": "R",
    "qid": "PP-3003",
    "type": "text",
    "title": "Current LTV:CAC ratio?",
    "sub": "Do your unit economics actually WORK?"
  },
  {
    "id": 3004,
    "pillar": 3,
    "pillar_name": "Revenue Model & Unit Economics",
    "grip": "R",
    "qid": "PP-3004",
    "type": "text",
    "title": "CAC payback period in months?",
    "sub": "Do your unit economics actually WORK?"
  },
  {
    "id": 3005,
    "pillar": 3,
    "pillar_name": "Revenue Model & Unit Economics",
    "grip": "I",
    "qid": "PP-3005",
    "type": "scale",
    "title": "We track unit economics by segment, cohort, and acquisition channel to identify profitable growth paths.",
    "sub": "Do your unit economics actually WORK?",
    "options": [
      "No tracking",
      "Company-level only",
      "Some segmentation",
      "Strong multi-dimensional tracking",
      "Real-time unit economics with automated alerting"
    ]
  },
  {
    "id": 3006,
    "pillar": 3,
    "pillar_name": "Revenue Model & Unit Economics",
    "grip": "I",
    "qid": "PP-3006",
    "type": "scale",
    "title": "We model the revenue impact of pricing and packaging changes before implementing them.",
    "sub": "Do your unit economics actually WORK?",
    "options": [
      "No modeling",
      "Basic back-of-envelope",
      "Spreadsheet models",
      "Strong scenario modeling",
      "Sophisticated financial modeling with sensitivity analysis"
    ]
  },
  {
    "id": 3007,
    "pillar": 3,
    "pillar_name": "Revenue Model & Unit Economics",
    "grip": "I",
    "qid": "PP-3007",
    "type": "scale",
    "title": "We have defined thresholds for unit economics that trigger pricing reviews (e.g., LTV:CAC drops below 3.0).",
    "sub": "Do your unit economics actually WORK?",
    "options": [
      "No thresholds",
      "Informal awareness",
      "Some defined triggers",
      "Clear triggers with review process",
      "Automated monitoring with escalation"
    ]
  },
  {
    "id": 3008,
    "pillar": 3,
    "pillar_name": "Revenue Model & Unit Economics",
    "grip": "P",
    "qid": "PP-3008",
    "type": "text",
    "title": "Gross margin percentage?",
    "sub": "Do your unit economics actually WORK?"
  },
  {
    "id": 3009,
    "pillar": 3,
    "pillar_name": "Revenue Model & Unit Economics",
    "grip": "P",
    "qid": "PP-3009",
    "type": "text",
    "title": "Net Revenue Retention (NRR) rate?",
    "sub": "Do your unit economics actually WORK?"
  },
  {
    "id": 3010,
    "pillar": 3,
    "pillar_name": "Revenue Model & Unit Economics",
    "grip": "P",
    "qid": "PP-3010",
    "type": "scale",
    "title": "Our revenue model is sustainable --- we are confident current unit economics support long-term growth.",
    "sub": "Do your unit economics actually WORK?",
    "options": [
      "Unsustainable",
      "Concerning",
      "Uncertain",
      "Confident",
      "Highly confident with data backing **Engine 4: Competitive Pricing & Market Position**"
    ]
  },
  {
    "id": 4001,
    "pillar": 4,
    "pillar_name": "Competitive Pricing & Market Position",
    "grip": "G",
    "qid": "PP-4001",
    "type": "scale",
    "title": "We have a defined competitive pricing strategy (premium, parity, penetration, freemium) that is explicitly chosen.",
    "sub": "Are you priced to WIN or priced to lose?",
    "options": [
      "No strategy",
      "Accidental positioning",
      "Informal strategy",
      "Deliberate documented strategy",
      "Dynamic strategy adjusted by segment and competitor"
    ]
  },
  {
    "id": 4002,
    "pillar": 4,
    "pillar_name": "Competitive Pricing & Market Position",
    "grip": "G",
    "qid": "PP-4002",
    "type": "scale",
    "title": "We understand how our pricing compares to the top 3-5 alternatives in our market.",
    "sub": "Are you priced to WIN or priced to lose?",
    "options": [
      "No competitive pricing intel",
      "Basic awareness",
      "Some research",
      "Strong competitive pricing analysis",
      "Continuous monitoring with positioning adjustments"
    ]
  },
  {
    "id": 4003,
    "pillar": 4,
    "pillar_name": "Competitive Pricing & Market Position",
    "grip": "R",
    "qid": "PP-4003",
    "type": "text",
    "title": "Price position relative to primary competitor? (your price as % of theirs: \\>100% = premium)",
    "sub": "Are you priced to WIN or priced to lose?"
  },
  {
    "id": 4004,
    "pillar": 4,
    "pillar_name": "Competitive Pricing & Market Position",
    "grip": "R",
    "qid": "PP-4004",
    "type": "scale",
    "title": "We have access to competitive pricing data through systematic intelligence gathering (not just checking websites).",
    "sub": "Are you priced to WIN or priced to lose?",
    "options": [
      "No access",
      "Public pricing only",
      "Some deal-level intel",
      "Strong multi-source intel",
      "Comprehensive competitive pricing intelligence program"
    ]
  },
  {
    "id": 4005,
    "pillar": 4,
    "pillar_name": "Competitive Pricing & Market Position",
    "grip": "I",
    "qid": "PP-4005",
    "type": "scale",
    "title": "Sales is trained on competitive pricing objection handling and value-based selling against price pressure.",
    "sub": "Are you priced to WIN or priced to lose?",
    "options": [
      "No training",
      "Ad-hoc",
      "Basic training",
      "Structured training program",
      "Continuous coaching with deal-level competitive support"
    ]
  },
  {
    "id": 4006,
    "pillar": 4,
    "pillar_name": "Competitive Pricing & Market Position",
    "grip": "I",
    "qid": "PP-4006",
    "type": "scale",
    "title": "We respond to competitor pricing changes with a defined playbook rather than reactive discounting.",
    "sub": "Are you priced to WIN or priced to lose?",
    "options": [
      "Reactive panic discounting",
      "Mostly reactive",
      "Some playbook elements",
      "Defined playbook",
      "Strategic playbook with scenario-specific responses"
    ]
  },
  {
    "id": 4007,
    "pillar": 4,
    "pillar_name": "Competitive Pricing & Market Position",
    "grip": "I",
    "qid": "PP-4007",
    "type": "scale",
    "title": "Discounting authority is clearly defined with approval tiers and deal desk governance.",
    "sub": "Are you priced to WIN or priced to lose?",
    "options": [
      "Anyone can discount anything",
      "Informal limits",
      "Basic approval tiers",
      "Strong deal desk governance",
      "Automated approval with margin protection and escalation"
    ]
  },
  {
    "id": 4008,
    "pillar": 4,
    "pillar_name": "Competitive Pricing & Market Position",
    "grip": "P",
    "qid": "PP-4008",
    "type": "scale",
    "title": "We rarely lose deals primarily on price --- when we lose, it is on value fit or timing, not cost.",
    "sub": "Are you priced to WIN or priced to lose?",
    "options": [
      "Price is primary loss reason",
      "Frequently lose on price",
      "Sometimes",
      "Rarely",
      "Almost never --- strong value differentiation"
    ]
  },
  {
    "id": 4009,
    "pillar": 4,
    "pillar_name": "Competitive Pricing & Market Position",
    "grip": "P",
    "qid": "PP-4009",
    "type": "text",
    "title": "Percentage of deals that require non-standard discounting (beyond standard approval tiers)?",
    "sub": "Are you priced to WIN or priced to lose?"
  },
  {
    "id": 4010,
    "pillar": 4,
    "pillar_name": "Competitive Pricing & Market Position",
    "grip": "P",
    "qid": "PP-4010",
    "type": "scale",
    "title": "Our market position (premium/parity/value) is understood and reinforced consistently across Sales, Marketing, and CS.",
    "sub": "Are you priced to WIN or priced to lose?",
    "options": [
      "No consistent position",
      "Inconsistent",
      "Somewhat consistent",
      "Consistent",
      "Deeply embedded in all GTM messaging and behavior **Engine 5: Monetization & Expansion Revenue**"
    ]
  },
  {
    "id": 5001,
    "pillar": 5,
    "pillar_name": "Monetization & Expansion Revenue",
    "grip": "G",
    "qid": "PP-5001",
    "type": "scale",
    "title": "We have a defined expansion revenue strategy covering upsells, cross-sells, and usage-based growth.",
    "sub": "Are you capturing EXPANSION revenue or leaving it on the table?",
    "options": [
      "No strategy",
      "Opportunistic only",
      "Basic strategy",
      "Strong multi-lever strategy",
      "Sophisticated expansion engine with predictive triggers"
    ]
  },
  {
    "id": 5002,
    "pillar": 5,
    "pillar_name": "Monetization & Expansion Revenue",
    "grip": "G",
    "qid": "PP-5002",
    "type": "scale",
    "title": "Our product and pricing architecture creates natural expansion triggers as customers grow or mature.",
    "sub": "Are you capturing EXPANSION revenue or leaving it on the table?",
    "options": [
      "No natural triggers",
      "Manual upsell only",
      "Some natural triggers",
      "Strong built-in expansion",
      "Product-led expansion with automated monetization signals"
    ]
  },
  {
    "id": 5003,
    "pillar": 5,
    "pillar_name": "Monetization & Expansion Revenue",
    "grip": "R",
    "qid": "PP-5003",
    "type": "text",
    "title": "Expansion revenue as percentage of total new ARR?",
    "sub": "Are you capturing EXPANSION revenue or leaving it on the table?"
  },
  {
    "id": 5004,
    "pillar": 5,
    "pillar_name": "Monetization & Expansion Revenue",
    "grip": "R",
    "qid": "PP-5004",
    "type": "scale",
    "title": "We have defined upsell/cross-sell playbooks with triggers, talk tracks, and success criteria.",
    "sub": "Are you capturing EXPANSION revenue or leaving it on the table?",
    "options": [
      "No playbooks",
      "Informal approaches",
      "Basic playbooks",
      "Strong documented playbooks",
      "Dynamic playbooks with data-driven triggers and measured conversion"
    ]
  },
  {
    "id": 5005,
    "pillar": 5,
    "pillar_name": "Monetization & Expansion Revenue",
    "grip": "I",
    "qid": "PP-5005",
    "type": "scale",
    "title": "Customer health and usage data is used to identify expansion opportunities proactively.",
    "sub": "Are you capturing EXPANSION revenue or leaving it on the table?",
    "options": [
      "No data used",
      "Reactive to requests",
      "Some proactive signals",
      "Strong proactive identification",
      "Automated expansion signals with CS/Sales routing"
    ]
  },
  {
    "id": 5006,
    "pillar": 5,
    "pillar_name": "Monetization & Expansion Revenue",
    "grip": "I",
    "qid": "PP-5006",
    "type": "scale",
    "title": "We track and optimize expansion conversion rates by trigger type, segment, and channel.",
    "sub": "Are you capturing EXPANSION revenue or leaving it on the table?",
    "options": [
      "No tracking",
      "Basic tracking",
      "Some optimization",
      "Strong tracking and optimization",
      "Systematic experimentation on expansion motions"
    ]
  },
  {
    "id": 5007,
    "pillar": 5,
    "pillar_name": "Monetization & Expansion Revenue",
    "grip": "I",
    "qid": "PP-5007",
    "type": "scale",
    "title": "Pricing for add-ons and expansion products is designed to be frictionless --- no complex renegotiation required.",
    "sub": "Are you capturing EXPANSION revenue or leaving it on the table?",
    "options": [
      "Full renegotiation",
      "Significant friction",
      "Some friction",
      "Mostly frictionless",
      "Self-serve add-ons with transparent pricing"
    ]
  },
  {
    "id": 5008,
    "pillar": 5,
    "pillar_name": "Monetization & Expansion Revenue",
    "grip": "P",
    "qid": "PP-5008",
    "type": "text",
    "title": "Average revenue per account (ARPA) growth rate year-over-year?",
    "sub": "Are you capturing EXPANSION revenue or leaving it on the table?"
  },
  {
    "id": 5009,
    "pillar": 5,
    "pillar_name": "Monetization & Expansion Revenue",
    "grip": "P",
    "qid": "PP-5009",
    "type": "text",
    "title": "Upsell/cross-sell win rate? (% of expansion opportunities that convert)",
    "sub": "Are you capturing EXPANSION revenue or leaving it on the table?"
  },
  {
    "id": 5010,
    "pillar": 5,
    "pillar_name": "Monetization & Expansion Revenue",
    "grip": "P",
    "qid": "PP-5010",
    "type": "scale",
    "title": "Expansion revenue is predictable and growing as a proportion of total revenue.",
    "sub": "Are you capturing EXPANSION revenue or leaving it on the table?",
    "options": [
      "Unpredictable/declining",
      "Volatile",
      "Somewhat predictable",
      "Predictable and growing",
      "Highly predictable --- core growth engine **Engine 6: Pricing Operations & Governance**"
    ]
  },
  {
    "id": 6001,
    "pillar": 6,
    "pillar_name": "Pricing Operations & Governance",
    "grip": "G",
    "qid": "PP-6001",
    "type": "scale",
    "title": "We have a defined pricing governance structure with clear ownership, decision rights, and escalation paths.",
    "sub": "Is pricing GOVERNED or does every deal get a custom quote?",
    "options": [
      "No governance",
      "Ad-hoc decisions",
      "Basic ownership",
      "Strong governance structure",
      "Full pricing committee with mandate and regular cadence"
    ]
  },
  {
    "id": 6002,
    "pillar": 6,
    "pillar_name": "Pricing Operations & Governance",
    "grip": "G",
    "qid": "PP-6002",
    "type": "scale",
    "title": "Pricing changes are managed through a structured process including impact analysis and stakeholder alignment.",
    "sub": "Is pricing GOVERNED or does every deal get a custom quote?",
    "options": [
      "No process",
      "Informal",
      "Basic process",
      "Strong process",
      "Full governance with testing, rollback, and post-implementation review"
    ]
  },
  {
    "id": 6003,
    "pillar": 6,
    "pillar_name": "Pricing Operations & Governance",
    "grip": "R",
    "qid": "PP-6003",
    "type": "text",
    "title": "How many pricing changes (major or minor) were implemented in the last 12 months?",
    "sub": "Is pricing GOVERNED or does every deal get a custom quote?"
  },
  {
    "id": 6004,
    "pillar": 6,
    "pillar_name": "Pricing Operations & Governance",
    "grip": "R",
    "qid": "PP-6004",
    "type": "scale",
    "title": "We have the right tools and infrastructure to implement pricing changes quickly (CPQ, billing, revenue recognition).",
    "sub": "Is pricing GOVERNED or does every deal get a custom quote?",
    "options": [
      "Major gaps",
      "Mostly manual",
      "Basic tooling",
      "Strong infrastructure",
      "Flexible pricing infrastructure with rapid deployment capability"
    ]
  },
  {
    "id": 6005,
    "pillar": 6,
    "pillar_name": "Pricing Operations & Governance",
    "grip": "I",
    "qid": "PP-6005",
    "type": "scale",
    "title": "Quote-to-cash process is streamlined --- generating quotes, processing orders, and recognizing revenue is efficient.",
    "sub": "Is pricing GOVERNED or does every deal get a custom quote?",
    "options": [
      "Completely manual",
      "Mostly manual",
      "Partially automated",
      "Mostly automated",
      "Fully automated Q2C with exception handling"
    ]
  },
  {
    "id": 6006,
    "pillar": 6,
    "pillar_name": "Pricing Operations & Governance",
    "grip": "I",
    "qid": "PP-6006",
    "type": "scale",
    "title": "We track pricing exceptions, custom deals, and non-standard terms to identify patterns and optimize.",
    "sub": "Is pricing GOVERNED or does every deal get a custom quote?",
    "options": [
      "No tracking",
      "Ad-hoc awareness",
      "Basic tracking",
      "Strong tracking with pattern analysis",
      "Systematic exception analysis driving pricing policy updates"
    ]
  },
  {
    "id": 6007,
    "pillar": 6,
    "pillar_name": "Pricing Operations & Governance",
    "grip": "I",
    "qid": "PP-6007",
    "type": "scale",
    "title": "Revenue recognition is automated and compliant --- pricing complexity does not create accounting burden.",
    "sub": "Is pricing GOVERNED or does every deal get a custom quote?",
    "options": [
      "Manual/non-compliant",
      "Mostly manual",
      "Semi-automated",
      "Automated with controls",
      "Fully automated ASC 606 compliant with audit trail"
    ]
  },
  {
    "id": 6008,
    "pillar": 6,
    "pillar_name": "Pricing Operations & Governance",
    "grip": "P",
    "qid": "PP-6008",
    "type": "scale",
    "title": "Sales team can generate accurate quotes quickly without needing pricing specialist involvement for standard deals.",
    "sub": "Is pricing GOVERNED or does every deal get a custom quote?",
    "options": [
      "Always needs help",
      "Usually needs help",
      "Sometimes",
      "Rarely",
      "Fully self-serve for standard deals"
    ]
  },
  {
    "id": 6009,
    "pillar": 6,
    "pillar_name": "Pricing Operations & Governance",
    "grip": "P",
    "qid": "PP-6009",
    "type": "text",
    "title": "Average time from quote request to delivered proposal? (business hours)",
    "sub": "Is pricing GOVERNED or does every deal get a custom quote?"
  },
  {
    "id": 6010,
    "pillar": 6,
    "pillar_name": "Pricing Operations & Governance",
    "grip": "P",
    "qid": "PP-6010",
    "type": "scale",
    "title": "Our pricing operations enable GTM velocity rather than creating bottlenecks.",
    "sub": "Is pricing GOVERNED or does every deal get a custom quote?",
    "options": [
      "Major bottleneck",
      "Frequent bottleneck",
      "Neutral",
      "Mostly enables",
      "Clear accelerator --- pricing is a competitive advantage **4. Numeric Input Calibration Tables**  -----------------------------------------------------------------------"
    ]
  }
];
