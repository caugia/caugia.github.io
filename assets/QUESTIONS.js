/* ===========================================================
   QUESTIONS — MASTER QUESTION ENGINE v2.0 (FINAL)
   Refined for:
   1. User Experience (Less typing, more selecting)
   2. Data Quality (Removed duplicates)
   3. Sharpness (Proof-based questions instead of opinion)
   =========================================================== */

const QUESTIONS = [

/* ===========================================================
   PILLAR 0 — CONTEXT (25 QUESTIONS)
   Optimized: Reduced manual entry, focused on hard metrics.
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
    { name: "website", label: "Company website" },
    { name: "total_employees", label: "Total Employees (FTE equivalent)" },
    { name: "year_founded", label: "Year Founded (YYYY)" }
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
    { name: "pricing_model", label: "Pricing Model (e.g. Flat, Per Seat, Usage-based)" }
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
    { name: "expansion_pct", label: "% of New ARR from Upsell / Expansion" }
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
    { name: "primary_loss_reason", label: "Primary lost reason (e.g. Budget, Competition)" },
    { name: "revenue_concentration", label: "% of Revenue from Top 10 Customers" }
  ]
},

{
  id: 6,
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
  id: 7,
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
  id: 8,
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
  id: 9,
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
  id: 10,
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
  id: 11,
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
  id: 12,
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
  id: 13,
  pillar: 0,
  type: "text",
  title: "Primary Geographic Market(s)"
},

/* REPLACED OPEN TEXT WITH MULTIPLE CHOICE FOR BETTER DATA */

{
  id: 14,
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
  id: 15,
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
  id: 16,
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
  id: 17,
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
  id: 18,
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
  id: 19,
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
  id: 20,
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
  id: 21,
  pillar: 0,
  type: "radio",
  title: "How would you describe your product complexity?",
  options: ["Simple / Plug & Play", "Moderately complex", "Complex / Configurable", "Highly complex / Custom"]
},

{
  id: 22,
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
  id: 23,
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

/* CRITICAL: CURRENCY SELECTION FOR REPORT GENERATION */
{
  id: 24, 
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

/* KEEP ONE OPEN TEXT FOR NUANCE */
{
  id: 25,
  pillar: 0,
  type: "textarea",
  title: "Anything else specific we should know about your context?"
},

/* ===========================================================
   PILLAR 1 — GTM STRATEGY & LEADERSHIP (20 QUESTIONS)
   =========================================================== */

{
  id: 1001, pillar: 1, type: "scale",
  title: "We have a clear written GTM strategy.",
  options: ["No documented strategy", "Basic informal strategy", "Solid documented strategy", "Strong comprehensive strategy", "Fully integrated strategic plan"]
},
{
  id: 1002, pillar: 1, type: "scale",
  title: "We have explicitly defined which market segments we do NOT serve.",
  options: ["No exclusion defined", "Vague boundaries", "Some exclusions", "Clear boundaries", "Highly disciplined focus"]
},
{
  id: 1003, pillar: 1, type: "scale",
  title: "Our GTM strategy defines clear market priorities.",
  options: ["No priorities", "Vague priorities", "Solid focus", "Strong prioritization", "Highly disciplined strategy"]
},
{
  id: 1004, pillar: 1, type: "scale",
  title: "We have a clear GTM roadmap for the next 12-18 months.",
  options: ["No roadmap", "Basic quarterly plans", "Solid roadmap", "Strong roadmap", "Fully detailed strategic roadmap"]
},
{
  id: 1005, pillar: 1, type: "scale",
  title: "Product and GTM strategies are tightly integrated.",
  options: ["Disconnected", "Some integration", "Solid integration", "Strong integration", "Unified Product-GTM strategy"]
},
{
  id: 1006, pillar: 1, type: "scale",
  title: "We set clear GTM goals and track progress systematically.",
  options: ["No tracking", "Informal goals", "Solid structure", "Strong governance", "Best-in-class OS"]
},
{
  id: 1007, pillar: 1, type: "scale",
  title: "Our GTM strategy defines our competitive advantage clearly.",
  options: ["No strategy", "Basic differentiation", "Solid positioning", "Strong advantage", "Highly defensible position"]
},
{
  id: 1008, pillar: 1, type: "scale",
  title: "We prioritize GTM investments based on strategic impact.",
  options: ["No prioritization", "Ad-hoc decisions", "Solid prioritization", "Strong allocation", "Highly disciplined strategy"]
},
{
  id: 1009, pillar: 1, type: "scale",
  title: "We understand which GTM motions drive the most revenue.",
  options: ["No insight", "Basic understanding", "Solid understanding", "Data-driven insight", "Deep motion intelligence"]
},
{
  id: 1010, pillar: 1, type: "scale",
  title: "Our GTM strategy accounts for market changes and trends.",
  options: ["Static strategy", "Occasional updates", "Solid adaptability", "Dynamic strategy", "Highly adaptive planning"]
},
{
  id: 1011, pillar: 1, type: "scale",
  title: "We have a clear go-to-market playbook by segment or persona.",
  options: ["No playbooks", "Basic playbooks", "Solid playbooks", "Tailored playbooks", "Highly refined system"]
},
{
  id: 1012, pillar: 1, type: "scale",
  title: "Our GTM strategy is documented in a single 'Source of Truth' accessible to all.",
  options: ["No documentation", "Scattered docs", "Central doc exists", "Widely accessed", "Living strategic OS"]
},
{
  id: 1013, pillar: 1, type: "scale",
  title: "Our GTM strategy addresses both new customer acquisition and expansion.",
  options: ["No balance", "Acquisition only", "Solid dual focus", "Strong balance", "Optimized dual engine"]
},
{
  id: 1014, pillar: 1, type: "scale",
  title: "We test and validate new GTM approaches before scaling.",
  options: ["No testing", "Occasional pilots", "Solid testing", "Strong validation", "Systematic test-and-scale"]
},
{
  id: 1015, pillar: 1, type: "scale",
  title: "Our GTM strategy informs hiring and capacity planning.",
  options: ["No connection", "Weak connection", "Solid connection", "Strategic hiring", "Integrated talent strategy"]
},
{
  id: 1016, pillar: 1, type: "scale",
  title: "We understand trade-offs between different GTM motions.",
  options: ["No clarity", "Basic understanding", "Solid understanding", "Strong analysis", "Deep strategic intelligence"]
},
{
  id: 1017, pillar: 1, type: "scale",
  title: "Our GTM strategy is based on validated market insights.",
  options: ["Opinion-based", "Some validation", "Solid insights", "Data validation", "Insight-driven strategy"]
},
{
  id: 1018, pillar: 1, type: "scale",
  title: "We revisit and refine our GTM strategy regularly.",
  options: ["Never", "Rarely", "Annually", "Quarterly", "Continuous refinement"]
},
{
  id: 1019, pillar: 1, type: "scale",
  title: "Our GTM strategy drives decision-making across the company.",
  options: ["Not used", "Occasional", "Solid influence", "Strong driver", "Central to all decisions"]
},
{
  id: 1020, pillar: 1, type: "scale",
  title: "Our strategy allows us to charge a premium over competitors.",
  options: ["No pricing power", "Low power", "Some power", "Strong power", "Market leading power"]
},

/* ===========================================================
   PILLAR 2 — MARKET INTELLIGENCE (20 QUESTIONS)
   =========================================================== */

{
  id: 2001, pillar: 2, type: "scale",
  title: "We have a clearly defined Ideal Customer Profile (ICP).",
  options: ["No ICP", "Basic ICP", "Solid ICP", "Strong ICP", "Fully validated ICP"]
},
{
  id: 2002, pillar: 2, type: "scale",
  title: "We maintain a live list of 'Must-Win' accounts based on data.",
  options: ["No list", "Basic list", "Solid list", "Data-driven list", "Strategic account targeting"]
},
{
  id: 2003, pillar: 2, type: "scale",
  title: "We understand customer needs, pains and buying triggers.",
  options: ["No insight", "Limited research", "Solid insights", "Strong foundation", "Deep customer intelligence"]
},
{
  id: 2004, pillar: 2, type: "scale",
  title: "Our competitive landscape is well understood.",
  options: ["No insight", "Basic understanding", "Solid insight", "Strong analysis", "Deep strategic understanding"]
},
{
  id: 2005, pillar: 2, type: "scale",
  title: "We monitor market trends and competitor moves consistently.",
  options: ["No monitoring", "Occasional", "Solid monitoring", "Strong cadence", "Proactive monitoring"]
},
{
  id: 2006, pillar: 2, type: "scale",
  title: "We understand our buyers' decision criteria.",
  options: ["No insight", "Basic understanding", "Solid understanding", "Strong understanding", "Deep decision intelligence"]
},
{
  id: 2007, pillar: 2, type: "scale",
  title: "We use customer research to shape product and GTM priorities.",
  options: ["No research", "Light research", "Solid insights", "Strong research loop", "Research-driven GTM"]
},
{
  id: 2008, pillar: 2, type: "scale",
  title: "We understand barriers to adoption in our market.",
  options: ["No insight", "Assumptions", "Solid understanding", "Validated insight", "Deep adoption intelligence"]
},
{
  id: 2009, pillar: 2, type: "scale",
  title: "We have clear insight into switching triggers from competitor tools.",
  options: ["No insight", "Basic understanding", "Solid understanding", "Strong insight", "Deep switching intelligence"]
},
{
  id: 2010, pillar: 2, type: "scale",
  title: "We understand economic trends shaping buyer behavior.",
  options: ["No understanding", "Basic", "Solid", "Strong", "Deep macro intelligence"]
},
{
  id: 2011, pillar: 2, type: "scale",
  title: "We segment our market effectively.",
  options: ["No segmentation", "Basic", "Solid", "Strong model", "Strategic segmentation engine"]
},
{
  id: 2012, pillar: 2, type: "scale",
  title: "Our ICP segmentation aligns with revenue potential.",
  options: ["No alignment", "Assumptions", "Solid alignment", "Strong alignment", "Revenue-optimized"]
},
{
  id: 2013, pillar: 2, type: "scale",
  title: "We understand which personas influence deals most.",
  options: ["No insight", "Basic mapping", "Solid insight", "Strong mapping", "Deep multi-persona intelligence"]
},
{
  id: 2014, pillar: 2, type: "scale",
  title: "Our win-loss analysis produces actionable insights.",
  options: ["No program", "Ad-hoc notes", "Solid program", "Strong insights", "Systematic win-loss engine"]
},
{
  id: 2015, pillar: 2, type: "scale",
  title: "We know which customer segments produce the highest LTV.",
  options: ["No insight", "Guesses", "Solid analysis", "Strong insight", "Deep LTV intelligence"]
},
{
  id: 2016, pillar: 2, type: "scale",
  title: "We have strong insight into partner ecosystem dynamics.",
  options: ["No insight", "Basic view", "Solid view", "Strong intelligence", "Deep ecosystem intelligence"]
},
{
  id: 2017, pillar: 2, type: "scale",
  title: "We understand sensitivity to pricing across segments.",
  options: ["No insight", "Basic insight", "Solid insight", "Validated insight", "Deep pricing elasticity"]
},
{
  id: 2018, pillar: 2, type: "scale",
  title: "We track emerging competitors and market disruptors.",
  options: ["No tracking", "Awareness", "Solid monitoring", "Strong tracking", "Deep intelligence network"]
},
{
  id: 2019, pillar: 2, type: "scale",
  title: "Product Roadmap decisions are directly linked to quantified market evidence.",
  options: ["Not linked", "Weak link", "Solid link", "Strong link", "Evidence-based roadmap"]
},
{
  id: 2020, pillar: 2, type: "scale",
  title: "We identify changing buyer needs faster than our competitors.",
  options: ["Slower", "Same speed", "Slightly faster", "Much faster", "Market leading speed"]
},

/* ===========================================================
   PILLAR 3 — PRODUCT MARKETING (20 QUESTIONS)
   =========================================================== */

{
  id: 3001, pillar: 3, type: "scale",
  title: "Our messaging is clear, compelling and communicates value.",
  options: ["Very unclear", "Basic messaging", "Solid messaging", "Strong value messaging", "Compelling messaging engine"]
},
{
  id: 3002, pillar: 3, type: "scale",
  title: "We have clear positioning that differentiates us.",
  options: ["No positioning", "Basic positioning", "Decent positioning", "Strong differentiation", "Highly defensible"]
},
{
  id: 3003, pillar: 3, type: "scale",
  title: "Our value proposition resonates with ICP segments.",
  options: ["No resonance", "Basic resonance", "Solid resonance", "Strong resonance", "Deep validated resonance"]
},
{
  id: 3004, pillar: 3, type: "scale",
  title: "Our product narrative is clear and emotionally engaging.",
  options: ["No narrative", "Basic narrative", "Solid narrative", "Strong narrative", "Highly compelling story"]
},
{
  id: 3005, pillar: 3, type: "scale",
  title: "We tailor messaging effectively across personas.",
  options: ["No personalization", "Basic tailoring", "Solid alignment", "Strong messaging", "Deep persona system"]
},
{
  id: 3006, pillar: 3, type: "scale",
  title: "Sales reps actively use our latest messaging decks without modifying them.",
  options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
},
{
  id: 3007, pillar: 3, type: "scale",
  title: "We have strong insight into what messages win deals.",
  options: ["No insight", "Anecdotal", "Solid insight", "Strong insight", "Validated message intelligence"]
},
{
  id: 3008, pillar: 3, type: "scale",
  title: "We have compelling proof points, case studies and ROI materials.",
  options: ["None", "Basic proof", "Solid library", "Strong ROI content", "Strategic proof engine"]
},
{
  id: 3009, pillar: 3, type: "scale",
  title: "We launch new features with a structured GTM tiering system (Tier 1/2/3).",
  options: ["No process", "Ad-hoc", "Basic process", "Strong process", "Best-in-class launch engine"]
},
{
  id: 3010, pillar: 3, type: "scale",
  title: "We maintain standardized messaging frameworks.",
  options: ["No frameworks", "Basic frameworks", "Solid frameworks", "Strong adoption", "Best-in-class architecture"]
},
{
  id: 3011, pillar: 3, type: "scale",
  title: "We understand which features resonate most with buyers.",
  options: ["No insight", "Basic understanding", "Solid understanding", "Strong intelligence", "Deep buyer intelligence"]
},
{
  id: 3012, pillar: 3, type: "scale",
  title: "Our PMM team influences product roadmap priorities.",
  options: ["No influence", "Limited influence", "Solid influence", "Strong influence", "Deep integration"]
},
{
  id: 3013, pillar: 3, type: "scale",
  title: "We understand blockers that slow product adoption.",
  options: ["No clarity", "Assumption", "Solid insight", "Strong insight", "Deep blocker intelligence"]
},
{
  id: 3014, pillar: 3, type: "scale",
  title: "We support new product launches with strong GTM releases.",
  options: ["No launch motion", "Basic launches", "Solid launches", "Strong launches", "Strategic launch engine"]
},
{
  id: 3015, pillar: 3, type: "scale",
  title: "Our website and collateral communicate value effectively.",
  options: ["Very weak", "Basic", "Solid", "Strong", "Best-in-class"]
},
{
  id: 3016, pillar: 3, type: "scale",
  title: "We maintain strong competitive PMM insights.",
  options: ["None", "Basic monitoring", "Solid monitoring", "Strong analysis", "Strategic competitive PMM"]
},
{
  id: 3017, pillar: 3, type: "scale",
  title: "Our messaging adapts to different buying stages.",
  options: ["No adaptation", "Basic awareness", "Solid messaging", "Strong alignment", "Refined journey messaging"]
},
{
  id: 3018, pillar: 3, type: "scale",
  title: "We produce effective demo and presentation materials.",
  options: ["No materials", "Basic materials", "Solid content", "Strong assets", "Best-in-class demo engine"]
},
{
  id: 3019, pillar: 3, type: "scale",
  title: "Product Marketing is a strategic driver of GTM success.",
  options: ["Not strategic", "Some impact", "Solid impact", "Strong driver", "Strategic PMM engine"]
},
{
  id: 3020, pillar: 3, type: "scale",
  title: "Prospects clearly understand how we differ from competitors after the first call.",
  options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
},

/* ===========================================================
   PILLAR 4 — DEMAND GENERATION (20 QUESTIONS)
   =========================================================== */

{
  id: 4001, pillar: 4, type: "scale",
  title: "We have a clear demand generation strategy.",
  options: ["No strategy", "Basic strategy", "Solid strategy", "Strong strategy", "Strategic DG engine"]
},
{
  id: 4002, pillar: 4, type: "scale",
  title: "Our inbound channels generate high-quality pipeline.",
  options: ["No pipeline", "Low quality", "Solid pipeline", "Strong pipeline", "High-performance inbound"]
},
{
  id: 4003, pillar: 4, type: "scale",
  title: "Our outbound motion generates predictable pipeline.",
  options: ["No outbound", "Weak outbound", "Solid outbound", "Strong outbound", "Predictable outbound system"]
},
{
  id: 4004, pillar: 4, type: "scale",
  title: "Paid media drives efficient pipeline.",
  options: ["No paid media", "Inefficient", "Solid efficiency", "Strong efficiency", "Highly efficient engine"]
},
{
  id: 4005, pillar: 4, type: "scale",
  title: "Our website converts effectively.",
  options: ["Very low CVR", "Low conversion", "Solid conversion", "Strong conversion", "High-performance system"]
},
{
  id: 4006, pillar: 4, type: "scale",
  title: "We execute strong ABM motions.",
  options: ["No ABM", "Basic ABM", "Solid ABM", "Strong ABM", "Strategic ABM"]
},
{
  id: 4007, pillar: 4, type: "scale",
  title: "We have strong lead nurturing.",
  options: ["No nurturing", "Basic nurturing", "Solid nurturing", "Strong nurturing", "Effective nurturing"]
},
{
  id: 4008, pillar: 4, type: "scale",
  title: "We use content effectively to generate demand.",
  options: ["No content", "Weak content", "Solid content", "Strong content engine", "Strategic content system"]
},
{
  id: 4009, pillar: 4, type: "scale",
  title: "We track ROI across channels effectively.",
  options: ["No tracking", "Weak tracking", "Solid tracking", "Strong insight", "Deep ROI intelligence"]
},
{
  id: 4010, pillar: 4, type: "scale",
  title: "Marketing has a revenue quota, not just a lead quota.",
  options: ["No quota", "Lead quota only", "Shadow revenue goal", "Formal revenue quota", "Full revenue accountability"]
},
{
  id: 4011, pillar: 4, type: "scale",
  title: "We have clear SLAs for lead follow-up.",
  options: ["No SLAs", "Weak SLAs", "Solid SLAs", "Strong SLAs", "Predictable lead engine"]
},
{
  id: 4012, pillar: 4, type: "scale",
  title: "We have strong segmentation for personalized demand gen.",
  options: ["No segmentation", "Basic", "Solid", "Strong", "Refined segmentation"]
},
{
  id: 4013, pillar: 4, type: "scale",
  title: "We use data to optimize campaigns continuously.",
  options: ["No optimization", "Basic", "Solid", "Strong", "Scientific optimization"]
},
{
  id: 4014, pillar: 4, type: "scale",
  title: "We generate predictable pipeline coverage.",
  options: ["No predictability", "Low", "Solid", "Strong", "Highly predictive"]
},
{
  id: 4015, pillar: 4, type: "scale",
  title: "We run consistent experiments to improve performance.",
  options: ["No experiments", "Basic", "Solid", "Strong", "Scientific culture"]
},
{
  id: 4016, pillar: 4, type: "scale",
  title: "SDRs provide structured feedback on lead quality back to Marketing weekly.",
  options: ["No feedback", "Ad-hoc complaints", "Occasional feedback", "Structured weekly feedback", "Continuous feedback loop"]
},
{
  id: 4017, pillar: 4, type: "scale",
  title: "We have strong event strategy (webinars, field events).",
  options: ["No strategy", "Weak events", "Solid strategy", "Strong execution", "Strategic event engine"]
},
{
  id: 4018, pillar: 4, type: "scale",
  title: "Demand Gen contributes strategically to revenue planning.",
  options: ["No contribution", "Some contribution", "Solid contribution", "Strong partnership", "Strategic function"]
},
{
  id: 4019, pillar: 4, type: "scale",
  title: "Our DG engine supports efficient scaling.",
  options: ["Not scalable", "Somewhat scalable", "Solid scalability", "Strong scalable engine", "Highly scalable system"]
},
{
  id: 4020, pillar: 4, type: "scale",
  title: "Our CAC (Acquisition Cost) decreases or stays stable as we scale.",
  options: ["Increases significantly", "Increases slightly", "Stays stable", "Decreases slightly", "Decreases significantly"]
},

/* ===========================================================
   PILLAR 5 — SALES EXECUTION (20 QUESTIONS)
   =========================================================== */

{
  id: 5001, pillar: 5, type: "scale",
  title: "We have a clear, documented sales process.",
  options: ["No process", "Basic process", "Solid process", "Strong process", "Structured sales engine"]
},
{
  id: 5002, pillar: 5, type: "scale",
  title: "We qualify deals effectively.",
  options: ["No qualification", "Weak qualification", "Solid qualification", "Strong qualification", "Disciplined qualification"]
},
{
  id: 5003, pillar: 5, type: "scale",
  title: "Our pipeline management is strong.",
  options: ["Very weak", "Weak", "Solid", "Strong", "Predictable system"]
},
{
  id: 5004, pillar: 5, type: "scale",
  title: "Ideally, 90% of deals committed at the start of the month close by month-end.",
  options: ["< 50%", "50-70%", "70-85%", "85-95%", "> 95%"]
},
{
  id: 5005, pillar: 5, type: "scale",
  title: "Reps have strong product knowledge.",
  options: ["Very weak", "Weak", "Solid", "Strong", "Best-in-class expertise"]
},
{
  id: 5006, pillar: 5, type: "scale",
  title: "Reps deliver compelling demos.",
  options: ["Very weak", "Weak", "Solid", "Strong", "Compelling demo engine"]
},
{
  id: 5007, pillar: 5, type: "scale",
  title: "We run strong MEDDIC/BANT or equivalent qualification.",
  options: ["No methodology", "Weak adoption", "Solid adoption", "Strong adoption", "Disciplined system"]
},
{
  id: 5008, pillar: 5, type: "scale",
  title: "We provide consistent sales coaching.",
  options: ["No coaching", "Weak coaching", "Solid coaching", "Strong coaching", "Strategic coaching engine"]
},
{
  id: 5009, pillar: 5, type: "scale",
  title: "We understand why we win and lose deals.",
  options: ["No insight", "Weak insight", "Solid insight", "Strong insight", "Deep intelligence"]
},
{
  id: 5010, pillar: 5, type: "scale",
  title: "We handle objections effectively.",
  options: ["Very weak", "Weak", "Solid", "Strong", "Effective objection-handling"]
},
{
  id: 5011, pillar: 5, type: "scale",
  title: "We run strong enterprise sales motions.",
  options: ["No capability", "Basic capability", "Solid capability", "Strong enterprise selling", "Strategic enterprise engine"]
},
{
  id: 5012, pillar: 5, type: "scale",
  title: "Our sales compensation model drives the right behaviors.",
  options: ["Misaligned", "Weak alignment", "Solid alignment", "Strong alignment", "Aligned comp model"]
},
{
  id: 5013, pillar: 5, type: "scale",
  title: "We manage territories effectively.",
  options: ["No territories", "Weak territories", "Solid territories", "Strong territories", "Strategic territory engine"]
},
{
  id: 5014, pillar: 5, type: "scale",
  title: "We manage pricing and discounting effectively.",
  options: ["Very weak", "Weak", "Solid", "Strong", "Strategic pricing discipline"]
},
{
  id: 5015, pillar: 5, type: "scale",
  title: "Sales reps have access to effective enablement materials.",
  options: ["No enablement", "Weak enablement", "Solid enablement", "Strong enablement", "Strategic enablement engine"]
},
{
  id: 5016, pillar: 5, type: "scale",
  title: "We strictly enforce a 'No CRM data, No Deal commission' policy.",
  options: ["No policy", "Weak enforcement", "Moderate enforcement", "Strong enforcement", "Zero tolerance"]
},
{
  id: 5017, pillar: 5, type: "scale",
  title: "We track rep performance with strong clarity.",
  options: ["No insight", "Weak insight", "Solid insight", "Strong insight", "Granular intelligence"]
},
{
  id: 5018, pillar: 5, type: "scale",
  title: "We manage sales velocity effectively.",
  options: ["No insight", "Weak insight", "Solid insight", "Strong insight", "Optimized velocity"]
},
{
  id: 5019, pillar: 5, type: "scale",
  title: "We remove friction from the sales process proactively.",
  options: ["No removal", "Weak removal", "Solid removal", "Strong removal", "Frictionless environment"]
},
{
  id: 5020, pillar: 5, type: "scale",
  title: "Our Win Rate is consistent across different sales reps (not reliant on heroes).",
  options: ["Highly variable", "Variable", "Somewhat consistent", "Consistent", "Systematic success"]
},

/* ===========================================================
   PILLAR 6 — CUSTOMER SUCCESS & EXPANSION (20 QUESTIONS)
   =========================================================== */

{
  id: 6001, pillar: 6, type: "scale",
  title: "We onboard customers effectively and set them up for early value.",
  options: ["Very weak", "Basic", "Solid", "Strong", "Best-in-class"]
},
{
  id: 6002, pillar: 6, type: "scale",
  title: "We manage customer health proactively.",
  options: ["No health model", "Basic scoring", "Solid model", "Strong management", "Predictive engine"]
},
{
  id: 6003, pillar: 6, type: "scale",
  title: "We understand key drivers of retention and churn.",
  options: ["No insight", "Basic insight", "Solid understanding", "Strong insight", "Deep intelligence"]
},
{
  id: 6004, pillar: 6, type: "scale",
  title: "We run effective QBRs and customer reviews.",
  options: ["No structure", "Inconsistent", "Solid program", "Strong execution", "Strategic engine"]
},
{
  id: 6005, pillar: 6, type: "scale",
  title: "Our CS team collaborates effectively with Product and Sales.",
  options: ["Siloed", "Some collaboration", "Solid collaboration", "Strong collaboration", "Highly aligned"]
},
{
  id: 6006, pillar: 6, type: "scale",
  title: "We identify expansion opportunities proactively.",
  options: ["No motion", "Basic effort", "Solid program", "Strong engine", "Predictive system"]
},
{
  id: 6007, pillar: 6, type: "scale",
  title: "We have a strong renewal motion.",
  options: ["Very weak", "Weak", "Solid", "Strong", "Predictable engine"]
},
{
  id: 6008, pillar: 6, type: "scale",
  title: "We measure customer adoption effectively.",
  options: ["No measurement", "Basic", "Solid", "Strong", "Granular intelligence"]
},
{
  id: 6009, pillar: 6, type: "scale",
  title: "We provide strong customer education and training.",
  options: ["No education", "Basic", "Solid", "Strong", "Best-in-class"]
},
{
  id: 6010, pillar: 6, type: "scale",
  title: "We manage accounts effectively across CS and AM.",
  options: ["No structure", "Weak structure", "Solid structure", "Strong consistency", "Predictable management"]
},
{
  id: 6011, pillar: 6, type: "scale",
  title: "We communicate value to customers regularly.",
  options: ["No communication", "Basic", "Solid", "Strong", "Strategic communication"]
},
{
  id: 6012, pillar: 6, type: "scale",
  title: "We use customer feedback to drive improvements.",
  options: ["No loop", "Weak loop", "Solid usage", "Strong loop", "Strategic insight engine"]
},
{
  id: 6013, pillar: 6, type: "scale",
  title: "Account Managers have dedicated pipeline reviews separate from CS health checks.",
  options: ["Never", "Rarely", "Sometimes", "Often", "Always (Separate motion)"]
},
{
  id: 6014, pillar: 6, type: "scale",
  title: "We manage at-risk accounts proactively.",
  options: ["No management", "Basic", "Solid program", "Strong mitigation", "Predictive system"]
},
{
  id: 6015, pillar: 6, type: "scale",
  title: "We maintain strong CS documentation and processes.",
  options: ["No documentation", "Weak", "Solid", "Strong", "Structured playbook"]
},
{
  id: 6016, pillar: 6, type: "scale",
  title: "We run scalable CS operations.",
  options: ["Not scalable", "Some scalability", "Solid", "Strong", "Highly scalable"]
},
{
  id: 6017, pillar: 6, type: "scale",
  title: "We integrate CS data effectively across systems.",
  options: ["No integration", "Weak", "Solid", "Strong", "Coherent architecture"]
},
{
  id: 6018, pillar: 6, type: "scale",
  title: "Customer Success is a strategic driver of revenue.",
  options: ["Not strategic", "Some role", "Solid role", "Strong function", "Strategic engine"]
},
{
  id: 6019, pillar: 6, type: "scale",
  title: "Our CS function supports efficient and predictable growth.",
  options: ["Not supportive", "Some support", "Solid contribution", "Strong contribution", "Strategic enabler"]
},
{
  id: 6020, pillar: 6, type: "scale",
  title: "Existing customers are our largest source of new leads (Referrals).",
  options: ["No referrals", "Few referrals", "Some referrals", "Strong referral source", "Primary growth driver"]
},

/* ===========================================================
   PILLAR 7 — REVENUE OPERATIONS & SYSTEMS (20 QUESTIONS)
   =========================================================== */

{
  id: 7001, pillar: 7, type: "scale",
  title: "We have strong CRM hygiene and data quality.",
  options: ["Very weak", "Weak", "Solid", "Strong", "Best-in-class"]
},
{
  id: 7002, pillar: 7, type: "scale",
  title: "Our CRM supports our sales process effectively.",
  options: ["Not supportive", "Weak support", "Solid support", "Strong support", "Optimized CRM"]
},
{
  id: 7003, pillar: 7, type: "scale",
  title: "We have documented GTM workflows and processes.",
  options: ["No documentation", "Basic", "Solid", "Strong", "Comprehensive playbook"]
},
{
  id: 7004, pillar: 7, type: "scale",
  title: "We use automation to improve GTM efficiency.",
  options: ["No automation", "Basic", "Solid", "Strong", "Highly automated"]
},
{
  id: 7005, pillar: 7, type: "scale",
  title: "Our tech stack integrates well across systems.",
  options: ["Fragmented", "Weak integration", "Solid integration", "Strong integration", "Coherent architecture"]
},
{
  id: 7006, pillar: 7, type: "scale",
  title: "We have strong lead routing and assignment.",
  options: ["No routing", "Weak routing", "Solid routing", "Strong routing", "Optimized engine"]
},
{
  id: 7007, pillar: 7, type: "scale",
  title: "We manage our tech stack cost-effectively.",
  options: ["Inefficient", "Somewhat inefficient", "Solid efficiency", "Strong efficiency", "Optimized spend"]
},
{
  id: 7008, pillar: 7, type: "scale",
  title: "RevOps supports Sales and Marketing effectively.",
  options: ["Very weak", "Weak", "Solid", "Strong", "Strategic partner"]
},
{
  id: 7009, pillar: 7, type: "scale",
  title: "We have strong GTM cadences (e.g. pipeline reviews, forecasting).",
  options: ["No cadence", "Weak cadence", "Solid cadence", "Strong cadence", "Disciplined rhythm"]
},
{
  id: 7010, pillar: 7, type: "scale",
  title: "We measure and optimize GTM efficiency.",
  options: ["No measurement", "Basic", "Solid", "Strong", "Data-driven efficiency"]
},
{
  id: 7011, pillar: 7, type: "scale",
  title: "We have strong governance around data and process changes.",
  options: ["No governance", "Weak", "Solid", "Strong", "Best-in-class governance"]
},
{
  id: 7012, pillar: 7, type: "scale",
  title: "We manage territories and quotas effectively.",
  options: ["No structure", "Weak structure", "Solid structure", "Strong structure", "Strategic design"]
},
{
  id: 7013, pillar: 7, type: "scale",
  title: "RevOps collaborates cross-functionally with GTM teams.",
  options: ["Siloed", "Limited", "Solid", "Strong", "Integrated function"]
},
{
  id: 7014, pillar: 7, type: "scale",
  title: "We have strong reporting and dashboards.",
  options: ["No reporting", "Weak reporting", "Solid reporting", "Strong dashboards", "Best-in-class BI"]
},
{
  id: 7015, pillar: 7, type: "scale",
  title: "Our tech stack provides a 'Single Customer View' without manual data stitching.",
  options: ["Impossible", "Very manual", "Mostly stitched", "Automated view", "Perfect single view"]
},
{
  id: 7016, pillar: 7, type: "scale",
  title: "RevOps drives process consistency across teams.",
  options: ["No consistency", "Weak", "Solid", "Strong", "Standardized operations"]
},
{
  id: 7017, pillar: 7, type: "scale",
  title: "We run effective pipeline and forecast reviews.",
  options: ["No reviews", "Weak reviews", "Solid reviews", "Strong reviews", "Disciplined governance"]
},
{
  id: 7018, pillar: 7, type: "scale",
  title: "We manage GTM tool adoption effectively.",
  options: ["Very weak", "Weak", "Solid", "Strong", "Strategic enablement"]
},
{
  id: 7019, pillar: 7, type: "scale",
  title: "RevOps is a strategic GTM enabler.",
  options: ["Not strategic", "Some role", "Solid role", "Strong enabler", "Strategic function"]
},
{
  id: 7020, pillar: 7, type: "scale",
  title: "New GTM tools are implemented and adopted in weeks, not months.",
  options: ["> 6 months", "3-6 months", "1-3 months", "< 1 month", "Weeks (Agile ops)"]
},

/* ===========================================================
   PILLAR 8 — PRICING & PACKAGING (20 QUESTIONS)
   =========================================================== */

{
  id: 8001, pillar: 8, type: "scale",
  title: "We have a clear pricing strategy.",
  options: ["No strategy", "Basic strategy", "Solid strategy", "Strong strategy", "Strategic pricing model"]
},
{
  id: 8002, pillar: 8, type: "scale",
  title: "Our packaging aligns with how customers adopt and use our product.",
  options: ["Misaligned", "Weak alignment", "Solid alignment", "Strong alignment", "Aligned packaging"]
},
{
  id: 8003, pillar: 8, type: "scale",
  title: "Our pricing model is easy to understand and sell.",
  options: ["Confusing", "Somewhat confusing", "Solid clarity", "Strong clarity", "Intuitive pricing"]
},
{
  id: 8004, pillar: 8, type: "scale",
  title: "We understand willingness to pay across segments.",
  options: ["No insight", "Basic insight", "Solid insight", "Strong insight", "Deep intelligence"]
},
{
  id: 8005, pillar: 8, type: "scale",
  title: "Our pricing supports expansion and upsell.",
  options: ["No support", "Weak support", "Solid support", "Strong support", "Optimized expansion pricing"]
},
{
  id: 8006, pillar: 8, type: "scale",
  title: "We align pricing with value delivered.",
  options: ["Misaligned", "Weak alignment", "Solid alignment", "Strong alignment", "Value-aligned pricing"]
},
{
  id: 8007, pillar: 8, type: "scale",
  title: "Our pricing supports fast time-to-value.",
  options: ["Very slow", "Slow", "Solid", "Strong", "Optimized for speed"]
},
{
  id: 8008, pillar: 8, type: "scale",
  title: "We understand which features drive willingness to pay.",
  options: ["No insight", "Basic insight", "Solid insight", "Strong insight", "Deep feature-value intelligence"]
},
{
  id: 8009, pillar: 8, type: "scale",
  title: "Our pricing is competitive and market-informed.",
  options: ["No insight", "Weak insight", "Solid insight", "Strong alignment", "Strategic positioning"]
},
{
  id: 8010, pillar: 8, type: "scale",
  title: "Our pricing is easy for Sales to sell.",
  options: ["Difficult", "Somewhat difficult", "Solid", "Easy", "Sales-friendly"]
},
{
  id: 8011, pillar: 8, type: "scale",
  title: "We understand price sensitivity by segment.",
  options: ["No insight", "Basic insight", "Solid insight", "Strong insight", "Deep segment intelligence"]
},
{
  id: 8012, pillar: 8, type: "scale",
  title: "Our pricing supports both PLG and sales-led motions.",
  options: ["Not supportive", "Weak support", "Solid support", "Strong support", "Optimized hybrid pricing"]
},
{
  id: 8013, pillar: 8, type: "scale",
  title: "We tailor pricing to different personas or use cases.",
  options: ["No tailoring", "Basic tailoring", "Solid tailoring", "Strong tailoring", "Persona-optimized"]
},
{
  id: 8014, pillar: 8, type: "scale",
  title: "We provide clear ROI and value justification for pricing.",
  options: ["No justification", "Weak", "Solid", "Strong", "Compelling ROI narrative"]
},
{
  id: 8015, pillar: 8, type: "scale",
  title: "We manage discounting strategically.",
  options: ["No discipline", "Weak discipline", "Solid discipline", "Strong discipline", "Strategic governance"]
},
{
  id: 8016, pillar: 8, type: "scale",
  title: "We identify pricing/packaging gaps that block deals.",
  options: ["No insight", "Basic insight", "Solid insight", "Strong insight", "Deep friction intelligence"]
},
{
  id: 8017, pillar: 8, type: "scale",
  title: "We test and validate pricing regularly.",
  options: ["No testing", "Occasional", "Solid testing", "Strong validation", "Systematic optimization"]
},
{
  id: 8018, pillar: 8, type: "scale",
  title: "Our pricing adapts to different geographies.",
  options: ["No adaptation", "Weak adaptation", "Solid adaptation", "Strong localization", "Optimized geo pricing"]
},
{
  id: 8019, pillar: 8, type: "scale",
  title: "We measure pricing performance and impact.",
  options: ["No measurement", "Weak measurement", "Solid measurement", "Strong insight", "Deep analytics"]
},
{
  id: 8020, pillar: 8, type: "scale",
  title: "We capture value increases automatically (e.g. usage/seats) without needing renegotiation.",
  options: ["Never", "Rarely", "Sometimes", "Often", "Always (Auto-expansion)"]
},

/* ===========================================================
   PILLAR 9 — BRAND & COMMUNICATIONS (20 QUESTIONS)
   =========================================================== */

{
  id: 9001, pillar: 9, type: "scale",
  title: "We have a clear brand narrative and story.",
  options: ["No narrative", "Weak narrative", "Solid narrative", "Strong narrative", "Compelling story"]
},
{
  id: 9002, pillar: 9, type: "scale",
  title: "Our brand communicates trust and authority.",
  options: ["Very weak", "Weak", "Solid", "Strong", "Trusted brand"]
},
{
  id: 9003, pillar: 9, type: "scale",
  title: "We have strong visual brand identity.",
  options: ["Very weak", "Weak", "Solid", "Strong", "Best-in-class identity"]
},
{
  id: 9004, pillar: 9, type: "scale",
  title: "Our brand is consistent across all touchpoints.",
  options: ["Inconsistent", "Somewhat inconsistent", "Solid consistency", "Strong consistency", "Perfectly consistent"]
},
{
  id: 9005, pillar: 9, type: "scale",
  title: "We communicate thought leadership effectively.",
  options: ["No thought leadership", "Weak", "Solid", "Strong", "Influential"]
},
{
  id: 9006, pillar: 9, type: "scale",
  title: "Our PR and media strategy drives brand awareness.",
  options: ["No strategy", "Weak", "Solid", "Strong", "Strategic PR engine"]
},
{
  id: 9007, pillar: 9, type: "scale",
  title: "We emphasize value and outcomes in our communications.",
  options: ["Feature-focused", "Some value", "Solid value focus", "Strong value emphasis", "Value-driven narrative"]
},
{
  id: 9008, pillar: 9, type: "scale",
  title: "We use customer stories and testimonials effectively.",
  options: ["No stories", "Weak usage", "Solid usage", "Strong usage", "Strategic proof engine"]
},
{
  id: 9009, pillar: 9, type: "scale",
  title: "Our brand differentiates us clearly in the market.",
  options: ["No differentiation", "Weak", "Solid", "Strong", "Highly differentiated"]
},
{
  id: 9010, pillar: 9, type: "scale",
  title: "We have a strong social media presence.",
  options: ["No presence", "Weak", "Solid", "Strong", "Influential presence"]
},
{
  id: 9011, pillar: 9, type: "scale",
  title: "Sales reps rarely have to explain 'who we are' on the first call.",
  options: ["Always explain", "Often explain", "Sometimes explain", "Rarely explain", "Never (Strong Brand)"]
},
{
  id: 9012, pillar: 9, type: "scale",
  title: "We use content marketing strategically.",
  options: ["No content", "Weak content", "Solid content", "Strong content engine", "Strategic content system"]
},
{
  id: 9013, pillar: 9, type: "scale",
  title: "We communicate our position in the competitive landscape clearly.",
  options: ["No clarity", "Weak clarity", "Solid clarity", "Strong clarity", "Strategic messaging"]
},
{
  id: 9014, pillar: 9, type: "scale",
  title: "Our internal teams understand and embody the brand.",
  options: ["No alignment", "Weak alignment", "Solid alignment", "Strong alignment", "Embedded brand culture"]
},
{
  id: 9015, pillar: 9, type: "scale",
  title: "We maintain strong brand messaging frameworks.",
  options: ["No frameworks", "Weak frameworks", "Solid frameworks", "Strong frameworks", "Best-in-class architecture"]
},
{
  id: 9016, pillar: 9, type: "scale",
  title: "We invest in brand awareness strategically.",
  options: ["No investment", "Weak investment", "Solid investment", "Strong investment", "Strategic investment"]
},
{
  id: 9017, pillar: 9, type: "scale",
  title: "Our brand evolves with our GTM strategy.",
  options: ["Static brand", "Weak evolution", "Solid evolution", "Strong evolution", "Adaptive strategy"]
},
{
  id: 9018, pillar: 9, type: "scale",
  title: "We measure brand performance and perception.",
  options: ["No measurement", "Weak measurement", "Solid measurement", "Strong measurement", "Deep analytics"]
},
{
  id: 9019, pillar: 9, type: "scale",
  title: "Brand & Communications drives GTM success.",
  options: ["Not a driver", "Weak driver", "Solid driver", "Strong driver", "Strategic function"]
},
{
  id: 9020, pillar: 9, type: "scale",
  title: "We are consistently mentioned in deals where we were not actively outbound prospecting.",
  options: ["Never", "Rarely", "Sometimes", "Often", "Always (Brand Gravity)"]
},

/* ===========================================================
   PILLAR 10 — DATA & INSIGHTS (20 QUESTIONS)
   =========================================================== */

{
  id: 10001, pillar: 10, type: "scale",
  title: "We have clear definitions for key GTM metrics.",
  options: ["No definitions", "Weak definitions", "Solid definitions", "Strong definitions", "Best-in-class governance"]
},
{
  id: 10002, pillar: 10, type: "scale",
  title: "We trust our data enough to pay commissions based purely on CRM reports.",
  options: ["Impossible", "Very skeptical", "Mostly trust", "Trust but verify", "Absolute trust"]
},
{
  id: 10003, pillar: 10, type: "scale",
  title: "We use data to drive GTM decisions consistently.",
  options: ["No data usage", "Weak usage", "Solid usage", "Strong usage", "Data-driven culture"]
},
{
  id: 10004, pillar: 10, type: "scale",
  title: "We track leading indicators effectively.",
  options: ["No tracking", "Weak tracking", "Solid tracking", "Strong tracking", "Predictive system"]
},
{
  id: 10005, pillar: 10, type: "scale",
  title: "We have strong attribution models.",
  options: ["No attribution", "Weak attribution", "Solid attribution", "Strong attribution", "Best-in-class attribution"]
},
{
  id: 10006, pillar: 10, type: "scale",
  title: "We measure GTM efficiency effectively.",
  options: ["No measurement", "Weak measurement", "Solid measurement", "Strong measurement", "Deep efficiency intelligence"]
},
{
  id: 10007, pillar: 10, type: "scale",
  title: "We run strong cohort analysis.",
  options: ["No cohort analysis", "Basic", "Solid", "Strong", "Sophisticated cohort system"]
},
{
  id: 10008, pillar: 10, type: "scale",
  title: "We have clear visibility into pipeline health.",
  options: ["No visibility", "Weak visibility", "Solid visibility", "Strong visibility", "Deep pipeline intelligence"]
},
{
  id: 10009, pillar: 10, type: "scale",
  title: "We segment performance data effectively.",
  options: ["No segmentation", "Weak segmentation", "Solid segmentation", "Strong segmentation", "Granular segmentation"]
},
{
  id: 10010, pillar: 10, type: "scale",
  title: "We forecast accurately using data.",
  options: ["No forecasting", "Weak forecasting", "Solid forecasting", "Strong forecasting", "Predictive forecasting"]
},
{
  id: 10011, pillar: 10, type: "scale",
  title: "We use predictive analytics to inform GTM.",
  options: ["No analytics", "Basic", "Solid", "Strong", "Advanced predictive models"]
},
{
  id: 10012, pillar: 10, type: "scale",
  title: "Our dashboards provide actionable insights.",
  options: ["No dashboards", "Weak dashboards", "Solid dashboards", "Strong dashboards", "Best-in-class BI"]
},
{
  id: 10013, pillar: 10, type: "scale",
  title: "We run effective performance reviews using data.",
  options: ["No reviews", "Weak reviews", "Solid reviews", "Strong reviews", "Data-driven review culture"]
},
{
  id: 10014, pillar: 10, type: "scale",
  title: "We identify patterns and trends in GTM data.",
  options: ["No detection", "Weak detection", "Solid detection", "Strong detection", "Trend intelligence"]
},
{
  id: 10015, pillar: 10, type: "scale",
  title: "We benchmark our performance against industry standards.",
  options: ["No benchmarking", "Weak benchmarking", "Solid benchmarking", "Strong benchmarking", "Competitive intelligence"]
},
{
  id: 10016, pillar: 10, type: "scale",
  title: "We can predict next quarter's revenue with <10% margin of error.",
  options: ["Impossible", "Unlikely", "Sometimes", "Often", "Always (Predictable)"]
},
{
  id: 10017, pillar: 10, type: "scale",
  title: "We use data to optimize resource allocation.",
  options: ["No optimization", "Weak optimization", "Solid optimization", "Strong optimization", "Strategic resource intelligence"]
},
{
  id: 10018, pillar: 10, type: "scale",
  title: "We measure customer lifetime value (LTV) accurately.",
  options: ["No measurement", "Weak measurement", "Solid measurement", "Strong measurement", "Deep LTV intelligence"]
},
{
  id: 10019, pillar: 10, type: "scale",
  title: "Data & Insights drives GTM performance.",
  options: ["Not a driver", "Weak driver", "Solid driver", "Strong driver", "Strategic insights function"]
},
{
  id: 10020, pillar: 10, type: "scale",
  title: "We identify churn risks through data signals before the customer complains.",
  options: ["Never", "Rarely", "Sometimes", "Often", "Always (Proactive)"]
},

/* ===========================================================
   PILLAR 11 — ENABLEMENT (20 QUESTIONS)
   =========================================================== */

{
  id: 11001, pillar: 11, type: "scale",
  title: "We have structured onboarding for new GTM hires.",
  options: ["No onboarding", "Weak onboarding", "Solid onboarding", "Strong onboarding", "Best-in-class program"]
},
{
  id: 11002, pillar: 11, type: "scale",
  title: "We reduce ramp time for new hires effectively.",
  options: ["Very slow ramp", "Slow ramp", "Solid ramp", "Strong ramp", "Efficient ramp system"]
},
{
  id: 11003, pillar: 11, type: "scale",
  title: "We provide ongoing training and skill development.",
  options: ["No training", "Weak training", "Solid training", "Strong training", "Strategic learning culture"]
},
{
  id: 11004, pillar: 11, type: "scale",
  title: "We have strong sales playbooks.",
  options: ["No playbooks", "Weak playbooks", "Solid playbooks", "Strong playbooks", "Best-in-class system"]
},
{
  id: 11005, pillar: 11, type: "scale",
  title: "Our enablement content is accessible and easy to use.",
  options: ["Very hard to use", "Hard to use", "Solid accessibility", "Strong accessibility", "Intuitive platform"]
},
{
  id: 11006, pillar: 11, type: "scale",
  title: "We provide role-specific enablement.",
  options: ["No specific content", "Weak content", "Solid content", "Strong role enablement", "Tailored system"]
},
{
  id: 11007, pillar: 11, type: "scale",
  title: "We certify reps before they start selling.",
  options: ["No certification", "Weak certification", "Solid certification", "Strong certification", "Rigorous program"]
},
{
  id: 11008, pillar: 11, type: "scale",
  title: "We provide consistent coaching to GTM teams.",
  options: ["No coaching", "Weak coaching", "Solid coaching", "Strong coaching", "Coaching culture"]
},
{
  id: 11009, pillar: 11, type: "scale",
  title: "We equip teams with effective sales and marketing collateral.",
  options: ["No collateral", "Weak collateral", "Solid collateral", "Strong collateral", "Best-in-class assets"]
},
{
  id: 11010, pillar: 11, type: "scale",
  title: "We track 'Time to First Deal' for new hires as a key KPI.",
  options: ["No tracking", "Ad-hoc tracking", "Tracked informally", "Tracked formally", "Key Performance Indicator"]
},
{
  id: 11011, pillar: 11, type: "scale",
  title: "We measure enablement effectiveness.",
  options: ["No measurement", "Weak measurement", "Solid measurement", "Strong measurement", "Deep analytics"]
},
{
  id: 11012, pillar: 11, type: "scale",
  title: "We update enablement materials regularly.",
  options: ["Never", "Rarely", "Solid cadence", "Strong cadence", "Continuous evolution"]
},
{
  id: 11013, pillar: 11, type: "scale",
  title: "We provide competitive enablement effectively.",
  options: ["No competitive enablement", "Weak", "Solid", "Strong", "Best-in-class intelligence"]
},
{
  id: 11014, pillar: 11, type: "scale",
  title: "We provide enablement for objection handling.",
  options: ["No training", "Weak training", "Solid training", "Strong training", "Strategic enablement"]
},
{
  id: 11015, pillar: 11, type: "scale",
  title: "Enablement supports deal execution effectively.",
  options: ["No support", "Weak support", "Solid support", "Strong support", "Strategic deal enablement"]
},
{
  id: 11016, pillar: 11, type: "scale",
  title: "We run strong product training for GTM teams.",
  options: ["No training", "Weak training", "Solid training", "Strong training", "Deep product expertise"]
},
{
  id: 11017, pillar: 11, type: "scale",
  title: "Enablement collaborates closely with Sales leadership.",
  options: ["Disconnected", "Weak collaboration", "Solid collaboration", "Strong collaboration", "Deep integration"]
},
{
  id: 11018, pillar: 11, type: "scale",
  title: "We use real-world scenarios and role-play effectively.",
  options: ["No role-play", "Weak role-play", "Solid role-play", "Strong role-play", "Immersive system"]
},
{
  id: 11019, pillar: 11, type: "scale",
  title: "Enablement drives GTM performance and consistency.",
  options: ["Not a driver", "Weak driver", "Solid driver", "Strong driver", "Strategic function"]
},
{
  id: 11020, pillar: 11, type: "scale",
  title: "Our bottom 20% of reps are consistently improving or managed out quickly.",
  options: ["No management", "Slow process", "Somewhat consistent", "Consistent", "High performance culture"]
},

/* ===========================================================
   PILLAR 12 — LEADERSHIP & ALIGNMENT (20 QUESTIONS)
   =========================================================== */

{
  id: 12001, pillar: 12, type: "scale",
  title: "GTM leadership provides clear direction and priorities.",
  options: ["No clarity", "Weak clarity", "Solid clarity", "Strong clarity", "Clear strategic direction"]
},
{
  id: 12002, pillar: 12, type: "scale",
  title: "Executive meetings focus on solving problems, not debating whose data is correct.",
  options: ["Always debating data", "Often debating", "Sometimes", "Mostly solving problems", "Always strategic"]
},
{
  id: 12003, pillar: 12, type: "scale",
  title: "Leadership holds teams accountable to goals.",
  options: ["No accountability", "Weak accountability", "Solid accountability", "Strong accountability", "Disciplined culture"]
},
{
  id: 12004, pillar: 12, type: "scale",
  title: "We have strong cross-functional collaboration.",
  options: ["Siloed", "Weak collaboration", "Solid collaboration", "Strong collaboration", "Deep collaborative culture"]
},
{
  id: 12005, pillar: 12, type: "scale",
  title: "We have a standardized meeting cadence that is never cancelled.",
  options: ["No cadence", "Often cancelled", "Mostly respected", "Disciplined", "Sacred operating rhythm"]
},
{
  id: 12006, pillar: 12, type: "scale",
  title: "Leadership communicates GTM strategy effectively.",
  options: ["Very weak", "Weak", "Solid", "Strong", "Best-in-class communication"]
},
{
  id: 12007, pillar: 12, type: "scale",
  title: "We have strong executive sponsorship for GTM initiatives.",
  options: ["No sponsorship", "Weak sponsorship", "Solid sponsorship", "Strong sponsorship", "Engaged support"]
},
{
  id: 12008, pillar: 12, type: "scale",
  title: "Leadership removes blockers proactively.",
  options: ["No removal", "Weak removal", "Solid removal", "Strong removal", "Proactive leadership"]
},
{
  id: 12009, pillar: 12, type: "scale",
  title: "We run effective GTM leadership meetings.",
  options: ["No meetings", "Weak meetings", "Solid meetings", "Strong meetings", "Effective cadence"]
},
{
  id: 12010, pillar: 12, type: "scale",
  title: "Leadership fosters a high-performance culture.",
  options: ["No culture", "Weak culture", "Solid culture", "Strong culture", "Performance culture"]
},
{
  id: 12011, pillar: 12, type: "scale",
  title: "We have clear roles and responsibilities across GTM teams.",
  options: ["Unclear", "Weak clarity", "Solid clarity", "Strong clarity", "Perfect organizational design"]
},
{
  id: 12012, pillar: 12, type: "scale",
  title: "Leadership invests in the right areas for growth.",
  options: ["Misaligned", "Weak alignment", "Solid alignment", "Strong alignment", "Strategic allocation"]
},
{
  id: 12013, pillar: 12, type: "scale",
  title: "We have strong feedback loops between leadership and teams.",
  options: ["No loop", "Weak loop", "Solid loop", "Strong loop", "Effective feedback culture"]
},
{
  id: 12014, pillar: 12, type: "scale",
  title: "Leadership adapts strategy based on performance data.",
  options: ["Static strategy", "Weak adaptation", "Solid adaptation", "Strong adaptation", "Adaptive leadership"]
},
{
  id: 12015, pillar: 12, type: "scale",
  title: "We maintain a strong GTM operating rhythm.",
  options: ["No rhythm", "Weak rhythm", "Solid rhythm", "Strong rhythm", "Disciplined cadence"]
},
{
  id: 12016, pillar: 12, type: "scale",
  title: "Leadership aligns GTM strategy with company strategy.",
  options: ["Misaligned", "Weak alignment", "Solid alignment", "Strong alignment", "Aligned strategy"]
},
{
  id: 12017, pillar: 12, type: "scale",
  title: "We have clear escalation paths for GTM challenges.",
  options: ["No paths", "Weak paths", "Solid paths", "Strong paths", "Effective escalation"]
},
{
  id: 12018, pillar: 12, type: "scale",
  title: "Leadership builds trust and psychological safety.",
  options: ["Very weak", "Weak", "Solid", "Strong", "Trusting culture"]
},
{
  id: 12019, pillar: 12, type: "scale",
  title: "Leadership & Alignment drives GTM execution.",
  options: ["Not a driver", "Weak driver", "Solid driver", "Strong driver", "Strategic leadership"]
},
{
  id: 12020, pillar: 12, type: "scale",
  title: "Information flows freely from the frontline to leadership without being filtered.",
  options: ["Highly filtered", "Filtered", "Somewhat open", "Open", "Radical transparency"]
}

/* ===========================================================
   CLOSE THE ARRAY (END OF ALL QUESTIONS)
   =========================================================== */

]; // END QUESTIONS ARRAY


/* ===========================================================
   EXPORT (use whichever your build system uses)
   =========================================================== */

window.QUESTIONS = QUESTIONS;
