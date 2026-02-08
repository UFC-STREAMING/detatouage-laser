import { cities, getCityBySlug } from "@/data/cities";
import { getNeighborDepartments } from "@/data/department-neighbors";
import { City } from "@/types";

/**
 * Dynamically computes nearby cities for internal linking (maillage interne).
 * Uses same-department cities + neighboring department cities, sorted by population.
 * Returns up to 9 cities: max 3 from same department + up to 6 from neighbors.
 */
export function getProximityCitiesDynamic(citySlug: string): City[] {
  const city = getCityBySlug(citySlug);
  if (!city) return [];

  // 1. Same department cities (excluding current), sorted by population desc
  const sameDeptCities = cities
    .filter((c) => c.department.number === city.department.number && c.slug !== citySlug)
    .sort((a, b) => (b.population || 0) - (a.population || 0))
    .slice(0, 3);

  // 2. Neighboring department cities, sorted by population desc
  const neighborDeptNumbers = getNeighborDepartments(city.department.number);
  const neighborCities = cities
    .filter((c) => neighborDeptNumbers.includes(c.department.number))
    .sort((a, b) => (b.population || 0) - (a.population || 0))
    .slice(0, 6);

  // 3. Combine and deduplicate
  const seen = new Set<string>();
  const result: City[] = [];

  for (const c of [...sameDeptCities, ...neighborCities]) {
    if (!seen.has(c.slug)) {
      seen.add(c.slug);
      result.push(c);
    }
  }

  return result.slice(0, 9);
}
