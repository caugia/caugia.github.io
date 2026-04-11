/**
 * Caugia Partner Referral Tracking
 *
 * Captures ?ref=CODE from URLs, persists in localStorage (90-day window),
 * and rewrites os.caugia.com links to include the referral code.
 *
 * Include in <head>: <script src="assets/partner-referral.js"></script>
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'caugia_ref';
  var MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000; // 90 days
  var API_ENDPOINT = 'https://os.caugia.com/api/partner/click';

  function getParams() {
    try {
      return new URLSearchParams(window.location.search);
    } catch (_) {
      return null;
    }
  }

  function readStoredRef() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (!parsed || !parsed.code || !parsed.timestamp) return null;
      return parsed;
    } catch (_) {
      return null;
    }
  }

  function storeRef(code) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ code: code, timestamp: Date.now() })
      );
    } catch (_) {
      // localStorage unavailable or full — silently ignore
    }
  }

  function removeRef() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (_) {
      // ignore
    }
  }

  function trackClick(code, params) {
    try {
      var body = { referral_code: code, landing_page: window.location.pathname };
      if (params) {
        var src = params.get('utm_source');
        var med = params.get('utm_medium');
        var cam = params.get('utm_campaign');
        if (src) body.utm_source = src;
        if (med) body.utm_medium = med;
        if (cam) body.utm_campaign = cam;
      }
      // Fire-and-forget — no error handling needed
      if (typeof navigator.sendBeacon === 'function') {
        navigator.sendBeacon(
          API_ENDPOINT,
          new Blob([JSON.stringify(body)], { type: 'application/json' })
        );
      } else {
        fetch(API_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
          keepalive: true,
        }).catch(function () {});
      }
    } catch (_) {
      // tracking failure must never break the page
    }
  }

  function rewriteLinks(code) {
    var links = document.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href');
      if (!href || href.indexOf('os.caugia.com') === -1) continue;

      try {
        var url = new URL(href, window.location.origin);
        url.searchParams.set('ref', code);
        links[i].setAttribute('href', url.toString());
      } catch (_) {
        // malformed URL — skip
      }
    }
  }

  function run() {
    var params = getParams();

    // 1. Capture new referral from URL
    if (params) {
      var refCode = params.get('ref');
      if (refCode) {
        refCode = refCode.trim();
        if (refCode.length > 0) {
          storeRef(refCode);
          trackClick(refCode, params);
        }
      }
    }

    // 2. Read stored referral and check expiry
    var stored = readStoredRef();
    if (!stored) return;

    var age = Date.now() - stored.timestamp;
    if (age > MAX_AGE_MS) {
      removeRef();
      return;
    }

    // 3. Rewrite links after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        rewriteLinks(stored.code);
      });
    } else {
      rewriteLinks(stored.code);
    }

    // Also rewrite links added later (SPA-style navigations, lazy content)
    if (typeof MutationObserver === 'function') {
      var observer = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          var added = mutations[i].addedNodes;
          for (var j = 0; j < added.length; j++) {
            var node = added[j];
            if (node.nodeType !== 1) continue;
            if (
              node.tagName === 'A' &&
              node.getAttribute('href') &&
              node.getAttribute('href').indexOf('os.caugia.com') !== -1
            ) {
              try {
                var url = new URL(node.getAttribute('href'), window.location.origin);
                url.searchParams.set('ref', stored.code);
                node.setAttribute('href', url.toString());
              } catch (_) {}
            }
            // Check children of added node
            var childLinks = node.querySelectorAll
              ? node.querySelectorAll('a[href*="os.caugia.com"]')
              : [];
            for (var k = 0; k < childLinks.length; k++) {
              try {
                var childUrl = new URL(
                  childLinks[k].getAttribute('href'),
                  window.location.origin
                );
                childUrl.searchParams.set('ref', stored.code);
                childLinks[k].setAttribute('href', childUrl.toString());
              } catch (_) {}
            }
          }
        }
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
    }
  }

  // Run without blocking rendering
  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(run);
  } else {
    setTimeout(run, 0);
  }
})();
