/* ===========================================================
   CAUGIA CONSULTING — GTM INTELLIGENCE ENGINE v5.1-FINAL
   Stable • Clean • Validated • No Errors
   QUESTIONS is NEVER declared here — only read from window.QUESTIONS
=========================================================== */

/* ---------------------- STATE ---------------------- */
let currentIndex = 0;
const STORAGE_KEY = "caugia_gtm_report_v1";

let STATE = loadState();

/* ---------------------- QUESTIONS SOURCE ---------------------- */
const QUESTIONS_REF = Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];

if (QUESTIONS_REF.length === 0) {
  console.error("❌ QUESTIONS.js not loaded or empty.");
}

/* ---------------------- LOAD / SAVE ---------------------- */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
}
setInterval(saveState, 700);

/* ---------------------- DOM ---------------------- */
const qTitle     = document.getElementById("gi-question-title");
const qSub       = document.getElementById("gi-question-sub");
const qBody      = document.getElementById("gi-question-body");

const kicker     = document.getElementById("gi-question-kicker");
const rightName  = document.getElementById("gi-pillar-name");
const rightDesc  = document.getElementById("gi-pillar-desc");

const leftPillars = document.querySelectorAll("#gi-left-pillar-list li");

const btnPrev   = document.getElementById("gi-prev-btn");
const btnNext   = document.getElementById("gi-next-btn");
const btnSubmit = document.getElementById("gi-submit-btn");
const btnClear  = document.getElementById("gi-clear-btn");
const btnSave   = document.getElementById("gi-save-btn");
const btnReset  = document.getElementById("gi-reset-btn");

const progressCount   = document.getElementById("gi-progress-count");
const progressPercent = document.getElementById("gi-progress-percent");
const progressBar     = document.getElementById("gi-progress-bar");

/* ---------------------- EXPLAIN MODE (placeholder) ---------------------- */
let explainEnabled = false;

function toggleExplain() {
  explainEnabled = !explainEnabled;
  const box = document.getElementById("gi-explain-box");
  if (box) box.style.display = explainEnabled ? "block" : "none";
}

function setExplainPlaceholder(q) {
  const box = document.getElementById("gi-explain-box");
  if (!box) return;

  if (!explainEnabled) {
    box.style.display = "none";
    return;
  }

  box.innerHTML = `
    <div class="gi-explain-inner">
      <strong>Why this question matters</strong>
      <p>This placeholder shows where future AI-powered guidance will appear.</p>
      <p><em>Pillar:</em> ${PILLAR_META[q.pillar].name}</p>
      <p><em>Question:</em> ${q.title}</p>
    </div>
  `;
  box.style.display = "block";
}

/* ---------------------- RENDER ---------------------- */
function renderQuestion() {
  const q = QUESTIONS_REF[currentIndex];
  if (!q) return;

  kicker.textContent    = PILLAR_META[q.pillar].name;
  rightName.textContent = PILLAR_META[q.pillar].name;
  rightDesc.textContent = PILLAR_META[q.pillar].desc;

  qTitle.textContent = q.title || "";
  qSub.textContent   = q.sub || "";

  leftPillars.forEach(li =>
    li.classList.toggle("active", Number(li.dataset.p) === q.pillar)
  );

  qBody.innerHTML = buildInput(q);
  restoreAnswer(q);

  setExplainPlaceholder(q);
  updateNav();
  updateProgress();
}

/* ---------------------- INPUT BUILDER ---------------------- */
function buildInput(q) {

  if (q.type === "text")
    return `<input type="text" name="q" class="gi-input">`;

  if (q.type === "number")
    return `<input type="number" name="q" class="gi-input">`;

  if (q.type === "textarea")
    return `<textarea name="q" class="gi-textarea"></textarea>`;

  if (q.type === "select")
    return `
      <select name="q" class="gi-select">
        <option value="">Select an option…</option>
        ${q.options.map(o => `<option value="${o}">${o}</option>`).join("")}
      </select>
    `;

  if (q.type === "radio" || q.type === "scale")
    return `
      <div class="gi-options-grid">
        ${q.options.map(o => `
          <label class="gi-option-card">
            <input type="radio" name="q" value="${o}">
            <span>${o}</span>
          </label>`
        ).join("")}
      </div>
    `;

  if (q.type === "group")
    return `
      <div class="gi-group">
        ${q.fields
          .map(f => `
            <div class="gi-group-field">
              <label>${f.label}</label>
              <input type="text" name="${f.name}">
            </div>`
          ).join("")}
      </div>
    `;

  return `<p>Unsupported question type</p>`;
}

