/* ===========================================================
   CAUGIA CONSULTING — GTM INTELLIGENCE ENGINE v7.0
   MAX VERSTAPPEN EDITION — The GOAT Engine
   Ultra-fast • Error-proof • Navigation Turbo • Make.com ready
   =========================================================== */

/* -----------------------------------------------------------
   STATE MANAGEMENT
----------------------------------------------------------- */
let currentIndex = 0;
const STORAGE_KEY = "caugia_gtm_report_v1";
let STATE = loadState();

/* Load saved state */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

/* Auto-save every 700ms */
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
}
setInterval(saveState, 700);

/* -----------------------------------------------------------
   QUESTIONS SOURCE
----------------------------------------------------------- */
const QUESTIONS = Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];

if (QUESTIONS.length === 0) {
  console.error("❌ QUESTIONS.js not loaded or empty.");
}

/* -----------------------------------------------------------
   PILLAR START INDEX MAP
   Pillar 0 = 25 vragen, pillars 1–12 = 20 vragen elk
----------------------------------------------------------- */
const PILLAR_START = {
  0: 0,
  1: 25,
  2: 45,
  3: 65,
  4: 85,
  5: 105,
  6: 125,
  7: 145,
  8: 165,
  9: 185,
  10: 205,
  11: 225,
  12: 245
};

/* -----------------------------------------------------------
   DOM SHORTCUTS
----------------------------------------------------------- */
const elTitle = document.getElementById("gi-question-title");
const elSub = document.getElementById("gi-question-sub");
const elBody = document.getElementById("gi-question-body");
const elKicker = document.getElementById("gi-question-kicker");
const elLeftPillars = document.querySelectorAll("#gi-left-pillar-list li");
const elRightName = document.getElementById("gi-pillar-name");
const elRightDesc = document.getElementById("gi-pillar-desc");

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
   EXPLAIN MODE (future AI integration)
----------------------------------------------------------- */
let explainMode = false;

function toggleExplain() {
  explainMode = !explainMode;
  const box = document.getElementById("gi-explain-box");
  if (box) box.style.display = explainMode ? "block" : "none";
}

function setExplainPlaceholder(q) {
  const box = document.getElementById("gi-explain-box");
  if (!box || !explainMode) return;

  box.innerHTML = `
    <div class="gi-explain-inner">
      <strong>Why this question matters</strong>
      <p>This placeholder shows where future AI-powered guidance will appear.</p>
      <p><em>Pillar:</em> ${PILLAR_META[q.pillar].name}</p>
      <p><em>Question:</em> ${q.title}</p>
    </div>
  `;
}

