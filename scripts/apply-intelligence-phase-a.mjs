#!/usr/bin/env node
// =============================================================================
// Phase A — intelligence.html restructure × 5 locales (nl/fr/de/es/pl)
// =============================================================================
// EN is the source of truth and has been edited directly. This script applies
// the same structural changes to the 5 non-EN locale files with native copy:
//   - <title> + meta description + og:title + og:description
//   - Hero h1 + sub-paragraph
//   - Cred-strip: prepend "4 Verticals"
//   - Insert methodology strip (between cred-strip and guided-path)
//   - Insert vertical-lens strip (between methodology and guided-path)
//   - Inject Phase-A CSS block (right before existing </style>)
//   - Rename "By Role" cluster title + insert vertical-aware note
//
// Idempotent: re-running on an already-patched file skips that file.
// Run: node scripts/apply-intelligence-phase-a.mjs
// =============================================================================

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));

// ============================================================
// Localised strings (EN is the source — already applied directly)
// ============================================================
const COPY = {
  nl: {
    title: 'GTM Intelligence | Het Operating System voor B2B Revenue Teams — Caugia',
    metaDesc: 'GTM-intelligence op board-niveau, gekalibreerd voor SaaS B2B, DTC, Fintech B2B en Professional Services. Identificeer waar de bottleneck zit, kwantificeer revenue-lekkage, en krijg de interventievolgorde — verankerd aan publieke benchmark-literatuur.',
    ogTitle: 'GTM Intelligence | Het Operating System voor B2B Revenue Teams — Caugia',
    ogDesc: 'Gekalibreerd voor SaaS B2B, DTC, Fintech B2B en Professional Services. Identificeer waar de bottleneck zit, kwantificeer revenue-lekkage, en krijg de interventievolgorde — verankerd aan publieke benchmark-literatuur.',
    heroH1: 'GTM-intelligence op board-niveau<br>voor B2B-revenue-teams',
    heroSub: 'Hetzelfde framework, vier industrie-kalibraties. Caugia identificeert waar de bottleneck zit, kwantificeert revenue-lekkage en bouwt de interventievolgorde &mdash; met elke per-vertical constante verankerd aan publieke benchmark-literatuur.',
    credPrefix: '4 Verticals',
    methodTag: 'METHODOLOGIE',
    methodH3: 'Caugia GTM Intelligence Framework v1 &mdash; gekalibreerd tegen de publieke benchmark-literatuur',
    methodSub: 'Elke per-vertical constante die we publiceren is verankerd aan een benoemde bron. Geen mening-als-data. Een prospect kan elk getal onafhankelijk verifi&euml;ren tegen de literatuur.',
    methodPhase2: '+ Fase&nbsp;2 cohort-backtest &middot; Q3&nbsp;2026',
    methodCta: 'Lees de framework-grondbeginselen &rarr;',
    lensLabel: 'Gekalibreerd voor:',
    lensNote: 'Zelfde engine, vertical-specifieke constanten per de bovenstaande methodologie.',
    byRoleTitle: 'Per rol &middot; SaaS B2B',
    byRoleNote: 'GTM-rolsets verschillen structureel per vertical: DTC werkt met een VP&nbsp;Growth in plaats van een CRO, ProfSvc draait op Practice Leads niet VP&nbsp;Sales, Fintech B2B voegt een Chief Compliance Officer toe aan de executive ring. <strong>Rol-artikelen voor DTC, Fintech B2B en Professional Services rollen uit vanaf Q3&nbsp;2026 samen met de cohort-backtest.</strong>',
  },
  fr: {
    title: "GTM Intelligence | Le système d'exploitation des équipes revenue B2B — Caugia",
    metaDesc: "Intelligence GTM de niveau board, calibrée pour SaaS B2B, DTC, Fintech B2B et Professional Services. Identifiez le point de contrainte, quantifiez les fuites de revenus, obtenez la séquence d'intervention — ancrée à la littérature de benchmarks publics.",
    ogTitle: "GTM Intelligence | Le système d'exploitation des équipes revenue B2B — Caugia",
    ogDesc: "Calibré pour SaaS B2B, DTC, Fintech B2B et Professional Services. Identifiez le point de contrainte, quantifiez les fuites de revenus, obtenez la séquence d'intervention — ancrée à la littérature de benchmarks publics.",
    heroH1: 'Intelligence GTM de niveau board<br>pour les &eacute;quipes revenue B2B',
    heroSub: "Le m&ecirc;me framework, quatre calibrations sectorielles. Caugia identifie le point de contrainte, quantifie les fuites de revenus et s&eacute;quence l'intervention &mdash; avec chaque constante par vertical ancr&eacute;e &agrave; la litt&eacute;rature de benchmarks publics.",
    credPrefix: '4 Verticaux',
    methodTag: 'M&Eacute;THODOLOGIE',
    methodH3: 'Caugia GTM Intelligence Framework v1 &mdash; calibr&eacute; contre la litt&eacute;rature de benchmarks publics',
    methodSub: "Chaque constante par vertical que nous publions est ancr&eacute;e &agrave; une source nomm&eacute;e. Pas d'opinion-comme-donn&eacute;e. Un prospect peut v&eacute;rifier chaque chiffre ind&eacute;pendamment contre la litt&eacute;rature.",
    methodPhase2: '+ Phase&nbsp;2 backtest cohorte &middot; T3&nbsp;2026',
    methodCta: 'Lire les fondements du framework &rarr;',
    lensLabel: 'Calibr&eacute; pour :',
    lensNote: 'M&ecirc;me moteur, constantes sp&eacute;cifiques par vertical selon la m&eacute;thodologie ci-dessus.',
    byRoleTitle: 'Par r&ocirc;le &middot; SaaS B2B',
    byRoleNote: "Les jeux de r&ocirc;les GTM diff&egrave;rent structurellement par vertical&nbsp;: DTC fonctionne avec un VP&nbsp;Growth plut&ocirc;t qu'un CRO, ProfSvc tourne sur des Practice Leads pas des VP&nbsp;Sales, Fintech B2B ajoute un Chief Compliance Officer &agrave; l'anneau ex&eacute;cutif. <strong>Les articles de r&ocirc;le pour DTC, Fintech B2B et Professional Services se d&eacute;ploient &agrave; partir du T3&nbsp;2026 parall&egrave;lement au backtest cohorte.</strong>",
  },
  de: {
    title: 'GTM Intelligence | Das Operating System für B2B-Revenue-Teams — Caugia',
    metaDesc: 'GTM-Intelligence auf Board-Niveau, kalibriert für SaaS B2B, DTC, Fintech B2B und Professional Services. Identifizieren Sie den Engpass, quantifizieren Sie Revenue-Leakage und erhalten Sie die Interventions-Reihenfolge — verankert in der öffentlichen Benchmark-Literatur.',
    ogTitle: 'GTM Intelligence | Das Operating System für B2B-Revenue-Teams — Caugia',
    ogDesc: 'Kalibriert für SaaS B2B, DTC, Fintech B2B und Professional Services. Identifizieren Sie den Engpass, quantifizieren Sie Revenue-Leakage und erhalten Sie die Interventions-Reihenfolge — verankert in der öffentlichen Benchmark-Literatur.',
    heroH1: 'GTM-Intelligence auf Board-Niveau<br>für B2B-Revenue-Teams',
    heroSub: 'Dasselbe Framework, vier Branchen-Kalibrierungen. Caugia identifiziert den Engpass, quantifiziert Revenue-Leakage und sequenziert die Intervention &mdash; mit jeder Per-Vertical-Konstante verankert in der öffentlichen Benchmark-Literatur.',
    credPrefix: '4 Branchen',
    methodTag: 'METHODIK',
    methodH3: 'Caugia GTM Intelligence Framework v1 &mdash; kalibriert anhand der öffentlichen Benchmark-Literatur',
    methodSub: 'Jede Per-Vertical-Konstante, die wir veröffentlichen, ist an eine benannte Quelle verankert. Keine Meinung-als-Daten. Ein Interessent kann jede Zahl unabhängig gegen die Literatur verifizieren.',
    methodPhase2: '+ Phase&nbsp;2 Kohorten-Backtest &middot; Q3&nbsp;2026',
    methodCta: 'Framework-Grundlagen lesen &rarr;',
    lensLabel: 'Kalibriert für:',
    lensNote: 'Gleiche Engine, vertikal-spezifische Konstanten gemäß der obigen Methodik.',
    byRoleTitle: 'Nach Rolle &middot; SaaS B2B',
    byRoleNote: 'GTM-Rollensets unterscheiden sich strukturell zwischen Branchen: DTC operiert mit einem VP&nbsp;Growth statt einem CRO, ProfSvc läuft auf Practice Leads nicht VP&nbsp;Sales, Fintech B2B fügt einen Chief Compliance Officer zum Executive Ring hinzu. <strong>Rollen-Artikel für DTC, Fintech B2B und Professional Services rollen ab Q3&nbsp;2026 parallel zum Kohorten-Backtest aus.</strong>',
  },
  es: {
    title: 'GTM Intelligence | El sistema operativo para equipos B2B revenue — Caugia',
    metaDesc: 'Intelligence GTM de nivel directivo, calibrada para SaaS B2B, DTC, Fintech B2B y Professional Services. Identifica el punto de restricción, cuantifica la fuga de ingresos, obtén la secuencia de intervención — anclada a la literatura de benchmarks pública.',
    ogTitle: 'GTM Intelligence | El sistema operativo para equipos B2B revenue — Caugia',
    ogDesc: 'Calibrada para SaaS B2B, DTC, Fintech B2B y Professional Services. Identifica el punto de restricción, cuantifica la fuga de ingresos, obtén la secuencia de intervención — anclada a la literatura de benchmarks pública.',
    heroH1: 'Intelligence GTM de nivel directivo<br>para equipos revenue B2B',
    heroSub: "El mismo framework, cuatro calibraciones sectoriales. Caugia identifica el punto de restricción, cuantifica la fuga de ingresos y secuencia la intervención &mdash; con cada constante por vertical anclada a la literatura de benchmarks pública.",
    credPrefix: '4 Verticales',
    methodTag: 'METODOLOGÍA',
    methodH3: 'Caugia GTM Intelligence Framework v1 &mdash; calibrado contra la literatura de benchmarks pública',
    methodSub: 'Cada constante por vertical que publicamos está anclada a una fuente nombrada. Sin opinión-como-dato. Un prospect puede verificar cada número de forma independiente contra la literatura.',
    methodPhase2: '+ Fase&nbsp;2 backtest cohorte &middot; T3&nbsp;2026',
    methodCta: 'Leer los fundamentos del framework &rarr;',
    lensLabel: 'Calibrado para:',
    lensNote: 'Mismo motor, constantes específicas por vertical según la metodología anterior.',
    byRoleTitle: 'Por rol &middot; SaaS B2B',
    byRoleNote: 'Los sets de roles GTM difieren estructuralmente por vertical: DTC opera con un VP&nbsp;Growth en lugar de un CRO, ProfSvc gira en torno a Practice Leads no VP&nbsp;Sales, Fintech B2B añade un Chief Compliance Officer al anillo ejecutivo. <strong>Los artículos por rol para DTC, Fintech B2B y Professional Services se despliegan desde el T3&nbsp;2026 junto al backtest cohorte.</strong>',
  },
  pl: {
    title: 'GTM Intelligence | System operacyjny dla zespołów B2B revenue — Caugia',
    metaDesc: 'GTM Intelligence na poziomie zarządu, skalibrowana dla SaaS B2B, DTC, Fintech B2B i Professional Services. Identyfikuj wąskie gardło, kwantyfikuj wyciek przychodów, otrzymaj sekwencję interwencji — zakotwiczone w publicznej literaturze benchmarków.',
    ogTitle: 'GTM Intelligence | System operacyjny dla zespołów B2B revenue — Caugia',
    ogDesc: 'Skalibrowana dla SaaS B2B, DTC, Fintech B2B i Professional Services. Identyfikuj wąskie gardło, kwantyfikuj wyciek przychodów, otrzymaj sekwencję interwencji — zakotwiczone w publicznej literaturze benchmarków.',
    heroH1: 'GTM Intelligence na poziomie zarządu<br>dla zespołów revenue B2B',
    heroSub: 'Ten sam framework, cztery kalibracje branżowe. Caugia identyfikuje wąskie gardło, kwantyfikuje wyciek przychodów i ustala kolejność interwencji &mdash; z każdą per-vertical stałą zakotwiczoną w publicznej literaturze benchmarków.',
    credPrefix: '4 Branże',
    methodTag: 'METODOLOGIA',
    methodH3: 'Caugia GTM Intelligence Framework v1 &mdash; skalibrowany względem publicznej literatury benchmarków',
    methodSub: 'Każda per-vertical stała, którą publikujemy, jest zakotwiczona w nazwanym źródle. Bez opinii-jako-danych. Prospect może niezależnie zweryfikować każdą liczbę względem literatury.',
    methodPhase2: '+ Faza&nbsp;2 backtest kohorty &middot; Q3&nbsp;2026',
    methodCta: 'Przeczytaj podstawy frameworka &rarr;',
    lensLabel: 'Skalibrowano dla:',
    lensNote: 'Ten sam silnik, stałe specyficzne dla branży zgodnie z metodologią powyżej.',
    byRoleTitle: 'Według roli &middot; SaaS B2B',
    byRoleNote: 'Zestawy ról GTM różnią się strukturalnie między branżami: DTC działa z VP&nbsp;Growth zamiast CRO, ProfSvc opiera się na Practice Leadach a nie VP&nbsp;Sales, Fintech B2B dodaje Chief Compliance Officer do kręgu wykonawczego. <strong>Artykuły o rolach dla DTC, Fintech B2B i Professional Services pojawiają się od Q3&nbsp;2026 wraz z backtestem kohorty.</strong>',
  },
};

