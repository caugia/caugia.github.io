/* ===========================================================
   CAUGIA INTELLIGENCE ENGINE v9.7
   Changes vs v9.6:
   - Added show_if conditional visibility with skipped-question tracking
   - Excluded skipped questions from coverage denominator and submission payload
   =========================================================== */

(function () {
  "use strict";

  // --- 1. CONFIGURATION ---
const CONFIG = {
  webhookUrl: "https://hook.eu1.make.com/8vg0fkeflod05er5zuvmtfgcgqk17hnj",
  storageKey: "caugia_assessment_v9_state",
  autoSaveInterval: 1000,
  schemaVersion: "11.1"
};

  // --- 2. STATE ---
  let STATE = {
    schemaVersion: CONFIG.schemaVersion,
    currentStep: 0,
    answers: {},
    skipped: {},
    completed: false
  };

  // --- 3. DOM ELEMENTS ---
  const UI = {
    kicker:          document.getElementById("gi-question-kicker"),
    title:           document.getElementById("gi-question-title"),
    sub:             document.getElementById("gi-question-sub"),
    body:            document.getElementById("gi-question-body"),

    pillarList:      document.getElementById("gi-left-pillar-list"),
    progressCount:   document.getElementById("gi-progress-count"),
    progressPercent: document.getElementById("gi-progress-percent"),
    progressBar:     document.getElementById("gi-progress-bar"),

    prevBtn:         document.getElementById("gi-prev-btn"),
    nextBtn:         document.getElementById("gi-next-btn"),
    finishBtn:       document.getElementById("gi-finish-btn"),   // separate Finish button if present in HTML
    submitBtn:       document.getElementById("gi-submit-btn"),

    clearBtn:        document.getElementById("gi-clear-btn"),
    saveBtn:         document.getElementById("gi-save-btn"),
    resetBtn:        document.getElementById("gi-reset-btn")
  };

  // Hide legacy submit button — submission handled via Finish flow
  if (UI.submitBtn) UI.submitBtn.style.display = "none";

  // --- 4. CONSTANTS / HELPERS ---
  const PILLAR_NAMES = [
    "Context",
    "GTM Strategy & Leadership",
    "Market Intelligence",
    "Product Marketing",
    "Demand Generation",
    "Sales Execution",
    "Customer Success & Expansion",
    "Revenue Operations & Systems",
    "Pricing & Packaging",
    "Product Readiness",
    "Data & Insights",
    "Enablement",
    "Alignment & Governance"
  ];

  const PILLAR_TO_GRIP = {
    1: "G", 2: "G", 3: "G",
    4: "I", 5: "I",
    6: "P",
    7: "I",
    8: "R", 9: "R",
    10: "P",
    11: "R",
    12: "P"
  };

  function pillarNameByIndex(i)         { return PILLAR_NAMES[i] || "Pillar " + i; }
  function qKey(qId)                    { return "q" + qId; }
  function groupKey(qId, fieldName)     { return "q" + qId + "__" + fieldName; }
  function multiRadioKey(qId, subKey)   { return "q" + qId + "__" + subKey; }
  function normalizePriority(v) {
    const s = String(v || "").trim().toLowerCase();
    if (s === "core") return "Core";
    if (s === "growth") return "Growth";
    if (s === "explore") return "Explore";
    if (s === "phase-out" || s === "phase out" || s === "phaseout") return "Phase-out";
    return String(v || "").trim();
  }
  function safeText(v)                  { return (v === null || v === undefined) ? "" : String(v); }
  function isNonEmpty(v)                { return safeText(v).trim().length > 0; }
  function getCurrentQuestion()         { return window.QUESTIONS && window.QUESTIONS[STATE.currentStep]; }
  function isLastQuestion()             { return STATE.currentStep === window.QUESTIONS.length - 1; }

  function setButtonState(btn, label, disabled) {
    if (!btn) return;
    btn.innerText = label;
    btn.disabled = !!disabled;
  }

  function scrollQuestionCardTop() {
    const card = document.getElementById("gi-question-card");
    if (card) card.scrollTop = 0;
  }

  function pad2(n)          { return String(n).padStart(2, "0"); }
  function clamp0to100(n)   { return !Number.isFinite(n) ? null : Math.max(0, Math.min(100, n)); }

  function toScore100(avg1to5) {
    if (!Number.isFinite(avg1to5)) return null;
    return clamp0to100(Math.round(((avg1to5 - 1) / 4) * 100));
  }

  function optionsIndex1to5(question, answerValue) {
    const opts = Array.isArray(question.options) ? question.options : [];
    if (opts.length !== 5) return null;
    const idx = opts.indexOf(answerValue);
    return idx === -1 ? null : idx + 1;
  }

  function normalizeAnswersRaw(raw) {
    const out = {};
    Object.keys(raw || {}).forEach((k) => {
      const v = raw[k];
      out[k] = typeof v === "string" ? v.trim() : v;
    });
    return out;
  }

  function shouldShowQuestion(q) {
    if (!q || !q.show_if) return true;

    const condition = q.show_if;
    const fieldToQKey = {
      gtm_motion: "q7__gtm_motion",
      target_segment: "q9__target_segment",
      operating_phase: "q11__operating_phase",
      product_complexity: "q15__product_complexity"
    };

    const answerKey = fieldToQKey[condition.field];
    const fieldValue = answerKey && STATE.answers && STATE.answers[answerKey]
      ? String(STATE.answers[answerKey]).toLowerCase()
      : "";

    if (!fieldValue) return true;

    if (Array.isArray(condition.contains_any)) {
      return condition.contains_any.some((v) => fieldValue.indexOf(String(v).toLowerCase()) >= 0);
    }

    if (Array.isArray(condition.not_contains)) {
      return !condition.not_contains.some((v) => fieldValue.indexOf(String(v).toLowerCase()) >= 0);
    }

    if (condition.not_equals) {
      return fieldValue.indexOf(String(condition.not_equals).toLowerCase()) < 0;
    }

    return true;
  }

  // --- 5. POPUPS ---

  // Confirmation popup before submitting
  function showConfirmPopup(onConfirm) {
    const overlay = document.createElement("div");
    overlay.style.cssText = [
      "position:fixed", "inset:0", "background:rgba(0,0,0,0.55)",
      "display:flex", "align-items:center", "justify-content:center",
      "z-index:9999", "font-family:inherit"
    ].join(";");

    const card = document.createElement("div");
    card.style.cssText = [
      "background:#fff", "border-radius:12px", "padding:36px 32px",
      "max-width:440px", "width:90%", "text-align:center",
      "box-shadow:0 20px 60px rgba(0,0,0,0.2)"
    ].join(";");

    const heading = document.createElement("h2");
    heading.innerText = "Ready to submit?";
    heading.style.cssText = "margin:0 0 12px;font-size:1.3rem;color:#0f172a;font-weight:700";

    const body = document.createElement("p");
    body.innerText = "You are about to submit your assessment. Once submitted, your answers cannot be changed.";
    body.style.cssText = "margin:0 0 28px;font-size:0.95rem;color:#475569;line-height:1.6";

    const btnRow = document.createElement("div");
    btnRow.style.cssText = "display:flex;gap:12px;justify-content:center";

    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = "Go back";
    cancelBtn.style.cssText = [
      "background:#f1f5f9", "color:#334155", "border:none",
      "border-radius:6px", "padding:12px 28px",
      "font-size:0.95rem", "font-weight:600", "cursor:pointer"
    ].join(";");
    cancelBtn.addEventListener("click", () => document.body.removeChild(overlay));

    const confirmBtn = document.createElement("button");
    confirmBtn.innerText = "Yes, submit";
    confirmBtn.style.cssText = [
      "background:#0056b3", "color:#fff", "border:none",
      "border-radius:6px", "padding:12px 28px",
      "font-size:0.95rem", "font-weight:600", "cursor:pointer"
    ].join(";");
    confirmBtn.addEventListener("click", () => {
      document.body.removeChild(overlay);
      onConfirm();
    });

    btnRow.appendChild(cancelBtn);
    btnRow.appendChild(confirmBtn);
    card.appendChild(heading);
    card.appendChild(body);
    card.appendChild(btnRow);
    overlay.appendChild(card);
    document.body.appendChild(overlay);
  }

  // Success popup after submission
  function showSuccessPopup() {
    const overlay = document.createElement("div");
    overlay.style.cssText = [
      "position:fixed", "inset:0", "background:rgba(0,0,0,0.55)",
      "display:flex", "align-items:center", "justify-content:center",
      "z-index:9999", "font-family:inherit"
    ].join(";");

    const card = document.createElement("div");
    card.style.cssText = [
      "background:#fff", "border-radius:12px", "padding:40px 36px",
      "max-width:480px", "width:90%", "text-align:center",
      "box-shadow:0 20px 60px rgba(0,0,0,0.2)"
    ].join(";");

    const icon = document.createElement("div");
    icon.style.cssText = [
      "width:64px", "height:64px", "border-radius:50%",
      "background:#0056b3", "display:flex", "align-items:center",
      "justify-content:center", "margin:0 auto 24px"
    ].join(";");
    icon.innerHTML = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

    const heading = document.createElement("h2");
    heading.innerText = "Assessment submitted";
    heading.style.cssText = "margin:0 0 12px;font-size:1.4rem;color:#0f172a;font-weight:700";

    const body = document.createElement("p");
    body.innerText = "Thank you. Your GTM Intelligence Report will be delivered to your email address within a few minutes.";
    body.style.cssText = "margin:0 0 28px;font-size:0.97rem;color:#475569;line-height:1.6";

    const closeBtn = document.createElement("button");
    closeBtn.innerText = "Close";
    closeBtn.style.cssText = [
      "background:#0056b3", "color:#fff", "border:none",
      "border-radius:6px", "padding:12px 32px",
      "font-size:0.95rem", "font-weight:600", "cursor:pointer"
    ].join(";");
    closeBtn.addEventListener("click", () => document.body.removeChild(overlay));

    card.appendChild(icon);
    card.appendChild(heading);
    card.appendChild(body);
    card.appendChild(closeBtn);
    overlay.appendChild(card);
    document.body.appendChild(overlay);
  }

  // --- 6. INITIALIZATION ---
  function init() {
    if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS) || window.QUESTIONS.length === 0) {
      console.error("QUESTIONS.js not loaded or empty.");
      if (UI.title) UI.title.innerText = "Error: Questions File Missing";
      return;
    }

    loadState();

    if (typeof STATE.currentStep !== "number" || STATE.currentStep < 0) STATE.currentStep = 0;
    if (STATE.currentStep > window.QUESTIONS.length - 1) STATE.currentStep = window.QUESTIONS.length - 1;

    console.log("Engine v" + CONFIG.schemaVersion + " started. " + window.QUESTIONS.length + " questions loaded.");
    renderQuestion();
    updateSidebar();

    setInterval(saveState, CONFIG.autoSaveInterval);
  }

  // --- 7. RENDER LOGIC ---
  function renderQuestion() {
    let q = getCurrentQuestion();
    if (!q) return;

    STATE.skipped = STATE.skipped || {};

    while (q && !shouldShowQuestion(q)) {
      STATE.skipped[q.id] = true;
      if (isLastQuestion()) return;
      STATE.currentStep++;
      q = getCurrentQuestion();
    }

    if (!q) return;

    if (UI.kicker) UI.kicker.innerText = safeText(pillarNameByIndex(q.pillar)).toUpperCase();
    if (UI.title)  UI.title.innerText  = safeText(q.title);
    if (UI.sub)    UI.sub.innerText    = safeText(q.subtitle || q.sub || "");
    if (UI.body)   UI.body.innerHTML   = "";

    switch (q.type) {
      case "group":       renderGroup(q);      break;
      case "multi_radio": renderMultiRadio(q); break;
      case "radio":
      case "scale":       renderRadio(q);      break;
      case "textarea":    renderTextarea(q);   break;
      case "text":        renderText(q);       break;
      default:
        if (UI.body) UI.body.innerHTML = "<p style='color:red'>Unknown type: " + safeText(q.type) + "</p>";
    }

    updateNavState();
    updateProgress();
    updateSidebar();
  }

  // --- 8. INPUT BUILDERS ---
  function renderGroup(q) {
    if (!UI.body) return;
    if (q.subtitle) {
      const sub = document.createElement("p");
      sub.innerText = safeText(q.subtitle);
      sub.style.cssText = "font-size:0.85rem;color:#64748b;margin:0 0 16px 0;line-height:1.5;";
      UI.body.appendChild(sub);
    }
    const grid = document.createElement("div");
    grid.className = "gi-group-grid";
    grid.style.cssText = "display:grid;grid-template-columns:" + (window.innerWidth < 768 ? "1fr" : "1fr 1fr") + ";gap:20px";

    (q.fields || []).forEach((f) => {
      const wrapper = document.createElement("div");
      const label = document.createElement("label");
      label.innerText = safeText(f.label);
      label.style.cssText = "display:block;font-weight:600;margin-bottom:6px;font-size:0.9rem";

      const input = document.createElement("input");
      input.type = "text";
      input.className = "gi-input";
      input.style.cssText = "width:100%;padding:10px;border:1px solid #e2e8f0;border-radius:6px";

      const k = groupKey(q.id, f.name);
      input.name = k;
      if (STATE.answers[k]) input.value = STATE.answers[k];
      input.addEventListener("input", (e) => { STATE.answers[k] = e.target.value; });

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
    wrapper.style.cssText = "display:grid;grid-template-columns:" + (window.innerWidth < 768 ? "1fr" : "1fr 1fr") + ";gap:12px";

    const key = qKey(q.id);

    (q.options || []).forEach((opt) => {
      const label = document.createElement("label");
      label.className = "gi-option-card";
      label.style.cssText = "display:flex;align-items:center;padding:14px;border:1px solid #e2e8f0;border-radius:8px;cursor:pointer;background:#fff";

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

  function renderMultiRadio(q) {
    if (!UI.body) return;

    if (q.subtitle) {
      const sub = document.createElement("p");
      sub.innerText = safeText(q.subtitle);
      sub.style.cssText = "font-size:0.85rem;color:#64748b;margin:0 0 20px 0;line-height:1.5;";
      UI.body.appendChild(sub);
    }

    (q.questions || []).forEach((subQ) => {
      const block = document.createElement("div");
      block.style.cssText = "margin-bottom:28px;";

      const lbl = document.createElement("p");
      lbl.innerText = safeText(subQ.label);
      lbl.style.cssText = "font-weight:600;font-size:0.95rem;margin:0 0 12px 0;color:#1e293b;";
      block.appendChild(lbl);

      const grid = document.createElement("div");
      grid.style.cssText = "display:grid;grid-template-columns:" +
        (window.innerWidth < 768 ? "1fr" : "1fr 1fr") + ";gap:10px;";

      const storeKey = multiRadioKey(q.id, subQ.key);

      (subQ.options || []).forEach((opt) => {
        const label = document.createElement("label");
        label.className = "gi-option-card";
        label.style.cssText =
          "display:flex;align-items:center;padding:12px 14px;border:1px solid #e2e8f0;" +
          "border-radius:8px;cursor:pointer;background:#fff;font-size:0.9rem;";

        const input = document.createElement("input");
        input.type  = "radio";
        input.name  = storeKey;
        input.value = opt;
        input.style.marginRight = "10px";
        input.style.flexShrink  = "0";

        if (STATE.answers[storeKey] === opt) {
          input.checked = true;
          label.style.borderColor     = "#0056b3";
          label.style.backgroundColor = "#eff6ff";
        }

        input.addEventListener("change", () => {
          STATE.answers[storeKey] = opt;
          if (UI.body) UI.body.innerHTML = "";
          renderMultiRadio(q);
        });

        label.appendChild(input);
        label.appendChild(document.createTextNode(opt));
        grid.appendChild(label);
      });

      block.appendChild(grid);
      UI.body.appendChild(block);
    });
  }

  function renderTextarea(q) {
    if (!UI.body) return;
    const key = qKey(q.id);
    const input = document.createElement("textarea");
    input.className = "gi-textarea";
    input.style.cssText = "width:100%;min-height:120px;padding:12px;border:1px solid #e2e8f0;border-radius:8px";
    input.name = key;
    if (STATE.answers[key]) input.value = STATE.answers[key];
    input.addEventListener("input", (e) => { STATE.answers[key] = e.target.value; });
    UI.body.appendChild(input);
  }

  function renderText(q) {
    if (!UI.body) return;
    const key = qKey(q.id);
    const input = document.createElement("input");
    input.type = "text";
    input.className = "gi-input";
    input.style.cssText = "width:100%;padding:12px;border:1px solid #e2e8f0;border-radius:8px";
    input.name = key;
    if (STATE.answers[key]) input.value = STATE.answers[key];
    input.addEventListener("input", (e) => { STATE.answers[key] = e.target.value; });
    UI.body.appendChild(input);
  }

  // --- 9. NAVIGATION / VALIDATION ---
  function validateCurrent() {
    const q = getCurrentQuestion();
    if (!q) return false;
    if (STATE.skipped && STATE.skipped[q.id]) return true;

    if (q.type === "group") {
      const fields = q.fields || [];
      const hasRequiredFlags = fields.some((f) =>
        Object.prototype.hasOwnProperty.call(f, "required")
      );
      const requiredFields = hasRequiredFlags
        ? fields.filter((f) => !!f.required)
        : fields;
      const missing = requiredFields.some(
        (f) => !isNonEmpty(STATE.answers[groupKey(q.id, f.name)])
      );
      if (missing) { alert("Please fill in all required fields."); return false; }
      return true;
    }

    if (q.type === "multi_radio") {
      const unanswered = (q.questions || []).filter((subQ) => {
        const k = multiRadioKey(q.id, subQ.key);
        return !isNonEmpty(STATE.answers[k]);
      });
      if (unanswered.length > 0) {
        alert("Please answer all questions on this screen.");
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
    // Never auto-submit — Next always moves forward one step
    // Finish button handles final submission separately
    if (!isLastQuestion()) {
      STATE.currentStep++;
      renderQuestion();
      scrollQuestionCardTop();
    }
    // On the last question, Next does nothing (Finish button is shown instead)
  }

  function goPrev() {
    if (STATE.currentStep > 0) {
      STATE.currentStep--;
      renderQuestion();
      scrollQuestionCardTop();
    }
  }

  function onFinishClick() {
    if (!validateCurrent()) return;
    showConfirmPopup(() => submitData());
  }

  function updateNavState() {
    const last = isLastQuestion();

    // Prev button
    if (UI.prevBtn) UI.prevBtn.style.display = STATE.currentStep === 0 ? "none" : "inline-block";

    // Next button: visible and labeled "Next" on all steps except the last
    if (UI.nextBtn) {
      UI.nextBtn.style.display = last ? "none" : "inline-block";
      UI.nextBtn.innerText = "Next";
    }

    // Finish button: only visible on the last step
    // If a dedicated gi-finish-btn exists in HTML, use it.
    // Otherwise dynamically create/show one adjacent to Next.
    if (UI.finishBtn) {
      UI.finishBtn.style.display = last ? "inline-block" : "none";
    } else {
      // Manage a dynamically injected finish button
      let dynFinish = document.getElementById("gi-dynamic-finish-btn");
      if (last) {
        if (!dynFinish) {
          dynFinish = document.createElement("button");
          dynFinish.id = "gi-dynamic-finish-btn";
          dynFinish.innerText = "Finish";
          // Copy styling from nextBtn if available
          if (UI.nextBtn) {
            dynFinish.className = UI.nextBtn.className;
            dynFinish.style.cssText = UI.nextBtn.style.cssText;
          } else {
            dynFinish.style.cssText = [
              "background:#0056b3", "color:#fff", "border:none",
              "border-radius:6px", "padding:12px 28px",
              "font-size:0.95rem", "font-weight:600", "cursor:pointer"
            ].join(";");
          }
          dynFinish.addEventListener("click", onFinishClick);
          // Insert after nextBtn or at end of its parent
          if (UI.nextBtn && UI.nextBtn.parentNode) {
            UI.nextBtn.parentNode.insertBefore(dynFinish, UI.nextBtn.nextSibling);
          } else if (UI.prevBtn && UI.prevBtn.parentNode) {
            UI.prevBtn.parentNode.appendChild(dynFinish);
          }
        }
        dynFinish.style.display = "inline-block";
      } else {
        if (dynFinish) dynFinish.style.display = "none";
      }
    }
  }

  function updateProgress() {
    const total   = window.QUESTIONS.length;
    const current = STATE.currentStep + 1;
    const pct     = Math.round((current / total) * 100);

    if (UI.progressCount)   UI.progressCount.innerText   = current + " / " + total;
    if (UI.progressPercent) UI.progressPercent.innerText = pct + "%";
    if (UI.progressBar)     UI.progressBar.style.width   = pct + "%";
  }

  // --- 10. SIDEBAR ---
  // Works whether sidebar items use data-p="N" or rely on DOM index.
  // Pillar 0 = "Context" = index 0 in the list.
  function updateSidebar() {
    if (!UI.pillarList) return;
    const q = getCurrentQuestion();
    if (!q) return;

    const currentPillar = Number(q.pillar);
    const items = UI.pillarList.querySelectorAll("li");

    items.forEach((item, index) => {
      const dataP = item.getAttribute("data-p");
      // If data-p is present use it; otherwise treat DOM index as pillar index
      const itemPillar = (dataP !== null && dataP !== "") ? Number(dataP) : index;
      const active = itemPillar === currentPillar;

      item.classList.toggle("active", active);
      item.style.fontWeight = active ? "bold"    : "normal";
      item.style.color      = active ? "#0056b3" : "";
    });
  }

  // --- 11. PERSISTENCE ---
  function saveState() {
    if (STATE.completed) return;
    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(STATE)); }
    catch (e) { console.warn("Could not save state:", e); }
  }

  function loadState() {
    const raw = localStorage.getItem(CONFIG.storageKey);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return;
      if (!parsed.answers || typeof parsed.answers !== "object") return;
      // No schema version check: always restore saved answers so
      // Ctrl+R and engine updates never wipe the user's progress.
      STATE = {
        schemaVersion: CONFIG.schemaVersion,
        currentStep:   typeof parsed.currentStep === "number" ? parsed.currentStep : 0,
        answers:       parsed.answers || {},
        skipped:       parsed.skipped || {},
        completed:     !!parsed.completed
      };
    } catch (e) { console.log("State corrupted, resetting."); }
  }

  // --- 12. PAYLOAD BUILDERS ---
  function buildQuestionsMap() {
    return window.QUESTIONS.map((q) => ({
      id:           q.id,
      pillar_index: q.pillar,
      pillar:       pillarNameByIndex(q.pillar),
      type:         q.type,
      title:        q.title,
      sub:          q.sub || "",
      options:      q.options || null,
      fields:       q.fields ? q.fields.map((f) => ({ name: f.name, label: f.label })) : null,
      questions:    q.questions ? q.questions.map((sq) => ({ key: sq.key, label: sq.label, options: sq.options || [] })) : null
    }));
  }

  function buildFullReport(answersRaw) {
    const report = [];
    const skipped = STATE.skipped || {};

    window.QUESTIONS.forEach((q) => {
      const pName = pillarNameByIndex(q.pillar);

      if (q.type === "group") {
        (q.fields || []).forEach((field) => {
          const k = groupKey(q.id, field.name);
          report.push({
            id: k, pillar: pName, pillar_index: q.pillar,
            question_id: q.id,
            question: q.title + " - " + field.label,
            answer: answersRaw[k] ?? ""
          });
        });
        return;
      }

      if (q.type === "multi_radio") {
        (q.questions || []).forEach((sq) => {
          const k = multiRadioKey(q.id, sq.key);
          report.push({
            id: k, pillar: pName, pillar_index: q.pillar,
            question_id: q.id,
            question: q.title + " - " + sq.label,
            answer: answersRaw[k] ?? ""
          });
        });
        return;
      }

      if (skipped[q.id]) {
        const k = qKey(q.id);
        report.push({
          id: k, pillar: pName, pillar_index: q.pillar,
          question_id: q.id,
          question: q.title,
          answer: null,
          skipped: true
        });
        return;
      }

      const k = qKey(q.id);
      report.push({
        id: k, pillar: pName, pillar_index: q.pillar,
        question_id: q.id,
        question: q.title,
        answer: answersRaw[k] ?? ""
      });
    });

    return report;
  }

  function buildCoverage(answersRaw) {
    let total = 0, answered = 0;
    const missing = [];
    const skipped = STATE.skipped || {};

    window.QUESTIONS.forEach((q) => {
      if (skipped[q.id]) return;

      if (q.type === "group") {
        (q.fields || []).forEach((f) => {
          total++;
          const k = groupKey(q.id, f.name);
          if (isNonEmpty(answersRaw[k])) answered++; else missing.push(k);
        });
        return;
      }

      if (q.type === "multi_radio") {
        (q.questions || []).forEach((subQ) => {
          total++;
          const k = multiRadioKey(q.id, subQ.key);
          if (isNonEmpty(answersRaw[k])) answered++; else missing.push(k);
        });
        return;
      }

      total++;
      const k = qKey(q.id);
      if (isNonEmpty(answersRaw[k])) answered++; else missing.push(k);
    });

    return {
      total_questions:    total,
      answered_questions: answered,
      completion_rate:    total ? Math.round((answered / total) * 100) : 0,
      missing_keys:       missing.slice(0, 250)
    };
  }

  // v4.5 schema — naam "legacy" is transitional, bevat nieuwe P0 structuur
  // TODO na GAS-patch: rename naar buildCustomerContext()
  function buildLegacyCustomer(answersRaw) {
    return {
      fullname:         answersRaw["q1__fullname"] || "",
      role:             answersRaw["q1__role"] || "",
      email:            answersRaw["q1__email"] || "",
      company:          answersRaw["q1__company"] || "",
      industry:         answersRaw["q1__industry"] || "",
      total_employees:  answersRaw["q1__total_employees"] || "",
      year_founded:     answersRaw["q1__year_founded"] || "",
      hq_region:        answersRaw["q1__hq_region"] || "",
      active_countries: answersRaw["q1__active_countries"] || ""
    };
  }

  // v4.5 schema — naam "legacy" is transitional, bevat volledige nieuwe P0 context
  // TODO na GAS-patch: rename naar buildP0Context()
  function buildLegacyContext(answersRaw) {
    return {

      /* ── Q2: Core SaaS metrics ── */
      arr:               answersRaw["q2__arr"] || "",
      growth_rate:       answersRaw["q2__growth_rate"] || "",
      nrr:               answersRaw["q2__nrr"] || "",
      grr:               answersRaw["q2__grr"] || "",
      gross_margin:      answersRaw["q2__gross_margin"] || "",
      monthly_burn:      answersRaw["q2__monthly_burn"] || "",
      cash_runway:       answersRaw["q2__cash_runway"] || "",
      number_of_clients: answersRaw["q2__number_of_clients"] || "",

      /* ── Q3: GTM team ── */
      sales_headcount:             answersRaw["q3__sales_headcount"] || "",
      sdr_headcount:               answersRaw["q3__sdr_headcount"] || "",
      marketing_headcount:         answersRaw["q3__marketing_headcount"] || "",
      cs_headcount:                answersRaw["q3__cs_headcount"] || "",
      revops_enablement_headcount: answersRaw["q3__revops_enablement_headcount"] || "",
      product_headcount:           answersRaw["q3__product_headcount"] || "",
      engineering_headcount:       answersRaw["q3__engineering_headcount"] || "",
      gtm_other_headcount:         answersRaw["q3__gtm_other_headcount"] || "",

      /* ── Q4: Targets & efficiency ── */
      arr_target:          answersRaw["q4__arr_target"] || "",
      quota_attainment:    answersRaw["q4__quota_attainment"] || "",
      cac_payback:         answersRaw["q4__cac_payback"] || "",
      magic_number:        answersRaw["q4__magic_number"] || "",
      avg_discount:        answersRaw["q4__avg_discount"] || "",
      expansion_pct:       answersRaw["q4__expansion_pct"] || "",
      avg_ramp_months:     answersRaw["q4__avg_ramp_months"] || "",
      sales_marketing_pct: answersRaw["q4__sales_marketing_pct"] || "",

      /* ── Q5: Funnel velocity ── */
      win_rate:              answersRaw["q5__win_rate"] || "",
      sales_cycle:           answersRaw["q5__sales_cycle"] || "",
      pipeline_coverage:     answersRaw["q5__pipeline_coverage"] || "",
      inbound_pipeline_pct:  answersRaw["q5__inbound_pipeline_pct"] || "",
      revenue_concentration: answersRaw["q5__revenue_concentration"] || "",
      top_competitors:       answersRaw["q5__top_competitors"] || "",
      primary_loss_reason:   answersRaw["q5__primary_loss_reason"] || "",
      primary_churn_reason:  answersRaw["q5__primary_churn_reason"] || "",

      /* ── Q6: Pipeline & product intelligence ── */
      discovery_to_demo:         answersRaw["q6__discovery_to_demo"] || "",
      demo_to_poc:               answersRaw["q6__demo_to_poc"] || "",
      poc_to_close:              answersRaw["q6__poc_to_close"] || "",
      technical_validation_loss: answersRaw["q6__technical_validation_loss"] || "",
      activation_30d:            answersRaw["q6__activation_30d"] || "",
      feature_penetration:       answersRaw["q6__feature_penetration"] || "",
      time_to_value:             answersRaw["q6__time_to_value"] || "",
      product_expansion_pct:     answersRaw["q6__product_expansion_pct"] || "",

      /* ── Q7 multi_radio: GTM motion + revenue model ── */
      gtm_motion:    answersRaw["q7__gtm_motion"] || "",
      revenue_model: answersRaw["q7__revenue_model"] || "",

      /* ── Q8: Churn & contract detail ── */
      burn_multiple:       answersRaw["q8__burn_multiple"] || "",
      logo_churn_rate:     answersRaw["q8__logo_churn_rate"] || "",
      revenue_churn_rate:  answersRaw["q8__revenue_churn_rate"] || "",
      avg_contract_length: answersRaw["q8__avg_contract_length"] || "",

      /* ── Q9 multi_radio: target segment + economic buyer ── */
      target_segment: answersRaw["q9__target_segment"] || "",
      economic_buyer: answersRaw["q9__economic_buyer"] || "",

      /* ── Q10: Efficiency & funnel detail ── */
      ltv_cac:               answersRaw["q10__ltv_cac"] || "",
      pct_deals_no_discount: answersRaw["q10__pct_deals_no_discount"] || "",
      outbound_pipeline_pct: answersRaw["q10__outbound_pipeline_pct"] || "",
      mql_to_sql_rate:       answersRaw["q10__mql_to_sql_rate"] || "",

      /* ── Q11 multi_radio: operating phase + funding stage ── */
      operating_phase: answersRaw["q11__operating_phase"] || "",
      funding_stage:   answersRaw["q11__funding_stage"] || "",

      /* ── Q12: Team & geographic context ── */
      sales_leadership_headcount: answersRaw["q12__sales_leadership_headcount"] || "",
      active_countries:           answersRaw["q12__active_countries"] || "",

      /* ── Q13: Current performance vs goal ── */
      current_primary_metric:       answersRaw["q13__current_primary_metric"] || "",
      current_primary_metric_value: answersRaw["q13__current_primary_metric_value"] || "",
      current_primary_metric_goal:  answersRaw["q13__current_primary_metric_goal"] || "",
      leadership_bottleneck:        answersRaw["q13__leadership_bottleneck"] || "",

      /* ── Q14: Urgency ── */
      urgency: answersRaw["q14"] || "",

      /* ── Q15 multi_radio: product category + product complexity ── */
      product_category:   answersRaw["q15__product_category"] || "",
      product_complexity: answersRaw["q15__product_complexity"] || "",

      /* ── Q16: 12-month target state ── */
      goal_12m_primary_metric:   answersRaw["q16__goal_12m_primary_metric"] || "",
      goal_12m_primary_target:   answersRaw["q16__goal_12m_primary_target"] || "",
      goal_12m_secondary_metric: answersRaw["q16__goal_12m_secondary_metric"] || "",
      goal_12m_secondary_target: answersRaw["q16__goal_12m_secondary_target"] || "",

      /* ── Q17-Q19: Strategic context ── */
      strategic_focus: answersRaw["q17"] || "",
      primary_symptom: answersRaw["q18"] || "",
      perceived_cause: answersRaw["q19"] || "",

      /* ── Q20: 24-month target state ── */
      goal_24m_primary_metric:   answersRaw["q20__goal_24m_primary_metric"] || "",
      goal_24m_primary_target:   answersRaw["q20__goal_24m_primary_target"] || "",
      goal_24m_secondary_metric: answersRaw["q20__goal_24m_secondary_metric"] || "",
      goal_24m_secondary_target: answersRaw["q20__goal_24m_secondary_target"] || "",
      goal_24m_operating_model:  answersRaw["q20__goal_24m_operating_model"] || "",

      /* ── Q21: Segment count ── */
      segment_count: answersRaw["q21"] || "",

      /* ── Q22: Segment 1 ── */
      segment_1_name:     answersRaw["q22__segment_1_name"] || "",
      segment_1_arr_pct:  answersRaw["q22__segment_1_arr_pct"] || "",
      segment_1_acv:      answersRaw["q22__segment_1_acv"] || "",
      segment_1_win_rate: answersRaw["q22__segment_1_win_rate"] || "",
      segment_1_nrr:      answersRaw["q22__segment_1_nrr"] || "",
      segment_1_priority: normalizePriority(answersRaw["q22__segment_1_priority"]),

      /* ── Q23: Segment 2 ── */
      segment_2_name:     answersRaw["q23__segment_2_name"] || "",
      segment_2_arr_pct:  answersRaw["q23__segment_2_arr_pct"] || "",
      segment_2_acv:      answersRaw["q23__segment_2_acv"] || "",
      segment_2_win_rate: answersRaw["q23__segment_2_win_rate"] || "",
      segment_2_nrr:      answersRaw["q23__segment_2_nrr"] || "",
      segment_2_priority: normalizePriority(answersRaw["q23__segment_2_priority"]),

      /* ── Q24 multi_radio: market adoption + currency ── */
      market_adoption: answersRaw["q24__market_adoption"] || "",
      currency:        answersRaw["q24__currency"] || "",

      /* ── Q25: Segment 3 ── */
      segment_3_name:     answersRaw["q25__segment_3_name"] || "",
      segment_3_arr_pct:  answersRaw["q25__segment_3_arr_pct"] || "",
      segment_3_acv:      answersRaw["q25__segment_3_acv"] || "",
      segment_3_win_rate: answersRaw["q25__segment_3_win_rate"] || "",
      segment_3_nrr:      answersRaw["q25__segment_3_nrr"] || "",
      segment_3_priority: normalizePriority(answersRaw["q25__segment_3_priority"]),

      /* ── Structured sub-objects (voor GAS canonical) ── */
      goals: {
        current: {
          metric:     answersRaw["q13__current_primary_metric"] || "",
          value:      answersRaw["q13__current_primary_metric_value"] || "",
          target:     answersRaw["q13__current_primary_metric_goal"] || "",
          bottleneck: answersRaw["q13__leadership_bottleneck"] || "",
          urgency:    answersRaw["q14"] || ""
        },
        month_12: {
          primary_metric:   answersRaw["q16__goal_12m_primary_metric"] || "",
          primary_target:   answersRaw["q16__goal_12m_primary_target"] || "",
          secondary_metric: answersRaw["q16__goal_12m_secondary_metric"] || "",
          secondary_target: answersRaw["q16__goal_12m_secondary_target"] || "",
          strategic_focus:  answersRaw["q17"] || ""
        },
        month_24: {
          primary_metric:   answersRaw["q20__goal_24m_primary_metric"] || "",
          primary_target:   answersRaw["q20__goal_24m_primary_target"] || "",
          secondary_metric: answersRaw["q20__goal_24m_secondary_metric"] || "",
          secondary_target: answersRaw["q20__goal_24m_secondary_target"] || "",
          operating_model:  answersRaw["q20__goal_24m_operating_model"] || ""
        }
      },

      segments: [
        {
          name:     answersRaw["q22__segment_1_name"] || "",
          arr_pct:  answersRaw["q22__segment_1_arr_pct"] || "",
          acv:      answersRaw["q22__segment_1_acv"] || "",
          win_rate: answersRaw["q22__segment_1_win_rate"] || "",
          nrr:      answersRaw["q22__segment_1_nrr"] || "",
          priority: normalizePriority(answersRaw["q22__segment_1_priority"])
        },
        {
          name:     answersRaw["q23__segment_2_name"] || "",
          arr_pct:  answersRaw["q23__segment_2_arr_pct"] || "",
          acv:      answersRaw["q23__segment_2_acv"] || "",
          win_rate: answersRaw["q23__segment_2_win_rate"] || "",
          nrr:      answersRaw["q23__segment_2_nrr"] || "",
          priority: normalizePriority(answersRaw["q23__segment_2_priority"])
        },
        {
          name:     answersRaw["q25__segment_3_name"] || "",
          arr_pct:  answersRaw["q25__segment_3_arr_pct"] || "",
          acv:      answersRaw["q25__segment_3_acv"] || "",
          win_rate: answersRaw["q25__segment_3_win_rate"] || "",
          nrr:      answersRaw["q25__segment_3_nrr"] || "",
          priority: normalizePriority(answersRaw["q25__segment_3_priority"])
        }
      ],

      /* ── GAS backward-compat aliases (temporary until GAS is patched) ── */
      primary_buyer:         answersRaw["q9__economic_buyer"] || "",
      market_adoption_phase: answersRaw["q24__market_adoption"] || ""

    };
  }

  function buildLegacyAnswersQOnly(answersRaw) {
    const out = {};
    Object.keys(answersRaw).forEach((k) => {
      if (!/^q\d+$/.test(k)) return;
      const idNum = Number(k.slice(1));
      if (!Number.isFinite(idNum) || idNum < 1000) return;
      out["Q" + idNum] = answersRaw[k];
    });
    return out;
  }

  function computePillarScores(answersRaw) {
    const buckets = {};
    window.QUESTIONS.forEach((q) => {
      if (typeof q.pillar !== "number" || q.pillar < 1 || q.pillar > 12) return;
      const opts = Array.isArray(q.options) ? q.options : [];
      if (opts.length !== 5) return;
      const val = answersRaw[qKey(q.id)];
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
      out["score_" + pad2(p)] = b && b.count ? toScore100(b.sum / b.count) : null;
    }
    return out;
  }

  function computeOverallScore(scores) {
    const vals = [];
    for (let p = 1; p <= 12; p++) {
      const v = scores["score_" + pad2(p)];
      if (Number.isFinite(v)) vals.push(v);
    }
    if (!vals.length) return null;
    return clamp0to100(Math.round(vals.reduce((a, b) => a + b, 0) / vals.length));
  }

  function computeConfidenceRange(scores, coverage) {
    const scored = [];
    for (let p = 1; p <= 12; p++) {
      const v = scores["score_" + pad2(p)];
      if (Number.isFinite(v)) scored.push(v);
    }
    const pillarScoreCoverage = scored.length / 12;
    const completion = Number.isFinite(coverage && coverage.completion_rate) ? coverage.completion_rate / 100 : 0;
    const uncertainty = 1 - (0.6 * pillarScoreCoverage + 0.4 * completion);
    const range = Math.round(8 + uncertainty * 20);
    return {
      confidence_range: "±" + range,
      confidence_range_num: range,
      pillar_score_coverage_pct: Math.round(pillarScoreCoverage * 100)
    };
  }

  function computeGripScores(scores) {
    const buckets = { G: [], R: [], I: [], P: [] };
    for (let p = 1; p <= 12; p++) {
      const dim = PILLAR_TO_GRIP[p];
      const v = scores["score_" + pad2(p)];
      if (!dim || !Number.isFinite(v)) continue;
      buckets[dim].push(v);
    }
    function avgOrNull(arr) {
      if (!arr.length) return null;
      return clamp0to100(Math.round(arr.reduce((a, b) => a + b, 0) / arr.length));
    }
    return { G: avgOrNull(buckets.G), R: avgOrNull(buckets.R),
             I: avgOrNull(buckets.I), P: avgOrNull(buckets.P) };
  }

  function buildQuestionMapLegacy() {
    const map = {};

    window.QUESTIONS.forEach((q) => {

      if (q.type === "group" && Array.isArray(q.fields)) {
        q.fields.forEach((f) => {
          const kRaw    = groupKey(q.id, f.name);
          const kLegacy = "Q" + q.id + "__" + f.name;
          const label   = q.title + " - " + f.label;
          map[kRaw]    = label;
          map[kLegacy] = label;
        });
        return;
      }

      if (q.type === "multi_radio" && Array.isArray(q.questions)) {
        q.questions.forEach((sq) => {
          const kRaw    = multiRadioKey(q.id, sq.key);
          const kLegacy = "Q" + q.id + "__" + sq.key;
          const label   = q.title + " - " + sq.label;
          map[kRaw]    = label;
          map[kLegacy] = label;
        });
        return;
      }

      map[qKey(q.id)] = q.title;
      map["Q" + q.id] = q.title;
    });

    return map;
  }

    // --- 13. SUBMISSION ---
  async function submitData() {
    const answersRaw   = normalizeAnswersRaw(STATE.answers || {});
    const questionsMap = buildQuestionsMap();
    const fullReport   = buildFullReport(answersRaw);
    const coverage     = buildCoverage(answersRaw);
    const customer     = buildLegacyCustomer(answersRaw);
    const context      = buildLegacyContext(answersRaw);
    const answersQ     = buildLegacyAnswersQOnly(answersRaw);
    const pillarScores = computePillarScores(answersRaw);
    const overallScore = computeOverallScore(pillarScores);
    const gripScores   = computeGripScores(pillarScores);
    const confidence   = computeConfidenceRange(pillarScores, coverage);

    const answers = Object.assign({}, answersQ, pillarScores, {
      score_total: overallScore,
      grip_g: gripScores.G, grip_r: gripScores.R,
      grip_i: gripScores.I, grip_p: gripScores.P,
      confidence_range: confidence.confidence_range,
      confidence_range_num: confidence.confidence_range_num,
      completion_rate: coverage.completion_rate,
      total_questions: coverage.total_questions,
      answered_questions: coverage.answered_questions,
      pillar_score_coverage_pct: confidence.pillar_score_coverage_pct
    });

    const payload = {
      metadata: {
        timestamp: new Date().toISOString(),
        schema_version: CONFIG.schemaVersion,
        questions_count: window.QUESTIONS.length,
        source: "Engine v" + CONFIG.schemaVersion,
        is_test: false
      },
      message: "Official Submission",
      answers_raw: answersRaw,
      questions_map: questionsMap,
      full_report: fullReport,
      coverage: coverage,
      grip_scores: gripScores,
      pillar_scores: pillarScores,
      overall_score: overallScore,
      scoring: {
        pillar_scores: pillarScores,
        overall_score: overallScore,
        confidence_range: confidence
      },
      customer: customer,
      context: context,
      segments: context.segments,
      goals: context.goals,
      skipped_questions: STATE.skipped || {},
      skipped_count: Object.keys(STATE.skipped || {}).length,
      answers: answers,
      question_map: buildQuestionMapLegacy()
    };

    console.log("Submitting to Make.com...");

    const finishEl = UI.finishBtn || document.getElementById("gi-dynamic-finish-btn");
    if (finishEl) {
      finishEl.innerText = "Submitting...";
      finishEl.disabled = true;
    }

    try {
      const res = await fetch(CONFIG.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Server responded with status: " + res.status);

      const text = await res.text();
      let result = {};
      try {
        result = JSON.parse(text);
      } catch (e) {
        result = {};
      }

      if (result.status === "error") {
        throw new Error(result.message || "Submission failed");
      }

      STATE.completed = true;
      localStorage.removeItem(CONFIG.storageKey);
      showSuccessPopup();

    } catch (e) {
      alert("Something went wrong while submitting. Please try again.\n\nError: " + e.message);
      console.error(e);
      if (finishEl) {
        finishEl.innerText = "Finish";
        finishEl.disabled = false;
      }
    }
  }

  // --- 14. CLEAR / RESET / MANUAL SAVE ---
  function clearCurrentAnswer() {
    const q = getCurrentQuestion();
    if (!q) return;
    if (q.type === "group") {
      (q.fields || []).forEach((f) => { delete STATE.answers[groupKey(q.id, f.name)]; });
    } else if (q.type === "multi_radio") {
      (q.questions || []).forEach((subQ) => {
        delete STATE.answers[multiRadioKey(q.id, subQ.key)];
      });
    } else {
      delete STATE.answers[qKey(q.id)];
    }
    renderQuestion();
  }

  function resetAll() {
    if (!confirm("Reset everything?")) return;
    STATE.completed = true;
    STATE.answers = {};
    STATE.currentStep = 0;
    localStorage.removeItem(CONFIG.storageKey);
    location.reload();
  }

  function manualSave() {
    saveState();
    alert("Saved.");
  }

  // --- 15. EVENT BINDING ---
  if (UI.nextBtn) UI.nextBtn.addEventListener("click", goNext);
  if (UI.prevBtn) UI.prevBtn.addEventListener("click", goPrev);
  if (UI.finishBtn) UI.finishBtn.addEventListener("click", onFinishClick);
  if (UI.clearBtn) UI.clearBtn.addEventListener("click", clearCurrentAnswer);
  if (UI.resetBtn) UI.resetBtn.addEventListener("click", resetAll);
  if (UI.saveBtn) UI.saveBtn.addEventListener("click", manualSave);

  // --- 16. START ---
  init();
})();
