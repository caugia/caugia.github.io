document.addEventListener("DOMContentLoaded", function() {
  
  /* 1. MOBILE NAV LOGIC (Click Outside + Toggle) */
  const toggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  
  if (toggle && mobileNav) {
    // Toggle
    toggle.addEventListener("click", (e) => {
      e.stopPropagation(); 
      mobileNav.classList.toggle("active");
      const isOpen = mobileNav.classList.contains("active");
      toggle.innerText = isOpen ? "Close" : "Menu";
    });

    // Close on click outside
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
  // Pakt de bestandsnaam (bijv 'services.html') of 'index.html' bij root
  const currentPath = window.location.pathname.split("/").pop() || "index.html"; 

  navLinks.forEach(link => {
    // Haal de href op (bijv 'services.html')
    const href = link.getAttribute('href');
    // Als href gelijk is aan path, OF als we op root zitten en href is index.html
    if (href === currentPath) {
      link.classList.add('active');
    }
  });

  /* 3. DYNAMIC YEAR IN FOOTER */
  // Zorg dat in je HTML footer staat: © <span id="year">2026</span> ...
  const yearSpan = document.getElementById("year");
  if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* 4. GLOBAL CURRENCY DETECTION (GeoIP) */
  // Update alle elementen met class="curr"
  const euroCountries = ["AT", "BE", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PT", "SK", "SI", "ES", "HR", "BG", "CZ", "DK", "HU", "PL", "RO", "SE"];

  fetch('https://get.geojs.io/v1/ip/country.json')
    .then(res => res.json())
    .then(data => {
      const country = data.country; 
      let symbol = '$'; // Default
      
      // Update config object if needed for specific pages (like services)
      // Maar voor base updaten we in ieder geval de symbolen
      if (country === 'GB') symbol = '£';
      else if (euroCountries.includes(country)) symbol = '€';
      
      document.querySelectorAll('.curr').forEach(el => el.textContent = symbol);
      
      // Specifiek voor Services/Reports prijzen als die IDs bestaan
      const priceVal = document.getElementById('price-val') || document.getElementById('price-value');
      const priceEquiv = document.getElementById('price-equivalent');
      
      if(priceVal || priceEquiv) {
         // Simpele mapping voor de standard prijzen (aanpassen indien nodig)
         const prices = {
            '$': { val: '1499', equiv: '18k' },
            '€': { val: '1249', equiv: '15k' },
            '£': { val: '1099', equiv: '13k' }
         };
         if(priceVal) priceVal.textContent = prices[symbol].val;
         if(priceEquiv) priceEquiv.textContent = prices[symbol].equiv;
      }
    })
    .catch(err => console.log('Currency check failed, keeping defaults.'));

});
