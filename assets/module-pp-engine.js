/* ===========================================================
   CAUGIA PP MODULE ENGINE v1.3 (FULL)
   - Context step split into 2 pages (not part of 60 questions)
   - Page 1: 8 fields incl. language + currency dropdowns
   - Page 2: 8 fields incl. stage + motion + gtm_market + revenue_model dropdowns
   - Always scrollable form area (no hidden fields on smaller screens)
   - Deterministic q####_score for all scale questions
   - q####_raw for numeric/text questions
   - Explicit context payload: email/company/stage/motion/segment/arr/language/currency/gtm_market/revenue_model
   =========================================================== */

(function () {
  "use strict";

  // --- 1. CONFIGURATION ---
  const CONFIG = {
    webhookUrl: "https://hook.eu1.make.com/mhrdqx9we8ipbygkj0zo8vnydxnyn3yh",
    storageKey: "caugia_pp_v1_state",
    autoSaveInterval: 1000,
    schemaVersion: "pp-1.3"
  };

  const CONTEXT_SELECTORS = {
    email:          ["#gi-email", "#email", "input[name='email']"],
    company:        ["#gi-company", "#company", "input[name='company']"],
    grip_report_id: ["#gi-grip-report-id", "#grip_report_id", "input[name='grip_report_id']"],
    stage:          ["#gi-stage", "#stage", "select[name='stage']", "input[name='stage']"],
    motion:         ["#gi-motion", "#motion", "select[name='motion']", "input[name='motion']"],
    segment:        ["#gi-segment", "#segment", "select[name='segment']", "input[name='segment']"],
    arr:            ["#gi-arr", "#arr", "input[name='arr']"]
  };

  // --- 2. STATE ---
  let STATE = {
    schemaVersion: CONFIG.schemaVersion,
    currentStep: 0,
    contextPage: 1,
    context: {
      fullname:       "",
      role:           "",
      email:          "",
      company:        "",
      arr:            "",
      segment:        "",
      language:       "EN",
      currency:       "EUR (€)",
      industry:       "",
      total_employees:"",
      year_founded:   "",
      hq_region:      "",
      stage:          "",
      motion:         "",
      gtm_market:     "",
      revenue_model:  "",
      grip_report_id: ""
    },
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
    submitBtn:       document.getElementById("gi-submit-btn"),
    testBtn:         document.getElementById("gi-test-submit-btn"),
    clearBtn:        document.getElementById("gi-clear-btn"),
    saveBtn:         document.getElementById("gi-save-btn"),
    resetBtn:        document.getElementById("gi-reset-btn")
  };

  // --- 4. ENGINE NAMES ---
  const ENGINE_NAMES = {
    1: "Pricing Strategy & Architecture",
    2: "Packaging & Plan Design",
    3: "Revenue Model & Unit Economics",
    4: "Competitive Pricing & Market Position",
    5: "Monetization & Expansion Revenue",
    6: "Pricing Operations & Governance"
  };

  function engineNameByIndex(i) { return ENGINE_NAMES[i] || "Engine " + i; }
  function qKey(qId) { return "q" + qId; }
  function safeText(v) { if (v === null || v === undefined) return ""; return String(v); }
  function isNonEmpty(v) { return safeText(v).trim().length > 0; }
  function totalSteps() { return 1 + (window.QUESTIONS ? window.QUESTIONS.length : 0); }
  function totalContextPages() { return 2; }
  function isContextStep() { return STATE.currentStep === 0; }
  function currentQuestionIndex() { return STATE.currentStep - 1; }

  function getCurrentQuestion() {
    if (isContextStep()) return null;
    if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS)) return null;
    return window.QUESTIONS[currentQuestionIndex()] || null;
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

  function collectContextFallbacks() {
    var out = {
      email:          firstDomValue(CONTEXT_SELECTORS.email),
      company:        firstDomValue(CONTEXT_SELECTORS.company),
      grip_report_id: firstDomValue(CONTEXT_SELECTORS.grip_report_id),
      stage:          firstDomValue(CONTEXT_SELECTORS.stage),
      motion:         firstDomValue(CONTEXT_SELECTORS.motion),
      segment:        firstDomValue(CONTEXT_SELECTORS.segment),
      arr:            firstDomValue(CONTEXT_SELECTORS.arr)
    };
    if (!isNonEmpty(out.email))          out.email          = firstQueryParam(["email", "q1__email"]);
    if (!isNonEmpty(out.company))        out.company        = firstQueryParam(["company", "q1__company"]);
    if (!isNonEmpty(out.grip_report_id)) out.grip_report_id = firstQueryParam(["grip_report_id", "report_id"]);
    if (!isNonEmpty(out.stage))          out.stage          = firstQueryParam(["stage", "q7"]);
    if (!isNonEmpty(out.motion))         out.motion         = firstQueryParam(["motion", "q6"]);
    if (!isNonEmpty(out.segment))        out.segment        = firstQueryParam(["segment", "q8"]);
    if (!isNonEmpty(out.arr))            out.arr            = firstQueryParam(["arr", "q2__arr"]);

    var profile = safeJsonParse(localStorage.getItem("caugia_profile") || "") || {};
    if (!isNonEmpty(out.email)   && isNonEmpty(profile.email))   out.email   = String(profile.email).trim();
    if (!isNonEmpty(out.company) && isNonEmpty(profile.company)) out.company = String(profile.company).trim();
    if (!isNonEmpty(out.stage)   && isNonEmpty(profile.stage))   out.stage   = String(profile.stage).trim();
    if (!isNonEmpty(out.motion)  && isNonEmpty(profile.motion))  out.motion  = String(profile.motion).trim();
    if (!isNonEmpty(out.segment) && isNonEmpty(profile.segment)) out.segment = String(profile.segment).trim();
    if (!isNonEmpty(out.arr)     && isNonEmpty(profile.arr))     out.arr     = String(profile.arr).trim();
    return out;
  }

  // --- 5. INITIALIZATION ---
  function init() {
    if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS) || window.QUESTIONS.length === 0) {
      console.error("❌ QUESTIONS.js not loaded or empty.");
      if (UI.title) UI.title.innerText = "Error: Questions File Missing";
      return;
    }
    loadState();
    var fallbackCtx = collectContextFallbacks();
    Object.keys(fallbackCtx).forEach(function (k) {
      if (!isNonEmpty(STATE.context[k]) && isNonEmpty(fallbackCtx[k])) {
        STATE.context[k] = fallbackCtx[k];
      }
    });
    if (typeof STATE.currentStep !== "number" || STATE.currentStep < 0) STATE.currentStep = 0;
    if (STATE.currentStep > totalSteps() - 1) STATE.currentStep = totalSteps() - 1;
    if (typeof STATE.contextPage !== "number" || STATE.contextPage < 1) STATE.contextPage = 1;
    if (STATE.contextPage > totalContextPages()) STATE.contextPage = totalContextPages();
    console.log("PP Engine v" + CONFIG.schemaVersion + " started. " + window.QUESTIONS.length + " questions.");
    renderQuestion();
    updateSidebar();
    setInterval(saveState, CONFIG.autoSaveInterval);
  }

  // --- 6. RENDER LOGIC ---
  function renderQuestion() {
    if (isContextStep()) {
      renderContextForm();
      updateNavState();
      updateProgress();
      updateSidebar();
      return;
    }
    var q = getCurrentQuestion();
    if (!q) return;
    var engineName = engineNameByIndex(q.pillar);
    if (UI.kicker) UI.kicker.innerText = ("ENGINE " + q.pillar + ": " + engineName).toUpperCase();
    if (UI.title)  UI.title.innerText  = safeText(q.title);
    if (UI.sub)    UI.sub.innerText    = safeText(q.sub || "");
    if (UI.body) {
      UI.body.innerHTML = "";
    }
    switch (q.type) {
      case "scale": renderRadio(q); break;
      case "text":  renderText(q);  break;
      default:      renderRadio(q); break;
    }
    updateNavState();
    updateProgress();
    updateSidebar();
  }

  function renderContextForm() {
    if (!UI.kicker || !UI.title || !UI.sub || !UI.body) return;

    UI.kicker.innerText = "CONTEXT";
    UI.title.innerText  = "Tell us about you and your company";
    UI.sub.innerText    = "Context " + STATE.contextPage + " / " + totalContextPages() + " — not part of the 60-question score.";



    // ── FIELD DEFINITIONS ──────────────────────────────────────────────────
    // Each entry: [key, label, type, options?]
    // type: "text" | "email" | "number" | "select"
    // options: array of strings (select only)

    var p1 = STATE.contextPage === 1;
    var fields = p1 ? [
      ["fullname",  "Your full name",       "text"],
      ["role",      "Your role / job title","text"],
      ["email",     "Email address",        "email"],
      ["company",   "Company name",         "text"],
      ["arr",       "ARR",                  "number"],
      ["segment",   "Target segment",       "text"],
      ["language",  "Preferred language",   "select", ["EN","NL","FR","DE","ES","IT"]],
      ["currency",  "Preferred currency",   "select", ["EUR (€)","USD ($)","GBP (£)","AUD (A$)","CAD (C$)"]]
    ] : [
      ["industry",        "Industry",                "text"],
      ["total_employees", "Total employees (FTE)",   "number"],
      ["year_founded",    "Year founded (YYYY)",     "number"],
      ["hq_region",       "HQ region",               "text"],
      ["stage",           "Company stage",           "select", ["Seed","Series A","Series B","Series C+","Bootstrapped"]],
      ["motion",          "Primary GTM motion",      "select", ["Inbound","Outbound","PLG","Partner","Enterprise","Hybrid"]],
      ["gtm_market",      "Primary GTM market",      "select", ["Home market only","Regional (2–5 countries)","Global"]],
      ["revenue_model",   "Revenue model",           "select", ["Subscription (SaaS)","Usage-based","Hybrid","Services"]]
    ];

    // ── BUILD HTML ─────────────────────────────────────────────────────────
    var html = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">';

    for (var i = 0; i < fields.length; i++) {
      var key   = fields[i][0];
      var label = fields[i][1];
      var type  = fields[i][2];
      var opts  = fields[i][3] || [];

      var inputHtml;
      if (type === "select") {
        inputHtml = '<select id="ctx_' + key + '" class="gi-input" style="background:#fff;cursor:pointer;">'
          + '<option value="">Select...</option>'
          + opts.map(function(o) {
              return '<option value="' + o + '"'
                + (STATE.context[key] === o ? ' selected' : '')
                + '>' + o + '</option>';
            }).join('')
          + '</select>';
      } else {
        inputHtml = '<input id="ctx_' + key + '" type="' + type + '" class="gi-input" '
          + 'value="' + safeText(STATE.context[key]).replace(/"/g, '&quot;') + '" '
          + 'placeholder="">';
      }

      html += '<label style="display:flex;flex-direction:column;gap:6px;font-size:13px;color:#374151;font-weight:500;">'
        + label
        + inputHtml
        + '</label>';
    }

    html += '</div>';
    UI.body.innerHTML = html;

    // ── BIND CHANGE EVENTS ─────────────────────────────────────────────────
    fields.forEach(function(f) {
      var key = f[0];
      var el  = document.getElementById("ctx_" + key);
      if (!el) return;
      el.addEventListener("input",  function() { STATE.context[key] = el.value; });
      el.addEventListener("change", function() { STATE.context[key] = el.value; });
    });
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
      label.style.cssText = "display:flex;align-items:center;padding:14px;border:1px solid #e2e8f0;border-radius:8px;cursor:pointer;background:#fff;";
      var input = document.createElement("input");
      input.type  = "radio";
      input.name  = key;
      input.value = opt;
      input.style.marginRight = "10px";
      if (STATE.answers[key] === opt) {
        input.checked = true;
        label.style.borderColor     = "#0056b3";
        label.style.backgroundColor = "#eff6ff";
      }
      input.addEventListener("change", function() {
        STATE.answers[key] = opt;
        UI.body.innerHTML = "";
        renderRadio(q);
      });
      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      wrapper.appendChild(label);
    });

    if (q.has_na) {
      var naLabel = document.createElement("label");
      naLabel.style.cssText = "display:flex;align-items:center;padding:14px;border:1px solid #e2e8f0;border-radius:8px;cursor:pointer;background:#fafafa;font-style:italic;";
      var naInput = document.createElement("input");
      naInput.type  = "radio";
      naInput.name  = key;
      naInput.value = "N/A";
      naInput.style.marginRight = "10px";
      if (STATE.answers[key] === "N/A") {
        naInput.checked = true;
        naLabel.style.borderColor     = "#94a3b8";
        naLabel.style.backgroundColor = "#f1f5f9";
      }
      naInput.addEventListener("change", function() {
        STATE.answers[key] = "N/A";
        UI.body.innerHTML = "";
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
    var key   = qKey(q.id);
    var input = document.createElement("input");
    input.type        = "number";
    input.className   = "gi-input";
    input.style.cssText = "width:100%;max-width:320px;padding:12px;border:1px solid #e2e8f0;border-radius:8px;font-size:1.1rem;";
    input.name        = key;
    input.placeholder = "Enter a number";
    if (STATE.answers[key]) input.value = STATE.answers[key];
    input.addEventListener("input", function(e) { STATE.answers[key] = e.target.value; });
    UI.body.appendChild(input);

    if (q.has_na) {
      var naWrapper = document.createElement("div");
      naWrapper.style.marginTop = "16px";
      var naBtn = document.createElement("button");
      naBtn.className   = "gi-btn";
      naBtn.style.cssText = "font-size:0.85rem;font-style:italic;";
      naBtn.innerText   = "Not applicable to our stage";
      if (STATE.answers[key] === "N/A") {
        naBtn.style.borderColor     = "#94a3b8";
        naBtn.style.backgroundColor = "#f1f5f9";
        naBtn.style.fontWeight      = "600";
        input.value    = "";
        input.disabled = true;
      }
      naBtn.addEventListener("click", function() {
        if (STATE.answers[key] === "N/A") delete STATE.answers[key];
        else STATE.answers[key] = "N/A";
        UI.body.innerHTML = "";
        renderText(q);
      });
      naWrapper.appendChild(naBtn);
      UI.body.appendChild(naWrapper);
    }
  }

  // --- 8. NAVIGATION / VALIDATION ---
  function validateCurrent() {
    if (isContextStep()) {
      if (STATE.contextPage === 1) {
        if (!isNonEmpty(STATE.context.email) || !isNonEmpty(STATE.context.company)) {
          alert("Please fill at least Email and Company.");
          return false;
        }
      } else {
        if (!isNonEmpty(STATE.context.stage) || !isNonEmpty(STATE.context.motion) || !isNonEmpty(STATE.context.arr)) {
          alert("Please fill at least Stage, Motion and ARR.");
          return false;
        }
      }
      return true;
    }
    var q = getCurrentQuestion();
    if (!q) return false;
    if (!isNonEmpty(STATE.answers[qKey(q.id)])) {
      alert("Please answer the question.");
      return false;
    }
    return true;
  }

  function goNext() {
    if (!validateCurrent()) return;
    if (isContextStep()) {
      if (STATE.contextPage < totalContextPages()) {
        STATE.contextPage++;
        renderQuestion();
        scrollQuestionCardTop();
        return;
      }
      STATE.currentStep = 1;
      renderQuestion();
      scrollQuestionCardTop();
      return;
    }
    if (STATE.currentStep < totalSteps() - 1) {
      STATE.currentStep++;
      renderQuestion();
      scrollQuestionCardTop();
    } else {
      alert("Assessment complete. Use the Test Submit button to send.");
    }
  }

  function goPrev() {
    if (isContextStep()) {
      if (STATE.contextPage > 1) {
        STATE.contextPage--;
        renderQuestion();
        scrollQuestionCardTop();
      }
      return;
    }
    if (STATE.currentStep > 1) {
      STATE.currentStep--;
      renderQuestion();
      scrollQuestionCardTop();
    } else if (STATE.currentStep === 1) {
      STATE.currentStep  = 0;
      STATE.contextPage  = totalContextPages();
      renderQuestion();
      scrollQuestionCardTop();
    }
  }

  function updateNavState() {
    if (UI.prevBtn) {
      var hidePrev = isContextStep() && STATE.contextPage === 1;
      UI.prevBtn.style.display = hidePrev ? "none" : "inline-block";
    }
    if (UI.nextBtn) {
      if (isContextStep()) {
        UI.nextBtn.innerText = STATE.contextPage === 1 ? "Next (Context 2/2)" : "Start Assessment";
      } else {
        UI.nextBtn.innerText = STATE.currentStep === totalSteps() - 1 ? "Finish" : "Next";
      }
    }
  }

  function updateProgress() {
    var total    = window.QUESTIONS.length;
    var answered = 0;
    window.QUESTIONS.forEach(function(q) {
      if (isNonEmpty(STATE.answers[qKey(q.id)])) answered++;
    });
    var pct = total ? Math.round((answered / total) * 100) : 0;
    if (UI.progressCount)   UI.progressCount.innerText   = answered + " / " + total;
    if (UI.progressPercent) UI.progressPercent.innerText = pct + "%";
    if (UI.progressBar)     UI.progressBar.style.width   = pct + "%";
  }

  function updateSidebar() {
    if (!UI.pillarList) return;
    if (isContextStep()) {
      UI.pillarList.querySelectorAll("li").forEach(function(i) { i.classList.remove("active"); });
      return;
    }
    var q = getCurrentQuestion();
    if (!q) return;
    UI.pillarList.querySelectorAll("li").forEach(function(item) {
      var p = parseInt(item.getAttribute("data-p"), 10);
      if (p === q.pillar) item.classList.add("active");
      else item.classList.remove("active");
    });
  }

  // --- 9. PERSISTENCE ---
  function saveState() {
    if (STATE.completed) return;
    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(STATE)); }
    catch (e) { console.warn("⚠️ Could not save state:", e); }
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
        currentStep:   typeof parsed.currentStep === "number" ? parsed.currentStep : 0,
        contextPage:   typeof parsed.contextPage  === "number" ? parsed.contextPage  : 1,
        context: Object.assign({
          fullname: "", role: "", email: "", company: "",
          arr: "", segment: "", language: "EN", currency: "EUR (€)",
          industry: "", total_employees: "", year_founded: "", hq_region: "",
          stage: "", motion: "", gtm_market: "", revenue_model: "",
          grip_report_id: ""
        }, parsed.context || {}),
        answers:   parsed.answers || {},
        completed: !!parsed.completed
      };
    } catch (e) { console.log("State corrupted, resetting."); }
  }

  // --- 10. SCORING ---
  function computeEngineScores(answersRaw) {
    var buckets = {};
    window.QUESTIONS.forEach(function(q) {
      if (typeof q.pillar !== "number" || q.pillar < 1 || q.pillar > 6) return;
      var opts = Array.isArray(q.options) ? q.options : [];
      if (opts.length !== 5) return;
      var val = answersRaw[qKey(q.id)];
      if (!isNonEmpty(val) || val === "N/A") return;
      var score1to5 = optionsIndex1to5(q, val);
      if (!score1to5) return;
      if (!buckets[q.pillar]) buckets[q.pillar] = { sum: 0, count: 0 };
      buckets[q.pillar].sum   += score1to5;
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
    return clamp0to100(Math.round(vals.reduce(function(a, b) { return a + b; }, 0) / vals.length));
  }

  function computeGripScores(answersRaw) {
    var buckets = { G: [], R: [], I: [], P: [] };
    window.QUESTIONS.forEach(function(q) {
      if (!q.grip || !buckets[q.grip]) return;
      var opts = Array.isArray(q.options) ? q.options : [];
      if (opts.length !== 5) return;
      var val = answersRaw[qKey(q.id)];
      if (!isNonEmpty(val) || val === "N/A") return;
      var s = optionsIndex1to5(q, val);
      if (!s) return;
      buckets[q.grip].push(toScore100(s));
    });
    function avg(arr) {
      if (!arr.length) return null;
      return clamp0to100(Math.round(arr.reduce(function(a, b) { return a + b; }, 0) / arr.length));
    }
    return { G: avg(buckets.G), R: avg(buckets.R), I: avg(buckets.I), P: avg(buckets.P) };
  }

  function buildCoverage(answersRaw) {
    var total = 0, answered = 0, missing = [];
    window.QUESTIONS.forEach(function(q) {
      total++;
      var k = qKey(q.id);
      if (isNonEmpty(answersRaw[k])) answered++;
      else missing.push(k);
    });
    return {
      total_questions:    total,
      answered_questions: answered,
      completion_rate:    total ? Math.round((answered / total) * 100) : 0,
      missing_keys:       missing.slice(0, 100)
    };
  }

  function buildAnswersForGas(answersRaw) {
    var out = {};
    window.QUESTIONS.forEach(function(q) {
      var key = qKey(q.id);
      var val = answersRaw[key];
      out[key] = isNonEmpty(val) ? String(val) : "";
      var opts = Array.isArray(q.options) ? q.options : [];
      if (opts.length === 5 && isNonEmpty(val) && val !== "N/A") {
        var score = optionsIndex1to5(q, val);
        if (score) out[key + "_score"] = score;
      }
      if (q.type === "text" && isNonEmpty(val) && val !== "N/A") {
        out[key + "_raw"] = String(val);
      }
    });

    // Context aliases expected by GAS
    out.q1__fullname        = STATE.context.fullname        || "";
    out.q1__role            = STATE.context.role            || "";
    out.q1__email           = STATE.context.email           || "";
    out.q1__company         = STATE.context.company         || "";
    out.q1__industry        = STATE.context.industry        || "";
    out.q1__total_employees = STATE.context.total_employees || "";
    out.q1__year_founded    = STATE.context.year_founded    || "";
    out.q1__hq_region       = STATE.context.hq_region       || "";
    out.q1__language        = STATE.context.language        || "EN";
    out.q1__currency        = STATE.context.currency        || "EUR (€)";
    out.q1__gtm_market      = STATE.context.gtm_market      || "";
    out.q1__revenue_model   = STATE.context.revenue_model   || "";

    // GAS legacy keys
    out.q7      = STATE.context.stage   || "";
    out.q6      = STATE.context.motion  || "";
    out.q8      = STATE.context.segment || "";
    out.q2__arr = STATE.context.arr     || "";

    return out;
  }

  // --- 11. SUBMISSION ---
  async function submitData(isTest) {
    var answersRaw   = STATE.answers || {};
    var preCoverage  = buildCoverage(answersRaw);
    if (preCoverage.answered_questions !== preCoverage.total_questions) {
      alert("Please complete all questions before submit (" + preCoverage.answered_questions + "/" + preCoverage.total_questions + ").");
      return;
    }
    var engineScores = computeEngineScores(answersRaw);
    var overallScore = computeOverallScore(engineScores);
    var gripScores   = computeGripScores(answersRaw);
    var coverage     = buildCoverage(answersRaw);
    var answersForGas = buildAnswersForGas(answersRaw);

    var fullReport = [];
    window.QUESTIONS.forEach(function(q) {
      var k = qKey(q.id);
      fullReport.push({
        id:          k,
        qid:         q.qid,
        engine:      q.pillar,
        engine_name: engineNameByIndex(q.pillar),
        grip:        q.grip,
        question:    q.title,
        answer:      answersRaw[k] || ""
      });
    });

    var payload = {
      metadata: {
        timestamp:      new Date().toISOString(),
        schema_version: CONFIG.schemaVersion,
        module: "pp",
        module_name: "Pricing & Packaging Deep Dive",
        module_dimension: "R",
        questions_count: window.QUESTIONS.length,
        source: "PP Engine v" + CONFIG.schemaVersion,
        is_test:        !!isTest
      },
      message: isTest ? "PP Test Submission" : "PP Official Submission",

      // Top-level context
      email:          STATE.context.email          || "",
      company:        STATE.context.company        || "",
      grip_report_id: STATE.context.grip_report_id || "",
      stage:          STATE.context.stage          || "",
      motion:         STATE.context.motion         || "",
      segment:        STATE.context.segment        || "",
      arr:            STATE.context.arr            || "",
      language:       STATE.context.language       || "EN",
      currency:       STATE.context.currency       || "EUR (€)",
      gtm_market:     STATE.context.gtm_market     || "",
      revenue_model:  STATE.context.revenue_model  || "",
      context:        STATE.context,

      answers:      answersForGas,
      answers_raw:  answersForGas,
      full_report:  fullReport,
      coverage:     coverage,

      scoring: {
        engine_scores: engineScores,
        overall_score: overallScore,
        grip_scores:   gripScores
      },
      engine_scores:   engineScores,
      overall_score:   overallScore,
      grip_g:          gripScores.G,
      grip_r:          gripScores.R,
      grip_i:          gripScores.I,
      grip_p:          gripScores.P,
      completion_rate: coverage.completion_rate
    };

    console.log("🚀 GSL Payload:", payload);
    var btn = isTest ? UI.testBtn : UI.submitBtn;
    setButtonState(btn, "Sending...", true);

    try {
      var res = await fetch(CONFIG.webhookUrl, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload)
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
        lines.push("Context: stage=" + (STATE.context.stage || "-") + ", motion=" + (STATE.context.motion || "-") + ", company=" + (STATE.context.company || "-"));
        lines.push("Currency: " + (STATE.context.currency || "-") + " | Language: " + (STATE.context.language || "-"));
        lines.push("GTM market: " + (STATE.context.gtm_market || "-") + " | Revenue model: " + (STATE.context.revenue_model || "-"));
        alert("✅ GSL TEST SUCCESS!\n\n" + lines.join("\n"));
      } else {
        STATE.completed = true;
        localStorage.removeItem(CONFIG.storageKey);
        window.location.href = "module-pp-thank-you.html";
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
    if (isContextStep()) {
      var keysP1 = ["fullname","role","email","company","arr","segment","language","currency"];
      var keysP2 = ["industry","total_employees","year_founded","hq_region","stage","motion","gtm_market","revenue_model"];
      var keys   = STATE.contextPage === 1 ? keysP1 : keysP2;
      keys.forEach(function(k) { STATE.context[k] = ""; });
      renderQuestion();
      return;
    }
    var q = getCurrentQuestion();
    if (!q) return;
    delete STATE.answers[qKey(q.id)];
    renderQuestion();
  }

  function resetAll() {
    if (!confirm("Reset all GSL answers?")) return;
    STATE.completed = true;
    STATE.answers   = {};
    STATE.context   = {
      fullname: "", role: "", email: "", company: "",
      arr: "", segment: "", language: "EN", currency: "EUR (€)",
      industry: "", total_employees: "", year_founded: "", hq_region: "",
      stage: "", motion: "", gtm_market: "", revenue_model: "",
      grip_report_id: ""
    };
    STATE.currentStep = 0;
    STATE.contextPage = 1;
    localStorage.removeItem(CONFIG.storageKey);
    location.reload();
  }

  function manualSave() {
    saveState();
    alert("✅ Saved.");
  }

  // --- 13. EVENT BINDING ---
  if (UI.nextBtn)   UI.nextBtn.addEventListener("click", goNext);
  if (UI.prevBtn)   UI.prevBtn.addEventListener("click", goPrev);
  if (UI.submitBtn) UI.submitBtn.addEventListener("click", function() { submitData(false); });
  if (UI.testBtn) {
    console.log("✅ GSL Test Button Bound");
    UI.testBtn.addEventListener("click", function(e) { e.preventDefault(); submitData(true); });
  }
  if (UI.clearBtn) UI.clearBtn.addEventListener("click", clearCurrentAnswer);
  if (UI.resetBtn) UI.resetBtn.addEventListener("click", resetAll);
  if (UI.saveBtn)  UI.saveBtn.addEventListener("click", manualSave);

  // --- 14. START ---
  init();
})();

