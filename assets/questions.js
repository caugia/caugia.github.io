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

/* -----------------------------------------------------------
   Q1 — Identity & Company Profile
   ----------------------------------------------------------- */
{
  id: 1,
  pillar: 0,
  type: "group",
  title: "Tell us about you and your company",
  fields: [
    { name: "fullname", label: "Your full name", full: true },
    { name: "role", label: "Your role or job title" },
    { name: "company", label: "Company name" },
    { name: "website", label: "Company website" },
    { name: "country", label: "Country of headquarters", full: true }
  ]
},

/* -----------------------------------------------------------
   Q2 — SaaS Performance & Revenue Economics
   ----------------------------------------------------------- */
{
  id: 2,
  pillar: 0,
  type: "group",
  title: "SaaS performance and revenue economics",
  fields: [
    { name: "arr", label: "Current ARR (USD or EUR)", full: true },
    { name: "acv", label: "Average Contract Value (ACV)" },
    { name: "churn", label: "Customer churn rate (%)" },
    { name: "cpl", label: "Cost per Lead (CPL)" },
    { name: "cac", label: "Customer Acquisition Cost (CAC)" },
    { name: "nrr", label: "Net Revenue Retention (NRR %)" },
    { name: "nps", label: "Net Promoter Score (NPS)" },
    { name: "expansion_rate", label: "Expansion revenue rate (%)" },
    { name: "ltv", label: "Customer Lifetime Value (LTV)", full: true }
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
    { name: "sdr", label: "Sales Development Representatives (#)" },
    { name: "am", label: "Account Managers (#)" },
    { name: "csm", label: "Customer Success Managers (#)" },
    { name: "marketing", label: "Marketing team size (#)" },
    { name: "enablement", label: "Enablement team (#)" },
    { name: "revops", label: "Revenue Operations team (#)", full: true }
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
    { name: "target_fy", label: "Current FY revenue target", full: true },
    { name: "current_perf", label: "Progress toward target (%)" },
    { name: "next_fy_target", label: "Next FY revenue target" },
    { name: "growth_goal", label: "Desired YoY growth (%)", full: true },
    { name: "yoy_last_year", label: "Actual YoY growth last year (%)", full: true }
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
    { name: "win_rate", label: "Win rate (%)" },
    { name: "expansion_share", label: "Expansion % of total ARR", full: true },
    { name: "mql_sql", label: "MQL → SQL conversion rate (%)" },
    { name: "sql_cw", label: "SQL → Closed Won conversion rate (%)" }
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

