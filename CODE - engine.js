/* ===========================================================
   CAUGIA INTELLIGENCE ENGINE v9.0 (DETERMINISTIC Q/A EDITION)
   - Single key standard: q{questionId} and q{questionId}__{fieldName}
   - Always builds full_report with ALL questions (even unanswered)
   - Sends: metadata, message, answers_raw, full_report, questions_map
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
      input.name = key; // unified naming
      input.value = opt;
      input.style.marginRight = "10px";

      if (STATE.answers[key] === opt) {
        input.checked = true;
        label.style.borderColor = "#0056b3";
        label.style.backgroundColor = "#eff6ff";
      }

      input.addEventListener("change", () => {
        STATE.answers[key] = opt;
        // Re-render to refresh selection styling
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
    // In your current design, scale behaves like radio options
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
    input.name = key; // unified naming

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
    input.name = key; // unified naming

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

    // For non-group
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

      // Adopt safe fields
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

  // --- 10. PAYLOAD BUILDERS ---
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

  // --- 11. SUBMISSION ---
  async function submitData(isTest = false) {
    const answersRaw = STATE.answers || {};
    const questionsMap = buildQuestionsMap();

    // Always build deterministically
    let fullReport = buildFullReport(answersRaw);

    // If truly empty (no keys) add a visible test entry (optional but keeps Make from weird empty logic)
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

    const payload = {
      metadata: {
        timestamp: new Date().toISOString(),
        schema_version: CONFIG.schemaVersion,
        questions_count: window.QUESTIONS.length,
        source: `Engine v${CONFIG.schemaVersion}`,
        is_test: !!isTest
      },
      message: message,

      // Raw storage object (for legacy or debugging)
      answers_raw: answersRaw,

      // Canonical map of what the questions are
      questions_map: questionsMap,

      // Canonical flattened answers (always includes all questions)
      full_report: fullReport
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
        alert(`✅ TEST SUCCESVOL!\n\nVerzonden: ${fullReport.length} items.\nCheck Make.com voor 'full_report' en 'questions_map'.`);
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

  // --- 12. CLEAR / RESET / MANUAL SAVE ---
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

  // --- 13. EVENT BINDING ---
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

  // --- 14. START ---
  init();
})();
