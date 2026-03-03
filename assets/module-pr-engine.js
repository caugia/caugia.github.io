/* ===========================================================
   CAUGIA PR MODULE ENGINE v1.2 (CONTEXT + DETERMINISTIC PAYLOAD)
   - Context step (2 pages) BEFORE 60 questions
   - Context is NOT part of the 60-question scoring/progress
   - Emits q#### + q####_score (scale) and q####_raw (text)
   - Emits context aliases for GAS: q1__*, q2__arr, q6/q7/q8
   =========================================================== */

(function () {
  "use strict";

  const CONFIG = {
    webhookUrl: "https://hook.eu1.make.com/w83ejafsnvupa81cpgb8l6hz74utu7eb",
    storageKey: "caugia_pr_v1_state",
    autoSaveInterval: 1000,
    schemaVersion: "pr-1.2"
  };

  const CONTEXT_PAGES = [
    [
      { key: "q1__fullname", label: "Your full name", type: "text", required: true },
      { key: "q1__role", label: "Your role or job title", type: "text", required: true },
      { key: "q1__email", label: "Email address", type: "email", required: true },
      { key: "q1__company", label: "Company name", type: "text", required: true },
      { key: "q1__industry", label: "Industry", type: "text", required: true },
      { key: "q1__total_employees", label: "Total Employees (FTE equivalent)", type: "number", required: true },
      { key: "q1__year_founded", label: "Year Founded (YYYY)", type: "number", required: true },
      { key: "q1__hq_region", label: "HQ Region", type: "text", required: true }
    ],
    [
      { key: "q2__arr", label: "Current ARR (annual recurring revenue)", type: "number", required: true },
      { key: "q6", label: "Motion (inbound/outbound/partner/plg/hybrid)", type: "text", required: true },
      { key: "q7", label: "Stage (seed/A/B/C/bootstrapped/public)", type: "text", required: true },
      { key: "q8", label: "Target segment", type: "text", required: true }
    ]
  ];

  const ENGINE_NAMES = {
    1: "Market & Buyer Intelligence",
    2: "Positioning & Messaging",
    3: "Competitive Intelligence",
    4: "Launch & GTM Execution",
    5: "Sales/Marketing Enablement",
    6: "Messaging Performance"
  };

  let STATE = {
    schemaVersion: CONFIG.schemaVersion,
    currentStep: 0,
    answers: {},
    completed: false
  };

  const UI = {
    kicker: document.getElementById("gi-question-kicker"),
    title: document.getElementById("gi-question-title"),
    sub: document.getElementById("gi-question-sub"),
    body: document.getElementById("gi-question-body"),
    pillarList: document.getElementById("gi-left-pillar-list"),
    progressCount: document.getElementById("gi-progress-count"),
    progressPercent: document.getElementById("gi-progress-percent"),
    progressBar: document.getElementById("gi-progress-bar"),
    prevBtn: document.getElementById("gi-prev-btn"),
    nextBtn: document.getElementById("gi-next-btn"),
    submitBtn: document.getElementById("gi-submit-btn"),
    testBtn: document.getElementById("gi-test-submit-btn"),
    clearBtn: document.getElementById("gi-clear-btn"),
    saveBtn: document.getElementById("gi-save-btn"),
    resetBtn: document.getElementById("gi-reset-btn")
  };

  function qKey(id) { return "q" + id; }
  function safeText(v) { return v === null || v === undefined ? "" : String(v); }
  function isNonEmpty(v) { return safeText(v).trim().length > 0; }
  function clamp0to100(n) { return Number.isFinite(n) ? Math.max(0, Math.min(100, n)) : null; }
  function toScore100(avg1to5) { return Number.isFinite(avg1to5) ? clamp0to100(Math.round(((avg1to5 - 1) / 4) * 100)) : null; }
  function engineNameByIndex(i) { return ENGINE_NAMES[i] || ("Engine " + i); }
  function isContextStep() { return STATE.currentStep < CONTEXT_PAGES.length; }
  function questionIndex() { return STATE.currentStep - CONTEXT_PAGES.length; }

  function getCurrentQuestion() {
    var idx = questionIndex();
    return (window.QUESTIONS && idx >= 0 && idx < window.QUESTIONS.length) ? window.QUESTIONS[idx] : null;
  }

  function setButtonState(btn, label, disabled) {
    if (!btn) return;
    btn.innerText = label;
    btn.disabled = !!disabled;
  }

  function scrollQuestionCardTop() {
    var card = document.getElementById("gi-question-card");
    if (card) card.scrollTop = 0;
  }

  function ensureScrollSafety() {
    var card = document.getElementById("gi-question-card");
    if (!card) return;
    card.style.maxHeight = "calc(100vh - 220px)";
    card.style.overflowY = "auto";
    card.style.overflowX = "hidden";
    if (UI.body) UI.body.style.paddingBottom = "24px";
  }

  function optionsIndex1to5(question, answerValue) {
    var opts = Array.isArray(question.options) ? question.options : [];
    if (opts.length !== 5) return null;
    var idx = opts.indexOf(answerValue);
    return idx === -1 ? null : (idx + 1);
  }

  function init() {
    if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS) || window.QUESTIONS.length !== 60) {
      console.error("PR questions missing/invalid.");
      if (UI.title) UI.title.innerText = "Error: Questions File Missing";
      return;
    }

    loadState();
    var maxStep = CONTEXT_PAGES.length + window.QUESTIONS.length - 1;
    if (typeof STATE.currentStep !== "number" || STATE.currentStep < 0) STATE.currentStep = 0;
    if (STATE.currentStep > maxStep) STATE.currentStep = maxStep;

    ensureScrollSafety();
    renderStep();
    updateSidebar();
    setInterval(saveState, CONFIG.autoSaveInterval);
  }

  function renderStep() {
    if (isContextStep()) renderContextPage();
    else renderQuestion();
    updateNavState();
    updateProgress();
    updateSidebar();
  }

  function renderContextPage() {
    var pageIdx = STATE.currentStep;
    var fields = CONTEXT_PAGES[pageIdx];

    if (UI.kicker) UI.kicker.innerText = "CONTEXT";
    if (UI.title) UI.title.innerText = "Tell us about you and your company";
    if (UI.sub) UI.sub.innerText = "This context is not part of the 60-question score.";
    if (UI.body) UI.body.innerHTML = "";
    if (!UI.body) return;

    var grid = document.createElement("div");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = window.innerWidth < 980 ? "1fr" : "1fr 1fr";
    grid.style.gap = "18px 20px";

    fields.forEach(function (f) {
      var wrap = document.createElement("div");
      var label = document.createElement("label");
      label.innerText = f.label;
      label.style.display = "block";
      label.style.fontWeight = "600";
      label.style.marginBottom = "8px";

      var input = document.createElement("input");
      input.type = f.type || "text";
      input.name = f.key;
      input.value = safeText(STATE.answers[f.key]);
      input.className = "gi-input";
      input.style.width = "100%";
      input.style.padding = "12px";
      input.style.border = "1px solid #cbd5e1";
      input.style.borderRadius = "10px";

      input.addEventListener("input", function (e) {
        STATE.answers[f.key] = e.target.value;
      });

      wrap.appendChild(label);
      wrap.appendChild(input);
      grid.appendChild(wrap);
    });

    UI.body.appendChild(grid);
  }

  function renderQuestion() {
    var q = getCurrentQuestion();
    if (!q) return;

    var engineName = engineNameByIndex(q.pillar);
    if (UI.kicker) UI.kicker.innerText = ("ENGINE " + q.pillar + ": " + engineName).toUpperCase();
    if (UI.title) UI.title.innerText = safeText(q.title);
    if (UI.sub) UI.sub.innerText = safeText(q.sub || "");
    if (UI.body) UI.body.innerHTML = "";

    if (q.type === "text") renderText(q);
    else renderRadio(q);
  }

  function renderRadio(q) {
    if (!UI.body) return;

    var wrapper = document.createElement("div");
    wrapper.className = "gi-options-grid";
    wrapper.style.display = "grid";
    wrapper.style.gridTemplateColumns = window.innerWidth < 768 ? "1fr" : "1fr 1fr";
    wrapper.style.gap = "12px";

    var key = qKey(q.id);

    (q.options || []).forEach(function (opt) {
      var label = document.createElement("label");
      label.className = "gi-option-card";
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.padding = "14px";
      label.style.border = "1px solid #e2e8f0";
      label.style.borderRadius = "8px";
      label.style.cursor = "pointer";
      label.style.backgroundColor = "#fff";

      var input = document.createElement("input");
      input.type = "radio";
      input.name = key;
      input.value = opt;
      input.style.marginRight = "10px";

      if (STATE.answers[key] === opt) {
        input.checked = true;
        label.style.borderColor = "#0056b3";
        label.style.backgroundColor = "#eff6ff";
      }

      input.addEventListener("change", function () {
        STATE.answers[key] = opt;
        if (UI.body) UI.body.innerHTML = "";
        renderRadio(q);
      });

      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      wrapper.appendChild(label);
    });

    if (q.has_na) {
      var naLabel = document.createElement("label");
      naLabel.className = "gi-option-card";
      naLabel.style.display = "flex";
      naLabel.style.alignItems = "center";
      naLabel.style.padding = "14px";
      naLabel.style.border = "1px solid #e2e8f0";
      naLabel.style.borderRadius = "8px";
      naLabel.style.cursor = "pointer";
      naLabel.style.backgroundColor = "#fafafa";
      naLabel.style.fontStyle = "italic";

      var naInput = document.createElement("input");
      naInput.type = "radio";
      naInput.name = key;
      naInput.value = "N/A";
      naInput.style.marginRight = "10px";

      if (STATE.answers[key] === "N/A") {
        naInput.checked = true;
        naLabel.style.borderColor = "#94a3b8";
        naLabel.style.backgroundColor = "#f1f5f9";
      }

      naInput.addEventListener("change", function () {
        STATE.answers[key] = "N/A";
        if (UI.body) UI.body.innerHTML = "";
        renderRadio(q);
      });

      naLabel.appendChild(naInput);
      naLabel.appendChild(document.createTextNode("Not applicable to our stage"));
      wrapper.appendChild(naLabel);
    }

    UI.body.appendChild(wrapper);
  }

  function renderText(q) {
    if (!UI.body) return;

    var key = qKey(q.id);

    var input = document.createElement("input");
    input.type = "number";
    input.className = "gi-input";
    input.style.width = "100%";
    input.style.maxWidth = "360px";
    input.style.padding = "12px";
    input.style.border = "1px solid #e2e8f0";
    input.style.borderRadius = "8px";
    input.style.fontSize = "1.05rem";
    input.name = key;
    input.placeholder = "Enter a number";

    if (isNonEmpty(STATE.answers[key])) input.value = STATE.answers[key];

    input.addEventListener("input", function (e) {
      STATE.answers[key] = e.target.value;
    });

    UI.body.appendChild(input);

    if (q.has_na) {
      var naWrapper = document.createElement("div");
      naWrapper.style.marginTop = "16px";

      var naBtn = document.createElement("button");
      naBtn.className = "gi-btn";
      naBtn.style.fontSize = "0.85rem";
      naBtn.style.fontStyle = "italic";
      naBtn.innerText = "Not applicable to our stage";

      if (STATE.answers[key] === "N/A") {
        naBtn.style.borderColor = "#94a3b8";
        naBtn.style.backgroundColor = "#f1f5f9";
        naBtn.style.fontWeight = "600";
        input.value = "";
        input.disabled = true;
      }

      naBtn.addEventListener("click", function () {
        if (STATE.answers[key] === "N/A") delete STATE.answers[key];
        else STATE.answers[key] = "N/A";
        if (UI.body) UI.body.innerHTML = "";
        renderText(q);
      });

      naWrapper.appendChild(naBtn);
      UI.body.appendChild(naWrapper);
    }
  }

  function validateCurrent() {
    if (isContextStep()) {
      var fields = CONTEXT_PAGES[STATE.currentStep];
      for (var i = 0; i < fields.length; i++) {
        var f = fields[i];
        if (f.required && !isNonEmpty(STATE.answers[f.key])) {
          alert("Please complete: " + f.label);
          return false;
        }
      }
      return true;
    }

    var q = getCurrentQuestion();
    if (!q) return false;

    var k = qKey(q.id);
    if (!isNonEmpty(STATE.answers[k])) {
      alert("Please answer the question.");
      return false;
    }
    return true;
  }

  function goNext() {
    if (!validateCurrent()) return;

    var maxStep = CONTEXT_PAGES.length + window.QUESTIONS.length - 1;
    if (STATE.currentStep < maxStep) {
      STATE.currentStep++;
      renderStep();
      scrollQuestionCardTop();
      return;
    }

    alert("Assessment complete. Use the Test Submit button to send.");
  }

  function goPrev() {
    if (STATE.currentStep > 0) {
      STATE.currentStep--;
      renderStep();
      scrollQuestionCardTop();
    }
  }

  function updateNavState() {
    if (UI.prevBtn) UI.prevBtn.style.display = STATE.currentStep === 0 ? "none" : "inline-block";
    if (!UI.nextBtn) return;

    var maxStep = CONTEXT_PAGES.length + window.QUESTIONS.length - 1;
    if (STATE.currentStep < maxStep) UI.nextBtn.innerText = "Next";
    else UI.nextBtn.innerText = "Finish";
  }

  function updateProgress() {
    var total = window.QUESTIONS.length;
    var current = isContextStep() ? 0 : (questionIndex() + 1);
    var pct = Math.round((current / total) * 100);

    if (UI.progressCount) UI.progressCount.innerText = current + " / " + total;
    if (UI.progressPercent) UI.progressPercent.innerText = pct + "%";
    if (UI.progressBar) UI.progressBar.style.width = pct + "%";
  }

  function updateSidebar() {
    if (!UI.pillarList) return;

    var items = UI.pillarList.querySelectorAll("li");
    if (isContextStep()) {
      items.forEach(function (item) { item.classList.remove("active"); });
      return;
    }

    var q = getCurrentQuestion();
    if (!q) return;

    var currentEngine = q.pillar;
    items.forEach(function (item) {
      var p = parseInt(item.getAttribute("data-p"), 10);
      if (p === currentEngine) item.classList.add("active");
      else item.classList.remove("active");
    });
  }

  function saveState() {
    if (STATE.completed) return;
    try {
      localStorage.setItem(CONFIG.storageKey, JSON.stringify(STATE));
    } catch (e) {
      console.warn("Could not save state:", e);
    }
  }

  function loadState() {
    var raw = localStorage.getItem(CONFIG.storageKey);
    if (!raw) return;

    try {
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object" || !parsed.answers || typeof parsed.answers !== "object") return;

      STATE = {
        schemaVersion: CONFIG.schemaVersion,
        currentStep: typeof parsed.currentStep === "number" ? parsed.currentStep : 0,
        answers: parsed.answers || {},
        completed: !!parsed.completed
      };
    } catch (e) {
      console.log("State corrupted, resetting.");
    }
  }

  function computeEngineScores(answersRaw) {
    var buckets = {};

    window.QUESTIONS.forEach(function (q) {
      if (typeof q.pillar !== "number" || q.pillar < 1 || q.pillar > 6) return;
      var opts = Array.isArray(q.options) ? q.options : [];
      if (opts.length !== 5) return;

      var key = qKey(q.id);
      var val = answersRaw[key];
      if (!isNonEmpty(val) || val === "N/A") return;

      var score1to5 = optionsIndex1to5(q, val);
      if (!score1to5) return;

      if (!buckets[q.pillar]) buckets[q.pillar] = { sum: 0, count: 0 };
      buckets[q.pillar].sum += score1to5;
      buckets[q.pillar].count += 1;
    });

    var out = {};
    for (var e = 1; e <= 6; e++) {
      var b = buckets[e];
      out["engine_" + e] = b && b.count ? toScore100(b.sum / b.count) : null;
    }
    return out;
  }

  function computeOverallScore(scores) {
    var vals = [];
    for (var e = 1; e <= 6; e++) {
      var v = scores["engine_" + e];
      if (Number.isFinite(v)) vals.push(v);
    }
    if (!vals.length) return null;
    var avg = vals.reduce(function (a, b) { return a + b; }, 0) / vals.length;
    return clamp0to100(Math.round(avg));
  }

  function computeGripScores(answersRaw) {
    var buckets = { G: [], R: [], I: [], P: [] };

    window.QUESTIONS.forEach(function (q) {
      if (!q.grip || !buckets[q.grip]) return;

      var opts = Array.isArray(q.options) ? q.options : [];
      if (opts.length !== 5) return;

      var key = qKey(q.id);
      var val = answersRaw[key];
      if (!isNonEmpty(val) || val === "N/A") return;

      var score1to5 = optionsIndex1to5(q, val);
      if (!score1to5) return;

      buckets[q.grip].push(toScore100(score1to5));
    });

    function avgOrNull(arr) {
      if (!arr.length) return null;
      return clamp0to100(Math.round(arr.reduce(function (a, b) { return a + b; }, 0) / arr.length));
    }

    return {
      G: avgOrNull(buckets.G),
      R: avgOrNull(buckets.R),
      I: avgOrNull(buckets.I),
      P: avgOrNull(buckets.P)
    };
  }

  function buildCoverage(answersRaw) {
    var total = 0;
    var answered = 0;
    var missing = [];

    window.QUESTIONS.forEach(function (q) {
      total++;
      var k = qKey(q.id);
      if (isNonEmpty(answersRaw[k])) answered++;
      else missing.push(k);
    });

    return {
      total_questions: total,
      answered_questions: answered,
      completion_rate: total ? Math.round((answered / total) * 100) : 0,
      missing_keys: missing.slice(0, 100)
    };
  }

  function buildDeterministicAnswers(rawAnswers) {
    var out = {};
    for (var k in rawAnswers) out[k] = rawAnswers[k];

    window.QUESTIONS.forEach(function (q) {
      var k = qKey(q.id);
      var v = rawAnswers[k];
      if (!isNonEmpty(v)) return;

      out[k] = v;
      if (q.type === "scale") {
        var score1to5 = optionsIndex1to5(q, v);
        if (score1to5) out[k + "_score"] = score1to5;
      } else {
        out[k + "_raw"] = v;
      }
    });

    return out;
  }

  async function submitData(isTest) {
    var answersRaw = STATE.answers || {};
    var deterministicAnswers = buildDeterministicAnswers(answersRaw);

    var engineScores = computeEngineScores(answersRaw);
    var overallScore = computeOverallScore(engineScores);
    var gripScores = computeGripScores(answersRaw);
    var coverage = buildCoverage(answersRaw);

    var fullReport = [];
    window.QUESTIONS.forEach(function (q) {
      var k = qKey(q.id);
      fullReport.push({
        id: k,
        qid: q.qid,
        engine: q.pillar,
        engine_name: engineNameByIndex(q.pillar),
        grip: q.grip,
        question: q.title,
        answer: answersRaw[k] || ""
      });
    });

    var message = isTest ? "PR Test Submission" : "PR Official Submission";

    var payload = {
      metadata: {
        timestamp: new Date().toISOString(),
        schema_version: CONFIG.schemaVersion,
        module: "pr",
        module_name: "Product Readiness Deep Dive",
        questions_count: window.QUESTIONS.length,
        source: "PR Engine v" + CONFIG.schemaVersion,
        is_test: !!isTest
      },
      message: message,
      answers: deterministicAnswers,
      answers_raw: deterministicAnswers,
      full_report: fullReport,
      coverage: coverage,
      scoring: {
        engine_scores: engineScores,
        overall_score: overallScore,
        grip_scores: gripScores
      },
      engine_scores: engineScores,
      overall_score: overallScore,
      grip_scores: gripScores,
      grip_g: gripScores.G,
      grip_r: gripScores.R,
      grip_i: gripScores.I,
      grip_p: gripScores.P,
      completion_rate: coverage.completion_rate,

      q1__fullname: safeText(answersRaw.q1__fullname),
      q1__role: safeText(answersRaw.q1__role),
      q1__email: safeText(answersRaw.q1__email),
      q1__company: safeText(answersRaw.q1__company),
      q1__industry: safeText(answersRaw.q1__industry),
      q1__total_employees: safeText(answersRaw.q1__total_employees),
      q1__year_founded: safeText(answersRaw.q1__year_founded),
      q1__hq_region: safeText(answersRaw.q1__hq_region),
      q2__arr: safeText(answersRaw.q2__arr),
      q6: safeText(answersRaw.q6),
      q7: safeText(answersRaw.q7),
      q8: safeText(answersRaw.q8)
    };

    console.log("PR Payload:", payload);

    var btn = isTest ? UI.testBtn : UI.submitBtn;
    setButtonState(btn, "Sending...", true);

    try {
      var res = await fetch(CONFIG.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Server responded with status: " + res.status);

      if (isTest) {
        var lines = [];
        lines.push("PR Overall: " + overallScore);
        for (var e = 1; e <= 6; e++) {
          lines.push("  E" + e + " " + engineNameByIndex(e) + ": " + engineScores["engine_" + e]);
        }
        lines.push("GRIP: G=" + gripScores.G + " R=" + gripScores.R + " I=" + gripScores.I + " P=" + gripScores.P);
        lines.push("Coverage: " + coverage.answered_questions + "/" + coverage.total_questions + " (" + coverage.completion_rate + "%)");
        alert("✅ PR TEST SUCCESS!\n\n" + lines.join("\n"));
      } else {
        STATE.completed = true;
        localStorage.removeItem(CONFIG.storageKey);
        window.location.href = "module-pr-thank-you.html";
      }
    } catch (e) {
      alert("❌ Error: " + e.message);
      console.error(e);
    } finally {
      setButtonState(btn, isTest ? "TEST SUBMIT" : "Submit Assessment", false);
    }
  }

  function clearCurrentAnswer() {
    if (isContextStep()) {
      CONTEXT_PAGES[STATE.currentStep].forEach(function (f) { delete STATE.answers[f.key]; });
      renderStep();
      return;
    }

    var q = getCurrentQuestion();
    if (!q) return;
    delete STATE.answers[qKey(q.id)];
    renderStep();
  }

  function resetAll() {
    if (!confirm("Reset all PR answers?")) return;
    STATE.completed = true;
    STATE.answers = {};
    STATE.currentStep = 0;
    localStorage.removeItem(CONFIG.storageKey);
    location.reload();
  }

  function manualSave() {
    saveState();
    alert("✅ Saved.");
  }

  if (UI.nextBtn) UI.nextBtn.addEventListener("click", goNext);
  if (UI.prevBtn) UI.prevBtn.addEventListener("click", goPrev);
  if (UI.submitBtn) UI.submitBtn.addEventListener("click", function () { submitData(false); });
  if (UI.testBtn) UI.testBtn.addEventListener("click", function (e) { e.preventDefault(); submitData(true); });
  if (UI.clearBtn) UI.clearBtn.addEventListener("click", clearCurrentAnswer);
  if (UI.resetBtn) UI.resetBtn.addEventListener("click", resetAll);
  if (UI.saveBtn) UI.saveBtn.addEventListener("click", manualSave);

  init();
})();
