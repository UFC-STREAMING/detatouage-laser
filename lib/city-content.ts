import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

export interface CrazySerpBusiness {
  name: string;
  category: string;
  address: string;
  rating: number | null;
  reviewCount: number | null;
}

export interface PeopleAlsoAsk {
  question: string;
  answer: string;
}

export interface CityContent {
  slug: string;
  cityName: string;
  businessName: string | null;
  businesses: CrazySerpBusiness[];
  description: string;
  peopleAlsoAsk: PeopleAlsoAsk[];
  fetchedAt: string;
}

const contentDir = resolve(process.cwd(), "data/cities-content");
const coordsPath = resolve(process.cwd(), "data/city-coordinates.json");

let _coords: Record<string, { lat: number; lng: number }> | null = null;

function loadCoords() {
  if (_coords) return _coords;
  try {
    _coords = JSON.parse(readFileSync(coordsPath, "utf-8"));
  } catch {
    _coords = {};
  }
  return _coords!;
}

export function getCityContent(slug: string): CityContent | null {
  const filePath = resolve(contentDir, `${slug}.json`);
  if (!existsSync(filePath)) return null;
  try {
    return JSON.parse(readFileSync(filePath, "utf-8"));
  } catch {
    return null;
  }
}

export function getCityCoordinates(slug: string): { lat: number; lng: number } | null {
  const coords = loadCoords();
  return coords[slug] || null;
}
