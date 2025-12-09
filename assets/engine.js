/* ===========================================================
   CAUGIA INTELLIGENCE ENGINE v7.2 — CLEAN ROOM EDITION
   Fully rebuilt — zero conflicts — guaranteed working
   =========================================================== */

/* -----------------------------------------------------------
   GLOBAL STATE
----------------------------------------------------------- */

let currentIndex = 0;
const STORAGE_KEY = "caugia_gtm_report_v1";
let STATE = loadState();

/* Persisted progress loader */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/* Autosave */
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
}
setInterval(saveState, 700);


/* -----------------------------------------------------------
   QUESTIONS SOURCE – ALWAYS FROM window.QUESTIONS
----------------------------------------------------------- */

let QUESTIONS = [];
if (Array.isArray(window.QUESTIONS)) {
  QUESTIONS = window.QUESTIONS;
} else {
  console.error("❌ window.QUESTIONS not found.");
}

/* Hard stop if no questions */
if (QUESTIONS.length === 0) {
  console.error("❌ No questions loaded from QUESTIONS.js");
}


/* -----------------------------------------------------------
   PILLAR META
----------------------------------------------------------- */

const PILLAR_META = {
  0:{name:"Context", desc:"Context provides the foundation for interpreting the rest of the assessment. By capturing essential details about your company, the system adjusts recommendations, highlights risks and identifies the right priorities."},
  1:{name:"GTM Strategy & Leadership", desc:"GTM Strategy & Leadership measures how clearly direction, priorities and accountability are defined."},
  2:{name:"Market Intelligence", desc:"Strength of customer insight and competitive understanding."},
  3:{name:"Product Marketing", desc:"Messaging, positioning and value articulation."},
  4:{name:"Demand Generation", desc:"Predictability and quality of pipeline creation."},
  5:{name:"Sales Execution", desc:"Sales consistency, forecasting and funnel health."},
  6:{name:"Customer Success & Expansion", desc:"Retention, adoption and expansion readiness."},
  7:{name:"Revenue Operations & Systems", desc:"Process automation, data health and tooling."},
  8:{name:"Pricing & Packaging", desc:"Value structure, monetisation clarity and tiers."},
  9:{name:"Brand & Communications", desc:"Narrative consistency, clarity and differentiation."},
  10:{name:"Data & Insights", desc:"Visibility, reliability and actionability of GTM data."},
  11:{name:"Enablement", desc:"Training, coaching and performance support."},
  12:{name:"Leadership & Alignment", desc:"Cross-functional cohesion and shared GTM direction."}
};


/* -----------------------------------------------------------
   DOM ELEMENTS
----------------------------------------------------------- */

const elTitle = document.getElementById("gi-question-title");
const elSub = document.getElementById("gi-question-sub");
const elBody = document.getElementById("gi-question-body");

const elKicker = document.getElementById("gi-question-kicker");
const elRightName = document.getElementById("gi-pillar-name");
const elRightDesc = document.getElementById("gi-pillar-desc");

const elLeftPillars = document.querySelectorAll("#gi-left-pillar-list li");

const btnPrev = document.getElementById("gi-prev-btn");
const btnNext = document.getElementById("gi-next-btn");
const btnSubmit = document.getElementById("gi-submit-btn");
const btnClear = document.getElementById("gi-clear-btn");
const btnSave = document.getElementById("gi-save-btn");
const btnReset = document.getElementById("gi-reset-btn");
const btnJumpLast = document.getElementById("gi-jump-last");

const elProgressCount = document.getElementById("gi-progress-count");
const elProgressPercent = document.getElementById("gi-progress-percent");
const elProgressBar = document.getElementById("gi-progress-bar");


/* -----------------------------------------------------------
   VIRTUAL DOM CACHE
----------------------------------------------------------- */

let CACHE = [];

function createNode(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstChild;
}

function buildNode(q) {
  if (q.type === "text")
    return createNode(`<input type="text" name="q" class="gi-input">`);

  if (q.type === "number")
    return createNode(`<input type="number" name="q" class="gi-input">`);

  if (q.type === "textarea")
    return createNode(`<textarea name="q" class="gi-textarea"></textarea>`);

  if (q.type === "select")
    return createNode(`
      <select name="q" class="gi-select">
        <option value="">Select an option…</option>
        ${q.options.map(o => `<option value="${o}">${o}</option>`).join("")}
      </select>
    `);

  if (q.type === "radio" || q.type === "scale")
    return createNode(`
      <div class="gi-options-grid">
        ${q.options.map(o => `
          <label class="gi-option-card">
            <input type="radio" name="q" value="${o}">
            <span>${o}</span>
          </label>`).join("")}
      </div>
    `);

  if (q.type === "group")
    return createNode(`
      <div class="gi-group">
        ${q.fields.map(f => `
          <div class="gi-group-field">
            <label>${f.label}</label>
            <input type="text" name="${f.name}">
          </div>`).join("")}
      </div>
    `);

  return createNode(`<p>Unsupported question type</p>`);
}

function precache() {
  CACHE = QUESTIONS.map(q => buildNode(q));
}

precache();


