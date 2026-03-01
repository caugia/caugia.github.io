/* ═══════════════════════════════════════════════════
   CAUGIA — header.js v1.0
   Single source of truth for site header & mobile nav.
   
   Usage in every page:
   1. Remove the entire <header>...</header> block
   2. Add this right before </body>:
      <script src="assets/header.js"></script>
   ═══════════════════════════════════════════════════ */

(function () {
  var currentPath = window.location.pathname.split("/").pop() || "index.html";

  function isActive(href) {
    return href === currentPath ? ' class="active"' : "";
  }

  var headerHTML =
    '<header>' +
      '<div class="container nav">' +
        '<a class="brand" href="index.html">' +
          '<img src="assets/logo-final.png" alt="Caugia" width="32" height="32" />' +
          '<span>CAUGIA CONSULTING</span>' +
        '</a>' +
        '<ul class="nav-links">' +
          '<li><a href="index.html"' + isActive("index.html") + ">Home</a></li>" +
          '<li><a href="about.html"' + isActive("about.html") + ">About</a></li>" +
          '<li><a href="services.html"' + isActive("services.html") + ">Services</a></li>" +
          '<li><a href="gtm-assessment.html"' + isActive("gtm-assessment.html") + ">GTM Score</a></li>" +
          '<li><a href="resources.html"' + isActive("resources.html") + ">Resources</a></li>" +
          '<li><a href="contact.html"' + isActive("contact.html") + ">Contact</a></li>" +
        "</ul>" +
        '<div class="nav-actions">' +
          '<a href="grip-marketplace.html" class="btn-cta">GRIP Marketplace</a>' +
          '<button class="menu-toggle" id="menuToggle">Menu</button>' +
        "</div>" +
      "</div>" +
      '<div class="container mobile-nav" id="mobileNav">' +
        '<a href="index.html"' + isActive("index.html") + ">Home</a>" +
        '<a href="about.html"' + isActive("about.html") + ">About</a>" +
        '<a href="services.html"' + isActive("services.html") + ">Services</a>" +
        '<a href="gtm-assessment.html"' + isActive("gtm-assessment.html") + ">GTM Score</a>" +
        '<a href="resources.html"' + isActive("resources.html") + ">Resources</a>" +
        '<a href="contact.html"' + isActive("contact.html") + ">Contact</a>" +
        '<a href="grip-marketplace.html"' + isActive("grip-marketplace.html") + ">GRIP Marketplace</a>" +
      "</div>" +
    "</header>";

  // Inject at the very start of <body>
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // Mobile nav toggle
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
