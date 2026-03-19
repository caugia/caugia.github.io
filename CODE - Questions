/* ===========================================================
   QUESTIONS — MASTER QUESTION ENGINE v3.2
   Changes vs v3.1:
   - Q11020 option E further shortened to fit UI
   =========================================================== */

const QUESTIONS = [

/* ===========================================================
   PILLAR 0 — CONTEXT (25 QUESTIONS)
   =========================================================== */

{
  id: 1,
  pillar: 0,
  type: "group",
  title: "Tell us about you and your company",
  subtitle: "Basic context to calibrate benchmarks and velocity",
  fields: [
    { name: "fullname", label: "Your full name" },
    { name: "role", label: "Your role or job title" },
    { name: "email", label: "Email address" },
    { name: "company", label: "Company name" },
    { name: "industry", label: "Industry (e.g. FinTech, HRTech, DevTools)" },
    { name: "total_employees", label: "Total Employees (FTE equivalent)" },
    { name: "year_founded", label: "Year Founded (YYYY)" },
    { name: "hq_region", label: "HQ Region (US, FR, UK, Other)" }
  ]
},

{
  id: 2,
  pillar: 0,
  type: "group",
  title: "Key SaaS Performance Metrics",
  subtitle: "Core financial health indicators",
  fields: [
    { name: "arr", label: "Current ARR (Annual Recurring Revenue)" },
    { name: "growth_rate", label: "Year-over-Year Growth Rate (%)" },
    { name: "nrr", label: "Net Revenue Retention (NRR %)" },
    { name: "gross_margin", label: "Gross Margin (%)" },
    { name: "monthly_burn", label: "Monthly Net Burn ($)" },
    { name: "cash_runway", label: "Cash Runway (Estimated months remaining)" },
    { name: "pricing_model", label: "Pricing Model (e.g. Flat, Per Seat, Usage-based)" },
    { name: "number_of_clients", label: "Number of Active Paying Customers" }
  ]
},

{
  id: 3,
  pillar: 0,
  type: "group",
  title: "GTM Team Composition (Full Time Employees)",
  subtitle: "How your revenue engine is staffed today",
  fields: [
    { name: "sales_headcount", label: "# Sales (AEs)" },
    { name: "sales_leadership_headcount", label: "# Sales Leadership (VP/Head/Managers)" },
    { name: "sdr_headcount", label: "# SDR / BDR" },
    { name: "marketing_headcount", label: "# Marketing (Demand + PMM + Brand)" },
    { name: "cs_headcount", label: "# Customer Success / Account Management" },
    { name: "revops_enablement_headcount", label: "# RevOps / Enablement" },
    { name: "product_headcount", label: "# Product (PM + Design)" },
    { name: "gtm_other_headcount", label: "# Other GTM (Partners, Solutions, SEs)" }
  ]
},

{
  id: 4,
  pillar: 0,
  type: "group",
  title: "Targets & Efficiency",
  subtitle: "Revenue efficiency and pricing power",
  fields: [
    { name: "arr_target", label: "ARR Target for this Fiscal Year" },
    { name: "quota_attainment", label: "% of Reps Hitting Quota (Last Quarter)" },
    { name: "cac_payback", label: "CAC Payback Period (Months)" },
    { name: "ltv_cac", label: "LTV to CAC Ratio" },
    { name: "avg_discount", label: "Average Discount % on New Logo Deals" },
    { name: "expansion_pct", label: "% of New ARR from Upsell / Expansion" },
    { name: "opex_includes_payroll", label: "Does the monthly burn include payroll? (Yes/No)" },
    { name: "sales_marketing_pct", label: "Sales & Marketing spend as % of revenue" }
  ]
},

{
  id: 5,
  pillar: 0,
  type: "group",
  title: "Funnel Velocity & Risk Context",
  subtitle: "Where deals slow down, break, or disappear",
  fields: [
    { name: "win_rate", label: "Average Win Rate (%)" },
    { name: "sales_cycle", label: "Average Sales Cycle (Days)" },
    { name: "pipeline_coverage", label: "Pipeline Coverage Ratio (e.g. 3.5x)" },
    { name: "churn_rate", label: "Annual Churn Rate (%)" },
    { name: "top_competitors", label: "Top 3 Competitors (Comma separated)" },
    { name: "primary_loss_reason", label: "Primary loss reason (e.g. Budget, Competition)" },
    { name: "revenue_concentration", label: "% of Revenue from Top 10 Customers" },
    { name: "primary_churn_reason", label: "Primary reason for churn (e.g. Price, Product)" }
  ]
},

{
  id: 6,
  pillar: 0,
  type: "group",
  title: "Pipeline & Product Intelligence",
  subtitle: "Estimates are fine. Leave blank or enter 999 if a field does not apply.",
  fields: [
    { name: "discovery_to_demo", label: "Discovery → Demo conversion %" },
    { name: "demo_to_poc", label: "Demo → POC / Trial conversion %" },
    { name: "poc_to_close", label: "POC → Close conversion %" },
    { name: "technical_validation_loss", label: "% deals lost at technical validation" },
    { name: "activation_30d", label: "% users active 30 days post-onboarding" },
    { name: "feature_penetration", label: "% accounts using 3+ core features" },
    { name: "time_to_value", label: "Avg days to first value moment" },
    { name: "product_expansion_pct", label: "% expansion revenue driven by product usage" }
  ]
},
   
{
  id: 7,
  pillar: 0,
  type: "radio",
  title: "What best describes your primary GTM motion?",
  options: [
    "Inbound-led (Marketing driven)",
    "Outbound-led (Sales driven)",
    "Product-led (PLG / Self-serve)",
    "Partner-led (Channel / Ecosystem)",
    "Enterprise Field Sales (High touch)",
    "Hybrid (Balanced mix)"
  ]
},

{
  id: 8,
  pillar: 0,
  type: "radio",
  title: "Your primary revenue model",
  options: [
    "SaaS Subscription (Recurring)",
    "Usage-based / Consumption",
    "Transactional / One-time",
    "Marketplace / Take-rate",
    "Managed Services / Hybrid"
  ]
},

{
  id: 9,
  pillar: 0,
  type: "radio",
  title: "Primary Target Segment (ACV)",
  options: [
    "Rabbit / SMB (< 10k ACV)",
    "Deer / Mid-Market (10k - 50k ACV)",
    "Elephant / Enterprise (50k - 250k ACV)",
    "Whale / Strategic (250k+ ACV)"
  ]
},

{
  id: 10,
  pillar: 0,
  type: "radio",
  title: "Who is your primary Economic Buyer?",
  options: [
    "C-Level Executive (CEO, CFO, CTO)",
    "VP / Head of Department",
    "Team Lead / Manager",
    "Individual Contributor / End User",
    "Technical / IT Procurement"
  ]
},

{
  id: 11,
  pillar: 0,
  type: "radio",
  title: "Sales Cycle Complexity",
  options: [
    "Transactional (< 30 days, 1-2 stakeholders)",
    "Fast B2B (1-3 months, 2-4 stakeholders)",
    "Complex (3-6 months, 4-8 stakeholders)",
    "Strategic (6-12+ months, Committee decision)"
  ]
},

{
  id: 12,
  pillar: 0,
  type: "radio",
  title: "Funding Stage",
  options: [
    "Bootstrapped / Profitable",
    "Pre-Seed / Seed",
    "Series A",
    "Series B",
    "Series C+",
    "Private Equity / Public"
  ]
},

{
  id: 13,
  pillar: 0,
  type: "radio",
  title: "Product Maturity",
  options: [
    "MVP / Early Adopters",
    "Product-Market Fit (Single Product)",
    "Multi-Product Platform",
    "Platform + Ecosystem"
  ]
},

{
  id: 14,
  pillar: 0,
  type: "text",
  title: "Primary Geographic Market(s)"
},

{
  id: 15,
  pillar: 0,
  type: "radio",
  title: "Product Category Type",
  options: [
    "System of Record (e.g. CRM, ERP)",
    "System of Engagement (e.g. Salesloft, Slack)",
    "Point Solution / Tool",
    "Infrastructure / API / DevTool",
    "Data / Analytics / AI"
  ]
},

{
  id: 16,
  pillar: 0,
  type: "radio",
  title: "Competitive Landscape",
  options: [
    "Blue Ocean (Creating a new category)",
    "Disruptor (Better/Cheaper than incumbent)",
    "Niche Player (Specialized vertical)",
    "Red Ocean (Highly saturated / Commodity)"
  ]
},

{
  id: 17,
  pillar: 0,
  type: "radio",
  title: "Strategic Focus for the next 12 months",
  options: [
    "Aggressive Growth (New Logos)",
    "Efficiency & Profitability (Cash flow)",
    "Expansion & NRR (Upsell/Cross-sell)",
    "New Market Entry (Geo or Segment)",
    "Brand & Category Leadership"
  ]
},

{
  id: 18,
  pillar: 0,
  type: "radio",
  title: "Primary Friction Point (The Symptom)",
  options: [
    "Not enough leads (Top of Funnel)",
    "Low conversion rates (Mid Funnel)",
    "Stalled deals / Long cycles (Sales Execution)",
    "High Churn / Downsell (Retention)",
    "Team misalignment / Chaos (Operations)"
  ]
},

{
  id: 19,
  pillar: 0,
  type: "radio",
  title: "Internal Bottleneck (The Cause)",
  options: [
    "Talent / Hiring gaps",
    "Technology / Data debt",
    "Budget constraints",
    "Strategic ambiguity / Leadership alignment",
    "Product gaps / Feature parity"
  ]
},

{
  id: 20,
  pillar: 0,
  type: "radio",
  title: "Recent Trigger Event",
  options: [
    "Business as usual",
    "Just raised capital",
    "New C-Level leadership installed",
    "Missed revenue target significantly",
    "Pivot in strategy or product"
  ]
},

{
  id: 21,
  pillar: 0,
  type: "radio",
  title: "Desired Assessment Outcome",
  options: [
    "General Health Check",
    "Preparation for Fundraising",
    "Specific Problem Diagnosis",
    "Annual Planning Input",
    "Board Reporting Support"
  ]
},

{
  id: 22,
  pillar: 0,
  type: "radio",
  title: "How would you describe your product complexity?",
  options: ["Simple / Plug & Play", "Moderately complex", "Complex / Configurable", "Highly complex / Custom"]
},

{
  id: 23,
  pillar: 0,
  type: "radio",
  title: "Market Adoption Phase",
  options: [
    "Early Market (Visionaries)",
    "Crossing the Chasm (Bowling Alley)",
    "Mainstream (Pragmatists)",
    "Late Market (Conservatives)"
  ]
},

{
  id: 24,
  pillar: 0,
  type: "radio",
  title: "Tech Stack Maturity",
  options: [
    "Ad-hoc / Spreadsheets",
    "Basic CRM setup",
    "Integrated Stack (CRM + MAP + SEP)",
    "Advanced / Custom Data Warehouse"
  ]
},

{
  id: 25,
  pillar: 0,
  type: "radio",
  title: "Primary reporting currency",
  options: [
    "USD ($)",
    "EUR (€)",
    "GBP (£)",
    "AUD ($)",
    "CAD ($)",
    "Other"
  ]
},

/* ===========================================================
   PILLAR 1 — GTM STRATEGY & LEADERSHIP (20 QUESTIONS)
   =========================================================== */

{
  id: 1001, pillar: 1, type: "scale",
  title: "In the last 12 months, how many GTM initiatives were formally stopped, deprioritized, or defunded after a quarterly review?",
  options: [
    "We have not formally stopped any initiatives: everything we start continues",
    "One or two things were quietly dropped but without a formal review process",
    "A few initiatives were formally reviewed and stopped based on performance data",
    "We have a documented quarterly kill process: initiatives are stopped with documented rationale",
    "Our quarterly review kills more initiatives than it launches: resource discipline is enforced systematically"
  ]
},
{
  id: 1002, pillar: 1, type: "scale",
  title: "How explicitly have you defined which market segments, verticals, or deal types you will not pursue?",
  options: [
    "No exclusions defined: we pursue anything that looks like a deal",
    "Informal consensus but nothing documented or enforced",
    "Some exclusions exist but not consistently applied across sales",
    "Written exclusion criteria, reviewed in pipeline qualification calls",
    "Explicit negative ICP rules enforced in CRM scoring, quota design, and rep comp"
  ]
},
{
  id: 1003, pillar: 1, type: "scale",
  title: "When two GTM teams are competing for the same budget or headcount, how is that conflict resolved, and how fast?",
  options: [
    "Conflicts are escalated to the CEO and resolved informally over weeks",
    "Leadership discusses it in a meeting but resolution is slow and often political",
    "A documented priority framework exists but conflict resolution still takes multiple cycles",
    "A defined decision authority resolves resource conflicts within one week with documented rationale",
    "Resource conflicts are resolved at the operating cadence level: within 48 hours, using a pre-agreed priority hierarchy"
  ]
},
{
  id: 1004, pillar: 1, type: "scale",
  title: "How detailed and time-bound is your GTM roadmap for the next 12-18 months?",
  options: [
    "No roadmap: we operate quarter to quarter reactively",
    "Rough quarterly goals without milestones or owners",
    "A 12-month plan exists with major milestones but limited accountability",
    "A sequenced roadmap with owners, success metrics, and quarterly reviews",
    "A fully phased GTM roadmap with milestone gates, owners, and board-level reporting"
  ]
},
{
  id: 1005, pillar: 1, type: "scale",
  title: "How tightly are product releases and roadmap decisions connected to GTM launch plans and timing?",
  options: [
    "Product ships independently: GTM learns about releases at launch",
    "Some coordination but GTM is rarely in the room during roadmap decisions",
    "Regular product-GTM syncs exist but downstream planning is often ad-hoc",
    "Product and GTM planning cycles are aligned with shared milestone reviews",
    "A unified product-GTM calendar drives sequencing, launch readiness, and sales activation"
  ]
},
{
  id: 1006, pillar: 1, type: "scale",
  title: "How are GTM goals set, tracked, and reviewed across the leadership team?",
  options: [
    "Goals are set annually and rarely revisited",
    "Goals exist but progress reviews are irregular or skipped",
    "Monthly reviews happen but data quality limits the quality of discussion",
    "Quarterly OKRs or KPIs tracked in a shared system with regular leadership reviews",
    "A formal GTM operating cadence: weekly metrics, monthly reviews, quarterly retrospectives with documented actions"
  ]
},
{
  id: 1007, pillar: 1, type: "scale",
  title: "How explicitly does your GTM strategy articulate why you win, why you lose, and what makes you defensible?",
  options: [
    "No formal articulation: differentiation is improvised in calls",
    "A high-level positioning statement exists but lacks operational grounding",
    "Win themes identified anecdotally from sales feedback",
    "A documented competitive advantage with supporting win/loss evidence",
    "A validated differentiation architecture: tested against buyer feedback, updated quarterly"
  ]
},
{
  id: 1008, pillar: 1, type: "scale",
  title: "How are GTM budget and headcount decisions prioritized against strategic impact?",
  options: [
    "Budget decisions are made based on last year's spend with minimal strategic review",
    "Some prioritization happens but it is largely political or relationship-based",
    "Investments are mapped to GTM priorities but ROI tracking is weak",
    "A formal prioritization framework links spend to pipeline and revenue outcomes",
    "GTM investments are ranked by modeled ROI, reviewed quarterly, and reallocated based on performance data"
  ]
},
{
  id: 1009, pillar: 1, type: "scale",
  title: "How clearly do you understand which GTM motions, inbound, outbound, PLG, channel, generate the most efficient revenue?",
  options: [
    "No motion-level visibility: pipeline sources are not tracked",
    "Rough estimates based on rep intuition or marketing assumptions",
    "Motion-level pipeline data exists but is not consistently used in planning",
    "CAC, win rate, and cycle time are tracked by motion and reviewed quarterly",
    "Each motion has its own P&L-style view: efficiency, payback, and capacity are modeled and updated"
  ]
},
{
  id: 1010, pillar: 1, type: "scale",
  title: "In the last 12 months, how many times did a market or competitive development cause you to materially change a GTM priority, budget allocation, or motion?",
  options: [
    "Our strategy has not materially changed in response to market signals in the last year",
    "We discussed changes but did not formally adjust priorities or budgets",
    "One significant adjustment was made and documented",
    "Two to three documented adjustments were made in response to market signals with explicit rationale",
    "We have a continuous market sensing process that produces at least one documented strategic adjustment per quarter"
  ]
},
{
  id: 1011, pillar: 1, type: "scale",
  title: "To what extent do you have segment- or persona-specific GTM playbooks that reps actively use?",
  options: [
    "No playbooks: each rep operates independently",
    "A generic sales playbook exists but is not segment-specific",
    "Playbooks exist for primary segments but adoption by reps is inconsistent",
    "Segment playbooks are used in onboarding, reviewed in deal reviews, and updated quarterly",
    "A modular playbook system by segment, persona, and deal stage: with usage tracked via CRM or enablement platform"
  ]
},
{
  id: 1012, pillar: 1, type: "scale",
  title: "When a new GTM hire joins, how long before they can make a decision that aligns with your GTM strategy, without asking leadership?",
  options: [
    "Most new hires never fully internalize the strategy: they rely on asking leadership indefinitely",
    "It takes six or more months before a new hire can make independent aligned decisions",
    "Three to six months: the strategy is documented but complex to absorb",
    "Four to eight weeks: onboarding includes structured strategy sessions with decision frameworks",
    "Two to four weeks: strategy is documented, taught in onboarding, and verified via a structured orientation assessment"
  ]
},
{
  id: 1013, pillar: 1, type: "scale",
  title: "How balanced is your GTM strategy between new logo acquisition and expansion of existing accounts?",
  options: [
    "Almost entirely focused on new logos: expansion is unstructured",
    "Expansion happens reactionally but no dedicated motion or targets exist",
    "Separate new logo and expansion goals exist but resources are heavily skewed to new logos",
    "Dedicated expansion capacity, targets, and playbooks alongside new logo motion",
    "A dual-engine model: new logo and expansion are resourced, measured, and reviewed independently"
  ]
},
{
  id: 1014, pillar: 1, type: "scale",
  title: "How systematically do you test new GTM approaches before committing resources to scale them?",
  options: [
    "New initiatives are launched at scale without pilots",
    "Occasional small tests happen but without defined success criteria",
    "Pilots are run but results are evaluated informally and inconsistently",
    "Defined pilot criteria, success thresholds, and scale decisions documented before launch",
    "A formal test-and-scale playbook: hypothesis, test cohort, measurement period, and go/no-go criteria for every initiative"
  ]
},
{
  id: 1015, pillar: 1, type: "scale",
  title: "How directly does your GTM strategy inform hiring plans and capacity modeling?",
  options: [
    "Hiring decisions are made reactively based on backfills or executive instinct",
    "GTM strategy and hiring plans are loosely connected at best",
    "Annual headcount plans reference the GTM strategy but are not updated mid-year",
    "Quarterly capacity reviews translate GTM targets into role-level hiring plans",
    "A rolling capacity model: pipeline targets, ramp assumptions, and hiring sequencing are updated each quarter"
  ]
},
{
  id: 1016, pillar: 1, type: "scale",
  title: "What percentage of your current pipeline originates from outside your primary ICP, and how does leadership respond to that number?",
  options: [
    "We do not track ICP vs non-ICP pipeline: all pipeline is treated equally",
    "Some out-of-ICP pipeline exists but it is not measured or governed",
    "We track it but out-of-ICP pipeline is accepted because we need the revenue",
    "Out-of-ICP pipeline is tracked, governed, and reps are not incentivized to pursue it",
    "ICP compliance is a quota metric: reps are explicitly penalized for pursuing out-of-ICP deals above a defined threshold"
  ]
},
{
  id: 1017, pillar: 1, type: "scale",
  title: "To what degree is your GTM strategy grounded in validated market evidence rather than leadership assumptions?",
  options: [
    "Strategy is built primarily on founder or executive opinion",
    "Some customer conversations inform the strategy but not systematically",
    "Annual VOC or market research informs the planning cycle",
    "Structured win/loss, customer interviews, and market data are reviewed before strategy updates",
    "GTM strategy is anchored in a continuous evidence loop: buyer interviews, deal data, and market signals reviewed quarterly"
  ]
},
{
  id: 1018, pillar: 1, type: "scale",
  title: "In the last four quarters, how many times did your actual revenue mix, by segment, motion, or geography, differ materially from what your GTM strategy predicted?",
  options: [
    "We do not track actual revenue mix against strategic predictions",
    "Significant differences exist but they are not formally reviewed",
    "Mix differences are discussed annually in planning but not tracked quarter by quarter",
    "Quarterly review of actual vs predicted revenue mix produces documented variance analysis",
    "Mix variance is a board-level metric: tracked monthly, explained quarterly, and drives strategy adjustment when deviation exceeds defined thresholds"
  ]
},
{
  id: 1019, pillar: 1, type: "scale",
  title: "How consistently does the GTM strategy drive day-to-day prioritization and resource decisions across teams?",
  options: [
    "Strategy rarely influences daily decisions: execution is driven by urgency",
    "Strategy is referenced occasionally but does not govern resource calls",
    "Most leaders reference the strategy in planning but not in operational decisions",
    "Strategy is used to adjudicate resource conflicts and prioritization calls",
    "GTM strategy is the primary decision lens: all major resource, hiring, and investment calls are tested against it"
  ]
},
{
  id: 1020, pillar: 1, type: "scale",
  title: "How consistently can your sales team charge full price without needing to discount to win deals?",
  options: [
    "Discounting is the norm: deals rarely close at list price",
    "Significant discounts are required in most competitive situations",
    "Discounts are common but capped with informal approval",
    "Discounting is governed by a formal policy with documented approval tiers",
    "List price is defended consistently: discounts are rare, time-bounded, and require VP-level sign-off"
  ]
},

/* ===========================================================
   PILLAR 2 — MARKET INTELLIGENCE (20 QUESTIONS)
   =========================================================== */

{
  id: 2001, pillar: 2, type: "scale",
  title: "How precisely defined is your Ideal Customer Profile, and how recently was it validated against closed-won data?",
  options: [
    "No ICP defined: we pursue any company that expresses interest",
    "A rough ICP exists based on founder intuition, not validated",
    "An ICP document exists but has not been validated against deal data in over a year",
    "ICP criteria validated against closed-won cohort data in the last 12 months",
    "ICP is a living scoring model: firmographic, technographic, and behavioral signals validated against revenue data quarterly"
  ]
},
{
  id: 2002, pillar: 2, type: "scale",
  title: "How is your target account list built, maintained, and prioritized for sales and marketing?",
  options: [
    "No formal account list: reps self-source based on personal judgment",
    "A static list built once, not regularly reviewed or updated",
    "A list exists but scoring and prioritization are inconsistent across reps",
    "A data-driven account list refreshed quarterly with defined scoring criteria",
    "A dynamic, tiered account list: updated monthly, scored by ICP fit and buying signals, with ownership assigned per account"
  ]
},
{
  id: 2003, pillar: 2, type: "scale",
  title: "How do you collect, synthesize, and act on intelligence about customer pain points and buying triggers?",
  options: [
    "No structured process: insight comes from informal rep conversations",
    "Customer feedback is collected ad-hoc but rarely synthesized",
    "VOC calls or surveys happen occasionally but outputs are not consistently used",
    "A structured VOC program with documented outputs reviewed in GTM planning",
    "A continuous customer intelligence loop: interviews, deal signals, and support data synthesized and reviewed monthly"
  ]
},
{
  id: 2004, pillar: 2, type: "scale",
  title: "How systematically is your competitive landscape documented, updated, and activated across sales and marketing?",
  options: [
    "No competitive documentation: reps handle competitive situations independently",
    "Informal awareness among senior sellers, nothing written or shared",
    "A competitive battlecard set exists but is rarely updated or referenced",
    "Competitive intelligence is updated quarterly and embedded in sales training",
    "A competitive intelligence program: dedicated owner, monthly updates, win/loss integration, and rep certification"
  ]
},
{
  id: 2005, pillar: 2, type: "scale",
  title: "How do you monitor market trends and competitor moves, and how quickly do insights reach decision-makers?",
  options: [
    "No monitoring: we learn about competitor moves when prospects mention them",
    "Occasional LinkedIn or news scanning by individuals, not shared systematically",
    "Competitive and market monitoring happens but is not structured or regular",
    "A defined monitoring cadence with outputs shared to GTM leads monthly",
    "A continuous market intelligence feed: sources tracked, signals triaged, and briefings delivered to leadership on a defined cadence"
  ]
},
{
  id: 2006, pillar: 2, type: "scale",
  title: "How well documented and validated are your buyers' actual decision criteria, not what they say, but what closes deals?",
  options: [
    "No documented understanding: reps assume they know what matters",
    "Anecdotal understanding from senior reps, not codified",
    "Decision criteria captured informally in CRM notes but not synthesized",
    "Decision criteria documented per segment, validated through win/loss interviews",
    "A validated decision criteria map: weighted by segment and deal size, updated with each quarterly win/loss review"
  ]
},
{
  id: 2007, pillar: 2, type: "scale",
  title: "How directly does customer and market research influence your product roadmap and GTM prioritization?",
  options: [
    "Research and roadmap are disconnected: product is built on internal assumptions",
    "Customer input is collected but rarely drives concrete roadmap or GTM decisions",
    "Occasional research inputs are referenced in planning but not systematically weighted",
    "Research outputs are a defined input to quarterly roadmap and GTM planning reviews",
    "A structured research-to-decision loop: findings are scored, prioritized, and tracked from input to outcome"
  ]
},
{
  id: 2008, pillar: 2, type: "scale",
  title: "How well do you understand the barriers preventing your target buyers from adopting your category or product?",
  options: [
    "No insight: adoption barriers are not studied",
    "Assumptions exist based on sales objections, not validated externally",
    "Some adoption barriers identified through lost deal analysis",
    "Adoption barriers documented and validated through buyer interviews and churn analysis",
    "A documented adoption barrier model: by segment, persona, and deal stage, updated with market and deal data quarterly"
  ]
},
{
  id: 2009, pillar: 2, type: "scale",
  title: "How clearly do you understand what causes customers to switch from competing tools to yours, or away from yours?",
  options: [
    "No structured insight into switching dynamics",
    "Informal understanding from a few rep anecdotes",
    "Switch triggers identified through occasional win/loss calls",
    "Switching triggers documented by segment, validated through structured win/loss interviews",
    "A switch trigger intelligence model: competitor displacement patterns tracked and reviewed in GTM planning quarterly"
  ]
},
{
  id: 2010, pillar: 2, type: "scale",
  title: "How well does your team understand macroeconomic and industry trends that are shaping your buyers' budgets and priorities?",
  options: [
    "No awareness: macro trends are not part of GTM planning",
    "General awareness but not connected to deal or segment strategy",
    "Macro context is discussed in leadership meetings but not operationalized",
    "Macro trends incorporated into annual GTM planning with explicit scenario assumptions",
    "Macro signals are tracked continuously and feed directly into segment prioritization and messaging adjustments"
  ]
},
{
  id: 2011, pillar: 2, type: "scale",
  title: "How well-defined and operationally consistent is your market segmentation model across sales, marketing, and product?",
  options: [
    "No segmentation: all accounts are treated the same",
    "Segmentation exists conceptually but is not reflected in process or tooling",
    "Segments are defined but applied inconsistently across teams",
    "Segmentation is codified in CRM, used in routing, and reviewed annually",
    "A unified segmentation architecture: consistent across CRM, campaign targeting, pricing, and capacity models, reviewed quarterly"
  ]
},
{
  id: 2012, pillar: 2, type: "scale",
  title: "How tightly does your ICP definition align with the segments that generate the highest ARR, lowest CAC, and best NRR?",
  options: [
    "No connection: ICP is not linked to financial performance data",
    "Rough assumptions about which segments perform best, not validated",
    "ICP and revenue data are compared annually but not operationalized",
    "ICP scoring is calibrated against ARR, CAC, and NRR data reviewed last quarter",
    "ICP is a revenue-weighted model: updated each quarter with closed-won cohort analysis and efficiency metrics"
  ]
},
{
  id: 2013, pillar: 2, type: "scale",
  title: "How clearly do you understand which personas influence, block, or accelerate deal decisions across deal sizes?",
  options: [
    "No persona mapping: reps target whoever responds",
    "Informal awareness of key personas, not documented",
    "Primary buyer persona documented but champion and blocker roles are unclear",
    "A multi-persona map exists by segment, validated through deal reviews",
    "A validated influence map: champion, economic buyer, and blocker roles documented per segment and deal size, updated quarterly"
  ]
},
{
  id: 2014, pillar: 2, type: "scale",
  title: "How systematically does your win/loss program produce insights that change how you sell or position?",
  options: [
    "No win/loss program: outcomes are not formally reviewed",
    "Reps log win/loss reasons in CRM but outputs are never analyzed",
    "Win/loss data is reviewed informally, occasionally surfaces anecdotes",
    "A structured win/loss program with quarterly synthesis and documented GTM actions",
    "Win/loss insights drive defined changes to playbooks, messaging, and competitive positioning each quarter"
  ]
},
{
  id: 2015, pillar: 2, type: "scale",
  title: "How clearly do you know which customer segments generate the highest lifetime value, and how does that inform your targeting?",
  options: [
    "No LTV data: all customers are treated as equally valuable",
    "Rough awareness based on ARR size, not validated against retention or expansion data",
    "LTV estimates exist but are not segmented or operationalized in targeting",
    "LTV by segment is calculated annually and informs ICP prioritization",
    "LTV is a live segmentation input: updated quarterly, driving account scoring, capacity allocation, and pricing decisions"
  ]
},
{
  id: 2016, pillar: 2, type: "scale",
  title: "How well do you understand the dynamics of your partner and channel ecosystem, who drives deals, who blocks them, and why?",
  options: [
    "No partner intelligence: ecosystem dynamics are unknown",
    "Informal relationships with a few partners, no systematic insight",
    "Partner pipeline is tracked but influence on deal outcomes is not analyzed",
    "A documented partner intelligence model reviewed in partner business reviews quarterly",
    "A quantified ecosystem map: partner-sourced vs partner-influenced pipeline, win rates, and cycle times tracked and reviewed monthly"
  ]
},
{
  id: 2017, pillar: 2, type: "scale",
  title: "How precisely do you understand price sensitivity and willingness to pay across your key customer segments?",
  options: [
    "No pricing intelligence: price is set by cost-plus or competitor benchmarking",
    "Anecdotal awareness from deals lost on price",
    "Price sensitivity assessed through occasional buyer interviews",
    "Willingness-to-pay validated through structured research and deal close rate analysis by price band",
    "A segment-level pricing elasticity model: validated through controlled tests, win/loss data, and buyer interviews, reviewed annually"
  ]
},
{
  id: 2018, pillar: 2, type: "scale",
  title: "How do you track emerging competitors and potential market disruptors before they appear in your deals?",
  options: [
    "Emerging competitors only surface when prospects mention them in calls",
    "Ad-hoc monitoring by sales leaders with no formal reporting",
    "A periodic competitive scan is conducted but not on a defined cadence",
    "A quarterly emerging competitor review is conducted and shared with GTM leadership",
    "A continuous threat monitoring program: new entrants tracked, briefings distributed, and playbooks updated proactively"
  ]
},
{
  id: 2019, pillar: 2, type: "scale",
  title: "How directly is your product roadmap linked to quantified evidence from the market, not just internal opinion?",
  options: [
    "Roadmap is driven by engineering capacity and leadership priorities, not market evidence",
    "Market inputs are collected informally but rarely drive roadmap sequencing",
    "Customer requests are logged and referenced in planning but not systematically weighted",
    "Roadmap decisions are linked to documented market signals with explicit priority rationale",
    "Each roadmap item has a documented market evidence case: customer frequency, deal impact, and retention signal, reviewed in planning"
  ]
},
{
  id: 2020, pillar: 2, type: "scale",
  title: "How quickly does your organization identify and act on shifting buyer needs compared to your primary competitors?",
  options: [
    "We typically discover buyer shifts after we have already lost deals",
    "We notice changes at the same pace as competitors, often too late",
    "We identify shifts within a quarter and begin adapting positioning",
    "We identify shifts within weeks through a structured market sensing process",
    "We detect buyer behavior shifts in real time and update messaging, content, and playbooks before competitors react"
  ]
},

/* ===========================================================
   PILLAR 3 — PRODUCT MARKETING (20 QUESTIONS)
   =========================================================== */

{
  id: 3001, pillar: 3, type: "scale",
  title: "When a prospect asks 'what do you do and why does it matter to me?', how consistently do your reps and website deliver the same crisp answer?",
  options: [
    "Every rep and page gives a different answer: no consistency",
    "A core message exists but reps frequently deviate or improvise",
    "Messaging is consistent in written materials but not in live conversations",
    "Core messaging is codified, trained, and used consistently in calls and collateral",
    "Messaging is systematically tested, updated quarterly, and certification-gated before reps use it in deals"
  ]
},
{
  id: 3002, pillar: 3, type: "scale",
  title: "How clearly defined and operationally embedded is your market positioning, the specific category you own and why you win there?",
  options: [
    "No formal positioning: the company describes itself differently depending on who you ask",
    "A positioning statement exists but is not consistently reflected in sales or marketing",
    "Positioning is documented and used in marketing but not enforced in sales conversations",
    "Positioning is documented, trained, and reflected in all major touchpoints",
    "Positioning is validated through buyer research, owned in a category narrative, and embedded in every GTM asset and motion"
  ]
},
{
  id: 3003, pillar: 3, type: "scale",
  title: "How do you know that your value proposition actually resonates with your ICP segments, and what evidence supports that?",
  options: [
    "We assume it resonates: no formal validation has been done",
    "Sales anecdotes suggest resonance but it has not been tested formally",
    "A few customer interviews confirmed resonance, but not across segments",
    "Value proposition validated through structured buyer interviews and win/loss analysis per segment",
    "Resonance is tested continuously: message lift tracked in deal conversion, interviews, and A/B testing by segment"
  ]
},
{
  id: 3004, pillar: 3, type: "scale",
  title: "In your last 10 closed-won deals, what percentage included a documented customer-stated reason that directly matched your core differentiation message?",
  options: [
    "We do not capture why customers say they bought us",
    "We have some win notes but they are not coded against our differentiation message",
    "Roughly a quarter of wins reference our core message: the rest cite other reasons",
    "Half or more of wins reference our core differentiation message in documented win notes",
    "Over 70% of closed-won deals include a customer-stated reason matching our documented core differentiation: tracked and reviewed quarterly"
  ]
},
{
  id: 3005, pillar: 3, type: "scale",
  title: "How systematically is messaging tailored to different buyer personas, not just by seniority, but by role-specific pain and language?",
  options: [
    "One generic message used for all personas",
    "Messaging is informally adjusted by experienced reps but not codified",
    "Persona-specific talking points exist but are not consistently used",
    "Documented persona messaging by primary buyer roles, embedded in playbooks and decks",
    "A persona messaging architecture: role-specific pain, language, and proof validated through interviews and embedded in all assets"
  ]
},
{
  id: 3006, pillar: 3, type: "scale",
  title: "How consistently do sales reps use the latest approved messaging materials without modifying or replacing them?",
  options: [
    "Reps use their own materials: standard decks are rarely opened",
    "Reps use approved materials occasionally but customise heavily and unpredictably",
    "Most reps use approved materials but with inconsistent modifications",
    "Approved materials are used consistently with minor, permitted customisation",
    "A controlled asset library: version-controlled, adoption tracked in CRM or enablement platform, deviations flagged in deal reviews"
  ]
},
{
  id: 3007, pillar: 3, type: "scale",
  title: "How do you know which specific messages, proof points, or framings consistently move deals forward?",
  options: [
    "No insight: we do not track which messages drive deal progression",
    "Anecdotal feedback from senior reps, not validated or systematized",
    "Win/loss notes contain message references but are not analyzed",
    "Message performance is reviewed in win/loss analysis and sales coaching sessions",
    "A message intelligence system: win/loss coded by message theme, conversion lift tracked by asset and talk track"
  ]
},
{
  id: 3008, pillar: 3, type: "scale",
  title: "How comprehensive and usable is your library of proof points, case studies, and ROI evidence, and how current is it?",
  options: [
    "No formal proof library: reps rely on memory or generic testimonials",
    "A few case studies exist but they are outdated or not segment-specific",
    "A proof library exists but is not organized by segment, persona, or use case",
    "A curated proof library organized by segment and use case, reviewed quarterly",
    "A strategic proof architecture: case studies, ROI calculators, and third-party validation indexed by segment, persona, and deal stage"
  ]
},
{
  id: 3009, pillar: 3, type: "scale",
  title: "How structured is your product launch process, do you have a tiered system that matches launch effort to business impact?",
  options: [
    "No process: launches are handled differently every time",
    "Some launch coordination happens but without defined tiers or checklists",
    "A basic launch checklist exists but is not consistently followed",
    "A tiered launch framework (Tier 1/2/3) with defined criteria, owners, and readiness gates",
    "A launch operating system: tier criteria, readiness scorecard, go/no-go reviews, and post-launch measurement embedded in every release"
  ]
},
{
  id: 3010, pillar: 3, type: "scale",
  title: "What percentage of your reps passed their last messaging certification, and how recently was that certification updated to reflect your current positioning?",
  options: [
    "No messaging certification exists",
    "A certification exists but fewer than half of reps have completed it",
    "Most reps completed the certification but it has not been updated in over 12 months",
    "Over 80% of reps certified on current messaging within the last six months",
    "Certification is gated: reps cannot carry quota without passing, retested at each major positioning update, with pass rates tracked per manager"
  ]
},
{
  id: 3011, pillar: 3, type: "scale",
  title: "How clearly do you understand which product features resonate most with buyers at each stage of the deal?",
  options: [
    "No systematic understanding: features are demoed based on rep preference",
    "Informal awareness among experienced reps, not shared or documented",
    "Feature resonance tracked anecdotally through deal feedback",
    "Feature resonance by segment and deal stage documented through win/loss and demo analysis",
    "A feature-to-deal-stage map: validated through structured buyer interviews and deal progression data, updated quarterly"
  ]
},
{
  id: 3012, pillar: 3, type: "scale",
  title: "How much influence does Product Marketing have on product roadmap prioritization, and how is that influence exercised?",
  options: [
    "PMM has no seat in roadmap discussions",
    "PMM provides occasional input but it rarely changes prioritization",
    "PMM presents market evidence in planning reviews with inconsistent impact",
    "PMM owns a structured market input process with documented influence on roadmap decisions",
    "PMM is a formal co-owner of roadmap prioritization: market evidence is a required input to every major feature decision"
  ]
},
{
  id: 3013, pillar: 3, type: "scale",
  title: "How often does a deal reach late stage, proposal or procurement, and then die without a documented explanation that your team acted on?",
  options: [
    "Late-stage deal death is common and causes are never systematically analyzed",
    "We discuss late-stage losses informally but do not track patterns",
    "Late-stage loss reasons are logged but analysis happens annually at most",
    "Late-stage losses trigger a structured review within two weeks with documented root cause",
    "Late-stage loss rate is a KPI: every loss above a deal size threshold triggers a documented review, root causes are coded, and patterns drive monthly PMM and sales adjustments"
  ]
},
{
  id: 3014, pillar: 3, type: "scale",
  title: "How well-resourced and executed are your product launch motions, from internal readiness to market activation?",
  options: [
    "Launches happen without a defined process: GTM is not prepared until after release",
    "Some coordination exists but GTM readiness is inconsistent",
    "Launches follow a basic process but field activation is often incomplete",
    "A defined launch process with internal enablement, asset delivery, and market activation checkpoints",
    "A fully governed launch motion: readiness scorecard, enablement certification, and launch-to-pipeline measurement for every launch"
  ]
},
{
  id: 3015, pillar: 3, type: "scale",
  title: "What is your website's conversion rate from qualified visitor to a booked meeting or trial, and how does that compare to the prior quarter?",
  options: [
    "We do not track visitor-to-meeting conversion on the website",
    "Conversion is tracked but we do not know what a good benchmark looks like",
    "We track it but conversion has been flat or declining without a documented improvement plan",
    "Visitor-to-meeting conversion is tracked monthly and drives quarterly website optimization",
    "Website conversion is a managed KPI: tracked weekly, A/B tested continuously, and reviewed against category benchmarks quarterly with documented improvement targets"
  ]
},
{
  id: 3016, pillar: 3, type: "scale",
  title: "How systematically does your PMM function track, document, and distribute competitive intelligence to sales?",
  options: [
    "No competitive PMM function: competitive responses are improvised in deals",
    "Battlecards exist but are outdated and not consistently used",
    "Competitive materials are updated occasionally when something significant changes",
    "A competitive PMM program with quarterly battlecard updates and rep training",
    "A live competitive intelligence system: owned, updated monthly, embedded in onboarding and deal reviews, with rep adoption tracked"
  ]
},
{
  id: 3017, pillar: 3, type: "scale",
  title: "When a deal is lost at final stage, after a proposal is submitted, how often is the stated reason something your PMM team could have addressed?",
  options: [
    "We do not analyze final-stage losses at a messaging or positioning level",
    "Occasionally we discuss late-stage loss reasons informally",
    "We review late-stage losses quarterly but PMM is not part of the review",
    "PMM participates in late-stage loss reviews and owns a documented action when messaging contributed",
    "PMM runs a final-stage loss audit quarterly: every loss coded by message failure type, proof gap, or competitive positioning weakness, with documented remediation"
  ]
},
{
  id: 3018, pillar: 3, type: "scale",
  title: "How compelling and consistently used are your demo and presentation materials in live buyer interactions?",
  options: [
    "No standard demo: each rep builds their own",
    "A standard demo exists but reps deviate significantly in practice",
    "A reference demo exists and is used as a starting point but consistency is low",
    "A standardized demo framework with role-specific variants, trained and certified before reps go live",
    "A demo operating system: standard structure, segment variants, usage tracked, and updated based on win/loss data each quarter"
  ]
},
{
  id: 3019, pillar: 3, type: "scale",
  title: "How much does Product Marketing measurably contribute to pipeline, win rate, and deal velocity outcomes?",
  options: [
    "PMM impact on revenue is not measured",
    "PMM contribution is discussed qualitatively but not linked to deal metrics",
    "Some asset usage and campaign attribution data exists but is not systematically reviewed",
    "PMM reports on pipeline influence, win rate by asset, and message performance quarterly",
    "PMM owns a revenue impact dashboard: win rate by segment, asset utilization, message lift, and launch-to-pipeline correlation tracked monthly"
  ]
},
{
  id: 3020, pillar: 3, type: "scale",
  title: "After a first call with your sales team, how reliably do prospects understand what makes you different from alternatives they are evaluating?",
  options: [
    "Prospects regularly leave the first call confused about differentiation",
    "Differentiation is communicated inconsistently: depends heavily on the rep",
    "Most reps communicate differentiation but the messaging varies",
    "Differentiation is clearly communicated in most first calls using a consistent framework",
    "Differentiation is validated through post-call surveys: buyer-stated understanding tracked and used to improve messaging"
  ]
},

/* ===========================================================
   PILLAR 4 — DEMAND GENERATION (20 QUESTIONS)
   =========================================================== */

{
  id: 4001, pillar: 4, type: "scale",
  title: "How explicitly defined is your demand generation strategy, channels, targets, budgets, and success metrics, and how recently was it reviewed?",
  options: [
    "No documented strategy: DG activities are chosen based on availability or habit",
    "A rough channel plan exists but lacks budget allocation or performance targets",
    "A strategy document exists but has not been formally reviewed in over six months",
    "A documented DG strategy reviewed quarterly with channel-level performance targets",
    "A fully operationalized DG strategy: channel mix, budget, pipeline targets, and review cadence all documented and governing execution"
  ]
},
{
  id: 4002, pillar: 4, type: "scale",
  title: "What share of your qualified pipeline originates from inbound channels, and how consistently does that hold quarter over quarter?",
  options: [
    "Inbound contributes no meaningful pipeline: it is an aspirational channel",
    "Inbound generates some leads but quality is low and volume is unpredictable",
    "Inbound generates qualified leads but volume fluctuates significantly by quarter",
    "Inbound delivers consistent qualified pipeline against defined targets each quarter",
    "Inbound is a reliable, measured pipeline engine: contribution tracked by channel, segment, and conversion stage monthly"
  ]
},
{
  id: 4003, pillar: 4, type: "scale",
  title: "How predictable and repeatable is your outbound motion in generating qualified pipeline, and how is that measured?",
  options: [
    "No structured outbound: reps prospect independently with no shared approach",
    "Outbound exists but results are highly variable and not systematically measured",
    "Outbound generates pipeline but sequencing, messaging, and cadence are inconsistent",
    "A standardized outbound motion with defined sequences, target accounts, and pipeline targets reviewed weekly",
    "A fully instrumented outbound engine: activity, response, and pipeline metrics tracked daily, with A/B testing on sequences quarterly"
  ]
},
{
  id: 4004, pillar: 4, type: "scale",
  title: "How efficiently does your paid media spend convert to qualified pipeline, and how do you track that efficiency?",
  options: [
    "Paid media is not used or spend is tracked only at cost level",
    "Paid media runs but ROI and pipeline contribution are not measured",
    "Some pipeline attribution exists but cost-per-opportunity tracking is inconsistent",
    "Cost-per-opportunity tracked by channel with quarterly efficiency reviews",
    "Paid media is managed as a pipeline investment: CPO, CAC contribution, and payback tracked monthly per channel"
  ]
},
{
  id: 4005, pillar: 4, type: "scale",
  title: "How do you measure website conversion performance, and what is your conversion rate from visitor to qualified lead?",
  options: [
    "Website conversion is not tracked: no funnel visibility",
    "Traffic and form fills are tracked but conversion quality is not measured",
    "Top-of-funnel conversion tracked but mid-funnel drop-off is not analyzed",
    "Conversion rates tracked by page and source, reviewed monthly with documented improvement actions",
    "A conversion optimization program: funnel mapped end-to-end, A/B tests running, and conversion rate reviewed against benchmarks quarterly"
  ]
},
{
  id: 4006, pillar: 4, type: "scale",
  title: "How systematically are you executing Account-Based Marketing against your highest-priority accounts, and how is impact measured?",
  options: [
    "No ABM motion: all accounts receive the same outreach",
    "ABM is discussed but no dedicated account selection, budget, or measurement exists",
    "A pilot ABM motion exists for a subset of accounts but without defined success metrics",
    "A documented ABM program with account tiers, channel activation, and quarterly pipeline impact reviews",
    "A fully instrumented ABM engine: account coverage, engagement, and pipeline contribution tracked per account tier monthly"
  ]
},
{
  id: 4007, pillar: 4, type: "scale",
  title: "How structured and performance-tracked is your lead nurturing motion for prospects not yet ready to buy?",
  options: [
    "No nurturing: prospects not immediately ready to buy are abandoned",
    "An email sequence exists but it is generic, untargeted, and not reviewed",
    "Nurture tracks exist by segment but engagement rates and conversion are not tracked",
    "Nurture programs are segmented, automated, and reviewed for conversion impact quarterly",
    "A fully instrumented nurture engine: segmented by persona and stage, conversion tracked, and updated based on performance data"
  ]
},
{
  id: 4008, pillar: 4, type: "scale",
  title: "How consistently does content generate qualified demand, and how do you measure content contribution to pipeline?",
  options: [
    "Content is produced but its contribution to pipeline is not measured",
    "Content generates traffic but pipeline attribution is not tracked",
    "Some content pieces are attributed to pipeline but measurement is inconsistent",
    "Content pipeline contribution is tracked quarterly by asset type and topic",
    "A content demand model: each asset tracked for traffic, MQL conversion, and pipeline influence, reviewed monthly"
  ]
},
{
  id: 4009, pillar: 4, type: "scale",
  title: "How clearly can you attribute pipeline and revenue back to specific DG channels, campaigns, and spend, and how often is that data reviewed?",
  options: [
    "No attribution: all pipeline source is unknown or marked 'direct'",
    "First-touch attribution exists but multi-touch and spend ROI are not tracked",
    "Pipeline is attributed at channel level but campaign-level ROI is not consistently tracked",
    "Multi-touch attribution in place, reviewed monthly by channel and campaign",
    "A full attribution model: channel, campaign, and spend tracked to closed-won revenue with quarterly ROI reporting"
  ]
},
{
  id: 4010, pillar: 4, type: "scale",
  title: "Is Marketing held accountable to a revenue or pipeline quota, and how is that target set and reviewed?",
  options: [
    "Marketing has no revenue or pipeline quota: success is measured in leads or impressions",
    "An informal pipeline expectation exists but is not formally tracked or governed",
    "Marketing has a pipeline goal but it is secondary and rarely drives budget or headcount decisions",
    "Marketing has a formal pipeline quota reviewed monthly with the CRO or VP Sales",
    "Marketing co-owns a revenue target: pipeline contribution, win rate on marketing-sourced deals, and CPO reviewed in weekly revenue meetings"
  ]
},
{
  id: 4011, pillar: 4, type: "scale",
  title: "How clearly defined and consistently enforced are your lead follow-up SLAs between marketing and sales?",
  options: [
    "No SLAs: lead follow-up depends on individual rep behaviour",
    "An informal expectation exists but is not tracked or enforced",
    "SLAs are documented but compliance is not monitored",
    "SLAs are defined, tracked in CRM, and reviewed weekly with sales leadership",
    "SLAs are contractual between marketing and sales: compliance tracked daily, breaches escalated, and response time reviewed in weekly pipeline meetings"
  ]
},
{
  id: 4012, pillar: 4, type: "scale",
  title: "How precisely is your demand generation personalized by segment, persona, and buying stage, beyond basic list segmentation?",
  options: [
    "One campaign sent to all prospects: no segmentation applied",
    "Basic list segmentation by company size or industry, but messaging is generic",
    "Segment-level campaigns exist but persona and stage targeting are inconsistent",
    "Campaigns are segmented by ICP tier, persona, and funnel stage with personalized messaging",
    "Dynamic, multi-variable personalization: ICP fit, intent signals, persona, and stage drive content, timing, and channel selection automatically"
  ]
},
{
  id: 4013, pillar: 4, type: "scale",
  title: "How systematically are your demand generation campaigns optimized using data, and what is the cadence of that review?",
  options: [
    "Campaigns run for a fixed period without performance review or adjustment",
    "Performance is reviewed occasionally but changes are made based on gut feel",
    "Monthly performance reviews happen but optimization decisions are inconsistent",
    "A weekly DG performance review drives documented campaign adjustments",
    "A continuous optimization loop: channel performance, CPO, and conversion tracked weekly, with A/B tests and budget reallocation on a defined cadence"
  ]
},
{
  id: 4014, pillar: 4, type: "scale",
  title: "How predictably does your demand generation engine deliver the pipeline coverage needed to hit your revenue targets?",
  options: [
    "Pipeline coverage varies wildly: some quarters are strong, others are crises",
    "Pipeline is generally adequate but coverage ratio fluctuates without clear cause",
    "Pipeline coverage is tracked but predictability is limited to 30-60 days",
    "Pipeline coverage is modeled 90 days out and reviewed in weekly pipeline meetings",
    "A fully modeled pipeline engine: coverage by segment, motion, and rep capacity tracked 90-180 days out, reviewed weekly"
  ]
},
{
  id: 4015, pillar: 4, type: "scale",
  title: "How systematically does your team design, run, and document DG experiments, and how quickly do results drive decisions?",
  options: [
    "No experiments: DG runs the same playbook repeatedly",
    "Occasional changes are made but without defined hypotheses or success criteria",
    "Some tests are run but documentation and decision processes are informal",
    "A quarterly experiment calendar with defined hypotheses, measurement periods, and go/no-go criteria",
    "A continuous testing culture: weekly experiments tracked in a shared log, results reviewed monthly, and winning approaches scaled systematically"
  ]
},
{
  id: 4016, pillar: 4, type: "scale",
  title: "How structured is the feedback loop between SDRs and Marketing on lead quality, and how often does that feedback drive changes?",
  options: [
    "No formal feedback loop: SDRs and Marketing operate independently",
    "SDRs complain about lead quality informally but it does not change campaigns",
    "Occasional feedback sessions happen but without structured format or action tracking",
    "A weekly structured feedback process between SDR team and Marketing with documented actions",
    "A closed-loop feedback system: SDR-to-marketing lead quality scores reviewed weekly, driving campaign and ICP refinements on a defined cadence"
  ]
},
{
  id: 4017, pillar: 4, type: "scale",
  title: "How clearly defined is your event and webinar strategy, and how do you measure pipeline and revenue contribution from events?",
  options: [
    "Events are chosen opportunistically with no defined strategy or measurement",
    "Events are planned but attendance is the primary success metric",
    "A basic event calendar exists with post-event pipeline tracking for major events",
    "An event strategy with defined pipeline targets, pre/post-event activation, and ROI reviewed quarterly",
    "A fully instrumented event engine: pipeline sourced and influenced tracked per event, with pre/post playbooks and ROI benchmarks reviewed quarterly"
  ]
},
{
  id: 4018, pillar: 4, type: "scale",
  title: "How formally is Demand Generation included in revenue planning, and does Marketing co-own the pipeline number?",
  options: [
    "Marketing is not included in revenue planning discussions",
    "Marketing is informed of revenue targets but does not contribute to pipeline modeling",
    "Marketing provides input to planning but does not co-own pipeline targets",
    "Marketing co-owns a pipeline target, included in the revenue planning process",
    "Marketing is a co-owner of the revenue plan: pipeline model, budget allocation, and ramp assumptions reviewed jointly with Sales and Finance"
  ]
},
{
  id: 4019, pillar: 4, type: "scale",
  title: "How well does your demand generation engine scale, can you double pipeline without doubling budget?",
  options: [
    "Scaling pipeline requires proportional budget and headcount increases",
    "Some economies of scale exist but efficiency degrades as volume increases",
    "DG scales moderately: incremental efficiency gains are achieved with documented initiatives",
    "DG scales with sub-linear budget increases: efficiency improvements tracked each quarter",
    "A compounding DG engine: organic, earned, and paid channels reinforce each other, and efficiency improves as scale increases"
  ]
},
{
  id: 4020, pillar: 4, type: "scale",
  title: "How is your Customer Acquisition Cost trending as you scale, and how do you measure and manage that trend?",
  options: [
    "CAC is not tracked: acquisition cost is unknown",
    "CAC is tracked annually but not managed as a performance lever",
    "CAC is tracked quarterly but is increasing without a documented improvement plan",
    "CAC is tracked monthly and reviewed with documented efficiency initiatives",
    "CAC trends are modeled by channel and motion, reviewed monthly, with a documented target trajectory and reallocation trigger"
  ]
},

/* ===========================================================
   PILLAR 5 — SALES EXECUTION (20 QUESTIONS)
   =========================================================== */

{
  id: 5001, pillar: 5, type: "scale",
  title: "How clearly defined and consistently followed is your sales process, from first contact to signed contract?",
  options: [
    "No documented process: each rep manages deals independently",
    "An informal process exists in the minds of senior reps but is not written or trained",
    "A process is documented but adoption across the team is inconsistent",
    "A documented stage-by-stage process with exit criteria, trained, and reflected in CRM",
    "A governed sales process: stages, exit criteria, and required CRM fields enforced, with deviation flagged in pipeline reviews"
  ]
},
{
  id: 5002, pillar: 5, type: "scale",
  title: "How rigorously are deals qualified before entering the pipeline, and what happens to unqualified deals?",
  options: [
    "No formal qualification: anything that expresses interest enters the pipeline",
    "Qualification is informal and inconsistent across reps",
    "A qualification framework exists but is applied inconsistently",
    "A defined qualification framework applied consistently, with unqualified deals actively removed from pipeline",
    "A zero-tolerance qualification culture: deals without documented qualification criteria are not created in CRM, reviewed in pipeline meetings"
  ]
},
{
  id: 5003, pillar: 5, type: "scale",
  title: "How visible and disciplined is your pipeline management, and how consistently do deals progress through defined stages?",
  options: [
    "Pipeline is a wish list: stage progression is not governed",
    "Pipeline is reviewed informally and stage hygiene is left to individual reps",
    "Pipeline reviews happen but stalled and inflated deals are not actively managed",
    "Weekly pipeline reviews with documented actions on stalled deals and inflated stages",
    "A governed pipeline discipline: stage-age triggers, required exit criteria, and pipeline quality scored weekly with forced action on overdue deals"
  ]
},
{
  id: 5004, pillar: 5, type: "scale",
  title: "What percentage of deals committed at the start of the month actually close by month-end, and how stable is that ratio?",
  options: [
    "Less than 50%: commit accuracy is not tracked or managed",
    "50-70%: commits are frequently missed and not systematically reviewed",
    "70-85%: commits close at a moderate rate with some forecast discipline",
    "85-95%: commits are consistently met with a formal commit review process",
    "Over 95%: commit accuracy is a governed metric, reviewed weekly, with a documented escalation path for misses"
  ]
},
{
  id: 5005, pillar: 5, type: "scale",
  title: "How consistently can all reps articulate product capabilities, limitations, and competitive differentiation without relying on technical support?",
  options: [
    "Product knowledge varies widely: most reps cannot run an unsupported demo",
    "A few experienced reps have deep product knowledge; the rest are unreliable",
    "Most reps have adequate product knowledge but gaps surface in complex deals",
    "Product knowledge is certified before reps go live, with refreshers on each major release",
    "A continuous product mastery program: certification-gated, tracked per rep, and updated at each product release"
  ]
},
{
  id: 5006, pillar: 5, type: "scale",
  title: "How consistently do your reps deliver compelling, buyer-centric demos, and how is that quality assessed?",
  options: [
    "Demos vary widely: no standard framework or quality control exists",
    "A reference demo exists but rep delivery quality is not assessed",
    "Most reps follow the reference demo but differentiation and storytelling vary",
    "Demo delivery is certified, assessed in coaching sessions, and benchmarked against win/loss data",
    "A demo excellence program: standardized framework, recorded delivery reviewed in coaching, and demo quality correlated with deal outcomes monthly"
  ]
},
{
  id: 5007, pillar: 5, type: "scale",
  title: "How consistently is a structured deal qualification methodology, MEDDIC, MEDDPICC, or equivalent, applied across all reps and deal sizes?",
  options: [
    "No methodology used: reps qualify using personal judgment",
    "A methodology is referenced in training but not enforced in deals",
    "Methodology is used by some reps but inconsistently: no CRM enforcement",
    "Methodology fields are required in CRM for all deals above a defined threshold",
    "Methodology is embedded in CRM stage gates, reviewed in deal reviews, and deviation is flagged and coached"
  ]
},
{
  id: 5008, pillar: 5, type: "scale",
  title: "How consistently and structurally does sales leadership coach reps, and how is coaching quality measured?",
  options: [
    "No formal coaching: managers provide feedback reactively when deals are lost",
    "Coaching happens informally in 1:1s without a defined framework",
    "Structured coaching sessions occur but cadence and quality are inconsistent across managers",
    "A defined coaching framework applied consistently across all managers, with documented session outputs",
    "A coaching operating system: weekly cadence, call review, skill scorecards, and coaching impact tracked against rep performance metrics"
  ]
},
{
  id: 5009, pillar: 5, type: "scale",
  title: "How systematically do you capture and use win/loss intelligence to improve how your reps sell?",
  options: [
    "Win/loss reasons are not documented: outcomes are celebrated or forgotten",
    "Reps log a reason in CRM but it is rarely analyzed or discussed",
    "Win/loss data is reviewed informally in team meetings without structured outputs",
    "A win/loss review process produces documented themes shared with sales and PMM quarterly",
    "Win/loss intelligence drives direct updates to playbooks, messaging, and coaching content each quarter"
  ]
},
{
  id: 5010, pillar: 5, type: "scale",
  title: "How prepared are your reps to handle the most common objections, and how do you know the handling is working?",
  options: [
    "No objection handling framework: reps improvise responses",
    "Common objections are covered in onboarding but not practiced or updated",
    "An objection handling guide exists but adoption and effectiveness are not measured",
    "Objection responses are trained, role-played, and reviewed in coaching sessions",
    "A live objection library: responses tested in calls, updated from win/loss data, and effectiveness tracked against conversion rates"
  ]
},
{
  id: 5011, pillar: 5, type: "scale",
  title: "How capable and disciplined is your team in managing enterprise or multi-stakeholder deals, and how is that capability built?",
  options: [
    "No enterprise sales capability: complex deals are handled without a framework",
    "A few senior reps manage enterprise deals but there is no transferable process",
    "An enterprise methodology is referenced in training but not embedded in deal execution",
    "Enterprise deal management is trained, enforced in deal reviews, and supported by specialist resources",
    "A governed enterprise selling system: stakeholder mapping, executive engagement, and procurement navigation embedded in stage gates"
  ]
},
{
  id: 5012, pillar: 5, type: "scale",
  title: "How well does your sales compensation design incentivize the behaviors that drive long-term revenue, not just short-term closes?",
  options: [
    "Comp is purely volume-based: behaviors like multithreading or ICP qualification are not rewarded",
    "Some qualitative elements exist but comp is primarily quota-based without behavioral guardrails",
    "Comp includes some retention or NRR components but discounting and deal quality are not penalized",
    "Comp design includes deal quality guardrails: discount limits, ICP requirements, and NRR components",
    "A multi-factor comp model: new ARR, NRR, discount discipline, and ICP compliance all weighted, reviewed annually with Finance and HR"
  ]
},
{
  id: 5013, pillar: 5, type: "scale",
  title: "How rationally and equitably are sales territories designed, and how often are they reviewed for coverage and capacity?",
  options: [
    "No formal territory design: reps own whatever accounts they sourced",
    "Territories exist but are not based on data or reviewed for balance",
    "Territories are designed annually but whitespace and coverage gaps persist",
    "Territories are data-driven, balanced by account potential, and reviewed each planning cycle",
    "A continuous territory optimization model: account potential, rep capacity, and coverage reviewed quarterly with documented rebalancing"
  ]
},
{
  id: 5014, pillar: 5, type: "scale",
  title: "How consistently do your reps defend price, and what governance exists to prevent unnecessary discounting?",
  options: [
    "Discounting is uncontrolled: reps offer discounts freely to accelerate closes",
    "Informal norms exist but discounting is not tracked or governed",
    "A discount policy exists but exceptions are common and poorly tracked",
    "A tiered approval framework governs discounts above defined thresholds with documented rationale",
    "Discount discipline is enforced in CRM: all discounts tracked, approval tiers active, and discount impact on margin reviewed monthly"
  ]
},
{
  id: 5015, pillar: 5, type: "scale",
  title: "How effectively do your reps access and use sales enablement materials during live deal execution?",
  options: [
    "Enablement materials exist but are not used in active deals",
    "Reps are aware of materials but access is inconsistent and usage is not tracked",
    "Materials are available in a shared drive but adoption in deals is not measured",
    "Enablement materials are organized by deal stage, tracked for usage, and reviewed for effectiveness quarterly",
    "A deal-stage enablement system: materials indexed by stage, persona, and objection, with usage and deal outcome correlation tracked monthly"
  ]
},
{
  id: 5016, pillar: 5, type: "scale",
  title: "How strictly is CRM data hygiene enforced, and what are the consequences of incomplete deal records?",
  options: [
    "CRM data is voluntary: most deal records are incomplete or inaccurate",
    "Data hygiene is expected but not enforced: no consequence for missing fields",
    "Managers check CRM quality informally in 1:1s without systematic enforcement",
    "Required CRM fields are enforced at stage gates with manager review",
    "A zero-tolerance CRM hygiene policy: incomplete records block stage progression, commissions require data completeness, reviewed weekly"
  ]
},
{
  id: 5017, pillar: 5, type: "scale",
  title: "How granularly is individual rep performance tracked, and how quickly are underperformance patterns identified?",
  options: [
    "Rep performance is reviewed quarterly at quota attainment level only",
    "Monthly quota tracking exists but leading indicators are not monitored",
    "Activity, pipeline, and conversion metrics are tracked but reviewed inconsistently",
    "Weekly rep performance dashboards covering activity, pipeline, and conversion reviewed in 1:1s",
    "A real-time rep performance intelligence system: leading and lagging indicators tracked daily, with automated alerts for deviation patterns"
  ]
},
{
  id: 5018, pillar: 5, type: "scale",
  title: "How clearly do you track and manage the four components of sales velocity, deals, win rate, deal size, and cycle time, across segments?",
  options: [
    "Sales velocity is not tracked: we focus only on total revenue",
    "One or two velocity components are tracked but not reviewed together",
    "A basic velocity view exists but is not reviewed regularly or segmented",
    "All four velocity components tracked by segment, reviewed monthly with documented improvement actions",
    "A sales velocity dashboard reviewed weekly: components tracked by segment, rep, and motion, with lever-specific improvement initiatives"
  ]
},
{
  id: 5019, pillar: 5, type: "scale",
  title: "How proactively does your organization identify and remove friction points in the sales process before they affect revenue?",
  options: [
    "Friction is only identified after deals are lost",
    "Reps surface friction informally but it is rarely systematically addressed",
    "A quarterly process review identifies friction but implementation is slow",
    "A structured friction audit conducted quarterly with documented actions and owners",
    "A continuous friction removal motion: weekly deal reviews surface blockers, owners assigned, and resolution tracked to outcome"
  ]
},
{
  id: 5020, pillar: 5, type: "scale",
  title: "How consistent is win rate across your rep population, and how dependent are results on a small number of top performers?",
  options: [
    "Win rates vary dramatically: a few reps carry the team",
    "Top performers significantly outperform the rest with no clear reason",
    "Win rates vary but coaching is beginning to close the gap",
    "Win rates are tracked by rep, variance is analyzed, and high performers' behaviors are systematically codified",
    "A rep performance distribution actively managed: winning behaviors extracted, trained, and tracked to close the performance gap each quarter"
  ]
},

/* ===========================================================
   PILLAR 6 — CUSTOMER SUCCESS & EXPANSION (20 QUESTIONS)
   =========================================================== */

{
  id: 6001, pillar: 6, type: "scale",
  title: "How structured and time-bound is your customer onboarding motion, and how do you track whether customers reach first value on schedule?",
  options: [
    "No structured onboarding: each customer is handled differently",
    "An onboarding checklist exists but time-to-value is not tracked",
    "Onboarding follows a basic process but milestone achievement is inconsistent",
    "A defined onboarding playbook with milestone tracking and time-to-value reviewed per cohort",
    "A fully instrumented onboarding engine: milestone completion, time-to-value, and early adoption tracked per customer, reviewed weekly"
  ]
},
{
  id: 6002, pillar: 6, type: "scale",
  title: "How proactively do you monitor customer health, and how quickly does a health deterioration trigger an intervention?",
  options: [
    "No health monitoring: churn is discovered when customers cancel",
    "CS managers track health subjectively with no shared framework",
    "A health score model exists but is reviewed infrequently or inconsistently",
    "A health score model reviewed weekly with documented intervention playbooks for at-risk accounts",
    "A predictive health system: leading indicators tracked in real time, automated alerts trigger playbooks, and intervention outcomes measured"
  ]
},
{
  id: 6003, pillar: 6, type: "scale",
  title: "How clearly and quantitatively do you understand what drives retention versus churn in your customer base?",
  options: [
    "No retention analysis: churn is attributed to product or pricing without data",
    "Churn reasons are logged in CRM but not analyzed for patterns",
    "An annual churn analysis identifies broad themes but not root causes",
    "Retention drivers are quantified through cohort analysis and exit interviews reviewed quarterly",
    "A retention intelligence model: churn predictors scored by segment, validated quarterly, driving proactive intervention playbooks"
  ]
},
{
  id: 6004, pillar: 6, type: "scale",
  title: "How consistently and substantively do you run customer business reviews, and how are outcomes tracked?",
  options: [
    "No QBRs: customers only hear from us when there is a problem",
    "QBRs happen informally and inconsistently depending on the CS rep",
    "A QBR template exists but scheduling and output quality are inconsistent",
    "Quarterly business reviews are scheduled, structured, and outputs documented per account",
    "A fully governed QBR program: preparation templates, executive involvement guidelines, and follow-through tracked against renewal and expansion outcomes"
  ]
},
{
  id: 6005, pillar: 6, type: "scale",
  title: "How effectively do CS, Product, and Sales share customer intelligence, and how does that sharing drive decisions?",
  options: [
    "Teams operate in silos: customer intelligence is not systematically shared",
    "Some informal sharing happens but it does not drive cross-functional decisions",
    "A monthly sync exists but the quality and consistency of information sharing is low",
    "A structured customer intelligence forum with documented product, sales, and CS actions",
    "A live customer intelligence system: product signals, expansion opportunities, and risk indicators shared across CS, Product, and Sales in real time"
  ]
},
{
  id: 6006, pillar: 6, type: "scale",
  title: "How proactively does your CS team identify and action expansion opportunities, before Sales initiates the conversation?",
  options: [
    "Expansion is entirely Sales-driven: CS does not have an expansion motion",
    "CS occasionally surfaces expansion opportunities but without a defined process",
    "CS identifies expansion opportunities in health reviews but handoff to Sales is inconsistent",
    "A documented expansion trigger framework: CS-owned until handoff, with pipeline tracked per account",
    "CS runs a proactive expansion motion: usage signals, milestone triggers, and segment propensity models drive pipeline independently of Sales"
  ]
},
{
  id: 6007, pillar: 6, type: "scale",
  title: "How predictable and process-driven is your renewal motion, and how far in advance do you begin managing each renewal?",
  options: [
    "Renewals are managed reactively: outreach begins only as the date approaches",
    "A renewal reminder process exists but timing and ownership are inconsistent",
    "Renewals are tracked 90 days out but the motion is not structured",
    "A renewal playbook with 120-day engagement triggers, owner accountability, and forecast tracking",
    "A fully governed renewal engine: risk-tiered, 180-day engagement triggers, forecast updated weekly, and renewal outcomes reviewed in board reporting"
  ]
},
{
  id: 6008, pillar: 6, type: "scale",
  title: "How precisely do you measure product adoption, and how do adoption signals feed into health scoring and CS interventions?",
  options: [
    "Product adoption is not measured: CS relies on anecdotal customer feedback",
    "Some usage data is available but it is not systematically connected to CS actions",
    "Usage metrics are tracked but inconsistently used in health scoring",
    "Product adoption is tracked per account, integrated into health scores, and reviewed weekly by CS",
    "A usage-intelligence system: feature adoption, engagement depth, and time-to-activation tracked per account and driving automated CS interventions"
  ]
},
{
  id: 6009, pillar: 6, type: "scale",
  title: "How systematically do you educate customers on product capabilities, and does your education program measurably improve adoption or renewal rates?",
  options: [
    "No customer education program: users learn through trial and error",
    "Basic documentation exists but is not actively promoted or tracked",
    "An education program exists but completion rates and impact on adoption are not measured",
    "A structured customer education program with completion tracking and adoption correlation",
    "An education impact model: certification completion, feature adoption lift, and renewal rate by education cohort tracked and reviewed quarterly"
  ]
},
{
  id: 6010, pillar: 6, type: "scale",
  title: "How consistently are account management responsibilities defined and executed across CS and AM roles, and where do handoffs break down?",
  options: [
    "No clear division of responsibility: CS and AM roles overlap or conflict",
    "Informal role division exists but coverage and accountability gaps are common",
    "A role definition document exists but handoffs between CS and AM are inconsistent",
    "A documented CS/AM interface with clear ownership by account tier and revenue threshold",
    "A governed account management model: ownership rules embedded in CRM, handoff SLAs tracked, and coverage reviewed in monthly account reviews"
  ]
},
{
  id: 6011, pillar: 6, type: "scale",
  title: "How consistently do you communicate demonstrated business value to customers, and how do you document outcomes customers have achieved?",
  options: [
    "Value communication is ad-hoc: customers are not routinely shown their ROI",
    "Some value reporting exists but it is inconsistent and not customer-specific",
    "A value framework exists but is used sporadically in QBRs and renewal conversations",
    "Documented value delivery shared with each account quarterly, tied to agreed success metrics",
    "A customer value playbook: success metrics set at onboarding, outcomes tracked quarterly, and ROI documented for every renewal and expansion conversation"
  ]
},
{
  id: 6012, pillar: 6, type: "scale",
  title: "How consistently does customer feedback reach Product and GTM teams, and how do you track whether it drives change?",
  options: [
    "Customer feedback is collected informally and rarely reaches Product or GTM",
    "Feedback is collected in support tickets or NPS surveys but not synthesized",
    "Periodic feedback synthesis happens but the link to roadmap or GTM decisions is weak",
    "A structured feedback loop: NPS, support, and QBR inputs synthesized quarterly and presented to Product and GTM leadership",
    "A continuous feedback-to-decision system: input tracked from collection to action, with outcome visibility across CS, Product, and GTM"
  ]
},
{
  id: 6013, pillar: 6, type: "scale",
  title: "How separately and consistently does your Account Management team run expansion pipeline reviews, distinct from CS health reviews?",
  options: [
    "No distinction: expansion is discussed in CS health calls without dedicated pipeline management",
    "Expansion pipeline is occasionally raised in CS meetings without a separate process",
    "A separate expansion review exists but cadence and quality are inconsistent",
    "Weekly expansion pipeline reviews run separately from CS health calls with documented deal actions",
    "Expansion is managed as a distinct sales motion: pipeline reviewed weekly, forecast tracked separately, and expansion ARR reported independently of renewal ARR"
  ]
},
{
  id: 6014, pillar: 6, type: "scale",
  title: "How systematically are at-risk accounts identified, escalated, and managed before they churn?",
  options: [
    "At-risk accounts are only identified after the customer signals intent to cancel",
    "CS managers flag at-risk accounts informally without a shared process",
    "A risk flag system exists but intervention playbooks are inconsistent",
    "A documented risk framework: health thresholds, escalation triggers, and intervention playbooks reviewed weekly",
    "A proactive risk management engine: predictive signals trigger playbooks automatically, escalation paths are governed, and save rates tracked per risk tier"
  ]
},
{
  id: 6015, pillar: 6, type: "scale",
  title: "How well-documented and consistently followed are your CS processes, from onboarding to renewal?",
  options: [
    "No CS documentation: processes exist only in tribal knowledge",
    "Basic documentation exists but is incomplete and not regularly used",
    "Playbooks cover the major CS motions but are inconsistently followed",
    "A comprehensive CS playbook covering all major motions, reviewed quarterly",
    "A governed CS operating manual: versioned, adoption tracked per rep, and updated after each major process improvement or product change"
  ]
},
{
  id: 6016, pillar: 6, type: "scale",
  title: "How well does your CS operating model scale, can you grow the customer base without proportional CS headcount increases?",
  options: [
    "Every new customer requires dedicated CS capacity: no scale mechanisms exist",
    "Some automation or pooled CS exists but the model is still largely 1:1",
    "A tiered CS model exists but the low-touch tier is under-resourced and underperforming",
    "A scaled CS model: tiered by ARR and health risk, with automation and self-service covering low-touch accounts",
    "A leverage-optimized CS model: automation, community, and digital touchpoints scale low-touch efficiently, freeing high-touch CS for strategic accounts"
  ]
},
{
  id: 6017, pillar: 6, type: "scale",
  title: "How well integrated is your CS data across CRM, product analytics, and support tools, and can you get a single customer view?",
  options: [
    "CS data is fragmented across disconnected systems: no unified customer view",
    "Manual data stitching provides a partial view, reviewed infrequently",
    "A partial integration exists but gaps in health or usage data require manual workarounds",
    "CS, CRM, and product data are integrated with a single customer view available in dashboards",
    "A unified customer data platform: health, usage, support, and commercial data in a single view, updated in real time and driving automated actions"
  ]
},
{
  id: 6018, pillar: 6, type: "scale",
  title: "How directly does Customer Success contribute to measurable revenue outcomes, and how is that contribution tracked?",
  options: [
    "CS is viewed as a cost center: revenue contribution is not measured",
    "CS influence on renewal and expansion is tracked informally",
    "Renewal rates and CS-sourced expansion ARR are tracked but not integrated into revenue reporting",
    "CS contributes a documented share of expansion pipeline and renewal ARR reviewed monthly",
    "CS owns a revenue accountability model: expansion pipeline, renewal rate, NRR, and save rate tracked and reported in monthly revenue meetings"
  ]
},
{
  id: 6019, pillar: 6, type: "scale",
  title: "How reliably does your CS function contribute to predictable NRR, and how confident are you in your NRR forecast three quarters out?",
  options: [
    "NRR is unpredictable: retention and expansion outcomes are volatile quarter to quarter",
    "NRR trends are tracked but forecasting accuracy is limited to 30-60 days",
    "NRR is modeled 90 days out but forecast accuracy is variable",
    "NRR is forecast 180 days out with documented renewal and expansion pipeline inputs",
    "A fully modeled NRR forecast: renewal risk, expansion pipeline, and churn predictors updated weekly and reviewed in board reporting"
  ]
},
{
  id: 6020, pillar: 6, type: "scale",
  title: "How frequently do existing customers refer new prospects, and do you have a structured program to generate and track referrals?",
  options: [
    "No referrals: existing customers are not activated as a growth channel",
    "Occasional informal referrals happen but there is no process or tracking",
    "A referral program exists but participation is low and tracking is manual",
    "A structured referral program with defined incentives, tracking, and quarterly review",
    "Customer referrals are a measurable pipeline source: referral rate, sourced ARR, and win rate tracked monthly and reviewed in revenue meetings"
  ]
},

/* ===========================================================
   PILLAR 7 — REVENUE OPERATIONS & SYSTEMS (20 QUESTIONS)
   =========================================================== */

{
  id: 7001, pillar: 7, type: "scale",
  title: "How accurately and completely are CRM records maintained, and how do you measure and enforce data quality?",
  options: [
    "CRM data is unreliable: records are incomplete, duplicated, or outdated",
    "Data quality is expected but not measured or enforced",
    "Periodic data audits happen but hygiene issues recur without systemic fixes",
    "CRM data quality is measured monthly with documented ownership and correction targets",
    "A governed CRM hygiene system: required fields enforced, completeness scored weekly, and data quality reported to leadership monthly"
  ]
},
{
  id: 7002, pillar: 7, type: "scale",
  title: "How well does your CRM configuration mirror the actual sales process, from qualification to close?",
  options: [
    "CRM is used for logging contacts but does not reflect the sales process",
    "CRM stages exist but do not match how deals actually progress",
    "CRM broadly reflects the process but exit criteria and required fields are incomplete",
    "CRM stage definitions, exit criteria, and required fields reflect the actual sales process",
    "CRM is a governed process mirror: stage gates enforced, deal review prep automated, and configuration reviewed after each process change"
  ]
},
{
  id: 7003, pillar: 7, type: "scale",
  title: "How comprehensively are GTM workflows documented, and how consistently are those processes followed across teams and regions?",
  options: [
    "No process documentation: workflows exist in individual practice only",
    "Some processes are documented but coverage is incomplete and access is inconsistent",
    "Core processes are documented but not consistently followed or enforced",
    "A process library covering all major GTM workflows, reviewed quarterly and linked to onboarding",
    "A governed process library: version-controlled, access-tracked, and deviation flagged in operations reviews monthly"
  ]
},
{
  id: 7004, pillar: 7, type: "scale",
  title: "How extensively does your GTM tech stack automate repetitive processes, and where are manual bottlenecks still consuming rep and ops capacity?",
  options: [
    "GTM runs almost entirely on manual processes: automation is minimal",
    "Some basic automation exists in email and CRM but handoffs remain manual",
    "Core workflows are automated but significant manual effort remains in reporting and routing",
    "Most routine GTM processes are automated with documented exceptions and manual override controls",
    "A fully instrumented automation layer: routing, sequencing, reporting, and alerting automated, with manual touchpoints limited to high-judgment activities"
  ]
},
{
  id: 7005, pillar: 7, type: "scale",
  title: "How well do your GTM systems share data with each other, and can you trace a prospect from first touch to closed-won without manual data stitching?",
  options: [
    "Systems are siloed: data cannot be traced across tools without manual work",
    "Partial integrations exist but data gaps and sync failures are common",
    "Core systems are integrated but some data flows require manual reconciliation",
    "CRM, MAP, and SEP are fully integrated with clean data flows reviewed monthly",
    "A coherent GTM data architecture: all systems integrated, data quality monitored in real time, and integration health reviewed quarterly"
  ]
},
{
  id: 7006, pillar: 7, type: "scale",
  title: "How structured and rule-based is your lead routing and assignment process, and how quickly does a qualified lead reach the right rep?",
  options: [
    "Lead routing is manual: someone decides who gets each lead",
    "Basic routing rules exist in CRM but exceptions are frequent and untracked",
    "Routing rules cover most scenarios but edge cases cause delays or double-assignment",
    "A documented routing framework covering all lead types, reviewed quarterly for coverage",
    "An automated lead routing system: rules documented, tested, and monitored, with routing speed and accuracy tracked weekly"
  ]
},
{
  id: 7007, pillar: 7, type: "scale",
  title: "How cost-efficiently is your GTM tech stack managed, and when did you last audit for redundancy, underutilization, or contract inefficiency?",
  options: [
    "No tech stack audit has been conducted: tools are added and forgotten",
    "A rough view of tools exists but no formal audit or rationalization has happened",
    "An annual review of the tech stack occurs but utilization and contract optimization are not tracked",
    "A bi-annual tech stack audit reviews utilization, contract value, and redundancy with documented actions",
    "A continuous tech stack governance program: utilization monitored monthly, contracts benchmarked annually, and rationalization decisions reviewed quarterly"
  ]
},
{
  id: 7008, pillar: 7, type: "scale",
  title: "How effectively does RevOps translate GTM team needs into process, tooling, and data solutions, and how is RevOps prioritization governed?",
  options: [
    "RevOps is reactive: work is driven by whoever asks most loudly",
    "RevOps has a backlog but prioritization is inconsistent and not governed",
    "RevOps prioritizes by team request but business impact weighting is informal",
    "RevOps runs a sprint-based prioritization process aligned with GTM leadership quarterly",
    "RevOps operates as a strategic function: a governed intake process, impact-weighted roadmap, and stakeholder review quarterly"
  ]
},
{
  id: 7009, pillar: 7, type: "scale",
  title: "How disciplined and consistently held are your GTM operating cadences, pipeline reviews, forecast calls, and planning rituals?",
  options: [
    "No formal cadence: meetings happen when something breaks",
    "Cadences exist on paper but are frequently cancelled or poorly attended",
    "A cadence runs but meeting quality is inconsistent and outputs are rarely documented",
    "A standardized GTM cadence: meetings held consistently, outputs documented, and actions tracked week-over-week",
    "A sacred operating rhythm: cadences governed, attendance required, pre-reads standardized, and action accountability reviewed at each subsequent meeting"
  ]
},
{
  id: 7010, pillar: 7, type: "scale",
  title: "How systematically do you measure and manage GTM efficiency, and how do you know if you are getting better or worse?",
  options: [
    "GTM efficiency is not measured: we focus only on top-line revenue",
    "Some efficiency metrics exist but they are reviewed infrequently",
    "Core efficiency metrics are tracked but not reviewed against targets or benchmarks",
    "GTM efficiency metrics reviewed monthly against defined targets and historical trends",
    "A GTM efficiency dashboard reviewed monthly: CAC, payback, pipeline velocity, and burn multiple benchmarked and driving quarterly investment decisions"
  ]
},
{
  id: 7011, pillar: 7, type: "scale",
  title: "How governed are data and process changes, and how do you prevent uncontrolled changes from creating reporting inconsistencies?",
  options: [
    "No governance: anyone can change CRM fields, processes, or integrations",
    "Informal norms exist but uncontrolled changes are common",
    "A change request process exists but compliance is inconsistent",
    "A documented change governance process: requests reviewed, impact assessed, and changes logged",
    "A formal change control board: all GTM system and process changes reviewed, approved, tested, and documented before deployment"
  ]
},
{
  id: 7012, pillar: 7, type: "scale",
  title: "How rationally designed and equitably maintained are your territory and quota structures, and when were they last formally reviewed?",
  options: [
    "Territories and quotas are set historically: no formal design or review process",
    "Quotas are set top-down with minimal data supporting territory design",
    "Annual quota and territory reviews happen but the process is not data-driven",
    "Territory and quota design follows a documented framework reviewed annually with Finance",
    "A data-driven territory and quota model: account potential, rep capacity, and market opportunity reviewed quarterly, with mid-year adjustments documented"
  ]
},
{
  id: 7013, pillar: 7, type: "scale",
  title: "How structurally integrated is RevOps across Sales, Marketing, and CS, and does RevOps have a seat in GTM planning?",
  options: [
    "RevOps serves one function: Sales or Marketing, without cross-functional scope",
    "RevOps spans functions but operates reactively rather than in planning",
    "RevOps attends GTM planning but does not co-own process or tooling decisions",
    "RevOps is a formal co-owner of GTM operating model, process, and tooling decisions",
    "RevOps is a strategic GTM function: co-owns planning, data, and process across all revenue functions with a seat in monthly leadership reviews"
  ]
},
{
  id: 7014, pillar: 7, type: "scale",
  title: "How actionable and consistently used are your GTM dashboards and reports, and who reviews them and on what cadence?",
  options: [
    "No dashboards: reporting is done manually in spreadsheets",
    "Dashboards exist but are rarely opened or used to drive decisions",
    "Standard reports are run but the data is not consistently trusted or acted on",
    "Dashboards are reviewed in weekly GTM meetings with documented action outputs",
    "A governed reporting architecture: automated dashboards reviewed in daily, weekly, and monthly cadences, with decision log tracking actions from each review"
  ]
},
{
  id: 7015, pillar: 7, type: "scale",
  title: "Can your team pull a complete customer view, from first touch to current health, without manually stitching data across systems?",
  options: [
    "A complete customer view does not exist: data is scattered across disconnected tools",
    "A partial view can be assembled manually but requires significant effort",
    "A customer view exists but requires regular manual correction to be accurate",
    "An automated single customer view exists in CRM or BI, updated daily",
    "A real-time unified customer record: all touchpoints, health signals, and commercial data accessible in a single view with no manual intervention"
  ]
},
{
  id: 7016, pillar: 7, type: "scale",
  title: "How consistently does RevOps drive process standardization across all GTM teams, and how is process adoption measured?",
  options: [
    "No standardization: each team follows its own approach",
    "Some shared processes exist but adoption is uneven",
    "Core processes are standardized but adoption tracking is informal",
    "GTM processes are standardized, adoption tracked per team, and deviation addressed monthly",
    "A standardization program: process adherence scored by team and reviewed monthly, with deviation root causes addressed in quarterly audits"
  ]
},
{
  id: 7017, pillar: 7, type: "scale",
  title: "How rigorously are pipeline and forecast reviews run, and how much does forecast accuracy improve over the course of a quarter?",
  options: [
    "No formal forecast process: revenue predictions are based on gut feel",
    "A forecast is produced but accuracy is not tracked or reviewed against outcomes",
    "A quarterly forecast exists but accuracy degrades significantly over the quarter",
    "A weekly forecast review with documented accuracy tracking and variance explanation",
    "A governed forecast operating system: call-to-close accuracy tracked weekly, variance explained, and forecast methodology reviewed after each quarter"
  ]
},
{
  id: 7018, pillar: 7, type: "scale",
  title: "How well adopted are your GTM tools, and how do you measure actual usage versus licensed seats?",
  options: [
    "Tool adoption is unknown: licenses are purchased but usage is not tracked",
    "Adoption is informally assessed but no data supports investment decisions",
    "Utilization is tracked for major tools but is not reviewed against ROI",
    "Tool utilization reviewed quarterly against license cost and business impact",
    "A governed tool adoption program: utilization benchmarked, low-adoption tools reviewed for consolidation, and training triggered by usage drops"
  ]
},
{
  id: 7019, pillar: 7, type: "scale",
  title: "How strategically does RevOps contribute to GTM planning, and is RevOps capacity part of the annual planning discussion?",
  options: [
    "RevOps is excluded from planning: operational capacity is not factored in",
    "RevOps is consulted occasionally in planning but not a formal input",
    "RevOps contributes to system and process planning annually",
    "RevOps is a formal planning input: operational capacity, tooling, and process roadmap reviewed in annual and quarterly planning",
    "RevOps co-owns the GTM operating plan: system capacity, process roadmap, and data infrastructure are planned alongside headcount and budget"
  ]
},
{
  id: 7020, pillar: 7, type: "scale",
  title: "How quickly can your RevOps team implement and drive adoption of a new GTM tool or process change?",
  options: [
    "New tools and processes take six months or more to implement and adopt",
    "Implementation typically takes three to six months with significant friction",
    "New tools are live within one to three months but adoption lags implementation",
    "New tools and processes are live and adopted within four to six weeks",
    "An agile ops capability: new tools and processes implemented in weeks with adoption tracked from day one and reviewed at 30-60-90 days"
  ]
},

/* ===========================================================
   PILLAR 8 — PRICING & PACKAGING (20 QUESTIONS)
   =========================================================== */

{
  id: 8001, pillar: 8, type: "scale",
  title: "How explicitly defined is your pricing strategy, and when was it last reviewed against market and cost data?",
  options: [
    "No pricing strategy: prices were set once and have not been reviewed",
    "An informal pricing philosophy exists but is not documented or governed",
    "A pricing strategy document exists but has not been updated in over a year",
    "A pricing strategy reviewed annually against win/loss data, competitive benchmarks, and margin targets",
    "A governed pricing strategy: reviewed semi-annually, informed by buyer research, deal data, and competitive intelligence, with documented decision rationale"
  ]
},
{
  id: 8002, pillar: 8, type: "scale",
  title: "How well does your packaging structure reflect the way customers actually adopt and expand their use of your product?",
  options: [
    "Packaging was designed internally: customer adoption patterns were not considered",
    "Packaging loosely aligns with usage patterns but creates friction at expansion points",
    "Packaging aligns with primary adoption patterns but secondary segments are poorly served",
    "Packaging validated against adoption data and reviewed annually for alignment",
    "A packaging architecture designed from adoption data: expansion triggers, upgrade paths, and value metric alignment validated through customer interviews and usage analysis"
  ]
},
{
  id: 8003, pillar: 8, type: "scale",
  title: "How intuitively can a buyer understand your pricing in under two minutes without needing a sales rep to explain it?",
  options: [
    "Pricing requires significant explanation: buyers are frequently confused",
    "Most buyers need a call to understand what they will pay",
    "Pricing is understandable for primary segments but creates confusion for others",
    "Pricing is clear and self-explanatory for all primary buyer segments",
    "Pricing is validated through buyer comprehension testing: all segments can self-select the right tier without sales involvement"
  ]
},
{
  id: 8004, pillar: 8, type: "scale",
  title: "How well do you understand willingness to pay across your key customer segments, and what evidence supports that understanding?",
  options: [
    "Willingness to pay is unknown: pricing was set based on cost or gut feel",
    "Anecdotal awareness from deals lost on price, not validated",
    "Some buyer interviews have informed pricing but research is not systematic",
    "Willingness to pay validated through structured buyer research and deal close rate analysis per price band",
    "A segment-level willingness-to-pay model: validated through controlled research, win/loss pricing analysis, and close rate by price tier, reviewed annually"
  ]
},
{
  id: 8005, pillar: 8, type: "scale",
  title: "How well does your pricing and packaging architecture support upsell and expansion, without requiring contract renegotiation?",
  options: [
    "Expansion requires a new commercial process: packaging does not accommodate it",
    "Expansion is possible but creates friction due to packaging structure",
    "Some expansion paths exist but not all upsell scenarios are well-served",
    "Packaging includes defined expansion paths validated against common customer growth patterns",
    "A modular packaging architecture: expansion paths by usage, seat, and feature tier are clearly defined and can be executed without renegotiation"
  ]
},
{
  id: 8006, pillar: 8, type: "scale",
  title: "How tightly are your prices anchored to the measurable value your product delivers to customers in each segment?",
  options: [
    "Pricing is cost-based or competitor-referenced: value is not the primary anchor",
    "An informal value story is used in negotiations but pricing is not value-derived",
    "Pricing is roughly aligned with value for primary segments",
    "A documented value-to-price framework validated through customer ROI analysis per segment",
    "Value-based pricing with a documented ROI model per segment: value anchors tested through buyer interviews and updated annually"
  ]
},
{
  id: 8007, pillar: 8, type: "scale",
  title: "How well does your pricing model enable a fast initial purchase without creating barriers to adoption or time-to-value?",
  options: [
    "Entry pricing requires significant negotiation and slows deal closure",
    "Starting packages are available but they do not reflect the buyer's initial use case",
    "Entry-level pricing exists but time-to-value is delayed by packaging constraints",
    "Entry packages designed for fast adoption and validated against time-to-value data",
    "A fast-entry architecture: low-friction entry package, clear onboarding path, and expansion triggers built into the product experience"
  ]
},
{
  id: 8008, pillar: 8, type: "scale",
  title: "How clearly do you understand which features drive willingness to pay, and how does that inform packaging decisions?",
  options: [
    "No feature-level pricing intelligence: features are bundled without value testing",
    "Intuitive assumptions drive feature bundling but no research supports them",
    "Some feature-value testing has been done but it is not systematically applied",
    "Feature-to-willingness-to-pay mapping validated through buyer research and close rate analysis",
    "A live feature value model: feature importance and willingness-to-pay tested continuously through buyer interviews and usage data, informing packaging annually"
  ]
},
{
  id: 8009, pillar: 8, type: "scale",
  title: "How clearly informed is your pricing by competitive benchmarking, and how recently was your competitive pricing position reviewed?",
  options: [
    "No competitive pricing data: we do not know how we are positioned relative to alternatives",
    "Rough awareness of competitor pricing from sales conversations",
    "Periodic competitive pricing review but data quality and recency are limited",
    "An annual competitive pricing review with documented positioning implications",
    "A competitive pricing intelligence program: benchmarked semi-annually, deal-level competitive pricing data tracked in CRM, and positioning reviewed quarterly"
  ]
},
{
  id: 8010, pillar: 8, type: "scale",
  title: "How straightforward is your pricing for sales reps to quote and defend in a deal, without requiring specialist involvement?",
  options: [
    "Pricing requires RevOps or Finance involvement in most deals",
    "Standard deals can be quoted but anything non-standard requires escalation",
    "Most deals can be quoted independently but edge cases create delays",
    "All standard deal configurations can be quoted independently with documented exception criteria",
    "A self-service pricing model for reps: CPQ or equivalent, automated approvals for standard deals, and specialist escalation limited to defined exceptions"
  ]
},
{
  id: 8011, pillar: 8, type: "scale",
  title: "How precisely do you understand price sensitivity at the segment level, and how does that inform which segments you prioritize?",
  options: [
    "Price sensitivity is not analyzed by segment: one pricing structure serves all",
    "Rough awareness of which segments push back on price",
    "Segment-level price sensitivity tracked through deal data informally",
    "Price sensitivity analyzed by segment, validated through deal and interview data reviewed annually",
    "A segment pricing sensitivity model: elasticity quantified per segment, informing price architecture, discount governance, and GTM resource allocation"
  ]
},
{
  id: 8012, pillar: 8, type: "scale",
  title: "How well does your pricing support both self-serve or PLG motions and high-touch enterprise sales, without creating internal channel conflict?",
  options: [
    "Pricing is built for one motion only and creates friction in the other",
    "Both motions exist but pricing creates conflict or confusion between them",
    "Pricing supports both motions adequately but without explicit architecture",
    "A documented pricing architecture that governs self-serve and enterprise tiers separately",
    "A hybrid pricing model: self-serve and enterprise tiers are designed, priced, and governed independently to eliminate channel conflict"
  ]
},
{
  id: 8013, pillar: 8, type: "scale",
  title: "How well tailored is your pricing and packaging to different personas, use cases, or verticals, beyond a single universal tier structure?",
  options: [
    "One universal price structure serves all personas and use cases",
    "Informal price adjustments are made for specific personas without documented rationale",
    "Some persona or vertical differentiation exists but is not consistently applied",
    "Persona or use-case-based packaging options are documented and used in deal structuring",
    "A fully differentiated packaging architecture: persona, use case, and vertical-specific configurations validated through buyer research"
  ]
},
{
  id: 8014, pillar: 8, type: "scale",
  title: "How clearly can sales reps articulate and document the ROI and value justification for your pricing in a formal business case?",
  options: [
    "No ROI framework: sales reps rely on feature benefits to justify price",
    "An informal ROI narrative exists but it is not buyer-specific or quantified",
    "A generic ROI model exists but is not consistently used in deal cycles",
    "A standardized ROI calculator and case framework used in all deals above a defined size",
    "A buyer-specific value justification system: ROI model tailored per segment, case templates used in enterprise deals, and win rate by business case quality tracked"
  ]
},
{
  id: 8015, pillar: 8, type: "scale",
  title: "How disciplined is your discounting governance, and do you have data on how discounting affects deal velocity and margin?",
  options: [
    "No discounting policy: reps and managers decide independently",
    "An informal discount norm exists but it is not enforced or tracked",
    "A discount approval process exists but compliance tracking is weak",
    "A tiered discount approval framework tracked in CRM, reviewed monthly",
    "A governed discount intelligence system: all discounts tracked, approval tiers enforced, and impact on win rate, cycle time, and margin reviewed quarterly"
  ]
},
{
  id: 8016, pillar: 8, type: "scale",
  title: "How systematically do you identify where pricing or packaging is creating friction that blocks deals or slows the sales cycle?",
  options: [
    "Pricing friction is identified only when deals are lost",
    "Sales anecdotes surface friction informally without systematic tracking",
    "Lost deal analysis occasionally surfaces pricing blockers",
    "Pricing friction is tracked in lost deal analysis and reviewed quarterly with Finance and RevOps",
    "A pricing friction intelligence program: blockers tracked per segment and deal stage, reviewed quarterly, and driving packaging updates and discount rule changes"
  ]
},
{
  id: 8017, pillar: 8, type: "scale",
  title: "How regularly and rigorously do you test pricing changes, and what is your process for validating a pricing update before full deployment?",
  options: [
    "No pricing tests: changes are implemented based on executive decision",
    "Pricing changes are made occasionally without a formal validation process",
    "Some pricing experiments are run but results are evaluated informally",
    "A defined pricing change process: hypothesis, test cohort, measurement period, and go/no-go criteria documented before each change",
    "A systematic pricing governance model: all changes piloted, conversion and margin impact measured, and rollout decision documented"
  ]
},
{
  id: 8018, pillar: 8, type: "scale",
  title: "How well has your pricing been adapted for different geographies, and have you validated willingness to pay locally?",
  options: [
    "One global price structure applied everywhere without geo consideration",
    "Informal geo adjustments made in negotiation without a documented rationale",
    "Regional pricing exists but is not validated against local market data",
    "Geo-specific pricing validated through buyer research and local deal data",
    "A geographic pricing model: local willingness-to-pay validated, purchasing power parity applied where relevant, and regional pricing reviewed annually"
  ]
},
{
  id: 8019, pillar: 8, type: "scale",
  title: "How systematically do you measure pricing performance, and what metrics signal that your pricing needs adjustment?",
  options: [
    "Pricing performance is not tracked: revenue growth is the only signal",
    "Win rate and average deal size are tracked but not linked to pricing structure",
    "Some pricing metrics are reviewed annually but without defined performance thresholds",
    "A pricing performance review quarterly: win rate by price band, discount frequency, and expansion rate tracked against targets",
    "A pricing analytics system: win rate, discount rate, deal velocity, and NRR reviewed monthly per segment, with defined triggers for pricing review"
  ]
},
{
  id: 8020, pillar: 8, type: "scale",
  title: "How automatically does your pricing capture value growth, for example through usage increases or seat additions, without requiring manual renegotiation?",
  options: [
    "All value expansion requires a manual renegotiation process",
    "Some expansion triggers exist but the commercial process is largely manual",
    "Seat or usage expansion is contractually provided for but not automated",
    "Most expansion scenarios are governed by contract terms and auto-invoiced without renegotiation",
    "A fully automated expansion model: usage, seat, and feature triggers auto-invoice without sales involvement, reviewed for leakage quarterly"
  ]
},

/* ===========================================================
   PILLAR 9 — PRODUCT READINESS (20 QUESTIONS)
   =========================================================== */

{
  id: 9001, pillar: 9, type: "scale",
  title: "How precisely defined is the primary use case your product solves, and how consistently is that use case the reason customers buy?",
  options: [
    "The primary use case is poorly defined or contested internally",
    "A primary use case is described informally but customers buy for various reasons",
    "A defined use case exists but closed-won analysis shows significant variation",
    "A documented primary use case validated against closed-won data from the last four quarters",
    "The primary use case is unambiguous, validated through buyer interviews, and consistent across more than 80% of closed-won deals"
  ]
},
{
  id: 9002, pillar: 9, type: "scale",
  title: "How predictably do new customers reach first value, and how is that tracked across customer cohorts?",
  options: [
    "Time-to-value is not tracked: we do not know when customers first see results",
    "Time-to-value varies significantly with no clear pattern or owner",
    "A time-to-value benchmark exists but achievement is inconsistent",
    "Time-to-value is tracked per cohort and reviewed quarterly with documented improvement actions",
    "A time-to-value model: target defined by segment, achievement tracked per customer, and cohort trends reviewed monthly in CS and Product meetings"
  ]
},
{
  id: 9003, pillar: 9, type: "scale",
  title: "How effectively can your product be demonstrated in a standard sales cycle, and what percentage of demos result in a next step?",
  options: [
    "The product cannot be effectively demonstrated without extensive preparation",
    "A demo exists but typically requires significant customisation or specialist involvement",
    "A reference demo works for most cases but complex scenarios require workarounds",
    "A standard demo framework covers all primary use cases and is used consistently",
    "A high-conversion demo system: segment-specific, self-contained, and tracked for next-step conversion rate quarterly"
  ]
},
{
  id: 9004, pillar: 9, type: "scale",
  title: "Without explanation from a sales rep, how quickly do prospects understand what your product does and why it is valuable?",
  options: [
    "Prospects rarely understand the value without significant rep explanation",
    "Understanding typically requires multiple calls and a tailored demo",
    "Most prospects understand value after a standard demo",
    "Value is understood by most prospects during or immediately after the first demo",
    "Value is immediately clear: validated through buyer comprehension testing post-demo"
  ]
},
{
  id: 9005, pillar: 9, type: "scale",
  title: "How naturally does the product support your chosen GTM motion, SMB, mid-market, or enterprise, in terms of deployment, configuration, and time-to-value?",
  options: [
    "The product consistently creates friction with the chosen GTM motion",
    "The product works for the GTM motion but requires significant workarounds",
    "Partial fit: the product supports some scenarios but creates friction in others",
    "The product is well-suited to the GTM motion with minor exceptions",
    "The product is designed for the GTM motion: deployment, configuration, and value timelines validated against target segment expectations"
  ]
},
{
  id: 9006, pillar: 9, type: "scale",
  title: "How consistently does the actual implementation experience match what was promised to the customer during the sales cycle?",
  options: [
    "Post-sale expectations frequently differ from what was sold: causing immediate friction",
    "Mismatches between sales promises and delivery reality are common",
    "Mismatches occur occasionally and are managed case by case",
    "Implementation experience matches sales expectations in most cases with documented exceptions",
    "Sales and delivery expectations are contractually aligned: mismatches tracked and root-caused quarterly"
  ]
},
{
  id: 9007, pillar: 9, type: "scale",
  title: "How cleanly does the product architecture support your pricing and packaging model, without requiring workarounds to enforce tiers or limits?",
  options: [
    "Packaging and product architecture are misaligned: tier enforcement is manual",
    "Some packaging tiers are supported but others require workarounds",
    "The product mostly supports packaging but technical debt creates enforcement friction",
    "Product architecture supports all primary packaging tiers without workarounds",
    "A fully aligned product-packaging architecture: tier enforcement automated, usage limits governed in-product, and packaging gaps reviewed with Product quarterly"
  ]
},
{
  id: 9008, pillar: 9, type: "scale",
  title: "How reliably can sales teams confirm or disqualify product fit early in a deal, without requiring late-stage technical validation?",
  options: [
    "Product fit is typically only confirmed during or after proof-of-concept",
    "Fit assessment is delayed to mid-cycle because qualification criteria are unclear",
    "Qualification criteria exist but are not consistently applied early in the process",
    "A documented qualification framework allows early fit confirmation in most deals",
    "A self-qualification playbook: sales can confirm or disqualify fit by end of discovery using defined, product-grounded criteria"
  ]
},
{
  id: 9009, pillar: 9, type: "scale",
  title: "How well documented are product limitations and constraints, and are they consistently known and applied by Sales and CS?",
  options: [
    "Product limitations are not documented: teams learn about them during deals or onboarding",
    "Some limitations are known but inconsistently communicated across Sales and CS",
    "A limitations document exists but is not regularly updated or referenced",
    "Product limitations are documented, updated with each release, and embedded in sales onboarding",
    "An explicit product constraint register: maintained by Product, reviewed by Sales and CS quarterly, and embedded in deal qualification and onboarding playbooks"
  ]
},
{
  id: 9010, pillar: 9, type: "scale",
  title: "How often do previously unknown product gaps surface in late-stage deals, and what process is in place to prevent that?",
  options: [
    "Surprise product gaps in late-stage deals are a frequent occurrence",
    "Gaps surface in late-stage deals regularly but are handled case by case",
    "Gaps occasionally surface late but a process exists to escalate and resolve",
    "A pre-deal technical validation process catches most gaps before late stage",
    "A zero-surprise model: solution architecture review embedded in discovery, and late-stage gap frequency tracked and reported quarterly"
  ]
},
{
  id: 9011, pillar: 9, type: "scale",
  title: "How automated and self-sufficient is your customer onboarding, and how much manual intervention is required to complete a standard setup?",
  options: [
    "Onboarding is entirely manual: every customer requires significant PS or CS time",
    "Onboarding is mostly manual with some templated steps",
    "A mix of automated and manual steps: manual effort varies significantly by customer",
    "Most onboarding steps are automated with manual involvement limited to defined exceptions",
    "Onboarding is fully automated for standard configs: manual touchpoints are tracked and completion rates reviewed monthly"
  ]
},
{
  id: 9012, pillar: 9, type: "scale",
  title: "How repeatable is your product delivery across customers, and can new customers be onboarded without rebuilding from scratch each time?",
  options: [
    "Every customer implementation is effectively custom-built from scratch",
    "Some templates exist but implementation is largely bespoke",
    "A partially repeatable model: some standardization but significant custom effort remains",
    "A mostly repeatable delivery model with documented templates and configuration guides",
    "A fully repeatable delivery playbook: standard configuration, templated setup, and exception tracking reviewed monthly"
  ]
},
{
  id: 9013, pillar: 9, type: "scale",
  title: "How cleanly does your product integrate into customers' existing technical environments, and how often do integration issues delay time-to-value?",
  options: [
    "Integration challenges are common and frequently delay or derail deployments",
    "Integration works in most cases but requires significant customer IT effort",
    "Integration is acceptable for primary environments but gaps exist for secondary stacks",
    "Integration coverage is well-documented and validated against target customer environments",
    "A certified integration ecosystem: target stack integrations validated, documentation maintained, and integration failure rates tracked in CS reporting"
  ]
},
{
  id: 9014, pillar: 9, type: "scale",
  title: "How consistently do Sales, CS, and Product share a common view of what the product does well, and what it does not?",
  options: [
    "Sales, CS, and Product have meaningfully different views of product capabilities",
    "Alignment exists at a high level but breaks down in edge cases and customer conversations",
    "A shared product positioning document exists but is not consistently applied",
    "A unified product understanding is maintained through regular cross-functional syncs and shared documentation",
    "A single source of product truth: capability boundaries, known limitations, and positioning are co-owned by Sales, CS, and Product and updated quarterly"
  ]
},
{
  id: 9015, pillar: 9, type: "scale",
  title: "How well does the product architecture support expansion and upsell, and does adding more users, features, or modules require significant rework?",
  options: [
    "Expansion requires a near-complete reimplementation",
    "Significant rework is typically required when customers expand",
    "Expansion is possible but some rework is usually needed",
    "Most expansion scenarios are supported with minimal rework",
    "A designed-for-expansion architecture: upsell paths are frictionless, documented in the product, and tested against real customer expansion patterns"
  ]
},
{
  id: 9016, pillar: 9, type: "scale",
  title: "How comprehensive and current is your product documentation and enablement material, and do GTM teams find it sufficient without escalating to Product?",
  options: [
    "Documentation is missing, outdated, or inaccessible",
    "Documentation exists but is incomplete and requires frequent Product team clarification",
    "Documentation covers core use cases but gaps exist for advanced scenarios",
    "Comprehensive documentation covering primary and secondary use cases, updated with each release",
    "A best-in-class documentation system: complete, version-controlled, searchable, and validated by GTM teams for sufficiency quarterly"
  ]
},
{
  id: 9017, pillar: 9, type: "scale",
  title: "How structured is the process for GTM teams to submit product feedback, and how do you track whether it influences the roadmap?",
  options: [
    "No feedback process: GTM teams escalate to Product through informal channels",
    "An ad-hoc feedback process exists but tracking from input to outcome is absent",
    "A structured feedback submission process exists but impact on roadmap is unclear",
    "A formal feedback loop: inputs tracked from submission through roadmap review with outcome visibility for submitters",
    "A closed-loop GTM-to-Product feedback system: inputs logged, reviewed quarterly, prioritized transparently, and outcomes reported back to GTM teams"
  ]
},
{
  id: 9018, pillar: 9, type: "scale",
  title: "How directly are roadmap decisions informed by validated GTM and customer signals, rather than internal assumptions?",
  options: [
    "Roadmap is driven by engineering priorities and leadership intuition",
    "Customer requests are considered but weighting is informal and opaque",
    "Customer and market inputs feed into planning but are not systematically scored",
    "Roadmap decisions document the market and customer evidence behind each priority",
    "An evidence-based roadmap: every significant decision has a documented market and customer signal with frequency, revenue impact, and retention correlation"
  ]
},
{
  id: 9019, pillar: 9, type: "scale",
  title: "Does product readiness currently accelerate or constrain GTM execution, and how do you measure that impact?",
  options: [
    "Product readiness is a major, recurring constraint on GTM execution",
    "Product gaps frequently surface as blockers in active deals or onboarding",
    "Product occasionally constrains GTM but workarounds are generally available",
    "Product readiness mostly enables GTM with constraints limited to documented edge cases",
    "Product is a GTM accelerator: readiness is scored and tracked, and constraint reduction is a Product team KPI reviewed quarterly"
  ]
},
{
  id: 9020, pillar: 9, type: "scale",
  title: "How consistently can your product be sold, implemented, and scaled without requiring exceptions to standard terms or delivery processes?",
  options: [
    "Exceptions are the norm: nearly every deal requires some form of custom accommodation",
    "Exceptions are frequent and handled case by case without documented governance",
    "Some exception scenarios are documented but others still require ad-hoc resolution",
    "Exceptions are rare and governed by a documented exception process with leadership approval",
    "A no-exception standard model: standard terms and delivery apply consistently, exceptions are tracked and reviewed for systemic resolution"
  ]
},

/* ===========================================================
   PILLAR 10 — DATA & INSIGHTS (20 QUESTIONS)
   =========================================================== */

{
  id: 10001, pillar: 10, type: "scale",
  title: "How clearly defined and consistently applied are your GTM metric definitions, and how often do teams dispute what the numbers mean?",
  options: [
    "Metric definitions are absent: teams calculate the same metric differently",
    "Some definitions exist but ambiguity causes regular data disputes in meetings",
    "Core metrics are defined but secondary metrics are inconsistent across teams",
    "A governed metric glossary covers all key GTM metrics and is referenced in reporting",
    "A single-source metric registry: all definitions documented, owned, and versioned, with disputes resolved through a governance process rather than in meetings"
  ]
},
{
  id: 10002, pillar: 10, type: "scale",
  title: "How much do you trust your CRM data, and would you be comfortable paying sales commissions based solely on CRM reports without manual reconciliation?",
  options: [
    "CRM data is too unreliable to use for commission calculations",
    "Commissions require significant manual checking against CRM data",
    "CRM data is mostly trusted but key exceptions require manual reconciliation",
    "CRM data is trusted for commission calculations with a defined exception review process",
    "Commission calculations are run automatically from CRM data: data quality is audited monthly and no manual reconciliation is required"
  ]
},
{
  id: 10003, pillar: 10, type: "scale",
  title: "How consistently is data used to drive GTM decisions, and can you give an example from the last 30 days where data changed a plan?",
  options: [
    "Gut feel drives most decisions: data is produced but not used",
    "Data is reviewed in meetings but rarely changes the conclusion",
    "Data influences decisions occasionally but intuition still dominates",
    "Data is a primary input to most GTM decisions with documented decision rationale",
    "A data-driven decision culture: decisions documented with data backing, and cases where data overrode intuition tracked as a positive signal"
  ]
},
{
  id: 10004, pillar: 10, type: "scale",
  title: "How consistently do you track leading indicators, activity, engagement, pipeline stage velocity, before they become lagging revenue misses?",
  options: [
    "Only lagging metrics are tracked: revenue misses are the primary signal",
    "Some leading indicators exist but they are reviewed too infrequently to be actionable",
    "Leading indicators are tracked but not consistently reviewed in the weekly operating cadence",
    "Leading indicators are reviewed weekly with documented thresholds and trigger actions",
    "A predictive indicator system: leading metrics with defined thresholds trigger automated alerts and documented playbooks before revenue impact occurs"
  ]
},
{
  id: 10005, pillar: 10, type: "scale",
  title: "How accurately can you attribute revenue to specific marketing channels, campaigns, and activities, and how often is attribution reviewed?",
  options: [
    "No attribution model: all pipeline is marked as direct or unknown",
    "First-touch attribution exists but multi-touch and spend ROI are unmeasured",
    "A basic multi-touch model is in place but accuracy is not validated",
    "A validated multi-touch attribution model reviewed monthly with documented assumptions",
    "A full attribution system: channel, campaign, and spend tracked to closed revenue with accuracy validated quarterly and model updated as needed"
  ]
},
{
  id: 10006, pillar: 10, type: "scale",
  title: "How precisely do you measure GTM efficiency, and can you calculate CAC payback, burn multiple, and pipeline efficiency by motion?",
  options: [
    "GTM efficiency is not measured: we track revenue but not cost-of-revenue",
    "Total CAC is tracked but efficiency by motion or segment is unknown",
    "Core efficiency metrics exist but are reviewed infrequently or inconsistently",
    "CAC, payback, and pipeline efficiency tracked by motion and reviewed monthly",
    "A GTM efficiency P&L: CAC, payback, burn multiple, and pipeline efficiency by motion, segment, and rep reviewed monthly in leadership meetings"
  ]
},
{
  id: 10007, pillar: 10, type: "scale",
  title: "How rigorously do you run cohort analysis, and can you compare retention, expansion, and churn rates across acquisition cohorts?",
  options: [
    "No cohort analysis: customer performance is not tracked across time",
    "Basic cohort tracking exists but it is not reviewed or used in planning",
    "Cohort data is available but analysis is surface-level and infrequent",
    "Quarterly cohort reviews comparing retention, NRR, and expansion by acquisition period",
    "A full cohort intelligence system: retention, expansion, and payback tracked by cohort, reviewed quarterly, and informing ICP and DG strategy"
  ]
},
{
  id: 10008, pillar: 10, type: "scale",
  title: "How clearly can you see the composition, health, and stage distribution of your pipeline at any given moment?",
  options: [
    "Pipeline visibility is limited: a real-time view requires manual data assembly",
    "Pipeline is visible in CRM but quality, health, and stage accuracy are not trusted",
    "Pipeline dashboards exist but data hygiene issues reduce confidence in the view",
    "A real-time pipeline view with stage distribution, health flags, and coverage ratio tracked",
    "A governed pipeline intelligence system: stage distribution, health score, coverage, and velocity tracked in real time and reviewed in weekly pipeline meetings"
  ]
},
{
  id: 10009, pillar: 10, type: "scale",
  title: "How granularly can you segment GTM performance data, by segment, motion, rep, and cohort, to identify root causes rather than averages?",
  options: [
    "Performance data is only available in aggregate: segmentation is not possible",
    "Some segmentation is possible but requires significant manual data work",
    "Core segments are available but cross-filtering by motion and rep is limited",
    "Performance can be segmented by segment, motion, and rep with data available in dashboards",
    "A multi-dimensional segmentation model: performance sliced by segment, motion, rep, cohort, and geography, reviewed monthly at the team and leadership level"
  ]
},
{
  id: 10010, pillar: 10, type: "scale",
  title: "How accurately does your team forecast next quarter's revenue, and what is your typical variance between commit and final result?",
  options: [
    "No formal forecast: quarterly revenue is a surprise",
    "A forecast exists but variance to actual is typically greater than 20%",
    "Forecasting is attempted but variance is inconsistent and not systematically reviewed",
    "A documented forecast methodology with variance tracking and post-quarter retrospective",
    "A governed forecast system: variance under 10% consistently, methodology reviewed quarterly, and call-to-close accuracy tracked weekly"
  ]
},
{
  id: 10011, pillar: 10, type: "scale",
  title: "How advanced is your use of predictive analytics in GTM, and can you model the likely outcome of a deal or a DG campaign before it closes?",
  options: [
    "No predictive analytics: all decisions are based on historical data or intuition",
    "Some basic trendline analysis exists but no forward-looking models are used",
    "Predictive scoring is used in one function but is not applied across GTM",
    "Predictive models used for lead scoring, churn risk, and pipeline quality across GTM",
    "A full predictive intelligence layer: deal scoring, churn prediction, and DG campaign modeling integrated into daily GTM operations"
  ]
},
{
  id: 10012, pillar: 10, type: "scale",
  title: "How actionable are your GTM dashboards, and when a dashboard shows a problem, is there a clear owner and next action?",
  options: [
    "Dashboards exist but are not reviewed or acted upon",
    "Dashboards are reviewed but they generate discussion rather than decisions",
    "Most metrics have owners but action follow-through is inconsistent",
    "Dashboards drive documented actions with owners and deadlines reviewed each week",
    "Dashboards are decision tools: every metric has an owner, a threshold, and a documented playbook for when the threshold is breached"
  ]
},
{
  id: 10013, pillar: 10, type: "scale",
  title: "How data-driven are your GTM performance reviews, and what percentage of time is spent on analysis versus anecdote?",
  options: [
    "Performance reviews are anecdote-driven: data is rarely presented or questioned",
    "Data is present in reviews but discussion is dominated by narrative and intuition",
    "Most reviews use data but depth of analysis varies significantly by manager",
    "A standard data framework governs all performance reviews with pre-read materials required",
    "Performance reviews are fully data-led: standardized pre-read, structured analysis, and decision log produced in every session"
  ]
},
{
  id: 10014, pillar: 10, type: "scale",
  title: "How systematically do you identify performance trends, and how quickly do trend signals reach the people who can act on them?",
  options: [
    "Trends are identified after they have already become problems",
    "Trend awareness is informal: spotted by experienced leaders in meetings",
    "Some trend monitoring exists but signal-to-action speed is slow",
    "Trend alerts are automated and delivered to owners within a defined time window",
    "A proactive trend intelligence system: signals detected algorithmically, delivered to owners in real time, and response time tracked as a governance metric"
  ]
},
{
  id: 10015, pillar: 10, type: "scale",
  title: "How systematically do you benchmark your GTM performance against external industry standards, and when did you last use benchmarks to challenge a decision?",
  options: [
    "No benchmarking: we evaluate performance in isolation",
    "Leadership has a rough sense of industry averages but no formal comparison",
    "Annual benchmark comparison happens but it rarely changes how we operate",
    "External benchmarks are incorporated into quarterly planning and performance reviews",
    "A continuous benchmarking program: external data sources integrated into dashboards, used to challenge assumptions in planning and reviewed with the board"
  ]
},
{
  id: 10016, pillar: 10, type: "scale",
  title: "How accurately can you predict next quarter's revenue, and what is the margin of error in your last four quarterly forecasts?",
  options: [
    "Revenue prediction is impossible: variance is over 25%",
    "Forecast accuracy is low: variance is typically 15-25%",
    "Forecast is sometimes accurate but within-quarter variance is significant",
    "Forecast accuracy within 10% in most quarters with a documented variance review process",
    "Forecast accuracy within 5% consistently: four-quarter track record documented and reviewed with the board"
  ]
},
{
  id: 10017, pillar: 10, type: "scale",
  title: "How systematically do you use performance data to reallocate GTM resources, budget, headcount, or focus, during the year?",
  options: [
    "Resources are set in annual planning and not adjusted during the year",
    "Reallocation happens occasionally but based on executive preference rather than data",
    "Mid-year reviews exist but data rarely drives meaningful resource shifts",
    "A documented mid-year resource review uses performance data to reallocate budget and focus",
    "A continuous performance-based resource allocation model: underperforming motions are defunded and high-ROI motions are scaled in real time"
  ]
},
{
  id: 10018, pillar: 10, type: "scale",
  title: "How accurately do you calculate LTV, and does your LTV model account for expansion, churn, and margin by segment?",
  options: [
    "LTV is not calculated: we estimate value based on ARR alone",
    "A basic LTV estimate exists but it does not account for expansion or margin",
    "LTV is calculated at an aggregate level but not segmented or updated regularly",
    "LTV is calculated by segment, incorporating retention, expansion, and gross margin",
    "A full LTV model: segment-level, updated quarterly, incorporating expansion probability, churn risk, and margin, and used in ICP scoring and CAC target-setting"
  ]
},
{
  id: 10019, pillar: 10, type: "scale",
  title: "How directly do data and insights drive GTM performance improvement, and can you cite a specific change made in the last quarter based on data?",
  options: [
    "Data does not drive changes: performance reviews are informational only",
    "Data occasionally surfaces insights but they rarely lead to documented action",
    "Data influences some decisions but follow-through is inconsistent",
    "A quarterly data-driven improvement process produces documented actions with owners",
    "Data-driven improvement is a cultural norm: every quarter produces documented changes traceable to a specific data signal, with outcome tracking"
  ]
},
{
  id: 10020, pillar: 10, type: "scale",
  title: "How early and reliably do data signals identify churn risk, and what is your average lead time between risk detection and customer cancellation?",
  options: [
    "Churn is detected at or after the cancellation call: no early warning exists",
    "Some signals are noticed in the final 30 days before churn",
    "Risk signals are detected 60-90 days before churn in some accounts",
    "A health scoring model identifies most at-risk accounts 90 days or more before churn",
    "A predictive churn system: risk detected 120 or more days before cancellation, intervention triggered automatically, and save rate tracked by risk tier"
  ]
},

/* ===========================================================
   PILLAR 11 — ENABLEMENT (20 QUESTIONS)
   =========================================================== */

{
  id: 11001, pillar: 11, type: "scale",
  title: "How structured and consistently delivered is your onboarding program for new GTM hires, and how is completion and quality tracked?",
  options: [
    "No structured onboarding: new hires learn through observation and trial",
    "An informal onboarding process exists but coverage and quality vary by manager",
    "An onboarding curriculum exists but completion and quality are not systematically tracked",
    "A structured onboarding program with milestone completion tracked per hire",
    "A fully governed onboarding system: curriculum, milestones, manager sign-offs, and 30-60-90 day performance reviewed for every new hire"
  ]
},
{
  id: 11002, pillar: 11, type: "scale",
  title: "How efficiently do new GTM hires ramp to full productivity, and how do you track ramp time versus target?",
  options: [
    "Ramp time is not tracked: we do not know how long it takes new hires to contribute",
    "Ramp expectations exist informally but actual time-to-productivity is not measured",
    "Ramp time is tracked but not compared against a defined target or benchmark",
    "Time-to-productivity tracked per cohort against a defined target, reviewed quarterly",
    "A ramp efficiency model: time-to-first-deal and time-to-quota tracked per hire, benchmarked against prior cohorts, and driving onboarding improvement"
  ]
},
{
  id: 11003, pillar: 11, type: "scale",
  title: "How consistently does your team receive structured skill development, and is learning tied to observed performance gaps?",
  options: [
    "No ongoing training: development is self-directed and unsupported",
    "Ad-hoc training occurs when a problem surfaces, not proactively",
    "A training calendar exists but content is generic and not tied to performance data",
    "Skill development is linked to rep performance gaps identified in coaching and call reviews",
    "A performance-linked learning system: skill gaps identified weekly in coaching, training prescribed accordingly, and improvement tracked against deal outcomes"
  ]
},
{
  id: 11004, pillar: 11, type: "scale",
  title: "How complete, current, and used are your sales playbooks, and how do you know reps actually reference them in active deals?",
  options: [
    "No sales playbooks: reps rely on experience and personal judgment",
    "Playbooks exist but were last updated over a year ago and are rarely accessed",
    "Playbooks are available but usage in active deals is not tracked",
    "Playbooks are updated quarterly and usage is tracked through the enablement platform",
    "A live playbook system: updated quarterly, usage tracked per deal stage, and playbook-to-win-rate correlation reviewed monthly"
  ]
},
{
  id: 11005, pillar: 11, type: "scale",
  title: "How easily can GTM reps find and use the enablement content they need, and how do you measure content accessibility?",
  options: [
    "Enablement content is scattered across multiple systems with no central access point",
    "A central repository exists but search and navigation are poor",
    "Content is organized but reps frequently escalate to find what they need",
    "A well-organized enablement platform where reps can find content by role and deal stage",
    "A structured, searchable enablement platform: content indexed by role, stage, and persona, adoption tracked, and search success rate reviewed quarterly"
  ]
},
{
  id: 11006, pillar: 11, type: "scale",
  title: "How specifically is enablement content tailored to each GTM role, AE, SDR, CS, AM, rather than produced as generic shared content?",
  options: [
    "All enablement content is generic: roles are not differentiated",
    "Some role-specific content exists but gaps are significant",
    "Primary roles have dedicated content but secondary roles are underserved",
    "Role-specific enablement tracks exist for all primary GTM roles",
    "A role-specific enablement architecture: each GTM role has a dedicated curriculum, assessed independently, and updated based on role-specific performance data"
  ]
},
{
  id: 11007, pillar: 11, type: "scale",
  title: "How rigorously are reps certified before they engage with live prospects, and what happens when a rep fails certification?",
  options: [
    "No certification process: reps begin selling from day one without assessment",
    "An informal sign-off exists but standards are inconsistent across managers",
    "A certification checklist exists but completion is tracked informally",
    "A structured certification process with pass/fail criteria and remediation paths",
    "A rigorous certification gate: reps cannot engage with live prospects without passing, failed attempts trigger structured remediation, and certification rates are tracked"
  ]
},
{
  id: 11008, pillar: 11, type: "scale",
  title: "How structured and consistent is the sales coaching delivered by your managers, and how is coaching quality tracked?",
  options: [
    "Coaching is entirely informal: managers give feedback when asked",
    "Coaching happens in 1:1s but without a defined framework or cadence",
    "A coaching framework exists but quality and consistency vary significantly by manager",
    "A standardized coaching framework applied consistently across all managers, with session outputs documented",
    "A coaching operating system: call reviews, skill scoring, session documentation, and coaching impact tracked against rep performance weekly"
  ]
},
{
  id: 11009, pillar: 11, type: "scale",
  title: "How comprehensive and current is your sales and marketing collateral library, and do reps use it in active deals?",
  options: [
    "Collateral is minimal, outdated, or not used in deals",
    "A collateral set exists but most reps use their own materials",
    "Standard collateral is available but usage in live deals is not measured",
    "A current collateral library organized by deal stage and use case, with adoption tracked",
    "A strategic collateral system: deal-stage indexed, version-controlled, and adoption correlated with win rate quarterly"
  ]
},
{
  id: 11010, pillar: 11, type: "scale",
  title: "Is Time-to-First-Deal tracked as a primary ramp KPI for new hires, and how does it compare to your defined target?",
  options: [
    "Time-to-First-Deal is not tracked",
    "It is tracked informally but not compared against a defined target",
    "It is tracked and reported but not used to drive onboarding or coaching decisions",
    "Tracked formally as a KPI, compared against a target, and reviewed in new hire retrospectives",
    "A governed ramp KPI: Time-to-First-Deal tracked per hire, benchmarked quarterly, and driving onboarding curriculum updates"
  ]
},
{
  id: 11011, pillar: 11, type: "scale",
  title: "How systematically do you measure whether enablement programs produce measurable improvement in deal outcomes?",
  options: [
    "Enablement effectiveness is not measured: programs are run and assumed to work",
    "Participation is tracked but performance impact is not assessed",
    "Some correlation between training completion and performance is observed informally",
    "Enablement programs are evaluated for skill improvement and win rate impact quarterly",
    "An enablement ROI model: program completion, skill score improvement, and deal outcome correlation tracked and reviewed monthly"
  ]
},
{
  id: 11012, pillar: 11, type: "scale",
  title: "How consistently and frequently are enablement materials updated to reflect product changes, market shifts, and competitive moves?",
  options: [
    "Materials are rarely updated: content is stale within months of creation",
    "Updates happen reactively when something is clearly wrong",
    "A rough annual update cycle exists but currency is inconsistent across assets",
    "A defined quarterly update cycle for all core enablement assets with owner accountability",
    "A continuous update system: materials reviewed on a defined cadence, triggered by product releases and competitive changes, with version control and expiry dates"
  ]
},
{
  id: 11013, pillar: 11, type: "scale",
  title: "How comprehensive and current is your competitive enablement, and can reps handle common competitive objections without specialist support?",
  options: [
    "No competitive enablement: reps improvise competitive responses",
    "Battlecards exist but are outdated and not consistently used",
    "Competitive materials are updated occasionally but rep preparedness is inconsistent",
    "A quarterly competitive enablement update with rep training and certification",
    "A live competitive intelligence program: battlecards updated monthly, rep handling tested in coaching, and competitive win rate tracked quarterly"
  ]
},
{
  id: 11014, pillar: 11, type: "scale",
  title: "How specifically are your reps trained and rehearsed to handle the most common deal-blocking objections?",
  options: [
    "No objection handling training: reps develop their own responses over time",
    "Common objections are covered in onboarding but not refreshed or practiced",
    "An objection guide exists but is not tied to live deal review or role-play",
    "Objection handling trained in onboarding, reinforced in coaching sessions, and updated from win/loss data",
    "A structured objection training system: common objections by segment catalogued, responses tested in live coaching, and handling effectiveness tracked by objection type"
  ]
},
{
  id: 11015, pillar: 11, type: "scale",
  title: "How directly does your enablement function support active deal execution, and can reps access relevant content at the deal stage where they need it?",
  options: [
    "Enablement is entirely pre-sale: no support exists for in-flight deals",
    "Reps can access general materials but deal-specific guidance is not available",
    "Some deal-stage enablement exists but it is inconsistently organized and accessed",
    "Deal-stage indexed enablement is available and actively referenced in deal reviews",
    "A deal execution enablement system: stage-specific content, tools, and escalation paths organized in the CRM and reviewed for usage monthly"
  ]
},
{
  id: 11016, pillar: 11, type: "scale",
  title: "How deeply do your GTM reps understand the product, and can they handle technical questions without involving product or engineering?",
  options: [
    "Reps have superficial product knowledge: most technical questions require escalation",
    "Some reps handle technical questions well but knowledge levels vary widely",
    "Most reps can handle standard questions but complex scenarios require specialist support",
    "Product knowledge is certified and refreshed with each major release",
    "A continuous product mastery program: certification-gated, assessed regularly, and refreshed at each release with rep knowledge scores tracked per quarter"
  ]
},
{
  id: 11017, pillar: 11, type: "scale",
  title: "How closely does the Enablement function collaborate with Sales leadership to ensure content reflects real field needs?",
  options: [
    "Enablement and Sales leadership operate independently: content is produced without field validation",
    "Some coordination happens but it is informal and not on a defined cadence",
    "Enablement and Sales leadership meet occasionally to review content priorities",
    "A monthly Enablement-Sales leadership review governs content priorities and usage feedback",
    "A co-owned enablement program: Sales leadership reviews and signs off on all major content, and field feedback drives quarterly curriculum updates"
  ]
},
{
  id: 11018, pillar: 11, type: "scale",
  title: "How systematically do you use real-world scenarios and structured role-play to build rep skills before they face buyers?",
  options: [
    "No role-play or scenario practice: reps learn through live deal experience",
    "Occasional role-play happens in training but is not structured or assessed",
    "Role-play is part of onboarding but not consistently used in ongoing coaching",
    "Structured role-play with defined scenarios and scoring used in onboarding and quarterly refreshers",
    "An immersive practice system: recorded role-plays reviewed by managers, scored against rubrics, and used to track skill development over time"
  ]
},
{
  id: 11019, pillar: 11, type: "scale",
  title: "How directly and measurably does your enablement function contribute to improvements in win rate, ramp time, and pipeline consistency?",
  options: [
    "Enablement contribution to performance is not measured or tracked",
    "Anecdotal evidence suggests enablement helps but no data supports the claim",
    "Some leading indicators of enablement impact are tracked but not formally reviewed",
    "Enablement ROI is reviewed quarterly: ramp time, win rate by training completion, and playbook usage tracked",
    "Enablement is a measured revenue function: win rate, ramp time, and deal velocity improvements attributed to enablement programs and reviewed monthly with Sales leadership"
  ]
},
{
  id: 11020, pillar: 11, type: "scale",
  title: "How consistently and swiftly does your organization manage underperforming reps, and what is the average time from identified underperformance to resolution?",
  options: [
    "Underperformance is tolerated indefinitely: no systematic performance management exists",
    "Underperformers are eventually addressed but the process is inconsistent and slow",
    "A formal PIP process exists but activation is delayed and outcomes are unpredictable",
    "Underperformance is identified within a quarter and addressed through a documented improvement plan within 30 days",
    "Leading indicators flag underperformance early, improvement plans activate within 30 days, and outcomes are tracked consistently"
  ]
},

/* ===========================================================
   PILLAR 12 — ALIGNMENT & GOVERNANCE (20 QUESTIONS)
   =========================================================== */

{
  id: 12001, pillar: 12, type: "scale",
  title: "How clearly does GTM leadership communicate priorities, and when two teams have conflicting priorities, how is that resolved?",
  options: [
    "Priorities are unclear or contradictory: teams frequently operate at cross-purposes",
    "Leadership communicates direction broadly but conflicts are resolved ad-hoc",
    "A priority framework exists but its application in conflict situations is inconsistent",
    "A documented prioritization hierarchy used to resolve conflicts in leadership forums",
    "A governed priority framework: explicit trade-off criteria, escalation path, and conflict resolution process reviewed quarterly by the GTM leadership team"
  ]
},
{
  id: 12002, pillar: 12, type: "scale",
  title: "When leadership meets to review GTM performance, how much time is spent debating data definitions versus actually solving problems?",
  options: [
    "Most meeting time is consumed by data disputes: no single source of truth exists",
    "Data debates frequently derail discussions and delay decisions",
    "Data is mostly agreed upon but occasional disputes slow reviews",
    "Data definitions are locked: meetings focus on interpretation and decisions rather than number disputes",
    "All leadership forums operate from a single governed data source: data debates are absent and 100% of time is spent on decision-making"
  ]
},
{
  id: 12003, pillar: 12, type: "scale",
  title: "How rigorously are GTM teams held accountable to the targets they committed to, and what happens when a commitment is missed?",
  options: [
    "No accountability mechanism: missed targets are explained away without consequence",
    "Missed targets are discussed informally but structured accountability is absent",
    "A review process exists but accountability is inconsistent across leaders",
    "A formal accountability review for missed targets with documented root cause and corrective action",
    "A disciplined accountability system: missed targets trigger a documented review within two weeks, corrective actions tracked, and repeat misses escalated"
  ]
},
{
  id: 12004, pillar: 12, type: "scale",
  title: "How effectively does your GTM operating model enable cross-functional collaboration, and where do the biggest coordination breakdowns occur?",
  options: [
    "Teams operate in silos: cross-functional coordination is the exception, not the rule",
    "Some cross-functional meetings exist but they produce little coordination in practice",
    "Collaboration works in structured forums but breaks down in day-to-day execution",
    "Cross-functional coordination governed by defined interfaces and reviewed in monthly GTM forums",
    "A fully integrated operating model: handoffs, interfaces, and collaboration protocols documented, owned, and reviewed quarterly with measurable coordination KPIs"
  ]
},
{
  id: 12005, pillar: 12, type: "scale",
  title: "How reliably does your GTM operating cadence hold, and what percentage of scheduled meetings are cancelled or run without a pre-read?",
  options: [
    "Meetings are frequently cancelled or held without preparation: the cadence is unreliable",
    "The cadence runs but attendance and preparation are inconsistent",
    "Meetings mostly hold but pre-reads and documentation standards are not enforced",
    "The operating cadence is upheld consistently with pre-reads and documented outputs",
    "A non-negotiable operating rhythm: attendance, pre-read, and output standards enforced, with cadence health reviewed monthly by the COO or CRO"
  ]
},
{
  id: 12006, pillar: 12, type: "scale",
  title: "If you asked five frontline GTM reps right now to name the company's top three GTM priorities for this quarter, how many would give the same answer?",
  options: [
    "Fewer than two would agree: priorities are not known at the frontline",
    "Two or three might align but with significant variation in how they describe them",
    "Most would name similar priorities but without precise language or ranking",
    "Four or five would give the same answer: priorities are communicated and tested in team meetings",
    "All five would give identical answers: priority cascade is verified through a structured quarterly frontline comprehension check"
  ]
},
{
  id: 12007, pillar: 12, type: "scale",
  title: "How clearly owned are GTM initiatives, and does each initiative have a single accountable executive sponsor?",
  options: [
    "Initiatives have no formal owner: everyone and no one is responsible",
    "Ownership is assigned informally but authority and accountability are unclear",
    "Initiative owners exist but sponsorship at the executive level is inconsistent",
    "Each GTM initiative has a documented owner with defined authority and accountability",
    "A formal initiative governance model: single accountable owner, executive sponsor, defined success metrics, and monthly status reviewed in the GTM leadership forum"
  ]
},
{
  id: 12008, pillar: 12, type: "scale",
  title: "How quickly and predictably are operational blockers escalated and resolved, and does your escalation path actually lead to resolution?",
  options: [
    "No escalation path: blockers accumulate until they become crises",
    "Blockers are raised informally but resolution is slow and unpredictable",
    "An escalation process exists but is rarely used or trusted",
    "A defined escalation path with response time SLAs and documented resolution tracking",
    "A governed blocker resolution system: escalation triggers, response SLAs, and resolution outcomes tracked monthly in the operating review"
  ]
},
{
  id: 12009, pillar: 12, type: "scale",
  title: "How consistently do your GTM governance meetings produce clear decisions, documented owners, and followed-through actions?",
  options: [
    "Meetings produce discussion but no documented decisions or owners",
    "Some decisions are made in meetings but follow-through is not systematically tracked",
    "Decisions are documented but action tracking is inconsistent between meetings",
    "All governance meetings produce a decision log with owners, deadlines, and progress reviewed at the next session",
    "A disciplined governance operating system: every meeting produces a structured decision log, actions are reviewed at the start of the next meeting, and completion rates tracked"
  ]
},
{
  id: 12010, pillar: 12, type: "scale",
  title: "How systematic and consistent is your performance management process, and how long does it take from identifying underperformance to taking documented action?",
  options: [
    "Performance management is entirely ad-hoc: no systematic process exists",
    "Performance issues are addressed informally and inconsistently across managers",
    "A formal PIP process exists but activation is delayed by weeks or months",
    "Performance issues trigger a formal review within 30 days with documented improvement criteria",
    "A governed performance management system: underperformance identified via leading indicators, formal review within two weeks, and outcomes tracked consistently"
  ]
},
{
  id: 12011, pillar: 12, type: "scale",
  title: "In the last quarter, how many cross-functional GTM initiatives were delayed, blocked, or failed because of unclear ownership or interface gaps between teams?",
  options: [
    "Multiple major initiatives were delayed due to ownership ambiguity: this is a recurring pattern",
    "Several smaller initiatives were slowed by unclear interfaces but nothing was formally addressed",
    "One or two delays occurred and were resolved informally",
    "Ownership gaps are identified in the quarterly retrospective and addressed before the next planning cycle",
    "Cross-functional ownership gaps are tracked as a governance metric: frequency, resolution time, and root cause reviewed quarterly"
  ]
},
{
  id: 12012, pillar: 12, type: "scale",
  title: "How directly does GTM investment and headcount allocation reflect the strategic priorities in your GTM plan?",
  options: [
    "Investment decisions are driven by inertia or internal politics, not strategic priorities",
    "Some connection between strategy and resource allocation exists but it is loose",
    "Resource allocation references strategy but significant misalignment persists",
    "Resource allocation decisions are documented and mapped to strategic priorities in planning",
    "A strategy-to-investment governance model: every significant allocation decision documented against the strategic priority it serves, reviewed quarterly"
  ]
},
{
  id: 12013, pillar: 12, type: "scale",
  title: "How structured and action-driven are the feedback loops between frontline GTM teams and executive leadership?",
  options: [
    "No structured feedback loop: executives hear from the front line through escalations",
    "Frontline feedback reaches leadership informally and inconsistently",
    "A feedback mechanism exists but outputs are not reliably acted on",
    "A structured quarterly frontline-to-executive feedback process with documented actions",
    "A continuous bi-directional feedback system: frontline signals reviewed monthly, executive responses documented, and action completion tracked"
  ]
},
{
  id: 12014, pillar: 12, type: "scale",
  title: "How defined is your process for making strategic adjustments, and what triggers a strategy review between annual planning cycles?",
  options: [
    "No defined process: strategy changes happen reactively when something breaks",
    "Leadership discusses strategy adjustments informally when problems emerge",
    "A broad strategy review is triggered by major events but criteria are not documented",
    "Defined performance thresholds trigger a structured strategy review with a documented process",
    "A governed strategy adaptation protocol: defined triggers, review process, and documentation requirements for all between-cycle adjustments"
  ]
},
{
  id: 12015, pillar: 12, type: "scale",
  title: "How effectively does your GTM operating rhythm create consistent planning, execution, and review loops across the year?",
  options: [
    "No operating rhythm: planning, execution, and review happen inconsistently",
    "A rhythm exists on paper but is frequently disrupted or ignored in practice",
    "Planning and review loops mostly hold but execution consistency is variable",
    "A defined annual GTM operating rhythm with quarterly planning, monthly reviews, and weekly execution cadences",
    "A sacred operating calendar: annual, quarterly, monthly, and weekly cadences documented, upheld, and reviewed for effectiveness annually"
  ]
},
{
  id: 12016, pillar: 12, type: "scale",
  title: "How explicitly do your GTM governance mechanisms connect team-level priorities to company-level strategy?",
  options: [
    "No connection: team priorities are set independently of company strategy",
    "A loose connection exists in theory but breaks down in practice",
    "GTM priorities reference company strategy in planning but execution diverges",
    "GTM priorities are mapped to company strategy objectives reviewed in quarterly governance",
    "A fully integrated strategy cascade: company objectives, GTM priorities, team targets, and individual goals all linked and reviewed for alignment quarterly"
  ]
},
{
  id: 12017, pillar: 12, type: "scale",
  title: "How clear and actively used are your GTM escalation paths, and can any team member describe how to escalate a major issue right now?",
  options: [
    "No formal escalation paths: issues are handled informally or not at all",
    "Escalation paths exist but are not widely known or trusted",
    "Escalation paths are documented but usage is inconsistent",
    "Escalation paths are documented, trained, and consistently referenced when blockers arise",
    "A governed escalation system: paths are documented, tested annually, and usage rates tracked as a health metric for organizational transparency"
  ]
},
{
  id: 12018, pillar: 12, type: "scale",
  title: "In the last two quarters, how many significant GTM risks or misses surfaced at executive level BEFORE they became a revenue problem, and who surfaced them?",
  options: [
    "Significant misses were always discovered at the revenue impact stage: frontline did not escalate early",
    "Occasionally risks were surfaced early but by senior leaders, not frontline teams",
    "A few early escalations happened but the pattern is inconsistent",
    "Multiple early escalations came from frontline teams and were addressed before revenue impact",
    "Early risk escalation is a tracked metric: frontline-sourced early warnings are counted, recognized publicly, and the ratio of early vs late detection is reviewed quarterly"
  ]
},
{
  id: 12019, pillar: 12, type: "scale",
  title: "What percentage of action items from your last three GTM leadership reviews were completed on time, by the owner, by the agreed deadline?",
  options: [
    "We do not track action item completion from leadership reviews",
    "Action items are logged but completion is rarely reviewed at the next meeting",
    "Roughly half of action items are completed on time: the rest are carried forward repeatedly",
    "Over 70% of action items are completed on time, reviewed at the start of each meeting",
    "Action completion rate is a governance health metric: tracked per owner, reported to the CRO monthly, and below-threshold completion triggers an escalation review"
  ]
},
{
  id: 12020, pillar: 12, type: "scale",
  title: "How clearly and accurately does frontline intelligence reach executive leadership, and what mechanisms prevent signal distortion between levels?",
  options: [
    "Frontline intelligence is heavily filtered: executives see a curated version of reality",
    "Significant signal distortion occurs between frontline and executive level",
    "Information flows reasonably well but some filtering and delay is common",
    "Structured reporting and direct executive touchpoints with frontline ensure low distortion",
    "A radical transparency architecture: structured skip-levels, direct frontline data feeds, and distortion checks built into the governance operating model"
  ]
}

]; // END QUESTIONS ARRAY

window.QUESTIONS = QUESTIONS;
