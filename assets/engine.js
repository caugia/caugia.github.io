/* ===========================================================
CAUGIA CONSULTING — GTM INTELLIGENCE ENGINE v3.3 (Final Fix)
QUESTIONS is NEVER declared here (only read from window)
=========================================================== */

/* ---------------- STATE ---------------- */
let currentIndex = 0;
const STORAGE_KEY = "caugia_gtm_report_v1";

let STATE = loadState();

/* ---------------------- QUESTIONS SOURCE ----------------------
We gebruiken uitsluitend window.QUESTIONS - geen lokale copy.
---------------------------------------------------------------- */

/* Safety check */
if (!Array.isArray(window.QUESTIONS) || window.QUESTIONS.length === 0) {
  console.error("❌ QUESTIONS.js not loaded or is empty.");
}


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
const qTitle = document.getElementById("gi-question-title");
const qSub = document.getElementById("gi-question-sub");
const qBody = document.getElementById("gi-question-body");

const kicker = document.getElementById("gi-question-kicker");
const rightName= document.getElementById("gi-pillar-name");
const rightDesc= document.getElementById("gi-pillar-desc");

const leftPillars = document.querySelectorAll("#gi-left-pillar-list li");

const btnPrev = document.getElementById("gi-prev-btn");
const btnNext = document.getElementById("gi-next-btn");
const btnSubmit = document.getElementById("gi-submit-btn");
const btnClear = document.getElementById("gi-clear-btn");
const btnSave = document.getElementById("gi-save-btn");
const btnReset = document.getElementById("gi-reset-btn");

const progressCount = document.getElementById("gi-progress-count");
const progressPercent = document.getElementById("gi-progress-percent");
const progressBar = document.getElementById("gi-progress-bar");

/* ---------------- RENDER ---------------- */
function renderQuestion() {
  if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS)) {
    console.error("❌ QUESTIONS array not available");
    return;
  }
  
  const q = window.QUESTIONS[currentIndex];
  if (!q) return;

  // Check if PILLAR_META exists
  if (typeof PILLAR_META === 'undefined') {
    console.error("❌ PILLAR_META not loaded");
    return;
  }

  kicker.textContent = PILLAR_META[q.pillar].name;
  rightName.textContent = PILLAR_META[q.pillar].name;
  rightDesc.textContent = PILLAR_META[q.pillar].desc;

  qTitle.textContent = q.title || "";
  qSub.textContent = q.sub || "";

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
    return `<input type="text" name="q" class="gi-text-input" />`;

  if (q.type === "number")
    return `<input type="number" name="q" class="gi-text-input" />`;

  if (q.type === "textarea")
    return `<textarea name="q" class="gi-textarea" rows="4"></textarea>`;

  if (q.type === "select")
    return `
      <select name="q" class="gi-select">
        <option value="">Select an option…</option>
        ${q.options.map(o => `<option value="${o}">${o}</option>`).join("")}
      </select>
    `;

  if (q.type === "radio" || q.type === "scale")
    return q.options.map(o => `
      <label class="gi-radio-label">
        <input type="radio" name="q" value="${o}" />
        ${o}
      </label>
    `).join("");

  if (q.type === "group")
    return `
      <div class="gi-group-wrapper">
        <div class="gi-group-grid">
          ${q.fields.map(f => `
            <div class="gi-group-field">
              <label>${f.label}</label>
              <input type="text" name="${f.name}" />
            </div>
          `).join("")}
        </div>
      </div>
    `;

  return `
    <div class="gi-error">
      Unsupported question type
    </div>
  `;
}

/* ---------------- RESTORE ---------------- */
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
  if (radio) return (radio.checked = true);

  const el = qBody.querySelector("[name='q']");
  if (el) el.value = saved;
}

/* ---------------- VALIDATION ---------------- */
function validate(q) {

  if (q.type === "group")
    return q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");

  if (q.type === "radio" || q.type === "scale")
    return qBody.querySelector("input:checked") !== null;

  const el = qBody.querySelector("[name='q']");
  return el && el.value.trim() !== "";
}

/* ---------------- SAVE ---------------- */
function storeCurrentAnswer() {
  if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS)) return;
  
  const q = window.QUESTIONS[currentIndex];
  if (!q) return;

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

/* ---------------- NAVIGATION ---------------- */
btnNext.addEventListener("click", () => {
  if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS)) return;
  
  const q = window.QUESTIONS[currentIndex];
  if (!q) return;
  
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
  if (currentIndex > 0) currentIndex--;
  renderQuestion();
});

btnClear.addEventListener("click", () => {
  if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS)) return;
  
  const q = window.QUESTIONS[currentIndex];
  if (!q) return;

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
  if (!confirm("Reset entire assessment?")) return;

  localStorage.removeItem(STORAGE_KEY);
  STATE = {};
  currentIndex = 0;
  renderQuestion();
  updateProgress();
});

/* ---------------- PROGRESS ---------------- */
function updateProgress() {
  if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS)) return;
  
  let answered = 0;

  window.QUESTIONS.forEach(q => {
    if (q.type === "group") {
      const filled = q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");
      if (filled) answered++;
      return;
    }
    if (STATE[q.id] && STATE[q.id].trim() !== "") answered++;
  });

  const total = window.QUESTIONS.length;
  const pct = Math.round((answered / total) * 100);

  progressCount.textContent = `${answered} / ${total}`;
  progressPercent.textContent = pct + "%";
  progressBar.style.width = pct + "%";
}

/* ---------------- INIT ---------------- */
document.addEventListener("DOMContentLoaded", renderQuestion);
