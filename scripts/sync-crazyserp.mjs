#!/usr/bin/env node

/**
 * Fetches local business data from CrazySERP API for each city.
 *
 * Usage:
 *   node scripts/sync-crazyserp.mjs            # Process all cities
 *   node scripts/sync-crazyserp.mjs --limit 5   # Process first 5 cities
 *   node scripts/sync-crazyserp.mjs --skip 100  # Skip first 100 cities
 *   node scripts/sync-crazyserp.mjs --only paris,lyon  # Process specific slugs
 *
 * Requires CRAZYSERP_API_KEY in .env.local
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const CITIES_TS = resolve(ROOT, "data/cities.ts");
const OUTPUT_DIR = resolve(ROOT, "data/cities-content");
const ERRORS_FILE = resolve(OUTPUT_DIR, "errors.json");
const DELAY_MS = 2000;

// ---------------------------------------------------------------------------
// 1. Load env
// ---------------------------------------------------------------------------

function loadEnv() {
  const envPath = resolve(ROOT, ".env.local");
  if (!existsSync(envPath)) {
    console.error("ERROR: .env.local not found. Create it with CRAZYSERP_API_KEY=<key>");
    process.exit(1);
  }
  const lines = readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let value = trimmed.slice(eqIdx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  }
}

// ---------------------------------------------------------------------------
// 2. Parse cities from TypeScript source
// ---------------------------------------------------------------------------

function parseCities() {
  const src = readFileSync(CITIES_TS, "utf-8");
  const cities = [];
  const objectRegex = /\{\s*id:\s*"[^"]*",\s*name:\s*"([^"]*)",\s*slug:\s*"([^"]*)"/g;
  let match;
  while ((match = objectRegex.exec(src)) !== null) {
    cities.push({ name: match[1], slug: match[2] });
  }
  if (cities.length === 0) {
    console.error("ERROR: Could not parse any cities from data/cities.ts");
    process.exit(1);
  }
  return cities;
}

// ---------------------------------------------------------------------------
// 3. CLI argument parsing
// ---------------------------------------------------------------------------

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { limit: Infinity, skip: 0, only: null };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--limit" && args[i + 1]) {
      opts.limit = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === "--skip" && args[i + 1]) {
      opts.skip = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === "--only" && args[i + 1]) {
      opts.only = new Set(args[i + 1].split(",").map((s) => s.trim()));
      i++;
    }
  }
  return opts;
}

// ---------------------------------------------------------------------------
// 4. API helper
// ---------------------------------------------------------------------------

async function fetchSearch(apiKey, cityName) {
  const params = new URLSearchParams({
    q: `Détatouage ${cityName}`,
    location: `${cityName}, France`,
    page: "1",
    gl: "fr",
    hl: "fr",
  });

  const res = await fetch(`https://crazyserp.com/api/search?${params}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Search API ${res.status}: ${body.slice(0, 200)}`);
  }

  return res.json();
}

// ---------------------------------------------------------------------------
// 5. Extract businesses from parsed_data.locations
// ---------------------------------------------------------------------------

function extractBusinesses(apiResponse) {
  const parsed = apiResponse.parsed_data;
  if (!parsed) return [];

  const locations = parsed.locations || [];
  if (!Array.isArray(locations) || locations.length === 0) return [];

  return locations.map((loc) => ({
    name: loc.title || "",
    category: loc.category || "",
    address: loc.address || "",
    rating: loc.rating ?? null,
    reviewCount: loc.review_count ?? null,
  }));
}

// ---------------------------------------------------------------------------
// 6. Extract people_also_ask questions
// ---------------------------------------------------------------------------

function extractPeopleAlsoAsk(apiResponse) {
  const parsed = apiResponse.parsed_data;
  if (!parsed) return [];

  const paa = parsed.people_also_ask || [];
  if (!Array.isArray(paa)) return [];

  return paa.slice(0, 3).map((item) => ({
    question: item.question || "",
    answer: item.answer || "",
  }));
}

// ---------------------------------------------------------------------------
// 7. Generate description from business data
// ---------------------------------------------------------------------------

function generateDescription(cityName, businesses, peopleAlsoAsk) {
  const first = businesses[0];
  const parts = [];

  if (first) {
    parts.push(
      `${first.name} fait partie des centres de détatouage laser à ${cityName}.`
    );

    if (first.rating && first.rating >= 4 && first.reviewCount) {
      parts.push(
        `Avec une note de ${first.rating}/5 sur ${first.reviewCount} avis, les patients confirment la qualité des traitements proposés.`
      );
    } else if (first.rating) {
      parts.push(
        `Ce centre affiche une note de ${first.rating}/5 pour ses prestations de détatouage.`
      );
    }
  } else {
    parts.push(
      `Le détatouage laser est accessible à ${cityName} grâce à des professionnels qualifiés.`
    );
  }

  if (businesses.length > 1) {
    parts.push(
      `${businesses.length} centres spécialisés sont référencés dans la région pour le retrait de tatouage au laser.`
    );
  }

  parts.push(
    `Demandez votre devis gratuit pour connaître le tarif adapté à votre tatouage à ${cityName}.`
  );

  return parts.join(" ");
}

// ---------------------------------------------------------------------------
// 8. Main
// ---------------------------------------------------------------------------

async function main() {
  loadEnv();

  const apiKey = process.env.CRAZYSERP_API_KEY;
  if (!apiKey) {
    console.error("ERROR: CRAZYSERP_API_KEY not found in .env.local");
    process.exit(1);
  }

  const opts = parseArgs();
  let cities = parseCities();

  console.log(`Parsed ${cities.length} cities from data/cities.ts`);

  if (opts.only) {
    cities = cities.filter((c) => opts.only.has(c.slug));
    console.log(`Filtered to ${cities.length} cities (--only)`);
  } else {
    if (opts.skip > 0) {
      cities = cities.slice(opts.skip);
      console.log(`Skipped first ${opts.skip} cities`);
    }
    if (opts.limit < Infinity) {
      cities = cities.slice(0, opts.limit);
      console.log(`Limited to ${cities.length} cities`);
    }
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const errors = [];
  let processed = 0;
  let succeeded = 0;
  let skippedExisting = 0;

  for (const city of cities) {
    processed++;
    const outFile = resolve(OUTPUT_DIR, `${city.slug}.json`);

    // Skip if already fetched (--only forces refresh)
    if (!opts.only && existsSync(outFile)) {
      skippedExisting++;
      console.log(`Skipping ${processed}/${cities.length}: ${city.name} (already exists)`);
      continue;
    }

    console.log(`Processing ${processed}/${cities.length}: ${city.name}...`);

    try {
      const apiResponse = await fetchSearch(apiKey, city.name);
      const businesses = extractBusinesses(apiResponse);
      const peopleAlsoAsk = extractPeopleAlsoAsk(apiResponse);

      if (businesses.length === 0) {
        console.warn(`  ⚠ No locations found for ${city.name}`);
        errors.push({ slug: city.slug, city: city.name, error: "No locations in results", at: new Date().toISOString() });
      } else {
        console.log(`  Found ${businesses.length} businesses (top: ${businesses[0].name}, ${businesses[0].rating}/5)`);
      }

      const description = generateDescription(city.name, businesses, peopleAlsoAsk);

      const result = {
        slug: city.slug,
        cityName: city.name,
        businessName: businesses[0]?.name || null,
        businesses: businesses.map((b) => ({
          name: b.name,
          category: b.category,
          address: b.address,
          rating: b.rating,
          reviewCount: b.reviewCount,
        })),
        description,
        peopleAlsoAsk,
        fetchedAt: new Date().toISOString(),
      };

      writeFileSync(outFile, JSON.stringify(result, null, 2));
      console.log(`  ✓ Saved ${city.slug}.json`);
      succeeded++;
    } catch (err) {
      console.error(`  ✗ Error: ${err.message}`);
      errors.push({ slug: city.slug, city: city.name, error: err.message, at: new Date().toISOString() });
    }

    if (processed < cities.length) {
      await sleep(DELAY_MS);
    }
  }

  // Save error log
  if (errors.length > 0) {
    let existingErrors = [];
    if (existsSync(ERRORS_FILE)) {
      try {
        existingErrors = JSON.parse(readFileSync(ERRORS_FILE, "utf-8"));
      } catch { /* ignore */ }
    }
    writeFileSync(ERRORS_FILE, JSON.stringify([...existingErrors, ...errors], null, 2));
  }

  console.log("\n--- Summary ---");
  console.log(`Total:   ${processed}`);
  console.log(`Success: ${succeeded}`);
  console.log(`Skipped: ${skippedExisting} (already existed)`);
  console.log(`Errors:  ${errors.length}`);
  if (errors.length > 0) {
    console.log(`Error log saved to: data/cities-content/errors.json`);
  }
  console.log(`Credits used: 1 per city (${processed - skippedExisting} API calls made)`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
