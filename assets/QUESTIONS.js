/* ===========================================================
   QUESTIONS — MASTER QUESTION ENGINE v1.0
   All pillars (0–12), 265 questions
   Version: Production Ready — Commented Edition
   =========================================================== */

const QUESTIONS = [

/* ===========================================================
   PILLAR 0 — CONTEXT (25 QUESTIONS)
   These questions define the organizational, financial,
   operational and GTM environment so the AI engine can
   generate a context-aware intelligence report.
   =========================================================== */

/* Q1 — Identity & Company Profile
   ----------------------------------------------------------- */
{
  id: 1,
  pillar: 0,
  type: "group",
  title: "Tell us about you and your company",
  fields: [
    { name: "fullname", label: "Your full name" },
    { name: "role", label: "Your role or job title" },
    { name: "email", label: "Email address" },
    { name: "mobile", label: "Mobile number" },
    { name: "company", label: "Company name" },
    { name: "website", label: "Company website" },
    { name: "sector", label: "Sector" },
    { name: "country", label: "Country of headquarters" },
    { name: "activity", label: "Core activity" },
    { name: "companysize", label: "Company size" }
  ]
},
   
/* Q2 — SaaS Performance & Revenue Economics
   ----------------------------------------------------------- */
{
  id: 2,
  pillar: 0,
  type: "group",
  title: "SaaS performance and revenue economics",
  fields: [
    { name: "arr", label: "Current ARR (USD or EUR)" },
    { name: "acv", label: "Average Contract Value (ACV)" },
    { name: "churn", label: "Customer churn rate (%)" },
    { name: "cpl", label: "Cost per Lead (CPL)" },
    { name: "cac", label: "Customer Acquisition Cost (CAC)" },
    { name: "nrr", label: "Net Revenue Retention (NRR %)" },
    { name: "nps", label: "Net Promoter Score (NPS)" },
    { name: "expansion", label: "Expansion revenue rate (%)" },
    { name: "ltv", label: "Customer Lifetime Value (LTV)" },
    { name: "payback", label: "Payback period (months)" }
  ]
},

/* -----------------------------------------------------------
   Q3 — GTM Team Structure & Capacity
   ----------------------------------------------------------- */
{
  id: 3,
  pillar: 0,
  type: "group",
  title: "Your go to market team structure",
  fields: [
    { name: "ae", label: "Account Executives (#)" },
    { name: "sdr", label: "SDR/BDR (#)" },
    { name: "am", label: "Account Managers (#)" },
    { name: "csm", label: "Customer Success Managers (#)" },
    { name: "se", label: "Solution Engineers (#)" },
    { name: "partner", label: "Partner/Channel team (#)" },
    { name: "marketing", label: "Marketing team size (#)" },
    { name: "enablement", label: "Enablement team (#)" },
    { name: "revops", label: "Revenue Operations team (#)" },
    { name: "leadership", label: "GTM Leadership (#)" }
  ]
},

/* -----------------------------------------------------------
   Q4 — Revenue Goals, History & Trajectory
   ----------------------------------------------------------- */
{
  id: 4,
  pillar: 0,
  type: "group",
  title: "Revenue goals and performance trajectory",
  fields: [
    { name: "target_fy", label: "Current FY revenue target" },
    { name: "current_perf", label: "Progress toward target (%)" },
    { name: "next_fy_target", label: "Next FY revenue target" },
    { name: "arr_target", label: "ARR target for next FY" },
    { name: "growth_goal", label: "Desired YoY growth (%)" },
    { name: "yoy_last_year", label: "Actual YoY growth last year (%)" },
    { name: "new_vs_expansion", label: "New business vs expansion split (%)" },
    { name: "forecast_accuracy", label: "Forecast accuracy (%)" },
    { name: "customer_target", label: "Customer acquisition target (#)" },
    { name: "growth_constraint", label: "Biggest growth constraint" }
  ]
},

   /* -----------------------------------------------------------
   Q5 — Revenue Engine Health & Pipeline Performance
   ----------------------------------------------------------- */
{
  id: 5,
  pillar: 0,
  type: "group",
  title: "Your revenue engine performance",
  fields: [
    { name: "pipeline_cov", label: "Pipeline coverage (x vs. target)" },
    { name: "sales_cycle", label: "Average sales cycle length (days)" },
    { name: "lead_response", label: "Lead response time (hours)" },
    { name: "demo_close", label: "Demo-to-close rate (%)" },
    { name: "win_rate", label: "Win rate (%)" },
    { name: "expansion_share", label: "Expansion % of total ARR" },
    { name: "mql_sql", label: "MQL → SQL conversion rate (%)" },
    { name: "sql_cw", label: "SQL → Closed Won conversion rate (%)" },
    { name: "ramp_time", label: "Average ramp time for new AEs (months)" },
    { name: "onboarding_time", label: "Customer onboarding time (days)" }
  ]
},

/* -----------------------------------------------------------
   Q6 — GTM Motion Type
   ----------------------------------------------------------- */
{
  id: 6,
  pillar: 0,
  type: "select",
  title: "What best describes your go to market motion?",
  options: [
    "Inbound-led",
    "Outbound-led",
    "Hybrid (Inbound + Outbound)",
    "Self-serve / PLG",
    "Partner-led",
    "Enterprise field-led"
  ]
},

/* -----------------------------------------------------------
   Q7 — Revenue Model
   ----------------------------------------------------------- */
{
  id: 7,
  pillar: 0,
  type: "select",
  title: "Your primary revenue model",
  options: [
    "SaaS subscription (recurring)",
    "Usage-based",
    "Transactional",
    "Professional services–heavy",
    "Mixed model"
  ]
},

/* -----------------------------------------------------------
   Q8 — ACV Range (Picklist)
   ----------------------------------------------------------- */
{
  id: 8,
  pillar: 0,
  type: "select",
  title: "Your average contract value (ACV)",
  options: [
    "< €2,000",
    "€2,000 – €10,000",
    "€10,000 – €30,000",
    "€30,000 – €75,000",
    "€75,000 – €150,000",
    "> €150,000"
  ]
},

/* -----------------------------------------------------------
   Q9 — Primary Buyer Persona
   ----------------------------------------------------------- */
{
  id: 9,
  pillar: 0,
  type: "select",
  title: "Primary buyer persona",
  options: [
    "Individual contributor",
    "Team lead / manager",
    "Director",
    "VP-level",
    "C-level executive",
    "Mixed across levels"
  ]
},

/* -----------------------------------------------------------
   Q10 — Sales Cycle Complexity
   ----------------------------------------------------------- */
{
  id: 10,
  pillar: 0,
  type: "select",
  title: "Sales cycle complexity",
  options: [
    "Low (quick decisions, < 30 days)",
    "Medium (1–3 months)",
    "High (3–6 months)",
    "Very high (6–12 months)",
    "Extreme (12+ months)"
  ]
},

/* -----------------------------------------------------------
   Q11 — Full GTM Team Size
   ----------------------------------------------------------- */
{
  id: 11,
  pillar: 0,
  type: "select",
  title: "Size of your full go to market team",
  options: [
    "1–5 people",
    "6–15 people",
    "16–30 people",
    "31–60 people",
    "61–120 people",
    "121+ people"
  ]
},

/* -----------------------------------------------------------
   Q12 — GTM Maturity Stage
   ----------------------------------------------------------- */
{
  id: 12,
  pillar: 0,
  type: "select",
  title: "Current GTM maturity stage",
  options: [
    "Early / Pre-structure",
    "Developing",
    "Scaling",
    "Expanding",
    "Enterprise"
  ]
},

/* -----------------------------------------------------------
   Q13 — Primary Geographic Markets
   ----------------------------------------------------------- */
{
  id: 13,
  pillar: 0,
  type: "text",
  title: "Your primary geographic markets"
},

/* -----------------------------------------------------------
   Q14 — Product Description
   ----------------------------------------------------------- */
{
  id: 14,
  pillar: 0,
  type: "textarea",
  title: "Briefly describe your product or solution"
},

/* -----------------------------------------------------------
   Q15 — Ideal Customer Profile
   ----------------------------------------------------------- */
{
  id: 15,
  pillar: 0,
  type: "textarea",
  title: "Who is your ideal customer and why do they buy from you?"
},

/* -----------------------------------------------------------
   Q16 — GTM Priority
   ----------------------------------------------------------- */
{
  id: 16,
  pillar: 0,
  type: "textarea",
  title: "Your top GTM priority for the next 6–12 months"
},

/* -----------------------------------------------------------
   Q17 — Primary Challenge
   ----------------------------------------------------------- */
{
  id: 17,
  pillar: 0,
  type: "textarea",
  title: "Your biggest challenge across revenue, pipeline or execution"
},

/* -----------------------------------------------------------
   Q18 — Performance Drag
   ----------------------------------------------------------- */
{
  id: 18,
  pillar: 0,
  type: "textarea",
  title: "What is currently slowing down GTM performance?"
},

/* -----------------------------------------------------------
   Q19 — Trigger for Assessment
   ----------------------------------------------------------- */
{
  id: 19,
  pillar: 0,
  type: "textarea",
  title: "What has changed recently that makes this assessment important?"
},

/* -----------------------------------------------------------
   Q20 — Critical Business Outcome
   ----------------------------------------------------------- */
{
  id: 20,
  pillar: 0,
  type: "textarea",
  title: "What is your most important business outcome to achieve this year?"
},

/* -----------------------------------------------------------
   Q21 — Product Complexity
   ----------------------------------------------------------- */
{
  id: 21,
  pillar: 0,
  type: "select",
  title: "How would you describe your product complexity?",
  options: ["Simple", "Moderately complex", "Complex", "Highly complex"]
},

/* -----------------------------------------------------------
   Q22 — Market Type
   ----------------------------------------------------------- */
{
  id: 22,
  pillar: 0,
  type: "select",
  title: "Market type",
  options: [
    "New / emerging category",
    "Growing category",
    "Competitive category",
    "Highly saturated category"
  ]
},

/* -----------------------------------------------------------
   Q23 — Deployment Model
   ----------------------------------------------------------- */
{
  id: 23,
  pillar: 0,
  type: "select",
  title: "Primary deployment model",
  options: [
    "Cloud / SaaS",
    "On-premise",
    "Hybrid",
    "Custom / bespoke"
  ]
},

/* -----------------------------------------------------------
   Q24 — Customer Count
   ----------------------------------------------------------- */
{
  id: 24,
  pillar: 0,
  type: "text",
  title: "Number of paying customers"
},

/* -----------------------------------------------------------
   Q25 — Additional Context
   ----------------------------------------------------------- */
{
  id: 25,
  pillar: 0,
  type: "textarea",
  title: "Anything else we should know about your GTM context?"
},


   /* ===========================================================
   PILLAR 1 — MARKET INTELLIGENCE (20 QUESTIONS)
   =========================================================== */

{
  id: 1001, pillar: 1, type: "scale",
  title: "We have a clearly defined Ideal Customer Profile (ICP).",
  options: [
    "No ICP",
    "Basic ICP only",
    "Solid ICP with gaps",
    "Strong ICP definition",
    "Fully validated ICP guiding GTM"
  ]
},
{
  id: 1002, pillar: 1, type: "scale",
  title: "We understand our market size, segments and growth drivers.",
  options: [
    "No insight",
    "Basic understanding",
    "Solid insight with gaps",
    "Strong market understanding",
    "Deep strategic market intelligence"
  ]
},
{
  id: 1003, pillar: 1, type: "scale",
  title: "We understand customer needs, pains and buying triggers.",
  options: [
    "No customer insight",
    "Limited research",
    "Solid customer insights",
    "Strong research foundation",
    "Deep validated customer intelligence"
  ]
},
{
  id: 1004, pillar: 1, type: "scale",
  title: "Our competitive landscape is well understood.",
  options: [
    "No competitive insight",
    "Basic understanding",
    "Solid insight",
    "Strong competitive analysis",
    "Deep strategic understanding"
  ]
},
{
  id: 1005, pillar: 1, type: "scale",
  title: "We have clear positioning that differentiates us.",
  options: [
    "No positioning",
    "Basic positioning",
    "Decent positioning",
    "Strong differentiation",
    "Highly differentiated and defendable"
  ]
},
{
  id: 1006, pillar: 1, type: "scale",
  title: "We monitor market trends and competitor moves consistently.",
  options: [
    "No monitoring",
    "Basic occasional monitoring",
    "Solid monitoring with gaps",
    "Strong monitoring cadence",
    "Highly proactive strategic monitoring"
  ]
},
{
  id: 1007, pillar: 1, type: "scale",
  title: "We understand our buyers’ decision criteria.",
  options: [
    "No insight",
    "Basic understanding",
    "Solid understanding",
    "Strong understanding",
    "Deep decision-making intelligence"
  ]
},
{
  id: 1008, pillar: 1, type: "scale",
  title: "We use customer research to shape product and GTM priorities.",
  options: [
    "No research",
    "Light research",
    "Solid insights used sometimes",
    "Strong research loop",
    "Deep research directly shaping GTM"
  ]
},
{
  id: 1009, pillar: 1, type: "scale",
  title: "We understand barriers to adoption in our market.",
  options: [
    "No insight",
    "Basic assumptions",
    "Solid understanding",
    "Strong validated insight",
    "Deep adoption intelligence"
  ]
},
{
  id: 1010, pillar: 1, type: "scale",
  title: "We have clear insight into switching triggers from competitor tools.",
  options: [
    "No insight",
    "Basic understanding",
    "Solid understanding",
    "Strong insight",
    "Deep switching intelligence"
  ]
},
{
  id: 1011, pillar: 1, type: "scale",
  title: "We understand economic trends shaping buyer behavior.",
  options: [
    "No understanding",
    "Basic understanding",
    "Solid understanding",
    "Strong insight",
    "Deep macro-economic intelligence"
  ]
},
{
  id: 1012, pillar: 1, type: "scale",
  title: "We segment our market effectively.",
  options: [
    "No segmentation",
    "Basic segmentation",
    "Solid segmentation",
    "Strong segmentation model",
    "Highly strategic segmentation engine"
  ]
},
{
  id: 1013, pillar: 1, type: "scale",
  title: "Our ICP segmentation aligns with revenue potential.",
  options: [
    "No alignment",
    "Basic assumptions",
    "Solid alignment",
    "Strong alignment",
    "Deep revenue-optimized segmentation"
  ]
},
{
  id: 1014, pillar: 1, type: "scale",
  title: "We understand which personas influence deals most.",
  options: [
    "No insight",
    "Basic persona mapping",
    "Solid persona insight",
    "Strong influence mapping",
    "Deep multi-persona intelligence"
  ]
},
{
  id: 1015, pillar: 1, type: "scale",
  title: "Our win-loss analysis produces actionable insights.",
  options: [
    "No win-loss program",
    "Basic ad-hoc notes",
    "Solid program with gaps",
    "Strong win-loss insights",
    "Deep, systematic win-loss intelligence"
  ]
},
{
  id: 1016, pillar: 1, type: "scale",
  title: "We know which customer segments produce the highest LTV.",
  options: [
    "No insight",
    "Basic guesses",
    "Solid analysis",
    "Strong segment profitability insight",
    "Deep LTV intelligence"
  ]
},
{
  id: 1017, pillar: 1, type: "scale",
  title: "We have strong insight into partner ecosystem dynamics.",
  options: [
    "No insight",
    "Basic understanding",
    "Solid view",
    "Strong partnership intelligence",
    "Deep ecosystem intelligence"
  ]
},
{
  id: 1018, pillar: 1, type: "scale",
  title: "We understand sensitivity to pricing across segments.",
  options: [
    "No insight",
    "Basic insight",
    "Solid price sensitivity insight",
    "Strong validated insight",
    "Deep pricing elasticity intelligence"
  ]
},
{
  id: 1019, pillar: 1, type: "scale",
  title: "Our market intelligence drives our GTM strategy.",
  options: [
    "Not used",
    "Used sometimes",
    "Often used",
    "Regularly used",
    "Central driver of GTM strategy"
  ]
},
{
  id: 1020, pillar: 1, type: "scale",
  title: "Market Intelligence acts as a strategic GTM enabler.",
  options: [
    "Not strategic",
    "Some strategic role",
    "Solid strategic influence",
    "Strong strategic enabler",
    "Highly strategic intelligence engine"
  ]
},

/* ===========================================================
   PILLAR 2 — PRODUCT MARKETING (20 QUESTIONS)
   =========================================================== */

{
  id: 2001, pillar: 2, type: "scale",
  title: "Our messaging is clear, compelling and communicates value.",
  options: [
    "Very unclear",
    "Basic messaging",
    "Solid messaging",
    "Strong value messaging",
    "Highly compelling messaging engine"
  ]
},
{
  id: 2002, pillar: 2, type: "scale",
  title: "We position our product clearly against competitors.",
  options: [
    "No positioning",
    "Basic positioning",
    "Solid positioning",
    "Strong differentiation",
    "Highly differentiated strategic positioning"
  ]
},
{
  id: 2003, pillar: 2, type: "scale",
  title: "Our value proposition resonates with ICP segments.",
  options: [
    "No resonance",
    "Basic resonance",
    "Solid resonance",
    "Strong value resonance",
    "Deep validated value proposition"
  ]
},
{
  id: 2004, pillar: 2, type: "scale",
  title: "Our product narrative is clear and emotionally engaging.",
  options: [
    "No narrative",
    "Basic narrative",
    "Solid narrative",
    "Strong narrative",
    "Highly compelling story"
  ]
},
{
  id: 2005, pillar: 2, type: "scale",
  title: "We tailor messaging effectively across personas.",
  options: [
    "No personalization",
    "Basic persona tailoring",
    "Solid persona alignment",
    "Strong persona messaging",
    "Deep persona-adapted messaging system"
  ]
},
{
  id: 2006, pillar: 2, type: "scale",
  title: "Our product marketing materials support sales effectively.",
  options: [
    "No usable materials",
    "Basic content with gaps",
    "Solid library",
    "Strong enablement assets",
    "Highly effective PMM engine"
  ]
},
{
  id: 2007, pillar: 2, type: "scale",
  title: "We have strong insight into what messages win deals.",
  options: [
    "No insight",
    "Basic anecdotal insight",
    "Solid message insight",
    "Strong win-message intelligence",
    "Deep validated message intelligence"
  ]
},
{
  id: 2008, pillar: 2, type: "scale",
  title: "We have compelling proof points, case studies and ROI materials.",
  options: [
    "None",
    "Some basic proof points",
    "Solid library",
    "Strong ROI content",
    "Highly strategic proof engine"
  ]
},
{
  id: 2009, pillar: 2, type: "scale",
  title: "We communicate value clearly rather than focusing on features.",
  options: [
    "Feature-heavy messaging",
    "Some value messaging",
    "Solid value messaging",
    "Strong value-first communication",
    "Deep value-centric GTM messaging"
  ]
},
{
  id: 2010, pillar: 2, type: "scale",
  title: "Our PMM team collaborates closely with Sales, Marketing and Product.",
  options: [
    "Very siloed",
    "Some collaboration",
    "Solid collaboration",
    "Strong collaboration",
    "Highly integrated PMM function"
  ]
},
{
  id: 2011, pillar: 2, type: "scale",
  title: "We maintain standardized messaging frameworks.",
  options: [
    "No frameworks",
    "Basic frameworks",
    "Solid frameworks",
    "Strong adoption",
    "Best-in-class messaging architecture"
  ]
},
{
  id: 2012, pillar: 2, type: "scale",
  title: "We understand which product capabilities drive conversion.",
  options: [
    "No insight",
    "Basic understanding",
    "Solid understanding",
    "Strong insight",
    "Deep capability intelligence"
  ]
},
{
  id: 2013, pillar: 2, type: "scale",
  title: "We understand usage patterns leading to retention.",
  options: [
    "No insight",
    "Basic insight",
    "Solid insight",
    "Strong insight",
    "Deep retention intelligence"
  ]
},
{
  id: 2014, pillar: 2, type: "scale",
  title: "Our PMM team influences product roadmap priorities.",
  options: [
    "No influence",
    "Limited influence",
    "Solid influence",
    "Strong PMM influence",
    "Deep PMM integration"
  ]
},
{
  id: 2015, pillar: 2, type: "scale",
  title: "We understand blockers that slow adoption.",
  options: [
    "No clarity",
    "Basic assumption",
    "Solid insight",
    "Strong insight",
    "Deep blocker intelligence"
  ]
},
{
  id: 2016, pillar: 2, type: "scale",
  title: "We support new product launches with strong GTM releases.",
  options: [
    "No launch motion",
    "Basic launches",
    "Solid launches",
    "Strong coordinated launches",
    "Highly strategic launch engine"
  ]
},
{
  id: 2017, pillar: 2, type: "scale",
  title: "Our website and collateral communicate value effectively.",
  options: [
    "Very weak",
    "Basic",
    "Solid",
    "Strong",
    "Best-in-class"
  ]
},
{
  id: 2018, pillar: 2, type: "scale",
  title: "We maintain strong competitive PMM insights.",
  options: [
    "None",
    "Basic monitoring",
    "Solid monitoring",
    "Strong analysis",
    "Highly strategic competitive PMM"
  ]
},
{
  id: 2019, pillar: 2, type: "scale",
  title: "Product Marketing is a strategic driver of GTM success.",
  options: [
    "Not strategic",
    "Some impact",
    "Solid impact",
    "Strong strategic driver",
    "Highly strategic PMM engine"
  ]
},
{
  id: 2020, pillar: 2, type: "scale",
  title: "Our messaging, narrative & positioning system is a GTM advantage.",
  options: [
    "No advantage",
    "Some advantage",
    "Solid advantage",
    "Strong advantage",
    "Major competitive advantage"
  ]
},

/* ===========================================================
   PILLAR 3 — DEMAND GENERATION (20 QUESTIONS)
   =========================================================== */

{
  id: 3001, pillar: 3, type: "scale",
  title: "We have a clear demand generation strategy.",
  options: [
    "No strategy",
    "Basic strategy",
    "Solid strategy",
    "Strong strategy",
    "Highly strategic DG engine"
  ]
},
{
  id: 3002, pillar: 3, type: "scale",
  title: "Our inbound channels generate high-quality pipeline.",
  options: [
    "No pipeline",
    "Low quality",
    "Solid pipeline",
    "Strong pipeline",
    "High-performance inbound engine"
  ]
},
{
  id: 3003, pillar: 3, type: "scale",
  title: "Our outbound motion generates predictable pipeline.",
  options: [
    "No outbound",
    "Weak outbound",
    "Solid outbound",
    "Strong outbound",
    "Highly predictable outbound system"
  ]
},
{
  id: 3004, pillar: 3, type: "scale",
  title: "Paid media drives efficient pipeline.",
  options: [
    "No paid media",
    "Inefficient spend",
    "Solid efficiency",
    "Strong efficiency",
    "Highly efficient paid engine"
  ]
},
{
  id: 3005, pillar: 3, type: "scale",
  title: "Our website converts effectively.",
  options: [
    "Very low CVR",
    "Low conversion",
    "Solid conversion",
    "Strong conversion",
    "High-performance conversion system"
  ]
},
{
  id: 3006, pillar: 3, type: "scale",
  title: "We execute strong ABM motions.",
  options: [
    "No ABM",
    "Basic ABM",
    "Solid ABM",
    "Strong ABM",
    "Highly strategic ABM"
  ]
},
{
  id: 3007, pillar: 3, type: "scale",
  title: "We have strong lead nurturing.",
  options: [
    "No nurturing",
    "Basic nurturing",
    "Solid nurturing",
    "Strong nurturing",
    "Highly effective nurturing"
  ]
},
{
  id: 3008, pillar: 3, type: "scale",
  title: "We use content effectively to generate demand.",
  options: [
    "No content",
    "Weak content",
    "Solid content",
    "Strong content engine",
    "Highly strategic content system"
  ]
},
{
  id: 3009, pillar: 3, type: "scale",
  title: "We track ROI across channels effectively.",
  options: [
    "No tracking",
    "Weak tracking",
    "Solid tracking",
    "Strong ROI insight",
    "Deep channel ROI intelligence"
  ]
},
{
  id: 3010, pillar: 3, type: "scale",
  title: "Sales & Marketing align strongly on pipeline creation.",
  options: [
    "Very misaligned",
    "Some alignment",
    "Solid alignment",
    "Strong alignment",
    "Highly aligned revenue engine"
  ]
},
{
  id: 3011, pillar: 3, type: "scale",
  title: "We have clear SLAs for lead follow-up.",
  options: [
    "No SLAs",
    "Weak SLAs",
    "Solid SLAs",
    "Strong SLAs",
    "Highly predictable lead engine"
  ]
},
{
  id: 3012, pillar: 3, type: "scale",
  title: "We have strong segmentation for personalized demand gen.",
  options: [
    "No segmentation",
    "Basic segmentation",
    "Solid segmentation",
    "Strong segmentation",
    "Highly refined segmentation engine"
  ]
},
{
  id: 3013, pillar: 3, type: "scale",
  title: "We use data to optimize campaigns continuously.",
  options: [
    "No optimization",
    "Basic optimization",
    "Solid optimization",
    "Strong optimization",
    "Highly scientific optimization engine"
  ]
},
{
  id: 3014, pillar: 3, type: "scale",
  title: "We generate predictable pipeline coverage.",
  options: [
    "No predictability",
    "Low predictability",
    "Solid predictability",
    "Strong predictability",
    "Highly predictive pipeline engine"
  ]
},
{
  id: 3015, pillar: 3, type: "scale",
  title: "We run consistent experiments to improve performance.",
  options: [
    "No experiments",
    "Basic experiments",
    "Solid experimentation",
    "Strong experimentation",
    "Highly scientific experimentation culture"
  ]
},
{
  id: 3016, pillar: 3, type: "scale",
  title: "We partner closely with SDRs for effective pipeline.",
  options: [
    "No collaboration",
    "Weak collaboration",
    "Solid collaboration",
    "Strong SDR partnership",
    "Highly orchestrated SDR engine"
  ]
},
{
  id: 3017, pillar: 3, type: "scale",
  title: "We have strong event strategy (webinars, field events, conferences).",
  options: [
    "No event strategy",
    "Weak events",
    "Solid event strategy",
    "Strong event execution",
    "Highly strategic event engine"
  ]
},
{
  id: 3018, pillar: 3, type: "scale",
  title: "Demand Gen contributes strategically to revenue planning.",
  options: [
    "No contribution",
    "Some contribution",
    "Solid contribution",
    "Strong partnership",
    "Highly strategic DG function"
  ]
},
{
  id: 3019, pillar: 3, type: "scale",
  title: "Our DG engine supports efficient scaling.",
  options: [
    "Not scalable",
    "Somewhat scalable",
    "Solid scalability",
    "Strong scalable engine",
    "Highly scalable DG system"
  ]
},
{
  id: 3020, pillar: 3, type: "scale",
  title: "Demand Generation is a strategic pillar of GTM.",
  options: [
    "Not strategic",
    "A bit strategic",
    "Solid strategic impact",
    "Strong strategic driver",
    "Highly strategic DG engine"
  ]
},

/* ===========================================================
   PILLAR 4 — SALES EXECUTION (20 QUESTIONS)
   =========================================================== */

{
  id: 4001, pillar: 4, type: "scale",
  title: "We have a clear, documented sales process.",
  options: [
    "No process",
    "Basic process",
    "Solid process",
    "Strong process",
    "Highly structured sales engine"
  ]
},
{
  id: 4002, pillar: 4, type: "scale",
  title: "We qualify deals effectively.",
  options: [
    "No qualification",
    "Weak qualification",
    "Solid qualification",
    "Strong qualification",
    "Highly disciplined qualification engine"
  ]
},
{
  id: 4003, pillar: 4, type: "scale",
  title: "Our pipeline management is strong.",
  options: [
    "Very weak",
    "Weak",
    "Solid",
    "Strong",
    "Highly predictable pipeline system"
  ]
},
{
  id: 4004, pillar: 4, type: "scale",
  title: "Our forecasting is reliable.",
  options: [
    "Very unreliable",
    "Unreliable",
    "Solid",
    "Strong",
    "Highly reliable forecasting engine"
  ]
},
{
  id: 4005, pillar: 4, type: "scale",
  title: "Reps have strong product knowledge.",
  options: [
    "Very weak",
    "Weak",
    "Solid",
    "Strong",
    "Best-in-class rep expertise"
  ]
},
{
  id: 4006, pillar: 4, type: "scale",
  title: "Reps deliver compelling demos.",
  options: [
    "Very weak",
    "Weak",
    "Solid",
    "Strong",
    "Highly compelling demo engine"
  ]
},
{
  id: 4007, pillar: 4, type: "scale",
  title: "We run strong MEDDIC/BANT or equivalent qualification.",
  options: [
    "No methodology",
    "Weak adoption",
    "Solid adoption",
    "Strong adoption",
    "Highly disciplined qualification system"
  ]
},
{
  id: 4008, pillar: 4, type: "scale",
  title: "We coach reps consistently.",
  options: [
    "No coaching",
    "Weak coaching",
    "Solid coaching",
    "Strong coaching",
    "Highly strategic coaching engine"
  ]
},
{
  id: 4009, pillar: 4, type: "scale",
  title: "We understand why we win and lose deals.",
  options: [
    "No insight",
    "Weak insight",
    "Solid insight",
    "Strong insight",
    "Deep win-loss intelligence"
  ]
},
{
  id: 4010, pillar: 4, type: "scale",
  title: "We handle objections effectively.",
  options: [
    "Very weak",
    "Weak",
    "Solid",
    "Strong",
    "Highly effective objection-handling"
  ]
},
{
  id: 4011, pillar: 4, type: "scale",
  title: "We run strong enterprise sales motions.",
  options: [
    "No enterprise capability",
    "Basic capability",
    "Solid capability",
    "Strong enterprise selling",
    "Highly strategic enterprise engine"
  ]
},
{
  id: 4012, pillar: 4, type: "scale",
  title: "Our sales compensation model drives the right behaviors.",
  options: [
    "Very misaligned",
    "Weak alignment",
    "Solid alignment",
    "Strong alignment",
    "Highly aligned comp model"
  ]
},
{
  id: 4013, pillar: 4, type: "scale",
  title: "We manage territories effectively.",
  options: [
    "No territories",
    "Weak territories",
    "Solid territories",
    "Strong territories",
    "Highly strategic territory engine"
  ]
},
{
  id: 4014, pillar: 4, type: "scale",
  title: "We manage pricing and discounting effectively.",
  options: [
    "Very weak",
    "Weak",
    "Solid",
    "Strong",
    "Highly strategic pricing discipline"
  ]
},
{
  id: 4015, pillar: 4, type: "scale",
  title: "We have strong sales enablement.",
  options: [
    "No enablement",
    "Weak enablement",
    "Solid enablement",
    "Strong enablement",
    "Highly strategic enablement engine"
  ]
},
{
  id: 4016, pillar: 4, type: "scale",
  title: "Sales and Marketing collaborate strongly.",
  options: [
    "Very siloed",
    "Weak collaboration",
    "Solid collaboration",
    "Strong collaboration",
    "Highly aligned revenue engine"
  ]
},
{
  id: 4017, pillar: 4, type: "scale",
  title: "We track rep performance with strong clarity.",
  options: [
    "No insight",
    "Weak insight",
    "Solid insight",
    "Strong insight",
    "Highly granular rep performance intelligence"
  ]
},
{
  id: 4018, pillar: 4, type: "scale",
  title: "We manage sales velocity effectively.",
  options: [
    "No insight",
    "Weak insight",
    "Solid insight",
    "Strong insight",
    "Highly optimized sales velocity"
  ]
},
{
  id: 4019, pillar: 4, type: "scale",
  title: "We remove friction from the sales process proactively.",
  options: [
    "No removal",
    "Weak removal",
    "Solid removal",
    "Strong removal",
    "Highly frictionless selling environment"
  ]
},
{
  id: 4020, pillar: 4, type: "scale",
  title: "Sales Execution is a strategic GTM enabler.",
  options: [
    "Not strategic",
    "Some strategic impact",
    "Solid strategic impact",
    "Strong enabler",
    "Highly strategic sales engine"
  ]
},

   /* ===========================================================
   PILLAR 5 — CUSTOMER SUCCESS & EXPANSION (20 QUESTIONS)
   =========================================================== */

{
  id: 5001, pillar: 5, type: "scale",
  title: "We onboard customers effectively and set them up for early value.",
  options: [
    "Very weak onboarding",
    "Basic onboarding",
    "Solid onboarding",
    "Strong onboarding",
    "Best-in-class onboarding engine"
  ]
},
{
  id: 5002, pillar: 5, type: "scale",
  title: "We manage customer health proactively.",
  options: [
    "No health model",
    "Basic health scoring",
    "Solid model",
    "Strong health management",
    "Highly predictive customer health engine"
  ]
},
{
  id: 5003, pillar: 5, type: "scale",
  title: "We understand key drivers of retention and churn.",
  options: [
    "No insight",
    "Basic insight",
    "Solid understanding",
    "Strong insight",
    "Deep retention intelligence"
  ]
},
{
  id: 5004, pillar: 5, type: "scale",
  title: "We run effective QBRs and customer reviews.",
  options: [
    "No QBR structure",
    "Inconsistent QBRs",
    "Solid QBR program",
    "Strong QBR execution",
    "Highly strategic QBR engine"
  ]
},
{
  id: 5005, pillar: 5, type: "scale",
  title: "Our CS team collaborates effectively with Product and Sales.",
  options: [
    "Very siloed",
    "Some collaboration",
    "Solid collaboration",
    "Strong collaboration",
    "Highly aligned cross-functional CS"
  ]
},
{
  id: 5006, pillar: 5, type: "scale",
  title: "We identify expansion opportunities proactively.",
  options: [
    "No expansion motion",
    "Basic expansion effort",
    "Solid expansion program",
    "Strong expansion engine",
    "Deep predictive expansion system"
  ]
},
{
  id: 5007, pillar: 5, type: "scale",
  title: "We have a strong renewal motion.",
  options: [
    "Very weak",
    "Weak",
    "Solid",
    "Strong",
    "Highly predictable renewal engine"
  ]
},
{
  id: 5008, pillar: 5, type: "scale",
  title: "We measure customer adoption effectively.",
  options: [
    "No measurement",
    "Basic measurement",
    "Solid measurement",
    "Strong measurement",
    "Highly granular adoption intelligence"
  ]
},
{
  id: 5009, pillar: 5, type: "scale",
  title: "We provide strong customer education and enablement.",
  options: [
    "No education",
    "Basic education",
    "Solid education",
    "Strong education",
    "Best-in-class customer enablement"
  ]
},
{
  id: 5010, pillar: 5, type: "scale",
  title: "We manage accounts effectively across CS and AM.",
  options: [
    "No structure",
    "Weak structure",
    "Solid structure",
    "Strong consistency",
    "Highly predictable account management"
  ]
},
{
  id: 5011, pillar: 5, type: "scale",
  title: "We communicate value to customers regularly.",
  options: [
    "No communication",
    "Basic communication",
    "Solid communication",
    "Strong communication",
    "Highly strategic value communication"
  ]
},
{
  id: 5012, pillar: 5, type: "scale",
  title: "We use customer feedback to drive improvements.",
  options: [
    "No feedback loop",
    "Weak loop",
    "Solid feedback usage",
    "Strong feedback loop",
    "Highly strategic customer insight engine"
  ]
},
{
  id: 5013, pillar: 5, type: "scale",
  title: "We collaborate with Sales on renewals and upsell opportunities.",
  options: [
    "Very siloed",
    "Limited collaboration",
    "Solid collaboration",
    "Strong collaboration",
    "Highly integrated CS + Sales motion"
  ]
},
{
  id: 5014, pillar: 5, type: "scale",
  title: "We manage at-risk accounts proactively.",
  options: [
    "No risk management",
    "Basic risk management",
    "Solid risk program",
    "Strong risk mitigation",
    "Deep predictive account health system"
  ]
},
{
  id: 5015, pillar: 5, type: "scale",
  title: "We maintain strong CS documentation and processes.",
  options: [
    "No documentation",
    "Weak documentation",
    "Solid documentation",
    "Strong documentation",
    "Highly structured CS playbook"
  ]
},
{
  id: 5016, pillar: 5, type: "scale",
  title: "We run scalable CS operations.",
  options: [
    "Not scalable",
    "Some scalability",
    "Solid scalability",
    "Strong scalability",
    "Highly scalable CS engine"
  ]
},
{
  id: 5017, pillar: 5, type: "scale",
  title: "We integrate CS data effectively across systems.",
  options: [
    "No integration",
    "Weak integration",
    "Solid integration",
    "Strong integration",
    "Highly coherent CS data architecture"
  ]
},
{
  id: 5018, pillar: 5, type: "scale",
  title: "Customer Success is a strategic driver of revenue.",
  options: [
    "Not strategic",
    "Some strategic role",
    "Solid role",
    "Strong strategic function",
    "Highly strategic CS engine"
  ]
},
{
  id: 5019, pillar: 5, type: "scale",
  title: "Our CS function supports efficient and predictable growth.",
  options: [
    "Not supportive",
    "Some support",
    "Solid contribution",
    "Strong contribution",
    "Highly strategic growth enabler"
  ]
},
{
  id: 5020, pillar: 5, type: "scale",
  title: "Customer Success is a competitive advantage.",
  options: [
    "Not an advantage",
    "Weak advantage",
    "Solid advantage",
    "Strong advantage",
    "Major competitive advantage"
  ]
},

/* ===========================================================
   PILLAR 6 — REVENUE OPERATIONS & SYSTEMS (20 QUESTIONS)
   =========================================================== */

{
  id: 6001, pillar: 6, type: "scale",
  title: "We have a unified RevOps function across Sales, Marketing and CS.",
  options: [
    "No unified ops",
    "Basic siloed ops",
    "Solid ops",
    "Strong unified ops",
    "Fully integrated RevOps engine"
  ]
},
{
  id: 6002, pillar: 6, type: "scale",
  title: "Our CRM is well configured and supports efficient workflows.",
  options: [
    "Very poor CRM setup",
    "Basic setup",
    "Solid CRM",
    "Strong CRM setup",
    "Highly optimized CRM"
  ]
},
{
  id: 6003, pillar: 6, type: "scale",
  title: "We maintain clear documented GTM workflows.",
  options: [
    "No documentation",
    "Outdated or basic documentation",
    "Solid documentation",
    "Strong documentation",
    "Fully standardized GTM operating system"
  ]
},
{
  id: 6004, pillar: 6, type: "scale",
  title: "We automate repetitive GTM tasks effectively.",
  options: [
    "No automation",
    "Basic automation",
    "Solid automation",
    "Strong automation",
    "Highly automated GTM architecture"
  ]
},
{
  id: 6005, pillar: 6, type: "scale",
  title: "We maintain strong data quality across systems.",
  options: [
    "Very poor data quality",
    "Basic quality",
    "Solid quality",
    "Strong data quality",
    "Deep governed data excellence"
  ]
},
{
  id: 6006, pillar: 6, type: "scale",
  title: "Handoffs between GTM teams are clear and reliable.",
  options: [
    "Very inconsistent",
    "Basic handoffs",
    "Solid handoffs",
    "Strong handoffs",
    "Highly predictable handoff engine"
  ]
},
{
  id: 6007, pillar: 6, type: "scale",
  title: "We have strong cross-functional collaboration.",
  options: [
    "Very siloed",
    "Some collaboration",
    "Solid collaboration",
    "Strong collaboration",
    "Highly aligned GTM operations"
  ]
},
{
  id: 6008, pillar: 6, type: "scale",
  title: "Our GTM tools integrate well across systems.",
  options: [
    "Major silos",
    "Some integrations",
    "Solid integrations",
    "Strong integrations",
    "Fully coherent GTM architecture"
  ]
},
{
  id: 6009, pillar: 6, type: "scale",
  title: "We operate with a clear GTM cadence.",
  options: [
    "No cadence",
    "Basic cadence",
    "Solid cadence",
    "Strong cadence",
    "Highly orchestrated GTM rhythm"
  ]
},
{
  id: 6010, pillar: 6, type: "scale",
  title: "We maintain strong systems administration.",
  options: [
    "No governance",
    "Basic governance",
    "Solid governance",
    "Strong governance",
    "Highly mature governance engine"
  ]
},
{
  id: 6011, pillar: 6, type: "scale",
  title: "We maintain clean standardized data structures.",
  options: [
    "No structure",
    "Basic structure",
    "Solid structure",
    "Strong structure",
    "Highly optimized data architecture"
  ]
},
{
  id: 6012, pillar: 6, type: "scale",
  title: "We maintain SLAs for GTM operations.",
  options: [
    "No SLAs",
    "Basic SLAs",
    "Solid SLAs",
    "Strong SLAs",
    "Highly reliable operations engine"
  ]
},
{
  id: 6013, pillar: 6, type: "scale",
  title: "We regularly evaluate and refine GTM processes.",
  options: [
    "No improvement motion",
    "Occasional improvements",
    "Solid improvement motion",
    "Strong continuous improvement",
    "Highly optimized improvement engine"
  ]
},
{
  id: 6014, pillar: 6, type: "scale",
  title: "Ops provides strong analytics and insights.",
  options: [
    "No analytics",
    "Basic reporting",
    "Solid insights",
    "Strong analytics",
    "Highly strategic insights engine"
  ]
},
{
  id: 6015, pillar: 6, type: "scale",
  title: "We maintain a strong enablement program for tools and workflows.",
  options: [
    "No enablement",
    "Basic enablement",
    "Solid enablement",
    "Strong enablement",
    "Highly strategic enablement"
  ]
},
{
  id: 6016, pillar: 6, type: "scale",
  title: "We run quarterly and annual planning with strong alignment.",
  options: [
    "No planning",
    "Basic planning",
    "Solid planning",
    "Strong planning",
    "Highly strategic planning engine"
  ]
},
{
  id: 6017, pillar: 6, type: "scale",
  title: "We manage GTM capacity proactively.",
  options: [
    "No capacity management",
    "Basic capacity handling",
    "Solid capacity management",
    "Strong capacity planning",
    "Highly predictive resourcing engine"
  ]
},
{
  id: 6018, pillar: 6, type: "scale",
  title: "Ops collaborates with Product on GTM readiness.",
  options: [
    "No collaboration",
    "Basic collaboration",
    "Solid collaboration",
    "Strong collaboration",
    "Highly strategic launch engine"
  ]
},
{
  id: 6019, pillar: 6, type: "scale",
  title: "Our RevOps team has the skills and influence to support GTM effectively.",
  options: [
    "Very limited",
    "Basic capability",
    "Solid capability",
    "Strong capability",
    "Highly strategic RevOps"
  ]
},
{
  id: 6020, pillar: 6, type: "scale",
  title: "Revenue Operations is a strategic enabler of predictable revenue.",
  options: [
    "Not strategic",
    "Some impact",
    "Solid impact",
    "Strong strategic role",
    "Highly strategic revenue backbone"
  ]
},

/* ===========================================================
   PILLAR 7 — PRODUCT & PACKAGING (20 QUESTIONS)
   =========================================================== */

{
  id: 7001, pillar: 7, type: "scale",
  title: "Our product strategy is clear and aligned with GTM.",
  options: [
    "No strategy",
    "Basic, misaligned strategy",
    "Solid strategy",
    "Strong alignment",
    "Fully aligned strategic product engine"
  ]
},
{
  id: 7002, pillar: 7, type: "scale",
  title: "Our product solves a clear, validated problem for our ICP.",
  options: [
    "No validation",
    "Limited validation",
    "Solid validation",
    "Strong validation",
    "Deep problem validation guiding roadmap"
  ]
},
{
  id: 7003, pillar: 7, type: "scale",
  title: "Our packaging (modules, tiers, bundles) is clear and aligned to value.",
  options: [
    "Confusing packaging",
    "Basic structure",
    "Solid packaging",
    "Strong clarity",
    "Highly optimized packaging"
  ]
},
{
  id: 7004, pillar: 7, type: "scale",
  title: "Our pricing model is clear and predictable.",
  options: [
    "Very unclear",
    "Basic pricing",
    "Solid pricing",
    "Strong clarity",
    "Highly intuitive pricing"
  ]
},
{
  id: 7005, pillar: 7, type: "scale",
  title: "Our pricing is validated with customers.",
  options: [
    "No validation",
    "Basic assumptions",
    "Some validation",
    "Strong validation",
    "Deep pricing intelligence"
  ]
},
{
  id: 7006, pillar: 7, type: "scale",
  title: "Customers understand the value at each tier.",
  options: [
    "No clarity",
    "Basic clarity",
    "Solid clarity",
    "Strong clarity",
    "Highly clear value per tier"
  ]
},
{
  id: 7007, pillar: 7, type: "scale",
  title: "Our onboarding supports fast time-to-value.",
  options: [
    "Poor onboarding",
    "Basic onboarding",
    "Solid onboarding",
    "Strong onboarding",
    "Best-in-class activation engine"
  ]
},
{
  id: 7008, pillar: 7, type: "scale",
  title: "We understand which product capabilities drive conversion.",
  options: [
    "No insight",
    "Limited insight",
    "Solid insight",
    "Strong insight",
    "Deep capability intelligence"
  ]
},
{
  id: 7009, pillar: 7, type: "scale",
  title: "Our product roadmap is informed by customer and GTM feedback.",
  options: [
    "No input",
    "Some input",
    "Solid input",
    "Strong insight loop",
    "Fully data-driven roadmap"
  ]
},
{
  id: 7010, pillar: 7, type: "scale",
  title: "Our product is easy to demo and supports sales.",
  options: [
    "Difficult to demo",
    "Basic demo ability",
    "Solid demo-ability",
    "Strong demo fit",
    "Highly demoable product"
  ]
},
{
  id: 7011, pillar: 7, type: "scale",
  title: "We understand which product usage patterns correlate with retention.",
  options: [
    "No insight",
    "Basic insight",
    "Solid insight",
    "Strong insight",
    "Deep retention intelligence"
  ]
},
{
  id: 7012, pillar: 7, type: "scale",
  title: "Our PLG or trial motion drives conversion effectively.",
  options: [
    "No PLG motion",
    "Basic trial",
    "Solid PLG",
    "Strong PLG engine",
    "Highly optimized PLG system"
  ]
},
{
  id: 7013, pillar: 7, type: "scale",
  title: "Our product documentation helps customers succeed.",
  options: [
    "Very poor documentation",
    "Basic docs",
    "Solid docs",
    "Strong documentation",
    "Best-in-class customer education"
  ]
},
{
  id: 7014, pillar: 7, type: "scale",
  title: "Our packaging supports upsell and expansion.",
  options: [
    "No expansion structure",
    "Basic structure",
    "Solid structure",
    "Strong expansion fit",
    "Highly optimized expansion architecture"
  ]
},
{
  id: 7015, pillar: 7, type: "scale",
  title: "We clearly differentiate product tiers.",
  options: [
    "No differentiation",
    "Basic differentiation",
    "Solid differentiation",
    "Strong clarity",
    "Highly strategic tiering"
  ]
},
{
  id: 7016, pillar: 7, type: "scale",
  title: "We understand which product gaps block deals.",
  options: [
    "No clarity",
    "Basic clarity",
    "Solid clarity",
    "Strong clarity",
    "Deep blocker intelligence"
  ]
},
{
  id: 7017, pillar: 7, type: "scale",
  title: "We support strong partner or ecosystem integrations.",
  options: [
    "No integrations",
    "Basic integrations",
    "Solid integrations",
    "Strong ecosystem fit",
    "Highly strategic integration system"
  ]
},
{
  id: 7018, pillar: 7, type: "scale",
  title: "We support strong in-product onboarding and guidance.",
  options: [
    "No guidance",
    "Basic guidance",
    "Solid guidance",
    "Strong guidance",
    "Best-in-class activation guidance"
  ]
},
{
  id: 7019, pillar: 7, type: "scale",
  title: "We measure product adoption across segments effectively.",
  options: [
    "No measurement",
    "Basic measurement",
    "Solid measurement",
    "Strong analytics",
    "Highly granular adoption intelligence"
  ]
},
{
  id: 7020, pillar: 7, type: "scale",
  title: "Product & Packaging is a strategic driver of predictable revenue.",
  options: [
    "Not strategic",
    "Some strategic impact",
    "Solid strategic impact",
    "Strong driver",
    "Highly strategic product engine"
  ]
},

/* ===========================================================
   PILLAR 8 — BRAND & COMMUNICATIONS (20 QUESTIONS)
   =========================================================== */

{
  id: 8001, pillar: 8, type: "scale",
  title: "Our brand narrative is clear and compelling.",
  options: [
    "No narrative",
    "Basic narrative",
    "Decent narrative",
    "Strong narrative",
    "Highly differentiated strategic narrative"
  ]
},
{
  id: 8002, pillar: 8, type: "scale",
  title: "Our visual identity is consistent across all assets.",
  options: [
    "No consistency",
    "Basic consistency",
    "Solid consistency",
    "Strong consistency",
    "Fully unified identity"
  ]
},
{
  id: 8003, pillar: 8, type: "scale",
  title: "We maintain clear brand guidelines used by all teams.",
  options: [
    "No guidelines",
    "Basic guidelines",
    "Solid guidelines",
    "Strong adoption",
    "Best-in-class brand governance"
  ]
},
{
  id: 8004, pillar: 8, type: "scale",
  title: "Our messaging is consistent across all channels.",
  options: [
    "No consistency",
    "Basic consistency",
    "Solid consistency",
    "Strong alignment",
    "Fully aligned messaging"
  ]
},
{
  id: 8005, pillar: 8, type: "scale",
  title: "We tell a compelling brand story.",
  options: [
    "No story",
    "Generic story",
    "Decent story",
    "Strong emotional story",
    "Deep compelling brand narrative"
  ]
},
{
  id: 8006, pillar: 8, type: "scale",
  title: "Our communication style is clear and professional.",
  options: [
    "No clarity",
    "Basic clarity",
    "Solid clarity",
    "Strong clarity",
    "Highly refined communication style"
  ]
},
{
  id: 8007, pillar: 8, type: "scale",
  title: "We communicate value clearly rather than focusing on features.",
  options: [
    "Feature-centric",
    "Some value communication",
    "Solid value messaging",
    "Strong value-first messaging",
    "Deep value articulation"
  ]
},
{
  id: 8008, pillar: 8, type: "scale",
  title: "We maintain consistent brand presence across channels.",
  options: [
    "No consistency",
    "Basic presence",
    "Solid presence",
    "Strong consistency",
    "Fully unified brand engine"
  ]
},
{
  id: 8009, pillar: 8, type: "scale",
  title: "We have strong PR, analyst, and thought leadership motions.",
  options: [
    "No initiatives",
    "Basic initiatives",
    "Solid initiatives",
    "Strong initiatives",
    "Highly influential brand engine"
  ]
},
{
  id: 8010, pillar: 8, type: "scale",
  title: "We communicate consistently with customers.",
  options: [
    "No communication",
    "Basic communication",
    "Solid communication",
    "Strong communication",
    "Highly orchestrated communication engine"
  ]
},
{
  id: 8011, pillar: 8, type: "scale",
  title: "We use storytelling effectively in marketing.",
  options: [
    "No storytelling",
    "Basic storytelling",
    "Solid storytelling",
    "Strong storytelling",
    "Highly effective storytelling engine"
  ]
},
{
  id: 8012, pillar: 8, type: "scale",
  title: "Our brand is distinctive and recognizable.",
  options: [
    "Not distinctive",
    "Some distinctiveness",
    "Solid distinctiveness",
    "Strong differentiation",
    "Highly recognizable unique brand"
  ]
},
{
  id: 8013, pillar: 8, type: "scale",
  title: "We position ourselves clearly against competitors.",
  options: [
    "No positioning",
    "Basic positioning",
    "Solid positioning",
    "Strong positioning",
    "Highly differentiated position"
  ]
},
{
  id: 8014, pillar: 8, type: "scale",
  title: "We have a strong social media presence.",
  options: [
    "No presence",
    "Basic presence",
    "Solid presence",
    "Strong presence",
    "Highly strategic social engine"
  ]
},
{
  id: 8015, pillar: 8, type: "scale",
  title: "We maintain strong messaging frameworks.",
  options: [
    "No frameworks",
    "Basic frameworks",
    "Solid frameworks",
    "Strong adoption",
    "Best-in-class messaging architecture"
  ]
},
{
  id: 8016, pillar: 8, type: "scale",
  title: "Our thought leadership builds category authority.",
  options: [
    "No leadership",
    "Basic leadership",
    "Solid leadership",
    "Strong leadership",
    "Highly influential category authority"
  ]
},
{
  id: 8017, pillar: 8, type: "scale",
  title: "We communicate clearly during launches and updates.",
  options: [
    "No structure",
    "Basic structure",
    "Solid structure",
    "Strong communication",
    "Highly orchestrated communication engine"
  ]
},
{
  id: 8018, pillar: 8, type: "scale",
  title: "We measure brand perception effectively.",
  options: [
    "No measurement",
    "Basic measurement",
    "Solid measurement",
    "Strong insight",
    "Deep strategic brand intelligence"
  ]
},
{
  id: 8019, pillar: 8, type: "scale",
  title: "We maintain strong internal communication.",
  options: [
    "Very weak",
    "Weak",
    "Solid",
    "Strong",
    "Highly aligned internal communication ecosystem"
  ]
},
{
  id: 8020, pillar: 8, type: "scale",
  title: "Brand & Communications is a strategic GTM driver.",
  options: [
    "Not strategic",
    "Some strategic impact",
    "Solid impact",
    "Strong strategic driver",
    "Highly strategic brand engine"
  ]
},

   /* ===========================================================
   PILLAR 9 — DATA & INSIGHTS (20 QUESTIONS)
   =========================================================== */

{
  id: 9001, pillar: 9, type: "scale",
  title: "We have clear, documented definitions for core GTM metrics.",
  options: [
    "No definitions",
    "Informal definitions",
    "Basic documentation",
    "Strong documented definitions",
    "Fully standardized metric system"
  ]
},
{
  id: 9002, pillar: 9, type: "scale",
  title: "We operate with a single source of truth for GTM reporting.",
  options: [
    "Multiple conflicting sources",
    "Some consolidation",
    "Mostly unified",
    "Clear primary source",
    "Fully unified, trusted data foundation"
  ]
},
{
  id: 9003, pillar: 9, type: "scale",
  title: "We have dashboards that cover the full GTM funnel.",
  options: [
    "No dashboards",
    "Basic top-funnel dashboards",
    "Solid funnel coverage",
    "Comprehensive funnel dashboards",
    "Full-funnel intelligence used daily"
  ]
},
{
  id: 9004, pillar: 9, type: "scale",
  title: "Leaders use dashboards regularly to run reviews and make decisions.",
  options: [
    "Rare usage",
    "Occasional usage",
    "Regular usage",
    "Core to reviews",
    "Deeply data-driven leadership culture"
  ]
},
{
  id: 9005, pillar: 9, type: "scale",
  title: "We track a focused set of KPIs aligned to strategy.",
  options: [
    "No KPI system",
    "Unfocused KPIs",
    "Solid KPI set",
    "Strong strategic KPIs",
    "Highly strategic KPI model"
  ]
},
{
  id: 9006, pillar: 9, type: "scale",
  title: "We have a clear attribution model to understand revenue drivers.",
  options: [
    "No attribution",
    "Weak attribution",
    "Solid attribution",
    "Strong attribution",
    "Advanced attribution shaping GTM"
  ]
},
{
  id: 9007, pillar: 9, type: "scale",
  title: "Pipeline and revenue reporting is accurate and trusted.",
  options: [
    "Frequently challenged",
    "Basic accuracy",
    "Generally trusted",
    "Strong reliability",
    "Highly reliable reporting foundation"
  ]
},
{
  id: 9008, pillar: 9, type: "scale",
  title: "GTM data quality is actively monitored and managed.",
  options: [
    "Unknown / poor",
    "Some cleanup",
    "Solid monitoring",
    "Strong data quality program",
    "Proactive data excellence"
  ]
},
{
  id: 9009, pillar: 9, type: "scale",
  title: "Teams have self-service access to the data they need.",
  options: [
    "No access",
    "Limited access",
    "Solid access",
    "Broad access",
    "Fully democratized, self-serve analytics"
  ]
},
{
  id: 9010, pillar: 9, type: "scale",
  title: "We have a consistent reporting cadence (daily, weekly, monthly).",
  options: [
    "No cadence",
    "Ad-hoc cadence",
    "Solid cadence",
    "Strong cadence",
    "Fully orchestrated reporting rhythm"
  ]
},
{
  id: 9011, pillar: 9, type: "scale",
  title: "Our forecasting process is supported by reliable data.",
  options: [
    "Opinion-based forecasting",
    "Basic data support",
    "Solid forecasting",
    "Strong forecasting",
    "Highly reliable, data-driven forecasting"
  ]
},
{
  id: 9012, pillar: 9, type: "scale",
  title: "We can segment and analyze performance easily (region, ICP, channel).",
  options: [
    "Very limited segmentation",
    "Basic segmentation",
    "Solid segmentation",
    "Strong segmentation",
    "Deep flexible segmentation engine"
  ]
},
{
  id: 9013, pillar: 9, type: "scale",
  title: "We analyze product usage to support GTM decisions.",
  options: [
    "No usage analytics",
    "Basic metrics",
    "Solid analytics",
    "Strong analytics",
    "Deep product intelligence"
  ]
},
{
  id: 9014, pillar: 9, type: "scale",
  title: "We measure the impact of experiments with reliable analytics.",
  options: [
    "No measurement",
    "Basic measurement",
    "Solid measurement",
    "Strong measurement",
    "Systematic experimentation engine"
  ]
},
{
  id: 9015, pillar: 9, type: "scale",
  title: "Data ownership and governance are clearly defined.",
  options: [
    "No governance",
    "Weak governance",
    "Solid governance",
    "Strong governance",
    "Mature governance with stewardship"
  ]
},
{
  id: 9016, pillar: 9, type: "scale",
  title: "Our systems integrate well so data flows reliably.",
  options: [
    "Major silos",
    "Some integrations",
    "Solid integrations",
    "Strong integrations",
    "Highly coherent system architecture"
  ]
},
{
  id: 9017, pillar: 9, type: "scale",
  title: "Dashboards and reports connect directly to strategic objectives.",
  options: [
    "No connection",
    "Weak alignment",
    "Solid alignment",
    "Strong alignment",
    "Fully strategy-aligned reporting system"
  ]
},
{
  id: 9018, pillar: 9, type: "scale",
  title: "We can quickly drill down from KPIs to root causes.",
  options: [
    "Very difficult",
    "Manual, slow",
    "Decent drill-down",
    "Strong drill-down",
    "Fast, systematic root-cause engine"
  ]
},
{
  id: 9019, pillar: 9, type: "scale",
  title: "We set data-driven targets and track improvements over time.",
  options: [
    "Not data-driven",
    "Somewhat data-driven",
    "Solid target system",
    "Strong target tracking",
    "Deep benchmark-driven target engine"
  ]
},
{
  id: 9020, pillar: 9, type: "scale",
  title: "Data & Insights is a strategic partner to leadership and GTM.",
  options: [
    "Pure reporting",
    "Some advisory role",
    "Solid partnership",
    "Strong strategic partner",
    "Highly strategic insights engine"
  ]
},

/* ===========================================================
   PILLAR 10 — OPERATIONS & SYSTEMS (20 QUESTIONS)
   =========================================================== */

{
  id: 10001, pillar: 10, type: "scale",
  title: "We have clear documented processes for all major GTM workflows.",
  options: [
    "No documentation",
    "Basic documentation",
    "Solid documentation",
    "Strong documentation",
    "Fully standardized GTM operating system"
  ]
},
{
  id: 10002, pillar: 10, type: "scale",
  title: "We have strong cross-functional alignment across GTM.",
  options: [
    "Very poor alignment",
    "Basic alignment",
    "Solid alignment",
    "Strong alignment",
    "Highly aligned execution engine"
  ]
},
{
  id: 10003, pillar: 10, type: "scale",
  title: "We operate with a clear GTM cadence.",
  options: [
    "No cadence",
    "Basic cadence",
    "Solid cadence",
    "Strong cadence",
    "Highly orchestrated operating rhythm"
  ]
},
{
  id: 10004, pillar: 10, type: "scale",
  title: "Our tech stack is well configured and used effectively.",
  options: [
    "Poor configuration",
    "Basic setup",
    "Solid setup",
    "Strong configuration",
    "Highly optimized GTM system"
  ]
},
{
  id: 10005, pillar: 10, type: "scale",
  title: "We automate repetitive GTM tasks effectively.",
  options: [
    "No automation",
    "Basic automation",
    "Solid automation",
    "Strong automation",
    "Highly automated GTM engine"
  ]
},
{
  id: 10006, pillar: 10, type: "scale",
  title: "We maintain strong data quality standards.",
  options: [
    "Very poor quality",
    "Basic standards",
    "Solid quality",
    "Strong quality program",
    "Deep governed data operations"
  ]
},
{
  id: 10007, pillar: 10, type: "scale",
  title: "Hand-offs between GTM teams are clearly defined and reliable.",
  options: [
    "Very inconsistent",
    "Basic hand-offs",
    "Solid hand-offs",
    "Strong hand-offs",
    "Seamless automated hand-offs"
  ]
},
{
  id: 10008, pillar: 10, type: "scale",
  title: "We maintain clear documentation and enablement for all tools and workflows.",
  options: [
    "No documentation",
    "Basic documentation",
    "Solid documentation",
    "Strong documentation",
    "Full structured knowledge base"
  ]
},
{
  id: 10009, pillar: 10, type: "scale",
  title: "Our GTM systems are well integrated.",
  options: [
    "Very poor integration",
    "Basic integration",
    "Solid integration",
    "Strong integration",
    "Highly reliable connected architecture"
  ]
},
{
  id: 10010, pillar: 10, type: "scale",
  title: "We maintain strong systems administration.",
  options: [
    "No governance",
    "Basic governance",
    "Solid governance",
    "Strong governance",
    "Best-in-class governance"
  ]
},
{
  id: 10011, pillar: 10, type: "scale",
  title: "We maintain consistent SLAs across GTM operations.",
  options: [
    "No SLAs",
    "Basic SLAs",
    "Solid SLAs",
    "Strong SLAs",
    "Highly reliable operations engine"
  ]
},
{
  id: 10012, pillar: 10, type: "scale",
  title: "We track process performance and continuously improve workflows.",
  options: [
    "No improvement",
    "Occasional improvements",
    "Solid improvements",
    "Strong continuous improvement",
    "Fully optimized improvement engine"
  ]
},
{
  id: 10013, pillar: 10, type: "scale",
  title: "Our RevOps team has the skills and capacity to support GTM.",
  options: [
    "No dedicated ops",
    "Basic ops",
    "Solid ops",
    "Strong ops",
    "Highly strategic ops engine"
  ]
},
{
  id: 10014, pillar: 10, type: "scale",
  title: "We manage GTM projects with clear owners and timelines.",
  options: [
    "No project management",
    "Ad-hoc management",
    "Solid project management",
    "Strong management",
    "Highly reliable execution engine"
  ]
},
{
  id: 10015, pillar: 10, type: "scale",
  title: "We run quarterly and annual planning with clear outputs.",
  options: [
    "No planning",
    "Basic planning",
    "Solid planning",
    "Strong planning",
    "Highly aligned strategic planning"
  ]
},
{
  id: 10016, pillar: 10, type: "scale",
  title: "We have strong change management for new tools and processes.",
  options: [
    "No change management",
    "Basic communication",
    "Solid change management",
    "Strong adoption",
    "Highly effective change engine"
  ]
},
{
  id: 10017, pillar: 10, type: "scale",
  title: "We monitor capacity needs to avoid bottlenecks.",
  options: [
    "No capacity management",
    "Basic insight",
    "Solid management",
    "Strong planning",
    "Predictive resourcing engine"
  ]
},
{
  id: 10018, pillar: 10, type: "scale",
  title: "We maintain strong onboarding and enablement for GTM roles.",
  options: [
    "No onboarding",
    "Basic onboarding",
    "Solid onboarding",
    "Strong onboarding",
    "Best-in-class enablement"
  ]
},
{
  id: 10019, pillar: 10, type: "scale",
  title: "We use retrospectives and feedback loops to improve execution.",
  options: [
    "No retrospectives",
    "Occasional retrospectives",
    "Solid retrospectives",
    "Strong retrospectives",
    "Continuous improvement engine"
  ]
},
{
  id: 10020, pillar: 10, type: "scale",
  title: "Operations & Systems is a strategic enabler of predictable revenue.",
  options: [
    "Not strategic",
    "Some impact",
    "Solid impact",
    "Strong enabler",
    "Highly strategic GTM backbone"
  ]
},

/* ===========================================================
   PILLAR 11 — ENABLEMENT (20 QUESTIONS)
   Training, playbooks, onboarding, knowledge management
   =========================================================== */

{
  id: 11001, pillar: 11, type: "scale",
  title: "We have structured onboarding for new GTM hires.",
  options: [
    "No onboarding program",
    "Basic informal onboarding",
    "Solid onboarding program",
    "Strong structured onboarding",
    "Best-in-class onboarding engine"
  ]
},
{
  id: 11002, pillar: 11, type: "scale",
  title: "New sales reps ramp to full productivity predictably.",
  options: [
    "Very unpredictable ramp",
    "Inconsistent ramp",
    "Solid ramp time",
    "Strong predictable ramp",
    "Highly optimized ramp engine"
  ]
},
{
  id: 11003, pillar: 11, type: "scale",
  title: "We maintain up-to-date playbooks for key GTM motions.",
  options: [
    "No playbooks",
    "Outdated or incomplete playbooks",
    "Solid playbooks",
    "Strong comprehensive playbooks",
    "Best-in-class playbook library"
  ]
},
{
  id: 11004, pillar: 11, type: "scale",
  title: "Our GTM teams have access to the training they need.",
  options: [
    "No training available",
    "Limited ad-hoc training",
    "Solid training programs",
    "Strong training access",
    "Comprehensive enablement platform"
  ]
},
{
  id: 11005, pillar: 11, type: "scale",
  title: "We provide strong product training and certification.",
  options: [
    "No product training",
    "Basic informal training",
    "Solid product training",
    "Strong certification program",
    "Best-in-class product enablement"
  ]
},
{
  id: 11006, pillar: 11, type: "scale",
  title: "Sales teams have access to high-quality sales collateral.",
  options: [
    "No collateral",
    "Outdated or limited collateral",
    "Solid collateral library",
    "Strong sales enablement content",
    "Comprehensive content engine"
  ]
},
{
  id: 11007, pillar: 11, type: "scale",
  title: "We maintain a central knowledge base for GTM teams.",
  options: [
    "No knowledge base",
    "Basic scattered documentation",
    "Solid knowledge base",
    "Strong organized knowledge hub",
    "Best-in-class knowledge system"
  ]
},
{
  id: 11008, pillar: 11, type: "scale",
  title: "We provide ongoing coaching and skill development.",
  options: [
    "No coaching",
    "Occasional informal coaching",
    "Solid coaching program",
    "Strong systematic coaching",
    "Elite coaching culture"
  ]
},
{
  id: 11009, pillar: 11, type: "scale",
  title: "Our enablement content is easy to find and access.",
  options: [
    "Very difficult to find",
    "Basic discoverability",
    "Solid accessibility",
    "Strong searchability",
    "Instant, intuitive access"
  ]
},
{
  id: 11010, pillar: 11, type: "scale",
  title: "We track enablement effectiveness and ROI.",
  options: [
    "No measurement",
    "Basic tracking",
    "Solid measurement",
    "Strong ROI visibility",
    "Deep enablement intelligence"
  ]
},
{
  id: 11011, pillar: 11, type: "scale",
  title: "We provide strong competitive intelligence and battle cards.",
  options: [
    "No competitive enablement",
    "Outdated battle cards",
    "Solid competitive content",
    "Strong battle card system",
    "Real-time competitive intelligence"
  ]
},
{
  id: 11012, pillar: 11, type: "scale",
  title: "We enable teams on new product launches effectively.",
  options: [
    "No launch enablement",
    "Basic launch communication",
    "Solid launch enablement",
    "Strong launch readiness",
    "Best-in-class launch engine"
  ]
},
{
  id: 11013, pillar: 11, type: "scale",
  title: "Managers are trained to coach their teams effectively.",
  options: [
    "No manager training",
    "Basic manager training",
    "Solid manager development",
    "Strong manager enablement",
    "Elite manager development program"
  ]
},
{
  id: 11014, pillar: 11, type: "scale",
  title: "We provide just-in-time enablement when teams need it.",
  options: [
    "No on-demand support",
    "Limited reactive support",
    "Solid on-demand resources",
    "Strong just-in-time enablement",
    "Instant contextual enablement"
  ]
},
{
  id: 11015, pillar: 11, type: "scale",
  title: "We maintain standardized GTM processes and workflows.",
  options: [
    "No standardization",
    "Inconsistent processes",
    "Solid process documentation",
    "Strong standardized workflows",
    "Fully operationalized GTM system"
  ]
},
{
  id: 11016, pillar: 11, type: "scale",
  title: "We regularly update enablement content to keep it relevant.",
  options: [
    "Never updated",
    "Rarely updated",
    "Solid update cadence",
    "Strong regular updates",
    "Real-time content maintenance"
  ]
},
{
  id: 11017, pillar: 11, type: "scale",
  title: "Our enablement team collaborates closely with GTM leaders.",
  options: [
    "Very disconnected",
    "Limited collaboration",
    "Solid partnership",
    "Strong alignment",
    "Fully integrated enablement function"
  ]
},
{
  id: 11018, pillar: 11, type: "scale",
  title: "We provide role-specific training paths for different GTM roles.",
  options: [
    "No role-specific training",
    "Generic training only",
    "Solid role-specific content",
    "Strong learning paths",
    "Personalized learning engine"
  ]
},
{
  id: 11019, pillar: 11, type: "scale",
  title: "Teams can contribute to and improve enablement content.",
  options: [
    "No contribution mechanism",
    "Limited feedback",
    "Solid contribution loop",
    "Strong collaborative content",
    "Fully crowd-sourced knowledge system"
  ]
},
{
  id: 11020, pillar: 11, type: "scale",
  title: "Enablement is a strategic driver of GTM performance.",
  options: [
    "Not strategic",
    "Limited impact",
    "Solid impact",
    "Strong strategic enabler",
    "Highly strategic performance multiplier"
  ]
},

   /* ===========================================================
   PILLAR 12 — LEADERSHIP & ALIGNMENT (20 QUESTIONS)
   =========================================================== */

{
  id: 12001, pillar: 12, type: "scale",
  title: "Our leadership team provides a clear and consistent GTM direction.",
  options: [
    "No clear direction",
    "Inconsistent direction",
    "Reasonably clear direction",
    "Strong, steady direction",
    "Exceptionally clear strategic direction"
  ]
},
{
  id: 12002, pillar: 12, type: "scale",
  title: "Leadership aligns product, marketing, sales and CS around shared goals.",
  options: [
    "Severely siloed",
    "Some alignment",
    "Moderate alignment",
    "Strong cross-functional alignment",
    "Fully unified GTM leadership"
  ]
},
{
  id: 12003, pillar: 12, type: "scale",
  title: "Leaders communicate priorities effectively and keep teams focused.",
  options: [
    "Poor prioritization",
    "Some clarity",
    "Solid prioritization",
    "Strong priority communication",
    "Elite focus and strategic clarity"
  ]
},
{
  id: 12004, pillar: 12, type: "scale",
  title: "Leadership enforces accountability in a fair and consistent way.",
  options: [
    "No accountability",
    "Weak accountability",
    "Reasonable accountability",
    "Strong accountability culture",
    "High-performance accountability engine"
  ]
},
{
  id: 12005, pillar: 12, type: "scale",
  title: "Leaders foster a culture of trust, transparency and psychological safety.",
  options: [
    "Unsafe environment",
    "Partially safe",
    "Generally safe",
    "Strong trust culture",
    "Deep, consistent psychological safety"
  ]
},
{
  id: 12006, pillar: 12, type: "scale",
  title: "Leaders coach and develop managers effectively.",
  options: [
    "No coaching",
    "Basic coaching",
    "Solid coaching",
    "Strong development support",
    "Best-in-class leadership development"
  ]
},
{
  id: 12007, pillar: 12, type: "scale",
  title: "Leadership teams model the behaviours they expect from others.",
  options: [
    "Poor modelling",
    "Inconsistent modelling",
    "Generally aligned",
    "Strong behavioural modelling",
    "Highly consistent leadership example"
  ]
},
{
  id: 12008, pillar: 12, type: "scale",
  title: "Leadership decision-making is structured and predictable.",
  options: [
    "Chaotic decisions",
    "Some structure",
    "Solid decision frameworks",
    "Strong decision operating system",
    "Highly disciplined strategic decision culture"
  ]
},
{
  id: 12009, pillar: 12, type: "scale",
  title: "Executives resolve misalignment quickly and effectively.",
  options: [
    "Misalignment persists",
    "Slow resolution",
    "Reasonably effective",
    "Strong resolution process",
    "Highly proactive alignment engine"
  ]
},
{
  id: 12010, pillar: 12, type: "scale",
  title: "Leadership creates calm during periods of uncertainty.",
  options: [
    "Creates confusion",
    "Some clarity",
    "Solid clarity",
    "Strong stabilizing force",
    "Highly calming, consistent leadership"
  ]
},
{
  id: 12011, pillar: 12, type: "scale",
  title: "Leaders reinforce a culture of continuous improvement.",
  options: [
    "No improvement mindset",
    "Occasional focus",
    "Solid improvement culture",
    "Strong continuous improvement",
    "Deeply institutionalized improvement mindset"
  ]
},
{
  id: 12012, pillar: 12, type: "scale",
  title: "Leaders ensure resources are allocated effectively to GTM priorities.",
  options: [
    "Misaligned resources",
    "Some alignment",
    "Reasonable alignment",
    "Strong alignment",
    "Highly optimized GTM resource engine"
  ]
},
{
  id: 12013, pillar: 12, type: "scale",
  title: "Leadership teams operate with clear rituals and a predictable cadence.",
  options: [
    "No cadence",
    "Irregular cadence",
    "Moderate cadence",
    "Strong leadership cadence",
    "Highly structured operating rhythm"
  ]
},
{
  id: 12014, pillar: 12, type: "scale",
  title: "Leaders encourage healthy debate to improve decisions.",
  options: [
    "No debate",
    "Some challenge",
    "Solid debate",
    "Strong debate culture",
    "Deep, structured challenge culture"
  ]
},
{
  id: 12015, pillar: 12, type: "scale",
  title: "Leadership reinforces the GTM strategy across the company.",
  options: [
    "Rare reinforcement",
    "Occasional reinforcement",
    "Solid reinforcement",
    "Strong reinforcement",
    "Deep, consistent strategy reinforcement"
  ]
},
{
  id: 12016, pillar: 12, type: "scale",
  title: "Leaders effectively manage organisational change.",
  options: [
    "Poor change leadership",
    "Somewhat effective",
    "Solid change leadership",
    "Strong change leadership",
    "Highly effective change engine"
  ]
},
{
  id: 12017, pillar: 12, type: "scale",
  title: "Leadership ensures the GTM org maintains high execution standards.",
  options: [
    "Low standards",
    "Inconsistent standards",
    "Solid standards",
    "Strong performance expectations",
    "Elite execution culture"
  ]
},
{
  id: 12018, pillar: 12, type: "scale",
  title: "The executive team is unified and presents a consistent message.",
  options: [
    "Fragmented",
    "Often inconsistent",
    "Generally aligned",
    "Strong unified team",
    "Highly cohesive and aligned leadership"
  ]
},
{
  id: 12019, pillar: 12, type: "scale",
  title: "Leadership visibly supports GTM strategy, processes and teams.",
  options: [
    "Low visible support",
    "Some support",
    "Solid support",
    "Strong aligned support",
    "Highly strategic leadership sponsorship"
  ]
},
{
  id: 12020, pillar: 12, type: "scale",
  title: "Leadership acts as a multiplier for GTM performance.",
  options: [
    "No multiplier effect",
    "Limited impact",
    "Solid positive impact",
    "Strong multiplier",
    "Major strategic multiplier for GTM"
  ]
},


/* ===========================================================
   CLOSE THE ARRAY (END OF ALL QUESTIONS)
   =========================================================== */

]; // END QUESTIONS ARRAY


/* ===========================================================
   EXPORT (use whichever your build system uses)
   =========================================================== */

window.QUESTIONS = QUESTIONS;
