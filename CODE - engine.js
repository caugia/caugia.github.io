
/* ===========================================================
   CAUGIA CONSULTING — GTM INTELLIGENCE ENGINE v7.1.0
   Logic: Position-Based Auto-Scoring + Direct Make.com Payload + Question Mapping
   Status: PRODUCTION READY
   =========================================================== */

/* ---------------------- CONFIGURATION ---------------------- */
// De Webhook URL uit jouw Make.com Module 1
const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/8vg0fkeflod05er5zuvmtfgcgqk17hnj"; 

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
}
// Auto-save elke 700ms
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

  // Fallback voor PILLAR_META als die niet geladen is
  const pName = (typeof PILLAR_META !== 'undefined' && PILLAR_META[q.pillar]) ? PILLAR_META[q.pillar].name : `Pillar ${q.pillar}`;

  box.innerHTML = `
    <div class="gi-explain-inner">
      <strong>Why this question matters</strong>
      <p>This placeholder shows where future AI-powered guidance will appear.</p>
      <p><em>Pillar:</em> ${pName}</p>
      <p><em>Question:</em> ${q.title}</p>
    </div>
  `;
  box.style.display = "block";
}

/* ---------------------- RENDER QUESTION ---------------------- */
function renderQuestion() {
  const q = QUESTIONS_REF[currentIndex];
  if (!q) return;

  // Haal meta data op (veilig)
  const pMeta = (typeof PILLAR_META !== 'undefined') ? PILLAR_META[q.pillar] : null;

  if (kicker) kicker.textContent = pMeta ? pMeta.name : `Pillar ${q.pillar}`;
  if (rightName) rightName.textContent = pMeta ? pMeta.name : `Pillar ${q.pillar}`;
  if (rightDesc) rightDesc.textContent = pMeta ? pMeta.desc : "";

  if (qTitle) qTitle.textContent = q.title || "";
  if (qSub) qSub.textContent = q.sub || "";

  if (leftPillars) {
    leftPillars.forEach(li =>
      li.classList.toggle("active", Number(li.dataset.p) === q.pillar)
    );
  }

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
        ${q.fields.map(f => `
          <div class="gi-group-field">
            <label>${f.label}</label>
            <input type="text" name="${f.name}">
          </div>
        `).join("")}
      </div>
    `;

  return `<p>Unsupported question type: ${q.type}</p>`;
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

/* ---------------------- NAVIGATION EVENTS ---------------------- */
if (btnNext) {
  btnNext.addEventListener("click", () => {
    const q = QUESTIONS_REF[currentIndex];
    storeCurrentAnswer();
    if (!validate(q)) {
      alert("Please answer this question.");
      return;
    }
    currentIndex++;
    renderQuestion();
  });
}

if (btnPrev) {
  btnPrev.addEventListener("click", () => {
    storeCurrentAnswer();
    if (currentIndex > 0) currentIndex--;
    renderQuestion();
  });
}

if (btnClear) {
  btnClear.addEventListener("click", () => {
    const q = QUESTIONS_REF[currentIndex];
    if (q.type === "group") q.fields.forEach(f => delete STATE[f.name]);
    else delete STATE[q.id];
    renderQuestion();
  });
}

if (btnSave) btnSave.addEventListener("click", saveState);

if (btnReset) {
  btnReset.addEventListener("click", () => {
    if (!confirm("Reset entire assessment? All progress will be lost.")) return;
    localStorage.removeItem(STORAGE_KEY);
    STATE = {};
    currentIndex = 0;
    renderQuestion();
    updateProgress();
  });
}

/* ---------------------- SUBMIT LOGIC (PRODUCTION) ---------------------- */
if (btnSubmit) {
  btnSubmit.addEventListener("click", async () => {
    storeCurrentAnswer();
    saveState();

    // 1. Full Validation
    const allAnswered = QUESTIONS_REF.every(q => {
      if (q.type === "group") {
        return q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");
      }
      return STATE[q.id] && STATE[q.id].trim() !== "";
    });

    if (!allAnswered) {
      alert("Please complete all questions before submitting.");
      jumpToFirstUnanswered();
      return;
    }

    // 2. Prepare Payload (Calculates Scores + Question Map)
    const payload = preparePayload();

    console.log("📦 Sending Production Payload:", JSON.stringify(payload, null, 2));

    btnSubmit.textContent = "Submitting...";
    btnSubmit.disabled = true;

    // 3. Send to Make
    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Submission failed");

      // 4. Success Redirect
      localStorage.removeItem(STORAGE_KEY);
      window.location.href = "/gtm-intelligence-thank-you.html";

    } catch (error) {
      console.error("❌ Error:", error);
      alert("Submission failed. Please check your internet connection.");
      btnSubmit.textContent = "Submit Report";
      btnSubmit.disabled = false;
    }
  });
}

/* ---------------------- TEST SUBMIT (DEV ONLY) ---------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const navRow = document.querySelector(".gi-nav-row");
  if (navRow) {
    const testBtn = document.createElement("button");
    testBtn.id = "gi-test-submit";
    testBtn.className = "gi-btn";
    testBtn.textContent = "TEST SUBMIT";
    testBtn.style.backgroundColor = "#F36C21"; // Caugia Orange
    testBtn.style.color = "#fff";
    testBtn.style.fontWeight = "bold";
    testBtn.style.marginLeft = "10px";
    
    navRow.appendChild(testBtn);

    testBtn.addEventListener("click", async () => {
      storeCurrentAnswer(); // Save current field just in case
      saveState();

      // No validation needed for test
      const payload = preparePayload();
      console.log("📦 TEST Payload:", JSON.stringify(payload, null, 2));

      testBtn.textContent = "Sending...";
      testBtn.disabled = true;

      try {
        const response = await fetch(MAKE_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("✅ Test data sent to Make! Check the scenario.");
        } else {
            throw new Error("Make returned error");
        }
        
        testBtn.textContent = "TEST SUBMIT";
        testBtn.disabled = false;

      } catch (error) {
        console.error("❌ Test Error:", error);
        alert("Test failed. Check console.");
        testBtn.textContent = "TEST SUBMIT";
        testBtn.disabled = false;
      }
    });
  }
});

/* ---------------------- SCORING ENGINE (THE BRAIN V7) ---------------------- */
function calculatePillarScores() {
  const pillarTotals = {};
  const pillarCounts = {};

  // Init pillars 1-12
  for (let i = 1; i <= 12; i++) {
    pillarTotals[i] = 0;
    pillarCounts[i] = 0;
  }

  // Iterate all questions
  QUESTIONS_REF.forEach(q => {
    // Skip non-scorable questions (like text fields or groups)
    if (!q.pillar || !q.options || q.options.length === 0) return;

    const answer = STATE[q.id];
    if (!answer) return; // Unanswered questions are ignored in average

    const index = q.options.indexOf(answer);
    if (index === -1) return;

    /* SCORING LOGIC:
       Index 0 (Top) = 100 points
       Index Last (Bottom) = 0 points
    */
    const maxIndex = q.options.length - 1;
    let points = 0;

    if (maxIndex > 0) {
      points = Math.round(((maxIndex - index) / maxIndex) * 100);
    } else {
      points = 100; // Single option = 100
    }

    pillarTotals[q.pillar] += points;
    pillarCounts[q.pillar]++;
  });

  // Calculate Averages
  const finalScores = {};
  for (let i = 1; i <= 12; i++) {
    const total = pillarTotals[i];
    const count = pillarCounts[i];
    const average = count > 0 ? Math.round(total / count) : 0;
    
    // Create key "score_01", "score_02", etc.
    const key = `score_${String(i).padStart(2, '0')}`;
    finalScores[key] = average;
  }

  return finalScores;
}

/* ---------------------- HELPER: QUESTION MAP BUILDER ---------------------- */
function buildQuestionMap() {
  const map = {};
  
  QUESTIONS_REF.forEach(q => {
    if (q.type === "group") {
      // Voor groepsvragen (zoals de metrics in Pillar 0)
      // Key = veldnaam (bijv. 'win_rate'), Value = het label (bijv. 'Win rate (%)')
      q.fields.forEach(f => {
        map[f.name] = f.label;
      });
    } else {
      // Voor standaard vragen (Scale/Radio/Text)
      // Key = Q + ID (bijv. 'Q1001'), Value = de vraag titel
      map[`Q${q.id}`] = q.title;
    }
  });
  
  return map;
}

/* ---------------------- PAYLOAD BUILDER (FIXED & MAPPED) ---------------------- */
function preparePayload() {
  // 1. Customer Object
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
    companysize: STATE["companysize"] || "",
    payment_id: STATE["payment_id"] || ""
  };

  // 2. Context Object (Dynamisch alle Pillar 0 vragen verzamelen)
  const context = {};
  QUESTIONS_REF.forEach(q => {
    if (q.pillar === 0) {
      if (q.type === "group") {
        q.fields.forEach(field => {
          if (!customer.hasOwnProperty(field.name)) {
            context[field.name] = STATE[field.name] || "";
          }
        });
      } else {
        context[`Q${q.id}`] = STATE[q.id] || "";
      }
    }
  });

  // 3. Answers (Pillar 1-12)
  const answers = {};
  for (let id = 1001; id <= 12020; id++) {
    if (STATE[id]) answers[`Q${id}`] = STATE[id];
  }

  // 4. Scores
  const scores = calculatePillarScores();

  // 5. Metadata
  const metadata = {
    timestamp: new Date().toISOString(),
    version: "v7.1.0",
    total_questions: QUESTIONS_REF.length,
    completion_rate: calculateCompletionRate()
  };

  // 6. Question Map (NIEUW: De Legenda voor Claude)
  const question_map = buildQuestionMap();

  // 7. Return complete payload
  return {
    customer,
    context,
    answers,
    ...scores,   // score_01, score_02 etc
    metadata,
    question_map // Hier zit nu de vertaling in
  };
}

/* ---------------------- HELPERS ---------------------- */
function calculateCompletionRate() {
  let answered = 0;
  QUESTIONS_REF.forEach(q => {
    if (q.type === "group") {
      const filled = q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");
      if (filled) answered++;
    } else if (STATE[q.id] && STATE[q.id].trim() !== "") {
      answered++;
    }
  });
  return Math.round((answered / QUESTIONS_REF.length) * 100);
}

function updateProgress() {
  let answered = 0;
  QUESTIONS_REF.forEach(q => {
    if (q.type === "group") {
      const filled = q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");
      if (filled) answered++;
      return;
    }
    if (STATE[q.id] && STATE[q.id].trim() !== "") answered++;
  });

  const total = QUESTIONS_REF.length;
  const pct = Math.round((answered / total) * 100);
  
  if (progressCount) progressCount.textContent = `${answered} / ${total}`;
  if (progressPercent) progressPercent.textContent = `${pct}%`;
  if (progressBar) progressBar.style.width = `${pct}%`;
}

function updateNav() {
  if (btnPrev) btnPrev.style.display = currentIndex === 0 ? "none" : "inline-block";

  if (currentIndex === QUESTIONS_REF.length - 1) {
    if (btnNext) btnNext.style.display = "none";
    if (btnSubmit) btnSubmit.style.display = "inline-block";
  } else {
    if (btnNext) btnNext.style.display = "inline-block";
    if (btnSubmit) btnSubmit.style.display = "none";
  }
}

function jumpToFirstUnanswered() {
  for (let i = 0; i < QUESTIONS_REF.length; i++) {
    const q = QUESTIONS_REF[i];
    if (q.type === "group") {
      const filled = q.fields.every(f => STATE[f.name] && STATE[f.name].trim() !== "");
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

function jumpToLast() {
  const keys = Object.keys(STATE).filter(k => !isNaN(Number(k))).map(k => Number(k));
  if (!keys.length) return;
  const lastId = Math.max(...keys);
  const idx = QUESTIONS_REF.findIndex(q => q.id === lastId);
  if (idx >= 0) {
    currentIndex = idx;
    renderQuestion();
  }
}

/* ---------------------- INIT ---------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});
