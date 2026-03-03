/* ===========================================================
   CAUGIA GSL MODULE ENGINE v1.1 (PATCHED FOR GAS COMPAT)
   Patch goals:
   - Send deterministic numeric scale scores: q####_score (1..5)
   - Keep raw text/numeric metric inputs: q####_raw
   - Send explicit context fields (email/company/stage/motion/segment/arr)
   - Prevent missing metadata that caused null/0 behavior in GAS
   =========================================================== */

(function () {
  "use strict";

  // --- 1. CONFIGURATION ---
  const CONFIG = {
    webhookUrl: "https://hook.eu1.make.com/6qav3shh573neaxkt3h3dxah67jye5ow",
    storageKey: "caugia_gsl_v1_state",
    autoSaveInterval: 1000,
    schemaVersion: "gsl-1.1"
  };

  // Context input selectors (optional, safe if not present)
  const CONTEXT_SELECTORS = {
    email: ["#gi-email", "#email", "input[name='email']"],
    company: ["#gi-company", "#company", "input[name='company']"],
    grip_report_id: ["#gi-grip-report-id", "#grip_report_id", "input[name='grip_report_id']"],
    stage: ["#gi-stage", "#stage", "select[name='stage']", "input[name='stage']"],
    motion: ["#gi-motion", "#motion", "select[name='motion']", "input[name='motion']"],
    segment: ["#gi-segment", "#segment", "select[name='segment']", "input[name='segment']"],
    arr: ["#gi-arr", "#arr", "input[name='arr']"]
  };

  // --- 2. STATE ---
  let STATE = {
    schemaVersion: CONFIG.schemaVersion,
    currentStep: 0,
    answers: {},
    completed: false
  };

  // --- 3. DOM ELEMENTS ---
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

  // --- 4. ENGINE NAMES ---
  const ENGINE_NAMES = {
    1: "Strategic Clarity & Market Focus",
    2: "Leadership Alignment & Decision-Making",
    3: "Resource Allocation & Investment",
    4: "GTM Operating Rhythm & Governance",
    5: "Cross-Functional Alignment",
    6: "Strategic Adaptability & Innovation"
  };

  function engineNameByIndex(i) {
    return ENGINE_NAMES[i] || "Engine " + i;
  }

  function qKey(qId) {
    return "q" + qId;
  }

  function safeText(v) {
    if (v === null || v === undefined) return "";
    return String(v);
  }

  function isNonEmpty(v) {
    return safeText(v).trim().length > 0;
  }

  function getCurrentQuestion() {
    return window.QUESTIONS && window.QUESTIONS[STATE.currentStep];
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

  function clamp0to100(n) {
    if (!Number.isFinite(n)) return null;
    return Math.max(0, Math.min(100, n));
  }

  function toScore100(avg1to5) {
    if (!Number.isFinite(avg1to5)) return null;
    return clamp0to100(Math.round(((avg1to5 - 1) / 4) * 100));
  }

  function optionsIndex1to5(question, answerValue) {
    var opts = Array.isArray(question.options) ? question.options : [];
    if (opts.length !== 5) return null;
    var idx = opts.indexOf(answerValue);
    if (idx === -1) return null;
    return idx + 1;
  }

  function firstQueryParam(keys) {
    try {
      var p = new URLSearchParams(window.location.search || "");
      for (var i = 0; i < keys.length; i++) {
        var v = p.get(keys[i]);
        if (isNonEmpty(v)) return String(v).trim();
      }
    } catch (_) {}
    return "";
  }

  function firstDomValue(selectors) {
    for (var i = 0; i < selectors.length; i++) {
      var el = document.querySelector(selectors[i]);
      if (el && isNonEmpty(el.value)) return String(el.value).trim();
      if (el && isNonEmpty(el.textContent) && (el.tagName === "DIV" || el.tagName === "SPAN")) {
        return String(el.textContent).trim();
      }
    }
    return "";
  }

  function safeJsonParse(s) {
    try { return JSON.parse(s); } catch (_) { return null; }
  }

  function collectContext() {
    // DOM first
    var out = {
      email: firstDomValue(CONTEXT_SELECTORS.email),
      company: firstDomValue(CONTEXT_SELECTORS.company),
      grip_report_id: firstDomValue(CONTEXT_SELECTORS.grip_report_id),
      stage: firstDomValue(CONTEXT_SELECTORS.stage),
      motion: firstDomValue(CONTEXT_SELECTORS.motion),
      segment: firstDomValue(CONTEXT_SELECTORS.segment),
      arr: firstDomValue(CONTEXT_SELECTORS.arr)
    };

    // URL fallback
    if (!isNonEmpty(out.email)) out.email = firstQueryParam(["email", "q1__email"]);
    if (!isNonEmpty(out.company)) out.company = firstQueryParam(["company", "q1__company"]);
    if (!isNonEmpty(out.grip_report_id)) out.grip_report_id = firstQueryParam(["grip_report_id", "report_id"]);
    if (!isNonEmpty(out.stage)) out.stage = firstQueryParam(["stage", "q7"]);
    if (!isNonEmpty(out.motion)) out.motion = firstQueryParam(["motion", "q6"]);
    if (!isNonEmpty(out.segment)) out.segment = firstQueryParam(["segment", "q8"]);
    if (!isNonEmpty(out.arr)) out.arr = firstQueryParam(["arr", "q2__arr"]);

    // localStorage fallback (optional profile objects)
    var profile = safeJsonParse(localStorage.getItem("caugia_profile") || "") || {};
    if (!isNonEmpty(out.email) && isNonEmpty(profile.email)) out.email = String(profile.email).trim();
    if (!isNonEmpty(out.company) && isNonEmpty(profile.company)) out.company = String(profile.company).trim();
    if (!isNonEmpty(out.stage) && isNonEmpty(profile.stage)) out.stage = String(profile.stage).trim();
    if (!isNonEmpty(out.motion) && isNonEmpty(profile.motion)) out.motion = String(profile.motion).trim();
    if (!isNonEmpty(out.segment) && isNonEmpty(profile.segment)) out.segment = String(profile.segment).trim();
    if (!isNonEmpty(out.arr) && isNonEmpty(profile.arr)) out.arr = String(profile.arr).trim();

    return out;
  }

  // --- 5. INITIALIZATION ---
  function init() {
    if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS) || window.QUESTIONS.length === 0) {
      console.error("❌ GSL_QUESTIONS.js not loaded or empty.");
      if (UI.title) UI.title.innerText = "Error: Questions File Missing";
      return;
    }

    loadState();

    if (typeof STATE.currentStep !== "number" || STATE.currentStep < 0) STATE.currentStep = 0;
    if (STATE.currentStep > window.QUESTIONS.length - 1) STATE.currentStep = window.QUESTIONS.length - 1;

    console.log("GSL Engine v" + CONFIG.schemaVersion + " started. " + window.QUESTIONS.length + " questions.");
    renderQuestion();
    updateSidebar();

    setInterval(saveState, CONFIG.autoSaveInterval);
  }

  // --- 6. RENDER LOGIC ---
  function renderQuestion() {
    var q = getCurrentQuestion();
    if (!q) return;

    var engineName = engineNameByIndex(q.pillar);

    if (UI.kicker) UI.kicker.innerText = ("ENGINE " + q.pillar + ": " + engineName).toUpperCase();
    if (UI.title) UI.title.innerText = safeText(q.title);
    if (UI.sub) UI.sub.innerText = safeText(q.sub || "");

    if (UI.body) UI.body.innerHTML = "";

    switch (q.type) {
      case "scale":
        renderRadio(q);
        break;
      case "text":
        renderText(q);
        break;
      default:
        renderRadio(q);
        break;
    }

    updateNavState();
    updateProgress();
    updateSidebar();
  }

  // --- 7. INPUT BUILDERS ---
  function renderRadio(q) {
    if (!UI.body) return;

    var wrapper = document.createElement("div");
    wrapper.className = "gi-options-grid";
    wrapper.style.display = "grid";
    wrapper.style.gridTemplateColumns = window.innerWidth < 768 ? "1fr" : "1fr 1fr";
    wrapper.style.gap = "12px";

    var key = qKey(q.id);

    (q.options || []).forEach(function(opt) {
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

      input.addEventListener("change", function() {
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

      naInput.addEventListener("change", function() {
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
    input.style.maxWidth = "320px";
    input.style.padding = "12px";
    input.style.border = "1px solid #e2e8f0";
    input.style.borderRadius = "8px";
    input.style.fontSize = "1.1rem";
    input.name = key;
    input.placeholder = "Enter a number";

    if (STATE.answers[key]) input.value = STATE.answers[key];

    input.addEventListener("input", function(e) {
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

      naBtn.addEventListener("click", function() {
        if (STATE.answers[key] === "N/A") delete STATE.answers[key];
        else STATE.answers[key] = "N/A";
        if (UI.body) UI.body.innerHTML = "";
        renderText(q);
      });

      naWrapper.appendChild(naBtn);
      UI.body.appendChild(naWrapper);
    }
  }

  // --- 8. NAVIGATION / VALIDATION ---
  function validateCurrent() {
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

    if (STATE.currentStep < window.QUESTIONS.length - 1) {
      STATE.currentStep++;
      renderQuestion();
      scrollQuestionCardTop();
    } else {
      alert("Assessment complete. Use the Test Submit button to send.");
    }
  }

  function goPrev() {
    if (STATE.currentStep > 0) {
      STATE.currentStep--;
      renderQuestion();
      scrollQuestionCardTop();
    }
  }

  function updateNavState() {
    if (UI.prevBtn) UI.prevBtn.style.display = STATE.currentStep === 0 ? "none" : "inline-block";
    if (UI.nextBtn) UI.nextBtn.innerText = STATE.currentStep === window.QUESTIONS.length - 1 ? "Finish" : "Next";
  }

  function updateProgress() {
    var total = window.QUESTIONS.length;
    var current = STATE.currentStep + 1;
    var pct = Math.round((current / total) * 100);

    if (UI.progressCount) UI.progressCount.innerText = current + " / " + total;
    if (UI.progressPercent) UI.progressPercent.innerText = pct + "%";
    if (UI.progressBar) UI.progressBar.style.width = pct + "%";
  }

  function updateSidebar() {
    if (!UI.pillarList) return;

    var q = getCurrentQuestion();
    if (!q) return;

    var currentEngine = q.pillar;
    var items = UI.pillarList.querySelectorAll("li");

    items.forEach(function(item) {
      var p = parseInt(item.getAttribute("data-p"), 10);
      if (p === currentEngine) item.classList.add("active");
      else item.classList.remove("active");
    });
  }

  // --- 9. PERSISTENCE ---
  function saveState() {
    if (STATE.completed) return;
    try {
      localStorage.setItem(CONFIG.storageKey, JSON.stringify(STATE));
    } catch (e) {
      console.warn("⚠️ Could not save state:", e);
    }
  }

  function loadState() {
    var raw = localStorage.getItem(CONFIG.storageKey);
    if (!raw) return;

    try {
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return;
      if (!parsed.answers || typeof parsed.answers !== "object") return;

      STATE = {
        schemaVersion: CONFIG.schemaVersion,
        currentStep: typeof parsed.currentStep === "number" ? parsed.currentStep : 0,
        answers: parsed.answers || {},
        completed: !!parsed.completed
      };
    } catch (_) {
      console.log("State corrupted, resetting.");
    }
  }

  // --- 10. SCORING ---
  function computeEngineScores(answersRaw) {
    var buckets = {};

    window.QUESTIONS.forEach(function(q) {
      if (typeof q.pillar !== "number" || q.pillar < 1 || q.pillar > 6) return;
      var opts = Array.isArray(q.options) ? q.options : [];
      if (opts.length !== 5) return; // only scale questions

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
    var avg = vals.reduce(function(a, b) { return a + b; }, 0) / vals.length;
    return clamp0to100(Math.round(avg));
  }

  function computeGripScores(answersRaw) {
    var buckets = { G: [], R: [], I: [], P: [] };

    window.QUESTIONS.forEach(function(q) {
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
      return clamp0to100(Math.round(arr.reduce(function(a, b) { return a + b; }, 0) / arr.length));
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

    window.QUESTIONS.forEach(function(q) {
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

  // Build GAS-friendly answer object (PATCH)
  function buildAnswersForGas(answersRaw) {
    var out = {};

    window.QUESTIONS.forEach(function(q) {
      var key = qKey(q.id);
      var val = answersRaw[key];

      // Base answer key always present (string or empty)
      out[key] = isNonEmpty(val) ? String(val) : "";

      // Scale question: add deterministic numeric score
      var opts = Array.isArray(q.options) ? q.options : [];
      if (opts.length === 5 && isNonEmpty(val) && val !== "N/A") {
        var score = optionsIndex1to5(q, val);
        if (score) out[key + "_score"] = score;
      }

      // Text/numeric question: also send _raw for explicit metric consumption
      if (q.type === "text" && isNonEmpty(val) && val !== "N/A") {
        out[key + "_raw"] = String(val);
      }
    });

    return out;
  }

  // --- 11. SUBMISSION ---
  async function submitData(isTest) {
    var answersRaw = STATE.answers || {};
    var ctx = collectContext();

    var engineScores = computeEngineScores(answersRaw);
    var overallScore = computeOverallScore(engineScores);
    var gripScores = computeGripScores(answersRaw);
    var coverage = buildCoverage(answersRaw);

    var answersForGas = buildAnswersForGas(answersRaw);

    var fullReport = [];
    window.QUESTIONS.forEach(function(q) {
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

    var message = isTest ? "GSL Test Submission" : "GSL Official Submission";

    var payload = {
      metadata: {
        timestamp: new Date().toISOString(),
        schema_version: CONFIG.schemaVersion,
        module: "gsl",
        module_name: "GTM Strategy & Leadership Deep Dive",
        questions_count: window.QUESTIONS.length,
        source: "GSL Engine v" + CONFIG.schemaVersion,
        is_test: !!isTest
      },

      // Explicit top-level respondent/context fields (PATCH)
      email: ctx.email || "",
      company: ctx.company || "",
      grip_report_id: ctx.grip_report_id || "",
      stage: ctx.stage || "",
      motion: ctx.motion || "",
      segment: ctx.segment || "",
      arr: ctx.arr || "",

      message: message,
      answers: answersForGas,
      answers_raw: answersForGas,
      full_report: fullReport,
      coverage: coverage,

      scoring: {
        engine_scores: engineScores,
        overall_score: overallScore,
        grip_scores: gripScores
      },

      engine_scores: engineScores,
      overall_score: overallScore,
      grip_g: gripScores.G,
      grip_r: gripScores.R,
      grip_i: gripScores.I,
      grip_p: gripScores.P,
      completion_rate: coverage.completion_rate
    };

    console.log("🚀 GSL Payload:", payload);

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
        lines.push("GSL Overall: " + overallScore);
        for (var e = 1; e <= 6; e++) {
          lines.push("  E" + e + " " + engineNameByIndex(e) + ": " + engineScores["engine_" + e]);
        }
        lines.push("GRIP: G=" + gripScores.G + " R=" + gripScores.R + " I=" + gripScores.I + " P=" + gripScores.P);
        lines.push("Coverage: " + coverage.answered_questions + "/" + coverage.total_questions + " (" + coverage.completion_rate + "%)");
        lines.push("Context: stage=" + (ctx.stage || "-") + ", motion=" + (ctx.motion || "-") + ", company=" + (ctx.company || "-"));
        alert("✅ GSL TEST SUCCESS!\n\n" + lines.join("\n"));
      } else {
        STATE.completed = true;
        localStorage.removeItem(CONFIG.storageKey);
        window.location.href = "module-gsl-thank-you.html";
      }
    } catch (e) {
      alert("❌ Error: " + e.message);
      console.error(e);
    } finally {
      setButtonState(btn, isTest ? "TEST SUBMIT" : "Submit Assessment", false);
    }
  }

  // --- 12. CLEAR / RESET / SAVE ---
  function clearCurrentAnswer() {
    var q = getCurrentQuestion();
    if (!q) return;
    delete STATE.answers[qKey(q.id)];
    renderQuestion();
  }

  function resetAll() {
    if (!confirm("Reset all GSL answers?")) return;
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

  // --- 13. EVENT BINDING ---
  if (UI.nextBtn) UI.nextBtn.addEventListener("click", goNext);
  if (UI.prevBtn) UI.prevBtn.addEventListener("click", goPrev);

  if (UI.submitBtn) UI.submitBtn.addEventListener("click", function() { submitData(false); });
  if (UI.testBtn) {
    console.log("✅ GSL Test Button Bound");
    UI.testBtn.addEventListener("click", function(e) {
      e.preventDefault();
      submitData(true);
    });
  }

  if (UI.clearBtn) UI.clearBtn.addEventListener("click", clearCurrentAnswer);
  if (UI.resetBtn) UI.resetBtn.addEventListener("click", resetAll);
  if (UI.saveBtn) UI.saveBtn.addEventListener("click", manualSave);

  // --- 14. START ---
  init();
})();
