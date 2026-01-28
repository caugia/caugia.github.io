/* assets/grip-archetypes.js
   Canonical GRIP Archetypes (30)
   Safe: data-only. No HTML. No CSS classes beyond mode keys.
*/
(function () {
  const A = {
    stalled_engine: {
      title: "The Stalled Engine",
      mode: "mode-bad",
      system_pattern_line: "Systemic failure across all dimensions. The engine is not currently producing reliable revenue motion.",
      exec_summary_short: "This pattern signals a system that cannot translate effort into outcomes. The immediate objective is to regain basic controllability before any scaling decisions.",
      pdf_narrative_long: "This archetype represents a system-wide breakdown where no dimension is strong enough to stabilize the whole. Guidance is not providing usable direction, resources are insufficient or misallocated, implementation is inconsistent, and performance is weak or volatile. In practice, leaders experience constant firefighting, repeated resets of priorities, and an inability to forecast or rely on pipeline or retention. The core risk is not underperformance alone but the absence of a controllable system. The fastest path forward typically starts by re-establishing a minimum operating baseline: a single coherent GTM focus, a measurable operating cadence, and a narrow set of leading indicators that can be trusted. Until the system is stabilized, optimization and growth initiatives tend to compound noise rather than create momentum."
    },

    fragile_foundation: {
      title: "The Fragile Foundation",
      mode: "mode-bad",
      system_pattern_line: "No dimension is strong enough to carry the others. The system operates, but it is structurally unstable.",
      exec_summary_short: "This pattern often feels like constant effort with little compounding. Small shocks create outsized disruption because there is no strong stabilizer in the system.",
      pdf_narrative_long: "This archetype appears when overall maturity is low and there is no compensating strength to keep the engine steady. The organization may have pockets of competence, but none are strong enough to anchor execution or performance. As a result, the system behaves like a fragile structure: small changes in market, team, or product produce disproportionate instability. You typically see inconsistent pipeline quality, uneven customer outcomes, and internal disagreement about what is actually working. The strategic danger is that leaders may interpret the problem as purely executional, when the deeper issue is structural. The system needs a stabilizer: either clearer guidance, meaningful resourcing, a reliable execution process, or measurable performance control. Without one, each quarter becomes a re-interpretation of reality rather than a step forward."
    },

    precision_machine: {
      title: "The Precision Machine",
      mode: "mode-good",
      system_pattern_line: "Elite performance across all dimensions. The system compounds reliably with low internal drag.",
      exec_summary_short: "This pattern reflects coherence: strategy, capacity, execution, and performance reinforce each other. The focus shifts from fixing to compounding.",
      pdf_narrative_long: "This archetype signals a high-coherence GTM system. Guidance is clear and actionable, resources are sized correctly for the motion, implementation is consistent and repeatable, and performance is measurable and predictable. Leaders typically experience fewer surprises because the system’s control plane is strong: pipeline creation is stable, conversion behavior is understood, and retention economics are monitored in a way that supports decisions. The strategic opportunity is not reinvention but compounding. In this state, the highest leverage often comes from incremental improvements that scale: improving segment mix, tightening packaging, increasing conversion efficiency, or expanding acquisition channels without losing quality. The main risk is complacency or drift: a strong system can still degrade if the operating cadence weakens or if the company expands into segments that break the underlying mechanics."
    },

    balanced_engine: {
      title: "The Balanced Engine",
      mode: "mode-good",
      system_pattern_line: "Strong coherence with no major drag factor. The system is stable enough to scale predictably.",
      exec_summary_short: "This pattern indicates a system with no dominant constraint. Performance is primarily a function of focus and disciplined compounding.",
      pdf_narrative_long: "This archetype represents a balanced GTM system where the four dimensions are healthy and aligned. While there may be improvement opportunities, there is no single structural weakness dominating outcomes. Execution tends to feel steady rather than reactive. Forecasting is typically feasible because signal quality is acceptable and the system behaves consistently. In this state, the strategic question shifts from what is broken to what the system is optimized for. Growth becomes a matter of selecting the right bets and maintaining discipline: segment expansion, channel diversification, product-led investments, or enterprise motion development. The key is to protect the balance as the company grows. New initiatives should be assessed for how they affect system geometry, not just output metrics."
    },

    // GUIDANCE-LOW family
    activity_trap: {
      title: "The Activity Trap",
      mode: "mode-warn",
      system_pattern_line: "High execution volume with unclear direction. Teams move fast, but alignment is weak.",
      exec_summary_short: "This pattern is common when teams are operationally strong but strategically under-specified. Output increases without a matching increase in signal quality.",
      pdf_narrative_long: "This archetype occurs when implementation is high but guidance is the constraint. The organization is busy, responsive, and capable of shipping and selling, yet lacks the strategic clarity to ensure that effort compounds. You often see high activity metrics, frequent campaign launches, and many initiatives in flight, but inconsistent win patterns and weak narrative coherence across teams. The system consumes energy without consistently building a stronger position. The risk is hidden: leadership may interpret busyness as progress, while the system drifts. The stabilizing move is not more execution but sharper guidance: explicit ICP definition, disciplined segment prioritization, a clear value narrative, and decision rules that reduce optionality. When guidance improves, the existing execution capacity typically converts into rapid performance gains."
    },

    bloated_ship: {
      title: "The Bloated Ship",
      mode: "mode-warn",
      system_pattern_line: "Resources are heavy but strategy is unclear. Investment exists, but direction is diluted.",
      exec_summary_short: "This pattern often shows up as high spend, many tools, and large teams without a crisp system design. The result is motion without efficiency.",
      pdf_narrative_long: "This archetype reflects a system where resourcing is not the limiting factor, but guidance is. Teams, budget, and tooling exist, yet there is insufficient strategic clarity to translate capacity into repeatable outcomes. This typically manifests as over-extended roadmaps, ambiguous prioritization, and internal competition between narratives or segments. The system becomes slow and expensive because it tries to serve multiple truths at once. The board-level risk is burn without learning. The remedy is to narrow the system: choose a primary segment and motion, define the dominant path to revenue, and align investment behind that path. Once the system has a single direction, existing resources can be re-allocated to create leverage rather than drag."
    },

    guesswork_strategy: {
      title: "The Guesswork Strategy",
      mode: "mode-bad",
      system_pattern_line: "Direction is unclear and performance proof is weak. Decisions rely on anecdotes rather than validated signal.",
      exec_summary_short: "This pattern is dangerous because it creates confident motion on unproven assumptions. The system feels active but remains ungrounded.",
      pdf_narrative_long: "This archetype occurs when guidance is low and performance signal is also weak. The organization lacks a validated story about what drives outcomes, so strategy becomes a sequence of assumptions. Execution may continue, but without measurement proof, the system cannot distinguish signal from noise. You often see repeated repositioning, shifting priorities, and inconsistent commercial narratives. Over time, trust erodes because results do not validate internal confidence. The stabilizing move is to build a measurement spine that supports guidance: define the few decisions that matter most, create clear hypotheses, and install instrumentation that can confirm or falsify them quickly. The system must become evidence-driven. Without that, improvements are random and momentum cannot compound."
    },

    direction_gap: {
      title: "The Direction Gap",
      mode: "mode-warn",
      system_pattern_line: "Execution capability exists, but the strategic compass is weak. Teams are misaligned on what matters most.",
      exec_summary_short: "This pattern typically produces inconsistent wins: strong efforts, unclear prioritization, and uneven conversion and retention behavior.",
      pdf_narrative_long: "This archetype reflects a system where people can execute but are not consistently executing the same plan. Guidance is not translating into a shared operating model across marketing, sales, and customer success. As a result, the system behaves inconsistently: messaging varies, qualification standards drift, and priorities change faster than learning can accumulate. The output becomes noisy and difficult to forecast. The fix is not a new initiative but better system design: explicit segmentation choices, a unified positioning spine, a small set of operating definitions, and a cadence that forces decisions into the open. Once alignment is achieved, the existing execution strength typically lifts performance without adding headcount."
    },

    // RESOURCES-LOW family
    visionary_void: {
      title: "The Visionary Void",
      mode: "mode-warn",
      system_pattern_line: "Strong strategy, weak resourcing. The plan is coherent, but capacity cannot support it.",
      exec_summary_short: "This pattern often looks like a clear roadmap that never lands. Execution stalls because the system is undersized for its ambition.",
      pdf_narrative_long: "This archetype appears when guidance is strong but resources are the constraint. Leadership has clarity about the target segment, motion, and story, yet the system lacks the bandwidth, skills, or budget to execute at the required density. You often see long backlogs, stretched teams, and growing reliance on heroic effort. The risk is strategic disappointment: the company begins to doubt a correct strategy because it cannot resource it properly. The solution is to right-size the system. That may involve narrowing scope, increasing capacity, or redesigning the motion to match available resources. The key is honest capacity planning and explicit trade-offs. Without it, the system accumulates fatigue and stalls."
    },

    burnout_engine: {
      title: "The Burnout Engine",
      mode: "mode-bad",
      system_pattern_line: "High execution on low resources. The team is over-performing but structurally fragile.",
      exec_summary_short: "This pattern produces output, but resilience erodes. The system depends on individuals rather than process and capacity.",
      pdf_narrative_long: "This archetype is defined by a dangerous asymmetry: implementation is high, but resources are low. The organization is pushing hard to deliver outcomes with insufficient capacity. In the short term, it can look impressive. In the medium term, it creates fragility: quality declines, handoffs break, onboarding suffers, and institutional knowledge concentrates in a few people. Leaders often experience a paradox: metrics may look acceptable, while internally the team is stretched and risk accumulates. The corrective move is to reduce strain by either increasing capacity or simplifying the motion. Operationally, the system needs clearer prioritization, fewer parallel initiatives, and better tooling or enablement that reduces wasted effort. If left unresolved, this archetype often transitions into performance decline and higher churn."
    },

    tooling_debt: {
      title: "The Tooling Debt",
      mode: "mode-bad",
      system_pattern_line: "Resourcing constraints create a data blackout. The system cannot observe itself well enough to improve.",
      exec_summary_short: "This pattern slows learning. Without reliable signal, execution becomes guesswork and improvements do not compound.",
      pdf_narrative_long: "This archetype shows up when resources are low and performance visibility is also weak. The company lacks the instrumentation, RevOps capacity, or analytical bandwidth to measure what is working. Teams still operate, but the system cannot see itself clearly. The result is slow learning cycles, repeated debates, and difficulty defending priorities. Board-level decisions become difficult because confidence ranges are wide. The remedy is to invest in the minimum viable measurement and operating infrastructure: define key funnel metrics, implement clean data capture, and create a cadence that uses the data consistently. This is not about buying tools for their own sake, but about installing a control plane so the system can steer."
    },

    capacity_crunch: {
      title: "The Capacity Crunch",
      mode: "mode-warn",
      system_pattern_line: "Ambition exceeds bandwidth. The system is undersized relative to its goals and motion.",
      exec_summary_short: "This archetype creates slow velocity and stalled initiatives. The issue is not effort but structural capacity.",
      pdf_narrative_long: "This pattern emerges when the engine is trying to run a motion that requires more density than the organization can support. Typical symptoms include long sales cycles, inconsistent follow-up, limited experimentation, and slow iteration on messaging or channel. Leaders often feel pressure to push harder, but the system is constrained by the practical limits of people and time. The highest leverage comes from capacity realism: either invest to match the motion, or redesign the motion to match the capacity. That may mean narrowing segment focus, tightening qualification, simplifying packaging, or reducing bespoke work. Once the system fits, performance often improves even without more activity."
    },

    // IMPLEMENTATION-LOW family
    ivory_tower: {
      title: "The Ivory Tower",
      mode: "mode-bad",
      system_pattern_line: "Strategy is strong, but execution breaks down in reality. The system cannot translate intent into action.",
      exec_summary_short: "This pattern reflects a leadership to front line disconnect. Plans are coherent, but operational mechanics are missing or inconsistent.",
      pdf_narrative_long: "This archetype appears when guidance is high but implementation is low. The organization knows what it wants to do, but cannot reliably operationalize it. You see initiatives that look good in decks but fail in handoffs, adoption, or daily execution. This often points to missing playbooks, weak enablement, unclear ownership, or fragmented tooling. The risk is organizational cynicism: teams lose trust in strategy because it is not executable. The fix is to build execution mechanics: define process stages, install playbooks, simplify handoffs, and create an operating cadence that enforces consistency. Once implementation rises, performance tends to follow quickly because strategic direction is already present."
    },

    heroic_system: {
      title: "The Heroic System",
      mode: "mode-warn",
      system_pattern_line: "Results happen despite process, not because of it. The system relies on individual heroes.",
      exec_summary_short: "This pattern can look healthy in metrics, but it is fragile. When key people leave or slow down, performance drops.",
      pdf_narrative_long: "This archetype occurs when performance is relatively strong while implementation is weak. The system produces outcomes through exceptional individuals, informal workarounds, or tribal knowledge rather than repeatable process. Leaders often feel both proud and nervous: things are working, but they do not feel scalable or transferable. The risk is concentration, burnout, and instability. The remedy is to capture and standardize what the heroes are doing: codify qualification, define handoffs, document messaging, and install tooling that supports consistent behavior. This is a scaling archetype. The objective is to turn individual excellence into institutional capability without losing momentum."
    },

    process_void: {
      title: "The Process Void",
      mode: "mode-bad",
      system_pattern_line: "Low process and limited resources create high friction. Efficiency is structurally impossible.",
      exec_summary_short: "This pattern often feels chaotic. Even good decisions do not translate into clean execution because the mechanics are missing.",
      pdf_narrative_long: "This archetype reflects a system where implementation is the constraint and resources are also limited. The organization lacks the process mechanics to move leads to opportunities, opportunities to close, and customers to renewal consistently. Teams compensate with manual effort, but the system remains inefficient. The impact compounds: cycle times increase, customer experience degrades, and performance becomes volatile. The fix is to build a minimum viable operating system: define stages, responsibilities, and handoffs; reduce complexity; and install a rhythm that forces consistency. The goal is not bureaucracy but a reliable backbone that reduces friction so the team can execute effectively with limited resources."
    },

    broken_handoff: {
      title: "The Broken Handoff",
      mode: "mode-warn",
      system_pattern_line: "Friction in the motion causes leakage between silos. Leads, context, or deals drop across transitions.",
      exec_summary_short: "This pattern creates invisible loss. Effort exists, but value leaks at the seams between teams and stages.",
      pdf_narrative_long: "This archetype appears when implementation is the limiting factor, particularly in cross-team transitions. Marketing produces leads that sales does not accept, sales closes deals that customer success cannot onboard cleanly, or renewals are managed without clear ownership. The system loses value not because any one team is failing, but because the interfaces between teams are weak. Leaders often see symptoms like low MQL to SQL conversion, slow onboarding, inconsistent expansion, and finger-pointing. The solution is interface design: define handoff contracts, shared definitions, and mutual accountability. Implement a cadence where these interfaces are reviewed with data. Fixing the seams often produces large gains without additional headcount."
    },

    // PERFORMANCE-LOW family
    leaky_bucket: {
      title: "The Leaky Bucket",
      mode: "mode-bad",
      system_pattern_line: "High effort, low outcome. Value leaks through conversion or retention, preventing compounding growth.",
      exec_summary_short: "This pattern is costly: the system works hard but does not keep what it earns. Fixing leakage is higher leverage than adding more volume.",
      pdf_narrative_long: "This archetype is defined by strong implementation but weak performance. The team is executing, pipeline may exist, and activity is high, yet outcomes do not match effort. This typically signals leakage: conversion drop-offs, poor qualification, discounting, churn, or weak expansion. Leaders often respond by pushing for more activity, which increases cost without resolving the leak. The correct approach is forensic: identify where value is lost and why. That may involve tightening ICP, improving qualification, fixing onboarding, adjusting packaging, or strengthening enablement. Once the leak is sealed, existing execution capacity often produces outsized performance gains because the system stops wasting effort."
    },

    blind_optimist: {
      title: "The Blind Optimist",
      mode: "mode-warn",
      system_pattern_line: "The narrative is strong, but the numbers do not validate it. Confidence exceeds proof.",
      exec_summary_short: "This pattern often feels internally convincing but externally inconsistent. The system needs clearer measurement and reality checks.",
      pdf_narrative_long: "This archetype appears when guidance is strong but performance is weak. The company has a clear story and direction, yet outcomes do not match expectations. Leaders may attribute this to timing or market conditions, but structurally it often indicates a mismatch between narrative and real buyer behavior. The remedy is to tighten the feedback loop: instrument the funnel properly, validate assumptions about segment and message, and separate leading indicators from wishful thinking. This is not a failure of ambition, but a need for stronger evidence. Once the system aligns story with observed reality, it can regain credibility and traction."
    },

    roi_drag: {
      title: "The ROI Drag",
      mode: "mode-bad",
      system_pattern_line: "Investment is heavy but returns are low. The engine is inefficient and value capture is weak.",
      exec_summary_short: "This pattern is a board-level red flag. Spend exists, but unit economics and output do not justify the input.",
      pdf_narrative_long: "This archetype occurs when resources are high but performance is low. The organization is investing meaningfully, yet outcomes remain weak or inconsistent. This typically points to structural inefficiency: misaligned targeting, weak positioning, poor packaging, low conversion, or operational drag. Leaders often feel the cost pressure first: burn increases while ARR does not keep pace. The solution is to identify why investment is not converting into outcomes. This requires decomposition: segment economics, channel performance, win drivers, churn drivers, and discount behavior. Once the inefficient layer is identified, the system can reallocate resources from low-leverage activity into higher-leverage mechanics. The objective is not austerity but efficiency: restoring a strong relationship between input and output."
    },

    black_box: {
      title: "The Black Box",
      mode: "mode-mid",
      system_pattern_line: "The system runs, but visibility is weak. Predictability and steering are limited.",
      exec_summary_short: "This pattern creates uncertainty. The engine may be producing output, but leaders cannot confidently explain or forecast it.",
      pdf_narrative_long: "This archetype reflects a system with insufficient performance visibility. The company may be executing and producing results, but measurement quality is too weak to support confident decisions. This often shows up as forecasting volatility, unclear attribution, inconsistent reporting definitions, and debates driven by opinion rather than data. The business risk is not only missed targets but misallocation of resources, because the system cannot see which levers matter most. The fix is to install a control plane: consistent funnel definitions, instrumentation of key stages, and a cadence that uses the metrics to drive decisions. Predictability is a strategic asset. Once visibility improves, the same system can often be steered to better outcomes without dramatic changes."
    },

    developing_engine: {
      title: "The Developing Engine",
      mode: "mode-mid",
      system_pattern_line: "The system shows potential, but coherence is still forming. Outcomes depend on local strengths rather than a unified engine.",
      exec_summary_short: "This pattern indicates early structure. Progress is possible, but performance will improve most when the system becomes more integrated and repeatable.",
      pdf_narrative_long: "This archetype represents a system that is not fundamentally broken, but not yet fully coherent. Some dimensions are working, others lag, and the interfaces between teams may be underdeveloped. Leaders often experience mixed signals: certain channels or segments perform well, while others fail to convert; certain teams operate effectively, while handoffs remain inconsistent. The opportunity is to turn local wins into a scalable system. That typically involves clarifying the primary GTM path, standardizing execution mechanics, and improving measurement so learning compounds. The goal is coherence: making the system behave predictably across cycles rather than relying on isolated efforts."
    }
  };

  /* Expand to 30 by adding 9 additional canonical archetypes
     These are defined as pattern-level variants that remain data-only and style-safe.
     They are compatible with existing logic by allowing lookup via key when you add mapping.
  */
  Object.assign(A, {
    // Additional guidance-low variants
    narrative_drift: {
      title: "The Narrative Drift",
      mode: "mode-warn",
      system_pattern_line: "Teams execute, but messaging shifts across channels. The market receives an inconsistent story.",
      exec_summary_short: "This pattern reduces conversion without obvious failure. Buyers do not get a stable reason to choose you.",
      pdf_narrative_long: "Narrative Drift appears when execution is active but the external story lacks coherence. The organization may run campaigns and sales cycles effectively, yet each function communicates a different value frame. Over time, the company accumulates multiple messages, each partially true, none dominant. The result is lower trust, longer cycles, and weaker referral dynamics. The solution is to establish a single positioning spine and enforce it through enablement, content, and sales motions. Coherence is a growth lever because it increases conversion and reduces friction without adding spend."
    },

    // Additional resources-low variants
    underpowered_motion: {
      title: "The Underpowered Motion",
      mode: "mode-warn",
      system_pattern_line: "The motion chosen requires more density than the organization can support. Velocity suffers.",
      exec_summary_short: "This pattern often comes from adopting an enterprise motion without the required coverage and enablement.",
      pdf_narrative_long: "Underpowered Motion reflects a mismatch between the selected GTM motion and available resourcing. The company may pursue high-touch sales, complex onboarding, or multi-stakeholder deals while lacking the coverage, enablement, and supporting roles required. The system then slows, not due to poor effort but because the operating design is too heavy. Leaders should either simplify the motion, narrow scope, or invest deliberately in the enabling capacity. When motion and resources match, conversion and predictability improve quickly."
    },

    // Additional implementation-low variants
    inconsistent_playbooks: {
      title: "The Inconsistent Playbooks",
      mode: "mode-warn",
      system_pattern_line: "Execution varies by team and individual. The system cannot reproduce wins consistently.",
      exec_summary_short: "This pattern creates uneven outcomes and makes forecasting unreliable because behavior is not standardized.",
      pdf_narrative_long: "Inconsistent Playbooks appears when teams lack shared mechanics for qualification, discovery, demos, onboarding, or expansion. Wins happen, but cannot be reliably repeated. The system learns slowly because each deal is treated as unique. The fix is to codify the motion: define stages, decision rules, and artifacts that support consistent execution. Enablement is often the leverage point. Once playbooks exist and are adopted, outcomes become more repeatable and performance becomes easier to scale."
    },

    // Additional performance-low variants
    discount_dependency: {
      title: "The Discount Dependency",
      mode: "mode-bad",
      system_pattern_line: "Deals close through discounting rather than conviction. Value capture is structurally weak.",
      exec_summary_short: "This pattern erodes margin and predictability. It typically indicates positioning or packaging tension.",
      pdf_narrative_long: "Discount Dependency occurs when performance is pressured and the system compensates by reducing price. This often signals that buyers do not perceive sufficient differentiated value at the offered price point, or that packaging is misaligned with willingness to pay. Over time, discounting becomes a habit, compressing margins and creating a fragile forecast. The remedy is not stricter approvals alone. The system needs stronger value articulation, clearer segmentation, and packaging that matches buyer needs. Pricing and packaging become the control lever that restores value capture."
    },

    churn_pressure: {
      title: "The Churn Pressure",
      mode: "mode-bad",
      system_pattern_line: "Retention instability limits growth. The engine replaces revenue instead of compounding it.",
      exec_summary_short: "This pattern is a compounding tax. Even strong acquisition cannot outpace leakage for long.",
      pdf_narrative_long: "Churn Pressure appears when retention behavior undermines growth economics. The system may still close deals, but the base erodes and expansion struggles. Leaders often see increasing acquisition requirements to hit targets. This is a structural issue. The fix typically spans onboarding quality, product fit by segment, success capacity, and expectation management set during sales. In a board-level system, churn is not a CS metric alone. It is a symptom of upstream targeting, packaging, and execution design."
    },

    // Mixed-state variants to reach 30
    measurement_mirage: {
      title: "The Measurement Mirage",
      mode: "mode-mid",
      system_pattern_line: "Metrics exist, but definitions and instrumentation are inconsistent. Signal quality is weaker than it appears.",
      exec_summary_short: "This pattern creates false confidence. Decisions look data-driven, but the data cannot be trusted fully.",
      pdf_narrative_long: "Measurement Mirage occurs when the organization reports metrics but lacks clean definitions, consistent tracking, or reliable attribution. The result is a system that believes it is steering, while actually navigating with partial instruments. Teams optimize local metrics that do not map to outcomes, and leadership struggles to reconcile dashboards with reality. The solution is to rebuild the measurement spine: unify definitions, ensure capture at key stages, and align reporting to decisions. Signal quality is a prerequisite for compounding improvements."
    },

    channel_scatter: {
      title: "The Channel Scatter",
      mode: "mode-warn",
      system_pattern_line: "Acquisition runs across too many channels without a dominant engine. Learning is diluted.",
      exec_summary_short: "This pattern feels like lots of experiments and few repeatable wins. Focus, not effort, is the missing ingredient.",
      pdf_narrative_long: "Channel Scatter appears when demand generation is spread across multiple channels without a clear primary engine. The organization runs many tests but cannot build depth in any one channel, so performance remains shallow. This often stems from weak segment clarity or unclear measurement of CAC and payback by channel. The fix is to select a primary channel strategy aligned to the motion and build density: repeatable offers, consistent creative, and an operating cadence for optimization. Depth creates compounding, while scatter creates noise."
    },

    alignment_theater: {
      title: "The Alignment Theater",
      mode: "mode-warn",
      system_pattern_line: "The organization appears aligned in meetings, but execution decisions diverge across teams.",
      exec_summary_short: "This pattern creates slow drift. Everyone agrees on the plan, yet the system behaves as if there are multiple plans.",
      pdf_narrative_long: "Alignment Theater occurs when leadership alignment is performative rather than operational. Strategy documents exist, but day-to-day decisions are not constrained by them. Teams interpret priorities differently, leading to inconsistent execution and repeated debates. The system becomes slower because decisions are revisited rather than enforced. The solution is to translate alignment into mechanics: clear ownership, decision rules, shared definitions, and a cadence that exposes divergence early. True alignment is observable in consistent behavior, not in meeting sentiment."
    }
  });

  // Export
  window.GRIP_ARCHETYPES = A;
})();

