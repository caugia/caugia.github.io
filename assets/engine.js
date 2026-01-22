/* ===========================================================
   CAUGIA INTELLIGENCE ENGINE v8.2 (CONTEXT AWARE)
   - Preserves ALL original logic.
   - Fixes: Test Submit connection.
   - IMPROVED: Sends Question Text + Answer to Make (for Claude context).
   =========================================================== */

(function() {

    // --- 1. CONFIGURATION ---
    const CONFIG = {
        webhookUrl: "https://hook.eu1.make.com/8vg0fkeflod05er5zuvmtfgcgqk17hnj", 
        storageKey: "caugia_assessment_v8_state",
        autoSaveInterval: 1000 
    };

    // --- 2. STATE ---
    let STATE = {
        currentStep: 0,
        answers: {},
        completed: false
    };

    // --- 3. DOM ELEMENTS ---
    const UI = {
        kicker: document.getElementById("gi-question-kicker"),
        title: document.getElementById("gi-question-title"),
        sub: document.getElementById("gi-question-sub"),
        body: document.getElementById("gi-question-body"),
        
        pillarList: document.getElementById("gi-left-pillar-list"),
        progressCount: document.getElementById("gi-progress-count"),
        progressPercent: document.getElementById("gi-progress-percent"),
        progressBar: document.getElementById("gi-progress-bar"),

        prevBtn: document.getElementById("gi-prev-btn"),
        nextBtn: document.getElementById("gi-next-btn"),
        submitBtn: document.getElementById("gi-submit-btn"),
        testBtn: document.getElementById("gi-test-submit-btn"), 
        
        clearBtn: document.getElementById("gi-clear-btn"),
        saveBtn: document.getElementById("gi-save-btn"),
        resetBtn: document.getElementById("gi-reset-btn")
    };

    // --- 4. INITIALIZATION ---
    function init() {
        if (!window.QUESTIONS || window.QUESTIONS.length === 0) {
            console.error("❌ QUESTIONS.js not loaded.");
            if(UI.title) UI.title.innerText = "Error: Questions File Missing";
            return;
        }
        loadState();
        console.log(`Engine v8.2 Started. Loaded ${window.QUESTIONS.length} questions.`);
        renderQuestion();
        updateSidebar();
        setInterval(saveState, CONFIG.autoSaveInterval);
    }

    // --- 5. RENDER LOGIC ---
    function renderQuestion() {
        const q = window.QUESTIONS[STATE.currentStep];
        if(!q) return;

        const pillarNames = [
            "Context", "GTM Strategy & Leadership", "Market Intelligence", "Product Marketing", 
            "Demand Generation", "Sales Execution", "Customer Success", "RevOps", 
            "Pricing", "Brand", "Data", "Enablement", "Leadership"
        ];
        const pName = pillarNames[q.pillar] || `Pillar ${q.pillar}`;

        if(UI.kicker) UI.kicker.innerText = pName.toUpperCase();
        if(UI.title) UI.title.innerText = q.title;
        if(UI.sub) UI.sub.innerText = q.sub || ""; 

        UI.body.innerHTML = ''; 

        switch (q.type) {
            case 'group': renderGroup(q); break;
            case 'radio': renderRadio(q); break;
            case 'scale': renderScale(q); break;
            case 'textarea': renderTextarea(q); break;
            case 'text': renderText(q); break;
            default: UI.body.innerHTML = `<p style="color:red">Unknown type: ${q.type}</p>`;
        }

        updateNavState();
        updateProgress();
        updateSidebar();
    }

    // --- 6. INPUT BUILDERS ---
    function renderGroup(q) {
        const grid = document.createElement('div');
        grid.className = "gi-group-grid"; 
        grid.style.display = "grid";
        grid.style.gridTemplateColumns = "1fr 1fr";
        grid.style.gap = "20px";
        if(window.innerWidth < 768) grid.style.gridTemplateColumns = "1fr";

        q.fields.forEach(f => {
            const wrapper = document.createElement('div');
            const label = document.createElement('label');
            label.innerText = f.label;
            label.style.display = "block";
            label.style.fontWeight = "600";
            label.style.marginBottom = "6px";
            label.style.fontSize = "0.9rem";

            const input = document.createElement('input');
            input.type = "text";
            input.className = "gi-input"; 
            input.style.width = "100%";
            input.style.padding = "10px";
            input.style.border = "1px solid #e2e8f0";
            input.style.borderRadius = "6px";
            input.name = f.name; // FIX: Name attribute
            
            if(STATE.answers[f.name]) input.value = STATE.answers[f.name];

            input.addEventListener('input', (e) => {
                STATE.answers[f.name] = e.target.value;
            });

            wrapper.appendChild(label);
            wrapper.appendChild(input);
            grid.appendChild(wrapper);
        });
        UI.body.appendChild(grid);
    }

    function renderRadio(q) {
        const wrapper = document.createElement('div');
        wrapper.className = "gi-options-grid"; 
        wrapper.style.display = "grid";
        wrapper.style.gridTemplateColumns = "1fr 1fr";
        wrapper.style.gap = "12px";

        q.options.forEach(opt => {
            const label = document.createElement('label');
            label.className = "gi-option-card";
            label.style.display = "flex";
            label.style.alignItems = "center";
            label.style.padding = "14px";
            label.style.border = "1px solid #e2e8f0";
            label.style.borderRadius = "8px";
            label.style.cursor = "pointer";
            label.style.backgroundColor = "#fff";

            const input = document.createElement('input');
            input.type = "radio";
            input.name = `q_${q.id}`; 
            input.value = opt;
            input.style.marginRight = "10px";

            if(STATE.answers[`q${q.id}`] === opt) {
                input.checked = true;
                label.style.borderColor = "#0056b3"; 
                label.style.backgroundColor = "#eff6ff";
            }

            input.addEventListener('change', () => {
                STATE.answers[`q${q.id}`] = opt;
                UI.body.innerHTML = ''; 
                renderRadio(q);
            });

            label.appendChild(input);
            label.appendChild(document.createTextNode(opt));
            wrapper.appendChild(label);
        });
        UI.body.appendChild(wrapper);
    }

    function renderScale(q) { renderRadio(q); }

    function renderTextarea(q) {
        const input = document.createElement('textarea');
        input.className = "gi-textarea";
        input.style.width = "100%";
        input.style.minHeight = "120px";
        input.style.padding = "12px";
        input.style.border = "1px solid #e2e8f0";
        input.style.borderRadius = "8px";
        input.name = `q_${q.id}`; 
        
        if(STATE.answers[`q${q.id}`]) input.value = STATE.answers[`q${q.id}`];

        input.addEventListener('input', (e) => {
            STATE.answers[`q${q.id}`] = e.target.value;
        });
        UI.body.appendChild(input);
    }

    function renderText(q) {
        const input = document.createElement('input');
        input.type = "text";
        input.className = "gi-input";
        input.style.width = "100%";
        input.style.padding = "12px";
        input.style.border = "1px solid #e2e8f0";
        input.style.borderRadius = "8px";
        input.name = `q_${q.id}`;

        if(STATE.answers[`q${q.id}`]) input.value = STATE.answers[`q${q.id}`];

        input.addEventListener('input', (e) => {
            STATE.answers[`q${q.id}`] = e.target.value;
        });
        UI.body.appendChild(input);
    }

    // --- 7. NAVIGATION ---
    function validateCurrent() {
        const q = window.QUESTIONS[STATE.currentStep];
        if (q.type === 'group') {
            let allFilled = true;
            q.fields.forEach(f => {
                if(!STATE.answers[f.name] || STATE.answers[f.name].trim() === "") allFilled = false;
            });
            if(!allFilled) { alert("Please fill in all fields."); return false; }
            return true;
        } else {
            if(!STATE.answers[`q${q.id}`] || STATE.answers[`q${q.id}`].trim() === "") {
                alert("Please answer the question."); return false;
            }
            return true;
        }
    }

    function goNext() {
        if(!validateCurrent()) return;
        if (STATE.currentStep < window.QUESTIONS.length - 1) {
            STATE.currentStep++;
            renderQuestion();
            const card = document.getElementById("gi-question-card");
            if(card) card.scrollTop = 0;
        } else {
            alert("Assessment Complete! Use the Test Submit button to send.");
        }
    }

    function goPrev() {
        if (STATE.currentStep > 0) {
            STATE.currentStep--;
            renderQuestion();
            const card = document.getElementById("gi-question-card");
            if(card) card.scrollTop = 0;
        }
    }

    function updateNavState() {
        if(UI.prevBtn) UI.prevBtn.style.display = STATE.currentStep === 0 ? "none" : "inline-block";
        if(UI.nextBtn) {
            UI.nextBtn.innerText = STATE.currentStep === window.QUESTIONS.length - 1 ? "Finish" : "Next";
        }
    }

    function updateProgress() {
        const total = window.QUESTIONS.length;
        const current = STATE.currentStep + 1;
        const pct = Math.round((current / total) * 100);
        if(UI.progressCount) UI.progressCount.innerText = `${current} / ${total}`;
        if(UI.progressPercent) UI.progressPercent.innerText = `${pct}%`;
        if(UI.progressBar) UI.progressBar.style.width = `${pct}%`;
    }

    function updateSidebar() {
        if(!UI.pillarList) return;
        const currentQ = window.QUESTIONS[STATE.currentStep];
        const currentPillar = currentQ.pillar;
        const items = UI.pillarList.querySelectorAll('li');
        items.forEach((item, index) => {
            if(index === currentPillar) {
                item.classList.add('active'); 
                item.style.fontWeight = "bold";
                item.style.color = "#0056b3";
            } else {
                item.classList.remove('active');
                item.style.fontWeight = "normal";
                item.style.color = "";
            }
        });
    }

    function saveState() {
        if(STATE.completed) return;
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(STATE));
    }

    function loadState() {
        const raw = localStorage.getItem(CONFIG.storageKey);
        if(raw) {
            try { STATE = JSON.parse(raw); } 
            catch(e) { console.log("State corrupted, resetting"); }
        }
    }

    // --- 10. SUBMISSION (ENRICHED WITH QUESTION TEXT) ---
    async function submitData(isTest = false) {
        
        let answersRaw = STATE.answers;
        let enrichedData = []; // This will hold the Question + Answer pairs
        let message = "Official Submission";

        // If empty, force dummy data
        if(Object.keys(answersRaw).length === 0) {
            console.warn("⚠️ No answers found. Generating DUMMY data.");
            answersRaw = { "test_mode": "true" };
            enrichedData.push({
                id: "test_q1",
                question: "This is a dummy question to test connection",
                answer: "Dummy Answer"
            });
            message = "⚠️ TEST DATA (Auto-generated because input was empty)";
        } else {
            // BUILD THE ENRICHED REPORT FOR CLAUDE
            // We loop through the master QUESTIONS array to map IDs to Text
            window.QUESTIONS.forEach(q => {
                if(q.type === 'group') {
                    // For groups, we map each field
                    q.fields.forEach(field => {
                        if(answersRaw[field.name]) {
                            enrichedData.push({
                                id: field.name,
                                pillar: q.pillar, // Add pillar context if useful
                                question: `${q.title} - ${field.label}`,
                                answer: answersRaw[field.name]
                            });
                        }
                    });
                } else {
                    // For single questions
                    const key = `q${q.id}`; // Match the key format used in STATE
                    if(answersRaw[key] || answersRaw[`q_${q.id}`]) { // Handle potential key format variation
                        enrichedData.push({
                            id: key,
                            pillar: q.pillar,
                            question: q.title,
                            answer: answersRaw[key] || answersRaw[`q_${q.id}`]
                        });
                    }
                }
            });
        }

        const payload = {
            metadata: {
                timestamp: new Date().toISOString(),
                questions_count: window.QUESTIONS.length,
                source: "Engine v8.2 Enriched",
                is_test: isTest
            },
            message: message,
            
            // OPTION A: Keep raw answers for legacy support
            answers: answersRaw,
            
            // OPTION B: The new "Claude-Ready" Report
            full_report: enrichedData 
        };

        console.log("🚀 Sending Payload to Make:", payload);
        
        const btn = isTest ? UI.testBtn : UI.submitBtn;
        if(btn) {
            btn.innerText = "Sending...";
            btn.disabled = true;
        }

        try {
            const res = await fetch(CONFIG.webhookUrl, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            });
            
            if(res.ok) {
                if(isTest) {
                    alert("✅ TEST SUCCESVOL!\n\nData (inclusief vraagteksten) verstuurd naar Make.");
                } else {
                    STATE.completed = true;
                    localStorage.removeItem(CONFIG.storageKey);
                    window.location.href = "gtm-intelligence-thank-you.html";
                }
            } else {
                throw new Error("Server reageerde met status: " + res.status);
            }
        } catch(e) {
            alert("❌ Fout bij versturen: " + e.message);
            console.error(e);
        } finally {
            if(btn) {
                btn.innerText = isTest ? "TEST SUBMIT" : "Submit Assessment";
                btn.disabled = false;
            }
        }
    }

    // --- 11. EVENT BINDING ---
    if(UI.nextBtn) UI.nextBtn.addEventListener("click", goNext);
    if(UI.prevBtn) UI.prevBtn.addEventListener("click", goPrev);
    if(UI.submitBtn) UI.submitBtn.addEventListener("click", () => submitData(false));

    if(UI.testBtn) {
        console.log("✅ Test Button Bound");
        UI.testBtn.addEventListener("click", (e) => {
            e.preventDefault(); 
            submitData(true);
        });
    }

    if(UI.clearBtn) UI.clearBtn.addEventListener("click", () => {
        const q = window.QUESTIONS[STATE.currentStep];
        if(q.type === 'group') {
            q.fields.forEach(f => delete STATE.answers[f.name]);
        } else {
            delete STATE.answers[`q${q.id}`];
        }
        renderQuestion();
    });

    if(UI.resetBtn) UI.resetBtn.addEventListener("click", () => {
        if(confirm("Reset everything?")) {
            localStorage.removeItem(CONFIG.storageKey);
            location.reload();
        }
    });

    init();

})();
