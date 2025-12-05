/* ===========================================================
   CAUGIA CONSULTING — GTM INTELLIGENCE ENGINE v3.0 (Clean Build)
   • Full support: text, number, textarea, select, radio, scale, group
   • Strict validation
   • Accurate progress (1 point per question)
   • Blocks "Next" until valid
   • Uses QUESTIONS.js (MUST be loaded first)
=========================================================== */

/* -----------------------------------------------------------
   GLOBAL STATE
----------------------------------------------------------- */
let currentIndex = 0;
const STORAGE_KEY = "caugia_gtm_report_v1";

let STATE = loadState();

/* Grab QUESTIONS from window */
const QUESTIONS = Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];

if (QUESTIONS.length === 0) {
  console.error("❌ QUESTIONS.js failed to load or is empty");
}

/* -----------------------------------------------------------
   LOAD / SAVE STATE
----------------------------------------------------------- */
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
setInterval(saveState, 600);


/* -----------------------------------------------------------
   DOM REFERENCES
----------------------------------------------------------- */
const qTitle        = document.getElementById("gi-question-title");
const qSub          = document.getElementById("gi-question-sub");
const qBody         = document.getElementById("gi-question-body");

const kicker        = document.getElementById("gi-question-kicker");
const rightName     = document.getElementById("gi-pillar-name");
const rightDesc     = document.getElementById("gi-pillar-desc");

const leftPillars   = document.querySelectorAll("#gi-left-pillar-list li");

const btnPrev       = document.getElementById("gi-prev-btn");
const btnNext       = document.getElementById("gi-next-btn");
const btnSubmit     = document.getElementById("gi-submit-btn");
const btnClear      = document.getElementById("gi-clear-btn");
const btnSave       = document.getElementById("gi-save-btn");
const btnReset      = document.getElementById("gi-reset-btn");

const progressCount = document.getElementById("gi-progress-count");
const progressPercent = document.getElementById("gi-progress-percent");
const progressBar   = document.getElementById("gi-progress-bar");


/* -----------------------------------------------------------
   RENDER QUESTION
----------------------------------------------------------- */
function renderQuestion() {

  const q = QUESTIONS[currentIndex];
  if (!q) {
    console.error("❌ No question at index:", currentIndex);
    return;
  }

  /* Pillar UI update */
  const meta = PILLAR_META[q.pillar];
  kicker.textContent = meta.name;
  rightName.textContent = meta.name;
  rightDesc.textContent = meta.desc;

  leftPillars.forEach(li =>
    li.classList.toggle("active", Number(li.dataset.p) === q.pillar)
  );

  /* Question title and subtitle */
  qTitle.textContent = q.title || "";
  qSub.textContent   = q.sub || "";

  /* Inject input */
  qBody.innerHTML = buildInput(q);

  restoreAnswer(q);
  updateNav();
  updateProgress();
}


/* -----------------------------------------------------------
   INPUT FACTORY
----------------------------------------------------------- */
function buildInput(q) {

  switch (q.type) {

    case "text":
      return `<input type="text" name="q" class="gi-input">`;

    case "number":
      return `<input type="number" name="q" class="gi-input">`;

    case "textarea":
      return `<textarea name="q" class="gi-textarea"></textarea>`;

    case "select":
      return `
        <select name="q" class="gi-select">
          <option value="">Select an option…</option>
          ${q.options.map(o => `<option value="${o}">${o}</option>`).join("")}
        </select>
      `;

    case "radio":
    case "scale":
      return q.options.map(o => `
        <label class="gi-option-card">
          <input type="radio" name="q" value="${o}">
          <span>${o}</span>
        </label>
      `).join("");

    case "group":
      return `
        <div class="gi-group">
          ${q.fields.map(f => `
            <div class="gi-group-field ${f.full ? "full" : ""}">
              <label>${f.label}</label>
              <input type="text" name="${f.name}" class="gi-input">
            </div>
          `).join("")}
        </div>
      `;
  }

  return `<p>Unsupported question type: ${q.type}</p>`;
}


/* -----------------------------------------------------------
   RESTORE SAVED ANSWERS
----------------------------------------------------------- */
function restoreAnswer(q) {

  if (q.type === "group") {
    q.fields.forEach(f => {
      const el = qBody.querySelector(`[name="${f.name}"]`);
      if (el && STATE[f.name]) el.value = STATE[f.name];
    });
    return;
  }

  const stored = STATE[q.id];
  if (!stored) return;

  /* Radio / Scale */
  const r = qBody.querySelector(`input[value="${stored}"]`);
  if (r) { r.checked = true; return; }

  /* Text / Select / Textarea */
  const el = qBody.querySelector("[name='q']");
  if (el) el.value = stored;
}


/* -----------------------------------------------------------
   VALIDATION
----------------------------------------------------------- */
function validate(q) {

  if (q.type === "group")
    return q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");

  if (q.type === "radio" || q.type === "scale")
    return qBody.querySelector("input:checked") !== null;

  const el = qBody.querySelector("[name='q']");
  return el && el.value.trim() !== "";
}


/* -----------------------------------------------------------
   SAVE CURRENT ANSWER
----------------------------------------------------------- */
function storeCurrentAnswer() {
  const q = QUESTIONS[currentIndex];

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


/* -----------------------------------------------------------
   NAVIGATION BUTTONS
----------------------------------------------------------- */
btnNext.addEventListener("click", () => {
  const q = QUESTIONS[currentIndex];
  storeCurrentAnswer();

  if (!validate(q)) {
    alert("Please complete this question before continuing.");
    return;
  }

  if (currentIndex < QUESTIONS.length - 1) {
    currentIndex++;
    renderQuestion();
  }
});

btnPrev.addEventListener("click", () => {
  storeCurrentAnswer();
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

btnClear.addEventListener("click", () => {
  const q = QUESTIONS[currentIndex];

  if (q.type === "group") q.fields.forEach(f => delete STATE[f.name]);
  else delete STATE[q.id];

  renderQuestion();
});

btnSave.addEventListener("click", saveState);

btnSubmit.addEventListener("click", () => {
  storeCurrentAnswer();
  saveState();
  alert("Your assessment has been submitted.");
});

btnReset.addEventListener("click", () => {
  if (!confirm("Reset entire assessment?")) return;

  localStorage.removeItem(STORAGE_KEY);
  STATE = {};
  currentIndex = 0;
  renderQuestion();
  updateProgress();
});


/* -----------------------------------------------------------
   PROGRESS BAR (correct, stable, 1 point per question)
----------------------------------------------------------- */
function updateProgress() {
  let answered = 0;

  QUESTIONS.forEach(q => {

    if (q.type === "group") {
      const all = q.fields.every(f =>
        STATE[f.name] && STATE[f.name].trim() !== ""
      );
      if (all) answered++;
      return;
    }

    if (STATE[q.id] && STATE[q.id].trim() !== "")
      answered++;
  });

  const total = QUESTIONS.length;
  const pct = Math.round((answered / total) * 100);

  progressCount.textContent = `${answered} / ${total}`;
  progressPercent.textContent = pct + "%";
  progressBar.style.width = pct + "%";
}


/* -----------------------------------------------------------
   INIT
----------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", renderQuestion);