/* ---------------------- RESTORE ---------------------- */
function restoreAnswer(q) {

  if (q.type === "group") {
    q.fields.forEach(f => {
      const el = qBody.querySelector(`[name="${f.name}"]`);
      if (el && STATE[f.name]) el.value = STATE[f.name];
    });
    return;
  }

  const saved = STATE[q.id];
  if (!saved) return;

  const radio = qBody.querySelector(`input[value="${saved}"]`);
  if (radio) radio.checked = true;

  const el = qBody.querySelector("[name='q']");
  if (el) el.value = saved;
}

/* ---------------------- SUBMIT TO MAKE.COM ---------------------- */
btnSubmit.addEventListener("click", async () => {
  storeCurrentAnswer();
  saveState();

  // Validate all questions answered
  const allAnswered = QUESTIONS_REF.every(q => {
    if (q.type === "group") {
      return q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");
    }
    return STATE[q.id] && STATE[q.id].trim() !== "";
  });

  if (!allAnswered) {
    alert("Please complete all questions before submitting.");
    return;
  }

  // Prepare payload
  const payload = preparePayload();

  // Show loading state
  btnSubmit.textContent = "Submitting...";
  btnSubmit.disabled = true;

  try {
    // POST to Make.com webhook
    const response = await fetch("PLACEHOLDER_MAKECOM_WEBHOOK_URL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error("Submission failed");

    // Success
    console.log("✅ Assessment submitted successfully");
    
    // Clear localStorage
    localStorage.removeItem(STORAGE_KEY);
    
    // Redirect to thank you page
    window.location.href = "/gtm-intelligence-thank-you.html";

  } catch (error) {
    console.error("❌ Submission error:", error);
    alert("Submission failed. Please try again or contact hello@caugia.com");
    
    // Reset button
    btnSubmit.textContent = "Submit";
    btnSubmit.disabled = false;
  }
});

/* ---------------------- PAYLOAD BUILDER ---------------------- */
function preparePayload() {
  // Extract customer info (Pillar 0 group fields)
  const customer = {
    fullname: STATE["fullname"] || "",
    role: STATE["role"] || "",
    email: STATE["email"] || "",
    mobile: STATE["mobile"] || "",
    company: STATE["company"] || "",
    website: STATE["website"] || "",
    sector: STATE["sector"] || "",
    country: STATE["country"] || "",
    activity: STATE["activity"] || "",
    companysize: STATE["companysize"] || ""
  };

  // Extract context variables (Pillar 0 group fields)
  const context = {
    // SaaS performance
    arr: STATE["arr"] || "",
    acv: STATE["acv"] || "",
    churn: STATE["churn"] || "",
    cpl: STATE["cpl"] || "",
    cac: STATE["cac"] || "",
    nrr: STATE["nrr"] || "",
    nps: STATE["nps"] || "",
    expansion: STATE["expansion"] || "",
    ltv: STATE["ltv"] || "",
    payback: STATE["payback"] || "",
    
    // GTM team structure
    ae: STATE["ae"] || "",
    sdr: STATE["sdr"] || "",
    am: STATE["am"] || "",
    csm: STATE["csm"] || "",
    se: STATE["se"] || "",
    partner: STATE["partner"] || "",
    marketing: STATE["marketing"] || "",
    enablement: STATE["enablement"] || "",
    revops: STATE["revops"] || "",
    leadership: STATE["leadership"] || "",
    
    // Revenue goals
    target_fy: STATE["target_fy"] || "",
    current_perf: STATE["current_perf"] || "",
    next_fy_target: STATE["next_fy_target"] || "",
    arr_target: STATE["arr_target"] || "",
    growth_goal: STATE["growth_goal"] || "",
    yoy_last_year: STATE["yoy_last_year"] || "",
    new_vs_expansion: STATE["new_vs_expansion"] || "",
    forecast_accuracy: STATE["forecast_accuracy"] || "",
    customer_target: STATE["customer_target"] || "",
    growth_constraint: STATE["growth_constraint"] || "",
    
    // Revenue engine
    pipeline_cov: STATE["pipeline_cov"] || "",
    sales_cycle: STATE["sales_cycle"] || "",
    lead_response: STATE["lead_response"] || "",
    demo_close: STATE["demo_close"] || "",
    win_rate: STATE["win_rate"] || "",
    mql_sql: STATE["mql_sql"] || "",
    sql_cw: STATE["sql_cw"] || "",
    ramp_time: STATE["ramp_time"] || "",
    onboarding_time: STATE["onboarding_time"] || "",
    deal_velocity: STATE["deal_velocity"] || "",
    
    // Radio questions (Q6-Q12)
    gtm_motion: STATE[6] || "",
    revenue_model: STATE[7] || "",
    target_segment: STATE[8] || "",
    buyer_persona: STATE[9] || "",
    sales_complexity: STATE[10] || "",
    team_size: STATE[11] || "",
    funding_stage: STATE[12] || "",
    
    // Text/textarea questions (Q13-Q25)
    geo_markets: STATE[13] || "",
    product_desc: STATE[14] || "",
    ideal_customer: STATE[15] || "",
    top_priority: STATE[16] || "",
    biggest_challenge: STATE[17] || "",
    gtm_slowdown: STATE[18] || "",
    recent_change: STATE[19] || "",
    business_outcome: STATE[20] || "",
    product_complexity: STATE[21] || "",
    market_type: STATE[22] || "",
    deployment_model: STATE[23] || "",
    paying_customers: STATE[24] || "",
    additional_context: STATE[25] || ""
  };

  // Extract diagnostic answers (Pillars 1-12, questions 1001-12020)
  const answers = {};
  for (let id = 1001; id <= 12020; id++) {
    if (STATE[id]) {
      answers[`Q${id}`] = STATE[id];
    }
  }

  // Metadata
  const metadata = {
    timestamp: new Date().toISOString(),
    version: "v5.1",
    total_questions: QUESTIONS_REF.length,
    completion_rate: calculateCompletionRate()
  };

  return {
    customer,
    context,
    answers,
    metadata
  };
}

/* ---------------------- COMPLETION RATE ---------------------- */
function calculateCompletionRate() {
  let answered = 0;
  QUESTIONS_REF.forEach(q => {
    if (q.type === "group") {
      const filled = q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");
      if (filled) answered++;
    } else if (STATE[q.id] && STATE[q.id].trim() !== "") {
      answered++;
    }
  });
  return Math.round((answered / QUESTIONS_REF.length) * 100);
}

/* ---------------------- SAVE ---------------------- */
function storeCurrentAnswer() {
  const q = QUESTIONS_REF[currentIndex];

  if (q.type === "group") {
    q.fields.forEach(f => {
      const el = qBody.querySelector(`[name="${f.name}"]`);
      STATE[f.name] = el ? el.value.trim() : "";
    });
    return;
  }

  if (q.type === "radio" || q.type === "scale") {
    const selected = qBody.querySelector("input:checked");
    if (selected) STATE[q.id] = selected.value;
    return;
  }

  const el = qBody.querySelector("[name='q']");
  if (el) STATE[q.id] = el.value.trim();
}

/* ---------------------- NAVIGATION ---------------------- */
btnNext.addEventListener("click", () => {
  const q = QUESTIONS_REF[currentIndex];
  storeCurrentAnswer();

  if (!validate(q)) return;

  currentIndex++;
  renderQuestion();
});

btnPrev.addEventListener("click", () => {
  storeCurrentAnswer();
  if (currentIndex > 0) currentIndex--;
  renderQuestion();
});

btnClear.addEventListener("click", () => {
  const q = QUESTIONS_REF[currentIndex];

  if (q.type === "group") q.fields.forEach(f => delete STATE[f.name]);
  else delete STATE[q.id];

  renderQuestion();
});

btnSave.addEventListener("click", saveState);

btnSubmit.addEventListener("click", () => {
  storeCurrentAnswer();
  saveState();
  alert("Assessment submitted.");
});

btnReset.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  STATE = {};
  currentIndex = 0;
  renderQuestion();
  updateProgress();
});

/* ---------------------- PROGRESS ---------------------- */
function updateProgress() {
  let answered = 0;

  QUESTIONS_REF.forEach(q => {
    if (q.type === "group") {
      const filled = q.fields.every(f =>
        STATE[f.name] && STATE[f.name].trim() !== ""
      );
      if (filled) answered++;
      return;
    }
    if (STATE[q.id] && STATE[q.id].trim() !== "") answered++;
  });

  const total = QUESTIONS_REF.length;
  const pct = Math.round((answered / total) * 100);

  progressCount.textContent = `${answered} / ${total}`;
  progressPercent.textContent = `${pct}%`;
  progressBar.style.width = `${pct}%`;
}

/* ---------------------- NAVIGATION HELPERS ---------------------- */
function updateNav() {
  btnPrev.style.display = currentIndex === 0 ? "none" : "inline-block";

  if (currentIndex === QUESTIONS_REF.length - 1) {
    btnNext.style.display = "none";
    btnSubmit.style.display = "inline-block";
  } else {
    btnNext.style.display = "inline-block";
    btnSubmit.style.display = "none";
  }
}

/* ---------------------- INIT ---------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});
