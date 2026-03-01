// CSE Deep Dive Questions — 60 questions, 6 engines
// Auto-generated from CSE v1.3 spec
var QUESTIONS = [
  {
    "id": 1001,
    "pillar": 1,
    "pillar_name": "Onboarding & Time-to-Value",
    "grip": "G",
    "qid": "CS-1001",
    "type": "scale",
    "title": "We have a documented onboarding playbook with defined milestones and success criteria per segment.",
    "sub": "Do customers reach VALUE fast or get stuck in implementation?",
    "options": [
      "No playbook",
      "Informal process",
      "Basic playbook",
      "Strong segment-specific",
      "Optimized with data-driven milestones"
    ]
  },
  {
    "id": 1002,
    "pillar": 1,
    "pillar_name": "Onboarding & Time-to-Value",
    "grip": "G",
    "qid": "CS-1002",
    "type": "scale",
    "title": "Time-to-value targets are defined and tracked per product/segment.",
    "sub": "Do customers reach VALUE fast or get stuck in implementation?",
    "options": [
      "No targets",
      "Vague goals",
      "Basic targets",
      "Strong defined per segment",
      "Dynamic targets with predictive triggers"
    ]
  },
  {
    "id": 1003,
    "pillar": 1,
    "pillar_name": "Onboarding & Time-to-Value",
    "grip": "R",
    "qid": "CS-1003",
    "type": "scale",
    "title": "Dedicated onboarding resources (CSMs, implementation specialists) are assigned to new customers.",
    "sub": "Do customers reach VALUE fast or get stuck in implementation?",
    "options": [
      "No dedicated resources",
      "CSM handles ad-hoc",
      "Basic assignment",
      "Dedicated specialists",
      "Tiered onboarding team by segment"
    ]
  },
  {
    "id": 1004,
    "pillar": 1,
    "pillar_name": "Onboarding & Time-to-Value",
    "grip": "R",
    "qid": "CS-1004",
    "type": "text",
    "title": "What is your average time-to-value in days? (from contract signed to first value milestone achieved)",
    "sub": "Do customers reach VALUE fast or get stuck in implementation?"
  },
  {
    "id": 1005,
    "pillar": 1,
    "pillar_name": "Onboarding & Time-to-Value",
    "grip": "I",
    "qid": "CS-1005",
    "type": "scale",
    "title": "How often is onboarding progress reviewed with customers?",
    "sub": "Do customers reach VALUE fast or get stuck in implementation?",
    "options": [
      "Never",
      "When customer complains",
      "Monthly",
      "Bi-weekly",
      "Weekly with milestone tracking"
    ]
  },
  {
    "id": 1006,
    "pillar": 1,
    "pillar_name": "Onboarding & Time-to-Value",
    "grip": "I",
    "qid": "CS-1006",
    "type": "scale",
    "title": "Handoff from Sales to CS is structured with documented context (goals, decision criteria, stakeholders).",
    "sub": "Do customers reach VALUE fast or get stuck in implementation?",
    "options": [
      "No handoff",
      "Email intro only",
      "Basic handoff doc",
      "Strong structured handoff",
      "Systematic with CRM data + kickoff template"
    ]
  },
  {
    "id": 1007,
    "pillar": 1,
    "pillar_name": "Onboarding & Time-to-Value",
    "grip": "I",
    "qid": "CS-1007",
    "type": "scale",
    "title": "Customers who fall behind onboarding milestones are proactively flagged and intervened on.",
    "sub": "Do customers reach VALUE fast or get stuck in implementation?",
    "options": [
      "No tracking",
      "Reactive only",
      "Manual flagging",
      "Automated alerts",
      "Automated alerts + prescribed intervention playbook"
    ]
  },
  {
    "id": 1008,
    "pillar": 1,
    "pillar_name": "Onboarding & Time-to-Value",
    "grip": "P",
    "qid": "CS-1008",
    "type": "text",
    "title": "What percentage of customers achieve their first value milestone within the target timeframe?",
    "sub": "Do customers reach VALUE fast or get stuck in implementation?"
  },
  {
    "id": 1009,
    "pillar": 1,
    "pillar_name": "Onboarding & Time-to-Value",
    "grip": "P",
    "qid": "CS-1009",
    "type": "text",
    "title": "What is your 90-day churn rate? (customers lost within first 90 days as % of new customers)",
    "sub": "Do customers reach VALUE fast or get stuck in implementation?"
  },
  {
    "id": 1010,
    "pillar": 1,
    "pillar_name": "Onboarding & Time-to-Value",
    "grip": "P",
    "qid": "CS-1010",
    "type": "scale",
    "title": "Customers rate their onboarding experience positively (CSAT/NPS on onboarding).",
    "sub": "Do customers reach VALUE fast or get stuck in implementation?",
    "options": [
      "No measurement",
      "Poor scores",
      "Average",
      "Good",
      "Consistently excellent **Engine 2: Customer Health & Risk Management**"
    ]
  },
  {
    "id": 2001,
    "pillar": 2,
    "pillar_name": "Customer Health & Risk Management",
    "grip": "G",
    "qid": "CS-2001",
    "type": "scale",
    "title": "We have a defined customer health score model with weighted inputs (usage, engagement, support, sentiment).",
    "sub": "Can you SEE which customers are at risk before they churn?",
    "options": [
      "No health score",
      "Single metric only",
      "Basic multi-factor",
      "Strong weighted model",
      "Predictive health score with ML"
    ]
  },
  {
    "id": 2002,
    "pillar": 2,
    "pillar_name": "Customer Health & Risk Management",
    "grip": "G",
    "qid": "CS-2002",
    "type": "scale",
    "title": "Churn risk triggers and escalation paths are documented and followed.",
    "sub": "Can you SEE which customers are at risk before they churn?",
    "options": [
      "No risk framework",
      "Informal awareness",
      "Basic triggers defined",
      "Strong framework with escalation",
      "Predictive risk with automated playbooks"
    ]
  },
  {
    "id": 2003,
    "pillar": 2,
    "pillar_name": "Customer Health & Risk Management",
    "grip": "R",
    "qid": "CS-2003",
    "type": "scale",
    "title": "CSMs have real-time access to customer usage data and health indicators.",
    "sub": "Can you SEE which customers are at risk before they churn?",
    "options": [
      "No access",
      "Manual data pulls",
      "Basic dashboard",
      "Strong real-time dashboard",
      "Integrated health platform with alerts"
    ]
  },
  {
    "id": 2004,
    "pillar": 2,
    "pillar_name": "Customer Health & Risk Management",
    "grip": "R",
    "qid": "CS-2004",
    "type": "text",
    "title": "What percentage of your customer base has a calculated health score?",
    "sub": "Can you SEE which customers are at risk before they churn?"
  },
  {
    "id": 2005,
    "pillar": 2,
    "pillar_name": "Customer Health & Risk Management",
    "grip": "I",
    "qid": "CS-2005",
    "type": "scale",
    "title": "How often are at-risk accounts reviewed by CS leadership?",
    "sub": "Can you SEE which customers are at risk before they churn?",
    "options": [
      "Never",
      "Quarterly",
      "Monthly",
      "Bi-weekly",
      "Weekly with documented action plans"
    ]
  },
  {
    "id": 2006,
    "pillar": 2,
    "pillar_name": "Customer Health & Risk Management",
    "grip": "I",
    "qid": "CS-2006",
    "type": "scale",
    "title": "Proactive outreach is triggered when health score drops below threshold (before customer raises issue).",
    "sub": "Can you SEE which customers are at risk before they churn?",
    "options": [
      "Never",
      "Rarely",
      "Sometimes",
      "Usually",
      "Always with automated triggers + playbook"
    ]
  },
  {
    "id": 2007,
    "pillar": 2,
    "pillar_name": "Customer Health & Risk Management",
    "grip": "I",
    "qid": "CS-2007",
    "type": "scale",
    "title": "Executive sponsor engagement (EBRs, QBRs) happens systematically for strategic accounts.",
    "sub": "Can you SEE which customers are at risk before they churn?",
    "options": [
      "No exec engagement",
      "Ad-hoc",
      "Annual",
      "Quarterly",
      "Quarterly + event-driven"
    ]
  },
  {
    "id": 2008,
    "pillar": 2,
    "pillar_name": "Customer Health & Risk Management",
    "grip": "P",
    "qid": "CS-2008",
    "type": "text",
    "title": "What is your logo churn rate? (annual, as percentage of total customers)",
    "sub": "Can you SEE which customers are at risk before they churn?"
  },
  {
    "id": 2009,
    "pillar": 2,
    "pillar_name": "Customer Health & Risk Management",
    "grip": "P",
    "qid": "CS-2009",
    "type": "text",
    "title": "What percentage of churned customers were flagged as at-risk before churning?",
    "sub": "Can you SEE which customers are at risk before they churn?"
  },
  {
    "id": 2010,
    "pillar": 2,
    "pillar_name": "Customer Health & Risk Management",
    "grip": "P",
    "qid": "CS-2010",
    "type": "scale",
    "title": "Our save rate on at-risk accounts is improving over time.",
    "sub": "Can you SEE which customers are at risk before they churn?",
    "options": [
      "No tracking",
      "Declining",
      "Flat",
      "Improving",
      "Consistently improving with data **Engine 3: Adoption & Engagement**"
    ]
  },
  {
    "id": 3001,
    "pillar": 3,
    "pillar_name": "Adoption & Engagement",
    "grip": "G",
    "qid": "CS-3001",
    "type": "scale",
    "title": "We have defined adoption milestones beyond onboarding (feature adoption ladder, maturity model).",
    "sub": "Are customers USING your product or just paying for it?",
    "options": [
      "No milestones",
      "Onboarding only",
      "Basic post-onboarding",
      "Strong adoption ladder",
      "Full maturity model per segment"
    ]
  },
  {
    "id": 3002,
    "pillar": 3,
    "pillar_name": "Adoption & Engagement",
    "grip": "G",
    "qid": "CS-3002",
    "type": "scale",
    "title": "Product usage metrics are defined, tracked, and correlated with retention/expansion outcomes.",
    "sub": "Are customers USING your product or just paying for it?",
    "options": [
      "No tracking",
      "Basic login/usage",
      "Feature-level tracking",
      "Strong usage-outcome correlation",
      "Predictive usage model"
    ]
  },
  {
    "id": 3003,
    "pillar": 3,
    "pillar_name": "Adoption & Engagement",
    "grip": "R",
    "qid": "CS-3003",
    "type": "scale",
    "title": "CS team has access to product analytics that show adoption depth per account.",
    "sub": "Are customers USING your product or just paying for it?",
    "options": [
      "No access",
      "High-level only",
      "Feature-level data",
      "Strong per-user analytics",
      "Real-time adoption dashboard with benchmarks"
    ]
  },
  {
    "id": 3004,
    "pillar": 3,
    "pillar_name": "Adoption & Engagement",
    "grip": "R",
    "qid": "CS-3004",
    "type": "text",
    "title": "What is your average DAU/MAU ratio (daily active users / monthly active users)?",
    "sub": "Are customers USING your product or just paying for it?"
  },
  {
    "id": 3005,
    "pillar": 3,
    "pillar_name": "Adoption & Engagement",
    "grip": "I",
    "qid": "CS-3005",
    "type": "scale",
    "title": "CSMs proactively drive feature adoption through training, workshops, or in-app guidance.",
    "sub": "Are customers USING your product or just paying for it?",
    "options": [
      "Never",
      "Reactive only",
      "Sometimes",
      "Regularly",
      "Systematic adoption campaigns per segment"
    ]
  },
  {
    "id": 3006,
    "pillar": 3,
    "pillar_name": "Adoption & Engagement",
    "grip": "I",
    "qid": "CS-3006",
    "type": "scale",
    "title": "Low-adoption accounts are identified and intervention plans are executed.",
    "sub": "Are customers USING your product or just paying for it?",
    "options": [
      "No identification",
      "Manual spotting",
      "Basic alerts",
      "Automated identification + outreach",
      "Prescribed intervention playbooks with success tracking"
    ]
  },
  {
    "id": 3007,
    "pillar": 3,
    "pillar_name": "Adoption & Engagement",
    "grip": "I",
    "qid": "CS-3007",
    "type": "scale",
    "title": "Product feedback from CS is systematically routed to Product team and prioritized.",
    "sub": "Are customers USING your product or just paying for it?",
    "options": [
      "No feedback loop",
      "Ad-hoc Slack messages",
      "Quarterly summaries",
      "Monthly structured feedback",
      "Real-time feedback system with Product visibility"
    ]
  },
  {
    "id": 3008,
    "pillar": 3,
    "pillar_name": "Adoption & Engagement",
    "grip": "P",
    "qid": "CS-3008",
    "type": "text",
    "title": "What percentage of customers use 3+ core features regularly (monthly)?",
    "sub": "Are customers USING your product or just paying for it?"
  },
  {
    "id": 3009,
    "pillar": 3,
    "pillar_name": "Adoption & Engagement",
    "grip": "P",
    "qid": "CS-3009",
    "type": "text",
    "title": "What is your average product adoption score across the customer base? (0-100 if tracked, or estimate)",
    "sub": "Are customers USING your product or just paying for it?"
  },
  {
    "id": 3010,
    "pillar": 3,
    "pillar_name": "Adoption & Engagement",
    "grip": "P",
    "qid": "CS-3010",
    "type": "scale",
    "title": "Customers who adopt deeply renew and expand at meaningfully higher rates than low-adopters.",
    "sub": "Are customers USING your product or just paying for it?",
    "options": [
      "Unknown",
      "No correlation",
      "Some correlation",
      "Strong correlation",
      "Quantified and used for prioritization **Engine 4: Renewal & Retention**"
    ]
  },
  {
    "id": 4001,
    "pillar": 4,
    "pillar_name": "Renewal & Retention",
    "grip": "G",
    "qid": "CS-4001",
    "type": "scale",
    "title": "We have a documented renewal process with defined timelines, owners, and escalation paths.",
    "sub": "Is renewal a PROCESS or a last-minute scramble?",
    "options": [
      "No process",
      "Ad-hoc",
      "Basic process",
      "Strong process",
      "Automated workflow with triggers"
    ]
  },
  {
    "id": 4002,
    "pillar": 4,
    "pillar_name": "Renewal & Retention",
    "grip": "G",
    "qid": "CS-4002",
    "type": "scale",
    "title": "Churn analysis is conducted systematically to identify root causes and patterns.",
    "sub": "Is renewal a PROCESS or a last-minute scramble?",
    "options": [
      "No analysis",
      "Anecdotal",
      "Basic exit surveys",
      "Structured analysis",
      "Quantified root cause analysis driving product/CS changes"
    ]
  },
  {
    "id": 4003,
    "pillar": 4,
    "pillar_name": "Renewal & Retention",
    "grip": "R",
    "qid": "CS-4003",
    "type": "text",
    "title": "How many days before renewal does the renewal conversation typically start?",
    "sub": "Is renewal a PROCESS or a last-minute scramble?"
  },
  {
    "id": 4004,
    "pillar": 4,
    "pillar_name": "Renewal & Retention",
    "grip": "R",
    "qid": "CS-4004",
    "type": "scale",
    "title": "CS owns the renewal forecast and has visibility into upcoming renewals 90+ days out.",
    "sub": "Is renewal a PROCESS or a last-minute scramble?",
    "options": [
      "No forecast",
      "Finance owns",
      "Basic CS visibility",
      "Strong CS-owned forecast",
      "Integrated forecast with health data"
    ]
  },
  {
    "id": 4005,
    "pillar": 4,
    "pillar_name": "Renewal & Retention",
    "grip": "I",
    "qid": "CS-4005",
    "type": "scale",
    "title": "Renewal playbooks are executed per segment (high-touch, mid-touch, tech-touch).",
    "sub": "Is renewal a PROCESS or a last-minute scramble?",
    "options": [
      "No playbooks",
      "One-size-fits-all",
      "Basic segmentation",
      "Strong tiered playbooks",
      "Optimized per segment with automation"
    ]
  },
  {
    "id": 4006,
    "pillar": 4,
    "pillar_name": "Renewal & Retention",
    "grip": "I",
    "qid": "CS-4006",
    "type": "scale",
    "title": "At-risk renewals have documented save plans with exec sponsor involvement.",
    "sub": "Is renewal a PROCESS or a last-minute scramble?",
    "options": [
      "No save plans",
      "Ad-hoc saves",
      "Basic plans",
      "Strong plans with exec",
      "Systematic with tracked outcomes"
    ]
  },
  {
    "id": 4007,
    "pillar": 4,
    "pillar_name": "Renewal & Retention",
    "grip": "I",
    "qid": "CS-4007",
    "type": "scale",
    "title": "Downsell/contraction is proactively offered as an alternative to churn when appropriate.",
    "sub": "Is renewal a PROCESS or a last-minute scramble?",
    "options": [
      "Never offered",
      "Rarely",
      "Sometimes",
      "Standard practice",
      "Data-driven contraction offers with retention tracking"
    ]
  },
  {
    "id": 4008,
    "pillar": 4,
    "pillar_name": "Renewal & Retention",
    "grip": "P",
    "qid": "CS-4008",
    "type": "text",
    "title": "What is your gross revenue retention rate? (annual, as percentage)",
    "sub": "Is renewal a PROCESS or a last-minute scramble?"
  },
  {
    "id": 4009,
    "pillar": 4,
    "pillar_name": "Renewal & Retention",
    "grip": "P",
    "qid": "CS-4009",
    "type": "text",
    "title": "What is your net revenue retention rate? (annual, as percentage --- includes expansion)",
    "sub": "Is renewal a PROCESS or a last-minute scramble?"
  },
  {
    "id": 4010,
    "pillar": 4,
    "pillar_name": "Renewal & Retention",
    "grip": "P",
    "qid": "CS-4010",
    "type": "text",
    "title": "What percentage of renewals close on-time (within 30 days of renewal date)?",
    "sub": "Is renewal a PROCESS or a last-minute scramble?"
  },
  {
    "id": 5001,
    "pillar": 5,
    "pillar_name": "Expansion & Upsell",
    "grip": "G",
    "qid": "CS-5001",
    "type": "scale",
    "title": "We have a documented expansion strategy with defined triggers, plays, and targets per segment.",
    "sub": "Are you GROWING accounts or just maintaining them?",
    "options": [
      "No strategy",
      "Opportunistic only",
      "Basic strategy",
      "Strong documented strategy",
      "Data-driven expansion engine"
    ]
  },
  {
    "id": 5002,
    "pillar": 5,
    "pillar_name": "Expansion & Upsell",
    "grip": "G",
    "qid": "CS-5002",
    "type": "scale",
    "title": "Expansion targets are set and tracked as a CS/AM metric (not just Sales).",
    "sub": "Are you GROWING accounts or just maintaining them?",
    "options": [
      "No targets",
      "Sales-only metric",
      "Basic CS awareness",
      "Strong CS-owned targets",
      "Integrated CS + Sales expansion targets"
    ]
  },
  {
    "id": 5003,
    "pillar": 5,
    "pillar_name": "Expansion & Upsell",
    "grip": "R",
    "qid": "CS-5003",
    "type": "scale",
    "title": "Expansion opportunities are identified through product usage data, not just relationship signals.",
    "sub": "Are you GROWING accounts or just maintaining them?",
    "options": [
      "No data-driven",
      "Relationship only",
      "Some usage signals",
      "Strong usage-based identification",
      "Predictive expansion scoring"
    ]
  },
  {
    "id": 5004,
    "pillar": 5,
    "pillar_name": "Expansion & Upsell",
    "grip": "R",
    "qid": "CS-5004",
    "type": "text",
    "title": "What percentage of expansion revenue comes from proactive (CS-identified) vs reactive (customer-initiated)?",
    "sub": "Are you GROWING accounts or just maintaining them?"
  },
  {
    "id": 5005,
    "pillar": 5,
    "pillar_name": "Expansion & Upsell",
    "grip": "I",
    "qid": "CS-5005",
    "type": "scale",
    "title": "CSMs/AMs conduct regular account reviews that include expansion opportunity mapping.",
    "sub": "Are you GROWING accounts or just maintaining them?",
    "options": [
      "No reviews",
      "Annual",
      "Semi-annual",
      "Quarterly",
      "Quarterly with documented expansion plans"
    ]
  },
  {
    "id": 5006,
    "pillar": 5,
    "pillar_name": "Expansion & Upsell",
    "grip": "I",
    "qid": "CS-5006",
    "type": "scale",
    "title": "Cross-sell and upsell plays are documented with specific triggers and talk tracks.",
    "sub": "Are you GROWING accounts or just maintaining them?",
    "options": [
      "No plays",
      "Ad-hoc pitches",
      "Basic plays",
      "Strong trigger-based plays",
      "Automated triggers with prescribed plays per segment"
    ]
  },
  {
    "id": 5007,
    "pillar": 5,
    "pillar_name": "Expansion & Upsell",
    "grip": "I",
    "qid": "CS-5007",
    "type": "scale",
    "title": "CS and Sales collaborate on expansion pipeline (no turf wars or handoff friction).",
    "sub": "Are you GROWING accounts or just maintaining them?",
    "options": [
      "Conflict/friction",
      "Unclear ownership",
      "Basic coordination",
      "Strong collaboration",
      "Seamless integrated motion"
    ]
  },
  {
    "id": 5008,
    "pillar": 5,
    "pillar_name": "Expansion & Upsell",
    "grip": "P",
    "qid": "CS-5008",
    "type": "text",
    "title": "What is your expansion revenue as a percentage of total new ARR?",
    "sub": "Are you GROWING accounts or just maintaining them?"
  },
  {
    "id": 5009,
    "pillar": 5,
    "pillar_name": "Expansion & Upsell",
    "grip": "P",
    "qid": "CS-5009",
    "type": "text",
    "title": "What is your average expansion deal cycle in days?",
    "sub": "Are you GROWING accounts or just maintaining them?"
  },
  {
    "id": 5010,
    "pillar": 5,
    "pillar_name": "Expansion & Upsell",
    "grip": "P",
    "qid": "CS-5010",
    "type": "scale",
    "title": "Customers view expansion conversations as adding value (not as sales pressure).",
    "sub": "Are you GROWING accounts or just maintaining them?",
    "options": [
      "Negative perception",
      "Mixed",
      "Neutral",
      "Positive",
      "Customers proactively ask about expansion **Engine 6: CS Operations & Infrastructure**"
    ]
  },
  {
    "id": 6001,
    "pillar": 6,
    "pillar_name": "CS Operations & Infrastructure",
    "grip": "G",
    "qid": "CS-6001",
    "type": "scale",
    "title": "Customer segmentation model is defined with differentiated service levels (high/mid/tech-touch).",
    "sub": "Does your CS infrastructure SCALE or break with growth?",
    "options": [
      "No segmentation",
      "By revenue only",
      "Basic multi-factor",
      "Strong segmentation with playbooks",
      "Dynamic segmentation with automated routing"
    ]
  },
  {
    "id": 6002,
    "pillar": 6,
    "pillar_name": "CS Operations & Infrastructure",
    "grip": "G",
    "qid": "CS-6002",
    "type": "scale",
    "title": "CS team capacity model exists --- CSM-to-account ratios are defined and monitored.",
    "sub": "Does your CS infrastructure SCALE or break with growth?",
    "options": [
      "No model",
      "Informal",
      "Basic ratios",
      "Strong model",
      "Dynamic capacity planning with workload balancing"
    ]
  },
  {
    "id": 6003,
    "pillar": 6,
    "pillar_name": "CS Operations & Infrastructure",
    "grip": "R",
    "qid": "CS-6003",
    "type": "scale",
    "title": "CS tech stack (CS platform, health scoring, automation) is integrated and adopted.",
    "sub": "Does your CS infrastructure SCALE or break with growth?",
    "options": [
      "No stack",
      "CRM only",
      "Basic CS tool",
      "Strong integrated platform",
      "Full CS platform with automation + analytics"
    ]
  },
  {
    "id": 6004,
    "pillar": 6,
    "pillar_name": "CS Operations & Infrastructure",
    "grip": "R",
    "qid": "CS-6004",
    "type": "text",
    "title": "What is your average CSM-to-account ratio?",
    "sub": "Does your CS infrastructure SCALE or break with growth?"
  },
  {
    "id": 6005,
    "pillar": 6,
    "pillar_name": "CS Operations & Infrastructure",
    "grip": "I",
    "qid": "CS-6005",
    "type": "scale",
    "title": "CS playbooks exist for key moments (onboarding, QBR, renewal, risk, expansion, escalation).",
    "sub": "Does your CS infrastructure SCALE or break with growth?",
    "options": [
      "No playbooks",
      "1-2 informal",
      "Basic set",
      "Strong comprehensive set",
      "Full playbook library with effectiveness data"
    ]
  },
  {
    "id": 6006,
    "pillar": 6,
    "pillar_name": "CS Operations & Infrastructure",
    "grip": "I",
    "qid": "CS-6006",
    "type": "scale",
    "title": "QBR/EBR cadence is maintained and adds value (not just check-the-box meetings).",
    "sub": "Does your CS infrastructure SCALE or break with growth?",
    "options": [
      "No QBRs",
      "Inconsistent",
      "Regular but templated",
      "Strong value-adding",
      "Strategic reviews driving expansion + advocacy"
    ]
  },
  {
    "id": 6007,
    "pillar": 6,
    "pillar_name": "CS Operations & Infrastructure",
    "grip": "I",
    "qid": "CS-6007",
    "type": "scale",
    "title": "CS data (health, usage, sentiment) is shared with Product, Sales, and Marketing systematically.",
    "sub": "Does your CS infrastructure SCALE or break with growth?",
    "options": [
      "Siloed",
      "Ad-hoc sharing",
      "Quarterly reports",
      "Monthly cross-functional",
      "Real-time integrated dashboards"
    ]
  },
  {
    "id": 6008,
    "pillar": 6,
    "pillar_name": "CS Operations & Infrastructure",
    "grip": "P",
    "qid": "CS-6008",
    "type": "text",
    "title": "What is your average CSM tenure in months?",
    "sub": "Does your CS infrastructure SCALE or break with growth?"
  },
  {
    "id": 6009,
    "pillar": 6,
    "pillar_name": "CS Operations & Infrastructure",
    "grip": "P",
    "qid": "CS-6009",
    "type": "text",
    "title": "What is your CS cost as a percentage of retained ARR?",
    "sub": "Does your CS infrastructure SCALE or break with growth?"
  },
  {
    "id": 6010,
    "pillar": 6,
    "pillar_name": "CS Operations & Infrastructure",
    "grip": "P",
    "qid": "CS-6010",
    "type": "scale",
    "title": "CS is viewed as a strategic function by leadership (not just support/firefighting).",
    "sub": "Does your CS infrastructure SCALE or break with growth?",
    "options": [
      "Cost center",
      "Support function",
      "Emerging strategic",
      "Strategic partner",
      "Revenue driver with board visibility **4. Numeric Input Calibration Tables**  -----------------------------------------------------------------------  19 numeric questions converted to 1-5. Segment/stage used where  applicable.  ----------------------------------------------------------------------- **4.1 Time-to-Value CS-1004 (days, lower=better)**  --------------------------------------------------------------------------  **S5**     **S4**     **S3**     **S2**     **S1**  -------------- -------------- -------------- -------------- --------------  \\<14d     14-30d     30-60d     60-90d     \\>90d  -------------------------------------------------------------------------- **4.2 Value Milestone CS-1008**"
    ]
  }
];