/* -----------------------------------------------------------
   BUILD INPUT (ULTRA CLEAN)
----------------------------------------------------------- */
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
        ${q.options
          .map(o => `
            <label class="gi-option-card">
              <input type="radio" name="q" value="${o}">
              <span>${o}</span>
            </label>
          `)
          .join("")}
      </div>
    `;

  if (q.type === "group")
    return `
      <div class="gi-group">
        ${q.fields
          .map(
            f => `
            <div class="gi-group-field">
              <label>${f.label}</label>
              <input type="text" name="${f.name}">
            </div>`
          )
          .join("")}
      </div>
    `;

  return `<p>Unsupported question type</p>`;
}

/* -----------------------------------------------------------
   RESTORE ANSWERS
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
  if (saved == null) return;

  const input = elBody.querySelector(`[value="${saved}"]`);
  if (input) input.checked = true;

  const el = elBody.querySelector("[name='q']");
  if (el) el.value = saved;
}

/* -----------------------------------------------------------
   STORE CURRENT ANSWER
----------------------------------------------------------- */
function storeAnswer() {
  const q = QUESTIONS[currentIndex];
  if (!q) return;

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

  const el = elBody.querySelector("[name='q']");
  if (el) STATE[q.id] = el.value.trim();
}

/* -----------------------------------------------------------
   VALIDATION
----------------------------------------------------------- */
function validate(q) {
  if (q.type === "group")
    return q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");

  if (q.type === "radio" || q.type === "scale")
    return elBody.querySelector("input:checked") !== null;

  const el = elBody.querySelector("[name='q']");
  return el && el.value.trim() !== "";
}

/* -----------------------------------------------------------
   RENDER QUESTION (SUPER CLEAN)
----------------------------------------------------------- */
function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  if (!q) return;

  elKicker.textContent = PILLAR_META[q.pillar].name;
  elTitle.textContent = q.title;
  elSub.textContent = q.sub || "";

  elRightName.textContent = PILLAR_META[q.pillar].name;
  elRightDesc.textContent = PILLAR_META[q.pillar].desc;

  highlightActivePillar();

  elBody.innerHTML = buildInput(q);
  restoreAnswer(q);
  setExplainPlaceholder(q);

  updateNav();
  updateProgress();
}

/* -----------------------------------------------------------
   ACTIVE PILLAR HIGHLIGHT
----------------------------------------------------------- */
function highlightActivePillar() {
  let active = 0;

  for (let p = 12; p >= 0; p--) {
    if (currentIndex >= PILLAR_START[p]) {
      active = p;
      break;
    }
  }

  elLeftPillars.forEach(li => {
    li.classList.toggle("active", Number(li.dataset.p) === active);
  });
}

/* -----------------------------------------------------------
   INTERACTIVE: CLICKABLE PILLARS
----------------------------------------------------------- */
elLeftPillars.forEach(li => {
  li.addEventListener("click", () => {
    const pillar = Number(li.dataset.p);
    const index = PILLAR_START[pillar];

    storeAnswer();
    currentIndex = index;
    renderQuestion();
  });
});

/* -----------------------------------------------------------
   JUMP TO LAST ANSWERED
----------------------------------------------------------- */
function jumpToLastAnswered() {
  let last = 0;

  for (let key in STATE) {
    const idx = Number(key);
    if (!isNaN(idx) && idx > last) last = idx;
  }

  storeAnswer();
  currentIndex = last - 1; // ID starts at 1, index starts at 0
  if (currentIndex < 0) currentIndex = 0;

  renderQuestion();
}

if (btnJumpLast) {
  btnJumpLast.addEventListener("click", jumpToLastAnswered);
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
  if (q.type === "group") q.fields.forEach(f => delete STATE[f.name]);
  else delete STATE[q.id];
  renderQuestion();
});

btnSave.addEventListener("click", saveState);

btnReset.addEventListener("click", () => {
  if (!confirm("Reset entire assessment?")) return;
  STATE = {};
  localStorage.removeItem(STORAGE_KEY);
  currentIndex = 0;
  renderQuestion();
});

/* -----------------------------------------------------------
   SUBMISSION ENGINE (MAKE.COM)
----------------------------------------------------------- */
btnSubmit.addEventListener("click", async () => {
  storeAnswer();
  saveState();

  const all = QUESTIONS.every(q => {
    if (q.type === "group")
      return q.fields.every(f => STATE[f.name]);
    return STATE[q.id];
  });

  if (!all) {
    alert("Please complete all questions before submitting.");
    return;
  }

  btnSubmit.textContent = "Submitting...";
  btnSubmit.disabled = true;

  try {
    const payload = buildPayload();

    const res = await fetch("https://hook.eu1.make.com/8o2bnhmywydljby2rsxrfhsynp4rzrx8", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error("Submission failed");

    localStorage.removeItem(STORAGE_KEY);
    window.location.href = "/gtm-intelligence-thank-you.html";

  } catch (e) {
    alert("Submission failed. Please try again.");
    btnSubmit.disabled = false;
    btnSubmit.textContent = "Submit";
  }
});

/* -----------------------------------------------------------
   PAYLOAD BUILDER
----------------------------------------------------------- */
function buildPayload() {
  const customer = {};
  const context = {};
  const answers = {};

  QUESTIONS.forEach(q => {
    if (q.pillar === 0) {
      if (q.type === "group") {
        q.fields.forEach(f => (customer[f.name] = STATE[f.name] || ""));
      } else {
        context[q.id] = STATE[q.id] || "";
      }
    } else {
      answers[`Q${q.id}`] = STATE[q.id] || "";
    }
  });

  return {
    customer,
    context,
    answers,
    metadata: {
      version: "v7.0",
      completed_at: new Date().toISOString(),
      total_questions: QUESTIONS.length
    }
  };
}

/* -----------------------------------------------------------
   PROGRESS BAR
----------------------------------------------------------- */
function updateProgress() {
  let answered = 0;

  QUESTIONS.forEach(q => {
    if (q.type === "group") {
      const ok = q.fields.every(f => STATE[f.name]);
      if (ok) answered++;
    } else if (STATE[q.id]) {
      answered++;
    }
  });

  const pct = Math.round((answered / QUESTIONS.length) * 100);

  elProgressCount.textContent = `${answered} / ${QUESTIONS.length}`;
  elProgressPercent.textContent = `${pct}%`;
  elProgressBar.style.width = `${pct}%`;
}

/* -----------------------------------------------------------
   NAV VISIBILITY
----------------------------------------------------------- */
function updateNav() {
  btnPrev.style.display = currentIndex === 0 ? "none" : "inline-block";

  if (currentIndex === QUESTIONS.length - 1) {
    btnNext.style.display = "none";
    btnSubmit.style.display = "inline-block";
  } else {
    btnNext.style.display = "inline-block";
    btnSubmit.style.display = "none";
  }
}

/* -----------------------------------------------------------
   INIT
----------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});
