/* ═══════════════════════════════════════════════════════
   CAUGIA CURRENCY SWITCHER v2.0
   - IP-based detection via ipapi.co
   - Fixed prices per currency (no live conversion)
   - Updates .curr elements (symbol) and [data-price-key] elements (amounts)
   - Sets Stripe Price ID globally for checkout
   ═══════════════════════════════════════════════════════ */
(function () {
  "use strict";

  // ── Price table ──────────────────────────────────────
  // All prices are fixed, professional amounts.
  // USD: ~10-13% premium over EUR (US willingness-to-pay)
  // GBP: ~10-13% discount from EUR (stronger currency)
  var PRICES = {
    EUR: {
      symbol: "€",
      report:       "2,495",
      module:       "749",
      bundle:       "1,795",
      reportModule: "2,995",
      reportBundle: "3,995"
    },
    USD: {
      symbol: "$",
      report:       "2,795",
      module:       "849",
      bundle:       "1,995",
      reportModule: "3,295",
      reportBundle: "4,495"
    },
    GBP: {
      symbol: "£",
      report:       "2,195",
      module:       "649",
      bundle:       "1,595",
      reportModule: "2,695",
      reportBundle: "3,495"
    }
  };

  // ── Stripe Price IDs ─────────────────────────────────
  // Update these with your actual Stripe price IDs
  var STRIPE_IDS = {
    EUR: {
      report:       "price_EUR_REPORT_ID",
      module:       "price_EUR_MODULE_ID",
      bundle:       "price_EUR_BUNDLE_ID",
      reportModule: "price_EUR_REPORT_MODULE_ID",
      reportBundle: "price_EUR_REPORT_BUNDLE_ID"
    },
    USD: {
      report:       "price_USD_REPORT_ID",
      module:       "price_USD_MODULE_ID",
      bundle:       "price_USD_BUNDLE_ID",
      reportModule: "price_USD_REPORT_MODULE_ID",
      reportBundle: "price_USD_REPORT_BUNDLE_ID"
    },
    GBP: {
      report:       "price_GBP_REPORT_ID",
      module:       "price_GBP_MODULE_ID",
      bundle:       "price_GBP_BUNDLE_ID",
      reportModule: "price_GBP_REPORT_MODULE_ID",
      reportBundle: "price_GBP_REPORT_BUNDLE_ID"
    }
  };

  // ── Euro countries ───────────────────────────────────
  var EURO_COUNTRIES = [
    "AT","BE","BG","CY","CZ","DE","DK","EE","ES","FI",
    "FR","GR","HR","HU","IE","IT","LT","LU","LV","MT",
    "NL","PL","PT","RO","SE","SI","SK"
  ];

  // ── Apply currency to the page ───────────────────────
  function applyCurrency(currencyCode) {
    var c = PRICES[currencyCode] || PRICES.EUR;

    // 1. Update all currency symbols
    document.querySelectorAll(".curr").forEach(function (el) {
      el.textContent = c.symbol;
    });

    // 2. Update all prices via data-price-key
    document.querySelectorAll("[data-price-key]").forEach(function (el) {
      var key = el.getAttribute("data-price-key");
      if (c[key]) {
        el.textContent = c[key];
      }
    });

    // 3. Legacy support: #price-val, #price-value, .price-inline
    var priceVal = document.getElementById("price-val") || document.getElementById("price-value");
    if (priceVal) priceVal.textContent = c.report;
    document.querySelectorAll(".price-inline").forEach(function (el) {
      el.textContent = c.report;
    });

    // 4. Set Stripe price IDs globally
    var stripeIds = STRIPE_IDS[currencyCode] || STRIPE_IDS.EUR;
    window.CAUGIA_STRIPE = stripeIds;
    window.CURRENT_STRIPE_PRICE_ID = stripeIds.report; // default to report

    console.log("Caugia currency: " + currencyCode + " (" + c.symbol + ")");
  }

  // ── Detect country and apply ─────────────────────────
  fetch("https://ipapi.co/json/")
    .then(function (res) { return res.json(); })
    .then(function (data) {
      var country = data.country_code;
      if (country === "GB") {
        applyCurrency("GBP");
      } else if (EURO_COUNTRIES.indexOf(country) !== -1) {
        applyCurrency("EUR");
      } else {
        applyCurrency("USD");
      }
    })
    .catch(function (err) {
      console.log("Currency detection failed, defaulting to EUR.", err);
      applyCurrency("EUR");
    });
})();
