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
});
