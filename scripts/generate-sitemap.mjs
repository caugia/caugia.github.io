#!/usr/bin/env node
// =============================================================================
// sitemap.xml generator
// =============================================================================
// Walks the filesystem, finds every public HTML file, and emits a complete
// multilingual sitemap.xml with:
//   - <loc> pointing to the EN canonical
//   - <xhtml:link rel="alternate" hreflang="..."/> for every locale that has
//     a corresponding file on disk (en/fr/de/es/pl/nl + x-default)
//   - <lastmod> derived from `git log -1` on the EN file (ISO 8601)
//   - <changefreq> + <priority> per page-type heuristic
//
// Excludes (matches robots.txt Disallow + obvious internal pages):
//   - 404.html, opt-out.html
//   - gtm-intelligence-report.html, gtm-intelligence-thank-you.html
//   - gtm-module-thank-you.html, faq.html
//
// Run: node scripts/generate-sitemap.mjs
//   → writes sitemap.xml at repo root (overwrites)
// =============================================================================

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const SITE = 'https://www.caugia.com';
const LOCALES = ['en', 'fr', 'de', 'es', 'pl', 'nl']; // EN is the canonical (no prefix)

// Files we never want in the sitemap, regardless of locale
const DENY = new Set([
  '404.html',
  'opt-out.html',
  'gtm-intelligence-report.html',
  'gtm-intelligence-thank-you.html',
  'gtm-module-thank-you.html',
  'faq.html',
]);

// Page-type heuristics: priority + changefreq
// Slug = filename minus .html minus directory prefix
function pageHints(slug, dir) {
  if (dir === '' && slug === 'index') return { priority: '1.0', changefreq: 'weekly' };
  if (dir === '' && ['product', 'pricing', 'grip-marketplace'].includes(slug))
    return { priority: '0.9', changefreq: 'weekly' };
  if (dir === '' && slug === 'intelligence') return { priority: '0.8', changefreq: 'weekly' };
  if (dir === '' && ['benchmarks', 'the-gtm-score', 'gtm-assessment', 'case-studies', 'research'].includes(slug))
    return { priority: '0.8', changefreq: 'monthly' };
  if (dir === '' && ['saas-b2b', 'fintech', 'dtc', 'professional-services'].includes(slug))
    return { priority: '0.8', changefreq: 'monthly' };
  if (dir === '' && slug.startsWith('partner')) return { priority: '0.6', changefreq: 'monthly' };
  if (dir === '' && ['about', 'contact', 'partners'].includes(slug))
    return { priority: '0.7', changefreq: 'monthly' };
  if (dir === '' && ['privacy', 'terms'].includes(slug))
    return { priority: '0.3', changefreq: 'yearly' };
  if (dir === 'intelligence') return { priority: '0.7', changefreq: 'monthly' };
  // Sensible default for anything we didn't enumerate
  return { priority: '0.6', changefreq: 'monthly' };
}

function gitLastMod(absPath) {
  try {
    const iso = execSync(`git log -1 --format=%cI "${absPath}"`, {
      cwd: ROOT,
      encoding: 'utf8',
    }).trim();
    // Use date-only form (YYYY-MM-DD) for sitemap — that's the spec-compliant
    // shortform that crawlers normalise to anyway, and easier to read in diff.
    if (iso) return iso.slice(0, 10);
  } catch {
    // file not tracked yet — fall through to file mtime
  }
  const mtime = fs.statSync(absPath).mtime;
  return mtime.toISOString().slice(0, 10);
}

// Build the URL for a (dir, slug) — root index.html is bare /, everything else
// keeps its .html suffix to match what's actually on disk.
function buildUrl(locale, dir, slug) {
  const localeSeg = locale === 'en' ? '' : `/${locale}`;
  if (dir === '' && slug === 'index') return `${SITE}${localeSeg}/`;
  const dirSeg = dir ? `/${dir}` : '';
  return `${SITE}${localeSeg}${dirSeg}/${slug}.html`;
}

