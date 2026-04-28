# Morning TODO — 28 april 2026, 09:00 CEST

**Doel:** www.caugia.com homepage consistent maken met geüpdatete LinkedIn-positioning ("GTM Operating System for B2B revenue teams").

**Bestand:** `index.html` (in deze repo, root)

**Tijd:** ~10 min totaal voor de 4 edits + commit + push

---

## De 4 edits

### Edit 1 — `<title>` (regel 34)

**Huidig:**
```html
<title>Caugia | Go-to-Market Diagnostics. One constraint. Three moves.</title>
```

**Vervang met:**
```html
<title>Caugia | GTM Operating System for B2B revenue teams. Find the constraint. Govern the fix.</title>
```

### Edit 2 — meta description (regel 35)

**Huidig:**
```html
<meta name="description" content="Your GTM team is executing. Your revenue isn't. Caugia's deterministic engine finds the structural bottleneck in one hour and gives you three concrete moves with owner, cost and deadline. For B2B SaaS, DTC, Fintech B2B and Professional Services." />
```

**Vervang met:**
```html
<meta name="description" content="Your GTM team is executing. Your revenue isn't. Caugia is the GTM Operating System for B2B revenue teams: deterministic diagnostics that find the structural bottleneck and an OS that governs the fix. For B2B SaaS, DTC, Fintech B2B and Professional Services." />
```

(verticals blijven staan voor SEO-juice naar de vertical-landing-pages)

### Edit 3 — schema description (regel 66)

**Huidig:**
```json
"description": "GRIP OS — the constraint-driven GTM operating system for B2B SaaS. Find the constraint. Govern the fix.",
```

**Vervang met:**
```json
"description": "GRIP OS — the constraint-driven GTM operating system for B2B revenue teams. Find the constraint. Govern the fix.",
```

### Edit 4 — schema knowsAbout (regel 71)

**Huidig:**
```json
"knowsAbout": ["Go-to-Market Strategy", "B2B SaaS", "Revenue Operations", "GTM Diagnostics"]
```

**Vervang met:**
```json
"knowsAbout": ["Go-to-Market Strategy", "B2B SaaS", "Revenue Operations", "GTM Diagnostics", "GTM Operating System"]
```

(B2B SaaS blijft staan als SEO-signal naar saas-b2b.html landing page)

---

## Daarna

```bash
cd "/Users/tommeijer/Documents/New project/caugia.github.io"
git add index.html
git commit -m "Align homepage positioning with LinkedIn: GTM Operating System for B2B revenue teams"
git push origin main
```

GitHub Pages deploy duurt ~1–2 min. Verify met:
```bash
curl -s "https://www.caugia.com" | grep -E "(<title>|meta name=.description|GTM operating system|knowsAbout)" | head -5
```

---

## Niet vergeten (low-prio, kan later)

- Vertical-pages (saas-b2b.html, dtc.html, fintech.html, professional-services.html) hebben elk hun eigen `<title>` en hero — zelfde "Diagnostics" framing leeft daar mogelijk ook. Geen prio voor vandaag.
- /vc-deck#s8 milestones zegt nog "MCP Q3 2026" — dat hebben we besproken, blijft.
- /investors page robots noindex staat actief, dus SEO-mismatch kan daar geen kwaad doen.
