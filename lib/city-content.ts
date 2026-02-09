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

export function getCityContent(slug: string): CityContent | null {
  const filePath = resolve(contentDir, `${slug}.json`);
  if (!existsSync(filePath)) return null;
  try {
    return JSON.parse(readFileSync(filePath, "utf-8"));
  } catch {
    return null;
  }
}
