#!/usr/bin/env python3
"""
Generate the top 1000 French cities for data/cities.ts
Uses the geo.api.gouv.fr API (free, no key needed) to get real data.
"""

import json
import re
import urllib.request
import urllib.parse

def slugify(name):
    """Convert city name to URL-friendly slug."""
    s = name.lower()
    # French character replacements
    replacements = {
        'à': 'a', 'â': 'a', 'ä': 'a', 'æ': 'ae',
        'ç': 'c',
        'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
        'î': 'i', 'ï': 'i',
        'ô': 'o', 'ö': 'o', 'œ': 'oe',
        'ù': 'u', 'û': 'u', 'ü': 'u',
        'ÿ': 'y',
        "'": '-', "'": '-', " ": '-', "/": '-',
    }
    for old, new in replacements.items():
        s = s.replace(old, new)
    # Remove anything that's not alphanumeric or hyphen
    s = re.sub(r'[^a-z0-9-]', '', s)
    # Collapse multiple hyphens
    s = re.sub(r'-+', '-', s)
    # Strip leading/trailing hyphens
    s = s.strip('-')
    return s

def get_department_info(code_dept):
    """Map department code to name and slug."""
    DEPARTMENTS = {
        "01": ("Ain", "ain"),
        "02": ("Aisne", "aisne"),
        "03": ("Allier", "allier"),
        "04": ("Alpes-de-Haute-Provence", "alpes-de-haute-provence"),
        "05": ("Hautes-Alpes", "hautes-alpes"),
        "06": ("Alpes-Maritimes", "alpes-maritimes"),
        "07": ("Ardèche", "ardeche"),
        "08": ("Ardennes", "ardennes"),
        "09": ("Ariège", "ariege"),
        "10": ("Aube", "aube"),
        "11": ("Aude", "aude"),
        "12": ("Aveyron", "aveyron"),
        "13": ("Bouches-du-Rhône", "bouches-du-rhone"),
        "14": ("Calvados", "calvados"),
        "15": ("Cantal", "cantal"),
        "16": ("Charente", "charente"),
        "17": ("Charente-Maritime", "charente-maritime"),
        "18": ("Cher", "cher"),
        "19": ("Corrèze", "correze"),
        "2A": ("Corse-du-Sud", "corse-du-sud"),
        "2B": ("Haute-Corse", "haute-corse"),
        "21": ("Côte-d'Or", "cote-d-or"),
        "22": ("Côtes-d'Armor", "cotes-d-armor"),
        "23": ("Creuse", "creuse"),
        "24": ("Dordogne", "dordogne"),
        "25": ("Doubs", "doubs"),
        "26": ("Drôme", "drome"),
        "27": ("Eure", "eure"),
        "28": ("Eure-et-Loir", "eure-et-loir"),
        "29": ("Finistère", "finistere"),
        "30": ("Gard", "gard"),
        "31": ("Haute-Garonne", "haute-garonne"),
        "32": ("Gers", "gers"),
        "33": ("Gironde", "gironde"),
        "34": ("Hérault", "herault"),
        "35": ("Ille-et-Vilaine", "ille-et-vilaine"),
        "36": ("Indre", "indre"),
        "37": ("Indre-et-Loire", "indre-et-loire"),
        "38": ("Isère", "isere"),
        "39": ("Jura", "jura"),
        "40": ("Landes", "landes"),
        "41": ("Loir-et-Cher", "loir-et-cher"),
        "42": ("Loire", "loire"),
        "43": ("Haute-Loire", "haute-loire"),
        "44": ("Loire-Atlantique", "loire-atlantique"),
        "45": ("Loiret", "loiret"),
        "46": ("Lot", "lot"),
        "47": ("Lot-et-Garonne", "lot-et-garonne"),
        "48": ("Lozère", "lozere"),
        "49": ("Maine-et-Loire", "maine-et-loire"),
        "50": ("Manche", "manche"),
        "51": ("Marne", "marne"),
        "52": ("Haute-Marne", "haute-marne"),
        "53": ("Mayenne", "mayenne"),
        "54": ("Meurthe-et-Moselle", "meurthe-et-moselle"),
        "55": ("Meuse", "meuse"),
        "56": ("Morbihan", "morbihan"),
        "57": ("Moselle", "moselle"),
        "58": ("Nièvre", "nievre"),
        "59": ("Nord", "nord"),
        "60": ("Oise", "oise"),
        "61": ("Orne", "orne"),
        "62": ("Pas-de-Calais", "pas-de-calais"),
        "63": ("Puy-de-Dôme", "puy-de-dome"),
        "64": ("Pyrénées-Atlantiques", "pyrenees-atlantiques"),
        "65": ("Hautes-Pyrénées", "hautes-pyrenees"),
        "66": ("Pyrénées-Orientales", "pyrenees-orientales"),
        "67": ("Bas-Rhin", "bas-rhin"),
        "68": ("Haut-Rhin", "haut-rhin"),
        "69": ("Rhône", "rhone"),
        "70": ("Haute-Saône", "haute-saone"),
        "71": ("Saône-et-Loire", "saone-et-loire"),
        "72": ("Sarthe", "sarthe"),
        "73": ("Savoie", "savoie"),
        "74": ("Haute-Savoie", "haute-savoie"),
        "75": ("Paris", "paris"),
        "76": ("Seine-Maritime", "seine-maritime"),
        "77": ("Seine-et-Marne", "seine-et-marne"),
        "78": ("Yvelines", "yvelines"),
        "79": ("Deux-Sèvres", "deux-sevres"),
        "80": ("Somme", "somme"),
        "81": ("Tarn", "tarn"),
        "82": ("Tarn-et-Garonne", "tarn-et-garonne"),
        "83": ("Var", "var"),
        "84": ("Vaucluse", "vaucluse"),
        "85": ("Vendée", "vendee"),
        "86": ("Vienne", "vienne"),
        "87": ("Haute-Vienne", "haute-vienne"),
        "88": ("Vosges", "vosges"),
        "89": ("Yonne", "yonne"),
        "90": ("Territoire de Belfort", "territoire-de-belfort"),
        "91": ("Essonne", "essonne"),
        "92": ("Hauts-de-Seine", "hauts-de-seine"),
        "93": ("Seine-Saint-Denis", "seine-saint-denis"),
        "94": ("Val-de-Marne", "val-de-marne"),
        "95": ("Val-d'Oise", "val-d-oise"),
        "971": ("Guadeloupe", "guadeloupe"),
        "972": ("Martinique", "martinique"),
        "973": ("Guyane", "guyane"),
        "974": ("La Réunion", "la-reunion"),
        "976": ("Mayotte", "mayotte"),
    }
    return DEPARTMENTS.get(code_dept, (f"Département {code_dept}", f"departement-{code_dept}"))