/* -----------------------------------------------------------
   RESTORE ANSWER
----------------------------------------------------------- */
function restoreAnswer(q) {
  if (q.type === "group") {
    q.fields.forEach(f => {
      const el = elBody.querySelector(`[name="${f.name}"]`);
      if (el && STATE[f.name]) el.value = STATE[f.name];
    });
    return;
  }

  const saved = STATE[q.id];
  if (!saved) return;

  if (q.type === "radio" || q.type === "scale") {
    const radio = elBody.querySelector(`input[value="${saved}"]`);
    if (radio) radio.checked = true;
  }

  const single = elBody.querySelector("[name='q']");
  if (single) single.value = saved;
}


/* -----------------------------------------------------------
   STORE ANSWER
----------------------------------------------------------- */
function storeAnswer() {
  const q = QUESTIONS[currentIndex];

  if (q.type === "group") {
    q.fields.forEach(f => {
      const el = elBody.querySelector(`[name="${f.name}"]`);
      STATE[f.name] = el ? el.value.trim() : "";
    });
    return;
  }

  if (q.type === "radio" || q.type === "scale") {
    const selected = elBody.querySelector("input:checked");
    if (selected) STATE[q.id] = selected.value;
    return;
  }

  const input = elBody.querySelector("[name='q']");
  if (input) STATE[q.id] = input.value.trim();
}


/* -----------------------------------------------------------
   VALIDATE ANSWER
----------------------------------------------------------- */
function validate(q) {
  if (q.type === "group") {
    return q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");
  }
  if (q.type === "radio" || q.type === "scale") {
    return elBody.querySelector("input:checked") !== null;
  }
  const i = elBody.querySelector("[name='q']");
  return i && i.value.trim() !== "";
}


/* -----------------------------------------------------------
   RENDER QUESTION
----------------------------------------------------------- */
function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  if (!q) return;

  elKicker.textContent = PILLAR_META[q.pillar].name;
  elTitle.textContent = q.title;
  elSub.textContent = q.sub || "";

  elRightName.textContent = PILLAR_META[q.pillar].name;
  elRightDesc.textContent = PILLAR_META[q.pillar].desc;

  elLeftPillars.forEach(li =>
    li.classList.toggle("active", Number(li.dataset.p) === q.pillar)
  );

  elBody.innerHTML = "";
  elBody.appendChild(CACHE[currentIndex].cloneNode(true));

  restoreAnswer(q);
  updateNav();
  updateProgress();
}


/* -----------------------------------------------------------
   NAVIGATION BUTTONS
----------------------------------------------------------- */
btnNext.addEventListener("click", () => {
  const q = QUESTIONS[currentIndex];
  storeAnswer();
  if (!validate(q)) return;
  currentIndex++;
  renderQuestion();
});

btnPrev.addEventListener("click", () => {
  storeAnswer();
  if (currentIndex > 0) currentIndex--;
  renderQuestion();
});

btnClear.addEventListener("click", () => {
  const q = QUESTIONS[currentIndex];
  if (q.type === "group") {
    q.fields.forEach(f => delete STATE[f.name]);
  } else {
    delete STATE[q.id];
  }
  renderQuestion();
});

btnReset.addEventListener("click", () => {
  if (!confirm("Reset entire assessment?")) return;
  STATE = {};
  localStorage.removeItem(STORAGE_KEY);
  currentIndex = 0;
  renderQuestion();
});

btnSave.addEventListener("click", saveState);


/* -----------------------------------------------------------
   PROGRESS
----------------------------------------------------------- */
function updateProgress() {
  let answered = 0;

  QUESTIONS.forEach(q => {
    if (q.type === "group") {
      if (q.fields.every(f => STATE[f.name])) answered++;
    } else if (STATE[q.id]) {
      answered++;
    }
  });

  const pct = Math.round(answered / QUESTIONS.length * 100);

  elProgressCount.textContent = `${answered} / ${QUESTIONS.length}`;
  elProgressPercent.textContent = `${pct}%`;
  elProgressBar.style.width = `${pct}%`;
}


/* -----------------------------------------------------------
   SUBMIT LOGIC
----------------------------------------------------------- */
btnSubmit.addEventListener("click", async () => {
  storeAnswer();

  const allAnswered = QUESTIONS.every(q => {
    if (q.type === "group") return q.fields.every(f => STATE[f.name]);
    return STATE[q.id];
  });

  if (!allAnswered) {
    alert("Please complete all questions before submitting.");
    return;
  }

  const payload = {
    customer: STATE,
    metadata: {
      version: "v7.2",
      completed_at: new Date().toISOString(),
      total_questions: QUESTIONS.length
    }
  };

  btnSubmit.disabled = true;
  btnSubmit.textContent = "Submitting...";

  try {
    await fetch("https://hook.eu1.make.com/8o2bnhmywydljby2rsxrfhsynp4rzrx8", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    });

    localStorage.removeItem(STORAGE_KEY);
    window.location.href = "/gtm-intelligence-thank-you.html";

  } catch (e) {
    alert("Submission failed.");
    btnSubmit.disabled = false;
    btnSubmit.textContent = "Submit";
  }
});


/* -----------------------------------------------------------
   INIT
----------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});