// Build the on-disk path for a (locale, dir, slug). Used to verify the file
// actually exists before declaring an hreflang alternate.
function buildPath(locale, dir, slug) {
  const parts = [];
  if (locale !== 'en') parts.push(locale);
  if (dir) parts.push(dir);
  parts.push(`${slug}.html`);
  return path.join(ROOT, ...parts);
}

// Walk EN tree → collect canonical (dir, slug) pairs. Locale versions are
// derived from this, not walked separately, so we don't pollute the sitemap
// with EN-less locale-only stragglers.
function collectCanonicals() {
  const out = [];
  // Root .html files
  for (const f of fs.readdirSync(ROOT)) {
    if (!f.endsWith('.html')) continue;
    if (DENY.has(f)) continue;
    out.push({ dir: '', slug: f.replace(/\.html$/, '') });
  }
  // intelligence/ articles
  const intelDir = path.join(ROOT, 'intelligence');
  if (fs.existsSync(intelDir)) {
    for (const f of fs.readdirSync(intelDir)) {
      if (!f.endsWith('.html')) continue;
      if (DENY.has(f)) continue;
      out.push({ dir: 'intelligence', slug: f.replace(/\.html$/, '') });
    }
  }
  // Stable, predictable order: index first, then root pages alpha, then
  // intelligence alpha. This makes diffs easy.
  out.sort((a, b) => {
    if (a.dir !== b.dir) return a.dir === '' ? -1 : 1;
    if (a.dir === '' && a.slug === 'index') return -1;
    if (b.dir === '' && b.slug === 'index') return 1;
    return a.slug.localeCompare(b.slug);
  });
  return out;
}

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlEntry({ dir, slug }) {
  const enPath = buildPath('en', dir, slug);
  const lastmod = gitLastMod(enPath);
  const { priority, changefreq } = pageHints(slug, dir);
  const enLoc = escapeXml(buildUrl('en', dir, slug));

  // Build hreflang alternates only for locales that ACTUALLY have the file.
  // Otherwise we'd be signalling Google to follow dead links.
  const alternates = [];
  for (const loc of LOCALES) {
    const p = buildPath(loc, dir, slug);
    if (!fs.existsSync(p)) continue;
    const href = escapeXml(buildUrl(loc, dir, slug));
    alternates.push(`    <xhtml:link rel="alternate" hreflang="${loc}" href="${href}"/>`);
  }
  // x-default → always points at EN
  alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${enLoc}"/>`);

  return `  <url>
    <loc>${enLoc}</loc>
${alternates.join('\n')}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function main() {
  const canonicals = collectCanonicals();
  const entries = canonicals.map(urlEntry);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated by scripts/generate-sitemap.mjs · ${new Date().toISOString().slice(0, 10)} -->
<!-- ${canonicals.length} canonical pages × up to ${LOCALES.length} locales (en/fr/de/es/pl/nl + x-default) -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n\n')}
</urlset>
`;

  const out = path.join(ROOT, 'sitemap.xml');
  fs.writeFileSync(out, xml, 'utf8');

  // Sanity stats
  const localeCounts = Object.fromEntries(LOCALES.map((l) => [l, 0]));
  for (const c of canonicals) {
    for (const loc of LOCALES) {
      if (fs.existsSync(buildPath(loc, c.dir, c.slug))) localeCounts[loc]++;
    }
  }
  console.log(`Wrote ${out}`);
  console.log(`  ${canonicals.length} canonical pages`);
  console.log(`  Locale coverage:`);
  for (const loc of LOCALES) {
    const pct = ((localeCounts[loc] / canonicals.length) * 100).toFixed(0);
    console.log(`    ${loc}: ${localeCounts[loc]}/${canonicals.length} (${pct}%)`);
  }
  console.log(`  Excluded (per DENY): ${[...DENY].join(', ')}`);
}

main();
