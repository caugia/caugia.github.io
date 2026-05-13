#!/usr/bin/env node
// Apply Sophie Format-C callouts to all 6 product.html files
// EN copy approved on /product-preview.html. NL/FR/DE/ES/PL drafted
// with native diakritieken and Nova-energetic voice per locale.
//
// Run: node scripts/apply-sophie-callouts.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));

// ============================================================
// Localised callout content
// ============================================================
const LABELS = {
  en: { what: 'What you see:', why: 'Why it matters:' },
  nl: { what: 'Wat je ziet:', why: 'Waarom dat telt:' },
  fr: { what: 'Ce que vous voyez :', why: 'Pourquoi c’est important :' },
  de: { what: 'Was Sie sehen:', why: 'Warum das zählt:' },
  es: { what: 'Lo que ves:', why: 'Por qué importa:' },
  pl: { what: 'Co widzisz:', why: 'Dlaczego to ważne:' },
};

const COPY = {
  en: {
    workspace:  ['Every GTM constraint lands here as one number &mdash; no dashboard-hopping.', 'Most teams find their biggest leak isn’t where they thought it was.'],
    actions:    ['Strategy &rarr; tactics &rarr; operations, drawn as one connected path.', 'Boards approve strategy. Teams execute operations. This is where the two meet.'],
    sophie:     ['Four modes &mdash; board prep, sales gut-checks, late-night &ldquo;is this real?&rdquo; moments.', 'A second brain that’s read every dimension of your operation. Decisions get faster, and harder to talk you out of.'],
    intel:      ['Three feeds &mdash; AI Answer Market, competitive comparison, and visibility tracking &mdash; all running on autopilot.', 'Your next pipeline is being generated right now in someone else’s prompt window. This is where you see it first.'],
    brief:      ['The one-pager the board actually reads &mdash; auto-built from your live numbers.', 'Monthly board narrative goes from 6 hours to 6 minutes. Same depth.'],
    connector:  ['Signal from the tools you already pay for.', 'No re-platforming. Your data stays where it is.'],
    dd:         ['The same view a VC sees during due diligence.', 'Your fundraise narrative becomes an artifact, not a slide deck.'],
  },
  nl: {
    workspace:  ['Elke GTM-bottleneck landt hier als &eacute;&eacute;n getal &mdash; geen dashboard-hopping meer.', 'Bij de meeste teams blijkt de grootste leak niet te zitten waar ze dachten.'],
    actions:    ['Strategie &rarr; tactiek &rarr; operatie, getekend als &eacute;&eacute;n doorlopend pad.', 'Boards keuren strategie goed. Teams voeren ops uit. Dit is waar die twee elkaar raken.'],
    sophie:     ['Vier modi &mdash; board-prep, sales-check, het 11-uur-’s-avonds &ldquo;klopt dit?&rdquo;-moment.', 'Een tweede brein dat alle hoeken van je operatie kent. Beslissingen gaan sneller, en zijn moeilijker uit je hoofd te praten.'],
    intel:      ['Drie feeds &mdash; AI Answer Market, concurrent-vergelijking, visibility-tracking &mdash; allemaal op autopilot.', 'Je volgende pipeline wordt nu gegenereerd in iemand anders’ prompt-venster. Hier zie je het als eerste.'],
    brief:      ['De one-pager die je board daadwerkelijk leest &mdash; auto-gebouwd uit je live cijfers.', 'Je maandelijks board-verhaal gaat van 6 uur naar 6 minuten. Zelfde diepgang.'],
    connector:  ['Signaal uit de tools die je toch al betaalt.', 'Geen re-platforming. Je data blijft staan waar hij staat.'],
    dd:         ['Dezelfde view die een VC ziet tijdens due diligence.', 'Je fundraise-verhaal wordt een artefact, geen pitch-deck.'],
  },
  fr: {
    workspace:  ['Chaque contrainte GTM atterrit ici en un seul chiffre &mdash; fini le saut entre dashboards.', 'La plupart des &eacute;quipes d&eacute;couvrent que leur plus grosse fuite n’est pas l&agrave; o&ugrave; elles le croyaient.'],
    actions:    ['Strat&eacute;gie &rarr; tactique &rarr; op&eacute;rations, dessin&eacute;es comme un seul chemin connect&eacute;.', 'Le board approuve la strat&eacute;gie. Les &eacute;quipes ex&eacute;cutent les op&eacute;rations. C’est ici que les deux se rencontrent.'],
    sophie:     ['Quatre modes &mdash; pr&eacute;paration board, gut-check commercial, le moment &laquo;&nbsp;c’est vrai, &ccedil;a&nbsp;?&nbsp;&raquo; &agrave; 23&nbsp;h.', 'Un second cerveau qui a lu chaque dimension de votre op&eacute;ration. Les d&eacute;cisions se prennent plus vite &mdash; et sont plus difficiles &agrave; remettre en question.'],
    intel:      ['Trois flux &mdash; AI Answer Market, comparaison concurrentielle, suivi de visibilit&eacute; &mdash; tous en pilote automatique.', 'Votre prochain pipeline se g&eacute;n&egrave;re en ce moment m&ecirc;me dans la fen&ecirc;tre de prompt de quelqu’un d’autre. Vous le voyez ici en premier.'],
    brief:      ['Le one-pager que votre board lit vraiment &mdash; g&eacute;n&eacute;r&eacute; automatiquement &agrave; partir de vos chiffres en direct.', 'Le r&eacute;cit mensuel passe de 6&nbsp;heures &agrave; 6&nbsp;minutes. M&ecirc;me profondeur.'],
    connector:  ['Du signal depuis les outils que vous payez d&eacute;j&agrave;.', 'Aucune re-plateforme. Vos donn&eacute;es restent l&agrave; o&ugrave; elles sont.'],
    dd:         ['La m&ecirc;me vue qu’un VC obtient pendant la due diligence.', 'Votre r&eacute;cit de lev&eacute;e devient un artefact, pas un deck.'],
  },
  de: {
    workspace:  ['Jeder GTM-Engpass landet hier als eine Zahl &mdash; kein Dashboard-Hopping mehr.', 'Die meisten Teams entdecken: Ihr größtes Leck sitzt nicht dort, wo sie es vermutet haben.'],
    actions:    ['Strategie &rarr; Taktik &rarr; Operations, gezeichnet als ein durchgehender Pfad.', 'Boards genehmigen Strategie. Teams führen Operations aus. Hier treffen sich die beiden.'],
    sophie:     ['Vier Modi &mdash; Board-Vorbereitung, Sales-Gut-Check, der &bdquo;Stimmt das wirklich?&ldquo;-Moment um 23&nbsp;Uhr.', 'Ein zweites Gehirn, das jede Dimension Ihrer Operation kennt. Entscheidungen werden schneller &mdash; und sind schwerer wieder zu zerreden.'],
    intel:      ['Drei Feeds &mdash; AI Answer Market, Wettbewerbsvergleich und Visibility-Tracking &mdash; alle auf Autopilot.', 'Ihre nächste Pipeline wird gerade jetzt im Prompt-Fenster eines anderen generiert. Hier sehen Sie es zuerst.'],
    brief:      ['Der One-Pager, den Ihr Board tatsächlich liest &mdash; automatisch aus Ihren Live-Zahlen gebaut.', 'Das monatliche Board-Narrativ schrumpft von 6&nbsp;Stunden auf 6&nbsp;Minuten. Gleiche Tiefe.'],
    connector:  ['Signal aus den Tools, für die Sie sowieso schon bezahlen.', 'Keine Re-Plattformierung. Ihre Daten bleiben, wo sie sind.'],
    dd:         ['Dieselbe Sicht, die ein VC in der Due Diligence bekommt.', 'Ihre Fundraise-Story wird zum Artefakt &mdash; nicht zum Deck.'],
  },
  es: {
    workspace:  ['Cada restricción GTM aterriza aquí como un número &mdash; se acabó el salto entre dashboards.', 'La mayoría de los equipos descubren que su mayor fuga no estaba donde creían.'],
    actions:    ['Estrategia &rarr; tácticas &rarr; operaciones, dibujadas como un camino conectado.', 'El board aprueba estrategia. Los equipos ejecutan operaciones. Aquí es donde se encuentran.'],
    sophie:     ['Cuatro modos &mdash; preparación board, gut-check de ventas, el momento &laquo;&iquest;esto es real?&raquo; a las 23&nbsp;h.', 'Un segundo cerebro que ha leído cada dimensión de tu operación. Las decisiones llegan más rápido &mdash; y son más difíciles de echar atrás.'],
    intel:      ['Tres flujos &mdash; AI Answer Market, comparación competitiva y seguimiento de visibilidad &mdash; todos en piloto automático.', 'Tu próximo pipeline se está generando ahora mismo en la ventana de prompt de otra persona. Aquí lo ves antes que nadie.'],
    brief:      ['El one-pager que tu board lee de verdad &mdash; generado automáticamente desde tus números en vivo.', 'La narrativa mensual pasa de 6&nbsp;horas a 6&nbsp;minutos. Misma profundidad.'],
    connector:  ['Señal desde las herramientas que ya pagas.', 'Cero re-plataforma. Tus datos se quedan donde están.'],
    dd:         ['La misma vista que ve un VC durante la due diligence.', 'Tu narrativa de fundraise se convierte en artefacto, no en deck.'],
  },
  pl: {
    workspace:  ['Każde ograniczenie GTM ląduje tu jako jedna liczba &mdash; koniec ze skakaniem po dashboardach.', 'Większość zespołów odkrywa, że ich największy wyciek wcale nie był tam, gdzie myśleli.'],
    actions:    ['Strategia &rarr; taktyka &rarr; operacje, narysowane jako jedna połączona ścieżka.', 'Zarząd zatwierdza strategię. Zespoły wykonują operacje. Tu te dwa światy się spotykają.'],
    sophie:     ['Cztery tryby &mdash; przygotowanie do zarządu, sales gut-check, moment &bdquo;czy to się dzieje?&rdquo; o 23.', 'Drugi mózg, który zna każdy wymiar twojej operacji. Decyzje zapadają szybciej &mdash; i trudniej je odwołać.'],
    intel:      ['Trzy strumienie &mdash; AI Answer Market, porównanie konkurencji i śledzenie widoczności &mdash; wszystkie na autopilocie.', 'Twój następny pipeline generuje się teraz w czyimś oknie prompt. Tutaj zobaczysz to pierwszy.'],
    brief:      ['One-pager, który zarząd faktycznie czyta &mdash; zbudowany automatycznie z twoich aktualnych liczb.', 'Miesięczna narracja dla zarządu spada z 6&nbsp;godzin do 6&nbsp;minut. Ta sama głębia.'],
    connector:  ['Sygnał z narzędzi, za które już płacisz.', 'Bez re-platformingu. Twoje dane zostają tam, gdzie są.'],
    dd:         ['Ten sam widok, który widzi VC podczas due diligence.', 'Twoja narracja fundraisingowa staje się artefaktem, nie pitch deckiem.'],
  },
};

