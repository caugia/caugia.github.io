/* ===================================================
   CAUGIA — header.js v2.0
   Single source of truth for site header & mobile nav.
   Nav: Home | About | GTM Score | Intelligence | Contact + CTA Marketplace
   Auth-aware: shows "My Workspace" when logged in to GRIP OS.
   Place <script src="assets/header.js"></script> anywhere.
   =================================================== */
(function () {
  function init() {
    if (!document.body) return;
    /* -- 1. CSS -- */
    var s = document.createElement("style");
    s.textContent =
      /* CTA button */
      ".btn-cta{display:inline-flex!important;align-items:center;justify-content:center;" +
      "padding:10px 22px;border-radius:999px;font-weight:700;font-size:0.85rem;" +
      "background:#0056b3;color:#fff!important;border:none;cursor:pointer;" +
      "transition:all 0.2s ease;box-shadow:0 2px 8px rgba(0,86,179,0.15);" +
      "text-decoration:none!important;white-space:nowrap;}" +
      ".btn-cta:hover{background:#004494;transform:translateY(-1px);}" +
      /* Brand name toggle */
      ".brand .brand-short{display:none;}" +
      /* Login link */
      ".caugia-lang-wrap{position:relative;display:inline-flex;}" +
      ".caugia-lang-btn{color:#94a3b8;font-weight:700;font-size:0.75rem;padding:4px 8px;border:1px solid #e2e8f0;border-radius:6px;transition:all 0.15s;cursor:pointer;background:none;display:inline-flex;align-items:center;gap:3px;}" +
      ".caugia-lang-btn:hover{color:#3B6CD8;border-color:#3B6CD8;}" +
      ".caugia-lang-btn svg{width:10px;height:10px;}" +
      ".caugia-lang-dropdown{display:none;position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border:1px solid #e2e8f0;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.08);min-width:120px;z-index:100;overflow:hidden;}" +
      ".caugia-lang-wrap.open .caugia-lang-dropdown{display:block;}" +
      ".caugia-lang-dropdown a{display:block;padding:8px 14px;color:#334155;font-size:0.8rem;font-weight:600;text-decoration:none;transition:background 0.1s;}" +
      ".caugia-lang-dropdown a:hover{background:#f1f5f9;}" +
      ".caugia-lang-dropdown a.active-lang{color:#3B6CD8;background:#eff6ff;}" +
      ".caugia-login-link{color:#64748b;font-weight:600;font-size:0.85rem;text-decoration:none;transition:color 0.15s ease;opacity:0;transition:opacity 0.2s ease;}" +
      ".caugia-login-link.visible{opacity:1;}" +
      ".caugia-login-link:hover{color:#0056b3;}" +
      /* Workspace button */
      ".btn-workspace{display:inline-flex!important;align-items:center;justify-content:center;" +
      "padding:10px 22px;border-radius:999px;font-weight:700;font-size:0.85rem;" +
      "background:linear-gradient(135deg,#3B6CD8,#E07830);color:#fff!important;border:none;cursor:pointer;" +
      "transition:all 0.2s ease;box-shadow:0 2px 8px rgba(59,108,216,0.2);" +
      "text-decoration:none!important;white-space:nowrap;}" +
      ".btn-workspace:hover{opacity:0.9;transform:translateY(-1px);}" +
      /* Marketplace text link (secondary style when workspace btn is shown) */
      ".caugia-marketplace-link{color:#64748b;font-weight:600;font-size:0.85rem;text-decoration:none;transition:color 0.15s ease;white-space:nowrap;}" +
      ".caugia-marketplace-link:hover{color:#0056b3;}" +
      /* Gradient bridge line */
      ".caugia-gradient-bridge{height:3px;background:linear-gradient(to right,#3B6CD8,#E07830);margin:0;padding:0;}" +
      /* Mobile overrides */
      "@media(max-width:980px){" +
        ".nav-actions .btn,.nav-actions .btn-secondary{display:none!important;}" +
        ".nav-actions .btn-cta,.nav-actions .btn-workspace{display:inline-flex!important;padding:8px 16px;font-size:0.8rem;}" +
        ".nav-actions .caugia-login-link{font-size:0.75rem;}" +
        ".nav-actions .caugia-marketplace-link{display:none!important;}" +
        ".brand .brand-full{display:none!important;}" +
        ".brand .brand-short{display:inline!important;}" +
      "}" +
      /* Mobile header: ONLY logo + hamburger visible */
      "@media(max-width:720px){" +
        ".nav-actions .caugia-login-link{display:none!important;}" +
        ".nav-actions .btn-cta{display:none!important;}" +
        ".nav-actions .btn-workspace{display:none!important;}" +
        ".nav-actions .caugia-lang-wrap{display:none!important;}" +
        ".nav-actions .caugia-marketplace-link{display:none!important;}" +
        ".nav-actions{gap:0!important;}" +
      "}" +
      /* Mobile lang section in hamburger menu */
      ".caugia-mobile-lang{display:flex;align-items:center;gap:6px;padding:12px 0 4px;border-top:1px solid #e2e8f0;margin-top:4px;}" +
      ".caugia-mobile-lang-label{color:#94a3b8;font-size:0.75rem;font-weight:600;margin-right:4px;}" +
      ".caugia-mobile-lang a{display:inline-flex;align-items:center;justify-content:center;min-width:36px;padding:6px 12px;" +
        "border-radius:6px;font-size:0.8rem;font-weight:700;text-decoration:none;transition:all 0.15s;border:1px solid #e2e8f0;color:#64748b;}" +
      ".caugia-mobile-lang a:hover{border-color:#3B6CD8;color:#3B6CD8;}" +
      ".caugia-mobile-lang a.active-lang{background:#eff6ff;color:#3B6CD8;border-color:#3B6CD8;}";
    document.head.appendChild(s);

    /* -- 2. Header HTML -- */
    var p = window.location.pathname.split("/").pop() || "index.html";
    var isFr = window.location.pathname.indexOf('/fr/') !== -1;
    var isDe = window.location.pathname.indexOf('/de/') !== -1;
    var isLocalized = isFr || isDe;
    var isIntel = window.location.pathname.indexOf('/intelligence/') !== -1;
    var isLocalizedIntel = isLocalized && isIntel; // /fr/intelligence/ or /de/intelligence/ = two levels deep
    // assetBase: path to assets folder (root/assets/)
    var assetBase = isLocalizedIntel ? '../../' : (isIntel ? '../' : (isLocalized ? '../' : ''));
    // navBase: path to sibling pages (stays in /fr/ or /de/ for localized intel, goes to localized or root)
    var navBase = isLocalizedIntel ? '../' : (isIntel ? '../' : '');

    // Navigation labels per language
    var navLabels = isDe
      ? { product: 'Produkt', marketplace: 'Marketplace', insights: 'Insights', about: '\u00DCber uns', contact: 'Kontakt', partners: 'Partnerprogramm', login: 'Anmelden', loginOs: 'Bei GRIP OS anmelden', cta: 'Diagnose starten' }
      : isFr
      ? { product: 'Produit', marketplace: 'Marketplace', insights: 'Insights', about: '\u00C0 propos', contact: 'Contact', partners: 'Programme Partenaires', login: 'Connexion', loginOs: 'Connexion GRIP OS', cta: 'Lancer le diagnostic' }
      : { product: 'Product', marketplace: 'Marketplace', insights: 'Insights', about: 'About', contact: 'Contact', partners: 'Partner Program', login: 'Log in', loginOs: 'Log in to GRIP OS', cta: 'Start Diagnosis' };

    // Language dropdown: current lang as button, others in dropdown
    function buildLangToggles() {
      var enPath = isLocalized ? assetBase + p : p;
      var frPath = isFr ? p : (isLocalized ? assetBase + 'fr/' + p : 'fr/' + p);
      var dePath = isDe ? p : (isLocalized ? assetBase + 'de/' + p : 'de/' + p);
      var currentLang = isDe ? 'DE' : (isFr ? 'FR' : 'EN');
      return '<div class="caugia-lang-wrap" id="caugiaLangWrap">' +
        '<button class="caugia-lang-btn" id="caugiaLangBtn">' + currentLang + ' <svg viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
        '<div class="caugia-lang-dropdown">' +
          '<a href="' + enPath + '"' + (!isFr && !isDe ? ' class="active-lang"' : '') + '>English</a>' +
          '<a href="' + frPath + '"' + (isFr ? ' class="active-lang"' : '') + '>Fran\u00e7ais</a>' +
          '<a href="' + dePath + '"' + (isDe ? ' class="active-lang"' : '') + '>Deutsch</a>' +
        '</div>' +
      '</div>';
    }

    function a(h, t) {
      return '<a href="' + navBase + h + '"' + (h === p ? ' class="active"' : '') + '>' + t + '</a>';
    }
    document.body.insertAdjacentHTML("afterbegin",
      '<header>' +
        '<div class="container nav">' +
          '<a class="brand" href="' + navBase + 'index.html">' +
            '<img src="' + assetBase + 'assets/logo-final.png" alt="Caugia" width="32" height="32" />' +
            '<span class="brand-full">CAUGIA</span>' +
            '<span class="brand-short">CAUGIA</span>' +
          '</a>' +
          '<ul class="nav-links">' +
            '<li>' + a('product.html', navLabels.product) + '</li>' +
            '<li>' + a('grip-marketplace.html', navLabels.marketplace) + '</li>' +
            '<li>' + a('intelligence.html', navLabels.insights) + '</li>' +
            '<li>' + a('about.html', navLabels.about) + '</li>' +
            '<li>' + a('contact.html', navLabels.contact) + '</li>' +
          '</ul>' +
          '<div class="nav-actions" id="caugiaNavActions">' +
            '<a href="https://os.caugia.com/login?redirect=https://www.caugia.com" class="caugia-login-link" id="caugiaLoginLink">' + navLabels.login + '</a>' +
            '<a href="' + navBase + 'grip-marketplace.html#intelligence-report" class="btn-cta" id="caugiaCta">' + navLabels.cta + '</a>' +
            buildLangToggles() +
            '<button class="menu-toggle" id="caugiaMenuToggle" aria-label="Menu">' +
              '<svg class="caugia-hamburger-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="#111827" stroke-width="1.8" stroke-linecap="round"/></svg>' +
              '<svg class="caugia-close-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" style="display:none;"><path d="M5 5l10 10M15 5L5 15" stroke="#111827" stroke-width="1.8" stroke-linecap="round"/></svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
        /* Gradient bridge — same blue-to-orange as GRIP OS */
        '<div class="caugia-gradient-bridge"></div>' +
        '<div class="container mobile-nav" id="caugiaMobileNav">' +
          /* Navigation links */
          a('product.html', navLabels.product) +
          a('grip-marketplace.html', navLabels.marketplace) +
          a('intelligence.html', navLabels.insights) +
          a('about.html', navLabels.about) +
          a('contact.html', navLabels.contact) +
          a('partners.html', navLabels.partners) +
          /* CTA + Login section */
          '<div style="margin-top:12px;padding-top:16px;border-top:1px solid #e2e8f0;display:flex;flex-direction:column;gap:10px;">' +
            '<a href="' + navBase + 'grip-marketplace.html#intelligence-report" style="display:block;text-align:center;padding:14px 0;border-radius:10px;background:#0056b3;color:#fff;font-weight:700;font-size:0.95rem;text-decoration:none;">' + navLabels.cta + '</a>' +
            '<a href="https://os.caugia.com/try" style="display:block;text-align:center;padding:12px 0;border-radius:10px;border:1px solid #e2e8f0;color:#3B6CD8;font-weight:600;font-size:0.9rem;text-decoration:none;">Sophie</a>' +
            '<a href="https://os.caugia.com/login?redirect=https://www.caugia.com" style="display:block;text-align:center;padding:10px 0;color:#94a3b8;font-weight:500;font-size:0.82rem;text-decoration:none;">' + navLabels.loginOs + '</a>' +
          '</div>' +
          /* Language switcher */
          '<div class="caugia-mobile-lang">' +
            '<span class="caugia-mobile-lang-label">' + (isDe ? 'Sprache' : (isFr ? 'Langue' : 'Language')) + '</span>' +
            (function() {
              var enPath = isLocalized ? assetBase + p : p;
              var frPath = isFr ? p : (isLocalized ? assetBase + 'fr/' + p : 'fr/' + p);
              var dePath = isDe ? p : (isLocalized ? assetBase + 'de/' + p : 'de/' + p);
              return '<a href="' + enPath + '"' + (!isFr && !isDe ? ' class="active-lang"' : '') + '>EN</a>' +
                     '<a href="' + frPath + '"' + (isFr ? ' class="active-lang"' : '') + '>FR</a>' +
                     '<a href="' + dePath + '"' + (isDe ? ' class="active-lang"' : '') + '>DE</a>';
            })() +
          '</div>' +
        '</div>' +
      '</header>'
    );

    /* -- 3. Mobile toggle -- */
    var btn = document.getElementById("caugiaMenuToggle");
    var nav = document.getElementById("caugiaMobileNav");
    if (btn && nav) {
      var hamburgerIcon = btn.querySelector('.caugia-hamburger-icon');
      var closeIcon = btn.querySelector('.caugia-close-icon');
      function setMenuState(open) {
        if (open) {
          nav.classList.add("active");
          if (hamburgerIcon) hamburgerIcon.style.display = 'none';
          if (closeIcon) closeIcon.style.display = 'block';
        } else {
          nav.classList.remove("active");
          if (hamburgerIcon) hamburgerIcon.style.display = 'block';
          if (closeIcon) closeIcon.style.display = 'none';
        }
      }
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        setMenuState(!nav.classList.contains("active"));
      });
      document.addEventListener("click", function (e) {
        if (nav.classList.contains("active") && !nav.contains(e.target) && !btn.contains(e.target)) {
          setMenuState(false);
        }
      });
    }

    /* -- 3b. Language dropdown toggle -- */
    var langWrap = document.getElementById("caugiaLangWrap");
    var langBtn = document.getElementById("caugiaLangBtn");
    if (langWrap && langBtn) {
      langBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        langWrap.classList.toggle("open");
      });
      document.addEventListener("click", function (e) {
        if (!langWrap.contains(e.target)) {
          langWrap.classList.remove("open");
        }
      });
    }

    /* -- 4. Load partner referral tracking -- */
    try {
      var refScript = document.createElement('script');
      refScript.src = assetBase + 'assets/partner-referral.js';
      refScript.defer = true;
      document.head.appendChild(refScript);
    } catch (e) { /* non-critical */ }

    /* -- 5. Auth-aware header: cached + background refresh -- */
    function applyAuthState(data) {
      var loginLink = document.getElementById("caugiaLoginLink");
      if (!loginLink) return;
      if (!data || !data.authenticated) {
        loginLink.href = "https://os.caugia.com/login?redirect=https://www.caugia.com";
        loginLink.textContent = isDe ? "Anmelden" : (isFr ? "Connexion" : "Log in");
        loginLink.style.fontWeight = "600";
      } else if (data.workspace) {
        loginLink.href = "https://os.caugia.com/workspace/" + data.workspace.id;
        loginLink.textContent = isDe ? "Dashboard" : (isFr ? "Dashboard" : "Dashboard");
        loginLink.style.fontWeight = "700";
      } else {
        loginLink.href = "https://os.caugia.com/dashboard";
        loginLink.textContent = "GRIP OS";
        loginLink.style.fontWeight = "700";
      }
      loginLink.classList.add("visible");
    }
    try {
      // Instant: use cached auth state (< 30 min old)
      var cached = null;
      try {
        var raw = localStorage.getItem("caugia_auth_cache");
        if (raw) {
          cached = JSON.parse(raw);
          if (cached && Date.now() - cached.ts < 1800000) {
            applyAuthState(cached.data);
          } else {
            cached = null;
          }
        }
      } catch(e) {}

      // Background: always refresh auth state
      fetch("https://os.caugia.com/api/auth/status", {
        credentials: "include",
        mode: "cors",
      })
        .then(function (res) { return res.ok ? res.json() : null; })
        .then(function (data) {
          // Cache the result
          try { localStorage.setItem("caugia_auth_cache", JSON.stringify({ data: data, ts: Date.now() })); } catch(e) {}
          // Apply (updates if cached state was wrong)
          applyAuthState(data);
        })
        .catch(function () {
          // Fetch failed — if no cache, show nothing (Marketplace CTA is always visible)
          if (!cached) {
            var ll = document.getElementById("caugiaLoginLink");
            if (ll) { ll.textContent = isDe ? "Anmelden" : (isFr ? "Connexion" : "Log in"); ll.href = "https://os.caugia.com/login"; ll.classList.add("visible"); }
          }
        });
    } catch (e) {}

    /* -- 6. Inject "Partner Program" link into footer (if not already present) -- */
    try {
      var footerEl = document.querySelector('footer');
      if (footerEl && !footerEl.innerHTML.includes('partners.html')) {
        var lastP = footerEl.querySelector('p:last-of-type');
        if (lastP && !lastP.innerHTML.includes('partners.html')) {
          lastP.insertAdjacentHTML('beforeend',
            ' &middot; <a href="' + navBase + 'partners.html" style="color:#94a3b8;text-decoration:none;font-size:0.85rem;">' + navLabels.partners + '</a>'
          );
        }
      }
    } catch(e) {}
  }

  /* -- Run when DOM is ready -- */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