// Reuse the EN's CSS block + structural HTML (with locale-specific text injected)
const PHASE_A_CSS = `    /* === Methodology strip === */
    .method-strip{max-width:960px;margin:8px auto 28px;padding:24px 28px;background:linear-gradient(135deg,rgba(59,108,216,.04),rgba(96,165,250,.05));border:1px solid rgba(59,108,216,.18);border-radius:14px}
    .method-strip-head{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-bottom:12px}
    .method-strip-head .intel-tag{margin:0}
    .method-strip h3{font-family:Merriweather,serif;font-size:1.05rem;font-weight:900;color:#0f172a;margin:0;line-height:1.35}
    .method-strip-sub{font-size:.86rem;color:#475569;line-height:1.55;margin:0 0 14px}
    .method-sources{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px}
    .method-sources span{background:#fff;border:1px solid #e2e8f0;color:#475569;font-size:.7rem;font-weight:600;padding:5px 11px;border-radius:6px;white-space:nowrap}
    .method-sources span.method-phase2{background:#fef3c7;border-color:#fde68a;color:#92400e}
    .method-cta{display:inline-block;font-size:.82rem;font-weight:700;color:var(--primary);text-decoration:none}
    .method-cta:hover{text-decoration:underline}
    /* === Vertical lens === */
    .vertical-lens{max-width:960px;margin:0 auto 32px;padding:14px 22px;background:#f8fafc;border:1px solid var(--line);border-radius:10px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
    .vertical-lens-label{font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#64748b}
    .vertical-chip{display:inline-block;padding:5px 11px;background:#fff;border:1px solid var(--line);border-radius:999px;font-size:.74rem;font-weight:700;color:#0f172a}
    .vertical-chip.saas-b2b{border-color:#3B6CD8;color:#3B6CD8}
    .vertical-chip.dtc{border-color:#E07830;color:#E07830}
    .vertical-chip.fintech{border-color:#0c4a6e;color:#0c4a6e}
    .vertical-chip.profsvc{border-color:#065f46;color:#065f46}
    .vertical-lens-note{font-size:.72rem;color:#64748b;font-style:italic;margin-left:auto}
    @media(max-width:600px){.method-strip{margin:8px 16px 24px;padding:18px 20px}.method-strip h3{font-size:.98rem}.vertical-lens{margin:0 16px 24px;flex-direction:column;align-items:flex-start;gap:8px}.vertical-lens-note{margin-left:0}}`;

