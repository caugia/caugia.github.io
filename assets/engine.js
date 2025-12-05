/* ===========================================================
   CAUGIA CONSULTING — GTM INTELLIGENCE ENGINE v3.1 (Stable)
   • Zero duplicate declarations (QUESTIONS not redeclared)
   • Perfect validation engine
   • Perfect progress counter (1 point per question)
   • Supports: text, number, textarea, select, radio, scale, group
   • Blocks “Next” until fully valid
   • Compatible with QUESTIONS.js (265 items)
=========================================================== */

/* -----------------------------------------------------------
   GLOBAL STATE
----------------------------------------------------------- */
let currentIndex = 0;
const STORAGE_KEY = "caugia_gtm_report_v1";

let STATE = loadState();

/* QUESTIONS comes ONLY from QUESTIONS.js */
if (!Array.isArray(window.QUESTIONS)) {
  console.error("❌ QUESTIONS.js not loaded or invalid.");
}
const QUESTIONS = window.QUESTIONS;   // SAFE: not declared twice


/* -----------------------------------------------------------
   LOAD / SAVE STATE
----------------------------------------------------------- */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    return {};
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
}
setInterval(saveState, 800);


/* -----------------------------------------------------------
   DOM SHORTCUTS
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


/* ===========================================================
   RENDER QUESTION
=========================================================== */
function renderQuestion() {

  const q = QUESTIONS[currentIndex];
  if (!q) return;

  // Pillar info
  kicker.textContent = PILLAR_META[q.pillar].name;
  qTitle.textContent = q.title || "";
  qSub.textContent   = q.sub || "";

  rightName.textContent = PILLAR_META[q.pillar].name;
  rightDesc.textContent = PILLAR_META[q.pillar].desc;

  // Sidebar highlight
  leftPillars.forEach(li =>
    li.classList.toggle("active", Number(li.dataset.p) === q.pillar)
  );

  // Inject fields
  qBody.innerHTML = buildInput(q);

  // Restore saved answers
  restoreAnswer(q);

  // Update UI
  updateNav();
  updateProgress();
}


/* ===========================================================
   INPUT BUILDER (factory for all field types)
=========================================================== */
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
    return q.options.map(o => `
      <label class="gi-option-card">
        <input type="radio" name="q" value="${o}">
        <span>${o}</span>
      </label>
    `).join("");

  if (q.type === "group")
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

  return `<p>Unsupported question type</p>`;
}


/* ===========================================================
   RESTORE ANSWERS
=========================================================== */
function restoreAnswer(q) {

  if (q.type === "group") {
    q.fields.forEach(f => {
      const input = qBody.querySelector(`[name="${f.name}"]`);
      if (input && STATE[f.name]) input.value = STATE[f.name];
    });
    return;
  }

  const stored = STATE[q.id];
  if (!stored) return;

  // Radio / scale
  const radio = qBody.querySelector(`input[value="${stored}"]`);
  if (radio) {
    radio.checked = true;
    return;
  }

  // Text / textarea / select
  const el = qBody.querySelector("[name='q']");
  if (el) el.value = stored;
}


/* ===========================================================
   VALIDATION (strict)
=========================================================== */
function validate(q) {

  if (q.type === "group") {
    return q.fields.every(f =>
      STATE[f.name] && STATE[f.name].trim() !== ""
    );
  }

  if (q.type === "radio" || q.type === "scale") {
    return qBody.querySelector("input:checked") !== null;
  }

  const el = qBody.querySelector("[name='q']");
  return el && el.value.trim() !== "";
}


/* ===========================================================
   SAVE CURRENT ANSWER
=========================================================== */
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


/* ===========================================================
   NAVIGATION BUTTON LOGIC
=========================================================== */
btnNext.addEventListener("click", () => {
  const q = QUESTIONS[currentIndex];
  storeCurrentAnswer();

  if (!validate(q)) {
    alert("Please complete the question first.");
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

  if (q.type === "group") {
    q.fields.forEach(f => delete STATE[f.name]);
  } else {
    delete STATE[q.id];
  }

  renderQuestion();
});

btnSave.addEventListener("click", saveState);

btnSubmit.addEventListener("click", () => {
  storeCurrentAnswer();
  saveState();
  alert("Your assessment has been submitted.");
});

btnReset.addEventListener("click", () => {
  if (!confirm("Reset the entire assessment?")) return;

  localStorage.removeItem(STORAGE_KEY);
  STATE = {};
  currentIndex = 0;
  renderQuestion();
  updateProgress();
});


/* ===========================================================
   PROGRESS BAR — ACCURATE 1 POINT PER QUESTION
=========================================================== */
function updateProgress() {

  let answered = 0;

  for (const q of QUESTIONS) {

    if (q.type === "group") {
      const allFilled = q.fields.every(f =>
        STATE[f.name] && STATE[f.name].trim() !== ""
      );
      if (allFilled) answered++;
      continue;
    }

    if (STATE[q.id] && STATE[q.id].trim() !== "") {
      answered++;
    }
  }

  const total = QUESTIONS.length;
  const pct = Math.round((answered / total) * 100);

  progressCount.textContent = `${answered} / ${total}`;
  progressPercent.textContent = pct + "%";
  progressBar.style.width = pct + "%";
}


/* ===========================================================
   INIT ENGINE
=========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});
