/* ===========================================================
   CAUGIA CONSULTING — GTM INTELLIGENCE ENGINE v3.2 (Final Fix)
=========================================================== */

/* ---------------- STATE ---------------- */
let currentIndex = 0;
const STORAGE_KEY = "caugia_gtm_report_v1";

let STATE = loadState();

/* Pull QUESTIONS ONLY from QUESTIONS.js */
const QUESTIONS = window.QUESTIONS;

/* ---------------- LOAD / SAVE ---------------- */
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
setInterval(saveState, 800);

/* ---------------- DOM ---------------- */
const qTitle   = document.getElementById("gi-question-title");
const qSub     = document.getElementById("gi-question-sub");
const qBody    = document.getElementById("gi-question-body");

const kicker   = document.getElementById("gi-question-kicker");
const rightName= document.getElementById("gi-pillar-name");
const rightDesc= document.getElementById("gi-pillar-desc");

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

/* ---------------- RENDER QUESTION ---------------- */
function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  if (!q) return;

  kicker.textContent = PILLAR_META[q.pillar].name;
  qTitle.textContent = q.title || "";
  qSub.textContent   = q.sub || "";

  rightName.textContent = PILLAR_META[q.pillar].name;
  rightDesc.textContent = PILLAR_META[q.pillar].desc;

  leftPillars.forEach(li =>
    li.classList.toggle("active", Number(li.dataset.p) === q.pillar)
  );

  qBody.innerHTML = buildInput(q);
  restoreAnswer(q);

  updateNav();
  updateProgress();
}

/* ---------------- INPUT BUILDER ---------------- */
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

  if (q.type === "scale" || q.type === "radio")
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

/* ---------------- RESTORE ANSWER ---------------- */
function restoreAnswer(q) {

  if (q.type === "group") {
    q.fields.forEach(f => {
      const input = qBody.querySelector(`[name="${f.name}"]`);
      if (input && STATE[f.name]) input.value = STATE[f.name];
    });
    return;
  }

  const saved = STATE[q.id];
  if (!saved) return;

  const radio = qBody.querySelector(`input[value="${saved}"]`);
  if (radio) {
    radio.checked = true;
    return;
  }

  const el = qBody.querySelector("[name='q']");
  if (el) el.value = saved;
}

/* ---------------- VALIDATION ---------------- */
function validate(q) {

  if (q.type === "group")
    return q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");

  if (q.type === "scale" || q.type === "radio")
    return qBody.querySelector("input:checked") !== null;

  const el = qBody.querySelector("[name='q']");
  return el && el.value.trim() !== "";
}

/* ---------------- SAVE CURRENT ANSWER ---------------- */
function storeCurrentAnswer() {
  const q = QUESTIONS[currentIndex];

  if (q.type === "group") {
    q.fields.forEach(f => {
      const el = qBody.querySelector(`[name="${f.name}"]`);
      STATE[f.name] = el ? el.value.trim() : "";
    });
    return;
  }

  if (q.type === "scale" || q.type === "radio") {
    const selected = qBody.querySelector("input:checked");
    if (selected) STATE[q.id] = selected.value;
    return;
  }

  const el = qBody.querySelector("[name='q']");
  if (el) STATE[q.id] = el.value.trim();
}

/* ---------------- NAVIGATION ---------------- */
btnNext.addEventListener("click", () => {
  const q = QUESTIONS[currentIndex];
  storeCurrentAnswer();

  if (!validate(q)) {
    alert("Please complete this question before continuing.");
    return;
  }

  currentIndex++;
  renderQuestion();
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

/* ---------------- PROGRESS BAR ---------------- */
function updateProgress() {
  let answered = 0;

  QUESTIONS.forEach(q => {
    if (q.type === "group") {
      const filled = q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");
      if (filled) answered++;
      return;
    }

    if (STATE[q.id] && STATE[q.id].trim() !== "") answered++;
  });

  const total = QUESTIONS.length;
  const pct = Math.round((answered / total) * 100);

  progressCount.textContent = `${answered} / ${total}`;
  progressPercent.textContent = pct + "%";
  progressBar.style.width = pct + "%";
}

/* ---------------- INIT ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});
