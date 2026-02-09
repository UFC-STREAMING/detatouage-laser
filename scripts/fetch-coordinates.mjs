#!/usr/bin/env node

/**
 * Fetches geo coordinates for all cities from the French government API (geo.api.gouv.fr).
 * Outputs data/city-coordinates.json with { [slug]: { lat, lng } } mapping.
 *
 * Usage:
 *   node scripts/fetch-coordinates.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const CITIES_TS = resolve(ROOT, "data/cities.ts");
const OUTPUT = resolve(ROOT, "data/city-coordinates.json");
const DELAY_MS = 100; // Be polite to free API

// Parse cities from TypeScript source
function parseCities() {
  const src = readFileSync(CITIES_TS, "utf-8");
  const cities = [];
  const re = /\{\s*id:\s*"[^"]*",\s*name:\s*"([^"]*)",\s*slug:\s*"([^"]*)",\s*postalCode:\s*"(\d{5})"/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    cities.push({ name: m[1], slug: m[2], postalCode: m[3] });
  }
  return cities;
}

async function fetchCoords(cityName, postalCode) {
  // Try by postal code first (most accurate for French communes)
  const params = new URLSearchParams({
    nom: cityName,
    codePostal: postalCode,
    fields: "nom,centre,codesPostaux",
    limit: "1",
  });

  let res = await fetch(`https://geo.api.gouv.fr/communes?${params}`);
  if (!res.ok) throw new Error(`API error ${res.status}`);
  let data = await res.json();

  // Fallback: search by name only
  if (data.length === 0) {
    const params2 = new URLSearchParams({
      nom: cityName,
      fields: "nom,centre,codesPostaux",
      limit: "1",
    });
    res = await fetch(`https://geo.api.gouv.fr/communes?${params2}`);
    if (!res.ok) throw new Error(`API error ${res.status}`);
    data = await res.json();
  }

  if (data.length === 0) return null;

  const commune = data[0];
  if (!commune.centre?.coordinates) return null;

  return {
    lat: commune.centre.coordinates[1],
    lng: commune.centre.coordinates[0],
  };
}

async function main() {
  const cities = parseCities();
  console.log(`Fetching coordinates for ${cities.length} cities...`);

  const coords = {};
  let success = 0;
  let failed = 0;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    try {
      const result = await fetchCoords(city.name, city.postalCode);
      if (result) {
        coords[city.slug] = result;
        success++;
      } else {
        console.warn(`  No coords: ${city.name} (${city.postalCode})`);
        failed++;
      }
    } catch (err) {
      console.error(`  Error: ${city.name}: ${err.message}`);
      failed++;
    }

    if (i % 100 === 0 && i > 0) {
      console.log(`  Progress: ${i}/${cities.length}`);
    }

    if (i < cities.length - 1) {
      await new Promise((r) => setTimeout(r, DELAY_MS));
    }
  }

  writeFileSync(OUTPUT, JSON.stringify(coords, null, 2));
  console.log(`\nDone: ${success} coords saved, ${failed} failed`);
  console.log(`Output: data/city-coordinates.json`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
