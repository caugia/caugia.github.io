/* ===========================================================
   CAUGIA PMM MODULE ENGINE v1.0 (DETERMINISTIC + SCORES)
   Based on Intelligence Engine v9.0
   Adapted for: Product Marketing Deep Dive (60 questions, 6 engines)
   
   Key differences from v9:
   - Storage key: caugia_pmm_v1_state
   - No group questions (all scale or text/numeric)
   - 6 engines instead of 12 pillars
   - GRIP mapping per question (from tags), not per pillar
   - Module-specific webhook
   =========================================================== */

(function () {
  "use strict";

  // --- 1. CONFIGURATION ---
  const CONFIG = {
    webhookUrl: "https://hook.eu1.make.com/REPLACE_WITH_PMM_WEBHOOK",
    storageKey: "caugia_pmm_v1_state",
    autoSaveInterval: 1000,
    schemaVersion: "pmm-1.0"
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
    1: "Market & Buyer Intelligence",
    2: "Positioning & Messaging",
    3: "Competitive Intelligence",
    4: "Launch & GTM Execution",
    5: "Sales/Marketing Enablement",
    6: "Messaging Performance"
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

  // --- 5. INITIALIZATION ---
  function init() {
    if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS) || window.QUESTIONS.length === 0) {
      console.error("❌ PMM_QUESTIONS.js not loaded or empty.");
      if (UI.title) UI.title.innerText = "Error: Questions File Missing";
      return;
    }

    loadState();

    if (typeof STATE.currentStep !== "number" || STATE.currentStep < 0) STATE.currentStep = 0;
    if (STATE.currentStep > window.QUESTIONS.length - 1) STATE.currentStep = window.QUESTIONS.length - 1;

    console.log("PMM Engine v" + CONFIG.schemaVersion + " started. " + window.QUESTIONS.length + " questions.");
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

    // N/A option for questions that support it
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

    // N/A button for numeric questions that support it
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
        if (STATE.answers[key] === "N/A") {
          delete STATE.answers[key];
        } else {
          STATE.answers[key] = "N/A";
        }
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
      var p = parseInt(item.getAttribute("data-p"));
      if (p === currentEngine) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
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
    } catch (e) {
      console.log("State corrupted, resetting.");
    }
  }

  // --- 10. SCORING ---
  function computeEngineScores(answersRaw) {
    var buckets = {};

    window.QUESTIONS.forEach(function(q) {
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

  // --- 11. SUBMISSION ---
  async function submitData(isTest) {
    var answersRaw = STATE.answers || {};

    var engineScores = computeEngineScores(answersRaw);
    var overallScore = computeOverallScore(engineScores);
    var gripScores = computeGripScores(answersRaw);
    var coverage = buildCoverage(answersRaw);

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

    var message = isTest ? "PMM Test Submission" : "PMM Official Submission";

    var payload = {
      metadata: {
        timestamp: new Date().toISOString(),
        schema_version: CONFIG.schemaVersion,
        module: "pmm",
        module_name: "Product Marketing Deep Dive",
        questions_count: window.QUESTIONS.length,
        source: "PMM Engine v" + CONFIG.schemaVersion,
        is_test: !!isTest
      },
      message: message,
      answers_raw: answersRaw,
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

    console.log("🚀 PMM Payload:", payload);

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
        lines.push("PMM Overall: " + overallScore);
        for (var e = 1; e <= 6; e++) {
          lines.push("  E" + e + " " + engineNameByIndex(e) + ": " + engineScores["engine_" + e]);
        }
        lines.push("GRIP: G=" + gripScores.G + " R=" + gripScores.R + " I=" + gripScores.I + " P=" + gripScores.P);
        lines.push("Coverage: " + coverage.answered_questions + "/" + coverage.total_questions + " (" + coverage.completion_rate + "%)");
        alert("✅ PMM TEST SUCCESS!\n\n" + lines.join("\n"));
      } else {
        STATE.completed = true;
        localStorage.removeItem(CONFIG.storageKey);
        window.location.href = "pmm-thank-you.html";
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
    if (!confirm("Reset all PMM answers?")) return;
    STATE.completed = true;  // stops autosave
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
    console.log("✅ PMM Test Button Bound");
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