function methodologyStripBlock(loc, copy) {
  // Methodology strip — relative path from locale subdir is ../intelligence/<slug>.html
  return `
    <!-- ═══ METHODOLOGY STRIP ═══ -->
    <div class="container">
      <div class="method-strip">
        <div class="method-strip-head">
          <span class="intel-tag tag-framework">${copy.methodTag}</span>
          <h3>${copy.methodH3}</h3>
        </div>
        <p class="method-strip-sub">${copy.methodSub}</p>
        <div class="method-sources">
          <span>Bessemer Cloud Index 2024</span>
          <span>OpenView SaaS Benchmarks 2024</span>
          <span>Drivepoint DTC Recovery Studies</span>
          <span>Triple Whale State of DTC 2024</span>
          <span>Acrew State of Fintech 2024</span>
          <span>FT Partners B2B Fintech 2024</span>
          <span>SPI PS Maturity Benchmark 2024</span>
          <span>Kennedy Pulse Survey 2024</span>
          <span class="method-phase2">${copy.methodPhase2}</span>
        </div>
        <a href="intelligence/grip-framework-gtm-diagnostic-model.html" class="method-cta">${copy.methodCta}</a>
      </div>
    </div>

    <!-- ═══ VERTICAL LENS ═══ -->
    <div class="container">
      <div class="vertical-lens">
        <span class="vertical-lens-label">${copy.lensLabel}</span>
        <span class="vertical-chip saas-b2b">SaaS B2B</span>
        <span class="vertical-chip dtc">DTC</span>
        <span class="vertical-chip fintech">Fintech B2B</span>
        <span class="vertical-chip profsvc">Professional Services</span>
        <span class="vertical-lens-note">${copy.lensNote}</span>
      </div>
    </div>`;
}

