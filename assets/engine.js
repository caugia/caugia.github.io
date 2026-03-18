/* ===========================================================
   CAUGIA INTELLIGENCE ENGINE v9.4
   Changes vs v9.3:
   - Schema version check removed from loadState: answers always
     restored from localStorage regardless of engine version,
     so Ctrl+R / redeployment never wipes saved progress
   =========================================================== */

(function () {
  "use strict";

  // --- 1. CONFIGURATION ---
const CONFIG = {
  webhookUrl: "https://hook.eu1.make.com/8vg0fkeflod05er5zuvmtfgcgqk17hnj",
  storageKey: "caugia_assessment_v9_state",
  autoSaveInterval: 1000,
  schemaVersion: "10.0"
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
    const q = getCurrentQuestion();
    if (!q) return;

    if (UI.kicker) UI.kicker.innerText = safeText(pillarNameByIndex(q.pillar)).toUpperCase();
    if (UI.title)  UI.title.innerText  = safeText(q.title);
    if (UI.sub)    UI.sub.innerText    = safeText(q.sub || "");
    if (UI.body)   UI.body.innerHTML   = "";

    switch (q.type) {
      case "group":    renderGroup(q);    break;
      case "radio":
      case "scale":    renderRadio(q);    break;
      case "textarea": renderTextarea(q); break;
      case "text":     renderText(q);     break;
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

    if (q.type === "group") {
      const fields = q.fields || [];
      const hasRequiredFlags = fields.some((f) => Object.prototype.hasOwnProperty.call(f, "required"));
      const requiredFields = hasRequiredFlags ? fields.filter((f) => !!f.required) : fields;
      const missing = requiredFields.some((f) => !isNonEmpty(STATE.answers[groupKey(q.id, f.name)]));
      if (missing) { alert("Please fill in all required fields."); return false; }
      return true;
    }

    const k = qKey(q.id);
    if (!isNonEmpty(STATE.answers[k])) { alert("Please answer the question."); return false; }
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
        completed:     !!parsed.completed
      };
    } catch (e) { console.log("State corrupted, resetting."); }
  }

  // --- 12. PAYLOAD BUILDERS ---
  function buildQuestionsMap() {
    return window.QUESTIONS.map((q) => ({
      id: q.id, pillar_index: q.pillar, pillar: pillarNameByIndex(q.pillar),
      type: q.type, title: q.title, sub: q.sub || "",
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
          report.push({ id: k, pillar: pName, pillar_index: q.pillar, question_id: q.id,
            question: q.title + " - " + field.label, answer: answersRaw[k] ?? "" });
        });
        return;
      }
      const k = qKey(q.id);
      report.push({ id: k, pillar: pName, pillar_index: q.pillar, question_id: q.id,
        question: q.title, answer: answersRaw[k] ?? "" });
    });
    return report;
  }

  function buildCoverage(answersRaw) {
    let total = 0, answered = 0;
    const missing = [];
    window.QUESTIONS.forEach((q) => {
      if (q.type === "group") {
        (q.fields || []).forEach((f) => {
          total++;
          const k = groupKey(q.id, f.name);
          if (isNonEmpty(answersRaw[k])) answered++; else missing.push(k);
        });
        return;
      }
      total++;
      const k = qKey(q.id);
      if (isNonEmpty(answersRaw[k])) answered++; else missing.push(k);
    });
    return { total_questions: total, answered_questions: answered,
      completion_rate: total ? Math.round((answered / total) * 100) : 0,
      missing_keys: missing.slice(0, 250) };
  }

  function buildLegacyCustomer(answersRaw) {
    return {
      fullname: answersRaw["q1__fullname"] || "", role: answersRaw["q1__role"] || "",
      email: answersRaw["q1__email"] || "", company: answersRaw["q1__company"] || "",
      website: answersRaw["q1__website"] || "", total_employees: answersRaw["q1__total_employees"] || "",
      year_founded: answersRaw["q1__year_founded"] || "", hq_region: answersRaw["q1__hq_region"] || ""
    };
  }

  function buildLegacyContext(answersRaw) {
    return {
      arr: answersRaw["q2__arr"] || "", growth_rate: answersRaw["q2__growth_rate"] || "",
      nrr: answersRaw["q2__nrr"] || "", gross_margin: answersRaw["q2__gross_margin"] || "",
      monthly_burn: answersRaw["q2__monthly_burn"] || "", cash_runway: answersRaw["q2__cash_runway"] || "",
      pricing_model: answersRaw["q2__pricing_model"] || "", number_of_clients: answersRaw["q2__number_of_clients"] || "",

      sales_headcount: answersRaw["q3__sales_headcount"] || "",
      sales_leadership_headcount: answersRaw["q3__sales_leadership_headcount"] || "",
      sdr_headcount: answersRaw["q3__sdr_headcount"] || "",
      marketing_headcount: answersRaw["q3__marketing_headcount"] || "",
      cs_headcount: answersRaw["q3__cs_headcount"] || "",
      revops_enablement_headcount: answersRaw["q3__revops_enablement_headcount"] || "",
      product_headcount: answersRaw["q3__product_headcount"] || "",
      gtm_other_headcount: answersRaw["q3__gtm_other_headcount"] || "",

      arr_target: answersRaw["q4__arr_target"] || "", quota_attainment: answersRaw["q4__quota_attainment"] || "",
      cac_payback: answersRaw["q4__cac_payback"] || "", ltv_cac: answersRaw["q4__ltv_cac"] || "",
      avg_discount: answersRaw["q4__avg_discount"] || "", expansion_pct: answersRaw["q4__expansion_pct"] || "",
      opex_includes_payroll: answersRaw["q4__opex_includes_payroll"] || "",
      sales_marketing_pct: answersRaw["q4__sales_marketing_pct"] || "",

      win_rate: answersRaw["q5__win_rate"] || "", sales_cycle: answersRaw["q5__sales_cycle"] || "",
      pipeline_coverage: answersRaw["q5__pipeline_coverage"] || "", churn_rate: answersRaw["q5__churn_rate"] || "",
      top_competitors: answersRaw["q5__top_competitors"] || "",
      primary_loss_reason: answersRaw["q5__primary_loss_reason"] || "",
      revenue_concentration: answersRaw["q5__revenue_concentration"] || "",
      primary_churn_reason: answersRaw["q5__primary_churn_reason"] || "",

      // Pipeline & Product Intelligence (Q6 — new group)
      discovery_to_demo: answersRaw["q6__discovery_to_demo"] || "",
      demo_to_poc: answersRaw["q6__demo_to_poc"] || "",
      poc_to_close: answersRaw["q6__poc_to_close"] || "",
      technical_validation_loss: answersRaw["q6__technical_validation_loss"] || "",
      activation_30d: answersRaw["q6__activation_30d"] || "",
      feature_penetration: answersRaw["q6__feature_penetration"] || "",
      time_to_value: answersRaw["q6__time_to_value"] || "",
      product_expansion_pct: answersRaw["q6__product_expansion_pct"] || "",

      // MC context questions (hernummerd Q7–Q25)
      Q7: answersRaw["q7"] || "", Q8: answersRaw["q8"] || "",
      Q9: answersRaw["q9"] || "", Q10: answersRaw["q10"] || "",
      Q11: answersRaw["q11"] || "", Q12: answersRaw["q12"] || "",
      Q13: answersRaw["q13"] || "", Q14: answersRaw["q14"] || "",
      Q15: answersRaw["q15"] || "", Q16: answersRaw["q16"] || "",
      Q17: answersRaw["q17"] || "", Q18: answersRaw["q18"] || "",
      Q19: answersRaw["q19"] || "", Q20: answersRaw["q20"] || "",
      Q21: answersRaw["q21"] || "", Q22: answersRaw["q22"] || "",
      Q23: answersRaw["q23"] || "", Q24: answersRaw["q24"] || "",
      Q25: answersRaw["q25"] || ""
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
          map[kRaw] = label; map[kLegacy] = label;
        });
        return;
      }
      map[qKey(q.id)]    = q.title;
      map["Q" + q.id]    = q.title;
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
      answers_raw: answersRaw, questions_map: questionsMap,
      full_report: fullReport, coverage: coverage,
      grip_scores: gripScores, pillar_scores: pillarScores,
      overall_score: overallScore,
      scoring: { pillar_scores: pillarScores, overall_score: overallScore, confidence_range: confidence },
      customer: customer, context: context, answers: answers,
      question_map: buildQuestionMapLegacy()
    };

    console.log("Submitting to Make.com...");

    // Disable Finish button during network call
    const finishEl = UI.finishBtn || document.getElementById("gi-dynamic-finish-btn");
    if (finishEl) { finishEl.innerText = "Submitting..."; finishEl.disabled = true; }

    try {
      const res = await fetch(CONFIG.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Server responded with status: " + res.status);

      const raw = await res.text();
let result;

try {
  result = JSON.parse(raw);
} catch {
  throw new Error("Non JSON response from webhook: " + raw);
}

      // Make returns plain "Accepted" — parse defensively
const text = await res.text();
let result = {};
try { result = JSON.parse(text); } catch(e) { /* Make async ack */ }

// Any 2xx from Make = queued successfully
if (result.status === "error") {
  throw new Error(result.message || "GAS returned status=error");
}

STATE.completed = true;
localStorage.removeItem(CONFIG.storageKey);
showSuccessPopup();

    } catch (e) {
      alert("Something went wrong while submitting. Please try again.\n\nError: " + e.message);
      console.error(e);
      // Re-enable so user can retry
      if (finishEl) { finishEl.innerText = "Finish"; finishEl.disabled = false; }
    }
  }

  // --- 14. CLEAR / RESET / MANUAL SAVE ---
  function clearCurrentAnswer() {
    const q = getCurrentQuestion();
    if (!q) return;
    if (q.type === "group") {
      (q.fields || []).forEach((f) => { delete STATE.answers[groupKey(q.id, f.name)]; });
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
  if (UI.nextBtn)   UI.nextBtn.addEventListener("click", goNext);
  if (UI.prevBtn)   UI.prevBtn.addEventListener("click", goPrev);
  if (UI.finishBtn) UI.finishBtn.addEventListener("click", onFinishClick);
  if (UI.clearBtn)  UI.clearBtn.addEventListener("click", clearCurrentAnswer);
  if (UI.resetBtn)  UI.resetBtn.addEventListener("click", resetAll);
  if (UI.saveBtn)   UI.saveBtn.addEventListener("click", manualSave);

  // --- 16. START ---
  init();
})();
