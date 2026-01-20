/* ===========================================================
   CAUGIA INTELLIGENCE ENGINE v8.0 (CUSTOM FIT)
   Logic: Supports New Question Groups + Preserves Existing Sidebar/Layout
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

    // --- 3. DOM ELEMENTS (Based on your Screenshot/Old Code) ---
    const UI = {
        // Main Question Area
        kicker: document.getElementById("gi-question-kicker"), // "Context" or "Pillar 1"
        title: document.getElementById("gi-question-title"),
        sub: document.getElementById("gi-question-sub"), // If used
        body: document.getElementById("gi-question-body"), // Where inputs go
        
        // Sidebar / Progress
        pillarList: document.getElementById("gi-left-pillar-list"),
        progressCount: document.getElementById("gi-progress-count"), // "265 / 265"
        progressPercent: document.getElementById("gi-progress-percent"), // "100%"
        progressBar: document.getElementById("gi-progress-bar"),

        // Navigation
        prevBtn: document.getElementById("gi-prev-btn"),
        nextBtn: document.getElementById("gi-next-btn"),
        submitBtn: document.getElementById("gi-submit-btn"), // Or test submit
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

        // Restore Session
        loadState();
        
        console.log(`Engine v8.0 Started. Loaded ${window.QUESTIONS.length} questions.`);
        renderQuestion();
        updateSidebar();
        
        // Auto-save loop
        setInterval(saveState, CONFIG.autoSaveInterval);
    }

    // --- 5. RENDER LOGIC ---
    function renderQuestion() {
        const q = window.QUESTIONS[STATE.currentStep];
        if(!q) return;

        // A. Header Info
        // Find Pillar Name (assuming Pillar 0 is Context, 1 is Strategy etc)
        const pillarNames = [
            "Context", "GTM Strategy & Leadership", "Market Intelligence", "Product Marketing", 
            "Demand Generation", "Sales Execution", "Customer Success", "RevOps", 
            "Pricing", "Brand", "Data", "Enablement", "Leadership"
        ];
        const pName = pillarNames[q.pillar] || `Pillar ${q.pillar}`;

        if(UI.kicker) UI.kicker.innerText = pName.toUpperCase();
        if(UI.title) UI.title.innerText = q.title;
        if(UI.sub) UI.sub.innerText = q.sub || ""; // Optional subtitle

        // B. Render Input Body
        UI.body.innerHTML = ''; // Clear previous

        switch (q.type) {
            case 'group': renderGroup(q); break;
            case 'radio': renderRadio(q); break;
            case 'scale': renderScale(q); break;
            case 'textarea': renderTextarea(q); break;
            case 'text': renderText(q); break;
            default: UI.body.innerHTML = `<p style="color:red">Unknown type: ${q.type}</p>`;
        }

        // C. Update Navigation State
        updateNavState();
        updateProgress();
        updateSidebar();
    }

    // --- 6. INPUT BUILDERS (Using your styles) ---

    function renderGroup(q) {
        // Renders fields like ARR, Growth, etc.
        const grid = document.createElement('div');
        // Use existing CSS class if available, else inline grid
        grid.className = "gi-group-grid"; 
        grid.style.display = "grid";
        grid.style.gridTemplateColumns = "1fr 1fr";
        grid.style.gap = "20px";
        
        // Mobile fallback
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
            input.className = "gi-input"; // Your existing CSS class
            input.style.width = "100%";
            input.style.padding = "10px";
            input.style.border = "1px solid #e2e8f0";
            input.style.borderRadius = "6px";
            
            // Restore
            if(STATE.answers[f.name]) input.value = STATE.answers[f.name];

            // Save on input
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
        wrapper.className = "gi-options-grid"; // Use your existing grid class
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

            // Check if active
            if(STATE.answers[`q${q.id}`] === opt) {
                input.checked = true;
                label.style.borderColor = "#0056b3"; // Primary color
                label.style.backgroundColor = "#eff6ff";
            }

            input.addEventListener('change', () => {
                STATE.answers[`q${q.id}`] = opt;
                // Redraw to update styles
                renderRadio(q); 
                // Don't redraw whole step, just re-render this function logic visually if needed
                // Or simplistic:
                UI.body.innerHTML = '';
                renderRadio(q);
            });

            label.appendChild(input);
            label.appendChild(document.createTextNode(opt));
            wrapper.appendChild(label);
        });
        UI.body.appendChild(wrapper);
    }

    function renderScale(q) {
        // Reuse Radio logic for 1-5 scales
        renderRadio(q); 
    }

    function renderTextarea(q) {
        const input = document.createElement('textarea');
        input.className = "gi-textarea";
        input.style.width = "100%";
        input.style.minHeight = "120px";
        input.style.padding = "12px";
        input.style.border = "1px solid #e2e8f0";
        input.style.borderRadius = "8px";
        
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

        if(STATE.answers[`q${q.id}`]) input.value = STATE.answers[`q${q.id}`];

        input.addEventListener('input', (e) => {
            STATE.answers[`q${q.id}`] = e.target.value;
        });
        UI.body.appendChild(input);
    }

    // --- 7. NAVIGATION & VALIDATION ---

    function validateCurrent() {
        const q = window.QUESTIONS[STATE.currentStep];
        
        if (q.type === 'group') {
            // Check all fields
            let allFilled = true;
            q.fields.forEach(f => {
                if(!STATE.answers[f.name] || STATE.answers[f.name].trim() === "") allFilled = false;
            });
            if(!allFilled) alert("Please fill in all fields.");
            return allFilled;
        } else {
            // Single input
            if(!STATE.answers[`q${q.id}`] || STATE.answers[`q${q.id}`].trim() === "") {
                alert("Please answer the question.");
                return false;
            }
            return true;
        }
    }

    function goNext() {
        if(!validateCurrent()) return;

        if (STATE.currentStep < window.QUESTIONS.length - 1) {
            STATE.currentStep++;
            renderQuestion();
            window.scrollTo(0,0);
        } else {
            // Trigger Submit logic (could show a final review button)
            alert("Assessment Complete! Use the Test Submit button to send.");
        }
    }

    function goPrev() {
        if (STATE.currentStep > 0) {
            STATE.currentStep--;
            renderQuestion();
            window.scrollTo(0,0);
        }
    }

    function updateNavState() {
        if(UI.prevBtn) UI.prevBtn.style.display = STATE.currentStep === 0 ? "none" : "inline-block";
        if(UI.nextBtn) {
            UI.nextBtn.innerText = STATE.currentStep === window.QUESTIONS.length - 1 ? "Finish" : "Next";
        }
    }

    // --- 8. PROGRESS & SIDEBAR ---

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

        // Loop through LI items in your sidebar
        // Assuming your HTML has li elements with logic, or we just highlight based on index
        // Since I can't see the exact HTML structure of the list items, I'll assume they have IDs or data-attributes
        // Simple generic highlight:
        const items = UI.pillarList.querySelectorAll('li');
        items.forEach((item, index) => {
            if(index === currentPillar) {
                item.classList.add('active'); // Add your CSS active class
                item.style.fontWeight = "bold";
                item.style.color = "#0056b3";
            } else {
                item.classList.remove('active');
                item.style.fontWeight = "normal";
                item.style.color = "";
            }
        });
    }

    // --- 9. STATE STORAGE ---
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

    // --- 10. SUBMISSION (Payload Builder) ---
    async function submitData() {
        // Build the rich payload for Make.com
        const payload = {
            metadata: {
                timestamp: new Date().toISOString(),
                questions_count: window.QUESTIONS.length,
                source: "Engine v8.0"
            },
            // Split Context/Customer from Scores if needed, or send flat answers
            answers: STATE.answers,
            
            // Calculate Pillar Scores (Simplified Client Side calc for immediate feedback if needed)
            // ... (Optional)
        };

        console.log("🚀 Sending Payload to Make:", payload);
        
        if(UI.submitBtn) {
            UI.submitBtn.innerText = "Sending...";
            UI.submitBtn.disabled = true;
        }

        try {
            const res = await fetch(CONFIG.webhookUrl, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            });
            
            if(res.ok) {
                STATE.completed = true;
                localStorage.removeItem(CONFIG.storageKey);
                window.location.href = "gtm-intelligence-thank-you.html";
            } else {
                throw new Error("API Error");
            }
        } catch(e) {
            alert("Submission Error. Check console.");
            console.error(e);
            if(UI.submitBtn) UI.submitBtn.disabled = false;
        }
    }

    // --- 11. EVENT BINDING ---
    if(UI.nextBtn) UI.nextBtn.addEventListener("click", goNext);
    if(UI.prevBtn) UI.prevBtn.addEventListener("click", goPrev);
    
    // Explicit Test Submit Button (Orange one in screenshot)
    const testBtn = document.getElementById("gi-submit-btn") || document.querySelector(".gi-btn-test"); 
    if(testBtn) {
        testBtn.addEventListener("click", submitData);
    } else {
        // Fallback: Bind to any button with text 'TEST SUBMIT' if ID is missing
        const buttons = document.querySelectorAll('button');
        buttons.forEach(b => {
            if(b.innerText.includes("TEST SUBMIT")) b.addEventListener("click", submitData);
        });
    }

    if(UI.clearBtn) UI.clearBtn.addEventListener("click", () => {
        // Clear current answer
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

    // Start
    init();

})();