// ============================================================
// Format-C CSS (identical for all locales)
// ============================================================
const CSS_BLOCK = `/* === Sophie callout (Format C) === */
.sophie-callout {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin: 28px 0 12px;
  padding: 14px 16px;
  background: rgba(59, 108, 216, 0.04);
  border-left: 3px solid #3B6CD8;
  border-radius: 8px;
  font-size: 14.5px;
  line-height: 1.55;
  color: #1f2a44;
}
.sophie-callout__avatar {
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 2px;
}
.sophie-callout__body { flex: 1; }
.sophie-callout__row { margin: 0; }
.sophie-callout__row + .sophie-callout__row { margin-top: 4px; }
.sophie-callout__label {
  color: #3B6CD8;
  font-weight: 600;
  margin-right: 6px;
}
@media (max-width: 600px) {
  .sophie-callout { font-size: 13.5px; padding: 12px 14px; }
}`;

// ============================================================
// Builder helpers
// ============================================================
function callout(locale, key, sophiePath, opts = {}) {
  const { what, why } = LABELS[locale];
  const [seeText, whyText] = COPY[locale][key];
  const extraStyle = opts.style ? ` style="${opts.style}"` : '';
  const labelStyle = opts.labelColor ? ` style="color:${opts.labelColor};"` : '';
  const bodyStyle = opts.bodyTextAlign ? ` style="text-align:${opts.bodyTextAlign};"` : '';
  return `<div class="sophie-callout"${extraStyle}>
      <img src="${sophiePath}" class="sophie-callout__avatar" alt="Sophie" width="32" height="32" />
      <div class="sophie-callout__body"${bodyStyle}>
        <p class="sophie-callout__row"><span class="sophie-callout__label"${labelStyle}>${what}</span>${seeText}</p>
        <p class="sophie-callout__row"><span class="sophie-callout__label"${labelStyle}>${why}</span>${whyText}</p>
      </div>
    </div>`;
}

