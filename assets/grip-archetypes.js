/* assets/grip-archetypes.js
   Canonical GRIP Archetypes (30)
   Safe: data-only + pure functions. No HTML. No CSS injection.
   Exports:
     window.GRIP = { archetypes, getArchetype, getByKey, count }
*/
(function () {
  "use strict";

  // =========================
  // 1) Registry (30)
  // Fields:
  // - title: label
  // - mode: mode-good | mode-warn | mode-bad | mode-mid (used by existing CSS)
  // - short: one sentence for Index + Diamond System Pattern line
  // - exec: short executive summary for Diamond (longer than short, still compact)
  // - pdf: long narrative for PDF pages (not used on website)
  // =========================
  const archetypes = {
    stalled_engine: {
      title: "The Stalled Engine",
      mode: "mode-bad",
      short: "Systemic failure across all dimensions. The engine is not currently producing reliable revenue motion.",
      exec: "This pattern signals a system that cannot translate effort into outcomes. The immediate objective is to regain basic controllability before any scaling decisions.",
      pdf: "This archetype represents a system-wide breakdown where no dimension is strong enough to stabilize the whole. Guidance is not providing usable direction, resources are insufficient or misallocated, implementation is inconsistent, and performance is weak or volatile. In practice, leaders experience constant firefighting, repeated resets of priorities, and an inability to forecast or rely on pipeline or retention. The core risk is not underperformance alone but the absence of a controllable system. The fastest path forward typically starts by re-establishing a minimum operating baseline: a single coherent GTM focus, a measurable operating cadence, and a narrow set of leading indicators that can be trusted. Until the system is stabilized, optimization and growth initiatives tend to compound noise rather than create momentum."
    },

    fragile_foundation: {
      title: "The Fragile Foundation",
      mode: "mode-bad",
      short: "No dimension is strong enough to carry the others. The system operates, but it is structurally unstable.",
      exec: "This pattern often feels like constant effort with little compounding. Small shocks create outsized disruption because there is no strong stabilizer in the system.",
      pdf: "This archetype appears when overall maturity is low and there is no compensating strength to keep the engine steady. The organization may have pockets of competence, but none are strong enough to anchor execution or performance. As a result, the system behaves like a fragile structure: small changes in market, team, or product produce disproportionate instability. You typically see inconsistent pipeline quality, uneven customer outcomes, and internal disagreement about what is actually working. The strategic danger is that leaders may interpret the problem as purely executional, when the deeper issue is structural. The system needs a stabilizer: either clearer guidance, meaningful resourcing, a reliable execution process, or measurable performance control. Without one, each quarter becomes a re-interpretation of reality rather than a step forward."
    },

    precision_machine: {
      title: "The Precision Machine",
      mode: "mode-good",
      short: "Elite performance across all dimensions. The system compounds reliably with low internal drag.",
      exec: "This pattern reflects coherence: strategy, capacity, execution, and performance reinforce each other. The focus shifts from fixing to compounding.",
      pdf: "This archetype signals a high-coherence GTM system. Guidance is clear and actionable, resources are sized correctly for the motion, implementation is consistent and repeatable, and performance is measurable and predictable. Leaders typically experience fewer surprises because the system’s control plane is strong: pipeline creation is stable, conversion behavior is understood, and retention economics are monitored in a way that supports decisions. The strategic opportunity is not reinvention but compounding. In this state, the highest leverage often comes from incremental improvements that scale: improving segment mix, tightening packaging, increasing conversion efficiency, or expanding acquisition channels without losing quality. The main risk is drift: a strong system can still degrade if the operating cadence weakens or if the company expands into segments that break the underlying mechanics."
    },

    balanced_engine: {
      title: "The Balanced Engine",
      mode: "mode-good",
      short: "Strong coherence with no major drag factor. The system is stable enough to scale predictably.",
      exec: "This pattern indicates a system with no dominant constraint. Performance is primarily a function of focus and disciplined compounding.",
      pdf: "This archetype represents a balanced GTM system where the four dimensions are healthy and aligned. While there may be improvement opportunities, there is no single structural weakness dominating outcomes. Execution tends to feel steady rather than reactive. Forecasting is typically feasible because signal quality is acceptable and the system behaves consistently. In this state, the strategic question shifts from what is broken to what the system is optimized for. Growth becomes a matter of selecting the right bets and maintaining discipline. New initiatives should be assessed for how they affect system geometry, not just output metrics."
    },

    // Guidance low family
    activity_trap: {
      title: "The Activity Trap",
      mode: "mode-warn",
      short: "High execution volume with unclear direction. Teams move fast, but alignment is weak.",
      exec: "This pattern is common when teams are operationally strong but strategically under-specified. Output increases without a matching increase in signal quality.",
      pdf: "This archetype occurs when implementation is high but guidance is the constraint. The organization is busy, responsive, and capable of shipping and selling, yet lacks the strategic clarity to ensure that effort compounds. You often see high activity metrics, frequent campaign launches, and many initiatives in flight, but inconsistent win patterns and weak narrative coherence across teams. The system consumes energy without consistently building a stronger position. The stabilizing move is sharper guidance: explicit ICP definition, disciplined segment prioritization, a clear value narrative, and decision rules that reduce optionality. When guidance improves, existing execution capacity typically converts into rapid performance gains."
    },

    bloated_ship: {
      title: "The Bloated Ship",
      mode: "mode-warn",
      short: "Resources are heavy but strategy is unclear. Investment exists, but direction is diluted.",
      exec: "This pattern often shows up as high spend, many tools, and large teams without a crisp system design. The result is motion without efficiency.",
      pdf: "This archetype reflects a system where resourcing is not the limiting factor, but guidance is. Teams, budget, and tooling exist, yet there is insufficient strategic clarity to translate capacity into repeatable outcomes. This manifests as over-extended roadmaps, ambiguous prioritization, and internal competition between narratives or segments. The board-level risk is burn without learning. The remedy is to narrow the system: choose a primary segment and motion, define the dominant path to revenue, and align investment behind that path."
    },

    guesswork_strategy: {
      title: "The Guesswork Strategy",
      mode: "mode-bad",
      short: "Direction is unclear and performance proof is weak. Decisions rely on anecdotes rather than validated signal.",
      exec: "This pattern is dangerous because it creates confident motion on unproven assumptions. The system feels active but remains ungrounded.",
      pdf: "This archetype occurs when guidance is low and performance signal is also weak. The organization lacks a validated story about what drives outcomes, so strategy becomes a sequence of assumptions. Execution may continue, but without measurement proof, the system cannot distinguish signal from noise. You often see repeated repositioning, shifting priorities, and inconsistent commercial narratives. The stabilizing move is to build a measurement spine that supports guidance: define the few decisions that matter most, create clear hypotheses, and install instrumentation that can confirm or falsify them quickly."
    },

    direction_gap: {
      title: "The Direction Gap",
      mode: "mode-warn",
      short: "Execution capability exists, but the strategic compass is weak. Teams are misaligned on what matters most.",
      exec: "This pattern typically produces inconsistent wins: strong efforts, unclear prioritization, and uneven conversion and retention behavior.",
      pdf: "This archetype reflects a system where people can execute but are not consistently executing the same plan. Guidance is not translating into a shared operating model across marketing, sales, and customer success. The system behaves inconsistently: messaging varies, qualification standards drift, and priorities change faster than learning can accumulate. The fix is better system design: explicit segmentation choices, a unified positioning spine, operating definitions, and a cadence that forces decisions into the open."
    },

    narrative_drift: {
      title: "The Narrative Drift",
      mode: "mode-warn",
      short: "Teams execute, but messaging shifts across channels. The market receives an inconsistent story.",
      exec: "This pattern reduces conversion without obvious failure. Buyers do not get a stable reason to choose you.",
      pdf: "Narrative Drift appears when execution is active but the external story lacks coherence. Each function communicates a different value frame. Over time, the company accumulates multiple messages, each partially true, none dominant. The result is lower trust, longer cycles, and weaker referrals. The solution is a single positioning spine enforced through enablement, content, and sales motions."
    },

    channel_scatter: {
      title: "The Channel Scatter",
      mode: "mode-warn",
      short: "Acquisition runs across too many channels without a dominant engine. Learning is diluted.",
      exec: "This pattern feels like lots of experiments and few repeatable wins. Focus, not effort, is the missing ingredient.",
      pdf: "Channel Scatter appears when demand generation is spread across multiple channels without a clear primary engine. The organization runs many tests but cannot build depth in any one channel. The fix is to select a primary channel strategy aligned to the motion and build density: repeatable offers, consistent creative, and an operating cadence for optimization."
    },

    alignment_theater: {
      title: "The Alignment Theater",
      mode: "mode-warn",
      short: "The organization appears aligned in meetings, but execution decisions diverge across teams.",
      exec: "This pattern creates slow drift. Everyone agrees on the plan, yet the system behaves as if there are multiple plans.",
      pdf: "Alignment Theater occurs when leadership alignment is performative rather than operational. Strategy documents exist, but day-to-day decisions are not constrained by them. Teams interpret priorities differently, leading to inconsistent execution and repeated debates. The solution is to translate alignment into mechanics: ownership, decision rules, shared definitions, and a cadence that exposes divergence early."
    },

    // Resources low family
    visionary_void: {
      title: "The Visionary Void",
      mode: "mode-warn",
      short: "Strong strategy, weak resourcing. The plan is coherent, but capacity cannot support it.",
      exec: "This pattern often looks like a clear roadmap that never lands. Execution stalls because the system is undersized for its ambition.",
      pdf: "This archetype appears when guidance is strong but resources are the constraint. The system lacks bandwidth, skills, or budget to execute at the required density. The solution is honest capacity planning: narrow scope, increase capacity, or redesign the motion to match resources. Without explicit trade-offs, the system accumulates fatigue and stalls."
    },

    burnout_engine: {
      title: "The Burnout Engine",
      mode: "mode-bad",
      short: "High execution on low resources. The team is over-performing but structurally fragile.",
      exec: "This pattern produces output, but resilience erodes. The system depends on individuals rather than process and capacity.",
      pdf: "This archetype is defined by high implementation on low resources. In the short term it can look impressive. In the medium term it creates fragility: quality declines, handoffs break, onboarding suffers, and knowledge concentrates in a few people. The corrective move is to reduce strain by increasing capacity or simplifying the motion. If unresolved, it often transitions into performance decline and higher churn."
    },

    tooling_debt: {
      title: "The Tooling Debt",
      mode: "mode-bad",
      short: "Resourcing constraints create a data blackout. The system cannot observe itself well enough to improve.",
      exec: "This pattern slows learning. Without reliable signal, execution becomes guesswork and improvements do not compound.",
      pdf: "This archetype shows up when resources are low and performance visibility is weak. The company lacks the instrumentation, RevOps capacity, or analytical bandwidth to measure what is working. The remedy is to invest in minimum viable measurement: define funnel metrics, implement clean capture, and create a cadence that uses data consistently. This installs a control plane so the system can steer."
    },

    capacity_crunch: {
      title: "The Capacity Crunch",
      mode: "mode-warn",
      short: "Ambition exceeds bandwidth. The system is undersized relative to its goals and motion.",
      exec: "This archetype creates slow velocity and stalled initiatives. The issue is not effort but structural capacity.",
      pdf: "This pattern emerges when the engine runs a motion that requires more density than the organization can support. Symptoms include long cycles, inconsistent follow-up, limited experimentation, and slow iteration. The leverage comes from capacity realism: invest to match the motion or redesign the motion to match capacity. Narrow focus, tighten qualification, simplify packaging, and reduce bespoke work."
    },

    underpowered_motion: {
      title: "The Underpowered Motion",
      mode: "mode-warn",
      short: "The motion chosen requires more density than the organization can support. Velocity suffers.",
      exec: "This often comes from adopting an enterprise motion without the required coverage and enablement.",
      pdf: "Underpowered Motion reflects a mismatch between the selected GTM motion and available resourcing. The company pursues complex deals and onboarding while lacking the supporting roles required. The system slows due to operating design, not poor effort. Either simplify the motion, narrow scope, or invest deliberately in enabling capacity."
    },

    // Implementation low family
    ivory_tower: {
      title: "The Ivory Tower",
      mode: "mode-bad",
      short: "Strategy is strong, but execution breaks down in reality. The system cannot translate intent into action.",
      exec: "This reflects a leadership to front line disconnect. Plans are coherent, but operational mechanics are missing or inconsistent.",
      pdf: "This archetype appears when guidance is high but implementation is low. Initiatives look good in decks but fail in handoffs, adoption, or daily execution. The fix is to build execution mechanics: define process stages, install playbooks, simplify handoffs, and create an operating cadence that enforces consistency."
    },

    heroic_system: {
      title: "The Heroic System",
      mode: "mode-warn",
      short: "Results happen despite process, not because of it. The system relies on individual heroes.",
      exec: "Metrics can look healthy, but the system is fragile. When key people leave or slow down, performance drops.",
      pdf: "This archetype occurs when performance is relatively strong while implementation is weak. Outcomes come from exceptional individuals and informal workarounds. The risk is concentration and burnout. The remedy is to capture what works and standardize it: qualification, handoffs, messaging, and tooling to support consistent behavior."
    },

    process_void: {
      title: "The Process Void",
      mode: "mode-bad",
      short: "Low process and limited resources create high friction. Efficiency is structurally impossible.",
      exec: "This often feels chaotic. Even good decisions do not translate into clean execution because mechanics are missing.",
      pdf: "This archetype reflects a system where implementation is the constraint and resources are limited. The organization lacks consistent mechanics from lead to close to renewal. Manual effort compensates but remains inefficient. The fix is a minimum viable operating system: stages, responsibilities, handoffs, reduced complexity, and a rhythm that forces consistency."
    },

    broken_handoff: {
      title: "The Broken Handoff",
      mode: "mode-warn",
      short: "Friction in the motion causes leakage between silos. Leads, context, or deals drop across transitions.",
      exec: "This creates invisible loss. Effort exists, but value leaks at the seams between teams and stages.",
      pdf: "This archetype appears when cross-team transitions are weak. Marketing produces leads sales does not accept, sales closes deals CS cannot onboard cleanly, or renewals lack ownership. The solution is interface design: handoff contracts, shared definitions, mutual accountability, and a cadence that reviews interfaces using data."
    },

    inconsistent_playbooks: {
      title: "The Inconsistent Playbooks",
      mode: "mode-warn",
      short: "Execution varies by team and individual. The system cannot reproduce wins consistently.",
      exec: "Outcomes are uneven and forecasting becomes unreliable because behavior is not standardized.",
      pdf: "Inconsistent Playbooks appears when teams lack shared mechanics for qualification, discovery, demos, onboarding, or expansion. Wins happen but cannot be repeated reliably. The fix is codification: stages, decision rules, and artifacts. Enablement is often the leverage point. Once playbooks exist and are adopted, outcomes become repeatable."
    },

    // Performance low family
    leaky_bucket: {
      title: "The Leaky Bucket",
      mode: "mode-bad",
      short: "High effort, low outcome. Value leaks through conversion or retention, preventing compounding growth.",
      exec: "This is costly. The system works hard but does not keep what it earns. Fixing leakage is higher leverage than adding volume.",
      pdf: "This archetype is strong implementation but weak performance, usually due to leakage: conversion drop-offs, poor qualification, discounting, churn, or weak expansion. Pushing more activity increases cost without resolving the leak. The correct approach is forensic: identify where value is lost and why. Once the leak is sealed, existing execution capacity produces outsized gains."
    },

    blind_optimist: {
      title: "The Blind Optimist",
      mode: "mode-warn",
      short: "The narrative is strong, but the numbers do not validate it. Confidence exceeds proof.",
      exec: "Internally convincing but externally inconsistent. The system needs stronger measurement and reality checks.",
      pdf: "This archetype appears when guidance is strong but performance is weak. The company has a clear story, yet outcomes do not match. Tighten the feedback loop: instrument the funnel, validate assumptions about segment and message, and separate leading indicators from hope. Once story aligns with observed reality, traction returns."
    },

    roi_drag: {
      title: "The ROI Drag",
      mode: "mode-bad",
      short: "Investment is heavy but returns are low. The engine is inefficient and value capture is weak.",
      exec: "A board-level red flag. Spend exists, but unit economics and output do not justify the input.",
      pdf: "This archetype occurs when resources are high but performance is low. It points to structural inefficiency: misaligned targeting, weak positioning, poor packaging, low conversion, or operational drag. The solution is decomposition: segment economics, channel performance, win drivers, churn drivers, and discount behavior. Reallocate resources from low leverage activity to mechanics that convert."
    },

    black_box: {
      title: "The Black Box",
      mode: "mode-mid",
      short: "The system runs, but visibility is weak. Predictability and steering are limited.",
      exec: "The engine may produce output, but leaders cannot confidently explain or forecast it.",
      pdf: "This archetype reflects insufficient performance visibility. Forecasting is volatile, attribution is unclear, and definitions drift. The risk is misallocation because the system cannot see which levers matter. Install a control plane: consistent funnel definitions, instrumentation of key stages, and a cadence that uses metrics to drive decisions."
    },

    discount_dependency: {
      title: "The Discount Dependency",
      mode: "mode-bad",
      short: "Deals close through discounting rather than conviction. Value capture is structurally weak.",
      exec: "This erodes margin and predictability. It often indicates positioning or packaging tension.",
      pdf: "Discount Dependency occurs when the system compensates for weak conviction by reducing price. Over time it becomes habitual, compressing margins and weakening forecasts. The remedy is stronger value articulation, clearer segmentation, and packaging that matches willingness to pay. Pricing and packaging restore value capture."
    },

    churn_pressure: {
      title: "The Churn Pressure",
      mode: "mode-bad",
      short: "Retention instability limits growth. The engine replaces revenue instead of compounding it.",
      exec: "This is a compounding tax. Even strong acquisition cannot outpace leakage for long.",
      pdf: "Churn Pressure appears when retention undermines growth economics. Acquisition requirements rise just to stay flat. The fix spans onboarding quality, product fit by segment, success capacity, and expectation management set in sales. Churn is not only a CS metric. It is often a symptom of upstream targeting and packaging."
    },

    measurement_mirage: {
      title: "The Measurement Mirage",
      mode: "mode-mid",
      short: "Metrics exist, but definitions and instrumentation are inconsistent. Signal quality is weaker than it appears.",
      exec: "This creates false confidence. Decisions look data-driven, but the data cannot be trusted fully.",
      pdf: "Measurement Mirage occurs when dashboards exist but definitions, tracking, or attribution are inconsistent. Teams optimize local metrics that do not map to outcomes. Leadership struggles to reconcile reporting with reality. Rebuild the measurement spine: unify definitions, ensure capture at key stages, and align reporting to the decisions it must support."
    },

    developing_engine: {
      title: "The Developing Engine",
      mode: "mode-mid",
      short: "The system shows potential, but coherence is still forming. Outcomes depend on local strengths rather than a unified engine.",
      exec: "Progress is possible, but performance improves fastest when the system becomes more integrated and repeatable.",
      pdf: "This archetype represents a system that is not broken, but not yet coherent. Some dimensions work, others lag, and interfaces between teams are underdeveloped. The opportunity is to turn local wins into a scalable system: clarify the primary GTM path, standardize execution mechanics, and improve measurement so learning compounds."
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
    if (avg < 35) return withKey("stalled_engine");
    if (avg < 45 && highest.v < 60) return withKey("fragile_foundation");
    if (avg > 85) return withKey("precision_machine");
    if (avg > 75 && lowest.v > 65) return withKey("balanced_engine");

    // 2) Constraint logic families
    if (lowest.k === "g") {
      if (highest.k === "i" && highest.v > 65) return withKey("activity_trap");
      if (highest.k === "r" && highest.v > 65) return withKey("bloated_ship");
      if (secondLowest.k === "p") return withKey("guesswork_strategy");
      // Optional: if you later want to route to narrative_drift, channel_scatter, alignment_theater,
      // do it here with additional conditions. For now keep parity with your current logic.
      return withKey("direction_gap");
    }

    if (lowest.k === "r") {
      if (highest.k === "g" && highest.v > 70) return withKey("visionary_void");
      if (highest.k === "i" && highest.v > 70) return withKey("burnout_engine");
      if (secondLowest.k === "p") return withKey("tooling_debt");
      // Optional: route to underpowered_motion with additional conditions later
      return withKey("capacity_crunch");
    }

    if (lowest.k === "i") {
      if (highest.k === "g" && highest.v > 70) return withKey("ivory_tower");
      if (highest.k === "p" && highest.v > 60) return withKey("heroic_system");
      if (secondLowest.k === "r") return withKey("process_void");
      // Optional: route to inconsistent_playbooks with additional conditions later
      return withKey("broken_handoff");
    }

    if (lowest.k === "p") {
      if (highest.k === "i" && highest.v > 70) return withKey("leaky_bucket");
      if (highest.k === "g" && highest.v > 70) return withKey("blind_optimist");
      if (highest.k === "r" && highest.v > 70) return withKey("roi_drag");
      // Optional: route to discount_dependency / churn_pressure with additional conditions later
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
      short: a.short,
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
