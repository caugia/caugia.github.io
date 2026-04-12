document.addEventListener("DOMContentLoaded", function() {

  /* 1. MOBILE NAV LOGIC (Click Outside + Toggle) */
  const toggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileNav.classList.toggle("active");
      const isOpen = mobileNav.classList.contains("active");
      toggle.innerText = isOpen ? "Close" : "Menu";
    });
    document.addEventListener("click", (e) => {
      if (mobileNav.classList.contains("active")) {
        if (!mobileNav.contains(e.target) && e.target !== toggle) {
          mobileNav.classList.remove("active");
          toggle.innerText = "Menu";
        }
      }
    });
  }

  /* 2. AUTOMATIC ACTIVE MENU STATE */
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });

  /* 3. DYNAMIC YEAR IN FOOTER */
  const yearSpan = document.getElementById("year");
  if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* 4. GLOBAL CURRENCY DETECTION + PRICING + STRIPE */
  const euroCountries = ["AT", "BE", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PT", "SK", "SI", "ES", "HR", "BG", "CZ", "DK", "HU", "PL", "RO", "SE"];

  const prices = {
    '$': { val: '1499', equiv: '30k', stripe: 'price_USD_PLACEHOLDER' },
    '€': { val: '1249', equiv: '25k', stripe: 'price_1Qim5eDZAazoTP0szK5sV78C' },
    '£': { val: '1099', equiv: '22k', stripe: 'price_GBP_PLACEHOLDER' }
  };

  fetch('https://get.geojs.io/v1/ip/country.json')
    .then(res => res.json())
    .then(data => {
      const country = data.country;
      let symbol = '$';

      if (country === 'GB') symbol = '£';
      else if (euroCountries.includes(country)) symbol = '€';

      // Update all currency symbols on the page
      document.querySelectorAll('.curr').forEach(el => el.textContent = symbol);

      // Update prices if elements exist (report page, services page)
      const priceVal = document.getElementById('price-val') || document.getElementById('price-value');
      const priceEquiv = document.getElementById('price-equivalent');
      const priceInlines = document.querySelectorAll('.price-inline');

      if (priceVal) priceVal.textContent = prices[symbol].val;
      if (priceEquiv) priceEquiv.textContent = prices[symbol].equiv;
      priceInlines.forEach(el => el.textContent = prices[symbol].val);

      // Set Stripe price ID globally for checkout
      window.CURRENT_STRIPE_PRICE_ID = prices[symbol].stripe;
    })
    .catch(err => {
      console.log('Currency check failed, keeping defaults.');
      window.CURRENT_STRIPE_PRICE_ID = prices['€'].stripe;
    });

  /* 5. COOKIE CONSENT BANNER (P13) */
  (function() {
    if (localStorage.getItem('caugia_cookie_consent')) return;

    if (localStorage.getItem('analytics_optout') === 'true') {
      window['ga-disable-G-YDP8FW3T3Z'] = true;
    }

    var banner = document.createElement('div');
    banner.id = 'cookieConsent';
    banner.innerHTML =
      '<div class="cc-inner">' +
        '<span class="cc-text">We use cookies for analytics (Google Analytics, Microsoft Clarity) to improve your experience.</span>' +
        '<div class="cc-buttons">' +
          '<button class="cc-btn cc-decline">Decline</button>' +
          '<button class="cc-btn cc-accept">Accept</button>' +
        '</div>' +
      '</div>';

    var style = document.createElement('style');
    style.textContent =
      '#cookieConsent{position:fixed;bottom:0;left:0;right:0;background:#fff;border-top:1px solid #e2e8f0;' +
      'box-shadow:0 -2px 12px rgba(0,0,0,0.06);z-index:9998;padding:0 20px;font-family:Inter,sans-serif;' +
      'transition:opacity 0.4s ease,transform 0.4s ease;}' +
      '#cookieConsent.cc-hidden{opacity:0;transform:translateY(100%);pointer-events:none;}' +
      '.cc-inner{max-width:1080px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;' +
      'gap:16px;min-height:48px;max-height:60px;padding:10px 0;}' +
      '.cc-text{font-size:13px;color:#475569;line-height:1.4;flex:1;}' +
      '.cc-buttons{display:flex;gap:8px;flex-shrink:0;}' +
      '.cc-btn{font-family:Inter,sans-serif;font-size:13px;font-weight:600;border-radius:6px;padding:8px 18px;' +
      'cursor:pointer;border:none;transition:background 0.2s,color 0.2s;}' +
      '.cc-accept{background:#3B6CD8;color:#fff;}' +
      '.cc-accept:hover{background:#2d5bc0;}' +
      '.cc-decline{background:#fff;color:#475569;border:1px solid #cbd5e1;}' +
      '.cc-decline:hover{background:#f1f5f9;}' +
      '@media(max-width:600px){' +
        '.cc-inner{flex-direction:column;text-align:center;max-height:none;padding:12px 0 14px;}' +
        '.cc-text{font-size:12px;}' +
        '.cc-buttons{width:100%;justify-content:center;}' +
      '}';

    document.head.appendChild(style);
    document.body.appendChild(banner);

    function dismiss() {
      banner.classList.add('cc-hidden');
      setTimeout(function() { banner.remove(); }, 500);
    }

    banner.querySelector('.cc-accept').addEventListener('click', function() {
      localStorage.setItem('caugia_cookie_consent', 'accepted');
      dismiss();
    });

    banner.querySelector('.cc-decline').addEventListener('click', function() {
      localStorage.setItem('caugia_cookie_consent', 'declined');
      localStorage.setItem('analytics_optout', 'true');
      window['ga-disable-G-YDP8FW3T3Z'] = true;
      dismiss();
    });
  })();

  /* 6. READING PROGRESS BAR (intelligence articles only) */
  (function() {
    var articleBody = document.querySelector('.article-body');
    if (!articleBody) return;

    var bar = document.createElement('div');
    bar.id = 'readingProgress';
    bar.style.cssText =
      'position:fixed;top:0;left:0;width:0;height:3px;' +
      'background:linear-gradient(to right,#3B6CD8,#E07830);' +
      'z-index:9999;transition:width 0.1s linear;pointer-events:none;';
    document.body.appendChild(bar);

    function updateProgress() {
      var rect = articleBody.getBoundingClientRect();
      var articleTop = rect.top + window.pageYOffset;
      var articleHeight = articleBody.offsetHeight;
      var scrolled = window.pageYOffset - articleTop;
      var viewportHeight = window.innerHeight;
      var progress = scrolled / (articleHeight - viewportHeight);
      progress = Math.max(0, Math.min(1, progress));
      bar.style.width = (progress * 100) + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  })();
});
