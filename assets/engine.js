/* ===========================================================
   CAUGIA INTELLIGENCE ENGINE v9.0 (DETERMINISTIC + SCORES)
   - Single key standard: q{questionId} and q{questionId}__{fieldName}
   - Always builds full_report with ALL questions (even unanswered)
   - Sends V9 debug payload: metadata, message, answers_raw, full_report, questions_map
   - ALSO sends legacy-friendly blocks (clean + fast in Make):
       customer, context, answers (Q-keys), score_01..score_12, question_map
   - Safe loadState (schema guard) and autosave
   =========================================================== */

(function () {
  "use strict";

  // --- 1. CONFIGURATION ---
  const CONFIG = {
    webhookUrl: "https://hook.eu1.make.com/8vg0fkeflod05er5zuvmtfgcgqk17hnj",
    storageKey: "caugia_assessment_v9_state",
    autoSaveInterval: 1000,
    schemaVersion: "9.0"
  };

  // --- 2. STATE ---
  let STATE = {
    schemaVersion: CONFIG.schemaVersion,
    currentStep: 0,
    answers: {}, // keys: q{ID} or q{ID}__{fieldName}
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

  // --- 4. CONSTANTS / HELPERS ---
  const PILLAR_NAMES = [
    "Context",
    "GTM Strategy & Leadership",
    "Market Intelligence",
    "Product Marketing",
    "Demand Generation",
    "Sales Execution",
    "Customer Success",
    "RevOps",
    "Pricing",
    "Brand",
    "Data",
    "Enablement",
    "Leadership"
  ];

  function pillarNameByIndex(i) {
    return PILLAR_NAMES[i] || `Pillar ${i}`;
  }

  function qKey(qId) {
    return `q${qId}`;
  }

  function groupKey(qId, fieldName) {
    return `q${qId}__${fieldName}`;
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
    const card = document.getElementById("gi-question-card");
    if (card) card.scrollTop = 0;
  }

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  // Converts a 1..5 average to 0..100
  function toScore100(avg1to5) {
    return Math.round(((avg1to5 - 1) / 4) * 100);
  }

  // Returns 1..5 index for a 5-option scale question; otherwise null
  function optionsIndex1to5(question, answerValue) {
    const opts = Array.isArray(question.options) ? question.options : [];
    if (opts.length !== 5) return null;
    const idx = opts.indexOf(answerValue);
    if (idx === -1) return null;
    return idx + 1;
  }

  // --- 5. INITIALIZATION ---
  function init() {
    if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS) || window.QUESTIONS.length === 0) {
      console.error("❌ QUESTIONS.js not loaded or empty.");
      if (UI.title) UI.title.innerText = "Error: Questions File Missing";
      return;
    }

    loadState();

    // Clamp currentStep
    if (typeof STATE.currentStep !== "number" || STATE.currentStep < 0) STATE.currentStep = 0;
    if (STATE.currentStep > window.QUESTIONS.length - 1) STATE.currentStep = window.QUESTIONS.length - 1;

    console.log(`Engine v${CONFIG.schemaVersion} started. Loaded ${window.QUESTIONS.length} questions.`);
    renderQuestion();
    updateSidebar();

    setInterval(saveState, CONFIG.autoSaveInterval);
  }

  // --- 6. RENDER LOGIC ---
  function renderQuestion() {
    const q = getCurrentQuestion();
    if (!q) return;

    const pName = pillarNameByIndex(q.pillar);

    if (UI.kicker) UI.kicker.innerText = safeText(pName).toUpperCase();
    if (UI.title) UI.title.innerText = safeText(q.title);
    if (UI.sub) UI.sub.innerText = safeText(q.sub || "");

    if (UI.body) UI.body.innerHTML = "";

    switch (q.type) {
      case "group":
        renderGroup(q);
        break;
      case "radio":
        renderRadio(q);
        break;
      case "scale":
        renderScale(q);
        break;
      case "textarea":
        renderTextarea(q);
        break;
      case "text":
        renderText(q);
        break;
      default:
        if (UI.body) UI.body.innerHTML = `<p style="color:red">Unknown type: ${safeText(q.type)}</p>`;
        break;
    }

    updateNavState();
    updateProgress();
    updateSidebar();
  }

  // --- 7. INPUT BUILDERS ---
  function renderGroup(q) {
    if (!UI.body) return;

    const grid = document.createElement("div");
    grid.className = "gi-group-grid";
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = window.innerWidth < 768 ? "1fr" : "1fr 1fr";
    grid.style.gap = "20px";

    (q.fields || []).forEach((f) => {
      const wrapper = document.createElement("div");

      const label = document.createElement("label");
      label.innerText = safeText(f.label);
      label.style.display = "block";
      label.style.fontWeight = "600";
      label.style.marginBottom = "6px";
      label.style.fontSize = "0.9rem";

      const input = document.createElement("input");
      input.type = "text";
      input.className = "gi-input";
      input.style.width = "100%";
      input.style.padding = "10px";
      input.style.border = "1px solid #e2e8f0";
      input.style.borderRadius = "6px";

      const k = groupKey(q.id, f.name);
      input.name = k;

      if (STATE.answers[k]) input.value = STATE.answers[k];

      input.addEventListener("input", (e) => {
        STATE.answers[k] = e.target.value;
      });

      wrapper.appendChild(label);
      wrapper.appendChild(input);
      grid.appendChild(wrapper);
    });

    UI.body.appendChild(grid);
  }

  function renderRadio(q) {
    if (!UI.body) return;

    const wrapper = document.createElement("div");
    wrapper.className = "gi-options-grid";
    wrapper.style.display = "grid";
    wrapper.style.gridTemplateColumns = "1fr 1fr";
    wrapper.style.gap = "12px";

    const key = qKey(q.id);

    (q.options || []).forEach((opt) => {
      const label = document.createElement("label");
      label.className = "gi-option-card";
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.padding = "14px";
      label.style.border = "1px solid #e2e8f0";
      label.style.borderRadius = "8px";
      label.style.cursor = "pointer";
      label.style.backgroundColor = "#fff";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = key;
      input.value = opt;
      input.style.marginRight = "10px";

      if (STATE.answers[key] === opt) {
        input.checked = true;
        label.style.borderColor = "#0056b3";
        label.style.backgroundColor = "#eff6ff";
      }

      input.addEventListener("change", () => {
        STATE.answers[key] = opt;
        if (UI.body) UI.body.innerHTML = "";
        renderRadio(q);
      });

      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      wrapper.appendChild(label);
    });

    UI.body.appendChild(wrapper);
  }

  function renderScale(q) {
    // scale behaves like radio options
    renderRadio(q);
  }

  function renderTextarea(q) {
    if (!UI.body) return;

    const key = qKey(q.id);

    const input = document.createElement("textarea");
    input.className = "gi-textarea";
    input.style.width = "100%";
    input.style.minHeight = "120px";
    input.style.padding = "12px";
    input.style.border = "1px solid #e2e8f0";
    input.style.borderRadius = "8px";
    input.name = key;

    if (STATE.answers[key]) input.value = STATE.answers[key];

    input.addEventListener("input", (e) => {
      STATE.answers[key] = e.target.value;
    });

    UI.body.appendChild(input);
  }

  function renderText(q) {
    if (!UI.body) return;

    const key = qKey(q.id);

    const input = document.createElement("input");
    input.type = "text";
    input.className = "gi-input";
    input.style.width = "100%";
    input.style.padding = "12px";
    input.style.border = "1px solid #e2e8f0";
    input.style.borderRadius = "8px";
    input.name = key;

    if (STATE.answers[key]) input.value = STATE.answers[key];

    input.addEventListener("input", (e) => {
      STATE.answers[key] = e.target.value;
    });

    UI.body.appendChild(input);
  }

  // --- 8. NAVIGATION / VALIDATION ---
  function validateCurrent() {
    const q = getCurrentQuestion();
    if (!q) return false;

    if (q.type === "group") {
      const fields = q.fields || [];
      let ok = true;

      fields.forEach((f) => {
        const k = groupKey(q.id, f.name);
        if (!isNonEmpty(STATE.answers[k])) ok = false;
      });

      if (!ok) {
        alert("Please fill in all fields.");
        return false;
      }
      return true;
    }

    const k = qKey(q.id);
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
    const total = window.QUESTIONS.length;
    const current = STATE.currentStep + 1;
    const pct = Math.round((current / total) * 100);

    if (UI.progressCount) UI.progressCount.innerText = `${current} / ${total}`;
    if (UI.progressPercent) UI.progressPercent.innerText = `${pct}%`;
    if (UI.progressBar) UI.progressBar.style.width = `${pct}%`;
  }

  function updateSidebar() {
    if (!UI.pillarList) return;

    const q = getCurrentQuestion();
    if (!q) return;

    const currentPillar = q.pillar;
    const items = UI.pillarList.querySelectorAll("li");

    items.forEach((item, index) => {
      if (index === currentPillar) {
        item.classList.add("active");
        item.style.fontWeight = "bold";
        item.style.color = "#0056b3";
      } else {
        item.classList.remove("active");
        item.style.fontWeight = "normal";
        item.style.color = "";
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
    const raw = localStorage.getItem(CONFIG.storageKey);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw);

      // Minimal schema guard
      if (!parsed || typeof parsed !== "object") return;
      if (!parsed.answers || typeof parsed.answers !== "object") return;

      // IMPORTANT: accept previous saved schema versions too, but normalize
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

  // --- 10. PAYLOAD BUILDERS (V9) ---
  function buildQuestionsMap() {
    return window.QUESTIONS.map((q) => ({
      id: q.id,
      pillar_index: q.pillar,
      pillar: pillarNameByIndex(q.pillar),
      type: q.type,
      title: q.title,
      sub: q.sub || "",
      options: q.options || null,
      fields: q.fields ? q.fields.map((f) => ({ name: f.name, label: f.label })) : null
    }));
  }

  function buildFullReport(answersRaw) {
    const report = [];

    window.QUESTIONS.forEach((q) => {
      const pName = pillarNameByIndex(q.pillar);

      if (q.type === "group") {
        (q.fields || []).forEach((field) => {
          const k = groupKey(q.id, field.name);
          report.push({
            id: k,
            pillar: pName,
            pillar_index: q.pillar,
            question_id: q.id,
            question: `${q.title} - ${field.label}`,
            answer: answersRaw[k] ?? ""
          });
        });
        return;
      }

      const k = qKey(q.id);
      report.push({
        id: k,
        pillar: pName,
        pillar_index: q.pillar,
        question_id: q.id,
        question: q.title,
        answer: answersRaw[k] ?? ""
      });
    });

    return report;
  }

  // --- 11. LEGACY-FRIENDLY BUILDERS (customer/context/answers + scores) ---
  function buildLegacyCustomer(answersRaw) {
    // IMPORTANT: QUESTIONS v2.0 group(1) contains ONLY these 5 fields
    return {
      fullname: answersRaw["q1__fullname"] || "",
      role: answersRaw["q1__role"] || "",
      email: answersRaw["q1__email"] || "",
      company: answersRaw["q1__company"] || "",
      website: answersRaw["q1__website"] || ""
    };
  }

  function buildLegacyContext(answersRaw) {
    // Context groups (2..5) + Q6..Q25
    return {
      arr: answersRaw["q2__arr"] || "",
      growth_rate: answersRaw["q2__growth_rate"] || "",
      nrr: answersRaw["q2__nrr"] || "",
      gross_margin: answersRaw["q2__gross_margin"] || "",
      burn_multiple: answersRaw["q2__burn_multiple"] || "",

      sales_headcount: answersRaw["q3__sales_headcount"] || "",
      sdr_headcount: answersRaw["q3__sdr_headcount"] || "",
      marketing_headcount: answersRaw["q3__marketing_headcount"] || "",
      cs_headcount: answersRaw["q3__cs_headcount"] || "",
      revops_headcount: answersRaw["q3__revops_headcount"] || "",

      arr_target: answersRaw["q4__arr_target"] || "",
      quota_attainment: answersRaw["q4__quota_attainment"] || "",
      cac_payback: answersRaw["q4__cac_payback"] || "",
      ltv_cac: answersRaw["q4__ltv_cac"] || "",

      win_rate: answersRaw["q5__win_rate"] || "",
      sales_cycle: answersRaw["q5__sales_cycle"] || "",
      pipeline_coverage: answersRaw["q5__pipeline_coverage"] || "",
      churn_rate: answersRaw["q5__churn_rate"] || "",

      Q6: answersRaw["q6"] || "",
      Q7: answersRaw["q7"] || "",
      Q8: answersRaw["q8"] || "",
      Q9: answersRaw["q9"] || "",
      Q10: answersRaw["q10"] || "",
      Q11: answersRaw["q11"] || "",
      Q12: answersRaw["q12"] || "",
      Q13: answersRaw["q13"] || "",
      Q14: answersRaw["q14"] || "",
      Q15: answersRaw["q15"] || "",
      Q16: answersRaw["q16"] || "",
      Q17: answersRaw["q17"] || "",
      Q18: answersRaw["q18"] || "",
      Q19: answersRaw["q19"] || "",
      Q20: answersRaw["q20"] || "",
      Q21: answersRaw["q21"] || "",
      Q22: answersRaw["q22"] || "",
      Q23: answersRaw["q23"] || "",
      Q24: answersRaw["q24"] || "",
      Q25: answersRaw["q25"] || ""
    };
  }

  function buildLegacyAnswersQOnly(answersRaw) {
    // Only scored pillar answers in Q format (Q1001.. etc).
    // Excludes Context Q1..Q25 to keep Make clean.
    const out = {};
    Object.keys(answersRaw).forEach((k) => {
      if (!/^q\d+$/.test(k)) return;
      const idNum = Number(k.slice(1));
      if (!Number.isFinite(idNum)) return;
      if (idNum < 1000) return;
      out[`Q${idNum}`] = answersRaw[k];
    });
    return out;
  }

  function computePillarScores(answersRaw) {
    // Scores for pillars 1..12 (pillar_index in QUESTIONS)
    // Only uses 5-point scale questions (options length 5)
    const buckets = {}; // pillar_index -> {sum,count}

    window.QUESTIONS.forEach((q) => {
      if (typeof q.pillar !== "number" || q.pillar < 1 || q.pillar > 12) return;

      const opts = Array.isArray(q.options) ? q.options : [];
      if (opts.length !== 5) return;

      const key = qKey(q.id);
      const val = answersRaw[key];
      if (!isNonEmpty(val)) return;

      const score1to5 = optionsIndex1to5(q, val);
      if (!score1to5) return;

      if (!buckets[q.pillar]) buckets[q.pillar] = { sum: 0, count: 0 };
      buckets[q.pillar].sum += score1to5;
      buckets[q.pillar].count += 1;
    });

    const out = {};
    for (let p = 1; p <= 12; p++) {
      const b = buckets[p];
      out[`score_${pad2(p)}`] = b && b.count ? toScore100(b.sum / b.count) : null;
    }
    return out;
  }

  function buildQuestionMapLegacy() {
    // Legacy: field labels + Q{id} -> title
    const map = {};

    window.QUESTIONS.forEach((q) => {
      if (q.type === "group" && Array.isArray(q.fields)) {
        q.fields.forEach((f) => {
          map[f.name] = f.label;
        });
        return;
      }
      map[`Q${q.id}`] = q.title;
    });

    return map;
  }

  // --- 12. SUBMISSION ---
  async function submitData(isTest = false) {
    const answersRaw = STATE.answers || {};
    const questionsMap = buildQuestionsMap();

    // V9 deterministic report
    let fullReport = buildFullReport(answersRaw);

    // message
    let message = isTest ? "Test Submission" : "Official Submission";
    if (Object.keys(answersRaw).length === 0) {
      message = "⚠️ TEST DATA (Input was empty)";
      fullReport = [
        {
          id: "test_q1",
          pillar: "Test",
          pillar_index: -1,
          question_id: "test_q1",
          question: "This is a connection test (no real input found)",
          answer: "Success"
        }
      ];
    }

    // Legacy clean blocks
    const customer = buildLegacyCustomer(answersRaw);
    const context = buildLegacyContext(answersRaw);

    // answers: Q1001.. + score_01..score_12
    const answersQ = buildLegacyAnswersQOnly(answersRaw);
    const scores = computePillarScores(answersRaw);
    const answers = Object.assign({}, answersQ, scores);

    const payload = {
      // -------- V9 header --------
      metadata: {
        timestamp: new Date().toISOString(),
        schema_version: CONFIG.schemaVersion,
        questions_count: window.QUESTIONS.length,
        source: `Engine v${CONFIG.schemaVersion}`,
        is_test: !!isTest
      },
      message: message,

      // -------- V9 debug --------
      answers_raw: answersRaw,
      questions_map: questionsMap,
      full_report: fullReport,

      // -------- Legacy-friendly (fast in Make) --------
      customer: customer,
      context: context,
      answers: answers, // includes score_01..score_12
      question_map: buildQuestionMapLegacy()
    };

    console.log("🚀 Sending Payload to Make:", payload);

    const btn = isTest ? UI.testBtn : UI.submitBtn;
    setButtonState(btn, "Sending...", true);

    try {
      const res = await fetch(CONFIG.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Server responded with status: " + res.status);

      if (isTest) {
        const scoreLines = Object.keys(scores)
          .sort()
          .map((k) => `${k}: ${scores[k]}`)
          .join("\n");

        alert(
          `✅ TEST SUCCESVOL!\n\n` +
            `Verzonden: full_report(${fullReport.length})\n\n` +
            `Scores (answers.score_XX):\n${scoreLines}\n\n` +
            `Check Make.com: customer/context/answers + full_report/questions_map`
        );
      } else {
        STATE.completed = true;
        localStorage.removeItem(CONFIG.storageKey);
        window.location.href = "gtm-intelligence-thank-you.html";
      }
    } catch (e) {
      alert("❌ Fout bij versturen: " + e.message);
      console.error(e);
    } finally {
      setButtonState(btn, isTest ? "TEST SUBMIT" : "Submit Assessment", false);
    }
  }

  // --- 13. CLEAR / RESET / MANUAL SAVE ---
  function clearCurrentAnswer() {
    const q = getCurrentQuestion();
    if (!q) return;

    if (q.type === "group") {
      (q.fields || []).forEach((f) => {
        const k = groupKey(q.id, f.name);
        delete STATE.answers[k];
      });
    } else {
      delete STATE.answers[qKey(q.id)];
    }
    renderQuestion();
  }

  function resetAll() {
    if (!confirm("Reset everything?")) return;
    localStorage.removeItem(CONFIG.storageKey);
    location.reload();
  }

  function manualSave() {
    saveState();
    alert("✅ Saved.");
  }

  // --- 14. EVENT BINDING ---
  if (UI.nextBtn) UI.nextBtn.addEventListener("click", goNext);
  if (UI.prevBtn) UI.prevBtn.addEventListener("click", goPrev);

  if (UI.submitBtn) UI.submitBtn.addEventListener("click", () => submitData(false));
  if (UI.testBtn) {
    console.log("✅ Test Button Bound");
    UI.testBtn.addEventListener("click", (e) => {
      e.preventDefault();
      submitData(true);
    });
  }

  if (UI.clearBtn) UI.clearBtn.addEventListener("click", clearCurrentAnswer);
  if (UI.resetBtn) UI.resetBtn.addEventListener("click", resetAll);
  if (UI.saveBtn) UI.saveBtn.addEventListener("click", manualSave);

  // --- 15. START ---
  init();
})();
