/* ===========================================================
   CAUGIA INTELLIGENCE ENGINE v7.1 ULTRA EDITION
   MAX VERSTAPPEN MODE — FULL EXPANDED VERSION
   =========================================================== */

/* -----------------------------------------------------------
   GLOBAL STATE
----------------------------------------------------------- */

let currentIndex = 0;
const STORAGE_KEY = "caugia_gtm_report_v1";
let STATE = loadState();

/* Load user progress */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (err) {
    return {};
  }
}

/* Autosave */
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
}
setInterval(saveState, 700);


/* -----------------------------------------------------------
   QUESTIONS SOURCE (from QUESTIONS.js)
----------------------------------------------------------- */

const QUESTIONS = Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];
if (!QUESTIONS.length) {
  console.error("❌ QUESTIONS.js not loaded or empty.");
}


/* -----------------------------------------------------------
   PILLAR INDEX MAP
   Pillar 0 = 25 questions, others = 20 each
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
   TELEMETRY ENGINE (nested structure)
----------------------------------------------------------- */

let TELEMETRY = {};
let telemetryStart = Date.now();

function telemetryBegin() {
  telemetryStart = Date.now();
}

function telemetryStop(question) {
  const elapsed = Date.now() - telemetryStart;

  if (!TELEMETRY[question.id]) {
    TELEMETRY[question.id] = {
      time: 0,
      edits: 0,
      revisits: 0
    };
  }

  TELEMETRY[question.id].time += elapsed;
}


/* -----------------------------------------------------------
   RESUME BANNER
----------------------------------------------------------- */

function detectResumePoint() {
  const keys = Object.keys(STATE)
    .filter(k => !isNaN(Number(k)))
    .map(k => Number(k));

  if (!keys.length) return null;

  const last = Math.max(...keys);
  if (last <= 1) return null;

  return last - 1; // convert ID to index
}

const resumeIndex = detectResumePoint();

if (resumeIndex !== null) {
  const banner = document.createElement("div");
  banner.className = "gi-resume-banner";
  banner.textContent = `Resume at question ${resumeIndex + 1}?`;

  banner.onclick = () => {
    currentIndex = resumeIndex;
    banner.remove();
    renderQuestion();
  };

  document.body.prepend(banner);
}


/* -----------------------------------------------------------
   VIRTUAL DOM PRE-CACHE
----------------------------------------------------------- */

let CACHE = [];

function createNode(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstChild;
}

function preCacheAllQuestions() {
  CACHE = QUESTIONS.map(q => {
    if (q.type === "text") {
      return createNode(`<input type="text" name="q" class="gi-input">`);
    }

    if (q.type === "number") {
      return createNode(`<input type="number" name="q" class="gi-input">`);
    }

    if (q.type === "textarea") {
      return createNode(`<textarea name="q" class="gi-textarea"></textarea>`);
    }

    if (q.type === "select") {
      return createNode(`
        <select name="q" class="gi-select">
          <option value="">Select an option…</option>
          ${q.options.map(o => `<option value="${o}">${o}</option>`).join("")}
        </select>
      `);
    }

    if (q.type === "radio" || q.type === "scale") {
      return createNode(`
        <div class="gi-options-grid">
          ${q.options.map(o => `
            <label class="gi-option-card">
              <input type="radio" name="q" value="${o}">
              <span>${o}</span>
            </label>
          `).join("")}
        </div>
      `);
    }

    if (q.type === "group") {
      return createNode(`
        <div class="gi-group">
          ${q.fields.map(f => `
            <div class="gi-group-field">
              <label>${f.label}</label>
              <input type="text" name="${f.name}">
            </div>
          `).join("")}
        </div>
      `);
    }

    return createNode(`<p>Unsupported question type</p>`);
  });
}

preCacheAllQuestions();

/* ===========================================================
   BLOCK 2 — NAVIGATION, VALIDATION, RESTORE, STORE, HIGHLIGHT
=========================================================== */


/* -----------------------------------------------------------
   RESTORE ANSWER
----------------------------------------------------------- */

function restoreAnswer(q) {
  if (q.type === "group") {
    q.fields.forEach(f => {
      const el = elBody.querySelector(`[name="${f.name}"]`);
      if (el && STATE[f.name]) {
        el.value = STATE[f.name];
      }
    });
    return;
  }

  const saved = STATE[q.id];
  if (!saved) return;

  const radio = elBody.querySelector(`input[value="${saved}"]`);
  if (radio) radio.checked = true;

  const el = elBody.querySelector("[name='q']");
  if (el) el.value = saved;
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

  const el = elBody.querySelector("[name='q']");
  if (el) STATE[q.id] = el.value.trim();
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

  const el = elBody.querySelector("[name='q']");
  return el && el.value.trim() !== "";
}


/* -----------------------------------------------------------
   HIGHLIGHT ACTIVE PILLAR
----------------------------------------------------------- */

