// DI Deep Dive Questions — 60 questions, 6 engines
// Auto-generated from DI v1.1 spec
var QUESTIONS = [
  {
    "id": 1001,
    "pillar": 1,
    "pillar_name": "Data Strategy & Governance",
    "grip": "G",
    "qid": "DI-1001",
    "type": "scale",
    "title": "We have a documented data strategy that defines what data we collect, why, and how it supports GTM decision-making.",
    "sub": "Is your data GOVERNED or just accumulated?",
    "options": [
      "No strategy",
      "Ad-hoc collection",
      "Basic documentation",
      "Strong documented strategy",
      "Living data strategy aligned with business outcomes and regularly reviewed"
    ]
  },
  {
    "id": 1002,
    "pillar": 1,
    "pillar_name": "Data Strategy & Governance",
    "grip": "G",
    "qid": "DI-1002",
    "type": "scale",
    "title": "Data ownership is clearly defined --- every key dataset has an accountable owner responsible for quality, access, and lifecycle.",
    "sub": "Is your data GOVERNED or just accumulated?",
    "options": [
      "No ownership",
      "Informal awareness",
      "Some ownership defined",
      "Strong ownership model",
      "Full data stewardship program with accountability and SLAs"
    ]
  },
  {
    "id": 1003,
    "pillar": 1,
    "pillar_name": "Data Strategy & Governance",
    "grip": "R",
    "qid": "DI-1003",
    "type": "text",
    "title": "What percentage of your key GTM datasets have documented data dictionaries (field definitions, sources, update frequency)?",
    "sub": "Is your data GOVERNED or just accumulated?"
  },
  {
    "id": 1004,
    "pillar": 1,
    "pillar_name": "Data Strategy & Governance",
    "grip": "R",
    "qid": "DI-1004",
    "type": "scale",
    "title": "We have adequate tooling and infrastructure for data collection, storage, transformation, and access.",
    "sub": "Is your data GOVERNED or just accumulated?",
    "options": [
      "No infrastructure",
      "Spreadsheets only",
      "Basic database/warehouse",
      "Strong data stack",
      "Modern data platform (warehouse + ELT + orchestration + catalog)"
    ]
  },
  {
    "id": 1005,
    "pillar": 1,
    "pillar_name": "Data Strategy & Governance",
    "grip": "I",
    "qid": "DI-1005",
    "type": "scale",
    "title": "Data governance policies (retention, access control, PII handling, compliance) are defined and enforced.",
    "sub": "Is your data GOVERNED or just accumulated?",
    "options": [
      "No policies",
      "Informal guidelines",
      "Basic policies",
      "Strong governance framework",
      "Comprehensive governance with automated enforcement and audit trails"
    ]
  },
  {
    "id": 1006,
    "pillar": 1,
    "pillar_name": "Data Strategy & Governance",
    "grip": "I",
    "qid": "DI-1006",
    "type": "scale",
    "title": "We have a defined process for onboarding new data sources --- including validation, documentation, and quality checks.",
    "sub": "Is your data GOVERNED or just accumulated?",
    "options": [
      "No process",
      "Ad-hoc",
      "Basic checklist",
      "Structured onboarding process",
      "Full data onboarding pipeline with automated quality gates"
    ]
  },
  {
    "id": 1007,
    "pillar": 1,
    "pillar_name": "Data Strategy & Governance",
    "grip": "I",
    "qid": "DI-1007",
    "type": "scale",
    "title": "Data quality is measured, monitored, and improved systematically --- not just fixed when something breaks.",
    "sub": "Is your data GOVERNED or just accumulated?",
    "options": [
      "No monitoring",
      "Reactive fixes",
      "Basic quality checks",
      "Structured quality program",
      "Automated data quality monitoring with SLAs and alerting"
    ]
  },
  {
    "id": 1008,
    "pillar": 1,
    "pillar_name": "Data Strategy & Governance",
    "grip": "P",
    "qid": "DI-1008",
    "type": "text",
    "title": "What percentage of GTM reports and dashboards use data from a governed, single-source-of-truth warehouse (vs spreadsheets or ad-hoc queries)?",
    "sub": "Is your data GOVERNED or just accumulated?"
  },
  {
    "id": 1009,
    "pillar": 1,
    "pillar_name": "Data Strategy & Governance",
    "grip": "P",
    "qid": "DI-1009",
    "type": "scale",
    "title": "GTM teams trust the data they receive --- data quality is rarely questioned in decision-making contexts.",
    "sub": "Is your data GOVERNED or just accumulated?",
    "options": [
      "No trust",
      "Low trust",
      "Moderate trust",
      "High trust",
      "Complete trust --- data is the decision authority"
    ]
  },
  {
    "id": 1010,
    "pillar": 1,
    "pillar_name": "Data Strategy & Governance",
    "grip": "P",
    "qid": "DI-1010",
    "type": "text",
    "title": "Average number of data quality incidents (wrong numbers in reports, broken dashboards, stale data) per month?",
    "sub": "Is your data GOVERNED or just accumulated?"
  },
  {
    "id": 2001,
    "pillar": 2,
    "pillar_name": "Customer & Account Intelligence",
    "grip": "G",
    "qid": "DI-2001",
    "type": "scale",
    "title": "We have a unified customer view --- all relevant customer data (usage, billing, support, engagement) is accessible in one place.",
    "sub": "Do you KNOW your customers or just store their records?",
    "options": [
      "Completely fragmented",
      "Mostly siloed",
      "Partially unified",
      "Strong unified view",
      "Complete 360-degree customer view with real-time data"
    ]
  },
  {
    "id": 2002,
    "pillar": 2,
    "pillar_name": "Customer & Account Intelligence",
    "grip": "G",
    "qid": "DI-2002",
    "type": "scale",
    "title": "Customer segmentation is data-driven and continuously refined based on behavioral and outcome data.",
    "sub": "Do you KNOW your customers or just store their records?",
    "options": [
      "No segmentation",
      "Basic demographic only",
      "Some behavioral",
      "Strong multi-dimensional",
      "Dynamic segmentation with predictive clustering"
    ]
  },
  {
    "id": 2003,
    "pillar": 2,
    "pillar_name": "Customer & Account Intelligence",
    "grip": "R",
    "qid": "DI-2003",
    "type": "text",
    "title": "How many customer data sources are integrated into your unified view (CRM, product, billing, support, marketing)?",
    "sub": "Do you KNOW your customers or just store their records?"
  },
  {
    "id": 2004,
    "pillar": 2,
    "pillar_name": "Customer & Account Intelligence",
    "grip": "R",
    "qid": "DI-2004",
    "type": "text",
    "title": "What percentage of customer accounts have a calculated health score based on multiple data signals?",
    "sub": "Do you KNOW your customers or just store their records?"
  },
  {
    "id": 2005,
    "pillar": 2,
    "pillar_name": "Customer & Account Intelligence",
    "grip": "I",
    "qid": "DI-2005",
    "type": "scale",
    "title": "Customer health scores are actively used by CS and Sales teams to prioritize actions and allocate resources.",
    "sub": "Do you KNOW your customers or just store their records?",
    "options": [
      "Not used",
      "Rarely referenced",
      "Sometimes consulted",
      "Regularly used for decisions",
      "Embedded in workflows with automated triggers"
    ]
  },
  {
    "id": 2006,
    "pillar": 2,
    "pillar_name": "Customer & Account Intelligence",
    "grip": "I",
    "qid": "DI-2006",
    "type": "scale",
    "title": "We track and analyze customer lifecycle events (onboarding completion, feature adoption milestones, expansion signals, churn indicators) systematically.",
    "sub": "Do you KNOW your customers or just store their records?",
    "options": [
      "No tracking",
      "Basic milestones",
      "Some lifecycle tracking",
      "Comprehensive tracking",
      "Full lifecycle intelligence with automated intervention triggers"
    ]
  },
  {
    "id": 2007,
    "pillar": 2,
    "pillar_name": "Customer & Account Intelligence",
    "grip": "I",
    "qid": "DI-2007",
    "type": "scale",
    "title": "Account intelligence (firmographic, technographic, intent signals) is used to enrich customer profiles and inform GTM strategies.",
    "sub": "Do you KNOW your customers or just store their records?",
    "options": [
      "No enrichment",
      "Basic firmographic",
      "Some enrichment",
      "Multi-source enrichment",
      "Comprehensive intelligence platform with real-time signals"
    ]
  },
  {
    "id": 2008,
    "pillar": 2,
    "pillar_name": "Customer & Account Intelligence",
    "grip": "P",
    "qid": "DI-2008",
    "type": "text",
    "title": "Customer health score accuracy: what percentage of churned customers were flagged as at-risk at least 30 days before churn?",
    "sub": "Do you KNOW your customers or just store their records?"
  },
  {
    "id": 2009,
    "pillar": 2,
    "pillar_name": "Customer & Account Intelligence",
    "grip": "P",
    "qid": "DI-2009",
    "type": "scale",
    "title": "Customer intelligence helps us identify expansion opportunities before the customer asks --- we are proactive, not reactive.",
    "sub": "Do you KNOW your customers or just store their records?",
    "options": [
      "Always reactive",
      "Mostly reactive",
      "Mix",
      "Mostly proactive",
      "Consistently proactive with data-driven expansion signals"
    ]
  },
  {
    "id": 2010,
    "pillar": 2,
    "pillar_name": "Customer & Account Intelligence",
    "grip": "P",
    "qid": "DI-2010",
    "type": "text",
    "title": "Percentage of expansion revenue that was triggered by a data signal (vs customer request or account manager intuition)?",
    "sub": "Do you KNOW your customers or just store their records?"
  },
  {
    "id": 3001,
    "pillar": 3,
    "pillar_name": "Pipeline & Revenue Analytics",
    "grip": "G",
    "qid": "DI-3001",
    "type": "scale",
    "title": "We have a comprehensive pipeline analytics framework that tracks conversion, velocity, and value at every stage.",
    "sub": "Can you SEE your pipeline clearly or just report on it?",
    "options": [
      "No pipeline analytics",
      "Basic won/lost tracking",
      "Some funnel metrics",
      "Strong pipeline analytics",
      "Comprehensive pipeline intelligence with predictive capabilities"
    ]
  },
  {
    "id": 3002,
    "pillar": 3,
    "pillar_name": "Pipeline & Revenue Analytics",
    "grip": "G",
    "qid": "DI-3002",
    "type": "scale",
    "title": "Revenue analytics goes beyond topline --- we understand revenue by segment, cohort, channel, product, and geography.",
    "sub": "Can you SEE your pipeline clearly or just report on it?",
    "options": [
      "Topline only",
      "Basic breakdowns",
      "Some dimensional analysis",
      "Strong multi-dimensional",
      "Full revenue intelligence with drill-down and trend analysis"
    ]
  },
  {
    "id": 3003,
    "pillar": 3,
    "pillar_name": "Pipeline & Revenue Analytics",
    "grip": "R",
    "qid": "DI-3003",
    "type": "text",
    "title": "How many pipeline conversion metrics are actively tracked and reviewed (e.g., MQL-to-SQL, SQL-to-Opp, Opp-to-Close, by segment)?",
    "sub": "Can you SEE your pipeline clearly or just report on it?"
  },
  {
    "id": 3004,
    "pillar": 3,
    "pillar_name": "Pipeline & Revenue Analytics",
    "grip": "R",
    "qid": "DI-3004",
    "type": "scale",
    "title": "We have the analytical capability to diagnose WHERE in the funnel revenue is leaking and WHY.",
    "sub": "Can you SEE your pipeline clearly or just report on it?",
    "options": [
      "No diagnostic capability",
      "Anecdotal diagnosis",
      "Basic funnel view",
      "Strong diagnostic capability",
      "Root cause analysis with cohort comparison and statistical significance"
    ]
  },
  {
    "id": 3005,
    "pillar": 3,
    "pillar_name": "Pipeline & Revenue Analytics",
    "grip": "I",
    "qid": "DI-3005",
    "type": "scale",
    "title": "Pipeline reviews are data-driven --- we use analytics to challenge assumptions, identify trends, and make forecasting adjustments.",
    "sub": "Can you SEE your pipeline clearly or just report on it?",
    "options": [
      "No data in reviews",
      "Basic numbers",
      "Some analysis",
      "Strongly data-driven",
      "Analytical rigor with predictive models and scenario analysis"
    ]
  },
  {
    "id": 3006,
    "pillar": 3,
    "pillar_name": "Pipeline & Revenue Analytics",
    "grip": "I",
    "qid": "DI-3006",
    "type": "scale",
    "title": "We conduct cohort analysis on revenue data to identify changing patterns in customer quality, deal size, or cycle time.",
    "sub": "Can you SEE your pipeline clearly or just report on it?",
    "options": [
      "No cohort analysis",
      "Rarely",
      "Occasionally",
      "Regularly",
      "Systematic cohort analysis driving strategy adjustments"
    ]
  },
  {
    "id": 3007,
    "pillar": 3,
    "pillar_name": "Pipeline & Revenue Analytics",
    "grip": "I",
    "qid": "DI-3007",
    "type": "scale",
    "title": "Revenue attribution connects marketing spend and activities to pipeline and closed revenue with reasonable accuracy.",
    "sub": "Can you SEE your pipeline clearly or just report on it?",
    "options": [
      "No attribution",
      "Last-touch only",
      "Basic multi-touch",
      "Strong attribution model",
      "Sophisticated attribution with statistical modeling and incrementality testing"
    ]
  },
  {
    "id": 3008,
    "pillar": 3,
    "pillar_name": "Pipeline & Revenue Analytics",
    "grip": "P",
    "qid": "DI-3008",
    "type": "text",
    "title": "What percentage of pipeline was accurately predicted (within 15%) by your analytics 90 days in advance?",
    "sub": "Can you SEE your pipeline clearly or just report on it?"
  },
  {
    "id": 3009,
    "pillar": 3,
    "pillar_name": "Pipeline & Revenue Analytics",
    "grip": "P",
    "qid": "DI-3009",
    "type": "scale",
    "title": "Leadership can explain revenue variance --- when targets are missed or exceeded, we understand data-driven root causes.",
    "sub": "Can you SEE your pipeline clearly or just report on it?",
    "options": [
      "No explanation",
      "Anecdotal",
      "Basic understanding",
      "Strong root cause analysis",
      "Quantified variance decomposition with actionable insights"
    ]
  },
  {
    "id": 3010,
    "pillar": 3,
    "pillar_name": "Pipeline & Revenue Analytics",
    "grip": "P",
    "qid": "DI-3010",
    "type": "text",
    "title": "Revenue forecast accuracy over last 4 quarters (average absolute deviation from actual)?",
    "sub": "Can you SEE your pipeline clearly or just report on it?"
  },
  {
    "id": 4001,
    "pillar": 4,
    "pillar_name": "Marketing & Demand Analytics",
    "grip": "G",
    "qid": "DI-4001",
    "type": "scale",
    "title": "We have a defined marketing analytics framework that measures channel effectiveness, campaign ROI, and demand generation efficiency.",
    "sub": "Can you PROVE what marketing drives?",
    "options": [
      "No framework",
      "Basic tracking",
      "Some analytics",
      "Strong framework",
      "Comprehensive marketing intelligence with attribution and optimization"
    ]
  },
  {
    "id": 4002,
    "pillar": 4,
    "pillar_name": "Marketing & Demand Analytics",
    "grip": "G",
    "qid": "DI-4002",
    "type": "scale",
    "title": "Marketing and Sales share aligned definitions for lead stages, qualification criteria, and handoff metrics.",
    "sub": "Can you PROVE what marketing drives?",
    "options": [
      "No alignment",
      "Conflicting definitions",
      "Basic alignment",
      "Strong shared definitions",
      "Unified definitions with automated enforcement and feedback loops"
    ]
  },
  {
    "id": 4003,
    "pillar": 4,
    "pillar_name": "Marketing & Demand Analytics",
    "grip": "R",
    "qid": "DI-4003",
    "type": "text",
    "title": "How many marketing channels are tracked with full-funnel attribution (from first touch to closed revenue)?",
    "sub": "Can you PROVE what marketing drives?"
  },
  {
    "id": 4004,
    "pillar": 4,
    "pillar_name": "Marketing & Demand Analytics",
    "grip": "R",
    "qid": "DI-4004",
    "type": "scale",
    "title": "We have the right marketing analytics tools (attribution, campaign tracking, web analytics, intent data) for our stage.",
    "sub": "Can you PROVE what marketing drives?",
    "options": [
      "No tools",
      "Basic free tools",
      "Core paid tools",
      "Strong tool stack",
      "Advanced marketing intelligence platform"
    ]
  },
  {
    "id": 4005,
    "pillar": 4,
    "pillar_name": "Marketing & Demand Analytics",
    "grip": "I",
    "qid": "DI-4005",
    "type": "scale",
    "title": "Marketing budget allocation is informed by channel performance data --- we invest more in what works and cut what does not.",
    "sub": "Can you PROVE what marketing drives?",
    "options": [
      "No data input",
      "Mostly intuition",
      "Some data influence",
      "Strongly data-driven",
      "Algorithmic budget optimization with continuous reallocation"
    ]
  },
  {
    "id": 4006,
    "pillar": 4,
    "pillar_name": "Marketing & Demand Analytics",
    "grip": "I",
    "qid": "DI-4006",
    "type": "scale",
    "title": "We A/B test marketing campaigns, messaging, and channels systematically to improve performance.",
    "sub": "Can you PROVE what marketing drives?",
    "options": [
      "No testing",
      "Occasional",
      "Some systematic testing",
      "Regular testing program",
      "Experimentation culture with statistical rigor"
    ]
  },
  {
    "id": 4007,
    "pillar": 4,
    "pillar_name": "Marketing & Demand Analytics",
    "grip": "I",
    "qid": "DI-4007",
    "type": "scale",
    "title": "Marketing performance data is shared with Sales in a format they can act on (not just dashboards they never check).",
    "sub": "Can you PROVE what marketing drives?",
    "options": [
      "No sharing",
      "Monthly reports ignored",
      "Some sharing",
      "Regular actionable sharing",
      "Embedded in Sales workflows with automated signals"
    ]
  },
  {
    "id": 4008,
    "pillar": 4,
    "pillar_name": "Marketing & Demand Analytics",
    "grip": "P",
    "qid": "DI-4008",
    "type": "text",
    "title": "Marketing-sourced pipeline as % of total pipeline? (tracked and attributed)",
    "sub": "Can you PROVE what marketing drives?"
  },
  {
    "id": 4009,
    "pillar": 4,
    "pillar_name": "Marketing & Demand Analytics",
    "grip": "P",
    "qid": "DI-4009",
    "type": "text",
    "title": "Cost per qualified lead (SQL) trend over the last 12 months --- has it improved (decreased)?",
    "sub": "Can you PROVE what marketing drives?"
  },
  {
    "id": 4010,
    "pillar": 4,
    "pillar_name": "Marketing & Demand Analytics",
    "grip": "P",
    "qid": "DI-4010",
    "type": "scale",
    "title": "We can confidently say which marketing investments generate the highest return and why.",
    "sub": "Can you PROVE what marketing drives?",
    "options": [
      "No confidence",
      "Low confidence",
      "Moderate",
      "High confidence",
      "Complete confidence backed by attribution data **Engine 5: Predictive Analytics & AI Readiness**"
    ]
  },
  {
    "id": 5001,
    "pillar": 5,
    "pillar_name": "Predictive Analytics & AI Readiness",
    "grip": "G",
    "qid": "DI-5001",
    "type": "scale",
    "title": "We have a strategy for using predictive analytics and AI/ML in GTM --- not just experimentation, but a defined roadmap.",
    "sub": "Are you ready for AI or still cleaning spreadsheets?",
    "options": [
      "No strategy",
      "Ad-hoc experiments",
      "Some defined use cases",
      "Strong roadmap",
      "Comprehensive AI/ML strategy with prioritized use cases and success metrics"
    ]
  },
  {
    "id": 5002,
    "pillar": 5,
    "pillar_name": "Predictive Analytics & AI Readiness",
    "grip": "G",
    "qid": "DI-5002",
    "type": "scale",
    "title": "Our data infrastructure (quality, volume, accessibility) is ready to support predictive models and AI applications.",
    "sub": "Are you ready for AI or still cleaning spreadsheets?",
    "options": [
      "Not ready",
      "Major gaps",
      "Partially ready",
      "Mostly ready",
      "Fully ready --- clean, accessible, well-documented data at scale"
    ]
  },
  {
    "id": 5003,
    "pillar": 5,
    "pillar_name": "Predictive Analytics & AI Readiness",
    "grip": "R",
    "qid": "DI-5003",
    "type": "text",
    "title": "How many predictive models or AI-driven insights are currently in production use for GTM decisions?",
    "sub": "Are you ready for AI or still cleaning spreadsheets?"
  },
  {
    "id": 5004,
    "pillar": 5,
    "pillar_name": "Predictive Analytics & AI Readiness",
    "grip": "R",
    "qid": "DI-5004",
    "type": "scale",
    "title": "We have the right talent (data science, analytics engineering) to build and maintain predictive capabilities.",
    "sub": "Are you ready for AI or still cleaning spreadsheets?",
    "options": [
      "No talent",
      "Insufficient",
      "Basic capability",
      "Strong team",
      "Advanced capability with ML engineering"
    ]
  },
  {
    "id": 5005,
    "pillar": 5,
    "pillar_name": "Predictive Analytics & AI Readiness",
    "grip": "I",
    "qid": "DI-5005",
    "type": "scale",
    "title": "Predictive models are validated, monitored for drift, and retrained at defined cadences --- not set and forgotten.",
    "sub": "Are you ready for AI or still cleaning spreadsheets?",
    "options": [
      "No monitoring",
      "Set and forget",
      "Occasional review",
      "Regular monitoring",
      "Full MLOps with automated retraining and drift detection"
    ]
  },
  {
    "id": 5006,
    "pillar": 5,
    "pillar_name": "Predictive Analytics & AI Readiness",
    "grip": "I",
    "qid": "DI-5006",
    "type": "scale",
    "title": "AI/ML outputs are presented to GTM teams in actionable formats --- not raw scores, but clear recommendations with context.",
    "sub": "Are you ready for AI or still cleaning spreadsheets?",
    "options": [
      "Not presented",
      "Raw scores",
      "Basic formatting",
      "Actionable presentation",
      "Embedded in workflows with natural language insights"
    ]
  },
  {
    "id": 5007,
    "pillar": 5,
    "pillar_name": "Predictive Analytics & AI Readiness",
    "grip": "I",
    "qid": "DI-5007",
    "type": "scale",
    "title": "We evaluate AI/ML investments against business impact --- models are justified by measurable GTM outcomes, not novelty.",
    "sub": "Are you ready for AI or still cleaning spreadsheets?",
    "options": [
      "No evaluation",
      "Novelty-driven",
      "Basic ROI awareness",
      "Impact-measured",
      "Rigorous business case with measured lift and continuous optimization"
    ]
  },
  {
    "id": 5008,
    "pillar": 5,
    "pillar_name": "Predictive Analytics & AI Readiness",
    "grip": "P",
    "qid": "DI-5008",
    "type": "text",
    "title": "Measured lift from predictive models on key GTM metrics (conversion, retention, ARPA)? (% improvement attributed to AI/ML)",
    "sub": "Are you ready for AI or still cleaning spreadsheets?"
  },
  {
    "id": 5009,
    "pillar": 5,
    "pillar_name": "Predictive Analytics & AI Readiness",
    "grip": "P",
    "qid": "DI-5009",
    "type": "scale",
    "title": "GTM teams trust and use AI-driven recommendations --- they are seen as helpful, not threatening or unreliable.",
    "sub": "Are you ready for AI or still cleaning spreadsheets?",
    "options": [
      "Rejected",
      "Skeptical",
      "Mixed",
      "Mostly trusted",
      "Fully integrated into daily decisions"
    ]
  },
  {
    "id": 5010,
    "pillar": 5,
    "pillar_name": "Predictive Analytics & AI Readiness",
    "grip": "P",
    "qid": "DI-5010",
    "type": "scale",
    "title": "Our predictive capabilities give us a competitive advantage --- we see opportunities and risks earlier than competitors.",
    "sub": "Are you ready for AI or still cleaning spreadsheets?",
    "options": [
      "No advantage",
      "Behind peers",
      "At parity",
      "Ahead",
      "Industry-leading predictive intelligence **Engine 6: Data Culture & Literacy**"
    ]
  },
  {
    "id": 6001,
    "pillar": 6,
    "pillar_name": "Data Culture & Literacy",
    "grip": "G",
    "qid": "DI-6001",
    "type": "scale",
    "title": "Data literacy is valued across the organization --- being data-driven is an explicit part of our culture, not just a slogan.",
    "sub": "Does your team THINK with data or just collect it?",
    "options": [
      "No data culture",
      "Lip service",
      "Emerging",
      "Strong culture",
      "Data-first culture embedded in hiring, onboarding, and performance reviews"
    ]
  },
  {
    "id": 6002,
    "pillar": 6,
    "pillar_name": "Data Culture & Literacy",
    "grip": "G",
    "qid": "DI-6002",
    "type": "scale",
    "title": "Leadership models data-driven behavior --- decisions at the executive level are consistently backed by data and analysis.",
    "sub": "Does your team THINK with data or just collect it?",
    "options": [
      "Intuition-driven leadership",
      "Mostly intuition",
      "Mixed",
      "Mostly data-driven",
      "Exemplary data-driven leadership"
    ]
  },
  {
    "id": 6003,
    "pillar": 6,
    "pillar_name": "Data Culture & Literacy",
    "grip": "R",
    "qid": "DI-6003",
    "type": "text",
    "title": "What percentage of GTM team members can independently access and interpret data relevant to their role without analyst help?",
    "sub": "Does your team THINK with data or just collect it?"
  },
  {
    "id": 6004,
    "pillar": 6,
    "pillar_name": "Data Culture & Literacy",
    "grip": "R",
    "qid": "DI-6004",
    "type": "scale",
    "title": "We invest in data literacy training and enablement for GTM teams --- not just for analysts.",
    "sub": "Does your team THINK with data or just collect it?",
    "options": [
      "No investment",
      "Minimal",
      "Some training",
      "Regular program",
      "Comprehensive enablement with role-specific training and certification"
    ]
  },
  {
    "id": 6005,
    "pillar": 6,
    "pillar_name": "Data Culture & Literacy",
    "grip": "I",
    "qid": "DI-6005",
    "type": "scale",
    "title": "Meetings and reviews routinely start with data --- showing the numbers is the norm, not the exception.",
    "sub": "Does your team THINK with data or just collect it?",
    "options": [
      "Rarely use data",
      "Occasionally",
      "Sometimes",
      "Usually",
      "Always --- data-first is the standard format"
    ]
  },
  {
    "id": 6006,
    "pillar": 6,
    "pillar_name": "Data Culture & Literacy",
    "grip": "I",
    "qid": "DI-6006",
    "type": "scale",
    "title": "We have feedback loops where GTM teams can challenge data, report issues, and request new insights --- and get responses.",
    "sub": "Does your team THINK with data or just collect it?",
    "options": [
      "No feedback mechanism",
      "Black hole submissions",
      "Basic ticketing",
      "Active feedback loops",
      "Collaborative data community with regular office hours and rapid response"
    ]
  },
  {
    "id": 6007,
    "pillar": 6,
    "pillar_name": "Data Culture & Literacy",
    "grip": "I",
    "qid": "DI-6007",
    "type": "scale",
    "title": "Data-driven insights lead to action --- analysis does not sit in presentations but triggers concrete changes in strategy or execution.",
    "sub": "Does your team THINK with data or just collect it?",
    "options": [
      "Insights ignored",
      "Rarely acted on",
      "Sometimes",
      "Usually",
      "Consistently --- insight-to-action pipeline is fast and accountable"
    ]
  },
  {
    "id": 6008,
    "pillar": 6,
    "pillar_name": "Data Culture & Literacy",
    "grip": "P",
    "qid": "DI-6008",
    "type": "scale",
    "title": "When data and intuition conflict, our organization defaults to data --- we trust evidence over experience.",
    "sub": "Does your team THINK with data or just collect it?",
    "options": [
      "Always intuition",
      "Usually intuition",
      "Depends on seniority",
      "Usually data",
      "Always data --- evidence-based culture"
    ]
  },
  {
    "id": 6009,
    "pillar": 6,
    "pillar_name": "Data Culture & Literacy",
    "grip": "P",
    "qid": "DI-6009",
    "type": "text",
    "title": "How many data-driven experiments or tests did GTM teams run in the last quarter (beyond marketing A/B tests)?",
    "sub": "Does your team THINK with data or just collect it?"
  },
  {
    "id": 6010,
    "pillar": 6,
    "pillar_name": "Data Culture & Literacy",
    "grip": "P",
    "qid": "DI-6010",
    "type": "scale",
    "title": "Our data capabilities (quality, access, analytics) are a competitive advantage that competitors would struggle to replicate.",
    "sub": "Does your team THINK with data or just collect it?",
    "options": [
      "No advantage",
      "Behind peers",
      "At parity",
      "Ahead",
      "Significant competitive moat built on data **4. Numeric Input Calibration Tables**  -----------------------------------------------------------------------  17 numeric questions. Mix of universal, stage-adjusted, inverted, and  context-dependent.  ----------------------------------------------------------------------- **4.1 Data Dictionary Coverage % DI-1003**"
    ]
  }
];
