/* ===========================================================
   CAUGIA CONSULTING — GTM INTELLIGENCE REPORT ENGINE v1.5
   Supports:
   - text
   - number
   - textarea
   - radio groups
   - select dropdowns
   - group fields (multiple inputs per question)
   Pure Vanilla JS — Autosave — 265 Questions
=========================================================== */

/* ===========================================================
   GLOBAL STATE
=========================================================== */
let currentIndex = 0;
const STORAGE_KEY = "caugia_gtm_report_v1";

let STATE = loadState();

/* Questions come from QUESTIONS.js */
let QUESTIONS = window.QUESTIONS || [];

if (!Array.isArray(QUESTIONS) || QUESTIONS.length === 0) {
  console.error("ERROR: QUESTIONS.js did not load or is empty.");
}

/* ===========================================================
   LOAD / SAVE
=========================================================== */
function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return {};
  try { return JSON.parse(saved); }
  catch { return {}; }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
}
setInterval(saveState, 1000);

/* ===========================================================
   DOM SHORTCUTS
=========================================================== */
const qCard = document.getElementById("gi-question-card");
const qTitle = document.getElementById("gi-question-title");
const qSub = document.getElementById("gi-question-sub");
const qBody = document.getElementById("gi-question-body");

const kicker = document.getElementById("gi-question-kicker");
const rightName = document.getElementById("gi-pillar-name");
const rightDesc = document.getElementById("gi-pillar-desc");

const leftPillars = document.querySelectorAll("#gi-left-pillar-list li");

const btnPrev = document.getElementById("gi-prev-btn");
const btnNext = document.getElementById("gi-next-btn");
const btnSubmit = document.getElementById("gi-submit-btn");
const btnClear = document.getElementById("gi-clear-btn");
const btnSave = document.getElementById("gi-save-btn");

const progressCount = document.getElementById("gi-progress-count");
const progressPercent = document.getElementById("gi-progress-percent");
const progressBar = document.getElementById("gi-progress-bar");

/* ===========================================================
   RENDERING LOGIC
=========================================================== */
function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  if (!q) return;

  /* Pillar Kicker */
  kicker.textContent = PILLAR_META[q.pillar].name;

  /* Title + Subtext */
  qTitle.textContent = q.title || "";
  qSub.textContent = q.description || "";

  /* Right Sidebar */
  rightName.textContent = PILLAR_META[q.pillar].name;
  rightDesc.textContent = PILLAR_META[q.pillar].desc;

  /* Left Sidebar highlight */
  leftPillars.forEach(li => {
    const isActive = Number(li.dataset.p) === q.pillar;
    li.classList.toggle("active", isActive);
  });

  /* Render the input element(s) */
  qBody.innerHTML = buildInput(q);

  /* Fill stored answers */
  restoreAnswer(q);

  /* Update navigation + progress */
  updateNav();
  updateProgress();
}

/* ===========================================================
   INPUT GENERATOR
=========================================================== */
function buildInput(q) {
  /* TYPE: text */
  if (q.type === "text") {
    return `<input type="text" name="q" class="gi-input">`;
  }

  /* TYPE: number */
  if (q.type === "number") {
    return `<input type="number" name="q" class="gi-input">`;
  }

  /* TYPE: textarea */
  if (q.type === "textarea") {
    return `<textarea name="q" class="gi-textarea"></textarea>`;
  }

  /* TYPE: radio */
  if (q.type === "radio") {
    return q.options.map(opt => `
      <label class="gi-option-card">
        <input type="radio" name="q" value="${opt}">
        <span>${opt}</span>
      </label>
    `).join("");
  }

  /* TYPE: select */
  if (q.type === "select") {
    return `
      <select name="q" class="gi-select">
        <option value="">Select an option…</option>
        ${q.options.map(o => `<option value="${o}">${o}</option>`).join("")}
      </select>
    `;
  }

  /* TYPE: group (multiple fields per question) */
  if (q.type === "group") {
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

/* ===========================================================
   RESTORE ANSWERS
=========================================================== */
function restoreAnswer(q) {
  /* GROUP */
  if (q.type === "group") {
    q.fields.forEach(f => {
      const input = qBody.querySelector(`[name="${f.name}"]`);
      if (!input) return;
      if (STATE[f.name] !== undefined) {
        input.value = STATE[f.name];
      }
    });
    return;
  }

  /* SIMPLE */
  const el = qBody.querySelector("[name='q']");
  if (!el) return;

  if (STATE[q.id] !== undefined) {
    if (q.type === "radio") {
      const selected = qBody.querySelector(`input[value="${STATE[q.id]}"]`);
      if (selected) selected.checked = true;
    } else if (q.type === "select") {
      el.value = STATE[q.id];
    } else {
      el.value = STATE[q.id];
    }
  }
}

/* ===========================================================
   SAVE ANSWERS
=========================================================== */
function storeCurrentAnswer() {
  const q = QUESTIONS[currentIndex];

  /* GROUP question */
  if (q.type === "group") {
    q.fields.forEach(f => {
      const input = qBody.querySelector(`[name="${f.name}"]`);
      if (input) STATE[f.name] = input.value;
    });
    return;
  }

  /* SIMPLE question */
  const el = qBody.querySelector("[name='q']");
  if (!el) return;

  if (q.type === "radio") {
    const selected = qBody.querySelector("input[type='radio']:checked");
    if (selected) STATE[q.id] = selected.value;
  } else {
    STATE[q.id] = el.value;
  }
}

/* ===========================================================
   NAVIGATION EVENTS
=========================================================== */
btnNext.addEventListener("click", () => {
  storeCurrentAnswer();
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

btnSave.addEventListener("click", () => {
  storeCurrentAnswer();
  saveState();
});

btnClear.addEventListener("click", () => {
  const q = QUESTIONS[currentIndex];

  /* Clear group */
  if (q.type === "group") {
    q.fields.forEach(f => delete STATE[f.name]);
    renderQuestion();
    return;
  }

  /* Clear simple */
  delete STATE[q.id];
  renderQuestion();
});

btnSubmit.addEventListener("click", () => {
  storeCurrentAnswer();
  saveState();
  alert("Your assessment has been submitted. A full diagnostic report will be generated.");
});

/* ===========================================================
   NAV + PROGRESS
=========================================================== */
function updateNav() {
  btnPrev.style.display = currentIndex === 0 ? "none" : "inline-block";

  const last = currentIndex === QUESTIONS.length - 1;
  btnNext.style.display = last ? "none" : "inline-block";
  btnSubmit.style.display = last ? "inline-block" : "none";
}

function updateProgress() {
  const answered = Object.keys(STATE).length;
  const total = QUESTIONS.length;
  progressCount.textContent = `${answered} / ${total}`;

  const pct = Math.round((answered / total) * 100);
  progressPercent.textContent = `${pct}%`;
  progressBar.style.width = pct + "%";
}

/* ===========================================================
   INIT
=========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});