def fetch_cities():
    """Fetch top 1000 cities from the French government API."""
    # The geo API lets us get communes sorted by population
    # We fetch all communes with population data, then take top 1000
    print("Fetching cities from geo.api.gouv.fr...")

    all_cities = []

    # Fetch by batches per department to avoid timeout
    # First, let's try the direct approach with all communes
    url = "https://geo.api.gouv.fr/communes?fields=nom,code,codesPostaux,codeDepartement,population&format=json&boost=population"

    req = urllib.request.Request(url)
    req.add_header('User-Agent', 'Mozilla/5.0')

    with urllib.request.urlopen(req, timeout=60) as response:
        data = json.loads(response.read().decode('utf-8'))

    print(f"Got {len(data)} communes total")

    # Filter out those without population, sort by population desc
    cities_with_pop = [c for c in data if c.get('population') and c['population'] > 0]
    cities_with_pop.sort(key=lambda x: x['population'], reverse=True)

    # Take top 1000
    top_1000 = cities_with_pop[:1000]
    print(f"Top 1000 cities, smallest population: {top_1000[-1]['nom']} ({top_1000[-1]['population']})")

    return top_1000

def generate_ts(cities_data):
    """Generate the TypeScript file content."""
    lines = []
    lines.append('import { City, Department } from "@/types";')
    lines.append('')
    lines.append('export const cities: City[] = [')

    seen_slugs = set()

    for i, city in enumerate(cities_data):
        dept_code = city['codeDepartement']
        dept_name, dept_slug = get_department_info(dept_code)
        postal_code = city['codesPostaux'][0] if city.get('codesPostaux') else f"{dept_code}000"

        city_slug = slugify(city['nom'])

        # Handle duplicate slugs
        if city_slug in seen_slugs:
            city_slug = f"{city_slug}-{dept_code}"
        seen_slugs.add(city_slug)

        # Escape single quotes in city names
        city_name = city['nom'].replace("'", "\\'")
        dept_name_escaped = dept_name.replace("'", "\\'")

        entry = f'''  {{
    id: "{i + 1}",
    name: "{city_name}",
    slug: "{city_slug}",
    postalCode: "{postal_code}",
    department: {{ name: "{dept_name_escaped}", number: "{dept_code}", slug: "{dept_slug}" }},
    population: {city['population']},
  }},'''
        lines.append(entry)

    lines.append('];')
    lines.append('')
    lines.append('// Helper function to get city by slug')
    lines.append('export function getCityBySlug(slug: string): City | undefined {')
    lines.append('  return cities.find((city) => city.slug === slug);')
    lines.append('}')
    lines.append('')
    lines.append('// Helper function to get cities by department')
    lines.append('export function getCitiesByDepartment(departmentSlug: string): City[] {')
    lines.append('  return cities.filter((city) => city.department.slug === departmentSlug);')
    lines.append('}')
    lines.append('')
    lines.append('// Helper function to get all unique departments')
    lines.append('export function getAllDepartments(): Department[] {')
    lines.append('  const departmentMap = new Map<string, Department>();')
    lines.append('')
    lines.append('  cities.forEach((city) => {')
    lines.append('    const deptSlug = city.department.slug;')
    lines.append('    if (!departmentMap.has(deptSlug)) {')
    lines.append('      departmentMap.set(deptSlug, {')
    lines.append('        name: city.department.name,')
    lines.append('        number: city.department.number,')
    lines.append('        slug: city.department.slug,')
    lines.append('        cities: [],')
    lines.append('      });')
    lines.append('    }')
    lines.append('    departmentMap.get(deptSlug)!.cities.push(city);')
    lines.append('  });')
    lines.append('')
    lines.append('  return Array.from(departmentMap.values()).sort((a, b) => a.name.localeCompare(b.name));')
    lines.append('}')
    lines.append('')
    lines.append('// Helper function to get proximity cities')
    lines.append('export function getProximityCities(citySlug: string): City[] {')
    lines.append('  const city = getCityBySlug(citySlug);')
    lines.append('  if (!city || !city.proximity) return [];')
    lines.append('')
    lines.append('  return city.proximity')
    lines.append('    .map((slug) => getCityBySlug(slug))')
    lines.append('    .filter((c): c is City => c !== undefined);')
    lines.append('}')
    lines.append('')

    return '\n'.join(lines)

if __name__ == '__main__':
    cities_data = fetch_cities()
    ts_content = generate_ts(cities_data)

    output_path = '/Users/leofortier/automatisation/detatouage-laser/data/cities.ts'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)

    print(f"\n✅ Generated {len(cities_data)} cities in {output_path}")

    # Also save the raw JSON for the scraper
    json_path = '/Users/leofortier/automatisation/detatouage-laser/scripts/top_1000_cities.json'
    cities_for_scraper = []
    seen_slugs = set()
    for city in cities_data:
        dept_code = city['codeDepartement']
        slug = slugify(city['nom'])
        if slug in seen_slugs:
            slug = f"{slug}-{dept_code}"
        seen_slugs.add(slug)
        postal = city['codesPostaux'][0] if city.get('codesPostaux') else f"{dept_code}000"
        cities_for_scraper.append({
            "name": city['nom'],
            "slug": slug,
            "postalCode": postal,
            "population": city['population']
        })

    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(cities_for_scraper, f, ensure_ascii=False, indent=2)

    print(f"✅ Saved city list for scraper: {json_path}")
