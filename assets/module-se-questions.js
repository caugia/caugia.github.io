// SE Deep Dive Questions — 60 questions, 6 engines
// Auto-generated from SE v1.4 spec
var CALIBRATION_QUESTIONS = {
  'ctx.motion': {
    order: 1,
    label: 'Primary GTM Motion',
    prompt: 'What best describes your primary go-to-market motion?',
    type: 'mc',
    options: {
      plg: 'Product-Led Growth (self-serve, trial, freemium)',
      inbound: 'Inbound Sales-Assisted',
      outbound: 'Outbound / SDR-led',
      enterprise: 'Enterprise / Field Sales',
      partner: 'Partner / Channel-Led'
    }
  },
  'ctx.acv_band': {
    order: 2,
    label: 'Average Contract Value',
    prompt: 'What is your average contract value (ACV)?',
    type: 'mc',
    options: {
      sub_10k: 'Under $10K',
      '10k_50k': '$10K - $50K',
      '50k_150k': '$50K - $150K',
      above_150k: 'Above $150K'
    }
  },
  'ctx.stage': {
    order: 3,
    label: 'Company Stage',
    prompt: 'What best describes your current growth stage?',
    type: 'mc',
    options: {
      series_a: 'Series A (finding repeatability)',
      series_b: 'Series B (scaling GTM)',
      series_c_plus: 'Series C+ (optimizing and expanding)',
      growth: 'Growth / Pre-IPO',
      established: 'Established / Post-IPO'
    }
  },
  'ctx.buying_complexity': {
    order: 4,
    label: 'Buying Process Complexity',
    prompt: 'How would you describe your typical buying process?',
    type: 'mc',
    options: {
      single: 'Single buyer / champion only',
      small_committee: '2-3 stakeholders',
      committee: '4-6 stakeholders',
      enterprise_committee: '7+ stakeholders, formal procurement'
    }
  },
  'ctx.implementation': {
    order: 5,
    label: 'Implementation Model',
    prompt: 'How does your product get implemented after a sale?',
    type: 'mc',
    options: {
      self_serve: 'Fully self-serve, no implementation required',
      light_touch: 'Guided onboarding, under 2 weeks',
      managed: 'Managed implementation, 2-8 weeks',
      complex: 'Complex implementation, 2+ months'
    }
  },
  'ctx.category_maturity': {
    order: 6,
    label: 'Category Maturity',
    prompt: 'How would you describe awareness of your product category?',
    type: 'mc',
    options: {
      creating: 'We are creating the category - buyers do not know they need this yet',
      emerging: 'Category exists but is not well understood',
      established: 'Buyers actively search for solutions like ours',
      commoditized: 'Category is mature, differentiation is hard'
    }
  },
  'ctx.self_reported_constraint': {
    order: 7,
    label: 'Self-Reported Primary Constraint',
    prompt: 'Where do you feel the biggest growth constraint today?',
    type: 'mc',
    options: {
      pipeline: 'Not enough qualified pipeline',
      conversion: 'Pipeline exists but conversion is too low',
      retention: 'We win but struggle to retain and expand',
      execution: 'Strategy is clear but execution is inconsistent',
      clarity: 'We lack strategic clarity on where to focus'
    },
    scope_note: 'INTEGRITY SIGNAL ONLY. Does not influence scoring, archetype, or benchmarks.'
  }
};

var CALIBRATION_UI = {
  page_title: 'Diagnostic Calibration',
  page_subtitle: 'These questions calibrate the diagnostic to your operating model so scores and benchmarks are interpreted correctly.',
  question_order: [
    'ctx.motion',
    'ctx.acv_band',
    'ctx.stage',
    'ctx.buying_complexity',
    'ctx.implementation',
    'ctx.category_maturity',
    'ctx.self_reported_constraint'
  ]
};

