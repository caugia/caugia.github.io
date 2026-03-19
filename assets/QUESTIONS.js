/* ===========================================================
   MASTER QUESTION ENGINE v4.6 — CANONICAL
   =========================================================== */

const QUESTIONS = [

/* ===========================================================
   PILLAR 0 — CONTEXT (25 QUESTIONS)
   =========================================================== */

{
  id: 1, pillar: 0, type: "group",
  title: "Tell us about you and your company",
  subtitle: "Core company identity used to calibrate benchmarks and reporting context.",
  fields: [
    { name: "fullname",        label: "Your full name" },
    { name: "role",            label: "Your role or job title" },
    { name: "email",           label: "Email address" },
    { name: "company",         label: "Company name" },
    { name: "industry",        label: "Industry (e.g. FinTech, HRTech, DevTools)" },
    { name: "total_employees", label: "Total Employees (FTE equivalent)" },
    { name: "year_founded",    label: "Year Founded (YYYY)" },
    { name: "hq_region",       label: "HQ Region (US, FR, UK, DACH, Benelux, Nordics, Other)" }
  ]
},

{
  id: 2, pillar: 0, type: "group",
  title: "Core SaaS Performance Metrics",
  subtitle: "Financial and retention baseline. Enter 999 if a metric does not apply or is not currently tracked.",
  fields: [
    { name: "arr",              label: "Current ARR (Annual Recurring Revenue)" },
    { name: "growth_rate",      label: "Year-over-Year Growth Rate (%)" },
    { name: "nrr",              label: "Net Revenue Retention — NRR (%)" },
    { name: "grr",              label: "Gross Revenue Retention — GRR (%, enter 999 if not tracked)" },
    { name: "gross_margin",     label: "Gross Margin (%)" },
    { name: "monthly_burn",     label: "Monthly Net Burn (enter 999 if profitable or breakeven)" },
    { name: "cash_runway",      label: "Cash Runway — months remaining (enter 999 if profitable)" },
    { name: "number_of_clients",label: "Number of Active Paying Customers" }
  ]
},

{
  id: 3, pillar: 0, type: "group",
  title: "GTM Team Composition",
  subtitle: "Full-time equivalents only. Enter 999 if a function does not exist in your organisation.",
  fields: [
    { name: "sales_headcount",             label: "# Sales — AEs / Closers" },
    { name: "sdr_headcount",               label: "# SDR / BDR (enter 999 if none)" },
    { name: "marketing_headcount",         label: "# Marketing — Demand + PMM + Brand" },
    { name: "cs_headcount",               label: "# Customer Success / Account Management" },
    { name: "revops_enablement_headcount", label: "# RevOps / Enablement (enter 999 if none)" },
    { name: "product_headcount",           label: "# Product — PM + Design only (not engineering)" },
    { name: "engineering_headcount",       label: "# Engineering / R&D — developers only" },
    { name: "gtm_other_headcount",         label: "# Other GTM — Partners, SEs (enter 999 if none)" }
  ]
},

{
  id: 4, pillar: 0, type: "group",
  title: "Targets & Efficiency",
  subtitle: "Revenue efficiency and commercial performance. Enter 999 if a metric does not apply or is not currently tracked.",
  fields: [
    { name: "arr_target",         label: "ARR Target for this Fiscal Year" },
    { name: "quota_attainment",   label: "% of Reps Hitting Quota — last full quarter" },
    { name: "cac_payback",        label: "CAC Payback Period (months)" },
    { name: "magic_number",       label: "Magic Number — net new ARR ÷ prior quarter S&M spend (enter 999 if not tracked)" },
    { name: "avg_discount",       label: "Average Discount % on New Logo Deals" },
    { name: "expansion_pct",      label: "% of New ARR from Upsell / Expansion" },
    { name: "avg_ramp_months",    label: "Average Ramp Time for New AE — months to full quota" },
    { name: "sales_marketing_pct",label: "Sales & Marketing Spend as % of Revenue" }
  ]
},

{
  id: 5, pillar: 0, type: "group",
  title: "Funnel Velocity & Risk Context",
  subtitle: "Where deals slow, break, or disappear. Enter 999 if a metric does not apply or is not currently tracked.",
  fields: [
    { name: "win_rate",             label: "Average Win Rate (%)" },
    { name: "sales_cycle",          label: "Average Sales Cycle (days)" },
    { name: "pipeline_coverage",    label: "Pipeline Coverage Ratio (e.g. 3.5 for 3.5x)" },
    { name: "inbound_pipeline_pct", label: "% of Qualified Pipeline from Inbound" },
    { name: "revenue_concentration",label: "% of Revenue from Top 10 Customers" },
    { name: "top_competitors",      label: "Top 3 Competitors (comma separated)" },
    { name: "primary_loss_reason",  label: "Primary Loss Reason — one sentence" },
    { name: "primary_churn_reason", label: "Primary Reason for Churn — one sentence" }
  ]
},

{
  id: 6, pillar: 0, type: "group",
  title: "Pipeline & Product Intelligence",
  subtitle: "Observed conversion and adoption mechanics. Enter 999 if a metric does not apply or is not currently tracked.",
  fields: [
    { name: "discovery_to_demo",        label: "Discovery → Demo Conversion (%)" },
    { name: "demo_to_poc",              label: "Demo → POC / Trial Conversion — % (enter 999 if no POC in your motion)" },
    { name: "poc_to_close",             label: "POC → Close Conversion — % (enter 999 if no POC in your motion)" },
    { name: "technical_validation_loss",label: "% Deals Lost at Technical Validation (enter 999 if not tracked)" },
    { name: "activation_30d",           label: "% Users Active 30 Days Post-Onboarding (enter 999 if not tracked)" },
    { name: "feature_penetration",      label: "% Accounts Using 3+ Core Features (enter 999 if not tracked)" },
    { name: "time_to_value",            label: "Average Days to First Value Moment (enter 999 if not formally defined)" },
    { name: "product_expansion_pct",    label: "% Expansion Revenue Driven by Product Usage Signals (enter 999 if not tracked)" }
  ]
},

{
  id: 7, pillar: 0, type: "multi_radio",
  title: "GTM Model",
  subtitle: "Select one option for each question.",
  questions: [
    {
      key: "gtm_motion",
      label: "What best describes your primary GTM motion?",
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
      key: "revenue_model",
      label: "Your primary revenue model",
      options: [
        "SaaS Subscription (Recurring)",
        "Usage-based / Consumption",
        "Transactional / One-time",
        "Marketplace / Take-rate",
        "Managed Services / Hybrid"
      ]
    }
  ]
},

{
  id: 8, pillar: 0, type: "group",
  title: "Churn & Contract Detail",
  subtitle: "Retention and commercial structure. Enter 999 if a metric does not apply or is not currently tracked.",
  fields: [
    { name: "burn_multiple",       label: "Burn Multiple — net burn ÷ net new ARR (enter 999 if not tracked)" },
    { name: "logo_churn_rate",     label: "Annual Logo Churn Rate — % of customers lost" },
    { name: "revenue_churn_rate",  label: "Annual Revenue Churn Rate — % of ARR lost (enter 999 if not tracked separately)" },
    { name: "avg_contract_length", label: "Average Contract Length (months)" }
  ]
},

{
  id: 9, pillar: 0, type: "multi_radio",
  title: "Target Market",
  subtitle: "Select one option for each question.",
  questions: [
    {
      key: "target_segment",
      label: "Primary Target Segment (declared strategy)",
      options: [
        "Rabbit / SMB (< $10k ACV)",
        "Deer / Mid-Market ($10k – $50k ACV)",
        "Elephant / Enterprise ($50k – $250k ACV)",
        "Whale / Strategic ($250k+ ACV)"
      ]
    },
    {
      key: "economic_buyer",
      label: "Who is your primary Economic Buyer?",
      options: [
        "C-Level Executive (CEO, CFO, CTO)",
        "VP / Head of Department",
        "Team Lead / Manager",
        "Individual Contributor / End User",
        "Technical / IT / Procurement"
      ]
    }
  ]
},

{
  id: 10, pillar: 0, type: "group",
  title: "Efficiency & Funnel Detail",
  subtitle: "Secondary efficiency metrics. Enter 999 if a metric does not apply or is not currently tracked.",
  fields: [
    { name: "ltv_cac",              label: "LTV to CAC Ratio (enter 999 if not calculated)" },
    { name: "pct_deals_no_discount",label: "% of Deals Closed at Full List Price" },
    { name: "outbound_pipeline_pct",label: "% of Qualified Pipeline from Outbound" },
    { name: "mql_to_sql_rate",      label: "MQL to SQL Conversion Rate — % (enter 999 if not tracked)" }
  ]
},

{
  id: 11, pillar: 0, type: "multi_radio",
  title: "Company Stage",
  subtitle: "Select one option for each question.",
  questions: [
    {
      key: "operating_phase",
      label: "Which operating phase best describes the business today?",
      options: [
        "Land & Expand — Growing fast, investing aggressively in new logos. Burn is intentional.",
        "Grow & Optimize — Scaling revenue while improving efficiency. Rule of 40 is within reach.",
        "Efficiency First — Profitability is the primary objective. New logos are secondary to NRR and margin.",
        "Transition / Repositioning — Actively shifting segment, motion, product, or market.",
        "Stabilization / Recovery — Protecting the revenue base and reducing risk before the next growth phase."
      ]
    },
    {
      key: "funding_stage",
      label: "Funding Stage",
      options: [
        "Bootstrapped / Profitable",
        "Pre-Seed / Seed",
        "Series A",
        "Series B",
        "Series C+",
        "Private Equity / Public"
      ]
    }
  ]
},

{
  id: 12, pillar: 0, type: "group",
  title: "Team & Geographic Context",
  subtitle: "Supplemental context for benchmark calibration. Enter 999 if not applicable.",
  fields: [
    { name: "sales_leadership_headcount",label: "# Sales Leadership — VP / Head / Managers" },
    { name: "active_countries",          label: "Number of countries with active sales or customers" }
  ]
},

{
  id: 13, pillar: 0, type: "group",
  title: "Current Performance vs Goal",
  subtitle: "What leadership tracks today and where the gap is. Enter 999 if a metric is not formally tracked.",
  fields: [
    { name: "current_primary_metric",       label: "Primary metric leadership tracks today — e.g. ARR, NRR, EBITDA, Rule of 40, Win Rate, Burn Multiple" },
    { name: "current_primary_metric_value", label: "Current value of that metric" },
    { name: "current_primary_metric_goal",  label: "Target value for this fiscal year" },
    { name: "leadership_bottleneck",        label: "Leadership-perceived primary bottleneck today — one sentence" }
  ]
},

{
  id: 14, pillar: 0, type: "radio",
  title: "How urgent is resolving your primary GTM bottleneck?",
  subtitle: "Select the option that reflects your current operational reality.",
  options: [
    "Low — We have time to solve this properly",
    "Moderate — This needs attention in the next two quarters",
    "High — This is blocking growth right now",
    "Critical — This threatens the business within 90 days"
  ]
},

{
  id: 15, pillar: 0, type: "multi_radio",
  title: "Product Profile",
  subtitle: "Select one option for each question.",
  questions: [
    {
      key: "product_category",
      label: "Product Category Type",
      options: [
        "System of Record (e.g. CRM, ERP, HRIS)",
        "System of Engagement (e.g. SEP, Collaboration, Messaging)",
        "Point Solution / Workflow Tool",
        "Infrastructure / API / Developer Tool",
        "Data / Analytics / AI / BI"
      ]
    },
    {
      key: "product_complexity",
      label: "How would you describe your product complexity for a typical buyer?",
      options: [
        "Simple / Plug & Play — Live in hours, no technical support needed",
        "Moderately complex — Basic configuration, up and running in days",
        "Complex / Configurable — Requires setup, training, and a defined onboarding process",
        "Highly complex / Custom — Multi-month implementation, solutions engineering required"
      ]
    }
  ]
},

{
  id: 16, pillar: 0, type: "group",
  title: "12-Month Target State",
  subtitle: "What the business must achieve in the next 12 months. Enter 999 if a secondary metric is not applicable.",
  fields: [
    { name: "goal_12m_primary_metric",   label: "Primary success metric in 12 months — e.g. ARR, NRR, Rule of 40, EBITDA %" },
    { name: "goal_12m_primary_target",   label: "Target value in 12 months" },
    { name: "goal_12m_secondary_metric", label: "Secondary metric in 12 months (enter 999 if none)" },
    { name: "goal_12m_secondary_target", label: "Secondary target value (enter 999 if none)" }
  ]
},

{
  id: 17, pillar: 0, type: "radio",
  title: "What is your primary strategic focus for the next 12 months?",
  subtitle: "Answer for your primary revenue segment and GTM motion unless a question explicitly asks you to distinguish.",
  options: [
    "Aggressive New Logo Growth — Volume of new customers above all else",
    "Efficiency & Profitability — Cash flow, margin improvement, burn reduction",
    "Expansion & NRR — Upsell, cross-sell, and retention as the primary revenue engine",
    "New Market Entry — New geography, segment, or GTM motion",
    "Category Leadership — Brand, positioning, and long-term defensibility"
  ]
},

{
  id: 18, pillar: 0, type: "radio",
  title: "What is your most visible GTM symptom right now?",
  options: [
    "Not enough leads — Top of funnel is too thin",
    "Low conversion — Pipeline exists but deals do not close",
    "Stalled deals / Long cycles — Deals progress slowly or go dark",
    "High churn or downsell — Customers leave or contract value shrinks",
    "Team misalignment — Execution is inconsistent or coordination breaks down"
  ]
},

{
  id: 19, pillar: 0, type: "radio",
  title: "What does leadership believe is the root cause?",
  options: [
    "Talent or hiring gaps — We do not have the right people in the right roles",
    "Technology or data debt — Systems are slow, broken, or absent",
    "Budget constraints — We cannot invest what the strategy requires",
    "Strategic ambiguity — Leadership is not fully aligned on direction or priorities",
    "Product gaps — The product cannot support the GTM motion we need"
  ]
},

{
  id: 20, pillar: 0, type: "group",
  title: "24-Month Target State",
  subtitle: "What the business must look like in 24 months. Enter 999 if a secondary metric is not applicable.",
  fields: [
    { name: "goal_24m_primary_metric",   label: "Primary success metric in 24 months" },
    { name: "goal_24m_primary_target",   label: "Target value in 24 months" },
    { name: "goal_24m_secondary_metric", label: "Secondary metric in 24 months (enter 999 if none)" },
    { name: "goal_24m_secondary_target", label: "Secondary target value (enter 999 if none)" },
    { name: "goal_24m_operating_model",  label: "Target operating model in 24 months — e.g. Rule of 40, EBITDA positive, exit-ready, IPO-ready" }
  ]
},

{
  id: 21, pillar: 0, type: "radio",
  title: "How many commercial segments do you actively sell into today?",
  subtitle: "A segment is a distinct buyer group with meaningfully different ACV, motion, or value proposition.",
  options: [
    "1 segment — Single buyer type and motion",
    "2 segments — Two distinct buyer groups",
    "3 segments — Three distinct buyer groups",
    "4 or more segments"
  ]
},

{
  id: 22, pillar: 0, type: "group",
  title: "Segment 1 Performance",
  subtitle: "Your primary or largest segment by ARR contribution. Enter 999 for any metric not tracked per segment.",
  fields: [
    { name: "segment_1_name",     label: "Segment 1 — Name or description (e.g. Mid-Market SaaS)" },
    { name: "segment_1_arr_pct",  label: "Segment 1 — ARR contribution (%)" },
    { name: "segment_1_acv",      label: "Segment 1 — Average ACV" },
    { name: "segment_1_win_rate", label: "Segment 1 — Win Rate (%)" },
    { name: "segment_1_nrr",      label: "Segment 1 — NRR (%, enter 999 if not tracked per segment)" },
    { name: "segment_1_priority", label: "Segment 1 — Strategic priority: Core / Growth / Explore / Phase-out" }
  ]
},

{
  id: 23, pillar: 0, type: "group",
  title: "Segment 2 Performance",
  subtitle: "Your second segment. Enter 999 for any field that does not apply.",
  fields: [
    { name: "segment_2_name",     label: "Segment 2 — Name (enter 999 if not applicable)" },
    { name: "segment_2_arr_pct",  label: "Segment 2 — ARR contribution (%, enter 999 if not applicable)" },
    { name: "segment_2_acv",      label: "Segment 2 — Average ACV (enter 999 if not applicable)" },
    { name: "segment_2_win_rate", label: "Segment 2 — Win Rate (%, enter 999 if not applicable)" },
    { name: "segment_2_nrr",      label: "Segment 2 — NRR (%, enter 999 if not applicable)" },
    { name: "segment_2_priority", label: "Segment 2 — Priority: Core / Growth / Explore / Phase-out (enter 999 if not applicable)" }
  ]
},

{
  id: 24, pillar: 0, type: "multi_radio",
  title: "Market Context & Reporting",
  subtitle: "Select one option for each question.",
  questions: [
    {
      key: "market_adoption",
      label: "Market Adoption Phase",
      options: [
        "Emerging — Category education is still required before selling",
        "Early Growth — Category awareness exists, product differentiation is the primary battle",
        "Established Growth — Multiple credible alternatives, competition is intensifying",
        "Mature — Category is commoditizing, retention and efficiency matter more than acquisition"
      ]
    },
    {
      key: "currency",
      label: "Primary Reporting Currency",
      options: [
        "USD ($)",
        "EUR (€)",
        "GBP (£)",
        "AUD ($)",
        "CAD ($)",
        "Other"
      ]
    }
  ]
},

{
  id: 25, pillar: 0, type: "group",
  title: "Segment 3 Performance",
  subtitle: "Your third segment. Enter 999 for any field that does not apply.",
  fields: [
    { name: "segment_3_name",     label: "Segment 3 — Name (enter 999 if not applicable)" },
    { name: "segment_3_arr_pct",  label: "Segment 3 — ARR contribution (%, enter 999 if not applicable)" },
    { name: "segment_3_acv",      label: "Segment 3 — Average ACV (enter 999 if not applicable)" },
    { name: "segment_3_win_rate", label: "Segment 3 — Win Rate (%, enter 999 if not applicable)" },
    { name: "segment_3_nrr",      label: "Segment 3 — NRR (%, enter 999 if not applicable)" },
    { name: "segment_3_priority", label: "Segment 3 — Priority: Core / Growth / Explore / Phase-out (enter 999 if not applicable)" }
  ]
},

/* ===========================================================
   PILLAR 1 — GTM STRATEGY & LEADERSHIP (20 QUESTIONS)
   =========================================================== */

{
  id: 1001, pillar: 1, type: "scale",
  title: "In the last 12 months, how many GTM initiatives were formally stopped, deprioritized, or defunded after a quarterly review?",
  subtitle: "Answer for your primary revenue segment and GTM motion unless a question explicitly asks you to distinguish.",
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
  title: "In your current budget, which motion or segment receives the most investment — and is that allocation explicitly documented and defended with performance data?",
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
  title: "Which of your GTM motions — inbound, outbound, PLG, channel — generates the most efficient revenue, and what data confirms that?",
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
  title: "In the last quarter, when two GTM teams competed for the same resource or priority, how was it resolved — and was the resolution tied to documented strategic criteria?",
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
  title: "Does your current GTM plan explicitly address both the 12-month execution targets and the operating model changes required to sustain performance at 24 months?",
  options: [
    "Strategy is focused entirely on short-term targets: no structured view of the 24-month operating model exists",
    "A long-term direction exists informally but is not connected to current GTM decisions",
    "12-month targets are defined but the 24-month operating model implications are not explicitly planned",
    "Both near-term targets and the 24-month operating model are documented and reviewed in planning",
    "A dual-horizon strategy governs GTM decisions: 12-month execution targets and 24-month capability requirements are maintained in parallel, and trade-offs between them are explicitly decided"
  ]
},

/* ===========================================================
   PILLAR 2 — MARKET INTELLIGENCE (20 QUESTIONS)
   =========================================================== */

{
  id: 2001, pillar: 2, type: "scale",
  title: "How precisely defined is your Ideal Customer Profile, and how recently was it validated against closed-won data?",
  subtitle: "Answer for your primary revenue segment and GTM motion unless a question explicitly asks you to distinguish.",
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
  title: "How consistently is your segmentation model applied across sales, marketing, and product?",
  options: [
    "No segmentation: all accounts are treated the same regardless of size or fit",
    "Segmentation exists conceptually but is not reflected in how we route, price, or message",
    "Segments are defined but applied inconsistently — different teams use different definitions",
    "Segmentation is codified in CRM, used in routing and campaign targeting, reviewed annually",
    "A unified segmentation architecture governs CRM, pricing, campaign targeting, and capacity planning — reviewed quarterly and consistently applied"
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
  title: "Name the top two barriers preventing your target buyers from adopting your product. Are those based on documented buyer interviews or inferred from sales feedback?",
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
  title: "In your last 10 lost deals, how often did a blocker persona derail the decision — and is that pattern documented in a formal influence map?",
  options: [
    "No persona mapping: reps target whoever responds to outreach",
    "Informal awareness of key personas exists among senior reps, but it is not documented",
    "A primary buyer persona is documented, but champion and blocker roles are poorly understood",
    "A multi-persona map exists by segment, validated through deal reviews and win/loss interviews",
    "A validated influence map documents champion, economic buyer, and blocker roles by segment and deal size — updated quarterly and used in deal qualification"
  ]
},
{
  id: 2008, pillar: 2, type: "scale",
  title: "Can you name the top two barriers preventing your target buyers from adopting your product — and are those based on buyer interviews or inferred from lost deals?",
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
  title: "What causes customers to switch from competing tools to yours — or away from yours — and how precisely do you know?",
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
  title: "Does your team track macroeconomic and industry trends that shape buyer budgets — and does that feed directly into your GTM priorities?",
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
  title: "Which personas most consistently accelerate deal velocity in your top accounts — and is that pattern documented separately from your blocker analysis?",
  options: [
    "No champion or accelerator mapping: all personas are treated the same in deal execution",
    "Experienced reps informally know who to engage to speed deals, but it is not documented",
    "A primary champion persona is documented, but the acceleration dynamic is not analyzed separately from blockers",
    "Accelerator and blocker personas are documented by segment and used in deal qualification and coaching",
    "A full influence architecture: champion accelerators and blocker profiles documented by segment and deal size, validated quarterly through win/loss analysis, and embedded in rep coaching and deal reviews"
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
  title: "Which customer segments generate your highest lifetime value — and does that finding directly drive your ICP prioritization and targeting decisions?",
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
  title: "How well do you understand your partner and channel ecosystem — who drives deals, who blocks them, and why?",
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
  title: "In the last quarter, what percentage of your closed deals involved a partner — and do you know whether partner involvement accelerated or complicated each close?",
  options: [
    "Partner involvement is not tracked: we do not know which deals involved partners or how they affected outcomes",
    "We know roughly which deals had partner involvement but have not analyzed impact on close rate or cycle time",
    "Partner-involved deals are tracked but win rate and cycle time differences have not been formally analyzed",
    "Partner deal tracking exists and we have compared win rate and cycle time vs direct deals — reviewed quarterly",
    "A live partner performance model: partner-sourced vs partner-influenced pipeline, win rate delta, and cycle time impact tracked monthly and reviewed in revenue meetings"
  ]
},

/* ===========================================================
   PILLAR 3 — PRODUCT MARKETING (20 QUESTIONS)
   =========================================================== */

{
  id: 3001, pillar: 3, type: "scale",
  title: "When a prospect asks 'what do you do and why does it matter to me?', how consistently do your reps and website deliver the same crisp answer?",
  subtitle: "Answer for your primary revenue segment and GTM motion unless a question explicitly asks you to distinguish.",
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
  title: "In your last 10 sales calls reviewed, did reps deliver the same core differentiation message — or did the story vary by rep, channel, and day?",
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
  title: "In your current demo, which capabilities are shown in the first 10 minutes — and is that sequence based on validated data about what drives next-step conversion?",
  options: [
    "No systematic understanding: features are demoed based on what the rep likes to show",
    "Experienced reps have informal awareness of what works, but it is not documented or shared",
    "Feature resonance is tracked anecdotally through deal feedback but not systematized",
    "Feature resonance by segment and deal stage is documented through win/loss and demo analysis",
    "A feature-to-deal-stage map exists: validated through buyer interviews and progression data, updated quarterly, and used to govern demo structure"
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
  title: "After your last 10 demos, how many resulted in a documented next step — and do you track which demo elements drove that outcome?",
  options: [
    "Next steps after demos are informal: there is no tracking of conversion rate or what drove it",
    "Some reps document next steps, but demo-to-outcome correlation is not tracked systematically",
    "Demo-to-next-step conversion is tracked as a number, but which demo elements drove outcomes is unknown",
    "Demo conversion rate is tracked by segment and reviewed in coaching, with some correlation to demo content and sequence",
    "A governed demo performance system: conversion rate tracked by rep and segment, demo elements correlated with outcomes, and findings used to update the standard demo structure quarterly"
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
  title: "Map your content against your buyer journey: which stage has the weakest coverage today — and do you have a documented plan to close that gap?",
  options: [
    "Messaging exists for the sales stage only: awareness and post-sale content are absent",
    "Some content covers multiple stages but it is fragmented and not connected to a buyer journey",
    "Core stages are covered but gaps exist in late-stage proof content and post-sale value communication",
    "A documented content map covers all primary buyer stages from awareness to renewal for main segments",
    "A full buyer journey content architecture: each stage mapped by segment and persona, freshness tracked, gaps prioritized in quarterly PMM planning, and performance measured by stage conversion"
  ]
},

/* ===========================================================
   PILLAR 4 — DEMAND GENERATION (20 QUESTIONS)
   =========================================================== */

{
  id: 4001, pillar: 4, type: "scale",
  title: "How explicitly defined is your demand generation strategy, channels, targets, budgets, and success metrics, and how recently was it reviewed?",
  subtitle: "Answer for your primary revenue segment and GTM motion unless a question explicitly asks you to distinguish.",
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
  show_if: { field: 'gtm_motion', contains_any: ['outbound-led', 'enterprise field sales', 'hybrid'] },
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
  title: "Name your top three pipeline sources ranked by cost-per-qualified-opportunity right now. Is that ranking based on tracked data or estimated from memory?",
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
  show_if: { field: 'gtm_motion', contains_any: ['outbound-led', 'enterprise field sales', 'hybrid'] },
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
  title: "Can you attribute pipeline and revenue back to specific DG channels, campaigns, and spend — and how often does that data drive a budget reallocation?",
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
  title: "Are your lead follow-up SLAs between marketing and sales defined, tracked, and enforced — and what happens when a rep misses the window?",
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
  show_if: { field: 'gtm_motion', not_contains: ['product-led'] },
  title: "For your last three events or webinars: what was the pipeline generated, and what was the cost-per-qualified-opportunity per event?",
  options: [
    "Events are run with no pipeline or cost tracking: attendance is the only metric",
    "Some pipeline is attributed to events after the fact, but cost-per-opportunity is not calculated",
    "Pipeline generated is tracked per event, but cost data is incomplete or not linked to qualified opportunities",
    "Pipeline generated and cost-per-qualified-opportunity are tracked per event and reviewed after each one",
    "A governed event ROI model: pipeline generated, cost-per-opp, and influenced ARR tracked per event — results feed directly into future event investment decisions"
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
  show_if: { field: 'gtm_motion', contains_any: ['outbound-led', 'enterprise field sales', 'hybrid'] },
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
  show_if: { field: 'gtm_motion', not_contains: ['product-led', 'partner-led'] },
  title: "Do you have a defined event and webinar strategy with pipeline targets per event — and can you show pipeline ROI from your last three events?",
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
  title: "Can you grow pipeline without proportionally growing DG budget — and do you have data from the last 12 months to demonstrate it?",
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
  title: "Is your sales process documented, enforced at stage gates, and consistently followed — or does each rep effectively run their own version?",
  subtitle: "Answer for your primary revenue segment and GTM motion unless a question explicitly asks you to distinguish.",
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
  title: "Is your sales process enforced at stage gates in CRM — and what percentage of deals in your pipeline last quarter had all required fields completed at each stage?",
  options: [
    "CRM stage gates are not enforced: required fields are often blank and deals progress anyway",
    "Some required fields exist but reps can usually move deals forward without completing them",
    "Stage-gate requirements exist and are reviewed by managers, but enforcement is inconsistent across teams",
    "Required fields are enforced at key stages, and compliance is reviewed regularly in pipeline inspections",
    "A governed stage-gate system: required fields enforced in CRM at each stage, compliance tracked weekly, and exceptions documented with manager accountability"
  ]
},
{
  id: 5007, pillar: 5, type: "scale",
  title: "In your last 20 deals, what percentage had all qualification methodology fields completed — and does CRM enforce that before a deal progresses to the next stage?",
  options: [
    "No qualification methodology is used: reps qualify based on personal judgment with no shared framework",
    "A methodology exists but fewer than 40% of deals have complete qualification fields in CRM",
    "40–70% of deals have complete qualification fields, but enforcement is inconsistent across managers",
    "Over 70% of deals have complete qualification fields — CRM stage gates enforce methodology for deals above a defined size",
    "Qualification methodology is enforced at 90%+ across all deals above threshold: CRM gates are active, compliance tracked weekly, and deviation flagged in deal reviews"
  ]
},
{
  id: 5008, pillar: 5, type: "scale",
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
  id: 5009, pillar: 5, type: "scale",
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
  id: 5010, pillar: 5, type: "scale",
  title: "In the last 90 days, how many rep demos were reviewed against a defined quality rubric — and what was the average score?",
  options: [
    "No demos are reviewed against a rubric: quality is unmanaged",
    "A few demos are reviewed informally, but there is no consistent rubric or scoring method",
    "Some demos are scored against a rubric, but coverage is partial and inconsistent across managers",
    "Demo quality is reviewed regularly with a defined rubric and feedback is documented per rep",
    "A governed demo quality system: demo reviews scored against a standard rubric, average scores tracked by rep and manager, and low scores trigger targeted coaching within the same month"
  ]
},
{
  id: 5011, pillar: 5, type: "scale",
  title: "Does your sales comp plan reward the behaviors that build long-term revenue — or does it incentivize short-term closes at the expense of deal quality and retention?",
  options: [
    "Comp is purely volume-based: behaviors like multithreading or ICP qualification are not rewarded",
    "Some qualitative elements exist but comp is primarily quota-based without behavioral guardrails",
    "Comp includes some retention or NRR components but discounting and deal quality are not penalized",
    "Comp design includes deal quality guardrails: discount limits, ICP requirements, and NRR components",
    "A multi-factor comp model: new ARR, NRR, discount discipline, and ICP compliance all weighted, reviewed annually with Finance and HR"
  ]
},
{
  id: 5012, pillar: 5, type: "scale",
  title: "Does your current comp plan include a mechanism that penalizes deep discounts, non-ICP closes, or single-threaded deals — and has it changed rep behavior measurably?",
  options: [
    "Comp rewards closed revenue only: discounts, ICP quality, and deal hygiene have no consequence",
    "Some behavioral guardrails exist informally, but they are not embedded in comp and behavior has not changed measurably",
    "Comp includes one or two quality guardrails, but they are weakly enforced and impact is unclear",
    "Comp includes explicit penalties or modifiers for discounting, ICP misses, or poor deal quality, and behavior is reviewed quarterly",
    "A multi-factor comp model: discount discipline, ICP compliance, and deal quality directly affect payout, behavior is tracked monthly, and measurable improvement has been observed"
  ]
},
{
  id: 5013, pillar: 5, type: "scale",
  title: "Name the single most impactful lever on your win rate right now — and identify the data source that confirms it is that lever and not something else.",
  options: [
    "We cannot name a specific lever: win rate is discussed in aggregate without root-cause evidence",
    "Leadership has a view on the lever, but it is mostly anecdotal and not tied to a reliable data source",
    "One or two likely levers have been identified, but evidence is partial or inconsistent across segments",
    "A primary win-rate lever has been identified and is supported by segmented conversion, win/loss, or stage data",
    "Win-rate causality is actively modeled: the primary lever is evidenced by segmented data, reviewed regularly, and linked to targeted interventions with measured impact"
  ]
},
{
  id: 5014, pillar: 5, type: "scale",
  title: "In your last pipeline review, for deals that stalled or were lost: how many had enablement materials been accessed in the 30 days prior — and is that tracked?",
  options: [
    "Enablement materials exist but are not used in active deals",
    "Reps are aware of materials but access is inconsistent and usage is not tracked",
    "Materials are available in a shared drive but adoption in deals is not measured",
    "Enablement materials are organized by deal stage, tracked for usage, and reviewed for effectiveness quarterly",
    "A deal-stage enablement system: materials indexed by stage, persona, and objection, with usage and deal outcome correlation tracked monthly"
  ]
},
{
  id: 5015, pillar: 5, type: "scale",
  show_if: { field: 'gtm_motion', contains_any: ['outbound-led', 'enterprise field sales', 'hybrid'] },
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
  id: 5016, pillar: 5, type: "scale",
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
  id: 5017, pillar: 5, type: "scale",
  title: "Do you track all four components of sales velocity — deal count, win rate, deal size, and cycle time — by segment, and act on the data monthly?",
  options: [
    "Sales velocity is not tracked: we focus only on total revenue",
    "One or two velocity components are tracked but not reviewed together",
    "A basic velocity view exists but is not reviewed regularly or segmented",
    "All four velocity components tracked by segment, reviewed monthly with documented improvement actions",
    "A sales velocity dashboard reviewed weekly: components tracked by segment, rep, and motion, with lever-specific improvement initiatives"
  ]
},
{
  id: 5018, pillar: 5, type: "scale",
  show_if: { field: 'product_complexity', contains_any: ['complex / configurable', 'highly complex'] },
  title: "In the last 90 days, what percentage of your reps handled a technical product question in a live deal without escalating to Product or Engineering?",
  options: [
    "Very few or none: most technical questions trigger an escalation",
    "A minority of reps can handle standard technical questions, but most require support",
    "Most reps can handle common technical questions, but complex scenarios still escalate frequently",
    "A large majority of reps can handle standard technical questions independently, with escalations limited to defined edge cases",
    "Technical fluency is a managed capability: rep handling rate tracked, escalation reasons reviewed, and enablement continuously updated to reduce unnecessary escalations"
  ]
},
{
  id: 5019, pillar: 5, type: "scale",
  title: "In your last full quarter, what percentage of closed deals included a discount that was not buyer-initiated — and does your comp plan create an incentive for that behavior?",
  options: [
    "We do not track whether discounts are rep-initiated or buyer-initiated: all discounts are treated the same",
    "We know discounting is common but have not separated rep-initiated from buyer-initiated in our data",
    "Rep-initiated discounting is known to exist but comp design does not address or penalize it",
    "Rep-initiated discounts are tracked and comp includes guardrails — but behavioral change is not yet measurable",
    "Rep-initiated vs buyer-initiated discounts are tracked monthly, comp penalizes rep-initiated discounting above a defined rate, and the rep-initiated discount rate has measurably declined"
  ]
},
{
  id: 5020, pillar: 5, type: "scale",
  title: "In your last quarter, what percentage of deals that entered pipeline were eventually disqualified — and how many of those were removed within 30 days of entering?",
  options: [
    "Disqualification is rare: deals that enter pipeline tend to stay regardless of fit",
    "Some deals are disqualified but the rate is unknown and timing is driven by rep discretion",
    "Disqualification rate is tracked but not reviewed systematically — speed of removal is not measured",
    "Disqualification rate and average time-in-pipeline before removal are tracked and reviewed in pipeline inspections",
    "A fast-disqualification discipline: qualification criteria are enforced at stage entry, disqualification rate and speed are tracked weekly, and high-volume late disqualifications trigger a qualification process review"
  ]
},

/* ===========================================================
   PILLAR 6 — CUSTOMER SUCCESS & EXPANSION (20 QUESTIONS)
   =========================================================== */

{
  id: 6001, pillar: 6, type: "scale",
  title: "How structured and time-bound is your customer onboarding motion, and how do you track whether customers reach first value on schedule?",
  subtitle: "Answer for your primary revenue segment and GTM motion unless a question explicitly asks you to distinguish.",
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
  title: "Can you name the top two controllable drivers of churn in your base — and is that based on cohort analysis or inferred from a handful of lost accounts?",
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
  show_if: { field: 'target_segment', contains_any: ['deer / mid-market', 'elephant / enterprise', 'whale / strategic'] },
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
  title: "Does CS systematically surface customer intelligence to Product and Sales — and can you trace a specific decision in the last two quarters that changed because of it?",
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
  title: "In your last onboarding cohort, what percentage of customers reached their defined first value milestone on schedule — and what blocked the ones that did not?",
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
  show_if: { field: 'target_segment', contains_any: ['deer / mid-market', 'elephant / enterprise', 'whale / strategic'] },
  title: "In the last quarter, what percentage of your accounts received a business review — and for each one, was a follow-up action documented and tracked?",
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
  show_if: { field: 'target_segment', contains_any: ['elephant / enterprise', 'whale / strategic'] },
  title: "In the last quarter, how many accounts fell through the gap between CS and AM ownership — and would a clearer handoff rule have prevented it?",
  options: [
    "No handoff rules exist: CS and AM ownership is informal and accounts frequently fall through gaps",
    "Some accounts have defined owners, but the boundary between CS and AM is unclear and disputes are common",
    "Handoff criteria exist in writing, but are applied inconsistently — gaps still occur and are handled reactively",
    "CS and AM handoff rules are documented, embedded in CRM, and reviewed quarterly — gaps are rare",
    "A zero-gap ownership model: every account has a single documented owner, transitions follow a defined protocol, and coverage gaps are tracked as a governance metric"
  ]
},
{
  id: 6013, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['elephant / enterprise', 'whale / strategic'] },
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
  title: "Name one Product or GTM decision in the last two quarters that changed because of CS intelligence — and how long did it take from signal to decision?",
  options: [
    "We cannot name one: CS intelligence does not visibly drive Product or GTM decisions",
    "CS signals occasionally influence decisions informally, but the connection is not documented",
    "A few decisions have been linked to CS input, but the signal-to-decision path is inconsistent and slow",
    "Multiple decisions per quarter are traceable to CS intelligence, with documented signal origin and timeline",
    "A closed-loop CS intelligence system: signals logged, reviewed in structured forums, decisions linked to source, and time-from-signal-to-decision tracked as a performance metric"
  ]
},
{
  id: 6016, pillar: 6, type: "scale",
  title: "What is your current customers-per-CSM ratio — and has that ratio improved or declined over the last 12 months as your customer base grew?",
  options: [
    "We do not track customers-per-CSM: every account requires roughly dedicated CS time and the ratio has never been calculated",
    "The ratio exists informally but has declined as we have grown — we have not been able to scale CS capacity ahead of customer growth",
    "The ratio is tracked but roughly flat: we have added CS headcount proportionally without improving leverage",
    "Customers-per-CSM has improved over the last 12 months through tiering, automation, or self-service — tracked quarterly",
    "CS leverage is a managed metric: customers-per-CSM tracked monthly, improving quarter over quarter, and a target ratio is set in annual planning with a documented path to reach it"
  ]
},
{
  id: 6017, pillar: 6, type: "scale",
  title: "Can your CS team pull a unified customer view — health, usage, support, and commercial data — without manually stitching data across systems?",
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
  title: "Do you track logo churn and revenue churn as separate metrics — and in the last two quarters, did they move differently?",
  options: [
    "Only one churn metric is tracked: logo and revenue churn are not separated",
    "Both metrics are calculated, but they are reviewed together without analysis of why they diverge",
    "Logo and revenue churn are tracked separately, and divergences are noticed but not formally analyzed",
    "Both metrics are tracked separately, reviewed monthly, and divergences are analyzed for root cause",
    "A dual-churn diagnostic system: logo and revenue churn tracked and trended separately, divergence analyzed per cohort and segment, and insights fed into CS capacity and expansion planning"
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
  title: "In the last quarter, how many cross-functional GTM decisions were directly informed by customer intelligence surfaced by CS — and is that tracked anywhere?",
  options: [
    "None: CS intelligence is not systematically surfaced into cross-functional GTM decisions",
    "Some customer signals reach other teams informally, but no decisions are tracked back to them",
    "A few decisions have been influenced by CS insight, but the connection is not consistently documented",
    "Customer intelligence from CS is reviewed in structured forums and can be linked to documented GTM or Product decisions",
    "A closed-loop customer intelligence system: CS-originated signals are logged, reviewed cross-functionally, and decisions influenced by them are tracked with owners and outcomes"
  ]
},

/* ===========================================================
   PILLAR 7 — REVENUE OPERATIONS & SYSTEMS (20 QUESTIONS)
   =========================================================== */

{
  id: 7001, pillar: 7, type: "scale",
  title: "How accurately and completely are CRM records maintained, and how do you measure and enforce data quality?",
  subtitle: "Answer for your primary revenue segment and GTM motion unless a question explicitly asks you to distinguish.",
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
  title: "When your last process change was made, how long did it take to reflect that change in CRM stage definitions and required fields — and who owned that update?",
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
  title: "Can you trace a prospect from first touch to closed-won without manually stitching data across systems — and how long does that take right now?",
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
  title: "Does RevOps function as a strategic partner to GTM teams — or primarily as a reactive request-fulfillment function?",
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
  title: "For your top three GTM tools by spend: what is the actual daily active usage rate versus licensed seats — and when did you last review that data?",
  options: [
    "Tool adoption is not tracked: licenses are purchased and we assume usage without data",
    "We have a rough sense of which tools are underused but have not measured daily active usage vs licensed seats",
    "Utilization is tracked for at least one major tool but the others are not measured or reviewed",
    "Utilization tracked for all primary tools, reviewed quarterly, and underused licenses identified — but reallocation decisions are slow",
    "A governed tool adoption program: daily active usage vs licensed seats tracked monthly per tool, underutilization triggers a consolidation review within 30 days, and cost-per-active-user is a managed metric"
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
  title: "In the last quarter, what percentage of GTM teams followed the standard RevOps-defined processes without deviation — and how do you know?",
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
  title: "In the last quarter, what percentage of RevOps requests were delivered on time — and for the major ones, can you show the business impact they produced?",
  options: [
    "Request delivery timeliness is not tracked, and business impact is generally unknown",
    "Some requests are delivered on time, but neither SLA adherence nor impact is reviewed systematically",
    "Timeliness is tracked for some requests, but business impact is inconsistently documented",
    "RevOps delivery timeliness is tracked and major requests include documented business impact after delivery",
    "A governed RevOps delivery model: on-time delivery rate tracked monthly, major requests require impact documentation, and backlog prioritization is adjusted based on delivered business value"
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
  title: "What percentage of your reps actively use your core GTM tools without prompting or enforcement — and how do you distinguish willing adoption from compliance?",
  options: [
    "Tools are used only because compliance is required: reps would not use them voluntarily and frequently work around them",
    "Most reps tolerate the tools but workarounds are common — the stack creates more friction than it removes",
    "Core tools are used adequately: adoption is acceptable but reps do not see them as genuinely helpful to their workflow",
    "Most reps use the core tools willingly and see them as useful — feedback is collected and UX issues are addressed",
    "Rep-centric stack with tracked voluntary adoption: usage data shows reps access tools before being prompted, workflow friction is reviewed quarterly, and tools that consistently score low are retired or redesigned"
  ]
},

/* ===========================================================
   PILLAR 8 — PRICING & PACKAGING (20 QUESTIONS)
   =========================================================== */

{
  id: 8001, pillar: 8, type: "scale",
  title: "How explicitly defined is your pricing strategy, and when was it last reviewed against market and cost data?",
  subtitle: "Answer for your primary revenue segment and GTM motion unless a question explicitly asks you to distinguish.",
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
  title: "Does your packaging structure reflect how customers actually adopt and expand — and have you validated it against real usage data in the last 12 months?",
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
  title: "How rigorously do you test and validate willingness to pay across your key customer segments — and through what methodology?",
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
  title: "What is your evidence for your current pricing level — buyer interviews, close rate analysis by price band, or competitive benchmarking? When was that evidence last updated?",
  options: [
    "Willingness to pay is unknown: pricing was set based on cost or internal assumption",
    "Anecdotal awareness from deals lost on price, not validated through structured research",
    "Some buyer interviews have informed pricing but research is not systematic or segmented",
    "Willingness to pay validated through structured buyer research and close rate analysis per price band",
    "A segment-level willingness-to-pay model: validated through controlled research, win/loss pricing data, and close rate by price tier — reviewed annually and driving packaging decisions"
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
  title: "Is your packaging architecture based on how customers actually adopt and expand — or on what was easiest to build? When did you last validate it against real usage data?",
  options: [
    "Packaging was designed internally without reference to customer adoption patterns",
    "Packaging loosely aligns with usage patterns but creates friction at common expansion points",
    "Packaging aligns with primary adoption patterns but secondary segments and expansion paths are poorly served",
    "Packaging validated against adoption data and reviewed annually for alignment with usage reality",
    "A packaging architecture designed from adoption and expansion data: upgrade paths, usage triggers, and value metric alignment validated through customer interviews and cohort analysis"
  ]
},
{
  id: 8008, pillar: 8, type: "scale",
  title: "How clearly do you understand which features drive willingness to pay — and does that understanding directly inform how you bundle and price them?",
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
  title: "In the last quarter, what percentage of expansion deals required a full contract renegotiation to complete — and is that percentage improving or worsening?",
  options: [
    "All expansion requires a new commercial process: packaging does not accommodate growth",
    "Expansion is possible but creates commercial friction due to packaging or contract structure",
    "Some expansion paths exist but not all common growth scenarios are cleanly handled",
    "Packaging includes defined expansion paths validated against common customer growth patterns",
    "A modular expansion architecture: usage, seat, and feature triggers auto-invoice without renegotiation — expansion leakage tracked quarterly and packaging updated when leakage is detected"
  ]
},
{
  id: 8010, pillar: 8, type: "scale",
  title: "In the last 10 deals, how many prospects asked for a pricing explanation that should have been self-evident from your published materials?",
  options: [
    "All or nearly all prospects needed significant pricing explanation: our pricing is not self-explanatory for any segment",
    "Most prospects needed at least one follow-up call to understand what they would pay before they could evaluate",
    "Half or more needed some clarification — pricing is roughly understandable for experienced buyers but confusing for others",
    "Fewer than 3 in 10 prospects needed pricing explained — most primary segment buyers can self-select the right tier",
    "Pricing clarity is tested: buyer comprehension validated in structured interviews — fewer than 1 in 10 primary segment prospects require a pricing explanation from a rep"
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
  title: "Is your packaging based on documented willingness-to-pay research — or on internal assumptions about which features are most valuable?",
  options: [
    "Packaging was designed internally: no buyer research on feature value has ever been conducted",
    "Intuitive assumptions drive feature bundling — no structured research supports the current packaging decisions",
    "Some feature-value testing has been done but findings are not systematically applied to packaging decisions",
    "Feature-to-willingness-to-pay mapping has been validated through buyer research and close rate analysis by price band",
    "A live feature value model exists: feature importance and willingness-to-pay tested through buyer interviews and usage data, reviewed annually, and directly driving packaging decisions — not assumptions"
  ]
},
{
  id: 8013, pillar: 8, type: "scale",
  title: "Does your pricing and packaging offer meaningfully different configurations for different personas, use cases, or verticals — or is it effectively one structure for everyone?",
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
  title: "When did you last formally benchmark your pricing against competitors — and did that analysis change any pricing or packaging decision?",
  options: [
    "No competitive pricing data: positioning relative to alternatives is unknown",
    "Rough awareness of competitor pricing from sales calls, not structured or recent",
    "Periodic competitive pricing review happens but data quality and recency are limited",
    "An annual competitive pricing review with documented positioning implications and decisions",
    "A competitive pricing intelligence program: benchmarked semi-annually, deal-level competitive pricing tracked in CRM, and position reviewed quarterly — with a documented response when position shifts"
  ]
},
{
  id: 8015, pillar: 8, type: "scale",
  title: "In the last quarter, how many deals created channel conflict between your self-serve and enterprise motions — and is there a documented rule that governs which motion owns which account?",
  options: [
    "Channel conflict is unmanaged: self-serve and enterprise regularly compete for the same accounts without a resolution rule",
    "Conflict exists and is known but handled case by case — no formal ownership rule exists",
    "An informal rule governs most conflicts but edge cases still cause friction or internal disputes",
    "A documented ownership rule defines which motion handles which accounts — most conflicts are resolved without escalation",
    "Channel conflict is a tracked metric: ownership rules enforced in CRM, conflict rate monitored monthly, and rule gaps addressed in quarterly RevOps reviews"
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
  title: "For each geography where you actively sell: is pricing validated against local willingness-to-pay, or is it a direct conversion of your primary market pricing?",
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
  title: "How often do product gaps surface in late-stage deals — after the demo, during proof-of-concept or procurement?",
  subtitle: "Answer for your primary revenue segment and GTM motion unless a question explicitly asks you to distinguish.",
  options: [
    "Surprise product gaps in late-stage deals are a frequent occurrence: we lose deals because of them",
    "Gaps surface regularly in late-stage deals and are handled case by case without a prevention process",
    "Gaps occasionally surface late but an escalation process exists to manage them",
    "A pre-deal technical validation step catches most gaps before they reach late stage",
    "A zero-surprise model: solution fit is confirmed in discovery using a structured framework — late-stage gap frequency is tracked quarterly and drives sales process improvements"
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
  title: "In a standard sales cycle, what percentage of demos result in a clear next step — and do you know which part of the demo drives that outcome?",
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
  title: "In the last quarter, how many customer escalations in the first 90 days were caused by a gap between what was sold and what was delivered — and is that tracked?",
  options: [
    "Post-sale reality frequently differs from what was sold: causing immediate friction and trust damage",
    "Mismatches between sales promises and delivery reality are common and handled case by case",
    "Mismatches occur occasionally but a process exists to manage expectations before handoff",
    "Implementation experience matches sales expectations in most cases with documented exceptions",
    "Sales and delivery expectations are aligned by contract: mismatches tracked, root-caused quarterly, and recurring patterns drive sales process or product changes"
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
  title: "In your last 10 deals, how many times did a product limitation surface that was not in your documented constraint register — and what happened when it did?",
  options: [
    "Product limitations are not documented: teams learn about them during deals or onboarding",
    "Some limitations are known informally but inconsistently communicated across Sales and CS",
    "A limitations document exists but is not regularly updated or used in deal qualification",
    "Product limitations are documented, updated with each release, and embedded in sales onboarding and qualification",
    "An explicit product constraint register: maintained by Product, reviewed with Sales and CS quarterly, and embedded in deal qualification playbooks and onboarding scripts"
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
  title: "How well documented are your product limitations and constraints — and do Sales and CS consistently apply that knowledge in deals and during onboarding?",
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
  title: "When a product gap surfaces in a late-stage deal, what is the documented escalation path — and how often does following that path result in a closed deal versus a loss?",
  options: [
    "No escalation path exists: late-stage product gaps are handled ad hoc by whoever is available",
    "An informal escalation exists — reps know who to call — but outcomes vary widely and are not tracked",
    "An escalation process is documented but inconsistently followed, and whether it improves outcomes is unknown",
    "A documented escalation path exists, is followed in most cases, and win rates on escalated deals are reviewed quarterly",
    "A governed gap escalation system: path documented, followed consistently, win rate on escalated deals tracked and benchmarked, and recurring gaps feed into a product constraint register update"
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
  title: "Ask a Sales rep and a CS manager independently to name the top three product limitations. Do their answers match — and when was the last time you tested that alignment?",
  options: [
    "Sales, CS, and Product have meaningfully different views of product capabilities and limitations",
    "High-level alignment exists but breaks down in edge cases and customer-facing conversations",
    "A shared product document exists but is not consistently applied across teams",
    "A unified product understanding maintained through regular cross-functional syncs and shared documentation",
    "A single source of product truth: capability boundaries, known limitations, and positioning co-owned by Sales, CS, and Product — updated quarterly and tested for consistency"
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
  title: "In the last quarter, what percentage of expansion deals required engineering work, custom configuration, or PS involvement to complete — and is that percentage improving?",
  options: [
    "Over 80% of expansion deals required significant engineering or PS involvement: expansion is not self-service and never has been",
    "50–80% of expansions required technical intervention: standard expansion paths are not reliably self-service",
    "20–50% of expansions required some technical work — common expansion scenarios mostly work but edge cases still need support",
    "Fewer than 20% of expansion deals required technical intervention — most common expansion scenarios are natively supported",
    "Under 10% of expansions require engineering or PS involvement: expansion paths are frictionless, documented, and tested against real customer patterns — leakage reviewed quarterly"
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
  title: "In the last quarter, what percentage of new deals required a non-standard term, custom delivery commitment, or exception to your standard process — and is that rate tracked?",
  options: [
    "Exceptions are the norm: most deals require some form of custom term or delivery accommodation",
    "A significant minority of deals require exceptions, but the rate is not tracked and the drivers are unclear",
    "Exception rate is tracked but not formally reviewed — whether it is improving or worsening is unknown",
    "Exception rate is tracked quarterly, reviewed by leadership, and drivers are analyzed to reduce recurrence",
    "A governed exception discipline: standard terms and delivery apply to the large majority of deals, exception rate is a managed KPI, and every exception is logged, approved, and root-caused"
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
  title: "In the last 30 days, name one GTM decision that data changed. How easy was that to answer?",
  subtitle: "Answer for your primary revenue segment and GTM motion unless a question explicitly asks you to distinguish.",
  options: [
    "We cannot name one: data is produced but does not influence decisions",
    "Data is reviewed in meetings but rarely changes the conclusion — intuition dominates",
    "Data influences decisions occasionally but we cannot point to a recent specific example",
    "We can name two or three recent decisions directly influenced by data, with documented rationale",
    "Data-driven decisions are the norm: every major GTM decision is documented with data backing, and cases where data overrode intuition are tracked as positive governance signals"
  ]
},
{
  id: 10002, pillar: 10, type: "scale",
  title: "In your last three leadership reviews, how many minutes were spent debating metric definitions rather than acting on them — and does that number represent improvement?",
  options: [
    "Most of the review time is consumed by metric disputes: teams do not trust a shared definition set",
    "Metric debates frequently slow decisions, and there is no evidence the situation is improving",
    "Metric definitions are mostly aligned, but recurring disputes still consume meaningful review time",
    "Metric definitions are governed, disputes are limited, and review time is mostly spent on interpretation and action",
    "A single-source metric registry governs all leadership reviews: debate over definitions is rare, tracked when it occurs, and trending downward over time"
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
  title: "Right now, without a manual data pull: can you state your pipeline coverage ratio, weighted pipeline by stage, and the number of deals at risk this quarter?",
  options: [
    "No: these numbers require manual assembly or are not available at all",
    "Some numbers are available, but at least one requires manual work or is not trusted",
    "Core pipeline metrics exist in dashboards, but confidence in accuracy or freshness is mixed",
    "These metrics are available in near real time and used in weekly operating reviews",
    "A governed pipeline intelligence layer: coverage, weighted stage value, and deals-at-risk available on demand, trusted by leadership, and linked to documented action thresholds"
  ]
},
{
  id: 10005, pillar: 10, type: "scale",
  title: "In the last two quarters, how many revenue misses were predicted by a leading indicator more than 60 days in advance — versus discovered only at quarter close?",
  options: [
    "None were predicted early: misses were discovered when revenue was already missed",
    "A few warning signs existed, but they were informal and not tied to a defined leading-indicator system",
    "Some misses were predicted early, but signal quality and follow-through were inconsistent",
    "Leading indicators predicted several misses early enough to act, and those cases were reviewed after the quarter",
    "A predictive signal system exists: early warnings are logged, acted on, and reviewed against outcomes — with the ratio of early-detected vs late-detected misses tracked over time"
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
  title: "Right now, without a manual data pull: can you see your pipeline stage distribution, health flags, and coverage ratio — and do you trust those numbers?",
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
  subtitle: "Answer for your primary revenue segment and GTM motion unless a question explicitly asks you to distinguish.",
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
  title: "After your last three product releases: how quickly were enablement materials updated — and was the update triggered proactively or only after reps raised gaps in deals?",
  options: [
    "Enablement materials were not updated in time: reps discovered gaps in live deals",
    "Updates happened reactively after field complaints, with no defined release-linked process",
    "Materials were updated for some releases, but timing and completeness were inconsistent",
    "Enablement updates are tied to product releases and usually completed before field exposure",
    "A release-linked enablement system: materials updated proactively on a defined timeline, field readiness checked before release, and lag time tracked after every release"
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
  title: "In your last pipeline review, for deals that stalled or were lost: how many had enablement materials been accessed in the 30 days prior — and do you track that?",
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
  title: "In the last quarter, for each underperforming rep: was a specific skill gap identified and a targeted training prescribed — or was the same generic curriculum applied to everyone?",
  options: [
    "Underperformance is not tied to specific skill-gap diagnosis: support is generic or absent",
    "Managers sometimes identify likely gaps, but training remains mostly generic and inconsistent",
    "Some underperformers receive targeted development, but the process is not systematic across managers",
    "Underperforming reps receive skill-gap diagnosis and targeted training plans with manager follow-up",
    "A performance-linked enablement system: each underperformer gets a diagnosed skill gap, prescribed targeted training, and outcome tracking against the diagnosed gap"
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
  title: "If you asked five frontline GTM reps right now to name the top three priorities for this quarter, how many would give the same answer?",
  subtitle: "Answer for your primary revenue segment and GTM motion unless a question explicitly asks you to distinguish.",
  options: [
    "Fewer than two would agree: priorities are unknown or contradictory at the frontline",
    "Two or three might broadly align but with significant variation in wording and ranking",
    "Most would name similar priorities but without precise language or consistent ordering",
    "Four or five would give the same answer: priorities are communicated and tested in team meetings",
    "All five would give identical answers: priority cascade is verified through a structured quarterly frontline comprehension check — and misalignment triggers an immediate communication intervention"
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
  title: "When a cross-functional GTM decision requires input from more than two teams, how long does it typically take to reach a documented conclusion — and is that tracked?",
  options: [
    "Multi-team decisions have no defined process: they resolve when someone eventually forces a conclusion",
    "These decisions happen informally in meetings, but time-to-resolution is not tracked and varies widely",
    "Most multi-team decisions resolve within a few weeks, but there is no formal SLA and delays are common",
    "A documented process exists for multi-team decisions with a defined timeline and accountable facilitator",
    "A governed multi-team decision protocol: input deadlines, decision owner, and resolution SLA defined — time-to-decision tracked quarterly, and persistent delays escalate to leadership automatically"
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
  title: "In the last quarter, how many GTM initiatives were formally stopped or deprioritized — and was that decision made proactively or only after resources had already been wasted?",
  options: [
    "Initiatives rarely stop: once started, GTM work tends to continue regardless of results",
    "Some initiatives are quietly abandoned, but formal stop decisions are uncommon and undocumented",
    "A few initiatives were stopped this quarter, but decisions were reactive and came after visible failure",
    "Initiative stopping decisions are documented, reviewed in quarterly planning, and driven by pre-defined performance criteria",
    "A governed initiative discipline: stop/deprioritize criteria defined at launch, performance reviewed at fixed checkpoints, and kill decisions made proactively — with a post-mortem to prevent similar waste"
  ]
},
{
  id: 12007, pillar: 12, type: "scale",
  title: "Of your current GTM initiatives: how many have a single named accountable owner with defined authority — and how many are owned by a committee or have no clear owner?",
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
  title: "From your last three governance meetings: what percentage of documented actions were completed by the agreed owner, by the agreed deadline?",
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
  title: "In the last quarter, how many decisions made in your weekly GTM meetings were directly traceable to a quarterly objective — and how many were reactive to issues not in the plan?",
  options: [
    "Most weekly decisions are reactive: there is little visible link to quarterly objectives",
    "Quarterly objectives exist, but weekly decisions frequently drift away from them without challenge",
    "Some weekly decisions can be traced to quarterly objectives, but reactive work still consumes a large share of leadership attention",
    "Most weekly decisions can be traced to quarterly objectives, with reactive work explicitly identified and contained",
    "Weekly operating decisions are mapped to quarterly objectives by design: off-plan work is logged, quantified, and reviewed as a governance health signal"
  ]
},
{
  id: 12016, pillar: 12, type: "scale",
  title: "In the last two quarters, how many significant GTM problems did executive leadership learn about from a frontline team member before it showed up in a metric — and how many did they only discover after a miss?",
  options: [
    "Leadership typically learns about problems only after a metric miss or visible failure",
    "A few issues are surfaced early, but mostly by senior leaders rather than frontline teams",
    "Some frontline-originated early warnings reach leadership, but the pattern is inconsistent",
    "Multiple material issues were surfaced early by frontline teams and addressed before revenue impact",
    "Early warning is a governed signal: frontline-originated escalations are tracked, reviewed against later outcomes, and used as a transparency health metric"
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
  title: "In the last quarter, how many GTM decisions were reversed or significantly changed after implementation — because the original decision was based on incomplete frontline intelligence?",
  options: [
    "Decision reversals are common: we frequently discover field reality contradicts what drove the original decision",
    "Some reversals happen, but they are not tracked and the connection to intelligence gaps is not analyzed",
    "Occasional reversals occur and are discussed informally, but no formal tracking or root cause process exists",
    "Decision reversals are tracked, and those linked to intelligence gaps are reviewed in quarterly governance",
    "A decision quality system: reversals tracked with root cause, intelligence gap reversals reviewed monthly, and patterns feed back into how frontline data is collected and surfaced before decisions are made"
  ]
},

]; // END QUESTIONS ARRAY

window.QUESTIONS = QUESTIONS;