// Find the line containing a regex-friendly anchor and replace the matched
// portion. Used for hero, meta tags, etc.
function replaceFirst(html, regex, replacement) {
  if (!regex.test(html)) return null;
  return html.replace(regex, replacement);
}

function processFile(absPath, loc) {
  console.log(`\nProcessing ${loc}: ${absPath}`);
  let html = fs.readFileSync(absPath, 'utf8');
  const original = html;
  const copy = COPY[loc];

  if (html.includes('class="method-strip"')) {
    console.log('  already has method-strip, skipping');
    return false;
  }

  // 1. <title>
  let h = replaceFirst(html, /<title>[^<]+<\/title>/, `<title>${copy.title}</title>`);
  if (!h) { console.warn('  miss: <title>'); return false; }
  html = h;

  // 2. meta description
  h = replaceFirst(
    html,
    /<meta name="description" content="[^"]+"\s*\/?>/,
    `<meta name="description" content="${copy.metaDesc}" />`
  );
  if (!h) console.warn('  miss: meta description'); else html = h;

  // 3. og:title
  h = replaceFirst(
    html,
    /<meta property="og:title" content="[^"]+"\s*\/?>/,
    `<meta property="og:title" content="${copy.ogTitle}" />`
  );
  if (!h) console.warn('  miss: og:title'); else html = h;

  // 4. og:description
  h = replaceFirst(
    html,
    /<meta property="og:description" content="[^"]+"\s*\/?>/,
    `<meta property="og:description" content="${copy.ogDesc}" />`
  );
  if (!h) console.warn('  miss: og:description'); else html = h;

  // 5. Inject Phase-A CSS just before the existing </style> in <head>
  // Look for the last </style> in the head — the EN file's pattern is a
  // big inline <style> block ending with the @media rule.
  const styleEnd = html.indexOf('</style>');
  if (styleEnd === -1) { console.warn('  miss: </style>'); return false; }
  // Find the line break before </style>
  let insertAt = styleEnd;
  // Walk back past whitespace to a newline so the CSS sits cleanly
  while (insertAt > 0 && html[insertAt - 1] === ' ') insertAt--;
  if (html[insertAt - 1] === '\n') {
    html = html.slice(0, insertAt) + PHASE_A_CSS + '\n' + html.slice(insertAt);
  } else {
    html = html.slice(0, insertAt) + '\n' + PHASE_A_CSS + '\n' + html.slice(insertAt);
  }

  // 6. Replace hero h1 (multi-line capture with <br>)
  h = replaceFirst(
    html,
    /<h1>[^<]*(?:<br\s*\/?>[^<]*)?<\/h1>/,
    `<h1>${copy.heroH1}</h1>`
  );
  if (!h) console.warn('  miss: hero <h1>'); else html = h;

  // 7. Replace hero sub paragraph (class="intel-sub")
  h = replaceFirst(
    html,
    /<p class="intel-sub">[\s\S]*?<\/p>/,
    `<p class="intel-sub">${copy.heroSub}</p>`
  );
  if (!h) console.warn('  miss: intel-sub'); else html = h;

  // 8. Cred-strip: prepend "4 Verticals" badge. Match the first <span>...</span>
  // inside cred-items and prepend our badge before it.
  h = replaceFirst(
    html,
    /(<div class="cred-items">)(\s*)(<span>)/,
    `$1$2<span>${copy.credPrefix}</span> $3`
  );
  if (!h) console.warn('  miss: cred-items prepend'); else html = h;

  // 9. Insert methodology + vertical-lens strips. Anchor: the closing </div>
  // of the cred-strip container. The cred-strip pattern is:
  //   <div class="container cred-strip">
  //     <div class="cred-items">...</div>
  //   </div>
  // We insert AFTER the cred-strip's closing </div> (and its newline).
  const credStripEnd = html.indexOf('cred-strip">');
  if (credStripEnd === -1) {
    console.warn('  miss: cred-strip anchor');
  } else {
    // Walk forward to the second </div> after the anchor (closes cred-items, then cred-strip)
    const firstClose = html.indexOf('</div>', credStripEnd);
    const secondClose = html.indexOf('</div>', firstClose + 6);
    if (secondClose === -1) {
      console.warn('  miss: cred-strip close');
    } else {
      const insertAfter = secondClose + '</div>'.length;
      const stripsBlock = methodologyStripBlock(loc, copy);
      html = html.slice(0, insertAfter) + stripsBlock + html.slice(insertAfter);
    }
  }

  // 10. By Role cluster: rename title + insert note. The pattern is:
  //   <div class="cluster-title">By Role</div>  (this varies per locale)
  //   <div class="intel-grid intel-grid-3">
  // We need to rename the title AND insert a note <p> between title and grid.
  // Anchor: the existing By-Role cluster-title, which uses a locale-translated
  // phrase. We detect it by looking for the cluster-title that immediately
  // precedes the CFO/CMO article cards.
  const cfoIdx = html.indexOf('intelligence/cfo-gtm-unit-economics.html');
  if (cfoIdx === -1) {
    console.warn('  miss: cfo article anchor');
  } else {
    // Walk back to find the nearest preceding `<div class="cluster-title">`
    const clusterTitleStart = html.lastIndexOf('<div class="cluster-title">', cfoIdx);
    const clusterTitleEnd = html.indexOf('</div>', clusterTitleStart);
    if (clusterTitleStart === -1 || clusterTitleEnd === -1) {
      console.warn('  miss: cluster-title for By Role');
    } else {
      const titleClose = clusterTitleEnd + '</div>'.length;
      const newTitle = `<div class="cluster-title">${copy.byRoleTitle}</div>\n      <p style="font-size:.84rem;color:#64748b;line-height:1.55;margin:0 0 20px;">${copy.byRoleNote}</p>`;
      html = html.slice(0, clusterTitleStart) + newTitle + html.slice(titleClose);
    }
  }

  if (html === original) {
    console.log('  no changes (?)');
    return false;
  }

  fs.writeFileSync(absPath, html, 'utf8');
  console.log('  wrote');
  return true;
}

// ============================================================
// Drive
// ============================================================
const TARGETS = [
  { file: 'nl/intelligence.html', locale: 'nl' },
  { file: 'fr/intelligence.html', locale: 'fr' },
  { file: 'de/intelligence.html', locale: 'de' },
  { file: 'es/intelligence.html', locale: 'es' },
  { file: 'pl/intelligence.html', locale: 'pl' },
];

let touched = 0;
for (const t of TARGETS) {
  const abs = path.join(ROOT, t.file);
  if (!fs.existsSync(abs)) {
    console.warn(`SKIP: ${abs} missing`);
    continue;
  }
  if (processFile(abs, t.locale)) touched++;
}
console.log(`\nDone. ${touched}/${TARGETS.length} files updated.`);
