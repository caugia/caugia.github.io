/* ===========================================================
   CAUGIA CONSULTING — GTM INTELLIGENCE ENGINE v6.4
   Stable • Production Ready • No Group Highlight • Premium Save Badge
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
  showSavedBadge();   // NEW — premium badge
}
setInterval(saveState, 700);

/* ---------------------- DOM ELEMENTS ---------------------- */
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
const btnReset = document.getElementById("gi-reset-btn");

const progressCount = document.getElementById("gi-progress-count");
const progressPercent = document.getElementById("gi-progress-percent");
const progressBar = document.getElementById("gi-progress-bar");

/* OPTIONAL BUTTONS */
const btnJumpLast = document.getElementById("gi-jump-last");
const btnJumpFirst = document.getElementById("gi-jump-first");

/* ---------------------- EXPLAIN MODE ---------------------- */
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

/* ---------------------- RENDER QUESTION ---------------------- */
function renderQuestion() {
  const q = QUESTIONS_REF[currentIndex];
  if (!q) return;

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
  setExplainPlaceholder(q);

  updateNav();
  updateProgress();
}

/* ---------------------- BUILD INPUT ---------------------- */
function buildInput(q) {
  if (q.type === "text") return `<input type="text" name="q" class="gi-input">`;

  if (q.type === "number") return `<input type="number" name="q" class="gi-input">`;

  if (q.type === "textarea") return `<textarea name="q" class="gi-textarea"></textarea>`;

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
          </label>
        `).join("")}
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
            </div>
        `)
          .join("")}
      </div>
    `;

  return `<p>Unsupported question type</p>`;
}

/* ---------------------- RESTORE ANSWER ---------------------- */
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

/* ---------------------- VALIDATION ---------------------- */
function validate(q) {
  if (q.type === "group")
    return q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");

  if (q.type === "radio" || q.type === "scale")
    return qBody.querySelector("input:checked") !== null;

  const el = qBody.querySelector("[name='q']");
  return el && el.value.trim() !== "";
}

/* ---------------------- STORE CURRENT ANSWER ---------------------- */
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

btnReset.addEventListener("click", () => {
  if (!confirm("Reset entire assessment? All progress will be lost.")) return;
  localStorage.removeItem(STORAGE_KEY);
  STATE = {};
  currentIndex = 0;
  renderQuestion();
  updateProgress();
});

/* ---------------------- SUBMIT TO MAKE.COM ---------------------- */
btnSubmit.addEventListener("click", async () => {
  storeCurrentAnswer();
  saveState();

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

  const payload = preparePayload();

  btnSubmit.textContent = "Submitting...";
  btnSubmit.disabled = true;

  try {
    const response = await fetch(
      "https://hook.eu1.make.com/8o2bnhmywydljby2rsxrfhsynp4rzrx8",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }
    );

    if (!response.ok) throw new Error("Submission failed");

    localStorage.removeItem(STORAGE_KEY);
    window.location.href = "/gtm-intelligence-thank-you.html";
  } catch (error) {
    alert("Submission failed.");
    btnSubmit.disabled = false;
    btnSubmit.textContent = "Submit";
  }
});

/* ---------------------- PAYLOAD BUILDER ---------------------- */
function preparePayload() {
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

  const context = {};
  const answers = {};

  QUESTIONS_REF.forEach(q => {
    if (q.pillar === 0) {
      if (q.type === "group") {
        q.fields.forEach(f => {
          context[f.name] = STATE[f.name] || "";
        });
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
      timestamp: new Date().toISOString(),
      version: "v6.4",
      total_questions: QUESTIONS_REF.length,
      completion_rate: calculateCompletionRate()
    }
  };
}

/* ---------------------- COMPLETION RATE ---------------------- */
function calculateCompletionRate() {
  let answered = 0;
  QUESTIONS_REF.forEach(q => {
    if (q.type === "group") {
      const filled = q.fields.every(
        f => STATE[f.name] && STATE[f.name].trim() !== ""
      );
      if (filled) answered++;
    } else if (STATE[q.id] && STATE[q.id].trim() !== "") {
      answered++;
    }
  });
  return Math.round((answered / QUESTIONS_REF.length) * 100);
}

/* ---------------------- PROGRESS ---------------------- */
function updateProgress() {
  let answered = 0;

  QUESTIONS_REF.forEach(q => {
    if (q.type === "group") {
      const filled = q.fields.every(
        f => STATE[f.name] && STATE[f.name].trim() !== ""
      );
      if (filled) answered++;
    } else {
      if (STATE[q.id] && STATE[q.id].trim() !== "") answered++;
    }
  });

  const total = QUESTIONS_REF.length;
  const pct = Math.round((answered / total) * 100);

  progressCount.textContent = `${answered} / ${total}`;
  progressPercent.textContent = `${pct}%`;
  progressBar.style.width = `${pct}%`;
}

/* ---------------------- CLICKABLE PILLARS ---------------------- */
leftPillars.forEach(li => {
  li.addEventListener("click", () => {
    const pillarIndex = Number(li.dataset.p);
    const firstIndex = QUESTIONS_REF.findIndex(
      q => q.pillar === pillarIndex
    );

    if (firstIndex >= 0) {
      currentIndex = firstIndex;
      renderQuestion();
    }
  });
});

/* ---------------------- JUMP TO LAST ANSWERED ---------------------- */
function jumpToLast() {
  const keys = Object.keys(STATE)
    .filter(k => !isNaN(Number(k)))
    .map(k => Number(k));

  if (!keys.length) return;

  const lastId = Math.max(...keys);
  const idx = QUESTIONS_REF.findIndex(q => q.id === lastId);

  if (idx >= 0) {
    currentIndex = idx;
    renderQuestion();
  }
}

if (btnJumpLast) btnJumpLast.addEventListener("click", jumpToLast);

/* ---------------------- JUMP TO FIRST UNANSWERED ---------------------- */
function jumpToFirstUnanswered() {
  for (let i = 0; i < QUESTIONS_REF.length; i++) {
    const q = QUESTIONS_REF[i];

    if (q.type === "group") {
      const filled = q.fields.every(
        f => STATE[f.name] && STATE[f.name].trim() !== ""
      );
      if (!filled) {
        currentIndex = i;
        renderQuestion();
        return;
      }
    } else {
      if (!STATE[q.id] || STATE[q.id].trim() === "") {
        currentIndex = i;
        renderQuestion();
        return;
      }
    }
  }

  alert("All questions are already answered.");
}

if (btnJumpFirst) btnJumpFirst.addEventListener("click", jumpToFirstUnanswered);

/* ---------------------- SAVED BADGE (NEW) ---------------------- */
let savedTimer;

function showSavedBadge() {
  let badge = document.getElementById("gi-saved-badge");

  if (!badge) {
    badge = document.createElement("div");
    badge.id = "gi-saved-badge";
    badge.textContent = "Saved";
    Object.assign(badge.style, {
      position: "fixed",
      bottom: "22px",
      right: "22px",
      background: "#0046A5",
      color: "white",
      padding: "6px 14px",
      borderRadius: "8px",
      fontSize: "13px",
      opacity: "0",
      transition: "opacity .3s ease",
      zIndex: "9999"
    });
    document.body.appendChild(badge);
  }

  badge.style.opacity = "1";

  clearTimeout(savedTimer);
  savedTimer = setTimeout(() => {
    badge.style.opacity = "0";
  }, 1400);
}

/* ---------------------- INIT ---------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});