// Insertion plan per file. Each entry: {
//   anchor: a string that uniquely identifies the line/block where the callout goes
//   placement: 'before' (callout inserted before the anchor) | 'after'
//   key: which callout copy to use
//   opts: optional Format-C styling overrides (Brief uses dark variant, Connector inline, etc.)
// }
function planForFile(filePath, locale) {
  // locale === 'en' means the file is at repo root; everything else lives in /<locale>/
  const isRoot = locale === 'en';
  const sophiePath = isRoot ? 'assets/sophie-avatar.png' : '../assets/sophie-avatar.png';
  const assetsPrefix = isRoot ? 'assets' : '../assets';

  return [
    {
      key: 'workspace',
      placement: 'before',
      anchor: `<img src="${assetsPrefix}/screenshot-workspace.png"`,
      opts: {},
      indent: '    ',
    },
    {
      key: 'actions',
      placement: 'before',
      anchor: `<img src="${assetsPrefix}/screenshot-actions.png"`,
      opts: {},
      indent: '    ',
    },
    {
      key: 'sophie',
      placement: 'before',
      anchor: `<img src="${assetsPrefix}/screenshot-sophie.png"`,
      opts: {},
      indent: '    ',
    },
    {
      key: 'intel',
      placement: 'before',
      anchor: '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:32px;">',
      opts: {},
      indent: '    ',
    },
    {
      key: 'brief',
      placement: 'before',
      anchor: `<img src="${assetsPrefix}/screenshot-brief.png"`,
      opts: {
        style: 'max-width:560px;margin:0 auto 28px;background:rgba(255,255,255,0.06);color:#e2e8f0;',
        labelColor: '#7aa3ff',
        bodyTextAlign: 'left',
      },
      indent: '      ',
    },
    {
      key: 'connector',
      placement: 'after-connector-p',
      anchor: 'screenshot-connector.png',
      opts: { style: 'margin-top:16px;margin-bottom:0;' },
      indent: '        ',
    },
    {
      key: 'dd',
      placement: 'before-dd-buttons',
      anchor: 'screenshot-dd.png',
      opts: { style: 'margin:0 0 20px;' },
      indent: '        ',
    },
  ].map((p) => ({ ...p, sophiePath }));
}

