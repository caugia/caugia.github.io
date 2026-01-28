/* assets/grip-archetypes.js
   Canonical GRIP Archetypes (30)
   Safe: data-only + pure functions. No HTML. No CSS injection.
   Exports:
     window.GRIP = { archetypes, getArchetype, getByKey, count }
*/
(function () {
  "use strict";

  // Helper: force 6 lines for Diamond exec summaries
  function L(a, b, c, d, e, f) {
    return [a, b, c, d, e, f].join("\n");
  }

  // =========================
  // 1) Registry (30)
  // Fields:
  // - title: label
  // - mode: mode-good | mode-warn | mode-bad | mode-mid
  // - short: one sentence for Index
  // - diamond_short: short + one extra sentence for Diamond only
  // - exec: Diamond executive summary, MUST be 6 lines (use \n)
  // - pdf: long narrative for PDF (not used on website)
  // =========================
  const archetypes = {
    // Systemic states
    stalled_engine: {
      title: "The Stalled Engine",
      mode: "mode-bad",
      short: "Systemic failure across all dimensions. The engine is not currently producing reliable revenue motion.",
      diamond_short: "Systemic failure across all dimensions. The engine is not currently producing reliable revenue motion. The system lacks a stable baseline to learn from.",
      exec: L(
        "Revenue motion is unstable across the full system.",
        "Effort does not translate into repeatable outcomes.",
        "Signals conflict, so teams reset priorities too often.",
        "First priority is controllability, not optimization.",
        "Avoid scaling decisions while the baseline is volatile.",
        "The report will isolate the minimum backbone to restart compounding."
      ),
      pdf: "This archetype represents a system-wide breakdown where no dimension is strong enough to stabilize the whole. Guidance is not providing usable direction, resources are insufficient or misallocated, implementation is inconsistent, and performance is weak or volatile. In practice, leaders experience constant firefighting, repeated resets of priorities, and an inability to forecast or rely on pipeline or retention. The core risk is not underperformance alone but the absence of a controllable system. The fastest path forward typically starts by re-establishing a minimum operating baseline: a single coherent GTM focus, a measurable operating cadence, and a narrow set of leading indicators that can be trusted. Until the system is stabilized, optimization and growth initiatives tend to compound noise rather than create momentum."
    },

    fragile_foundation: {
      title: "The Fragile Foundation",
      mode: "mode-bad",
      short: "No dimension is strong enough to carry the others. The system operates, but it is structurally unstable.",
      diamond_short: "No dimension is strong enough to carry the others. The system operates, but it is structurally unstable. Small shocks create outsized disruption.",
      exec: L(
        "The system runs, but it does not hold its shape.",
        "Progress resets when the market or team shifts slightly.",
        "There is no stabilizer that anchors execution quality.",
        "Choose one stabilizing spine and build around it.",
        "Avoid adding parallel initiatives that increase fragility.",
        "The report will identify the stabilizer that reduces volatility fastest."
      ),
      pdf: "This archetype appears when overall maturity is low and there is no compensating strength to keep the engine steady. The organization may have pockets of competence, but none are strong enough to anchor execution or performance. As a result, the system behaves like a fragile structure: small changes in market, team, or product produce disproportionate instability. You typically see inconsistent pipeline quality, uneven customer outcomes, and internal disagreement about what is actually working. The strategic danger is that leaders may interpret the problem as purely executional, when the deeper issue is structural. The system needs a stabilizer: either clearer guidance, meaningful resourcing, a reliable execution process, or measurable performance control. Without one, each quarter becomes a re-interpretation of reality rather than a step forward."
    },

    precision_machine: {
      title: "The Precision Machine",
      mode: "mode-good",
      short: "Elite performance across all dimensions. The system compounds reliably with low internal drag.",
      diamond_short: "Elite performance across all dimensions. The system compounds reliably with low internal drag. The constraint is now selection, not capability.",
      exec: L(
        "The system is coherent and behaves predictably.",
        "Strategy, capacity, execution, and performance reinforce each other.",
        "Small improvements create compounding gains over time.",
        "Focus shifts to selecting the highest leverage bets.",
        "Avoid drift that weakens operating cadence and definitions.",
        "The report will show where compounding can be accelerated safely."
      ),
      pdf: "This archetype signals a high-coherence GTM system. Guidance is clear and actionable, resources are sized correctly for the motion, implementation is consistent and repeatable, and performance is measurable and predictable. Leaders typically experience fewer surprises because the system’s control plane is strong: pipeline creation is stable, conversion behavior is understood, and retention economics are monitored in a way that supports decisions. The strategic opportunity is not reinvention but compounding. In this state, the highest leverage often comes from incremental improvements that scale: improving segment mix, tightening packaging, increasing conversion efficiency, or expanding acquisition channels without losing quality. The main risk is drift: a strong system can still degrade if the operating cadence weakens or if the company expands into segments that break the underlying mechanics."
    },

    balanced_engine: {
      title: "The Balanced Engine",
      mode: "mode-good",
      short: "Strong coherence with no major drag factor. The system is stable enough to scale predictably.",
      diamond_short: "Strong coherence with no major drag factor. The system is stable enough to scale predictably. Growth becomes a matter of disciplined compounding.",
      exec: L(
        "No single constraint dominates the system right now.",
        "The engine is stable enough for predictable scaling.",
        "Performance is driven by focus and consistency of execution.",
        "Clarify what the system is optimized for by segment and motion.",
        "Avoid complexity that breaks the balance you have achieved.",
        "The report will highlight safe expansion paths and guardrails."
      ),
      pdf: "This archetype represents a balanced GTM system where the four dimensions are healthy and aligned. While there may be improvement opportunities, there is no single structural weakness dominating outcomes. Execution tends to feel steady rather than reactive. Forecasting is typically feasible because signal quality is acceptable and the system behaves consistently. In this state, the strategic question shifts from what is broken to what the system is optimized for. Growth becomes a matter of selecting the right bets and maintaining discipline. New initiatives should be assessed for how they affect system geometry, not just output metrics."
    },

    // Guidance low family
    activity_trap: {
      title: "The Activity Trap",
      mode: "mode-warn",
      short: "High execution volume with unclear direction. Teams move fast, but alignment is weak.",
      diamond_short: "High execution volume with unclear direction. Teams move fast, but alignment is weak. Output rises without compounding learning.",
      exec: L(
        "Execution is strong, but direction is under specified.",
        "Teams ship and sell, yet wins are inconsistent to repeat.",
        "Effort spreads across too many priorities at once.",
        "The fastest lift comes from sharper ICP and decision rules.",
        "Avoid adding more activity before alignment is tightened.",
        "The report will pinpoint the guidance gap that blocks compounding."
      ),
      pdf: "This archetype occurs when implementation is high but guidance is the constraint. The organization is busy, responsive, and capable of shipping and selling, yet lacks the strategic clarity to ensure that effort compounds. You often see high activity metrics, frequent campaign launches, and many initiatives in flight, but inconsistent win patterns and weak narrative coherence across teams. The system consumes energy without consistently building a stronger position. The stabilizing move is sharper guidance: explicit ICP definition, disciplined segment prioritization, a clear value narrative, and decision rules that reduce optionality. When guidance improves, existing execution capacity typically converts into rapid performance gains."
    },

    bloated_ship: {
      title: "The Bloated Ship",
      mode: "mode-warn",
      short: "Resources are heavy but strategy is unclear. Investment exists, but direction is diluted.",
      diamond_short: "Resources are heavy but strategy is unclear. Investment exists, but direction is diluted. The system pays for capacity it cannot steer.",
      exec: L(
        "Spend and headcount are present, but direction is diluted.",
        "The system carries weight without converting it into efficiency.",
        "Too many truths coexist, so priorities fragment across teams.",
        "Leverage comes from narrowing to one primary segment and motion.",
        "Avoid tool and team growth while the design remains unclear.",
        "The report will show where resourcing is creating drag instead of lift."
      ),
      pdf: "This archetype reflects a system where resourcing is not the limiting factor, but guidance is. Teams, budget, and tooling exist, yet there is insufficient strategic clarity to translate capacity into repeatable outcomes. This manifests as over-extended roadmaps, ambiguous prioritization, and internal competition between narratives or segments. The board-level risk is burn without learning. The remedy is to narrow the system: choose a primary segment and motion, define the dominant path to revenue, and align investment behind that path."
    },

    guesswork_strategy: {
      title: "The Guesswork Strategy",
      mode: "mode-bad",
      short: "Direction is unclear and performance proof is weak. Decisions rely on anecdotes rather than validated signal.",
      diamond_short: "Direction is unclear and performance proof is weak. Decisions rely on anecdotes rather than validated signal. The system cannot tell signal from noise.",
      exec: L(
        "Strategy is moving without validated performance proof.",
        "The system feels active, but learning is weak and slow.",
        "Teams debate opinions because evidence is insufficient.",
        "Priority is to rebuild signal and hypothesis testing cadence.",
        "Avoid major repositioning until proof becomes defensible.",
        "The report will define the minimum measurement spine for evidence based decisions."
      ),
      pdf: "This archetype occurs when guidance is low and performance signal is also weak. The organization lacks a validated story about what drives outcomes, so strategy becomes a sequence of assumptions. Execution may continue, but without measurement proof, the system cannot distinguish signal from noise. You often see repeated repositioning, shifting priorities, and inconsistent commercial narratives. The stabilizing move is to build a measurement spine that supports guidance: define the few decisions that matter most, create clear hypotheses, and install instrumentation that can confirm or falsify them quickly."
    },

    direction_gap: {
      title: "The Direction Gap",
      mode: "mode-warn",
      short: "Execution capability exists, but the strategic compass is weak. Teams are misaligned on what matters most.",
      diamond_short: "Execution capability exists, but the strategic compass is weak. Teams are misaligned on what matters most. Conversion becomes noisy and hard to forecast.",
      exec: L(
        "The team can execute, but not against one shared plan.",
        "Messaging and qualification drift across functions and cycles.",
        "Performance becomes noisy even when effort stays high.",
        "Leverage comes from segmentation, positioning, and shared definitions.",
        "Avoid adding new initiatives that increase optionality.",
        "The report will surface where misalignment is leaking revenue and confidence."
      ),
      pdf: "This archetype reflects a system where people can execute but are not consistently executing the same plan. Guidance is not translating into a shared operating model across marketing, sales, and customer success. The system behaves inconsistently: messaging varies, qualification standards drift, and priorities change faster than learning can accumulate. The fix is better system design: explicit segmentation choices, a unified positioning spine, operating definitions, and a cadence that forces decisions into the open."
    },

    narrative_drift: {
      title: "The Narrative Drift",
      mode: "mode-warn",
      short: "Teams execute, but messaging shifts across channels. The market receives an inconsistent story.",
      diamond_short: "Teams execute, but messaging shifts across channels. The market receives an inconsistent story. Buyers do not get one stable reason to choose you.",
      exec: L(
        "Execution is present, but the external story is not coherent.",
        "Different functions sell different value frames to the market.",
        "Trust and conversion weaken without obvious internal failure.",
        "Leverage is a single positioning spine and enforced enablement.",
        "Avoid multiplying content and offers before the story stabilizes.",
        "The report will map narrative divergence to funnel leakage points."
      ),
      pdf: "Narrative Drift appears when execution is active but the external story lacks coherence. Each function communicates a different value frame. Over time, the company accumulates multiple messages, each partially true, none dominant. The result is lower trust, longer cycles, and weaker referrals. The solution is a single positioning spine enforced through enablement, content, and sales motions."
    },

    channel_scatter: {
      title: "The Channel Scatter",
      mode: "mode-warn",
      short: "Acquisition runs across too many channels without a dominant engine. Learning is diluted.",
      diamond_short: "Acquisition runs across too many channels without a dominant engine. Learning is diluted. Depth never forms, so efficiency stays flat.",
      exec: L(
        "Many channels are active, but none becomes a primary engine.",
        "Learning is diluted and repeatable wins stay shallow.",
        "Attribution noise increases and CAC clarity weakens.",
        "Choose the primary channel for your motion and build density.",
        "Avoid adding more channels while signal quality is low.",
        "The report will identify the channel pattern that can compound fastest."
      ),
      pdf: "Channel Scatter appears when demand generation is spread across multiple channels without a clear primary engine. The organization runs many tests but cannot build depth in any one channel. The fix is to select a primary channel strategy aligned to the motion and build density: repeatable offers, consistent creative, and an operating cadence for optimization."
    },

    alignment_theater: {
      title: "The Alignment Theater",
      mode: "mode-warn",
      short: "The organization appears aligned in meetings, but execution decisions diverge across teams.",
      diamond_short: "The organization appears aligned in meetings, but execution decisions diverge across teams. Drift accumulates quietly each cycle.",
      exec: L(
        "Alignment exists in conversation, not in observable behavior.",
        "Teams interpret priorities differently, so execution diverges.",
        "The system slows because decisions are revisited repeatedly.",
        "Translate alignment into ownership, definitions, and decision rules.",
        "Avoid big plans that are not enforced through cadence.",
        "The report will show where divergence starts and how it propagates."
      ),
      pdf: "Alignment Theater occurs when leadership alignment is performative rather than operational. Strategy documents exist, but day-to-day decisions are not constrained by them. Teams interpret priorities differently, leading to inconsistent execution and repeated debates. The solution is to translate alignment into mechanics: ownership, decision rules, shared definitions, and a cadence that exposes divergence early."
    },

    // Resources low family
    visionary_void: {
      title: "The Visionary Void",
      mode: "mode-warn",
      short: "Strong strategy, weak resourcing. The plan is coherent, but capacity cannot support it.",
      diamond_short: "Strong strategy, weak resourcing. The plan is coherent, but capacity cannot support it. The roadmap cannot land at the required density.",
      exec: L(
        "Direction is clear, but the system is under resourced for it.",
        "Backlogs grow and execution stalls despite good intent.",
        "Hero effort increases while throughput stays constrained.",
        "Leverage is honest capacity planning and explicit tradeoffs.",
        "Avoid expanding scope while capacity remains thin.",
        "The report will quantify the smallest resourcing change that unlocks momentum."
      ),
      pdf: "This archetype appears when guidance is strong but resources are the constraint. The system lacks bandwidth, skills, or budget to execute at the required density. The solution is honest capacity planning: narrow scope, increase capacity, or redesign the motion to match resources. Without explicit trade-offs, the system accumulates fatigue and stalls."
    },

    burnout_engine: {
      title: "The Burnout Engine",
      mode: "mode-bad",
      short: "High execution on low resources. The team is over-performing but structurally fragile.",
      diamond_short: "High execution on low resources. The team is over-performing but structurally fragile. Resilience erodes each quarter the strain continues.",
      exec: L(
        "Execution is high, but the system runs on strain.",
        "Quality and handoffs degrade as bandwidth stays constrained.",
        "Knowledge concentrates in a few people, increasing fragility.",
        "Leverage is reducing load or increasing capacity deliberately.",
        "Avoid adding initiatives that increase coordination tax.",
        "The report will show where the strain converts into churn and missed pipeline."
      ),
      pdf: "This archetype is defined by high implementation on low resources. In the short term it can look impressive. In the medium term it creates fragility: quality declines, handoffs break, onboarding suffers, and knowledge concentrates in a few people. The corrective move is to reduce strain by increasing capacity or simplifying the motion. If unresolved, it often transitions into performance decline and higher churn."
    },

    tooling_debt: {
      title: "The Tooling Debt",
      mode: "mode-bad",
      short: "Resourcing constraints create a data blackout. The system cannot observe itself well enough to improve.",
      diamond_short: "Resourcing constraints create a data blackout. The system cannot observe itself well enough to improve. Decisions become slow because proof is missing.",
      exec: L(
        "The system cannot see itself clearly enough to steer.",
        "Measurement gaps slow learning and increase internal debate.",
        "Teams optimize effort without knowing what actually converts.",
        "Leverage is minimum viable instrumentation and clean definitions.",
        "Avoid buying tools without installing operating discipline.",
        "The report will define the control plane needed for predictable steering."
      ),
      pdf: "This archetype shows up when resources are low and performance visibility is weak. The company lacks the instrumentation, RevOps capacity, or analytical bandwidth to measure what is working. The remedy is to invest in minimum viable measurement: define funnel metrics, implement clean capture, and create a cadence that uses data consistently. This installs a control plane so the system can steer."
    },

    capacity_crunch: {
      title: "The Capacity Crunch",
      mode: "mode-warn",
      short: "Ambition exceeds bandwidth. The system is undersized relative to its goals and motion.",
      diamond_short: "Ambition exceeds bandwidth. The system is undersized relative to its goals and motion. Velocity slows because density is impossible to sustain.",
      exec: L(
        "The engine is trying to run a motion that is too heavy.",
        "Cycle times extend and follow up quality becomes inconsistent.",
        "Experimentation slows, so the system learns too slowly.",
        "Leverage is redesigning the motion or right sizing capacity.",
        "Avoid treating this as a motivation problem.",
        "The report will show where scope and density must be reduced to unlock speed."
      ),
      pdf: "This pattern emerges when the engine runs a motion that requires more density than the organization can support. Symptoms include long cycles, inconsistent follow-up, limited experimentation, and slow iteration. The leverage comes from capacity realism: invest to match the motion or redesign the motion to match capacity. Narrow focus, tighten qualification, simplify packaging, and reduce bespoke work."
    },

    underpowered_motion: {
      title: "The Underpowered Motion",
      mode: "mode-warn",
      short: "The motion chosen requires more density than the organization can support. Velocity suffers.",
      diamond_short: "The motion chosen requires more density than the organization can support. Velocity suffers. The design is heavier than the current coverage model.",
      exec: L(
        "The chosen GTM motion is too heavy for current coverage.",
        "Deals and onboarding require roles the system does not have.",
        "Pipeline may exist, but throughput and consistency break down.",
        "Leverage is simplifying motion or investing in enabling capacity.",
        "Avoid copying an enterprise motion without its infrastructure.",
        "The report will identify the lightest motion that still hits your targets."
      ),
      pdf: "Underpowered Motion reflects a mismatch between the selected GTM motion and available resourcing. The company pursues complex deals and onboarding while lacking the supporting roles required. The system slows due to operating design, not poor effort. Either simplify the motion, narrow scope, or invest deliberately in enabling capacity."
    },

    // Implementation low family
    ivory_tower: {
      title: "The Ivory Tower",
      mode: "mode-bad",
      short: "Strategy is strong, but execution breaks down in reality. The system cannot translate intent into action.",
      diamond_short: "Strategy is strong, but execution breaks down in reality. The system cannot translate intent into action. Plans remain correct but non operational.",
      exec: L(
        "Leadership intent is coherent, but mechanics are missing.",
        "Work breaks down in handoffs, adoption, and daily execution.",
        "Teams lose trust because strategy does not land in reality.",
        "Leverage is playbooks, ownership, and consistent operating cadence.",
        "Avoid adding strategy layers before execution is stabilized.",
        "The report will map the exact points where intent fails to become behavior."
      ),
      pdf: "This archetype appears when guidance is high but implementation is low. Initiatives look good in decks but fail in handoffs, adoption, or daily execution. The fix is to build execution mechanics: define process stages, install playbooks, simplify handoffs, and create an operating cadence that enforces consistency."
    },

    heroic_system: {
      title: "The Heroic System",
      mode: "mode-warn",
      short: "Results happen despite process, not because of it. The system relies on individual heroes.",
      diamond_short: "Results happen despite process, not because of it. The system relies on individual heroes. Scale is limited by concentration risk.",
      exec: L(
        "Outcomes depend on exceptional individuals and workarounds.",
        "Metrics may look fine, but the system is fragile and hard to scale.",
        "When key people slow down, performance drops quickly.",
        "Leverage is codifying what works into playbooks and tooling.",
        "Avoid assuming results prove the system is healthy.",
        "The report will convert hero behavior into repeatable institutional mechanics."
      ),
      pdf: "This archetype occurs when performance is relatively strong while implementation is weak. Outcomes come from exceptional individuals and informal workarounds. The risk is concentration and burnout. The remedy is to capture what works and standardize it: qualification, handoffs, messaging, and tooling to support consistent behavior."
    },

    process_void: {
      title: "The Process Void",
      mode: "mode-bad",
      short: "Low process and limited resources create high friction. Efficiency is structurally impossible.",
      diamond_short: "Low process and limited resources create high friction. Efficiency is structurally impossible. Manual effort cannot compensate for missing mechanics.",
      exec: L(
        "The backbone mechanics are missing across the motion.",
        "Teams compensate with manual work, creating chaos and delays.",
        "Quality drifts because there is no repeatable structure.",
        "Leverage is minimum viable stages, handoffs, and definitions.",
        "Avoid adding complexity when the skeleton is not built.",
        "The report will specify the smallest operating system that restores throughput."
      ),
      pdf: "This archetype reflects a system where implementation is the constraint and resources are limited. The organization lacks consistent mechanics from lead to close to renewal. Manual effort compensates but remains inefficient. The fix is a minimum viable operating system: stages, responsibilities, handoffs, reduced complexity, and a rhythm that forces consistency."
    },

    broken_handoff: {
      title: "The Broken Handoff",
      mode: "mode-warn",
      short: "Friction in the motion causes leakage between silos. Leads, context, or deals drop across transitions.",
      diamond_short: "Friction in the motion causes leakage between silos. Leads, context, or deals drop across transitions. Value is lost at the seams, not inside one team.",
      exec: L(
        "The system leaks value at interfaces between teams.",
        "Handoffs fail, so throughput drops without obvious ownership.",
        "Pipeline exists, but conversion breaks across stages.",
        "Leverage is handoff contracts, shared definitions, and joint cadence.",
        "Avoid blaming one function when the interface is the issue.",
        "The report will identify the exact seams where revenue and context fall out."
      ),
      pdf: "This archetype appears when cross-team transitions are weak. Marketing produces leads sales does not accept, sales closes deals CS cannot onboard cleanly, or renewals lack ownership. The solution is interface design: handoff contracts, shared definitions, mutual accountability, and a cadence that reviews interfaces using data."
    },

    inconsistent_playbooks: {
      title: "The Inconsistent Playbooks",
      mode: "mode-warn",
      short: "Execution varies by team and individual. The system cannot reproduce wins consistently.",
      diamond_short: "Execution varies by team and individual. The system cannot reproduce wins consistently. Forecasting suffers because behavior is not standardized.",
      exec: L(
        "The motion changes by person, team, and segment.",
        "Wins happen, but they are not reliably repeatable.",
        "Learning is slow because each cycle feels unique.",
        "Leverage is codifying stages, decision rules, and artifacts.",
        "Avoid scaling headcount before standardizing the motion.",
        "The report will surface the playbook gaps causing variance in outcomes."
      ),
      pdf: "Inconsistent Playbooks appears when teams lack shared mechanics for qualification, discovery, demos, onboarding, or expansion. Wins happen but cannot be repeated reliably. The fix is codification: stages, decision rules, and artifacts. Enablement is often the leverage point. Once playbooks exist and are adopted, outcomes become repeatable."
    },

    // Performance low family
    leaky_bucket: {
      title: "The Leaky Bucket",
      mode: "mode-bad",
      short: "High effort, low outcome. Value leaks through conversion or retention, preventing compounding growth.",
      diamond_short: "High effort, low outcome. Value leaks through conversion or retention, preventing compounding growth. More volume increases cost without fixing the leak.",
      exec: L(
        "Execution is active, but outcomes do not match the effort.",
        "Leakage sits in conversion, retention, or deal mechanics.",
        "The system works harder each quarter to stay in place.",
        "Leverage is forensic diagnosis of where value drops out.",
        "Avoid pushing more volume before sealing the leak.",
        "The report will pinpoint the leakage points and the mechanisms behind them."
      ),
      pdf: "This archetype is strong implementation but weak performance, usually due to leakage: conversion drop-offs, poor qualification, discounting, churn, or weak expansion. Pushing more activity increases cost without resolving the leak. The correct approach is forensic: identify where value is lost and why. Once the leak is sealed, existing execution capacity produces outsized gains."
    },

    blind_optimist: {
      title: "The Blind Optimist",
      mode: "mode-warn",
      short: "The narrative is strong, but the numbers do not validate it. Confidence exceeds proof.",
      diamond_short: "The narrative is strong, but the numbers do not validate it. Confidence exceeds proof. The system needs faster reality checks to regain credibility.",
      exec: L(
        "The story is coherent, but outcomes do not confirm it.",
        "Teams feel confident internally while the market disagrees.",
        "Forecasts drift because proof is weaker than belief.",
        "Leverage is tighter feedback loops and segment level validation.",
        "Avoid scaling a narrative that has not earned its conversion.",
        "The report will isolate which assumptions fail and where evidence must be built."
      ),
      pdf: "This archetype appears when guidance is strong but performance is weak. The company has a clear story, yet outcomes do not match. Tighten the feedback loop: instrument the funnel, validate assumptions about segment and message, and separate leading indicators from hope. Once story aligns with observed reality, traction returns."
    },

    roi_drag: {
      title: "The ROI Drag",
      mode: "mode-bad",
      short: "Investment is heavy but returns are low. The engine is inefficient and value capture is weak.",
      diamond_short: "Investment is heavy but returns are low. The engine is inefficient and value capture is weak. Burn increases without proportional learning or ARR.",
      exec: L(
        "Inputs are high, but outputs are not keeping pace.",
        "Unit economics and efficiency signals are under pressure.",
        "The system invests broadly without converting into outcomes.",
        "Leverage is decomposition by segment, channel, and stage.",
        "Avoid across the board cuts without identifying the inefficient layer.",
        "The report will show where investment fails to convert and how to restore efficiency."
      ),
      pdf: "This archetype occurs when resources are high but performance is low. It points to structural inefficiency: misaligned targeting, weak positioning, poor packaging, low conversion, or operational drag. The solution is decomposition: segment economics, channel performance, win drivers, churn drivers, and discount behavior. Reallocate resources from low leverage activity to mechanics that convert."
    },

    black_box: {
      title: "The Black Box",
      mode: "mode-mid",
      short: "The system runs, but visibility is weak. Predictability and steering are limited.",
      diamond_short: "The system runs, but visibility is weak. Predictability and steering are limited. Leaders cannot explain results with confidence.",
      exec: L(
        "Output exists, but the system cannot explain why it happens.",
        "Forecasting is volatile because signal quality is weak.",
        "Definitions drift and attribution remains disputed.",
        "Leverage is a clean control plane with consistent instrumentation.",
        "Avoid optimizing dashboards that do not map to decisions.",
        "The report will define the metrics spine needed for predictable steering."
      ),
      pdf: "This archetype reflects insufficient performance visibility. Forecasting is volatile, attribution is unclear, and definitions drift. The risk is misallocation because the system cannot see which levers matter. Install a control plane: consistent funnel definitions, instrumentation of key stages, and a cadence that uses metrics to drive decisions."
    },

    discount_dependency: {
      title: "The Discount Dependency",
      mode: "mode-bad",
      short: "Deals close through discounting rather than conviction. Value capture is structurally weak.",
      diamond_short: "Deals close through discounting rather than conviction. Value capture is structurally weak. Margin becomes the silent casualty of growth.",
      exec: L(
        "Deals rely on price reduction rather than differentiated value.",
        "Margin compresses and forecast quality weakens over time.",
        "Discounting becomes a habit that hides positioning tension.",
        "Leverage is segmentation, value articulation, and packaging fit.",
        "Avoid solving this only with approvals and policing.",
        "The report will isolate where willingness to pay diverges from your offer design."
      ),
      pdf: "Discount Dependency occurs when the system compensates for weak conviction by reducing price. Over time it becomes habitual, compressing margins and weakening forecasts. The remedy is stronger value articulation, clearer segmentation, and packaging that matches willingness to pay. Pricing and packaging restore value capture."
    },

    churn_pressure: {
      title: "The Churn Pressure",
      mode: "mode-bad",
      short: "Retention instability limits growth. The engine replaces revenue instead of compounding it.",
      diamond_short: "Retention instability limits growth. The engine replaces revenue instead of compounding it. Expansion cannot outpace the base erosion.",
      exec: L(
        "Retention behavior is taxing growth and predictability.",
        "The engine spends effort replacing revenue rather than compounding it.",
        "Churn often reflects upstream targeting and expectation setting.",
        "Leverage is onboarding quality, fit by segment, and CS capacity design.",
        "Avoid treating churn as a CS only problem.",
        "The report will trace churn drivers back to the system decisions that created them."
      ),
      pdf: "Churn Pressure appears when retention undermines growth economics. Acquisition requirements rise just to stay flat. The fix spans onboarding quality, product fit by segment, success capacity, and expectation management set in sales. Churn is not only a CS metric. It is often a symptom of upstream targeting and packaging."
    },

    measurement_mirage: {
      title: "The Measurement Mirage",
      mode: "mode-mid",
      short: "Metrics exist, but definitions and instrumentation are inconsistent. Signal quality is weaker than it appears.",
      diamond_short: "Metrics exist, but definitions and instrumentation are inconsistent. Signal quality is weaker than it appears. Decisions become confidently wrong.",
      exec: L(
        "Dashboards exist, but the system is not measuring consistently.",
        "Teams optimize numbers that do not map to outcomes.",
        "Leadership cannot reconcile reports with observed reality.",
        "Leverage is unified definitions and clean capture at key stages.",
        "Avoid adding new KPIs before making existing ones trustworthy.",
        "The report will specify the measurement backbone that restores decision quality."
      ),
      pdf: "Measurement Mirage occurs when dashboards exist but definitions, tracking, or attribution are inconsistent. Teams optimize local metrics that do not map to outcomes. Leadership struggles to reconcile reporting with reality. Rebuild the measurement spine: unify definitions, ensure capture at key stages, and align reporting to the decisions it must support."
    },

    developing_engine: {
      title: "The Developing Engine",
      mode: "mode-mid",
      short: "The system shows potential, but coherence is still forming. Outcomes depend on local strengths rather than a unified engine.",
      diamond_short: "The system shows potential, but coherence is still forming. Outcomes depend on local strengths rather than a unified engine. Integration is the lever for compounding.",
      exec: L(
        "Some parts of the system work, others lag behind.",
        "Outcomes vary because interfaces and cadence are still forming.",
        "Local wins do not yet translate into predictable compounding.",
        "Leverage is a primary path to revenue and standardized execution.",
        "Avoid expanding scope before the system becomes repeatable.",
        "The report will connect local strengths into one coherent operating model."
      ),
      pdf: "This archetype represents a system that is not broken, but not yet coherent. Some dimensions work, others lag, and interfaces between teams are underdeveloped. The opportunity is to turn local wins into a scalable system: clarify the primary GTM path, standardize execution mechanics, and improve measurement so learning compounds."
    },

    // ====== Extra archetypes to reach 30 (not routed yet) ======
    collapsed_engine: {
      title: "The Collapsed Engine",
      mode: "mode-bad",
      short: "Across-dimension failure. The system is below functional threshold and cannot sustain revenue motion.",
      diamond_short: "Across-dimension failure. The system is below functional threshold and cannot sustain revenue motion. Immediate stabilization is required before any bets.",
      exec: L(
        "The system is operating below functional threshold.",
        "Revenue motion is sporadic and cannot be relied on.",
        "Teams cannot learn because the baseline keeps collapsing.",
        "Leverage is a restart plan with strict sequencing.",
        "Avoid growth initiatives until minimum stability exists.",
        "The report will define the stabilization sequence and the non negotiables."
      ),
      pdf: "This archetype signals below-threshold operation where stability is absent. The system cannot sustain reliable pipeline creation, conversion, or retention. The path forward is sequencing: restore minimum direction, restore minimum resourcing, restore minimum execution mechanics, then reintroduce performance targets that the system can actually support."
    },

    even_drag: {
      title: "The Even Drag",
      mode: "mode-mid",
      short: "No single constraint dominates. Multiple small frictions compound into slow progress.",
      diamond_short: "No single constraint dominates. Multiple small frictions compound into slow progress. The system needs prioritization discipline to remove drag.",
      exec: L(
        "The system is slowed by many small frictions at once.",
        "No single fix creates a step change by itself.",
        "Teams feel busy because drag is distributed everywhere.",
        "Leverage is ruthless prioritization and sequencing of removals.",
        "Avoid launching broad programs that add more coordination tax.",
        "The report will identify the few drag points that unlock compounding."
      ),
      pdf: "Even Drag appears when all dimensions are moderate but none are sharp enough to carry the system. Performance is not catastrophic, but progress is slow. The correct approach is not reinvention. It is identifying which frictions create the largest compounding tax and removing them in a deliberate sequence."
    },

    underfunded_compass: {
      title: "The Underfunded Compass",
      mode: "mode-bad",
      short: "Guidance is weak and resources are thin. Teams cannot align or execute consistently.",
      diamond_short: "Guidance is weak and resources are thin. Teams cannot align or execute consistently. The system lacks both direction and capacity.",
      exec: L(
        "Direction is unclear and capacity is insufficient at the same time.",
        "Teams cannot align because tradeoffs are not explicit.",
        "Execution fragments and results stay volatile.",
        "Leverage is narrowing scope and restoring minimum resourcing.",
        "Avoid treating this as purely a performance issue.",
        "The report will define which scope cuts restore control fastest."
      ),
      pdf: "This archetype combines low guidance and low resources, creating a system that cannot align or execute with consistency. The remedy is to cut scope until capacity matches ambition, then install clear decision rules that keep the system from fragmenting again."
    },

    accidental_growth: {
      title: "The Accidental Growth",
      mode: "mode-warn",
      short: "Performance holds for now, but without guidance it is fragile and hard to repeat.",
      diamond_short: "Performance holds for now, but without guidance it is fragile and hard to repeat. The system is winning without knowing why.",
      exec: L(
        "Performance exists, but it is not well explained.",
        "Wins are difficult to repeat because guidance is not explicit.",
        "The system risks drift when the market shifts slightly.",
        "Leverage is codifying the win pattern into guidance and playbooks.",
        "Avoid assuming current performance will persist automatically.",
        "The report will isolate the drivers of performance and make them repeatable."
      ),
      pdf: "Accidental Growth occurs when performance is acceptable despite weak guidance. The system is winning, but it cannot reliably explain or repeat the pattern. The goal is to codify the win drivers, then align the organization to execute that pattern intentionally."
    },

    starved_winner: {
      title: "The Starved Winner",
      mode: "mode-warn",
      short: "Performance is acceptable, but resource scarcity blocks repeatability and scale.",
      diamond_short: "Performance is acceptable, but resource scarcity blocks repeatability and scale. The system is constrained by coverage, not intent.",
      exec: L(
        "The system produces outcomes, but it cannot scale them.",
        "Resource scarcity forces tradeoffs that stay implicit and messy.",
        "Quality and follow up consistency become the bottleneck.",
        "Leverage is right sizing coverage and simplifying the motion.",
        "Avoid increasing targets without expanding enabling capacity.",
        "The report will show which capacity additions unlock the highest ROI."
      ),
      pdf: "Starved Winner appears when performance is okay but resourcing is too thin to sustain or scale. The system works, yet cannot run at the density required for growth. The fix is to size capacity to motion or redesign motion to fit capacity."
    },

    misused_stack: {
      title: "The Misused Stack",
      mode: "mode-warn",
      short: "Resources exist, but implementation is weak. Tools and people are not converted into throughput.",
      diamond_short: "Resources exist, but implementation is weak. Tools and people are not converted into throughput. The system pays for capacity it does not activate.",
      exec: L(
        "The stack and roles exist, but throughput remains limited.",
        "Tools are under adopted and processes are inconsistent.",
        "Work gets stuck because interfaces and playbooks are missing.",
        "Leverage is adoption, ownership, and stage based execution design.",
        "Avoid buying more tooling before activating what is already there.",
        "The report will identify where capacity is trapped and how to release it."
      ),
      pdf: "Misused Stack reflects a system where resourcing is present but implementation mechanics are missing or inconsistent. The remedy is adoption and operating design: ownership, stage definitions, and playbooks that turn tools into throughput."
    },

    leaky_motion: {
      title: "The Leaky Motion",
      mode: "mode-bad",
      short: "Implementation and performance both lag. Effort does not convert into outcomes reliably.",
      diamond_short: "Implementation and performance both lag. Effort does not convert into outcomes reliably. The motion itself is leaking at multiple stages.",
      exec: L(
        "Both mechanics and outcomes are under pressure.",
        "Activity exists, but conversion breaks across the motion.",
        "Teams cannot rely on process to create predictable throughput.",
        "Leverage is rebuilding the motion with strict stage discipline.",
        "Avoid scaling acquisition until conversion mechanics are repaired.",
        "The report will map the conversion breaks and their systemic causes."
      ),
      pdf: "Leaky Motion occurs when execution mechanics are weak and performance is also weak. The system is not converting effort into outcomes. The corrective move is to rebuild the motion stage by stage, with clear handoffs, instrumentation, and enforcement through cadence."
    },

    unproven_narrative: {
      title: "The Unproven Narrative",
      mode: "mode-warn",
      short: "Guidance is weak and performance is weak. The story cannot be defended with outcomes.",
      diamond_short: "Guidance is weak and performance is weak. The story cannot be defended with outcomes. Credibility erodes inside and outside the company.",
      exec: L(
        "The narrative is not validated by consistent outcomes.",
        "Teams are forced to sell a story that the market does not confirm.",
        "Confidence declines as results stay inconsistent.",
        "Leverage is segment level proof and tightened feedback loops.",
        "Avoid broad messaging changes without evidence and sequencing.",
        "The report will define which claims are defensible and what must be proven next."
      ),
      pdf: "Unproven Narrative reflects a system where guidance is not strong enough to align the organization and performance does not provide proof. The solution is to rebuild the story on evidence: segment validation, win loss patterns, and instrumented funnel learning."
    }
  };

  // =========================
  // 2) Selection logic
  // Returns a registry entry plus key.
  // Mirrors your current website logic.
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
    const highest = scores[3];

    // 1) Systemic extremes
    if (avg < 30) return withKey("collapsed_engine");
    if (avg < 35) return withKey("stalled_engine");
    if (avg < 45 && highest.v < 60) return withKey("fragile_foundation");
    if (avg >= 45 && avg < 60 && (highest.v - lowest.v) < 12) return withKey("even_drag");
    if (avg > 85) return withKey("precision_machine");
    if (avg > 75 && lowest.v > 65) return withKey("balanced_engine");

    // 2) Constraint logic families
    if (lowest.k === "g") {
      if (highest.k === "i" && highest.v > 65) return withKey("activity_trap");
      if (highest.k === "r" && highest.v > 65) return withKey("bloated_ship");
      if (secondLowest.k === "p") return withKey("guesswork_strategy");
      return withKey("direction_gap");
    }

    if (lowest.k === "r") {
      if (highest.k === "g" && highest.v > 70) return withKey("visionary_void");
      if (highest.k === "i" && highest.v > 70) return withKey("burnout_engine");
      if (secondLowest.k === "p") return withKey("tooling_debt");
      return withKey("capacity_crunch");
    }

    if (lowest.k === "i") {
      if (highest.k === "g" && highest.v > 70) return withKey("ivory_tower");
      if (highest.k === "p" && highest.v > 60) return withKey("heroic_system");
      if (secondLowest.k === "r") return withKey("process_void");
      return withKey("broken_handoff");
    }

    if (lowest.k === "p") {
      if (highest.k === "i" && highest.v > 70) return withKey("leaky_bucket");
      if (highest.k === "g" && highest.v > 70) return withKey("blind_optimist");
      if (highest.k === "r" && highest.v > 70) return withKey("roi_drag");
      return withKey("black_box");
    }

    return withKey("developing_engine");
  }

  function withKey(key) {
    const a = archetypes[key] || archetypes.developing_engine;
    return {
      key,
      title: a.title,
      mode: a.mode,
      // Index uses short, Diamond should use short_diamond
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
