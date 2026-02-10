/* assets/grip-archetypes.js
   Canonical GRIP Archetypes (30)
   Safe: data-only + pure functions. No HTML. No CSS injection.
   Exports:
     window.GRIP = { archetypes, getArchetype, getByKey, count }

   v2.0 — All 30 archetypes now routed via getArchetype()
   Changes from v1:
     - Added dual-constraint detection (underfunded_compass, unproven_narrative, leaky_motion)
     - Added developing_engine systemic check (avg 60-75, spread <15, lowest >=55)
     - Expanded G-low family: narrative_drift, channel_scatter, alignment_theater, accidental_growth
     - Expanded R-low family: starved_winner
     - Expanded I-low family: misused_stack, inconsistent_playbooks
     - Expanded P-low family: churn_pressure, discount_dependency, measurement_mirage
*/
(function () {
  "use strict";

  // Helper: force 6 lines for Diamond exec summaries
  function L(a, b, c, d, e, f) {
    return [a, b, c, d, e, f].join("\n");
  }

  // =========================
  // 1) Registry (30)
  // =========================
  const archetypes = {
    // Systemic states
    stalled_engine: {
      title: "The Stalled Engine",
      mode: "mode-bad",
      short: "Systemic failure across all dimensions. The engine is not currently producing reliable revenue motion.",
      diamond_short: "Systemic failure across all dimensions. The engine is not currently producing reliable revenue motion. The system lacks a stable baseline to learn from.",
      exec: L(
        "Unstable motion across the full GTM system",
        "High effort low repeatability of outcomes",
        "Conflicting signals constant priority resets",
        "First move restore controllability and baseline",
        "Freeze scaling decisions while volatility persists",
        "Next isolate the minimum backbone to restart compounding"
      ),
      pdf: "This archetype represents a system-wide breakdown where no dimension is strong enough to stabilize the whole. Guidance does not produce usable direction, resources are misallocated or insufficient, implementation is inconsistent, and performance is volatile. Leaders experience constant firefighting and repeated priority resets. The primary risk is the absence of a controllable system rather than underperformance alone. The fastest path forward starts with a minimum operating baseline and a single coherent GTM focus. A measurable operating cadence and a narrow set of trusted leading indicators must come first. Until stability exists, optimization and growth initiatives compound noise instead of momentum."
    },

    fragile_foundation: {
      title: "The Fragile Foundation",
      mode: "mode-bad",
      short: "No dimension is strong enough to carry the others. The system operates, but it is structurally unstable.",
      diamond_short: "No dimension is strong enough to carry the others. The system operates, but it is structurally unstable. Small shocks create outsized disruption.",
      exec: L(
        "System runs but shape does not hold",
        "Small shocks trigger large execution swings",
        "No stabilizer anchors quality and decisions",
        "Pick one stabilizing spine and reinforce it",
        "Do not add parallel initiatives that raise fragility",
        "Next identify the fastest stabilizer to reduce volatility"
      ),
      pdf: "This archetype appears when overall maturity is low and there is no compensating strength to keep the engine steady. The organization may have pockets of competence, but none anchors execution or performance. Small shifts in market, team, or product create outsized disruption. You see inconsistent pipeline quality, uneven customer outcomes, and internal disagreement about what is working. The danger is treating this as a pure execution problem when the deeper issue is structural. The system needs one stabilizer that can carry the others for a cycle. Clearer guidance, right-sized resourcing, repeatable mechanics, or measurable performance control can each serve as that stabilizer."
    },

    precision_machine: {
      title: "The Precision Machine",
      mode: "mode-good",
      short: "Elite performance across all dimensions. The system compounds reliably with low internal drag.",
      diamond_short: "Elite performance across all dimensions. The system compounds reliably with low internal drag. The constraint is now selection, not capability.",
      exec: L(
        "Coherent system predictable behavior",
        "Strategy capacity execution performance reinforce",
        "Small improvements compound over time",
        "Primary constraint is bet selection",
        "Protect cadence definitions and operating discipline",
        "Next locate safe levers to accelerate compounding"
      ),
      pdf: "This archetype signals a high-coherence GTM system. Guidance is clear and actionable, resources match the motion, implementation is repeatable, and performance is predictable. Leaders face fewer surprises because the control plane is strong and definitions are stable. Pipeline creation is steady, conversion behavior is understood, and retention economics are monitored for decisions. The opportunity is compounding rather than reinvention. Incremental improvements can scale across segment mix, packaging, and conversion efficiency. Expansion into new channels or segments can be done without breaking mechanics. The main risk is drift if cadence, definitions, or segment discipline weakens."
    },

    balanced_engine: {
      title: "The Balanced Engine",
      mode: "mode-good",
      short: "Strong coherence with no major drag factor. The system is stable enough to scale predictably.",
      diamond_short: "Strong coherence with no major drag factor. The system is stable enough to scale predictably. Growth becomes a matter of disciplined compounding.",
      exec: L(
        "No dominant constraint in the system",
        "Stable baseline supports predictable scaling",
        "Outcomes driven by focus and consistency",
        "Clarify optimization target by segment and motion",
        "Avoid complexity that breaks current balance",
        "Next define guardrails for safe expansion paths"
      ),
      pdf: "This archetype represents a balanced GTM system where the four dimensions are healthy and aligned. There may be improvement opportunities, but no single weakness dominates outcomes. Execution feels steady rather than reactive, and signal quality supports planning. Forecasting is feasible because the system behaves consistently enough across cycles. The strategic question shifts from what is broken to what the system is optimized for. Growth becomes disciplined compounding with deliberate choices on segments and motions. New initiatives should be evaluated for their impact on system geometry, not only output metrics. The primary risk is unnecessary optionality that increases coordination tax and weakens coherence."
    },

    // Guidance low family
    activity_trap: {
      title: "The Activity Trap",
      mode: "mode-warn",
      short: "High execution volume with unclear direction. Teams move fast, but alignment is weak.",
      diamond_short: "High execution volume with unclear direction. Teams move fast, but alignment is weak. Output rises without compounding learning.",
      exec: L(
        "High activity low strategic specificity",
        "Wins inconsistent and hard to repeat",
        "Effort spread across too many priorities",
        "Tighten ICP segment and decision rules",
        "Do not add volume before alignment improves",
        "Next pinpoint guidance gaps blocking compounding"
      ),
      pdf: "This archetype occurs when implementation is high but guidance is the constraint. The organization ships and sells fast yet lacks clarity that makes effort compound. Activity metrics can look strong while win patterns remain inconsistent. Messaging, offers, and prioritization drift across teams and quarters. The system consumes energy without building a stronger position. The stabilizing move is sharper guidance through explicit ICP, disciplined segment choices, and clear value narrative. Decision rules should reduce optionality and enforce focus. When guidance improves, existing execution capacity often converts into rapid performance gains."
    },

    bloated_ship: {
      title: "The Bloated Ship",
      mode: "mode-warn",
      short: "Resources are heavy but strategy is unclear. Investment exists, but direction is diluted.",
      diamond_short: "Resources are heavy but strategy is unclear. Investment exists, but direction is diluted. The system pays for capacity it cannot steer.",
      exec: L(
        "Heavy spend without a steering design",
        "Capacity exists but efficiency stays low",
        "Multiple truths create fragmented priorities",
        "Narrow to one primary segment and motion",
        "Pause tool and team growth until direction is clear",
        "Next identify where resourcing creates drag not lift"
      ),
      pdf: "This archetype reflects a system where resourcing is not the limiting factor, but guidance is. Teams, budget, and tooling exist, yet clarity is insufficient to translate capacity into repeatable outcomes. Roadmaps expand, prioritization becomes ambiguous, and narratives compete internally. The board-level risk is burn without learning and widening coordination tax. The remedy is to narrow the system with a primary segment and dominant revenue path. Investment must align behind that path with explicit tradeoffs. Operating definitions should be enforced across functions to reduce drift. Once direction is sharp, existing capacity typically produces a step change in efficiency."
    },

    guesswork_strategy: {
      title: "The Guesswork Strategy",
      mode: "mode-bad",
      short: "Direction is unclear and performance proof is weak. Decisions rely on anecdotes rather than validated signal.",
      diamond_short: "Direction is unclear and performance proof is weak. Decisions rely on anecdotes rather than validated signal. The system cannot tell signal from noise.",
      exec: L(
        "Strategy moving without validated proof",
        "Weak learning cadence and slow signal formation",
        "Opinion debates replace evidence based decisions",
        "Rebuild hypotheses tests and measurement spine",
        "Delay major repositioning until proof is defensible",
        "Next define minimum instrumentation for decision quality"
      ),
      pdf: "This archetype occurs when guidance is low and performance signal is also weak. The organization lacks a validated story about what drives outcomes, so strategy becomes a sequence of assumptions. Execution continues, but the system cannot distinguish signal from noise. Repositioning and priority shifts happen faster than learning can accumulate. Commercial narratives become inconsistent across teams and channels. The stabilizing move is a measurement spine that supports guidance. Define the few decisions that matter most, create explicit hypotheses, and instrument fast feedback loops. Once evidence becomes trustworthy, strategy can converge and execution starts compounding."
    },

    direction_gap: {
      title: "The Direction Gap",
      mode: "mode-warn",
      short: "Execution capability exists, but the strategic compass is weak. Teams are misaligned on what matters most.",
      diamond_short: "Execution capability exists, but the strategic compass is weak. Teams are misaligned on what matters most. Conversion becomes noisy and hard to forecast.",
      exec: L(
        "Execution capability without shared compass",
        "Messaging and qualification drift across functions",
        "Noisy conversion and volatile forecasting",
        "Align on segmentation positioning and definitions",
        "Avoid new initiatives that increase optionality",
        "Next locate misalignment points leaking revenue confidence"
      ),
      pdf: "This archetype reflects a system where teams can execute but are not executing the same plan. Guidance does not translate into a shared operating model across marketing, sales, and customer success. The market receives inconsistent signals as messaging and qualification drift. Performance becomes noisy even when effort stays high. Forecasting suffers because behavior changes by team and cycle. The fix is system design with explicit segmentation and a unified positioning spine. Shared definitions and decision rules must constrain day-to-day execution. A cadence that surfaces divergence early prevents drift from compounding."
    },

    narrative_drift: {
      title: "The Narrative Drift",
      mode: "mode-warn",
      short: "Teams execute, but messaging shifts across channels. The market receives an inconsistent story.",
      diamond_short: "Teams execute, but messaging shifts across channels. The market receives an inconsistent story. Buyers do not get one stable reason to choose you.",
      exec: L(
        "Active execution inconsistent external story",
        "Functions sell different value frames",
        "Trust and conversion weaken quietly",
        "Install one positioning spine and enforce enablement",
        "Stop multiplying offers before story stabilizes",
        "Next map divergence to funnel leakage locations"
      ),
      pdf: "Narrative Drift appears when execution is active but the external story lacks coherence. Each function communicates a different value frame, creating confusion in the market. Over time, the company accumulates multiple messages, each partially true, none dominant. Buyers struggle to anchor a stable reason to choose you. The result is lower trust, longer cycles, and weaker referrals. The solution is a single positioning spine enforced through enablement, content, and sales motions. Messaging governance and repeated training reduce drift across channels. Once the story stabilizes, conversion efficiency and sales confidence typically improve."
    },

    channel_scatter: {
      title: "The Channel Scatter",
      mode: "mode-warn",
      short: "Acquisition runs across too many channels without a dominant engine. Learning is diluted.",
      diamond_short: "Acquisition runs across too many channels without a dominant engine. Learning is diluted. Depth never forms, so efficiency stays flat.",
      exec: L(
        "Too many active channels no primary engine",
        "Diluted learning shallow repeatability",
        "Attribution noise weak CAC clarity",
        "Choose the primary channel for the motion",
        "Do not add channels while signal remains weak",
        "Next identify channel pattern that compounds fastest"
      ),
      pdf: "Channel Scatter appears when demand generation is spread across multiple channels without a clear primary engine. Many tests run, but depth never forms in any one channel. The system cannot build repeatable offers, creative, and audiences with confidence. Attribution becomes noisy and decisions turn slower. Efficiency stays flat because learning is diluted across too many experiments. The fix is to select a primary channel strategy aligned to the motion. Build density through consistent offers, iteration loops, and clear success metrics. Once a primary engine is stable, secondary channels can be added with discipline."
    },

    alignment_theater: {
      title: "The Alignment Theater",
      mode: "mode-warn",
      short: "The organization appears aligned in meetings, but execution decisions diverge across teams.",
      diamond_short: "The organization appears aligned in meetings, but execution decisions diverge across teams. Drift accumulates quietly each cycle.",
      exec: L(
        "Alignment in meetings not in behavior",
        "Teams interpret priorities differently",
        "Decisions revisited cycle after cycle",
        "Convert alignment into ownership definitions rules",
        "Avoid big plans without enforcement cadence",
        "Next show where divergence starts and propagates"
      ),
      pdf: "Alignment Theater occurs when leadership alignment is performative rather than operational. Strategy documents exist, but day-to-day decisions are not constrained by them. Teams interpret priorities differently, leading to inconsistent execution and repeated debates. Drift accumulates quietly because it is not measured at the point of divergence. The solution is to translate alignment into mechanics that shape behavior. Ownership, decision rules, and shared definitions must be explicit. A cadence that reviews outcomes against decisions exposes divergence early. Over time, the system becomes faster because fewer decisions are reopened."
    },

    // Resources low family
    visionary_void: {
      title: "The Visionary Void",
      mode: "mode-warn",
      short: "Strong strategy, weak resourcing. The plan is coherent, but capacity cannot support it.",
      diamond_short: "Strong strategy, weak resourcing. The plan is coherent, but capacity cannot support it. The roadmap cannot land at the required density.",
      exec: L(
        "Clear direction insufficient capacity to execute",
        "Backlogs grow throughput remains constrained",
        "Hero effort rises but progress stalls",
        "Do capacity planning and explicit tradeoffs",
        "Stop expanding scope while capacity is thin",
        "Next quantify smallest resourcing change to unlock momentum"
      ),
      pdf: "This archetype appears when guidance is strong but resources are the constraint. The system lacks bandwidth, skills, or budget to execute at the required density. Backlogs accumulate and execution stalls despite coherent intent. Teams compensate with hero effort, which increases fatigue and reduces quality. The remedy is honest capacity planning and explicit tradeoffs. Narrow scope, increase capacity, or redesign the motion to match what is available. Without tradeoffs, coordination tax grows and morale erodes. When capacity matches the plan, progress becomes steady and repeatable."
    },

    burnout_engine: {
      title: "The Burnout Engine",
      mode: "mode-bad",
      short: "High execution on low resources. The team is over-performing but structurally fragile.",
      diamond_short: "High execution on low resources. The team is over-performing but structurally fragile. Resilience erodes each quarter the strain continues.",
      exec: L(
        "High execution sustained by strain",
        "Quality and handoffs degrade under load",
        "Knowledge concentrates increasing fragility",
        "Reduce load or add capacity deliberately",
        "Avoid initiatives that raise coordination tax",
        "Next trace strain into churn pipeline misses rework"
      ),
      pdf: "This archetype is defined by high implementation on low resources. Short-term results can look impressive, but the system becomes structurally fragile. Quality declines, handoffs break, and onboarding suffers under sustained load. Knowledge concentrates in a few people, increasing concentration risk. The corrective move is to reduce strain by increasing capacity or simplifying the motion. Load should be made explicit through scope cuts and sequencing. If unresolved, the pattern often transitions into performance decline, missed pipeline, and higher churn. Stabilization restores resilience and prevents heroics from becoming the operating model."
    },

    tooling_debt: {
      title: "The Tooling Debt",
      mode: "mode-bad",
      short: "Resourcing constraints create a data blackout. The system cannot observe itself well enough to improve.",
      diamond_short: "Resourcing constraints create a data blackout. The system cannot observe itself well enough to improve. Decisions become slow because proof is missing.",
      exec: L(
        "Low visibility weak steering capability",
        "Measurement gaps slow learning and decisions",
        "Teams optimize effort without conversion truth",
        "Install minimum viable instrumentation and definitions",
        "Do not buy tools without operating discipline",
        "Next define the control plane for predictable steering"
      ),
      pdf: "This archetype shows up when resources are low and performance visibility is weak. The company lacks instrumentation, RevOps capacity, or analytical bandwidth to measure what is working. Decisions slow down because proof is missing and reports conflict. Teams optimize effort without knowing what actually converts. The remedy is minimum viable measurement with clean definitions across key stages. Implement consistent capture, enforce hygiene, and connect metrics to decisions. Create a cadence where data is used the same way every cycle. Once the control plane exists, the system can steer and learning accelerates."
    },

    capacity_crunch: {
      title: "The Capacity Crunch",
      mode: "mode-warn",
      short: "Ambition exceeds bandwidth. The system is undersized relative to its goals and motion.",
      diamond_short: "Ambition exceeds bandwidth. The system is undersized relative to its goals and motion. Velocity slows because density is impossible to sustain.",
      exec: L(
        "Ambition exceeds bandwidth and coverage",
        "Cycle times extend follow up quality drops",
        "Experimentation slows learning pace collapses",
        "Right size capacity or redesign the motion",
        "Do not frame this as a motivation issue",
        "Next reduce scope and density to restore speed"
      ),
      pdf: "This pattern emerges when the engine runs a motion that requires more density than the organization can support. Symptoms include long cycles, inconsistent follow-up, limited experimentation, and slow iteration. Teams feel busy yet progress stays constrained by bandwidth. The leverage comes from capacity realism and explicit design choices. Invest to match the motion or redesign the motion to match capacity. Narrow focus, tighten qualification, and reduce bespoke work that raises delivery tax. Simplify packaging and handoffs to reduce coordination load. Once scope matches capacity, velocity and learning rate recover quickly."
    },

    underpowered_motion: {
      title: "The Underpowered Motion",
      mode: "mode-warn",
      short: "The motion chosen requires more density than the organization can support. Velocity suffers.",
      diamond_short: "The motion chosen requires more density than the organization can support. Velocity suffers. The design is heavier than the current coverage model.",
      exec: L(
        "Motion design heavier than coverage model",
        "Deals onboarding require missing roles",
        "Pipeline may exist throughput breaks down",
        "Simplify motion or invest enabling capacity",
        "Do not copy enterprise motion without infrastructure",
        "Next choose the lightest motion that meets targets"
      ),
      pdf: "Underpowered Motion reflects a mismatch between the selected GTM motion and available resourcing. The company pursues complex deals and onboarding while lacking the supporting roles required. The system slows because operating design is heavier than current coverage. Teams compensate with workarounds that reduce consistency and scale. Either simplify the motion, narrow scope, or invest deliberately in enabling capacity. Role clarity and stage discipline reduce hidden load in the funnel. Packaging and qualification can be adjusted to reduce delivery and onboarding tax. When motion and capacity match, throughput and predictability improve without heroics."
    },

    // Implementation low family
    ivory_tower: {
      title: "The Ivory Tower",
      mode: "mode-bad",
      short: "Strategy is strong, but execution breaks down in reality. The system cannot translate intent into action.",
      diamond_short: "Strategy is strong, but execution breaks down in reality. The system cannot translate intent into action. Plans remain correct but non operational.",
      exec: L(
        "Coherent intent missing execution mechanics",
        "Handoffs adoption daily behavior break down",
        "Trust declines when plans do not land",
        "Build playbooks ownership and operating cadence",
        "Stop adding strategy layers before stabilization",
        "Next map where intent fails to become behavior"
      ),
      pdf: "This archetype appears when guidance is high but implementation is low. Initiatives look correct in decks but fail in handoffs, adoption, or daily execution. Teams lose trust because strategy does not translate into observable behavior. The system accumulates rework and exceptions instead of repeatable flow. The fix is to install execution mechanics that make the plan operable. Define stages, ownership, playbooks, and handoff contracts that teams can follow. Create an operating cadence that enforces consistency and reveals breakdowns early. Once mechanics exist, performance often improves without changing strategy."
    },

    heroic_system: {
      title: "The Heroic System",
      mode: "mode-warn",
      short: "Results happen despite process, not because of it. The system relies on individual heroes.",
      diamond_short: "Results happen despite process, not because of it. The system relies on individual heroes. Scale is limited by concentration risk.",
      exec: L(
        "Outcomes driven by heroes and workarounds",
        "System fragile hard to scale reliably",
        "Performance drops when key people slow",
        "Codify winning behaviors into playbooks and tooling",
        "Do not treat results as proof of health",
        "Next convert hero patterns into institutional mechanics"
      ),
      pdf: "This archetype occurs when performance is relatively strong while implementation is weak. Outcomes come from exceptional individuals and informal workarounds rather than repeatable process. The hidden risk is concentration, burnout, and unpredictable variance across the team. When key people slow down, performance drops quickly. The remedy is to capture what works and standardize it into shared mechanics. Qualification, discovery, demos, onboarding, and handoffs should be codified and trained. Tooling should reinforce behavior rather than compensate for missing structure. Once institutionalized, the system becomes scalable and less dependent on individual heroics."
    },

    process_void: {
      title: "The Process Void",
      mode: "mode-bad",
      short: "Low process and limited resources create high friction. Efficiency is structurally impossible.",
      diamond_short: "Low process and limited resources create high friction. Efficiency is structurally impossible. Manual effort cannot compensate for missing mechanics.",
      exec: L(
        "Backbone mechanics missing end to end",
        "Manual work creates delays and chaos",
        "Quality drifts without repeatable structure",
        "Install minimum viable stages handoffs definitions",
        "Do not add complexity before skeleton exists",
        "Next specify the smallest operating system for throughput"
      ),
      pdf: "This archetype reflects a system where implementation is the constraint and resources are limited. The organization lacks consistent mechanics from lead to close to renewal. Manual effort compensates, but efficiency remains structurally impossible. Work gets stuck at interfaces because responsibilities and definitions are unclear. The fix is a minimum viable operating system with stages, ownership, and clean handoffs. Reduce complexity and bespoke work until the skeleton is stable. Install a rhythm that forces consistency and exposes exceptions early. Once mechanics exist, the same team capacity produces meaningfully higher throughput."
    },

    broken_handoff: {
      title: "The Broken Handoff",
      mode: "mode-warn",
      short: "Friction in the motion causes leakage between silos. Leads, context, or deals drop across transitions.",
      diamond_short: "Friction in the motion causes leakage between silos. Leads, context, or deals drop across transitions. Value is lost at the seams, not inside one team.",
      exec: L(
        "Value leaks at team interfaces",
        "Handoffs fail without clear ownership",
        "Pipeline exists conversion breaks between stages",
        "Define handoff contracts and shared definitions",
        "Stop blaming one function for an interface issue",
        "Next locate seams where revenue and context fall out"
      ),
      pdf: "This archetype appears when cross-team transitions are weak. Marketing produces leads sales does not accept, sales closes deals CS cannot onboard cleanly, or renewals lack ownership. Leakage happens at seams rather than inside one function. The result is lower throughput and finger-pointing without systemic repair. The solution is interface design with explicit handoff contracts and mutual accountability. Shared definitions and stage entry criteria reduce ambiguity. A joint cadence should review interface metrics and exceptions. When seams are repaired, conversion improves without adding more volume."
    },

    inconsistent_playbooks: {
      title: "The Inconsistent Playbooks",
      mode: "mode-warn",
      short: "Execution varies by team and individual. The system cannot reproduce wins consistently.",
      diamond_short: "Execution varies by team and individual. The system cannot reproduce wins consistently. Forecasting suffers because behavior is not standardized.",
      exec: L(
        "Behavior varies by person team segment",
        "Wins occur but are not repeatable",
        "Learning slow because each cycle feels unique",
        "Codify stages decision rules and artifacts",
        "Do not scale headcount before standardization",
        "Next expose playbook gaps driving outcome variance"
      ),
      pdf: "Inconsistent Playbooks appears when teams lack shared mechanics for qualification, discovery, demos, onboarding, or expansion. Wins happen, but the system cannot reproduce them consistently across people and segments. Forecasting suffers because behavior and definitions are not standardized. Enablement becomes reactive and scattered. The fix is codification of stages, decision rules, and artifacts that shape execution. Adoption must be enforced through training and inspection in cadence. Tooling should support the playbook rather than create parallel workflows. Once standardized, outcomes become repeatable and learning compounds faster."
    },

    // Performance low family
    leaky_bucket: {
      title: "The Leaky Bucket",
      mode: "mode-bad",
      short: "High effort, low outcome. Value leaks through conversion or retention, preventing compounding growth.",
      diamond_short: "High effort, low outcome. Value leaks through conversion or retention, preventing compounding growth. More volume increases cost without fixing the leak.",
      exec: L(
        "High effort low outcome mismatch",
        "Leakage in conversion retention or deal mechanics",
        "System works harder to stay in place",
        "Diagnose exactly where value drops out",
        "Do not push volume before sealing leaks",
        "Next pinpoint leakage points and underlying mechanisms"
      ),
      pdf: "This archetype is strong implementation but weak performance, usually due to leakage in conversion, retention, or value capture. Activity increases cost without resolving the leak. Symptoms include drop-offs, poor qualification, discounting, churn, or weak expansion. The correct approach is forensic diagnosis of where value is lost and why. Stage-level decomposition should isolate the dominant leak rather than spread fixes everywhere. Once the leak is sealed, existing execution capacity produces outsized gains. Predictability improves because outcomes map to controllable levers again. Only then should scaling and new channels be reintroduced."
    },

    blind_optimist: {
      title: "The Blind Optimist",
      mode: "mode-warn",
      short: "The narrative is strong, but the numbers do not validate it. Confidence exceeds proof.",
      diamond_short: "The narrative is strong, but the numbers do not validate it. Confidence exceeds proof. The system needs faster reality checks to regain credibility.",
      exec: L(
        "Strong story weak confirming outcomes",
        "Internal confidence exceeds market proof",
        "Forecast drift driven by belief not evidence",
        "Tighten feedback loops and segment validation",
        "Do not scale narrative without earned conversion",
        "Next isolate failing assumptions and build evidence"
      ),
      pdf: "This archetype appears when guidance is strong but performance is weak. The company has a coherent story, yet outcomes do not confirm it. Teams can feel confident internally while the market disagrees. Forecasting drifts because proof is weaker than belief. The remedy is faster reality checks through instrumented funnel learning. Validate at segment level and separate leading indicators from hope. Win-loss patterns should be translated into specific message and offer changes. Once story aligns with observed reality, traction and credibility return."
    },

    roi_drag: {
      title: "The ROI Drag",
      mode: "mode-bad",
      short: "Investment is heavy but returns are low. The engine is inefficient and value capture is weak.",
      diamond_short: "Investment is heavy but returns are low. The engine is inefficient and value capture is weak. Burn increases without proportional learning or ARR.",
      exec: L(
        "High inputs low outputs",
        "Efficiency and unit economics under pressure",
        "Broad investment without conversion to outcomes",
        "Decompose by segment channel and stage",
        "Avoid blunt cuts without locating inefficiency layer",
        "Next restore efficiency by reallocating to converting mechanics"
      ),
      pdf: "This archetype occurs when resources are high but performance is low. It points to structural inefficiency across targeting, positioning, packaging, conversion, or operational drag. Burn rises without proportional learning or ARR. The solution is decomposition rather than generalized cost control. Segment economics, channel performance, and stage conversion must be inspected to find the inefficient layer. Discounting behavior and churn drivers often reveal weak value capture. Reallocate resources from low leverage activity to mechanics that convert. Once inefficiency is removed, the same spend produces clearer signal and better outcomes."
    },

    black_box: {
      title: "The Black Box",
      mode: "mode-mid",
      short: "The system runs, but visibility is weak. Predictability and steering are limited.",
      diamond_short: "The system runs, but visibility is weak. Predictability and steering are limited. Leaders cannot explain results with confidence.",
      exec: L(
        "Output exists unclear causal explanation",
        "Volatile forecasting due to weak signal",
        "Definitions drift attribution disputed",
        "Build clean control plane and instrumentation",
        "Do not optimize dashboards detached from decisions",
        "Next define metrics spine for predictable steering"
      ),
      pdf: "This archetype reflects insufficient performance visibility. Output exists, but leaders cannot explain why results happen. Forecasting is volatile, attribution is unclear, and definitions drift across teams. The risk is misallocation because the system cannot see which levers matter. Installing a control plane becomes the priority. Unify funnel definitions and instrument key stage transitions consistently. Connect reporting to the decisions it must support and remove vanity metrics. Establish a cadence that uses the same metrics each cycle. Once visibility improves, steering becomes faster and confidence returns."
    },

    discount_dependency: {
      title: "The Discount Dependency",
      mode: "mode-bad",
      short: "Deals close through discounting rather than conviction. Value capture is structurally weak.",
      diamond_short: "Deals close through discounting rather than conviction. Value capture is structurally weak. Margin becomes the silent casualty of growth.",
      exec: L(
        "Deals won by price reduction not conviction",
        "Margin compression weak forecast integrity",
        "Discounting masks positioning tension",
        "Fix segmentation value articulation packaging fit",
        "Do not solve only with approvals and policing",
        "Next locate willingness to pay gaps vs offer design"
      ),
      pdf: "Discount Dependency occurs when the system compensates for weak conviction by reducing price. Over time it becomes habitual and trains buyers to wait for concessions. Margin compresses and forecast quality weakens as price becomes the closing lever. The pattern often signals positioning tension or packaging mismatch by segment. The remedy is stronger value articulation and clearer segmentation with explicit willingness to pay. Packaging should align to outcomes and buyer economics. Deal review should focus on root causes rather than approvals alone. When conviction improves, discounting declines and value capture stabilizes."
    },

    churn_pressure: {
      title: "The Churn Pressure",
      mode: "mode-bad",
      short: "Retention instability limits growth. The engine replaces revenue instead of compounding it.",
      diamond_short: "Retention instability limits growth. The engine replaces revenue instead of compounding it. Expansion cannot outpace the base erosion.",
      exec: L(
        "Retention instability taxes growth",
        "Effort goes to replacement not compounding",
        "Churn often rooted in upstream fit and expectations",
        "Improve onboarding fit by segment and CS design",
        "Do not treat churn as a CS only issue",
        "Next trace churn drivers back to system decisions"
      ),
      pdf: "Churn Pressure appears when retention undermines growth economics. Acquisition requirements rise just to stay flat, increasing CAC pressure and reducing confidence. Expansion cannot outpace base erosion, so the system feels stuck. Churn is often created upstream through targeting, expectation setting, and packaging choices. Onboarding quality and time-to-value become decisive leverage points. Customer success capacity design must match segment needs and product complexity. The fix requires cross-functional ownership rather than CS isolation. When retention stabilizes, the engine starts compounding again and forecasting becomes more reliable."
    },

    measurement_mirage: {
      title: "The Measurement Mirage",
      mode: "mode-mid",
      short: "Metrics exist, but definitions and instrumentation are inconsistent. Signal quality is weaker than it appears.",
      diamond_short: "Metrics exist, but definitions and instrumentation are inconsistent. Signal quality is weaker than it appears. Decisions become confidently wrong.",
      exec: L(
        "Metrics present inconsistent definitions and capture",
        "Teams optimize numbers detached from outcomes",
        "Reports conflict with observed reality",
        "Unify definitions and instrument key stages cleanly",
        "Stop adding KPIs before trust is restored",
        "Next rebuild measurement backbone for decision quality"
      ),
      pdf: "Measurement Mirage occurs when dashboards exist but definitions, tracking, or attribution are inconsistent. The system appears data-rich, yet signal quality is weak. Teams optimize local metrics that do not map to outcomes, creating confidently wrong decisions. Leadership cannot reconcile reports with reality, slowing execution and increasing debate. The fix is to rebuild the measurement spine with unified definitions. Ensure clean capture at key stages and remove ambiguous fields that invite drift. Align reporting to the few decisions that matter each cycle. Once metrics are trustworthy, learning accelerates and alignment improves."
    },

    developing_engine: {
      title: "The Developing Engine",
      mode: "mode-mid",
      short: "The system shows potential, but coherence is still forming. Outcomes depend on local strengths rather than a unified engine.",
      diamond_short: "The system shows potential, but coherence is still forming. Outcomes depend on local strengths rather than a unified engine. Integration is the lever for compounding.",
      exec: L(
        "Local strengths without full system coherence",
        "Interfaces and cadence still forming",
        "Wins do not yet compound predictably",
        "Define primary path to revenue and standardize execution",
        "Avoid expanding scope before repeatability exists",
        "Next connect strengths into one operating model"
      ),
      pdf: "This archetype represents a system that is not broken, but not yet coherent. Some dimensions work while others lag, and interfaces between teams are underdeveloped. Outcomes depend on local strengths rather than a unified engine. The opportunity is integration that converts isolated wins into compounding learning. Clarify the primary GTM path and enforce shared definitions across functions. Standardize execution mechanics so behavior is consistent by segment and stage. Improve measurement so signal supports decisions and iteration. With coherence, performance becomes more predictable without needing a full rebuild."
    },

    collapsed_engine: {
      title: "The Collapsed Engine",
      mode: "mode-bad",
      short: "Across-dimension failure. The system is below functional threshold and cannot sustain revenue motion.",
      diamond_short: "Across-dimension failure. The system is below functional threshold and cannot sustain revenue motion. Immediate stabilization is required before any bets.",
      exec: L(
        "Below functional threshold across dimensions",
        "Sporadic motion no reliable baseline",
        "Learning impossible because baseline collapses",
        "Execute strict restart sequence and gating",
        "Pause growth bets until minimum stability exists",
        "Next define stabilization steps and non negotiables"
      ),
      pdf: "This archetype signals below-threshold operation where stability is absent. The system cannot sustain reliable pipeline creation, conversion, or retention. Leaders experience repeated collapses of cadence, definitions, and ownership. The priority is stabilization, not optimization. The path forward is sequencing with strict gates for what must be true before the next step. Restore minimum direction, then minimum resourcing, then minimum execution mechanics. Only then reintroduce performance targets the system can actually support. When the baseline holds, learning restarts and confidence returns."
    },

    even_drag: {
      title: "The Even Drag",
      mode: "mode-mid",
      short: "No single constraint dominates. Multiple small frictions compound into slow progress.",
      diamond_short: "No single constraint dominates. Multiple small frictions compound into slow progress. The system needs prioritization discipline to remove drag.",
      exec: L(
        "Distributed friction across many areas",
        "No single fix creates a step change",
        "Busy teams slow progress due to compounding drag",
        "Prioritize and sequence removals ruthlessly",
        "Avoid broad programs that add coordination tax",
        "Next identify few drag points that unlock compounding"
      ),
      pdf: "Even Drag appears when all dimensions are moderate but none are sharp enough to carry the system. Performance is not catastrophic, yet progress is slow and effort feels high. Friction is distributed, so teams debate where to start. The correct approach is not reinvention, but prioritization discipline. Identify which frictions create the largest compounding tax over time. Sequence removals so each fix makes the next one easier. Avoid launching broad transformation programs that increase coordination load. When drag is reduced in the right order, the system accelerates without major redesign."
    },

    underfunded_compass: {
      title: "The Underfunded Compass",
      mode: "mode-bad",
      short: "Guidance is weak and resources are thin. Teams cannot align or execute consistently.",
      diamond_short: "Guidance is weak and resources are thin. Teams cannot align or execute consistently. The system lacks both direction and capacity.",
      exec: L(
        "Weak direction and thin capacity together",
        "Tradeoffs implicit alignment breaks down",
        "Execution fragments results stay volatile",
        "Cut scope until ambition matches capacity",
        "Stop treating as a pure performance issue",
        "Next define scope cuts that restore control fastest"
      ),
      pdf: "This archetype combines low guidance and low resources, creating a system that cannot align or execute consistently. Tradeoffs remain implicit, so priorities fragment across teams. Execution becomes reactive and results stay volatile across cycles. The remedy starts with scope reduction until capacity matches ambition. Once scope is narrow enough, decision rules can be made explicit and enforced. A small set of priorities should be resourced to completion rather than spread thin. Measurement should focus on the few indicators that confirm control is returning. When direction and capacity stabilize, the system can start rebuilding predictability."
    },

    accidental_growth: {
      title: "The Accidental Growth",
      mode: "mode-warn",
      short: "Performance holds for now, but without guidance it is fragile and hard to repeat.",
      diamond_short: "Performance holds for now, but without guidance it is fragile and hard to repeat. The system is winning without knowing why.",
      exec: L(
        "Current performance without explicit guidance",
        "Win pattern unclear hard to repeat",
        "High drift risk with small market shifts",
        "Codify drivers into guidance and playbooks",
        "Do not assume performance will persist automatically",
        "Next isolate drivers and make them intentional"
      ),
      pdf: "Accidental Growth occurs when performance is acceptable despite weak guidance. The system is winning, but it cannot explain why with confidence. Repeatability is fragile and depends on circumstances rather than design. Small shifts in market or team can break the pattern quickly. The goal is to codify win drivers into explicit guidance and playbooks. Segment-level analysis should reveal what is actually converting and retaining. Once codified, alignment improves and execution becomes intentional. With clarity, the organization can scale without relying on luck."
    },

    starved_winner: {
      title: "The Starved Winner",
      mode: "mode-warn",
      short: "Performance is acceptable, but resource scarcity blocks repeatability and scale.",
      diamond_short: "Performance is acceptable, but resource scarcity blocks repeatability and scale. The system is constrained by coverage, not intent.",
      exec: L(
        "Outcomes exist but scaling is blocked",
        "Scarcity forces messy implicit tradeoffs",
        "Follow up quality and consistency become bottleneck",
        "Right size coverage or simplify the motion",
        "Do not raise targets without enabling capacity",
        "Next identify capacity adds with highest ROI"
      ),
      pdf: "Starved Winner appears when performance is okay but resourcing is too thin to sustain or scale. The system works, yet cannot run at the density required for growth. Scarcity creates implicit tradeoffs that stay messy and unowned. Follow-up and enablement quality become the hidden bottleneck. The fix is to size capacity to the motion or redesign the motion to fit capacity. Role coverage should match deal complexity and onboarding load. Simplifying handoffs can reduce coordination tax without hiring. With adequate capacity, repeatability improves and growth becomes less fragile."
    },

    misused_stack: {
      title: "The Misused Stack",
      mode: "mode-warn",
      short: "Resources exist, but implementation is weak. Tools and people are not converted into throughput.",
      diamond_short: "Resources exist, but implementation is weak. Tools and people are not converted into throughput. The system pays for capacity it does not activate.",
      exec: L(
        "Stack and roles present low throughput",
        "Tools under adopted processes inconsistent",
        "Work stuck due to missing interfaces playbooks",
        "Drive adoption ownership and stage based design",
        "Do not buy more tools before activation",
        "Next locate trapped capacity and release it"
      ),
      pdf: "Misused Stack reflects a system where resourcing is present but implementation mechanics are missing or inconsistent. The company pays for tools and roles, yet throughput stays limited. Adoption is uneven and workflows diverge by team. Work gets stuck at interfaces because playbooks and ownership are unclear. The remedy is operating design that turns capacity into consistent execution. Define stages, responsibilities, and handoff contracts that tools can support. Train and inspect adoption through cadence rather than hoping it spreads. Once activated, the existing stack typically produces a measurable lift without new spend."
    },

    leaky_motion: {
      title: "The Leaky Motion",
      mode: "mode-bad",
      short: "Implementation and performance both lag. Effort does not convert into outcomes reliably.",
      diamond_short: "Implementation and performance both lag. Effort does not convert into outcomes reliably. The motion itself is leaking at multiple stages.",
      exec: L(
        "Weak mechanics and weak outcomes together",
        "Activity exists conversion breaks across stages",
        "Process not trusted for predictable throughput",
        "Rebuild motion with strict stage discipline",
        "Do not scale acquisition while conversion is broken",
        "Next map conversion breaks and systemic causes"
      ),
      pdf: "Leaky Motion occurs when execution mechanics are weak and performance is also weak. Effort does not convert into outcomes, so teams push more activity and create more noise. Conversion breaks at multiple stages and ownership is unclear at the seams. The system cannot rely on process to produce predictable throughput. The corrective move is to rebuild the motion stage by stage with strict entry and exit criteria. Instrument each stage transition and enforce handoffs through cadence. Simplify the motion until it becomes controllable and repeatable. Once mechanics hold, performance can recover without disproportionate effort."
    },

    unproven_narrative: {
      title: "The Unproven Narrative",
      mode: "mode-warn",
      short: "Guidance is weak and performance is weak. The story cannot be defended with outcomes.",
      diamond_short: "Guidance is weak and performance is weak. The story cannot be defended with outcomes. Credibility erodes inside and outside the company.",
      exec: L(
        "Story lacks proof in outcomes",
        "Teams sell claims the market does not confirm",
        "Confidence erodes internally and externally",
        "Build segment proof and tighter feedback loops",
        "Do not change messaging broadly without evidence",
        "Next define defensible claims and what to prove"
      ),
      pdf: "Unproven Narrative reflects a system where guidance is not strong enough to align execution and performance does not provide proof. Teams are forced to sell a story the market does not consistently validate. Credibility erodes, increasing sales friction and internal debate. The solution is to rebuild the narrative on evidence rather than aspiration. Segment validation and win-loss patterns should determine what claims are defensible today. Funnel instrumentation must support faster learning and clearer decision points. Sequence narrative changes to match proof, not preference. When evidence and message align, confidence and conversion typically recover."
    }
  };

  // =========================
  // 2) Selection logic — v2: routes all 30 archetypes
  // =========================
  function getArchetype(g, r, i, p) {
    const scores = [
      { k: "g", v: g },
      { k: "r", v: r },
      { k: "i", v: i },
      { k: "p", v: p }
    ];

    scores.sort((a, b) => a.v - b.v);

    const avg = (g + r + i + p) / 4;
    const lowest = scores[0];
    const secondLowest = scores[1];
    const secondHighest = scores[2];
    const highest = scores[3];
    const spread = highest.v - lowest.v;

    // =========================
    // 1) Systemic extremes (checked first)
    // =========================
    if (avg < 30) return withKey("collapsed_engine");
    if (avg < 35) return withKey("stalled_engine");
    if (avg < 45 && highest.v < 60) return withKey("fragile_foundation");
    if (avg >= 45 && avg < 60 && spread < 12) return withKey("even_drag");

    // Developing engine: moderate-to-good scores, low spread, no extreme weakness
    if (avg >= 60 && avg <= 75 && spread < 15 && lowest.v >= 55) return withKey("developing_engine");

    if (avg > 85) return withKey("precision_machine");
    if (avg > 75 && lowest.v > 65) return withKey("balanced_engine");

    // =========================
    // 2) Dual-constraint patterns (two dimensions weak)
    //    Check BEFORE single-constraint to catch compound issues
    // =========================

    // G + R both low → underfunded_compass
    if (lowest.k === "g" && secondLowest.k === "r" && secondLowest.v < 45) {
      return withKey("underfunded_compass");
    }
    if (lowest.k === "r" && secondLowest.k === "g" && secondLowest.v < 45) {
      return withKey("underfunded_compass");
    }

    // G + P both low → unproven_narrative
    if (lowest.k === "g" && secondLowest.k === "p" && secondLowest.v < 45) {
      return withKey("unproven_narrative");
    }
    if (lowest.k === "p" && secondLowest.k === "g" && secondLowest.v < 45) {
      return withKey("unproven_narrative");
    }

    // I + P both low → leaky_motion
    if (lowest.k === "i" && secondLowest.k === "p" && secondLowest.v < 45) {
      return withKey("leaky_motion");
    }
    if (lowest.k === "p" && secondLowest.k === "i" && secondLowest.v < 45) {
      return withKey("leaky_motion");
    }

    // =========================
    // 3) Single-constraint families
    // =========================

    // --- GUIDANCE LOW ---
    if (lowest.k === "g") {
      // G low + I highest and high → activity_trap
      if (highest.k === "i" && highest.v > 65) return withKey("activity_trap");

      // G low + R highest and high → bloated_ship
      if (highest.k === "r" && highest.v > 65) return withKey("bloated_ship");

      // G low + P highest and decent → accidental_growth
      if (highest.k === "p" && highest.v > 60) return withKey("accidental_growth");

      // G low + P second lowest → guesswork_strategy
      if (secondLowest.k === "p") return withKey("guesswork_strategy");

      // Narrative drift: G low, execution happens but messaging inconsistent
      if (i > 55 && r > 50 && p > 50) return withKey("narrative_drift");

      // Channel scatter: G low, resources spread thin across channels
      if (r > 50 && i > 45 && p < 55) return withKey("channel_scatter");

      // Alignment theater: G low but other scores look decent (appears aligned)
      if (secondLowest.v > 50) return withKey("alignment_theater");

      // Fallback for G low
      return withKey("direction_gap");
    }

    // --- RESOURCES LOW ---
    if (lowest.k === "r") {
      // R low + G highest and high → visionary_void
      if (highest.k === "g" && highest.v > 70) return withKey("visionary_void");

      // R low + I highest and high → burnout_engine
      if (highest.k === "i" && highest.v > 70) return withKey("burnout_engine");

      // R low + P highest and decent → starved_winner
      if (highest.k === "p" && highest.v > 60) return withKey("starved_winner");

      // R low + P second lowest → tooling_debt
      if (secondLowest.k === "p") return withKey("tooling_debt");

      // R low + moderate spread → underpowered_motion
      if (g > 50 && i > 50) return withKey("underpowered_motion");

      // Fallback for R low
      return withKey("capacity_crunch");
    }

    // --- IMPLEMENTATION LOW ---
    if (lowest.k === "i") {
      // I low + G highest and high → ivory_tower
      if (highest.k === "g" && highest.v > 70) return withKey("ivory_tower");

      // I low + P highest and decent → heroic_system
      if (highest.k === "p" && highest.v > 60) return withKey("heroic_system");

      // I low + R highest and decent → misused_stack
      if (highest.k === "r" && highest.v > 60) return withKey("misused_stack");

      // I low + R second lowest → process_void
      if (secondLowest.k === "r") return withKey("process_void");

      // I low + moderate other scores → inconsistent_playbooks
      if (g > 50 && p > 45) return withKey("inconsistent_playbooks");

      // Fallback for I low
      return withKey("broken_handoff");
    }

    // --- PERFORMANCE LOW ---
    if (lowest.k === "p") {
      // P low + I highest and high → leaky_bucket
      if (highest.k === "i" && highest.v > 70) return withKey("leaky_bucket");

      // P low + G highest and high → blind_optimist
      if (highest.k === "g" && highest.v > 70) return withKey("blind_optimist");

      // P low + R highest and high → roi_drag
      if (highest.k === "r" && highest.v > 70) return withKey("roi_drag");

      // P low + churn signals (I decent, retention weak)
      if (i > 55 && g > 50) return withKey("churn_pressure");

      // P low + deals close via discounting
      if (r > 55 && g > 50) return withKey("discount_dependency");

      // P low + metrics exist but unreliable
      if (secondLowest.v > 50) return withKey("measurement_mirage");

      // Fallback for P low
      return withKey("black_box");
    }

    // =========================
    // 4) Fallback
    // =========================
    return withKey("developing_engine");
  }

  function withKey(key) {
    const a = archetypes[key] || archetypes.developing_engine;
    return {
      key,
      title: a.title,
      mode: a.mode,
      short: a.short,
      short_diamond: a.diamond_short || a.short,
      exec: a.exec,
      pdf: a.pdf
    };
  }

  function getByKey(key) {
    return withKey(key);
  }

  function count() {
    return Object.keys(archetypes).length;
  }

  // =========================
  // 3) Export canonical namespace
  // =========================
  window.GRIP = {
    archetypes,
    getArchetype,
    getByKey,
    count
  };
})();