var QUESTIONS = [
  {
    "id": 1001,
    "pillar": 1,
    "pillar_name": "Sales Process & Methodology",
    "grip": "G",
    "qid": "SE-1001",
    "type": "scale",
    "title": "We have a documented sales process with clearly defined stages and exit criteria.",
    "sub": "Is your sales process REAL or just a CRM stage list?",
    "options": [
      "No process",
      "Informal stages",
      "Basic documented process",
      "Strong enforced process",
      "Optimized methodology with data"
    ]
  },
  {
    "id": 1002,
    "pillar": 1,
    "pillar_name": "Sales Process & Methodology",
    "grip": "G",
    "qid": "SE-1002",
    "type": "scale",
    "title": "We use a consistent qualification framework (MEDDPICC, BANT, SPICED, or equivalent).",
    "sub": "Is your sales process REAL or just a CRM stage list?",
    "options": [
      "No framework",
      "Informal qualification",
      "Framework exists",
      "Framework enforced",
      "Framework drives forecasting"
    ]
  },
  {
    "id": 1003,
    "pillar": 1,
    "pillar_name": "Sales Process & Methodology",
    "grip": "R",
    "qid": "SE-1003",
    "type": "scale",
    "title": "What percentage of AEs can articulate the sales process stages and exit criteria?",
    "sub": "Is your sales process REAL or just a CRM stage list?",
    "options": [
      "<25%",
      "25-50%",
      "50-75%",
      "75-90%",
      "90%+"
    ],
    "has_na": true
  },
  {
    "id": 1004,
    "pillar": 1,
    "pillar_name": "Sales Process & Methodology",
    "grip": "R",
    "qid": "SE-1004",
    "type": "scale",
    "title": "CRM is configured to enforce stage progression with required fields.",
    "sub": "Is your sales process REAL or just a CRM stage list?",
    "options": [
      "No CRM enforcement",
      "Basic stages",
      "Some required fields",
      "Strong enforcement",
      "Full process automation"
    ]
  },
  {
    "id": 1005,
    "pillar": 1,
    "pillar_name": "Sales Process & Methodology",
    "grip": "I",
    "qid": "SE-1005",
    "type": "scale",
    "title": "How often are deal stages audited for accuracy?",
    "sub": "Is your sales process REAL or just a CRM stage list?",
    "options": [
      "Never",
      "Quarterly",
      "Monthly",
      "Bi-weekly",
      "Weekly as part of pipeline review"
    ]
  },
  {
    "id": 1006,
    "pillar": 1,
    "pillar_name": "Sales Process & Methodology",
    "grip": "I",
    "qid": "SE-1006",
    "type": "scale",
    "title": "AEs consistently follow the process vs. freelancing their approach.",
    "sub": "Is your sales process REAL or just a CRM stage list?",
    "options": [
      "Everyone freelances",
      "Mostly freelance",
      "Mixed adherence",
      "Strong adherence",
      "Universal discipline"
    ],
    "has_na": true
  },
  {
    "id": 1007,
    "pillar": 1,
    "pillar_name": "Sales Process & Methodology",
    "grip": "I",
    "qid": "SE-1007",
    "type": "scale",
    "title": "Our sales process adapts to different deal types (size, segment, complexity).",
    "sub": "Is your sales process REAL or just a CRM stage list?",
    "options": [
      "One-size-fits-all",
      "Minor variations",
      "Segment-specific tracks",
      "Fully differentiated",
      "Dynamic process per deal type"
    ]
  },
  {
    "id": 1008,
    "pillar": 1,
    "pillar_name": "Sales Process & Methodology",
    "grip": "P",
    "qid": "SE-1008",
    "type": "text",
    "title": "What is your overall win rate? (closed-won / total qualified opportunities, as a percentage)",
    "sub": "Is your sales process REAL or just a CRM stage list?"
  },
  {
    "id": 1009,
    "pillar": 1,
    "pillar_name": "Sales Process & Methodology",
    "grip": "P",
    "qid": "SE-1009",
    "type": "text",
    "title": "What is your average sales cycle length in days? (from qualified opportunity to closed-won)",
    "sub": "Is your sales process REAL or just a CRM stage list?"
  },
  {
    "id": 1010,
    "pillar": 1,
    "pillar_name": "Sales Process & Methodology",
    "grip": "P",
    "qid": "SE-1010",
    "type": "text",
    "title": "What is your forecast accuracy? (percentage variance between commit forecast and actual closed revenue, last 3 months)",
    "sub": "Is your sales process REAL or just a CRM stage list?"
  },
  {
    "id": 2001,
    "pillar": 2,
    "pillar_name": "Discovery & Qualification",
    "grip": "G",
    "qid": "SE-2001",
    "type": "scale",
    "title": "We have a documented discovery framework that AEs follow consistently.",
    "sub": "Are you qualifying IN the right deals or just qualifying OUT too late?",
    "options": [
      "No framework",
      "Informal approach",
      "Basic guide exists",
      "Strong discovery playbook",
      "Systematic discovery engine"
    ]
  },
  {
    "id": 2002,
    "pillar": 2,
    "pillar_name": "Discovery & Qualification",
    "grip": "G",
    "qid": "SE-2002",
    "type": "scale",
    "title": "We have explicit disqualification criteria (when to walk away from a deal).",
    "sub": "Are you qualifying IN the right deals or just qualifying OUT too late?",
    "options": [
      "No criteria",
      "Informal",
      "Basic criteria",
      "Strong criteria enforced",
      "Data-driven disqualification"
    ]
  },
  {
    "id": 2003,
    "pillar": 2,
    "pillar_name": "Discovery & Qualification",
    "grip": "R",
    "qid": "SE-2003",
    "type": "scale",
    "title": "AEs have access to prospect intelligence before discovery calls.",
    "sub": "Are you qualifying IN the right deals or just qualifying OUT too late?",
    "options": [
      "No intelligence",
      "Basic LinkedIn research",
      "Some data enrichment",
      "Strong account intelligence",
      "Full buyer intelligence platform"
    ]
  },
  {
    "id": 2004,
    "pillar": 2,
    "pillar_name": "Discovery & Qualification",
    "grip": "R",
    "qid": "SE-2004",
    "type": "text",
    "title": "What percentage of your qualified opportunities have documented decision criteria in CRM?",
    "sub": "Are you qualifying IN the right deals or just qualifying OUT too late?"
  },
  {
    "id": 2005,
    "pillar": 2,
    "pillar_name": "Discovery & Qualification",
    "grip": "I",
    "qid": "SE-2005",
    "type": "scale",
    "title": "AEs consistently identify all key stakeholders (economic buyer, champion, blocker) early in the process.",
    "sub": "Are you qualifying IN the right deals or just qualifying OUT too late?",
    "options": [
      "Rarely",
      "Sometimes",
      "Often",
      "Usually",
      "Always with stakeholder mapping"
    ]
  },
  {
    "id": 2006,
    "pillar": 2,
    "pillar_name": "Discovery & Qualification",
    "grip": "I",
    "qid": "SE-2006",
    "type": "scale",
    "title": "AEs document decision criteria, timeline, and budget during discovery.",
    "sub": "Are you qualifying IN the right deals or just qualifying OUT too late?",
    "options": [
      "Never documented",
      "Occasionally",
      "Sometimes",
      "Usually",
      "Always in CRM with validation"
    ]
  },
  {
    "id": 2007,
    "pillar": 2,
    "pillar_name": "Discovery & Qualification",
    "grip": "I",
    "qid": "SE-2007",
    "type": "scale",
    "title": "Deals are actively disqualified when they don\\'t meet criteria.",
    "sub": "Are you qualifying IN the right deals or just qualifying OUT too late?",
    "options": [
      "Never disqualify",
      "Rarely",
      "Sometimes",
      "Regularly",
      "Disciplined disqualification culture"
    ]
  },
  {
    "id": 2008,
    "pillar": 2,
    "pillar_name": "Discovery & Qualification",
    "grip": "P",
    "qid": "SE-2008",
    "type": "text",
    "title": "What percentage of opportunities created are disqualified within 30 days?",
    "sub": "Are you qualifying IN the right deals or just qualifying OUT too late?"
  },
  {
    "id": 2009,
    "pillar": 2,
    "pillar_name": "Discovery & Qualification",
    "grip": "P",
    "qid": "SE-2009",
    "type": "text",
    "title": "What is your conversion rate from first meeting to qualified opportunity? (as a percentage)",
    "sub": "Are you qualifying IN the right deals or just qualifying OUT too late?"
  },
  {
    "id": 2010,
    "pillar": 2,
    "pillar_name": "Discovery & Qualification",
    "grip": "P",
    "qid": "SE-2010",
    "type": "scale",
    "title": "Deals that pass discovery convert at predictable rates through the rest of the funnel.",
    "sub": "Are you qualifying IN the right deals or just qualifying OUT too late?",
    "options": [
      "No pattern",
      "Highly variable",
      "Some predictability",
      "Predictable",
      "Highly predictable"
    ]
  },
  {
    "id": 3001,
    "pillar": 3,
    "pillar_name": "Deal Execution & Progression",
    "grip": "G",
    "qid": "SE-3001",
    "type": "scale",
    "title": "We have documented playbooks for each major deal stage (demo, POC, proposal, negotiation).",
    "sub": "Can your team EXECUTE deals or do they rely on heroics?",
    "options": [
      "No playbooks",
      "Informal approach",
      "Basic guides",
      "Strong playbooks",
      "Optimized per deal type"
    ]
  },
  {
    "id": 3002,
    "pillar": 3,
    "pillar_name": "Deal Execution & Progression",
    "grip": "G",
    "qid": "SE-3002",
    "type": "scale",
    "title": "We have a competitive displacement strategy for our top 3 competitors.",
    "sub": "Can your team EXECUTE deals or do they rely on heroics?",
    "options": [
      "No competitive strategy",
      "Basic battlecards",
      "Solid battlecards",
      "Strong win/loss-informed strategy",
      "Dynamic competitive intelligence"
    ]
  },
  {
    "id": 3003,
    "pillar": 3,
    "pillar_name": "Deal Execution & Progression",
    "grip": "R",
    "qid": "SE-3003",
    "type": "scale",
    "title": "AEs have access to relevant case studies, ROI calculators, and proof points.",
    "sub": "Can your team EXECUTE deals or do they rely on heroics?",
    "options": [
      "No collateral",
      "Basic collateral",
      "Solid library",
      "Strong persona-specific content",
      "Dynamic deal-stage content"
    ]
  },
  {
    "id": 3004,
    "pillar": 3,
    "pillar_name": "Deal Execution & Progression",
    "grip": "R",
    "qid": "SE-3004",
    "type": "text",
    "title": "What is the average number of stakeholders engaged per deal at close?",
    "sub": "Can your team EXECUTE deals or do they rely on heroics?"
  },
  {
    "id": 3005,
    "pillar": 3,
    "pillar_name": "Deal Execution & Progression",
    "grip": "I",
    "qid": "SE-3005",
    "type": "scale",
    "title": "AEs build and maintain a champion within target accounts.",
    "sub": "Can your team EXECUTE deals or do they rely on heroics?",
    "options": [
      "No champion strategy",
      "Occasional",
      "Sometimes",
      "Usually",
      "Always with documented champion plan"
    ]
  },
  {
    "id": 3007,
    "pillar": 3,
    "pillar_name": "Deal Execution & Progression",
    "grip": "I",
    "qid": "SE-3007",
    "type": "scale",
    "title": "We use mutual action plans / mutual close plans for deals above a size threshold.",
    "sub": "Can your team EXECUTE deals or do they rely on heroics?",
    "options": [
      "Never",
      "Rarely",
      "Sometimes",
      "Usually for large deals",
      "Always with tracked milestones"
    ]
  },
  {
    "id": 3008,
    "pillar": 3,
    "pillar_name": "Deal Execution & Progression",
    "grip": "P",
    "qid": "SE-3008",
    "type": "text",
    "title": "What is your stage-to-stage conversion rate from qualified opportunity to proposal? (as a percentage)",
    "sub": "Can your team EXECUTE deals or do they rely on heroics?"
  },
  {
    "id": 3009,
    "pillar": 3,
    "pillar_name": "Deal Execution & Progression",
    "grip": "P",
    "qid": "SE-3009",
    "type": "text",
    "title": "What is your average discount given vs. list price? (as a percentage)",
    "sub": "Can your team EXECUTE deals or do they rely on heroics?"
  },
  {
    "id": 3010,
    "pillar": 3,
    "pillar_name": "Deal Execution & Progression",
    "grip": "P",
    "qid": "SE-3010",
    "type": "text",
    "title": "What is your competitive win rate? (deals where you face a known competitor, as a percentage)",
    "sub": "Can your team EXECUTE deals or do they rely on heroics?"
  },
  {
    "id": 3006,
    "pillar": 3,
    "pillar_name": "Deal Execution & Progression",
    "grip": "P",
    "qid": "SE-3006",
    "type": "scale",
    "title": "Do you systematically collect and analyze win/loss feedback directly from buyers (not just internal post-mortems)?",
    "sub": "Can your team EXECUTE deals or do they rely on heroics?",
    "options": [
      "Never",
      "Occasionally on big losses",
      "On most losses",
      "On all losses and wins",
      "Structured program with third-party interviews"
    ]
  },
  {
    "id": 4001,
    "pillar": 4,
    "pillar_name": "Pipeline Management & Forecasting",
    "grip": "G",
    "qid": "SE-4001",
    "type": "scale",
    "title": "Pipeline coverage targets are defined and communicated (e.g. 3x for commit).",
    "sub": "Can you PREDICT revenue or just report on it?",
    "options": [
      "No targets",
      "Informal targets",
      "Basic targets",
      "Strong targets",
      "Dynamic targets by segment"
    ]
  },
  {
    "id": 4002,
    "pillar": 4,
    "pillar_name": "Pipeline Management & Forecasting",
    "grip": "G",
    "qid": "SE-4002",
    "type": "scale",
    "title": "Clear definition of what constitutes a \\'qualified\\' pipeline opportunity.",
    "sub": "Can you PREDICT revenue or just report on it?",
    "options": [
      "No definition",
      "Informal",
      "Basic criteria",
      "Strong enforced criteria",
      "Data-validated criteria"
    ]
  },
  {
    "id": 4003,
    "pillar": 4,
    "pillar_name": "Pipeline Management & Forecasting",
    "grip": "R",
    "qid": "SE-4003",
    "type": "text",
    "title": "What is your current pipeline coverage ratio? (pipeline value / quota target, e.g. 3.2)",
    "sub": "Can you PREDICT revenue or just report on it?"
  },
  {
    "id": 4004,
    "pillar": 4,
    "pillar_name": "Pipeline Management & Forecasting",
    "grip": "R",
    "qid": "SE-4004",
    "type": "scale",
    "title": "Pipeline reporting provides real-time, accurate visibility.",
    "sub": "Can you PREDICT revenue or just report on it?",
    "options": [
      "No reporting",
      "Manual/delayed",
      "Basic real-time",
      "Strong dashboards",
      "Predictive pipeline intelligence"
    ]
  },
  {
    "id": 4005,
    "pillar": 4,
    "pillar_name": "Pipeline Management & Forecasting",
    "grip": "I",
    "qid": "SE-4005",
    "type": "scale",
    "title": "How often do sales managers conduct formal pipeline reviews?",
    "sub": "Can you PREDICT revenue or just report on it?",
    "options": [
      "Never",
      "Monthly",
      "Bi-weekly",
      "Weekly",
      "Weekly + deal-level deep dives"
    ]
  },
  {
    "id": 4006,
    "pillar": 4,
    "pillar_name": "Pipeline Management & Forecasting",
    "grip": "I",
    "qid": "SE-4006",
    "type": "scale",
    "title": "Stale deals (no activity for 30+ days) are systematically cleaned from pipeline.",
    "sub": "Can you PREDICT revenue or just report on it?",
    "options": [
      "Never cleaned",
      "Quarterly cleanup",
      "Monthly cleanup",
      "Automated flagging",
      "Real-time hygiene enforcement"
    ]
  },
  {
    "id": 4007,
    "pillar": 4,
    "pillar_name": "Pipeline Management & Forecasting",
    "grip": "I",
    "qid": "SE-4007",
    "type": "scale",
    "title": "Forecast commits are based on evidence, not hope.",
    "sub": "Can you PREDICT revenue or just report on it?",
    "options": [
      "Gut-feel forecasting",
      "Rep-based optimism",
      "Basic evidence",
      "Strong evidence-based",
      "Multi-signal validated"
    ]
  },
  {
    "id": 4008,
    "pillar": 4,
    "pillar_name": "Pipeline Management & Forecasting",
    "grip": "P",
    "qid": "SE-4008",
    "type": "text",
    "title": "What percentage of pipeline value at the START of the quarter actually closed within that quarter?",
    "sub": "Can you PREDICT revenue or just report on it?"
  },
  {
    "id": 4009,
    "pillar": 4,
    "pillar_name": "Pipeline Management & Forecasting",
    "grip": "P",
    "qid": "SE-4009",
    "type": "text",
    "title": "What is your average deal velocity in days? (from opportunity creation to closed-won)",
    "sub": "Can you PREDICT revenue or just report on it?"
  },
  {
    "id": 4010,
    "pillar": 4,
    "pillar_name": "Pipeline Management & Forecasting",
    "grip": "P",
    "qid": "SE-4010",
    "type": "scale",
    "title": "What percentage of pipeline is added in the last 30 days of the quarter?",
    "sub": "Can you PREDICT revenue or just report on it?",
    "options": [
      "Unknown",
      ">40% (hockey stick)",
      "30-40%",
      "20-30%",
      "<20% (even distribution)"
    ]
  },
  {
    "id": 5001,
    "pillar": 5,
    "pillar_name": "Sales Enablement & Coaching",
    "grip": "G",
    "qid": "SE-5001",
    "type": "scale",
    "title": "We have a structured onboarding program with defined ramp milestones.",
    "sub": "Are your reps getting BETTER or just busier?",
    "options": [
      "No program",
      "Informal shadowing",
      "Basic onboarding",
      "Strong program",
      "Comprehensive with certification"
    ]
  },
  {
    "id": 5002,
    "pillar": 5,
    "pillar_name": "Sales Enablement & Coaching",
    "grip": "G",
    "qid": "SE-5002",
    "type": "scale",
    "title": "Ongoing training is planned and systematic (not just onboarding).",
    "sub": "Are your reps getting BETTER or just busier?",
    "options": [
      "No ongoing training",
      "Ad-hoc",
      "Quarterly sessions",
      "Monthly structured",
      "Continuous development engine"
    ]
  },
  {
    "id": 5003,
    "pillar": 5,
    "pillar_name": "Sales Enablement & Coaching",
    "grip": "R",
    "qid": "SE-5003",
    "type": "text",
    "title": "What is your average time to full AE ramp in months? (months to consistent quota attainment)",
    "sub": "Are your reps getting BETTER or just busier?",
    "has_na": true
  },
  {
    "id": 5004,
    "pillar": 5,
    "pillar_name": "Sales Enablement & Coaching",
    "grip": "R",
    "qid": "SE-5004",
    "type": "scale",
    "title": "Sales managers are trained and measured on coaching effectiveness.",
    "sub": "Are your reps getting BETTER or just busier?",
    "options": [
      "No coaching training",
      "Informal",
      "Basic training",
      "Strong coaching program",
      "Coaching excellence is core metric"
    ]
  },
  {
    "id": 5005,
    "pillar": 5,
    "pillar_name": "Sales Enablement & Coaching",
    "grip": "I",
    "qid": "SE-5005",
    "type": "scale",
    "title": "How often do managers conduct 1:1 coaching sessions with each AE?",
    "sub": "Are your reps getting BETTER or just busier?",
    "options": [
      "Never",
      "Monthly",
      "Bi-weekly",
      "Weekly",
      "Weekly + deal-specific coaching"
    ],
    "has_na": true
  },
  {
    "id": 5006,
    "pillar": 5,
    "pillar_name": "Sales Enablement & Coaching",
    "grip": "I",
    "qid": "SE-5006",
    "type": "scale",
    "title": "Call recordings are systematically reviewed for coaching purposes.",
    "sub": "Are your reps getting BETTER or just busier?",
    "options": [
      "No reviews",
      "Occasionally",
      "Monthly reviews",
      "Weekly reviews",
      "AI-assisted continuous review"
    ],
    "has_na": true
  },
  {
    "id": 5007,
    "pillar": 5,
    "pillar_name": "Sales Enablement & Coaching",
    "grip": "I",
    "qid": "SE-5007",
    "type": "scale",
    "title": "New hires follow a structured 30/60/90 day plan with checkpoints.",
    "sub": "Are your reps getting BETTER or just busier?",
    "options": [
      "No plan",
      "Informal expectations",
      "Basic plan",
      "Strong plan with metrics",
      "Comprehensive with certification gates"
    ],
    "has_na": true
  },
  {
    "id": 5008,
    "pillar": 5,
    "pillar_name": "Sales Enablement & Coaching",
    "grip": "P",
    "qid": "SE-5008",
    "type": "text",
    "title": "What percentage of AEs hit quota last quarter?",
    "sub": "Are your reps getting BETTER or just busier?",
    "has_na": true
  },
  {
    "id": 5009,
    "pillar": 5,
    "pillar_name": "Sales Enablement & Coaching",
    "grip": "P",
    "qid": "SE-5009",
    "type": "text",
    "title": "What is your voluntary AE turnover rate? (annual, as a percentage)",
    "sub": "Are your reps getting BETTER or just busier?",
    "has_na": true
  },
  {
    "id": 5010,
    "pillar": 5,
    "pillar_name": "Sales Enablement & Coaching",
    "grip": "P",
    "qid": "SE-5010",
    "type": "scale",
    "title": "New AEs reach productivity milestones faster than 12 months ago.",
    "sub": "Are your reps getting BETTER or just busier?",
    "options": [
      "Getting worse",
      "No change",
      "Slight improvement",
      "Measurable improvement",
      "Significantly faster"
    ]
  },
  {
    "id": 6001,
    "pillar": 6,
    "pillar_name": "Sales Operations & Infrastructure",
    "grip": "G",
    "qid": "SE-6001",
    "type": "scale",
    "title": "Territory and quota design is data-driven and perceived as fair by AEs.",
    "sub": "Does your infrastructure ENABLE scale or CREATE friction?",
    "options": [
      "No design",
      "Arbitrary",
      "Basic logic",
      "Strong data-driven",
      "Optimized and accepted"
    ],
    "has_na": true
  },
  {
    "id": 6002,
    "pillar": 6,
    "pillar_name": "Sales Operations & Infrastructure",
    "grip": "G",
    "qid": "SE-6002",
    "type": "scale",
    "title": "Comp plan incentivizes the right behaviors (not just bookings).",
    "sub": "Does your infrastructure ENABLE scale or CREATE friction?",
    "options": [
      "Misaligned comp",
      "Basic comp plan",
      "Solid alignment",
      "Strong behavioral incentives",
      "Fully aligned to company goals"
    ]
  },
  {
    "id": 6003,
    "pillar": 6,
    "pillar_name": "Sales Operations & Infrastructure",
    "grip": "R",
    "qid": "SE-6003",
    "type": "scale",
    "title": "Our CRM is configured to support the sales process effectively.",
    "sub": "Does your infrastructure ENABLE scale or CREATE friction?",
    "options": [
      "CRM is a graveyard",
      "Basic setup",
      "Solid configuration",
      "Strong process support",
      "CRM drives process adherence"
    ]
  },
  {
    "id": 6004,
    "pillar": 6,
    "pillar_name": "Sales Operations & Infrastructure",
    "grip": "R",
    "qid": "SE-6004",
    "type": "scale",
    "title": "Sales tech stack (CRM, engagement, intelligence) is integrated and adopted.",
    "sub": "Does your infrastructure ENABLE scale or CREATE friction?",
    "options": [
      "No stack",
      "Basic tools, poor adoption",
      "Solid stack",
      "Strong integrated stack",
      "Fully adopted, data-driven"
    ]
  },
  {
    "id": 6005,
    "pillar": 6,
    "pillar_name": "Sales Operations & Infrastructure",
    "grip": "I",
    "qid": "SE-6005",
    "type": "scale",
    "title": "CRM data entry compliance --- what percentage of deals have all key fields populated?",
    "sub": "Does your infrastructure ENABLE scale or CREATE friction?",
    "options": [
      "\\<30%",
      "30-50%",
      "50-70%",
      "70-90%",
      "90%+"
    ],
    "has_na": true
  },
  {
    "id": 6006,
    "pillar": 6,
    "pillar_name": "Sales Operations & Infrastructure",
    "grip": "I",
    "qid": "SE-6006",
    "type": "scale",
    "title": "How often are territories and quotas reviewed and adjusted?",
    "sub": "Does your infrastructure ENABLE scale or CREATE friction?",
    "options": [
      "Never",
      "Annually",
      "Semi-annually",
      "Quarterly",
      "Dynamic / continuous"
    ],
    "has_na": true
  },
  {
    "id": 6007,
    "pillar": 6,
    "pillar_name": "Sales Operations & Infrastructure",
    "grip": "I",
    "qid": "SE-6007",
    "type": "scale",
    "title": "Sales ops provides actionable insights (not just reports) to leadership.",
    "sub": "Does your infrastructure ENABLE scale or CREATE friction?",
    "options": [
      "No insights",
      "Basic reporting",
      "Some analysis",
      "Strong insights",
      "Predictive analytics drive decisions"
    ]
  },
  {
    "id": 6008,
    "pillar": 6,
    "pillar_name": "Sales Operations & Infrastructure",
    "grip": "P",
    "qid": "SE-6008",
    "type": "text",
    "title": "What is your average annual revenue per AE? (in EUR) --- For founder-only: What is your total annual revenue?",
    "sub": "Does your infrastructure ENABLE scale or CREATE friction?"
  },
  {
    "id": 6009,
    "pillar": 6,
    "pillar_name": "Sales Operations & Infrastructure",
    "grip": "P",
    "qid": "SE-6009",
    "type": "text",
    "title": "What is your sales efficiency ratio? (new ARR / total sales cost, e.g. 1.2)",
    "sub": "Does your infrastructure ENABLE scale or CREATE friction?"
  },
  {
    "id": 6010,
    "pillar": 6,
    "pillar_name": "Sales Operations & Infrastructure",
    "grip": "P",
    "qid": "SE-6010",
    "type": "scale",
    "title": "Leadership trusts pipeline and forecast data for board reporting.",
    "sub": "Does your infrastructure ENABLE scale or CREATE friction?",
    "options": [
      "No trust",
      "Low trust",
      "Moderate trust",
      "High trust",
      "Full confidence"
    ]
  }
];

