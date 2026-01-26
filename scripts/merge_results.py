#!/usr/bin/env python3
"""
Script pour fusionner tous les résultats (GMB + Places API) en un seul fichier businesses.ts
"""

import json
import glob
from datetime import datetime

def load_json_file(filename):
    """Charger un fichier JSON"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return json.load(f)
    except:
        return []

def merge_all_results():
    """Fusionner tous les JSON"""
    all_businesses = []
    seen_ids = set()

    # 1. Charger le fichier principal Places API
    places_data = load_json_file("places_api_results.json")
    if places_data:
        for business in places_data:
            business_id = business.get('id')
            if business_id and business_id not in seen_ids:
                all_businesses.append(business)
                seen_ids.add(business_id)
        print(f"✓ places_api_results.json: {len(places_data)} entreprises")

    # 2. Charger les autres fichiers GMB (éviter doublons)
    gmb_files = glob.glob("*_results.json")
    gmb_files = [f for f in gmb_files if f not in ["places_api_results.json", "places_api_new_results.json"]]
    print(f"\n📁 Fichiers GMB additionnels: {len(gmb_files)}")

    for file in gmb_files:
        data = load_json_file(file)
        if isinstance(data, list):
            added = 0
            for business in data:
                business_id = business.get('id')
                if business_id and business_id not in seen_ids:
                    all_businesses.append(business)
                    seen_ids.add(business_id)
                    added += 1
            if added > 0:
                print(f"   ✓ {file}: {added} entreprises ajoutées")
        else:
            print(f"   ⚠ {file}: format invalide")

    # 3. Charger l'existant (exemples manuels)
    existing_data = load_json_file("businesses_progress.json")
    if existing_data and len(existing_data) > 0:
        added = 0
        for business in existing_data:
            business_id = business.get('id')
            if business_id and business_id not in seen_ids:
                all_businesses.append(business)
                seen_ids.add(business_id)
                added += 1
        if added > 0:
            print(f"   ✓ businesses_progress.json: {added} entreprises ajoutées")

    print(f"\n📊 Total (sans doublons): {len(all_businesses)} entreprises")
    return all_businesses

def generate_typescript_file(businesses, output="../data/businesses.ts"):
    """Générer le fichier TypeScript"""

    ts_content = f'''// Données des entreprises de détatouage par ville
// Généré automatiquement le {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
// Total: {len(businesses)} entreprises

export interface Business {{
  id: string;
  name: string;
  address: string;
  city: string;
  citySlug: string;
  postalCode: string;
  phone?: string;
  website?: string;
  rating: number;
  reviewCount: number;
  services: string[];
  description: string;
  googleMapsUrl?: string;
  openingHours?: {{
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  }};
}}

export const businesses: Business[] = [
'''

    for b in businesses:
        phone = f'"{b.get("phone")}"' if b.get("phone") else "undefined"
        website = f'"{b.get("website")}"' if b.get("website") else "undefined"
        gmb_url = f'"{b.get("googleMapsUrl")}"' if b.get("googleMapsUrl") else "undefined"

        # Échapper les guillemets dans les strings
        name = b.get('name', '').replace('"', '\\"')
        address = b.get('address', '').replace('"', '\\"')
        description = b.get('description', '').replace('"', '\\"')

        ts_content += f'''  {{
    id: "{b.get('id', '')}",
    name: "{name}",
    address: "{address}",
    city: "{b.get('city', '')}",
    citySlug: "{b.get('citySlug', '')}",
    postalCode: "{b.get('postalCode', '')}",
    phone: {phone},
    website: {website},
    rating: {b.get('rating', 4.5)},
    reviewCount: {b.get('reviewCount', 0)},
    services: {json.dumps(b.get('services', []), ensure_ascii=False)},
    description: "{description}",
    googleMapsUrl: {gmb_url},
  }},
'''

    ts_content += '''];

// Fonction pour récupérer les entreprises d'une ville
export function getBusinessesByCity(citySlug: string): Business[] {
  return businesses
    .filter((business) => business.citySlug === citySlug)
    .slice(0, 3);
}

// Fonction pour vérifier si une ville a des entreprises
export function hasCityBusinesses(citySlug: string): boolean {
  return businesses.some((business) => business.citySlug === citySlug);
}

// Stats
export function getStats() {
  const cities = new Set(businesses.map(b => b.citySlug));
  return {
    totalBusinesses: businesses.length,
    totalCities: cities.size,
    avgBusinessesPerCity: (businesses.length / cities.size).toFixed(1),
  };
}
'''

    with open(output, 'w', encoding='utf-8') as f:
        f.write(ts_content)

    print(f"\n✅ Fichier généré: {output}")
    print(f"   {len(businesses)} entreprises")

    # Stats par ville
    cities = {}
    for b in businesses:
        city = b.get('citySlug', 'unknown')
        cities[city] = cities.get(city, 0) + 1

    print(f"\n📊 Répartition:")
    print(f"   Villes couvertes: {len(cities)}")
    print(f"   Entreprises/ville (moy): {len(businesses)/len(cities):.1f}")

def main():
    print("🔀 Fusion des résultats GMB + Places API")
    print("="*60 + "\n")

    # Fusionner
    all_businesses = merge_all_results()

    if not all_businesses:
        print("\n❌ Aucune donnée trouvée!")
        return

    # Générer TypeScript
    generate_typescript_file(all_businesses)

    print("\n" + "="*60)
    print("✅ TERMINÉ !")
    print("="*60)
    print("\nProchaines étapes:")
    print("1. Vérifier data/businesses.ts")
    print("2. npm run build")
    print("3. git add . && git commit -m 'Add 300 businesses'")
    print("4. git push\n")

if __name__ == "__main__":
    main()