function highlightPillar() {
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
   RENDER QUESTION
----------------------------------------------------------- */

function renderQuestion() {
  const q = QUESTIONS[currentIndex];

  telemetryBegin();

  elKicker.textContent = PILLAR_META[q.pillar].name;
  elTitle.textContent = q.title;
  elSub.textContent = q.sub || "";

  elRightName.textContent = PILLAR_META[q.pillar].name;
  elRightDesc.textContent = PILLAR_META[q.pillar].desc;

  highlightPillar();

  elBody.innerHTML = "";
  const node = CACHE[currentIndex].cloneNode(true);
  elBody.appendChild(node);

  restoreAnswer(q);
  updateNav();
  updateProgress();

  telemetryStop(q);
}


/* -----------------------------------------------------------
   NEXT / PREV
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


/* -----------------------------------------------------------
   CLEAR ANSWER
----------------------------------------------------------- */

btnClear.addEventListener("click", () => {
  const q = QUESTIONS[currentIndex];

  if (q.type === "group") {
    q.fields.forEach(f => delete STATE[f.name]);
  } else {
    delete STATE[q.id];
  }

  renderQuestion();
});

/* SAVE BUTTON */
btnSave.addEventListener("click", saveState);


/* -----------------------------------------------------------
   RESET EVERYTHING
----------------------------------------------------------- */

btnReset.addEventListener("click", () => {
  if (!confirm("Reset entire assessment?")) return;

  STATE = {};
  localStorage.removeItem(STORAGE_KEY);
  currentIndex = 0;

  renderQuestion();
});


/* -----------------------------------------------------------
   CLICKABLE PILLARS
----------------------------------------------------------- */

elLeftPillars.forEach(li => {
  li.addEventListener("click", () => {
    const p = Number(li.dataset.p);
    const index = PILLAR_START[p];

    storeAnswer();
    currentIndex = index;

    renderQuestion();
  });
});


/* -----------------------------------------------------------
   JUMP TO LAST ANSWERED
----------------------------------------------------------- */

function jumpToLastAnswered() {
  const keys = Object.keys(STATE).filter(k => !isNaN(Number(k)));

  if (!keys.length) return;

  const max = Math.max(...keys.map(n => Number(n)));
  const index = Math.max(0, max - 1);

  storeAnswer();
  currentIndex = index;

  renderQuestion();
}

if (btnJumpLast) {
  btnJumpLast.addEventListener("click", jumpToLastAnswered);
}


/* -----------------------------------------------------------
   PROGRESS BAR
----------------------------------------------------------- */

function updateProgress() {
  let answered = 0;

  QUESTIONS.forEach(q => {
    if (q.type === "group") {
      const full = q.fields.every(f => STATE[f.name]);
      if (full) answered++;
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
   NAVIGATION VISIBILITY
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

/* ===========================================================
   BLOCK 3 — RETRY, TELEMETRY EXPORT, PAYLOAD
=========================================================== */


/* -----------------------------------------------------------
   FETCH WITH RETRY (Make.com Safe)
----------------------------------------------------------- */

async function fetchWithRetry(url, options, retries = 3, delay = 300) {
  try {
    return await fetch(url, options);
  } catch (err) {
    if (retries <= 0) throw err;

    await new Promise(resolve => setTimeout(resolve, delay));

    return fetchWithRetry(url, options, retries - 1, delay * 2);
  }
}


/* -----------------------------------------------------------
   BUILD TELEMETRY OBJECT (nested)
----------------------------------------------------------- */

function buildTelemetry() {
  const out = {};

  Object.keys(TELEMETRY).forEach(id => {
    out[id] = TELEMETRY[id];
  });

  return out;
}


/* -----------------------------------------------------------
   BUILD PAYLOAD FOR MAKE.COM
----------------------------------------------------------- */

function buildPayload() {
  const customer = {};
  const context = {};
  const answers = {};

  QUESTIONS.forEach(q => {
    if (q.pillar === 0) {
      if (q.type === "group") {
        q.fields.forEach(f => {
          customer[f.name] = STATE[f.name] || "";
        });
      } else {
        context[q.id] = STATE[q.id] || "";
      }
    } else {
      answers[`Q${q.id}`] = STATE[q.id] || "";
    }
  });

  const payload = {
    customer,
    context,
    answers,
    telemetry: buildTelemetry(),
    metadata: {
      version: "v7.1",
      completed_at: new Date().toISOString(),
      total_questions: QUESTIONS.length
    }
  };

  return payload;
}

/* ===========================================================
   BLOCK 4 — SUBMIT ENGINE + INIT
=========================================================== */


/* -----------------------------------------------------------
   SUBMIT ENGINE
----------------------------------------------------------- */

btnSubmit.addEventListener("click", async () => {
  storeAnswer();
  saveState();

  const allAnswered = QUESTIONS.every(q => {
    if (q.type === "group") {
      return q.fields.every(f => STATE[f.name]);
    }
    return STATE[q.id];
  });

  if (!allAnswered) {
    alert("Please complete all questions before submitting.");
    return;
  }

  btnSubmit.disabled = true;
  btnSubmit.textContent = "Submitting...";

  const payload = buildPayload();

  try {
    const res = await fetchWithRetry(
      "https://hook.eu1.make.com/8o2bnhmywydljby2rsxrfhsynp4rzrx8",
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
      }
    );

    if (!res.ok) throw new Error("Failed");

    localStorage.removeItem(STORAGE_KEY);

    window.location.href = "/gtm-intelligence-thank-you.html";
  } catch (err) {
    alert("Submission failed. Please try again.");
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