// ============================================================
// File-mutation
// ============================================================
function applyToFile(absPath, locale) {
  console.log(`\nProcessing ${locale}: ${absPath}`);
  let html = fs.readFileSync(absPath, 'utf8');
  const original = html;

  // Idempotency: skip if already done
  if (html.includes('class="sophie-callout"')) {
    console.log('  already has sophie-callout, skipping');
    return false;
  }

  // 1. Inject CSS before </style>...</head>
  const styleClose = html.lastIndexOf('</style>');
  if (styleClose === -1) throw new Error(`no </style> in ${absPath}`);
  html = html.slice(0, styleClose) + CSS_BLOCK + '\n' + html.slice(styleClose);

  // 2. Determine path prefix relative to where this file sits
  const isRoot = locale === 'en';
  const sophiePath = isRoot ? 'assets/sophie-avatar.png' : '../assets/sophie-avatar.png';
  const plan = planForFile(absPath, locale).map((p) => ({ ...p, sophiePath }));

  // 3. Walk the plan and inject each callout
  for (const step of plan) {
    const calloutHtml = callout(locale, step.key, sophiePath, step.opts);

    if (step.placement === 'before') {
      // Find the line containing the anchor, capture leading whitespace,
      // and insert callout on a new line before it with matching indent.
      const idx = html.indexOf(step.anchor);
      if (idx === -1) {
        console.warn(`  MISS [${step.key}]: anchor not found`);
        continue;
      }
      // Walk back to start of line to grab indent
      let lineStart = idx;
      while (lineStart > 0 && html[lineStart - 1] !== '\n') lineStart--;
      const indent = html.slice(lineStart, idx);
      const insertion = `${indent}${calloutHtml}\n`;
      html = html.slice(0, lineStart) + insertion + html.slice(lineStart);
      console.log(`  inserted [${step.key}] before ${step.anchor.slice(0, 50)}...`);
    } else if (step.placement === 'after-connector-p') {
      // Connector copy: insert AFTER the closing </p> that sits directly
      // before the connector screenshot. Pattern: a <p>…</p> followed by
      // </div>\n      <img …screenshot-connector.png… .
      const imgIdx = html.indexOf(step.anchor);
      if (imgIdx === -1) {
        console.warn(`  MISS [${step.key}]: anchor not found`);
        continue;
      }
      // Walk back to find the closing </div> immediately before the image
      const divCloseIdx = html.lastIndexOf('</div>', imgIdx);
      if (divCloseIdx === -1) {
        console.warn(`  MISS [${step.key}]: no </div> before connector img`);
        continue;
      }
      // Walk back further to find the </p> just before that </div>
      const pCloseIdx = html.lastIndexOf('</p>', divCloseIdx);
      if (pCloseIdx === -1) {
        console.warn(`  MISS [${step.key}]: no </p> before connector div close`);
        continue;
      }
      const insertAt = pCloseIdx + '</p>'.length;
      // Find indent of the </div> line for visual alignment
      let lineStart = divCloseIdx;
      while (lineStart > 0 && html[lineStart - 1] !== '\n') lineStart--;
      const indent = html.slice(lineStart, divCloseIdx);
      const insertion = `\n${indent}  ${calloutHtml}`;
      html = html.slice(0, insertAt) + insertion + html.slice(insertAt);
      console.log(`  inserted [${step.key}] after connector <p>`);
    } else if (step.placement === 'before-dd-buttons') {
      // DD demo: insert callout before the buttons-row div, which sits
      // inside the same text column as the section copy. The buttons-row
      // anchor is `display:flex;gap:14px;flex-wrap:wrap;` (might appear
      // multiple times — pin by proximity to screenshot-dd.png).
      const ddImgIdx = html.indexOf(step.anchor);
      if (ddImgIdx === -1) {
        console.warn(`  MISS [${step.key}]: dd image not found`);
        continue;
      }
      // Find buttons-row that appears BEFORE the dd image
      const btnAnchor = 'display:flex;gap:14px;flex-wrap:wrap;';
      const btnIdx = html.lastIndexOf(btnAnchor, ddImgIdx);
      if (btnIdx === -1) {
        console.warn(`  MISS [${step.key}]: buttons div not found before dd img`);
        continue;
      }
      // Walk back to start of the <div line
      let divStart = btnIdx;
      while (divStart > 0 && html.slice(divStart, divStart + 4) !== '<div') divStart--;
      let lineStart = divStart;
      while (lineStart > 0 && html[lineStart - 1] !== '\n') lineStart--;
      const indent = html.slice(lineStart, divStart);
      const insertion = `${indent}${calloutHtml}\n`;
      html = html.slice(0, lineStart) + insertion + html.slice(lineStart);
      console.log(`  inserted [${step.key}] before dd buttons-row`);
    }
  }

  // Sanity: should have exactly 7 callouts
  const calloutCount = (html.match(/class="sophie-callout"/g) || []).length;
  if (calloutCount !== 7) {
    console.error(`  ERROR: expected 7 callouts, got ${calloutCount} — not writing`);
    return false;
  }

  if (html === original) {
    console.log('  no changes (?)');
    return false;
  }
  fs.writeFileSync(absPath, html, 'utf8');
  console.log(`  wrote ${calloutCount} callouts + CSS`);
  return true;
}

// ============================================================
// Drive
// ============================================================
const TARGETS = [
  { file: 'product.html', locale: 'en' },
  { file: 'nl/product.html', locale: 'nl' },
  { file: 'fr/product.html', locale: 'fr' },
  { file: 'de/product.html', locale: 'de' },
  { file: 'es/product.html', locale: 'es' },
  { file: 'pl/product.html', locale: 'pl' },
];

let touched = 0;
for (const t of TARGETS) {
  const abs = path.join(ROOT, t.file);
  if (!fs.existsSync(abs)) {
    console.warn(`SKIP: ${abs} does not exist`);
    continue;
  }
  if (applyToFile(abs, t.locale)) touched++;
}
console.log(`\nDone. ${touched}/${TARGETS.length} files updated.`);
