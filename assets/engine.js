/* ===========================================================
   CAUGIA CONSULTING — GTM INTELLIGENCE ENGINE v5.0 (Block 1)
   CORE ENGINE — Smooth UX • Soft Validation • Auto-save Badge
=========================================================== */

/* ---------------- STATE ---------------- */
let currentIndex = 0;
const STORAGE_KEY = "caugia_gtm_report_v1";
let STATE = loadState();

/* ---------------- QUESTIONS (never re-declared) ---------------- */
const QUESTIONS = Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];
if (QUESTIONS.length === 0) {
  console.error("❌ QUESTIONS.js missing or empty");
}

/* ---------------- DOM ---------------- */
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

/* Auto-save badge */
let saveTimer;
const autoSaveBadge = document.createElement("div");
autoSaveBadge.className = "gi-autosave-badge";
autoSaveBadge.textContent = "Saved ✓";
autoSaveBadge.style.cssText = `
  position: absolute;
  top: -22px;
  right: 0;
  background: #0A53D9;
  color: white;
  padding: 3px 8px;
  font-size: 11px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity .4s ease;
`;
document.body.appendChild(autoSaveBadge);


/* ===========================================================
   ANIMATION: fade transition for question changes
=========================================================== */
function fadeOutIn(callback) {
  qBody.style.opacity = 0;
  setTimeout(() => {
    callback();
    qBody.style.opacity = 1;
  }, 160);
}


/* ===========================================================
   RENDER QUESTION
=========================================================== */
function renderQuestion() {
  fadeOutIn(() => {
    const q = QUESTIONS[currentIndex];
    if (!q) return;

    kicker.textContent = PILLAR_META[q.pillar].name;
    rightName.textContent = PILLAR_META[q.pillar].name;
    rightDesc.textContent = PILLAR_META[q.pillar].desc;

    qTitle.textContent = q.title || "";
    qSub.textContent   = q.sub || "";

    leftPillars.forEach(li =>
      li.classList.toggle("active", Number(li.dataset.p) === q.pillar)
    );

    qBody.innerHTML = buildInput(q);
    restoreAnswer(q);

    updateNav();
    updateProgress();
  });
}


/* ===========================================================
   INPUT BUILDER
=========================================================== */
function buildInput(q) {

  if (q.type === "text")
    return `<input type="text" name="q" class="gi-input gi-smooth">`;

  if (q.type === "number")
    return `<input type="number" name="q" class="gi-input gi-smooth">`;

  if (q.type === "textarea")
    return `<textarea name="q" class="gi-textarea gi-smooth"></textarea>`;

  if (q.type === "select")
    return `
      <select name="q" class="gi-select gi-smooth">
        <option value="">Select an option…</option>
        ${q.options.map(o => `<option value="${o}">${o}</option>`).join("")}
      </select>
    `;

  if (q.type === "radio" || q.type === "scale")
    return q.options.map(o => `
      <label class="gi-option-card gi-smooth">
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
            <input type="text" name="${f.name}" class="gi-input gi-smooth">
          </div>
        `).join("")}
      </div>
    `;

  return `<p>Unsupported question type</p>`;
}


/* ===========================================================
   RESTORE
=========================================================== */
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


/* ===========================================================
   SOFT VALIDATION (no alerts)
=========================================================== */
function showValidationError() {
  qBody.classList.add("gi-invalid");
  setTimeout(() => qBody.classList.remove("gi-invalid"), 600);
}

function validate(q) {

  if (q.type === "group") {
    return q.fields.every(f =>
      STATE[f.name] && STATE[f.name].trim() !== ""
    );
  }

  if (q.type === "radio" || q.type === "scale")
    return qBody.querySelector("input:checked") !== null;

  const el = qBody.querySelector("[name='q']");
  return el && el.value.trim() !== "";
}


/* ===========================================================
   SAVE + Autosave badge
=========================================================== */
function storeCurrentAnswer() {
  const q = QUESTIONS[currentIndex];

  if (q.type === "group") {
    q.fields.forEach(f => {
      const el = qBody.querySelector(`[name="${f.name}"]`);
      STATE[f.name] = el ? el.value.trim() : "";
    });
  } else if (q.type === "radio" || q.type === "scale") {
    const selected = qBody.querySelector("input:checked");
    if (selected) STATE[q.id] = selected.value;
  } else {
    const el = qBody.querySelector("[name='q']");
    if (el) STATE[q.id] = el.value.trim();
  }

  saveState();
  triggerAutosaveBadge();
}

function triggerAutosaveBadge() {
  autoSaveBadge.style.opacity = 1;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    autoSaveBadge.style.opacity = 0;
  }, 900);
}


/* ===========================================================
   NAVIGATION
=========================================================== */
btnNext.addEventListener("click", () => {
  const q = QUESTIONS[currentIndex];

  storeCurrentAnswer();

  if (!validate(q)) {
    showValidationError();
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
  const q = QUESTIONS[currentIndex];

  if (q.type === "group") q.fields.forEach(f => delete STATE[f.name]);
  else delete STATE[q.id];

  renderQuestion();
});

btnSave.addEventListener("click", storeCurrentAnswer);

btnSubmit.addEventListener("click", () => {
  storeCurrentAnswer();
  alert("Assessment submitted.");
});

btnReset.addEventListener("click", () => {
  if (!confirm("Reset entire assessment?")) return;
  localStorage.removeItem(STORAGE_KEY);
  STATE = {};
  currentIndex = 0;
  renderQuestion();
});


/* ===========================================================
   PROGRESS
=========================================================== */
function updateProgress() {
  let answered = 0;

  QUESTIONS.forEach(q => {
    if (q.type === "group") {
      const filled = q.fields.every(f =>
        STATE[f.name] && STATE[f.name].trim() !== ""
      );
      if (filled) answered++;
    } else {
      if (STATE[q.id] && STATE[q.id].trim() !== "") answered++;
    }
  });

  const total = QUESTIONS.length;
  const pct = Math.round((answered / total) * 100);

  progressCount.textContent = `${answered} / ${total}`;
  progressPercent.textContent = pct + "%";
  progressBar.style.width = pct + "%";
}


/* ===========================================================
   INIT
=========================================================== */
document.addEventListener("DOMContentLoaded", renderQuestion);

