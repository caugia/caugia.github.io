// PR Deep Dive Questions — 60 questions, 6 engines
// Auto-generated from PR v1.1 spec
var QUESTIONS = [
  {
    "id": 1001,
    "pillar": 1,
    "pillar_name": "Product-Market Fit & Validation",
    "grip": "G",
    "qid": "PR-1001",
    "type": "scale",
    "title": "We have validated product-market fit through systematic evidence --- not just revenue growth or founder conviction.",
    "sub": "Have you FOUND product-market fit or just assumed it?",
    "options": [
      "No validation",
      "Anecdotal evidence",
      "Some data points",
      "Strong multi-signal validation",
      "Continuously validated with cohort data and retention metrics"
    ]
  },
  {
    "id": 1002,
    "pillar": 1,
    "pillar_name": "Product-Market Fit & Validation",
    "grip": "G",
    "qid": "PR-1002",
    "type": "scale",
    "title": "We can clearly articulate the core problem we solve and the specific customer pain points that drive purchase decisions.",
    "sub": "Have you FOUND product-market fit or just assumed it?",
    "options": [
      "Unclear problem",
      "Vague understanding",
      "Basic articulation",
      "Strong data-backed understanding",
      "Quantified pain points validated by customer research"
    ]
  },
  {
    "id": 1003,
    "pillar": 1,
    "pillar_name": "Product-Market Fit & Validation",
    "grip": "R",
    "qid": "PR-1003",
    "type": "text",
    "title": "What percentage of customers actively use the core value feature at least weekly?",
    "sub": "Have you FOUND product-market fit or just assumed it?"
  },
  {
    "id": 1004,
    "pillar": 1,
    "pillar_name": "Product-Market Fit & Validation",
    "grip": "R",
    "qid": "PR-1004",
    "type": "text",
    "title": "Sean Ellis PMF score: what % of users would be \\'very disappointed\\' if the product disappeared?",
    "sub": "Have you FOUND product-market fit or just assumed it?"
  },
  {
    "id": 1005,
    "pillar": 1,
    "pillar_name": "Product-Market Fit & Validation",
    "grip": "I",
    "qid": "PR-1005",
    "type": "scale",
    "title": "We systematically track and measure PMF signals (retention cohorts, NPS by segment, usage depth, expansion triggers).",
    "sub": "Have you FOUND product-market fit or just assumed it?",
    "options": [
      "No tracking",
      "Basic metrics",
      "Some cohort analysis",
      "Strong multi-signal tracking",
      "Real-time PMF dashboard with automated alerting"
    ]
  },
  {
    "id": 1006,
    "pillar": 1,
    "pillar_name": "Product-Market Fit & Validation",
    "grip": "I",
    "qid": "PR-1006",
    "type": "scale",
    "title": "Product development priorities are driven by validated customer needs rather than internal assumptions or competitor copying.",
    "sub": "Have you FOUND product-market fit or just assumed it?",
    "options": [
      "Internal assumptions",
      "Mostly reactive",
      "Mix of data and intuition",
      "Strongly customer-driven",
      "Systematic discovery with validation gates"
    ]
  },
  {
    "id": 1007,
    "pillar": 1,
    "pillar_name": "Product-Market Fit & Validation",
    "grip": "I",
    "qid": "PR-1007",
    "type": "scale",
    "title": "We have a defined process for identifying when PMF is weakening in existing segments or emerging in new ones.",
    "sub": "Have you FOUND product-market fit or just assumed it?",
    "options": [
      "No process",
      "When churn spikes",
      "Basic monitoring",
      "Structured PMF health checks",
      "Continuous PMF monitoring with segment-level alerting"
    ]
  },
  {
    "id": 1008,
    "pillar": 1,
    "pillar_name": "Product-Market Fit & Validation",
    "grip": "P",
    "qid": "PR-1008",
    "type": "text",
    "title": "Month-3 retention rate for new customers? (% still active after 90 days)",
    "sub": "Have you FOUND product-market fit or just assumed it?"
  },
  {
    "id": 1009,
    "pillar": 1,
    "pillar_name": "Product-Market Fit & Validation",
    "grip": "P",
    "qid": "PR-1009",
    "type": "scale",
    "title": "Our product clearly wins in its core use case --- customers choose us because we are the best solution for their specific need.",
    "sub": "Have you FOUND product-market fit or just assumed it?",
    "options": [
      "No clear advantage",
      "Weak differentiation",
      "Some advantage",
      "Clear advantage in core use case",
      "Dominant in core use case --- recognized best-in-class"
    ]
  },
  {
    "id": 1010,
    "pillar": 1,
    "pillar_name": "Product-Market Fit & Validation",
    "grip": "P",
    "qid": "PR-1010",
    "type": "text",
    "title": "Organic/referral acquisition as % of total new customers? (proxy for product satisfaction driving growth)",
    "sub": "Have you FOUND product-market fit or just assumed it?"
  },
  {
    "id": 2001,
    "pillar": 2,
    "pillar_name": "User Experience & Adoption",
    "grip": "G",
    "qid": "PR-2001",
    "type": "scale",
    "title": "Our product delivers clear time-to-value --- new users can experience the core benefit within their first session.",
    "sub": "Do users ADOPT your product or just sign up?",
    "options": [
      "Long time-to-value",
      "Days to value",
      "Hours to value",
      "Minutes to value",
      "Instant value --- aha moment in first interaction"
    ]
  },
  {
    "id": 2002,
    "pillar": 2,
    "pillar_name": "User Experience & Adoption",
    "grip": "G",
    "qid": "PR-2002",
    "type": "scale",
    "title": "Our onboarding flow is designed to guide users to their first meaningful outcome, not just feature exposure.",
    "sub": "Do users ADOPT your product or just sign up?",
    "options": [
      "No onboarding",
      "Feature tour only",
      "Basic guided setup",
      "Outcome-oriented onboarding",
      "Personalized onboarding with measured activation milestones"
    ]
  },
  {
    "id": 2003,
    "pillar": 2,
    "pillar_name": "User Experience & Adoption",
    "grip": "R",
    "qid": "PR-2003",
    "type": "text",
    "title": "Activation rate: % of new signups/users who complete the key activation milestone?",
    "sub": "Do users ADOPT your product or just sign up?"
  },
  {
    "id": 2004,
    "pillar": 2,
    "pillar_name": "User Experience & Adoption",
    "grip": "R",
    "qid": "PR-2004",
    "type": "text",
    "title": "Average time from signup to first value event? (hours)",
    "sub": "Do users ADOPT your product or just sign up?"
  },
  {
    "id": 2005,
    "pillar": 2,
    "pillar_name": "User Experience & Adoption",
    "grip": "I",
    "qid": "PR-2005",
    "type": "scale",
    "title": "We systematically identify and remove friction points in the user journey using data (funnel analysis, session recordings, feedback).",
    "sub": "Do users ADOPT your product or just sign up?",
    "options": [
      "No analysis",
      "Occasional review",
      "Basic funnel tracking",
      "Structured friction analysis",
      "Continuous UX optimization with A/B testing"
    ]
  },
  {
    "id": 2006,
    "pillar": 2,
    "pillar_name": "User Experience & Adoption",
    "grip": "I",
    "qid": "PR-2006",
    "type": "scale",
    "title": "Product usage analytics are accessible to GTM teams (Marketing, Sales, CS) to inform their strategies.",
    "sub": "Do users ADOPT your product or just sign up?",
    "options": [
      "No access",
      "Engineering-only",
      "Limited dashboards",
      "Broad self-serve access",
      "Embedded in GTM workflows with automated signals"
    ]
  },
  {
    "id": 2007,
    "pillar": 2,
    "pillar_name": "User Experience & Adoption",
    "grip": "I",
    "qid": "PR-2007",
    "type": "scale",
    "title": "We measure and optimize the complete user lifecycle --- not just acquisition and onboarding, but ongoing engagement and expansion triggers.",
    "sub": "Do users ADOPT your product or just sign up?",
    "options": [
      "No lifecycle view",
      "Acquisition focus only",
      "Some lifecycle metrics",
      "Strong lifecycle optimization",
      "Full lifecycle with automated intervention triggers"
    ]
  },
  {
    "id": 2008,
    "pillar": 2,
    "pillar_name": "User Experience & Adoption",
    "grip": "P",
    "qid": "PR-2008",
    "type": "text",
    "title": "Daily Active Users / Monthly Active Users ratio (DAU/MAU)?",
    "sub": "Do users ADOPT your product or just sign up?"
  },
  {
    "id": 2009,
    "pillar": 2,
    "pillar_name": "User Experience & Adoption",
    "grip": "P",
    "qid": "PR-2009",
    "type": "scale",
    "title": "Users describe our product as easy to use and intuitive --- UX is a strength, not a barrier.",
    "sub": "Do users ADOPT your product or just sign up?",
    "options": [
      "Major UX complaints",
      "Frequent friction",
      "Acceptable",
      "Praised for ease",
      "Industry-recognized UX excellence"
    ]
  },
  {
    "id": 2010,
    "pillar": 2,
    "pillar_name": "User Experience & Adoption",
    "grip": "P",
    "qid": "PR-2010",
    "type": "text",
    "title": "Support ticket rate per 100 active users per month? (lower = better product clarity)",
    "sub": "Do users ADOPT your product or just sign up?"
  },
  {
    "id": 3001,
    "pillar": 3,
    "pillar_name": "Product Development & Velocity",
    "grip": "G",
    "qid": "PR-3001",
    "type": "scale",
    "title": "We have a clear product strategy and roadmap that is aligned with GTM priorities and communicated across teams.",
    "sub": "Can you SHIP fast enough to stay relevant?",
    "options": [
      "No roadmap",
      "Engineering-only roadmap",
      "Basic roadmap shared",
      "Strong aligned roadmap",
      "Living roadmap with GTM input, feedback loops, and prioritization framework"
    ]
  },
  {
    "id": 3002,
    "pillar": 3,
    "pillar_name": "Product Development & Velocity",
    "grip": "G",
    "qid": "PR-3002",
    "type": "scale",
    "title": "Our product development process balances new features, improvements, and technical debt reduction.",
    "sub": "Can you SHIP fast enough to stay relevant?",
    "options": [
      "All new features",
      "Mostly new features",
      "Basic balance",
      "Intentional balance with allocated capacity",
      "Strategic balance with measured outcomes per category"
    ]
  },
  {
    "id": 3003,
    "pillar": 3,
    "pillar_name": "Product Development & Velocity",
    "grip": "R",
    "qid": "PR-3003",
    "type": "text",
    "title": "Average time from validated feature request to production release? (weeks)",
    "sub": "Can you SHIP fast enough to stay relevant?"
  },
  {
    "id": 3004,
    "pillar": 3,
    "pillar_name": "Product Development & Velocity",
    "grip": "R",
    "qid": "PR-3004",
    "type": "text",
    "title": "Release frequency: how many production releases per month?",
    "sub": "Can you SHIP fast enough to stay relevant?"
  },
  {
    "id": 3005,
    "pillar": 3,
    "pillar_name": "Product Development & Velocity",
    "grip": "I",
    "qid": "PR-3005",
    "type": "scale",
    "title": "Product prioritization uses a defined framework with customer impact, revenue potential, and effort as inputs.",
    "sub": "Can you SHIP fast enough to stay relevant?",
    "options": [
      "No framework",
      "Founder decides",
      "Basic scoring",
      "Strong framework with data inputs",
      "Systematic prioritization with validated customer impact"
    ]
  },
  {
    "id": 3006,
    "pillar": 3,
    "pillar_name": "Product Development & Velocity",
    "grip": "I",
    "qid": "PR-3006",
    "type": "scale",
    "title": "GTM teams (Sales, CS, Marketing) have a structured input channel for product feedback that is triaged and responded to.",
    "sub": "Can you SHIP fast enough to stay relevant?",
    "options": [
      "No channel",
      "Ad-hoc escalation",
      "Basic feedback collection",
      "Structured input with triage",
      "Integrated feedback loop with visibility and accountability"
    ]
  },
  {
    "id": 3007,
    "pillar": 3,
    "pillar_name": "Product Development & Velocity",
    "grip": "I",
    "qid": "PR-3007",
    "type": "scale",
    "title": "We measure the impact of shipped features on key business metrics (adoption, retention, revenue) post-launch.",
    "sub": "Can you SHIP fast enough to stay relevant?",
    "options": [
      "Never measured",
      "Rarely",
      "Sometimes",
      "Usually",
      "Always --- every feature has success criteria and post-launch review"
    ]
  },
  {
    "id": 3008,
    "pillar": 3,
    "pillar_name": "Product Development & Velocity",
    "grip": "P",
    "qid": "PR-3008",
    "type": "text",
    "title": "Feature adoption rate: % of target users who adopt a new feature within 30 days of launch?",
    "sub": "Can you SHIP fast enough to stay relevant?"
  },
  {
    "id": 3009,
    "pillar": 3,
    "pillar_name": "Product Development & Velocity",
    "grip": "P",
    "qid": "PR-3009",
    "type": "scale",
    "title": "Sales team feels confident selling the current product --- the product delivers what we promise in sales conversations.",
    "sub": "Can you SHIP fast enough to stay relevant?",
    "options": [
      "Significant product gaps",
      "Frequent under-delivery",
      "Mostly delivers",
      "Consistently delivers",
      "Product exceeds expectations --- Sales is proud to sell it"
    ]
  },
  {
    "id": 3010,
    "pillar": 3,
    "pillar_name": "Product Development & Velocity",
    "grip": "P",
    "qid": "PR-3010",
    "type": "scale",
    "title": "Our development velocity is competitive --- we ship features and improvements faster than or at parity with key competitors.",
    "sub": "Can you SHIP fast enough to stay relevant?",
    "options": [
      "Significantly behind",
      "Behind",
      "At parity",
      "Faster",
      "Significantly faster --- velocity is a competitive advantage **Engine 4: Platform Reliability & Technical Readiness**"
    ]
  },
  {
    "id": 4001,
    "pillar": 4,
    "pillar_name": "Platform Reliability & Technical Readiness",
    "grip": "G",
    "qid": "PR-4001",
    "type": "scale",
    "title": "We have defined SLAs for uptime, performance, and data integrity that are monitored and reported.",
    "sub": "Is your platform RELIABLE enough to sell confidently?",
    "options": [
      "No SLAs",
      "Informal expectations",
      "Basic SLAs",
      "Strong published SLAs",
      "Comprehensive SLAs with customer-facing status page and credits"
    ]
  },
  {
    "id": 4002,
    "pillar": 4,
    "pillar_name": "Platform Reliability & Technical Readiness",
    "grip": "G",
    "qid": "PR-4002",
    "type": "scale",
    "title": "Our technical architecture can support 10x current load without fundamental redesign.",
    "sub": "Is your platform RELIABLE enough to sell confidently?",
    "options": [
      "Cannot scale",
      "Major redesign needed",
      "Some scaling possible",
      "Strong scalable architecture",
      "Proven at scale with headroom and auto-scaling"
    ]
  },
  {
    "id": 4003,
    "pillar": 4,
    "pillar_name": "Platform Reliability & Technical Readiness",
    "grip": "R",
    "qid": "PR-4003",
    "type": "text",
    "title": "Uptime percentage over the last 12 months?",
    "sub": "Is your platform RELIABLE enough to sell confidently?"
  },
  {
    "id": 4004,
    "pillar": 4,
    "pillar_name": "Platform Reliability & Technical Readiness",
    "grip": "R",
    "qid": "PR-4004",
    "type": "text",
    "title": "Average number of customer-impacting incidents per month?",
    "sub": "Is your platform RELIABLE enough to sell confidently?"
  },
  {
    "id": 4005,
    "pillar": 4,
    "pillar_name": "Platform Reliability & Technical Readiness",
    "grip": "I",
    "qid": "PR-4005",
    "type": "scale",
    "title": "We have automated monitoring, alerting, and incident response processes for production issues.",
    "sub": "Is your platform RELIABLE enough to sell confidently?",
    "options": [
      "No monitoring",
      "Basic manual checks",
      "Some automated monitoring",
      "Comprehensive monitoring with alerting",
      "Full observability with automated remediation and post-mortems"
    ]
  },
  {
    "id": 4006,
    "pillar": 4,
    "pillar_name": "Platform Reliability & Technical Readiness",
    "grip": "I",
    "qid": "PR-4006",
    "type": "scale",
    "title": "Security is treated as a first-class concern with regular audits, penetration testing, and compliance certifications.",
    "sub": "Is your platform RELIABLE enough to sell confidently?",
    "options": [
      "No security program",
      "Basic measures",
      "Some certifications",
      "Strong security program",
      "Comprehensive security with SOC2/ISO27001 and regular testing"
    ]
  },
  {
    "id": 4007,
    "pillar": 4,
    "pillar_name": "Platform Reliability & Technical Readiness",
    "grip": "I",
    "qid": "PR-4007",
    "type": "scale",
    "title": "Technical debt is tracked, prioritized, and addressed --- it does not silently accumulate and slow development.",
    "sub": "Is your platform RELIABLE enough to sell confidently?",
    "options": [
      "Ignored",
      "Acknowledged but not addressed",
      "Occasionally addressed",
      "Regularly prioritized",
      "Systematically managed with allocated capacity"
    ]
  },
  {
    "id": 4008,
    "pillar": 4,
    "pillar_name": "Platform Reliability & Technical Readiness",
    "grip": "P",
    "qid": "PR-4008",
    "type": "scale",
    "title": "Customers trust our platform --- reliability is a reason to choose us, not a concern.",
    "sub": "Is your platform RELIABLE enough to sell confidently?",
    "options": [
      "Frequent complaints",
      "Regular concern",
      "Acceptable",
      "Trusted",
      "Platform reliability is a competitive advantage"
    ]
  },
  {
    "id": 4009,
    "pillar": 4,
    "pillar_name": "Platform Reliability & Technical Readiness",
    "grip": "P",
    "qid": "PR-4009",
    "type": "text",
    "title": "Average page load time or API response time? (milliseconds, p95)",
    "sub": "Is your platform RELIABLE enough to sell confidently?"
  },
  {
    "id": 4010,
    "pillar": 4,
    "pillar_name": "Platform Reliability & Technical Readiness",
    "grip": "P",
    "qid": "PR-4010",
    "type": "scale",
    "title": "Platform performance has never been a reason for losing a deal or churning a customer in the last 12 months.",
    "sub": "Is your platform RELIABLE enough to sell confidently?",
    "options": [
      "Frequently",
      "Several times",
      "Once or twice",
      "Never for deals, rarely for churn",
      "Never --- performance is a non-issue **Engine 5: Integration & Ecosystem Readiness**"
    ]
  },
  {
    "id": 5001,
    "pillar": 5,
    "pillar_name": "Integration & Ecosystem Readiness",
    "grip": "G",
    "qid": "PR-5001",
    "type": "scale",
    "title": "Our product integrates with the key tools our customers already use in their workflow.",
    "sub": "Does your product CONNECT to the customer's ecosystem?",
    "options": [
      "No integrations",
      "Few basic integrations",
      "Core integrations covered",
      "Strong integration ecosystem",
      "Comprehensive ecosystem --- integration is a selling point"
    ]
  },
  {
    "id": 5002,
    "pillar": 5,
    "pillar_name": "Integration & Ecosystem Readiness",
    "grip": "G",
    "qid": "PR-5002",
    "type": "scale",
    "title": "We have a documented integration strategy --- we know which integrations to build, in what order, and why.",
    "sub": "Does your product CONNECT to the customer's ecosystem?",
    "options": [
      "No strategy",
      "Reactive to requests",
      "Basic prioritization",
      "Strong strategic roadmap",
      "Data-driven integration strategy based on customer stack analysis"
    ]
  },
  {
    "id": 5003,
    "pillar": 5,
    "pillar_name": "Integration & Ecosystem Readiness",
    "grip": "R",
    "qid": "PR-5003",
    "type": "text",
    "title": "Number of production integrations available?",
    "sub": "Does your product CONNECT to the customer's ecosystem?"
  },
  {
    "id": 5004,
    "pillar": 5,
    "pillar_name": "Integration & Ecosystem Readiness",
    "grip": "R",
    "qid": "PR-5004",
    "type": "scale",
    "title": "Our API is well-documented, developer-friendly, and enables customers to build custom integrations.",
    "sub": "Does your product CONNECT to the customer's ecosystem?",
    "options": [
      "No API",
      "Basic undocumented API",
      "Documented API",
      "Strong developer experience",
      "Best-in-class API with SDKs, webhooks, and developer community"
    ]
  },
  {
    "id": 5005,
    "pillar": 5,
    "pillar_name": "Integration & Ecosystem Readiness",
    "grip": "I",
    "qid": "PR-5005",
    "type": "scale",
    "title": "Integration health is monitored --- we know when integrations break and proactively fix them.",
    "sub": "Does your product CONNECT to the customer's ecosystem?",
    "options": [
      "No monitoring",
      "Customer reports issues",
      "Basic error tracking",
      "Proactive monitoring",
      "Real-time health dashboard with automated alerting and failover"
    ]
  },
  {
    "id": 5006,
    "pillar": 5,
    "pillar_name": "Integration & Ecosystem Readiness",
    "grip": "I",
    "qid": "PR-5006",
    "type": "scale",
    "title": "We track which integrations drive adoption, retention, and expansion to inform ecosystem strategy.",
    "sub": "Does your product CONNECT to the customer's ecosystem?",
    "options": [
      "No tracking",
      "Anecdotal",
      "Basic usage data",
      "Strong integration analytics",
      "Quantified integration impact on business metrics"
    ]
  },
  {
    "id": 5007,
    "pillar": 5,
    "pillar_name": "Integration & Ecosystem Readiness",
    "grip": "I",
    "qid": "PR-5007",
    "type": "scale",
    "title": "Partner and marketplace integrations are supported with documentation, co-marketing, and technical enablement.",
    "sub": "Does your product CONNECT to the customer's ecosystem?",
    "options": [
      "No partner support",
      "Minimal",
      "Basic documentation",
      "Strong partner program",
      "Comprehensive ecosystem program with marketplace and co-development"
    ]
  },
  {
    "id": 5008,
    "pillar": 5,
    "pillar_name": "Integration & Ecosystem Readiness",
    "grip": "P",
    "qid": "PR-5008",
    "type": "text",
    "title": "What percentage of customers use at least one integration?",
    "sub": "Does your product CONNECT to the customer's ecosystem?"
  },
  {
    "id": 5009,
    "pillar": 5,
    "pillar_name": "Integration & Ecosystem Readiness",
    "grip": "P",
    "qid": "PR-5009",
    "type": "scale",
    "title": "Lack of integrations is rarely cited as a reason for not buying or for churning.",
    "sub": "Does your product CONNECT to the customer's ecosystem?",
    "options": [
      "Frequently cited",
      "Often cited",
      "Sometimes",
      "Rarely",
      "Almost never --- ecosystem meets customer needs"
    ]
  },
  {
    "id": 5010,
    "pillar": 5,
    "pillar_name": "Integration & Ecosystem Readiness",
    "grip": "P",
    "qid": "PR-5010",
    "type": "text",
    "title": "Integration-related support tickets as % of total support volume?",
    "sub": "Does your product CONNECT to the customer's ecosystem?"
  },
  {
    "id": 6001,
    "pillar": 6,
    "pillar_name": "Product Analytics & Intelligence",
    "grip": "G",
    "qid": "PR-6001",
    "type": "scale",
    "title": "We have a defined product analytics strategy --- we know what to measure, why, and how it connects to business outcomes.",
    "sub": "Do you KNOW how your product is actually used?",
    "options": [
      "No strategy",
      "Ad-hoc tracking",
      "Basic event tracking",
      "Strong analytics strategy",
      "Comprehensive measurement framework tied to business metrics"
    ]
  },
  {
    "id": 6002,
    "pillar": 6,
    "pillar_name": "Product Analytics & Intelligence",
    "grip": "G",
    "qid": "PR-6002",
    "type": "scale",
    "title": "Product usage data is reliable, complete, and trusted by all teams as a basis for decisions.",
    "sub": "Do you KNOW how your product is actually used?",
    "options": [
      "Unreliable",
      "Gaps and inconsistencies",
      "Mostly reliable",
      "Strong and trusted",
      "Single source of truth with governance and quality monitoring"
    ]
  },
  {
    "id": 6003,
    "pillar": 6,
    "pillar_name": "Product Analytics & Intelligence",
    "grip": "R",
    "qid": "PR-6003",
    "type": "text",
    "title": "How many product events are tracked in your analytics platform?",
    "sub": "Do you KNOW how your product is actually used?"
  },
  {
    "id": 6004,
    "pillar": 6,
    "pillar_name": "Product Analytics & Intelligence",
    "grip": "R",
    "qid": "PR-6004",
    "type": "scale",
    "title": "We have the right analytics tools (product analytics, session replay, experimentation) for our stage.",
    "sub": "Do you KNOW how your product is actually used?",
    "options": [
      "No tools",
      "Basic free tools",
      "Core paid tool",
      "Strong tool stack",
      "Advanced analytics platform with experimentation capability"
    ]
  },
  {
    "id": 6005,
    "pillar": 6,
    "pillar_name": "Product Analytics & Intelligence",
    "grip": "I",
    "qid": "PR-6005",
    "type": "scale",
    "title": "Product decisions are backed by quantitative data --- we A/B test hypotheses rather than shipping based on opinions.",
    "sub": "Do you KNOW how your product is actually used?",
    "options": [
      "Opinion-driven",
      "Mostly opinions",
      "Some data input",
      "Data-driven with testing",
      "Experimentation culture with statistical rigor"
    ]
  },
  {
    "id": 6006,
    "pillar": 6,
    "pillar_name": "Product Analytics & Intelligence",
    "grip": "I",
    "qid": "PR-6006",
    "type": "scale",
    "title": "Product analytics insights are shared with GTM teams to inform messaging, targeting, and customer success strategies.",
    "sub": "Do you KNOW how your product is actually used?",
    "options": [
      "Never shared",
      "Rarely",
      "Occasionally",
      "Regularly",
      "Embedded in GTM workflows with automated triggers"
    ]
  },
  {
    "id": 6007,
    "pillar": 6,
    "pillar_name": "Product Analytics & Intelligence",
    "grip": "I",
    "qid": "PR-6007",
    "type": "scale",
    "title": "We use product data to identify at-risk customers, expansion opportunities, and ideal customer profiles.",
    "sub": "Do you KNOW how your product is actually used?",
    "options": [
      "No usage of data for GTM",
      "Basic awareness",
      "Some signals used",
      "Strong data-to-GTM pipeline",
      "Automated product-qualified signals driving GTM actions"
    ]
  },
  {
    "id": 6008,
    "pillar": 6,
    "pillar_name": "Product Analytics & Intelligence",
    "grip": "P",
    "qid": "PR-6008",
    "type": "scale",
    "title": "Our product analytics give us leading indicators that predict business outcomes before they appear in revenue data.",
    "sub": "Do you KNOW how your product is actually used?",
    "options": [
      "Lagging only",
      "Mostly lagging",
      "Some leading",
      "Strong leading indicators",
      "Predictive analytics driving proactive business decisions"
    ]
  },
  {
    "id": 6009,
    "pillar": 6,
    "pillar_name": "Product Analytics & Intelligence",
    "grip": "P",
    "qid": "PR-6009",
    "type": "text",
    "title": "How many product-qualified signals (PQLs, expansion triggers, churn signals) are automated and routed to GTM teams?",
    "sub": "Do you KNOW how your product is actually used?"
  },
  {
    "id": 6010,
    "pillar": 6,
    "pillar_name": "Product Analytics & Intelligence",
    "grip": "P",
    "qid": "PR-6010",
    "type": "scale",
    "title": "Product analytics is a competitive advantage --- we understand user behavior better than competitors and act on it faster.",
    "sub": "Do you KNOW how your product is actually used?",
    "options": [
      "No advantage",
      "Behind peers",
      "At parity",
      "Ahead",
      "Industry-leading product intelligence **4. Numeric Input Calibration Tables**  -----------------------------------------------------------------------  19 numeric questions. Highest in suite tied with CSE. Mix of universal,  stage-adjusted, and inverted."
    ]
  }
];
