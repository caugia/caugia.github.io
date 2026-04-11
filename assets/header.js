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
      ".caugia-login-link{color:#64748b;font-weight:600;font-size:0.85rem;text-decoration:none;transition:color 0.15s ease;}" +
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
        ".nav-actions .caugia-login-link{display:none!important;}" +
        ".nav-actions .caugia-marketplace-link{display:none!important;}" +
        ".brand .brand-full{display:none!important;}" +
        ".brand .brand-short{display:inline!important;}" +
      "}";
    document.head.appendChild(s);

    /* -- 2. Header HTML -- */
    var p = window.location.pathname.split("/").pop() || "index.html";
    var base = window.location.pathname.indexOf('/intelligence/') !== -1 ? '../' : '';
    function a(h, t) {
      return '<a href="' + base + h + '"' + (h === p ? ' class="active"' : '') + '>' + t + '</a>';
    }
    document.body.insertAdjacentHTML("afterbegin",
      '<header>' +
        '<div class="container nav">' +
          '<a class="brand" href="' + base + 'index.html">' +
            '<img src="' + base + 'assets/logo-final.png" alt="Caugia" width="32" height="32" />' +
            '<span class="brand-full">CAUGIA</span>' +
            '<span class="brand-short">CAUGIA</span>' +
          '</a>' +
          '<ul class="nav-links">' +
            '<li>' + a('index.html','Home') + '</li>' +
            '<li>' + a('about.html','About') + '</li>' +
            '<li>' + a('gtm-assessment.html','GTM Score') + '</li>' +
            '<li>' + a('intelligence.html','Intelligence') + '</li>' +
            '<li>' + a('contact.html','Contact') + '</li>' +
          '</ul>' +
          '<div class="nav-actions" id="caugiaNavActions">' +
            '<a href="https://os.caugia.com/login?redirect=https://www.caugia.com" class="caugia-login-link" id="caugiaLoginLink">Log in</a>' +
            '<a href="' + base + 'grip-marketplace.html" class="btn-cta" id="caugiaCta">GRIP Marketplace</a>' +
            '<button class="menu-toggle" id="caugiaMenuToggle">Menu</button>' +
          '</div>' +
        '</div>' +
        /* Gradient bridge — same blue-to-orange as GRIP OS */
        '<div class="caugia-gradient-bridge"></div>' +
        '<div class="container mobile-nav" id="caugiaMobileNav">' +
          a('index.html','Home') +
          a('about.html','About') +
          a('gtm-assessment.html','GTM Score') +
          a('intelligence.html','Intelligence') +
          a('contact.html','Contact') +
          a('grip-marketplace.html','GRIP Marketplace') +
          a('partners.html','Partner Program') +
          '<a href="https://os.caugia.com/login?redirect=https://www.caugia.com" style="color:#3B6CD8;font-weight:700;">Log in to GRIP OS</a>' +
        '</div>' +
      '</header>'
    );

    /* -- 3. Mobile toggle -- */
    var btn = document.getElementById("caugiaMenuToggle");
    var nav = document.getElementById("caugiaMobileNav");
    if (btn && nav) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        nav.classList.toggle("active");
        btn.innerText = nav.classList.contains("active") ? "Close" : "Menu";
      });
      document.addEventListener("click", function (e) {
        if (nav.classList.contains("active") && !nav.contains(e.target) && e.target !== btn) {
          nav.classList.remove("active");
          btn.innerText = "Menu";
        }
      });
    }

    /* -- 4. Load partner referral tracking -- */
    try {
      var refScript = document.createElement('script');
      refScript.src = base + 'assets/partner-referral.js';
      refScript.defer = true;
      document.head.appendChild(refScript);
    } catch (e) { /* non-critical */ }

    /* -- 5. Auth-aware header: check GRIP OS session -- */
    try {
      fetch("https://os.caugia.com/api/auth/status", {
        credentials: "include",
        mode: "cors",
      })
        .then(function (res) { return res.ok ? res.json() : null; })
        .then(function (data) {
          if (!data || !data.authenticated) return;

          var loginLink = document.getElementById("caugiaLoginLink");
          var ctaBtn = document.getElementById("caugiaCta");

          // Hide login link when authenticated
          if (loginLink) loginLink.style.display = "none";

          // Add workspace button before CTA; downgrade CTA to text link
          if (ctaBtn) {
            var wsBtn = document.createElement("a");
            if (data.workspace) {
              wsBtn.href = "https://os.caugia.com/workspace/" + data.workspace.id;
              wsBtn.textContent = "My Workspace \u2192";
            } else {
              wsBtn.href = "https://os.caugia.com/dashboard";
              wsBtn.textContent = "GRIP OS \u2192";
            }
            wsBtn.className = "btn-workspace";
            ctaBtn.parentNode.insertBefore(wsBtn, ctaBtn);
            // Downgrade marketplace CTA to subtle text link
            ctaBtn.className = "caugia-marketplace-link";
          }
        })
        .catch(function () {
          // Silently fail — show default header for unauthenticated users
        });
    } catch (e) {
      // Older browsers or blocked fetch — keep default header
    }

    /* -- 6. Inject "Partner Program" link into footer (if not already present) -- */
    try {
      var footerEl = document.querySelector('footer');
      if (footerEl && !footerEl.innerHTML.includes('partners.html')) {
        var lastP = footerEl.querySelector('p:last-of-type');
        if (lastP && !lastP.innerHTML.includes('partners.html')) {
          lastP.insertAdjacentHTML('beforeend',
            ' &middot; <a href="' + base + 'partners.html" style="color:#94a3b8;text-decoration:none;font-size:0.85rem;">Partner Program</a>'
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
