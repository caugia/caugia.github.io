/* ═══════════════════════════════════════════════════
   CAUGIA — header.js v1.4
   Single source of truth for site header & mobile nav.
   Nav: Home | About | GTM Score | Contact + CTA Marketplace
   Place <script src="assets/header.js"></script> anywhere.
   ═══════════════════════════════════════════════════ */

(function () {

  function init() {
    if (!document.body) return;

    /* ── 1. CSS — self-contained, overrides any base CSS conflicts ── */
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

      /* Mobile overrides */
      "@media(max-width:980px){" +
        ".nav-actions .btn,.nav-actions .btn-secondary{display:none!important;}" +
        ".nav-actions .btn-cta{display:inline-flex!important;padding:8px 16px;font-size:0.8rem;}" +
        ".brand .brand-full{display:none!important;}" +
        ".brand .brand-short{display:inline!important;}" +
      "}";
    document.head.appendChild(s);

    /* ── 2. Header HTML ── */
    var p = window.location.pathname.split("/").pop() || "index.html";

    function a(h, t) {
      return '<a href="' + h + '"' + (h === p ? ' class="active"' : '') + '>' + t + '</a>';
    }

    document.body.insertAdjacentHTML("afterbegin",
      '<header>' +
        '<div class="container nav">' +
          '<a class="brand" href="index.html">' +
            '<img src="assets/logo-final.png" alt="Caugia" width="32" height="32" />' +
            '<span class="brand-full">CAUGIA CONSULTING</span>' +
            '<span class="brand-short">CAUGIA</span>' +
          '</a>' +
          '<ul class="nav-links">' +
            '<li>' + a('index.html','Home') + '</li>' +
            '<li>' + a('about.html','About') + '</li>' +
            '<li>' + a('gtm-assessment.html','GTM Score') + '</li>' +
            '<li>' + a('contact.html','Contact') + '</li>' +
          '</ul>' +
          '<div class="nav-actions">' +
            '<a href="grip-marketplace.html" class="btn-cta">GRIP Marketplace</a>' +
            '<button class="menu-toggle" id="caugiaMenuToggle">Menu</button>' +
          '</div>' +
        '</div>' +
        '<div class="container mobile-nav" id="caugiaMobileNav">' +
          a('index.html','Home') +
          a('about.html','About') +
          a('gtm-assessment.html','GTM Score') +
          a('contact.html','Contact') +
          a('grip-marketplace.html','GRIP Marketplace') +
        '</div>' +
      '</header>'
    );

    /* ── 3. Mobile toggle (unique IDs to avoid conflicts with caugia-base.js) ── */
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
  }

  /* ── Run when DOM is ready ── */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
