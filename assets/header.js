/* ═══════════════════════════════════════════════════
   CAUGIA — header.js v1.1
   Single source of truth for site header & mobile nav.
   Fully self-contained: injects HTML, CSS, and JS.
   
   Usage: <script src="assets/header.js"></script>
   ═══════════════════════════════════════════════════ */

(function () {

  /* ── 1. Inject CSS (so we don't depend on any base CSS version) ── */
  var style = document.createElement("style");
  style.textContent =
    /* CTA button in header */
    ".btn-cta{display:inline-flex;align-items:center;justify-content:center;" +
    "padding:10px 22px;border-radius:999px;font-weight:700;font-size:0.85rem;" +
    "background:#0056b3;color:#fff;border:none;cursor:pointer;" +
    "transition:all 0.2s ease;box-shadow:0 2px 8px rgba(0,86,179,0.15);text-decoration:none;white-space:nowrap;}" +
    ".btn-cta:hover{background:#004494;transform:translateY(-1px);}" +

    /* Mobile: keep CTA visible, shrink it */
    "@media(max-width:980px){" +
      ".nav-actions .btn-secondary{display:none!important;}" +
      ".nav-actions .btn-cta{display:inline-flex!important;padding:8px 16px;font-size:0.8rem;}" +
    "}";
  document.head.appendChild(style);

  /* ── 2. Build header HTML ── */
  var currentPath = window.location.pathname.split("/").pop() || "index.html";

  function a(href, label) {
    var cls = href === currentPath ? ' class="active"' : "";
    return "<a href=\"" + href + "\"" + cls + ">" + label + "</a>";
  }

  var headerHTML =
    "<header>" +
      '<div class="container nav">' +
        '<a class="brand" href="index.html">' +
          '<img src="assets/logo-final.png" alt="Caugia" width="32" height="32" />' +
          "<span>CAUGIA CONSULTING</span>" +
        "</a>" +
        '<ul class="nav-links">' +
          "<li>" + a("index.html", "Home") + "</li>" +
          "<li>" + a("about.html", "About") + "</li>" +
          "<li>" + a("services.html", "Services") + "</li>" +
          "<li>" + a("gtm-assessment.html", "GTM Score") + "</li>" +
          "<li>" + a("resources.html", "Resources") + "</li>" +
          "<li>" + a("contact.html", "Contact") + "</li>" +
        "</ul>" +
        '<div class="nav-actions">' +
          '<a href="grip-marketplace.html" class="btn-cta">GRIP Marketplace</a>' +
          '<button class="menu-toggle" id="menuToggle">Menu</button>' +
        "</div>" +
      "</div>" +
      '<div class="container mobile-nav" id="mobileNav">' +
        a("index.html", "Home") +
        a("about.html", "About") +
        a("services.html", "Services") +
        a("gtm-assessment.html", "GTM Score") +
        a("resources.html", "Resources") +
        a("contact.html", "Contact") +
        a("grip-marketplace.html", "GRIP Marketplace") +
      "</div>" +
    "</header>";

  /* ── 3. Inject at start of <body> ── */
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  /* ── 4. Mobile nav toggle ── */
  var toggle = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileNav.classList.toggle("active");
      toggle.innerText = mobileNav.classList.contains("active") ? "Close" : "Menu";
    });

    document.addEventListener("click", function (e) {
      if (mobileNav.classList.contains("active")) {
        if (!mobileNav.contains(e.target) && e.target !== toggle) {
          mobileNav.classList.remove("active");
          toggle.innerText = "Menu";
        }
      }
    });
  }

})();
