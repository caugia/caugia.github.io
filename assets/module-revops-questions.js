// RevOps Deep Dive Questions — 60 questions, 6 engines
// Auto-generated from RevOps v1.1 spec
var QUESTIONS = [
  {
    "id": 1001,
    "pillar": 1,
    "pillar_name": "CRM & Data Architecture",
    "grip": "G",
    "qid": "RO-1001",
    "type": "scale",
    "title": "Our CRM is the single source of truth for all customer and pipeline data across GTM teams.",
    "sub": "Is your CRM a system of record or a graveyard of bad data?",
    "options": [
      "Multiple disconnected systems",
      "CRM exists but not trusted",
      "Primary system but gaps",
      "Strong SSOT with governance",
      "Authoritative SSOT enforced across all teams"
    ]
  },
  {
    "id": 1002,
    "pillar": 1,
    "pillar_name": "CRM & Data Architecture",
    "grip": "G",
    "qid": "RO-1002",
    "type": "scale",
    "title": "We have a documented data model with clear object relationships, field definitions, and ownership.",
    "sub": "Is your CRM a system of record or a graveyard of bad data?",
    "options": [
      "No documentation",
      "Informal knowledge",
      "Partial documentation",
      "Strong documented model",
      "Living data dictionary with automated governance"
    ]
  },
  {
    "id": 1003,
    "pillar": 1,
    "pillar_name": "CRM & Data Architecture",
    "grip": "R",
    "qid": "RO-1003",
    "type": "text",
    "title": "What percentage of CRM records have complete required fields (no blanks in mandatory fields)?",
    "sub": "Is your CRM a system of record or a graveyard of bad data?"
  },
  {
    "id": 1004,
    "pillar": 1,
    "pillar_name": "CRM & Data Architecture",
    "grip": "R",
    "qid": "RO-1004",
    "type": "text",
    "title": "How many active integrations feed data into or out of your CRM?",
    "sub": "Is your CRM a system of record or a graveyard of bad data?"
  },
  {
    "id": 1005,
    "pillar": 1,
    "pillar_name": "CRM & Data Architecture",
    "grip": "I",
    "qid": "RO-1005",
    "type": "scale",
    "title": "CRM data hygiene is maintained through automated validation rules, deduplication, and enrichment.",
    "sub": "Is your CRM a system of record or a graveyard of bad data?",
    "options": [
      "No hygiene process",
      "Manual occasional cleanup",
      "Some automation",
      "Strong automated hygiene",
      "Real-time validation with enrichment pipeline"
    ]
  },
  {
    "id": 1006,
    "pillar": 1,
    "pillar_name": "CRM & Data Architecture",
    "grip": "I",
    "qid": "RO-1006",
    "type": "scale",
    "title": "We have enforced CRM adoption policies --- all customer interactions are logged, no shadow systems tolerated.",
    "sub": "Is your CRM a system of record or a graveyard of bad data?",
    "options": [
      "No enforcement",
      "Encouraged but optional",
      "Policies exist loosely enforced",
      "Strong enforcement with compliance tracking",
      "Full adoption with automated capture"
    ]
  },
  {
    "id": 1007,
    "pillar": 1,
    "pillar_name": "CRM & Data Architecture",
    "grip": "I",
    "qid": "RO-1007",
    "type": "scale",
    "title": "Changes to CRM architecture (new fields, objects, workflows) follow a documented change management process.",
    "sub": "Is your CRM a system of record or a graveyard of bad data?",
    "options": [
      "Anyone can change anything",
      "Informal requests",
      "Basic approval process",
      "Formal change management",
      "Full governance with impact assessment and rollback"
    ]
  },
  {
    "id": 1008,
    "pillar": 1,
    "pillar_name": "CRM & Data Architecture",
    "grip": "P",
    "qid": "RO-1008",
    "type": "text",
    "title": "CRM duplicate record rate? (% of records with at least one duplicate)",
    "sub": "Is your CRM a system of record or a graveyard of bad data?"
  },
  {
    "id": 1009,
    "pillar": 1,
    "pillar_name": "CRM & Data Architecture",
    "grip": "P",
    "qid": "RO-1009",
    "type": "scale",
    "title": "GTM teams trust CRM data enough to make decisions without cross-referencing other sources.",
    "sub": "Is your CRM a system of record or a graveyard of bad data?",
    "options": [
      "No trust",
      "Low trust",
      "Moderate trust",
      "High trust",
      "Complete trust --- CRM is decision authority"
    ]
  },
  {
    "id": 1010,
    "pillar": 1,
    "pillar_name": "CRM & Data Architecture",
    "grip": "P",
    "qid": "RO-1010",
    "type": "text",
    "title": "Average time to resolve a data quality issue once identified? (business days)",
    "sub": "Is your CRM a system of record or a graveyard of bad data?"
  },
  {
    "id": 2001,
    "pillar": 2,
    "pillar_name": "Tech Stack & Integration",
    "grip": "G",
    "qid": "RO-2001",
    "type": "scale",
    "title": "We have a documented GTM tech stack map showing all tools, their purpose, owners, and data flows.",
    "sub": "Does your stack CONNECT or just coexist?",
    "options": [
      "No map",
      "Informal awareness",
      "Partial documentation",
      "Complete documented map",
      "Living tech stack map with integration health monitoring"
    ]
  },
  {
    "id": 2002,
    "pillar": 2,
    "pillar_name": "Tech Stack & Integration",
    "grip": "G",
    "qid": "RO-2002",
    "type": "scale",
    "title": "Our tech stack was selected based on a deliberate strategy aligned with GTM needs, not accumulated ad-hoc.",
    "sub": "Does your stack CONNECT or just coexist?",
    "options": [
      "Pure accumulation",
      "Mostly ad-hoc",
      "Some strategic choices",
      "Mostly strategic",
      "Fully strategic with regular rationalization"
    ]
  },
  {
    "id": 2003,
    "pillar": 2,
    "pillar_name": "Tech Stack & Integration",
    "grip": "R",
    "qid": "RO-2003",
    "type": "text",
    "title": "Total number of GTM tools in your stack (Marketing, Sales, CS, RevOps combined)?",
    "sub": "Does your stack CONNECT or just coexist?"
  },
  {
    "id": 2004,
    "pillar": 2,
    "pillar_name": "Tech Stack & Integration",
    "grip": "R",
    "qid": "RO-2004",
    "type": "text",
    "title": "What percentage of your GTM tech stack has active integrations with your CRM?",
    "sub": "Does your stack CONNECT or just coexist?"
  },
  {
    "id": 2005,
    "pillar": 2,
    "pillar_name": "Tech Stack & Integration",
    "grip": "I",
    "qid": "RO-2005",
    "type": "scale",
    "title": "We regularly evaluate tool ROI and sunset underperforming or redundant tools.",
    "sub": "Does your stack CONNECT or just coexist?",
    "options": [
      "Never evaluated",
      "When contracts renew",
      "Annual review",
      "Regular structured evaluation",
      "Continuous optimization with usage monitoring"
    ]
  },
  {
    "id": 2006,
    "pillar": 2,
    "pillar_name": "Tech Stack & Integration",
    "grip": "I",
    "qid": "RO-2006",
    "type": "scale",
    "title": "New tool procurement follows a defined evaluation process including integration requirements and data security.",
    "sub": "Does your stack CONNECT or just coexist?",
    "options": [
      "No process",
      "Informal review",
      "Basic checklist",
      "Formal procurement process",
      "Full evaluation with POC, security review, and integration plan"
    ]
  },
  {
    "id": 2007,
    "pillar": 2,
    "pillar_name": "Tech Stack & Integration",
    "grip": "I",
    "qid": "RO-2007",
    "type": "scale",
    "title": "Integrations between GTM tools are monitored for data accuracy, latency, and failure with alerting.",
    "sub": "Does your stack CONNECT or just coexist?",
    "options": [
      "No monitoring",
      "Manual checks",
      "Basic error logging",
      "Structured monitoring with alerts",
      "Real-time observability with automated remediation"
    ]
  },
  {
    "id": 2008,
    "pillar": 2,
    "pillar_name": "Tech Stack & Integration",
    "grip": "P",
    "qid": "RO-2008",
    "type": "scale",
    "title": "Our GTM teams can complete their core workflows without switching between more than 2-3 tools.",
    "sub": "Does your stack CONNECT or just coexist?",
    "options": [
      "Constant context switching (6+ tools)",
      "Frequent (5-6)",
      "Moderate (4-5)",
      "Streamlined (2-3)",
      "Unified experience (1-2 tools)"
    ]
  },
  {
    "id": 2009,
    "pillar": 2,
    "pillar_name": "Tech Stack & Integration",
    "grip": "P",
    "qid": "RO-2009",
    "type": "text",
    "title": "Annual GTM tool spend as percentage of total GTM budget?",
    "sub": "Does your stack CONNECT or just coexist?"
  },
  {
    "id": 2010,
    "pillar": 2,
    "pillar_name": "Tech Stack & Integration",
    "grip": "P",
    "qid": "RO-2010",
    "type": "scale",
    "title": "Our tech stack enables rather than hinders GTM velocity --- teams rate it as an accelerator, not a friction point.",
    "sub": "Does your stack CONNECT or just coexist?",
    "options": [
      "Major friction",
      "Mostly friction",
      "Neutral",
      "Mostly enables",
      "Clear accelerator **Engine 3: Process Design & Automation**"
    ]
  },
  {
    "id": 3001,
    "pillar": 3,
    "pillar_name": "Process Design & Automation",
    "grip": "G",
    "qid": "RO-3001",
    "type": "scale",
    "title": "Core GTM processes (lead routing, handoffs, deal progression, renewal) are documented with clear ownership.",
    "sub": "Are your processes DESIGNED or just inherited?",
    "options": [
      "Undocumented tribal knowledge",
      "Some informal documentation",
      "Major processes documented",
      "Comprehensive process documentation",
      "Living process library with version control"
    ]
  },
  {
    "id": 3002,
    "pillar": 3,
    "pillar_name": "Process Design & Automation",
    "grip": "G",
    "qid": "RO-3002",
    "type": "scale",
    "title": "We have defined and documented the complete lead-to-cash process from first touch to revenue recognition.",
    "sub": "Are your processes DESIGNED or just inherited?",
    "options": [
      "No defined process",
      "Fragmented understanding",
      "Partially documented",
      "Fully documented end-to-end",
      "Instrumented and continuously optimized"
    ]
  },
  {
    "id": 3003,
    "pillar": 3,
    "pillar_name": "Process Design & Automation",
    "grip": "R",
    "qid": "RO-3003",
    "type": "text",
    "title": "What percentage of repetitive GTM processes are automated (lead routing, task creation, notifications, data sync)?",
    "sub": "Are your processes DESIGNED or just inherited?"
  },
  {
    "id": 3004,
    "pillar": 3,
    "pillar_name": "Process Design & Automation",
    "grip": "R",
    "qid": "RO-3004",
    "type": "scale",
    "title": "We have sufficient RevOps capacity (headcount or outsourced) to support current GTM process needs.",
    "sub": "Are your processes DESIGNED or just inherited?",
    "options": [
      "No dedicated capacity",
      "Severely under-resourced",
      "Adequate for basics",
      "Well-resourced",
      "Strategic capacity with proactive optimization"
    ]
  },
  {
    "id": 3005,
    "pillar": 3,
    "pillar_name": "Process Design & Automation",
    "grip": "I",
    "qid": "RO-3005",
    "type": "scale",
    "title": "Lead routing ensures the right lead reaches the right rep within a defined SLA.",
    "sub": "Are your processes DESIGNED or just inherited?",
    "options": [
      "No routing logic",
      "Manual assignment",
      "Basic automated routing",
      "Sophisticated routing with fallback",
      "Real-time intelligent routing with capacity balancing"
    ]
  },
  {
    "id": 3006,
    "pillar": 3,
    "pillar_name": "Process Design & Automation",
    "grip": "I",
    "qid": "RO-3006",
    "type": "scale",
    "title": "Handoffs between Marketing, Sales, and CS follow defined processes with documented criteria and SLAs.",
    "sub": "Are your processes DESIGNED or just inherited?",
    "options": [
      "No defined handoffs",
      "Informal",
      "Some documented",
      "Comprehensive with SLAs",
      "Automated handoffs with tracking and escalation"
    ]
  },
  {
    "id": 3007,
    "pillar": 3,
    "pillar_name": "Process Design & Automation",
    "grip": "I",
    "qid": "RO-3007",
    "type": "scale",
    "title": "We measure and optimize process cycle times (lead-to-MQL, MQL-to-SQL, SQL-to-close, onboarding-to-value).",
    "sub": "Are your processes DESIGNED or just inherited?",
    "options": [
      "No measurement",
      "Occasional review",
      "Some metrics tracked",
      "Comprehensive cycle time tracking",
      "Continuous optimization with bottleneck identification"
    ]
  },
  {
    "id": 3008,
    "pillar": 3,
    "pillar_name": "Process Design & Automation",
    "grip": "P",
    "qid": "RO-3008",
    "type": "text",
    "title": "Average lead response time from assignment to first meaningful outreach? (hours)",
    "sub": "Are your processes DESIGNED or just inherited?"
  },
  {
    "id": 3009,
    "pillar": 3,
    "pillar_name": "Process Design & Automation",
    "grip": "P",
    "qid": "RO-3009",
    "type": "text",
    "title": "Percentage of deals that follow the defined sales process stages without skipping?",
    "sub": "Are your processes DESIGNED or just inherited?"
  },
  {
    "id": 3010,
    "pillar": 3,
    "pillar_name": "Process Design & Automation",
    "grip": "P",
    "qid": "RO-3010",
    "type": "scale",
    "title": "Process breakdowns (lost leads, missed handoffs, stalled deals) are rare rather than routine.",
    "sub": "Are your processes DESIGNED or just inherited?",
    "options": [
      "Constant breakdowns",
      "Frequent",
      "Occasional",
      "Rare",
      "Exceptional --- near-zero breakdowns **Engine 4: Reporting & Analytics**"
    ]
  },
  {
    "id": 4001,
    "pillar": 4,
    "pillar_name": "Reporting & Analytics",
    "grip": "G",
    "qid": "RO-4001",
    "type": "scale",
    "title": "We have a defined reporting framework with standardized KPIs, dashboards, and distribution cadence.",
    "sub": "Can leadership SEE what is happening in real time?",
    "options": [
      "No framework",
      "Ad-hoc reports",
      "Basic dashboards",
      "Structured reporting framework",
      "Comprehensive analytics platform with self-serve and governed metrics"
    ]
  },
  {
    "id": 4002,
    "pillar": 4,
    "pillar_name": "Reporting & Analytics",
    "grip": "G",
    "qid": "RO-4002",
    "type": "scale",
    "title": "GTM metrics are defined with a single agreed-upon calculation methodology (no competing definitions).",
    "sub": "Can leadership SEE what is happening in real time?",
    "options": [
      "Competing definitions everywhere",
      "Mostly competing",
      "Core metrics aligned",
      "Strong alignment",
      "Complete metric governance with documented definitions"
    ]
  },
  {
    "id": 4003,
    "pillar": 4,
    "pillar_name": "Reporting & Analytics",
    "grip": "R",
    "qid": "RO-4003",
    "type": "text",
    "title": "How many standardized dashboards/reports are actively used for GTM decision-making?",
    "sub": "Can leadership SEE what is happening in real time?"
  },
  {
    "id": 4004,
    "pillar": 4,
    "pillar_name": "Reporting & Analytics",
    "grip": "R",
    "qid": "RO-4004",
    "type": "scale",
    "title": "We have the right analytics tools and BI infrastructure to answer GTM questions without custom engineering.",
    "sub": "Can leadership SEE what is happening in real time?",
    "options": [
      "No analytics tools",
      "Spreadsheet-dependent",
      "Basic BI tool",
      "Strong BI stack",
      "Advanced analytics with predictive capabilities"
    ]
  },
  {
    "id": 4005,
    "pillar": 4,
    "pillar_name": "Reporting & Analytics",
    "grip": "I",
    "qid": "RO-4005",
    "type": "scale",
    "title": "GTM teams can access the data they need for decisions within minutes, not days.",
    "sub": "Can leadership SEE what is happening in real time?",
    "options": [
      "Days to get data",
      "Hours with help",
      "Hours self-serve",
      "Minutes self-serve",
      "Real-time embedded in workflow"
    ]
  },
  {
    "id": 4006,
    "pillar": 4,
    "pillar_name": "Reporting & Analytics",
    "grip": "I",
    "qid": "RO-4006",
    "type": "scale",
    "title": "We conduct regular data quality audits and publish data health scores.",
    "sub": "Can leadership SEE what is happening in real time?",
    "options": [
      "Never",
      "When problems arise",
      "Quarterly",
      "Monthly with published scores",
      "Continuous monitoring with automated data health dashboard"
    ]
  },
  {
    "id": 4007,
    "pillar": 4,
    "pillar_name": "Reporting & Analytics",
    "grip": "I",
    "qid": "RO-4007",
    "type": "scale",
    "title": "Reports and dashboards are reviewed and maintained at a defined cadence --- no stale or orphaned reports.",
    "sub": "Can leadership SEE what is happening in real time?",
    "options": [
      "Never maintained",
      "When broken",
      "Annual cleanup",
      "Quarterly review",
      "Continuous governance with usage tracking and sunset policy"
    ]
  },
  {
    "id": 4008,
    "pillar": 4,
    "pillar_name": "Reporting & Analytics",
    "grip": "P",
    "qid": "RO-4008",
    "type": "scale",
    "title": "Leadership trusts the numbers in GTM reports enough to make strategic decisions based on them.",
    "sub": "Can leadership SEE what is happening in real time?",
    "options": [
      "No trust",
      "Low trust",
      "Moderate trust",
      "High trust",
      "Complete trust --- data-driven culture"
    ]
  },
  {
    "id": 4009,
    "pillar": 4,
    "pillar_name": "Reporting & Analytics",
    "grip": "P",
    "qid": "RO-4009",
    "type": "text",
    "title": "What percentage of GTM decisions at leadership level are supported by dashboard/report data (vs intuition)?",
    "sub": "Can leadership SEE what is happening in real time?"
  },
  {
    "id": 4010,
    "pillar": 4,
    "pillar_name": "Reporting & Analytics",
    "grip": "P",
    "qid": "RO-4010",
    "type": "scale",
    "title": "Our reporting gives us leading indicators (not just lagging) that allow proactive course correction.",
    "sub": "Can leadership SEE what is happening in real time?",
    "options": [
      "Only lagging",
      "Mostly lagging",
      "Mix but mostly lagging",
      "Good leading indicators",
      "Strong predictive capability **Engine 5: Forecasting & Pipeline Management**"
    ]
  },
  {
    "id": 5001,
    "pillar": 5,
    "pillar_name": "Forecasting & Pipeline Management",
    "grip": "G",
    "qid": "RO-5001",
    "type": "scale",
    "title": "We have a defined forecasting methodology that is consistently applied across all reps and managers.",
    "sub": "Can you PREDICT revenue or just hope?",
    "options": [
      "No methodology",
      "Inconsistent approaches",
      "Basic methodology exists",
      "Strong consistent methodology",
      "Multi-method validated forecasting (bottom-up, top-down, AI-assisted)"
    ]
  },
  {
    "id": 5002,
    "pillar": 5,
    "pillar_name": "Forecasting & Pipeline Management",
    "grip": "G",
    "qid": "RO-5002",
    "type": "scale",
    "title": "Pipeline stages have clear, measurable entry and exit criteria that are enforced in the CRM.",
    "sub": "Can you PREDICT revenue or just hope?",
    "options": [
      "No criteria",
      "Vague descriptions",
      "Documented but not enforced",
      "Clear criteria enforced",
      "Validated criteria with stage-specific conversion metrics"
    ]
  },
  {
    "id": 5003,
    "pillar": 5,
    "pillar_name": "Forecasting & Pipeline Management",
    "grip": "R",
    "qid": "RO-5003",
    "type": "text",
    "title": "Current pipeline coverage ratio (pipeline value / quota for the period)?",
    "sub": "Can you PREDICT revenue or just hope?"
  },
  {
    "id": 5004,
    "pillar": 5,
    "pillar_name": "Forecasting & Pipeline Management",
    "grip": "R",
    "qid": "RO-5004",
    "type": "text",
    "title": "Average pipeline aging --- what percentage of pipeline is older than 2x your average sales cycle?",
    "sub": "Can you PREDICT revenue or just hope?"
  },
  {
    "id": 5005,
    "pillar": 5,
    "pillar_name": "Forecasting & Pipeline Management",
    "grip": "I",
    "qid": "RO-5005",
    "type": "scale",
    "title": "Pipeline reviews happen at a structured cadence with data-driven qualification criteria (not gut feel).",
    "sub": "Can you PREDICT revenue or just hope?",
    "options": [
      "No reviews",
      "Ad-hoc",
      "Regular but informal",
      "Structured with data",
      "Rigorous data-driven reviews with deal scoring"
    ]
  },
  {
    "id": 5006,
    "pillar": 5,
    "pillar_name": "Forecasting & Pipeline Management",
    "grip": "I",
    "qid": "RO-5006",
    "type": "scale",
    "title": "We actively manage pipeline hygiene --- stale deals are progressed, disqualified, or removed at a defined cadence.",
    "sub": "Can you PREDICT revenue or just hope?",
    "options": [
      "Never cleaned",
      "Quarterly cleanup",
      "Monthly review",
      "Bi-weekly hygiene",
      "Continuous with automated aging alerts"
    ]
  },
  {
    "id": 5007,
    "pillar": 5,
    "pillar_name": "Forecasting & Pipeline Management",
    "grip": "I",
    "qid": "RO-5007",
    "type": "scale",
    "title": "Forecasting inputs include both rep judgment AND objective deal signals (engagement, stakeholder access, timeline).",
    "sub": "Can you PREDICT revenue or just hope?",
    "options": [
      "Rep gut only",
      "Mostly subjective",
      "Mix of inputs",
      "Strong objective signals",
      "Multi-signal with predictive scoring"
    ]
  },
  {
    "id": 5008,
    "pillar": 5,
    "pillar_name": "Forecasting & Pipeline Management",
    "grip": "P",
    "qid": "RO-5008",
    "type": "text",
    "title": "Forecast accuracy over the last 4 quarters? (average absolute deviation from actual)",
    "sub": "Can you PREDICT revenue or just hope?"
  },
  {
    "id": 5009,
    "pillar": 5,
    "pillar_name": "Forecasting & Pipeline Management",
    "grip": "P",
    "qid": "RO-5009",
    "type": "text",
    "title": "Stage-to-stage conversion rate consistency --- standard deviation across stages?",
    "sub": "Can you PREDICT revenue or just hope?"
  },
  {
    "id": 5010,
    "pillar": 5,
    "pillar_name": "Forecasting & Pipeline Management",
    "grip": "P",
    "qid": "RO-5010",
    "type": "scale",
    "title": "Our forecast is reliable enough that finance and leadership use it for resource allocation and planning.",
    "sub": "Can you PREDICT revenue or just hope?",
    "options": [
      "Never used",
      "Directional only",
      "Used with heavy buffer",
      "Trusted with minor adjustments",
      "Primary planning input **Engine 6: RevOps Governance & Enablement**"
    ]
  },
  {
    "id": 6001,
    "pillar": 6,
    "pillar_name": "RevOps Governance & Enablement",
    "grip": "G",
    "qid": "RO-6001",
    "type": "scale",
    "title": "RevOps has a defined charter, scope, and mandate that is understood across GTM leadership.",
    "sub": "Does RevOps GOVERN the system or just maintain tools?",
    "options": [
      "No RevOps function",
      "Informal / unclear scope",
      "Basic charter",
      "Strong defined charter",
      "Strategic mandate with exec sponsorship"
    ]
  },
  {
    "id": 6002,
    "pillar": 6,
    "pillar_name": "RevOps Governance & Enablement",
    "grip": "G",
    "qid": "RO-6002",
    "type": "scale",
    "title": "RevOps operates as a strategic function (drives decisions) rather than a service desk (fulfills requests).",
    "sub": "Does RevOps GOVERN the system or just maintain tools?",
    "options": [
      "Pure service desk",
      "Mostly reactive",
      "Mix of strategic and reactive",
      "Mostly strategic",
      "Strategic partner to GTM leadership"
    ]
  },
  {
    "id": 6003,
    "pillar": 6,
    "pillar_name": "RevOps Governance & Enablement",
    "grip": "R",
    "qid": "RO-6003",
    "type": "text",
    "title": "RevOps headcount as percentage of total GTM headcount?",
    "sub": "Does RevOps GOVERN the system or just maintain tools?"
  },
  {
    "id": 6004,
    "pillar": 6,
    "pillar_name": "RevOps Governance & Enablement",
    "grip": "R",
    "qid": "RO-6004",
    "type": "scale",
    "title": "RevOps team has the right mix of skills: technical (CRM, integrations), analytical (BI, data), and strategic.",
    "sub": "Does RevOps GOVERN the system or just maintain tools?",
    "options": [
      "Major skill gaps",
      "Mostly technical",
      "Good technical, weak strategic",
      "Strong across areas",
      "Full-spectrum RevOps capability"
    ]
  },
  {
    "id": 6005,
    "pillar": 6,
    "pillar_name": "RevOps Governance & Enablement",
    "grip": "I",
    "qid": "RO-6005",
    "type": "scale",
    "title": "RevOps publishes and maintains a GTM operations roadmap aligned with business priorities.",
    "sub": "Does RevOps GOVERN the system or just maintain tools?",
    "options": [
      "No roadmap",
      "Reactive queue",
      "Basic prioritization",
      "Published roadmap",
      "Strategic roadmap with quarterly planning and stakeholder input"
    ]
  },
  {
    "id": 6006,
    "pillar": 6,
    "pillar_name": "RevOps Governance & Enablement",
    "grip": "I",
    "qid": "RO-6006",
    "type": "scale",
    "title": "RevOps drives GTM process improvement proactively, not just when things break.",
    "sub": "Does RevOps GOVERN the system or just maintain tools?",
    "options": [
      "Only when broken",
      "Mostly reactive",
      "Some proactive",
      "Regularly proactive",
      "Continuous improvement culture with impact measurement"
    ]
  },
  {
    "id": 6007,
    "pillar": 6,
    "pillar_name": "RevOps Governance & Enablement",
    "grip": "I",
    "qid": "RO-6007",
    "type": "scale",
    "title": "We have defined SLAs for RevOps support requests (CRM changes, report requests, integration fixes).",
    "sub": "Does RevOps GOVERN the system or just maintain tools?",
    "options": [
      "No SLAs",
      "Informal expectations",
      "Some SLAs",
      "Comprehensive SLAs",
      "Published SLAs with tracking and accountability"
    ]
  },
  {
    "id": 6008,
    "pillar": 6,
    "pillar_name": "RevOps Governance & Enablement",
    "grip": "P",
    "qid": "RO-6008",
    "type": "scale",
    "title": "GTM teams view RevOps as a critical enabler rather than a bottleneck or overhead.",
    "sub": "Does RevOps GOVERN the system or just maintain tools?",
    "options": [
      "Seen as bottleneck",
      "Seen as overhead",
      "Neutral",
      "Valued enabler",
      "Strategic partner --- GTM teams advocate for RevOps investment"
    ]
  },
  {
    "id": 6009,
    "pillar": 6,
    "pillar_name": "RevOps Governance & Enablement",
    "grip": "P",
    "qid": "RO-6009",
    "type": "text",
    "title": "Number of process improvements or optimizations RevOps delivered in the last quarter?",
    "sub": "Does RevOps GOVERN the system or just maintain tools?"
  },
  {
    "id": 6010,
    "pillar": 6,
    "pillar_name": "RevOps Governance & Enablement",
    "grip": "P",
    "qid": "RO-6010",
    "type": "scale",
    "title": "RevOps has measurable impact on GTM efficiency --- we can quantify time saved, conversion improved, or cost reduced.",
    "sub": "Does RevOps GOVERN the system or just maintain tools?",
    "options": [
      "No measurement",
      "Anecdotal",
      "Some metrics",
      "Strong impact measurement",
      "Quantified ROI reported to leadership **4. Numeric Input Calibration Tables**  -----------------------------------------------------------------------  18 numeric questions. Mix of universal, stage-adjusted, and inverted  scales."
    ]
  }
];
