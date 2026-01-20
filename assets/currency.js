(function() {
  // --- Configuratie ---
  const defaultCurrency = '$'; // Standaard voor de rest van de wereld (Azië, VS, etc.)
  const euroSymbol = '€';
  const gbpSymbol = '£';

  // Lijst van alle EU-landen die de Euro gebruiken
  const euroCountries = ["AT", "BE", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PT", "SK", "SI", "ES", "HR", "BG", "CZ", "DK", "HU", "PL", "RO", "SE"];

  // Mapping voor Stripe Price ID's (zodat de checkout ook klopt)
  const stripePriceMap = {
      'EUR': 'price_1Qim5eDZAazoTP0szK5sV78C', // Jouw bestaande Euro prijs
      'USD': 'price_USD_PLACEHOLDER_HIER',    // VUL HIER JE USD PRIJS ID IN
      'GBP': 'price_GBP_PLACEHOLDER_HIER'     // VUL HIER JE GBP PRIJS ID IN
  };

  // --- Functies ---
  function setCurrency(symbol, currencyCode) {
    // 1. Update de visuele symbolen op de pagina
    document.querySelectorAll('.curr').forEach(el => el.textContent = symbol);

    // 2. Sla de juiste Stripe Price ID op in een globale variabele
    // Als de code niet bestaat (bijv. placeholder), val terug op EUR
    window.CURRENT_STRIPE_PRICE_ID = stripePriceMap[currencyCode] || stripePriceMap['EUR'];
    
    console.log(`Locatie gedetecteerd. Valuta ingesteld op: ${currencyCode} (${symbol}). Price ID: ${window.CURRENT_STRIPE_PRICE_ID}`);
  }

  // --- Uitvoering ---
  fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => {
      const country = data.country_code;

      if (country === 'GB') {
        setCurrency(gbpSymbol, 'GBP');
      } else if (euroCountries.includes(country)) {
        setCurrency(euroSymbol, 'EUR');
      } else {
        // Voor de rest van de wereld (inclusief Azië)
        setCurrency(defaultCurrency, 'USD');
      }
    })
    .catch(err => {
      console.error('Fout bij ophalen locatie, fallback naar standaard ($).', err);
      setCurrency(defaultCurrency, 'USD');
    });
})();
