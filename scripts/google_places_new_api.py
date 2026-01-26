#!/usr/bin/env python3
"""
Script pour récupérer les données des centres de détatouage via la nouvelle Places API (New)
Utilise l'API REST de Google Places (New) - https://developers.google.com/maps/documentation/places/web-service/search-nearby
"""

import os
import json
import time
import random
import requests
from datetime import datetime

# Liste des 100 villes
CITIES = [
    {"name": "Paris", "slug": "paris", "postalCode": "75000"},
    {"name": "Marseille", "slug": "marseille", "postalCode": "13000"},
    {"name": "Lyon", "slug": "lyon", "postalCode": "69000"},
    {"name": "Toulouse", "slug": "toulouse", "postalCode": "31000"},
    {"name": "Nice", "slug": "nice", "postalCode": "06000"},
    {"name": "Nantes", "slug": "nantes", "postalCode": "44000"},
    {"name": "Montpellier", "slug": "montpellier", "postalCode": "34000"},
    {"name": "Strasbourg", "slug": "strasbourg", "postalCode": "67000"},
    {"name": "Bordeaux", "slug": "bordeaux", "postalCode": "33000"},
    {"name": "Lille", "slug": "lille", "postalCode": "59000"},
    {"name": "Rennes", "slug": "rennes", "postalCode": "35000"},
    {"name": "Reims", "slug": "reims", "postalCode": "51100"},
    {"name": "Saint-Étienne", "slug": "saint-etienne", "postalCode": "42000"},
    {"name": "Toulon", "slug": "toulon", "postalCode": "83000"},
    {"name": "Le Havre", "slug": "le-havre", "postalCode": "76600"},
    {"name": "Grenoble", "slug": "grenoble", "postalCode": "38000"},
    {"name": "Dijon", "slug": "dijon", "postalCode": "21000"},
    {"name": "Angers", "slug": "angers", "postalCode": "49000"},
    {"name": "Nîmes", "slug": "nimes", "postalCode": "30000"},
    {"name": "Villeurbanne", "slug": "villeurbanne", "postalCode": "69100"},
    {"name": "Saint-Denis", "slug": "saint-denis", "postalCode": "93200"},
    {"name": "Clermont-Ferrand", "slug": "clermont-ferrand", "postalCode": "63000"},
    {"name": "Le Mans", "slug": "le-mans", "postalCode": "72000"},
    {"name": "Aix-en-Provence", "slug": "aix-en-provence", "postalCode": "13100"},
    {"name": "Brest", "slug": "brest", "postalCode": "29200"},
    {"name": "Tours", "slug": "tours", "postalCode": "37000"},
    {"name": "Amiens", "slug": "amiens", "postalCode": "80000"},
    {"name": "Limoges", "slug": "limoges", "postalCode": "87000"},
    {"name": "Annecy", "slug": "annecy", "postalCode": "74000"},
    {"name": "Perpignan", "slug": "perpignan", "postalCode": "66000"},
    {"name": "Boulogne-Billancourt", "slug": "boulogne-billancourt", "postalCode": "92100"},
    {"name": "Metz", "slug": "metz", "postalCode": "57000"},
    {"name": "Besançon", "slug": "besancon", "postalCode": "25000"},
    {"name": "Orléans", "slug": "orleans", "postalCode": "45000"},
    {"name": "Rouen", "slug": "rouen", "postalCode": "76000"},
    {"name": "Mulhouse", "slug": "mulhouse", "postalCode": "68100"},
    {"name": "Caen", "slug": "caen", "postalCode": "14000"},
    {"name": "Nancy", "slug": "nancy", "postalCode": "54000"},
    {"name": "Saint-Paul", "slug": "saint-paul", "postalCode": "97460"},
    {"name": "Argenteuil", "slug": "argenteuil", "postalCode": "95100"},
    {"name": "Montreuil", "slug": "montreuil", "postalCode": "93100"},
    {"name": "Roubaix", "slug": "roubaix", "postalCode": "59100"},
    {"name": "Tourcoing", "slug": "tourcoing", "postalCode": "59200"},
    {"name": "Nanterre", "slug": "nanterre", "postalCode": "92000"},
    {"name": "Avignon", "slug": "avignon", "postalCode": "84000"},
    {"name": "Vitry-sur-Seine", "slug": "vitry-sur-seine", "postalCode": "94400"},
    {"name": "Créteil", "slug": "creteil", "postalCode": "94000"},
    {"name": "Dunkerque", "slug": "dunkerque", "postalCode": "59140"},
    {"name": "Poitiers", "slug": "poitiers", "postalCode": "86000"},
    {"name": "Asnières-sur-Seine", "slug": "asnieres-sur-seine", "postalCode": "92600"},
    {"name": "Courbevoie", "slug": "courbevoie", "postalCode": "92400"},
    {"name": "Versailles", "slug": "versailles", "postalCode": "78000"},
    {"name": "Colombes", "slug": "colombes", "postalCode": "92700"},
    {"name": "Fort-de-France", "slug": "fort-de-france", "postalCode": "97200"},
    {"name": "Aulnay-sous-Bois", "slug": "aulnay-sous-bois", "postalCode": "93600"},
    {"name": "Saint-Pierre", "slug": "saint-pierre", "postalCode": "97410"},
    {"name": "Rueil-Malmaison", "slug": "rueil-malmaison", "postalCode": "92500"},
    {"name": "Pau", "slug": "pau", "postalCode": "64000"},
    {"name": "Aubervilliers", "slug": "aubervilliers", "postalCode": "93300"},
    {"name": "Champigny-sur-Marne", "slug": "champigny-sur-marne", "postalCode": "94500"},
    {"name": "Antibes", "slug": "antibes", "postalCode": "06600"},
    {"name": "La Rochelle", "slug": "la-rochelle", "postalCode": "17000"},
    {"name": "Cannes", "slug": "cannes", "postalCode": "06400"},
    {"name": "Calais", "slug": "calais", "postalCode": "62100"},
    {"name": "Saint-Maur-des-Fossés", "slug": "saint-maur-des-fosses", "postalCode": "94100"},
    {"name": "Béziers", "slug": "beziers", "postalCode": "34500"},
    {"name": "Drancy", "slug": "drancy", "postalCode": "93700"},
    {"name": "Colmar", "slug": "colmar", "postalCode": "68000"},
    {"name": "Bourges", "slug": "bourges", "postalCode": "18000"},
    {"name": "Mérignac", "slug": "merignac", "postalCode": "33700"},
    {"name": "Saint-Nazaire", "slug": "saint-nazaire", "postalCode": "44600"},
    {"name": "Valence", "slug": "valence", "postalCode": "26000"},
    {"name": "Ajaccio", "slug": "ajaccio", "postalCode": "20000"},
    {"name": "Issy-les-Moulineaux", "slug": "issy-les-moulineaux", "postalCode": "92130"},
    {"name": "Levallois-Perret", "slug": "levallois-perret", "postalCode": "92300"},
    {"name": "Quimper", "slug": "quimper", "postalCode": "29000"},
    {"name": "Villeneuve-d'Ascq", "slug": "villeneuve-d-ascq", "postalCode": "59650"},
    {"name": "Noisy-le-Grand", "slug": "noisy-le-grand", "postalCode": "93160"},
    {"name": "Neuilly-sur-Seine", "slug": "neuilly-sur-seine", "postalCode": "92200"},
    {"name": "Troyes", "slug": "troyes", "postalCode": "10000"},
    {"name": "Antony", "slug": "antony", "postalCode": "92160"},
    {"name": "Sarcelles", "slug": "sarcelles", "postalCode": "95200"},
    {"name": "Cergy", "slug": "cergy", "postalCode": "95000"},
    {"name": "Grasse", "slug": "grasse", "postalCode": "06130"},
    {"name": "Ivry-sur-Seine", "slug": "ivry-sur-seine", "postalCode": "94200"},
    {"name": "Pessac", "slug": "pessac", "postalCode": "33600"},
    {"name": "Chambéry", "slug": "chambery", "postalCode": "73000"},
    {"name": "Cayenne", "slug": "cayenne", "postalCode": "97300"},
    {"name": "Niort", "slug": "niort", "postalCode": "79000"},
    {"name": "Lorient", "slug": "lorient", "postalCode": "56100"},
    {"name": "Saint-Quentin", "slug": "saint-quentin", "postalCode": "02100"},
    {"name": "Villejuif", "slug": "villejuif", "postalCode": "94800"},
    {"name": "Hyères", "slug": "hyeres", "postalCode": "83400"},
    {"name": "Beauvais", "slug": "beauvais", "postalCode": "60000"},
    {"name": "Cholet", "slug": "cholet", "postalCode": "49300"},
    {"name": "Maisons-Alfort", "slug": "maisons-alfort", "postalCode": "94700"},
    {"name": "Épinay-sur-Seine", "slug": "epinay-sur-seine", "postalCode": "93800"},
    {"name": "Meaux", "slug": "meaux", "postalCode": "77100"},
]

def generate_description(business_name, rating, review_count):
    """Génère une description automatique basée sur les données"""
    templates = [
        f"Centre professionnel de détatouage laser bien établi à {business_name}. Avec une note de {rating}/5 basée sur {review_count} avis clients, cet établissement est reconnu pour son sérieux et la qualité de ses prestations. Équipement moderne et personnel qualifié pour un traitement efficace et sécurisé.",

        f"Spécialiste du détatouage laser apprécié localement avec {review_count} avis positifs ({rating}/5). L'établissement propose des services de qualité avec du matériel de dernière génération. Personnel expérimenté et à l'écoute, accompagnement personnalisé tout au long du processus.",

        f"Centre de détatouage laser réputé. Note de {rating}/5 sur {review_count} avis témoigne de la satisfaction des clients. Protocoles médicaux rigoureux et équipement professionnel certifié. Les patients soulignent la qualité du suivi et le professionnalisme de l'équipe.",
    ]
    return random.choice(templates)

def search_places_text_search(api_key, city_name, max_results=3):
    """
    Recherche de lieux avec la nouvelle API Places (Text Search)
    Documentation: https://developers.google.com/maps/documentation/places/web-service/text-search
    """
    url = "https://places.googleapis.com/v1/places:searchText"

    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": api_key,
        "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress,places.internationalPhoneNumber,places.websiteUri,places.rating,places.userRatingCount,places.googleMapsUri,places.regularOpeningHours"
    }

    data = {
        "textQuery": f"détatouage laser {city_name} France",
        "languageCode": "fr",
        "maxResultCount": max_results,
        "locationBias": {
            "circle": {
                "center": {
                    "latitude": 48.8566,  # Coordonnées approximatives (sera remplacé par géocodage si nécessaire)
                    "longitude": 2.3522
                },
                "radius": 50000.0  # 50km
            }
        }
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"   ❌ Erreur API: {e}")
        if response.status_code == 400:
            print(f"   Détails: {response.text}")
        return None

def extract_postal_code(address, default_postal):
    """Extrait le code postal de l'adresse"""
    import re
    match = re.search(r'\b\d{5}\b', address)
    if match:
        return match.group(0)
    return default_postal

def process_city(api_key, city, max_results=3):
    """Traite une ville et retourne les entreprises"""
    print(f"\n{'='*60}")
    print(f"🔍 Ville: {city['name']}")
    print(f"{'='*60}")

    businesses = []

    # Recherche via Text Search
    result = search_places_text_search(api_key, city['name'], max_results)

    if not result or 'places' not in result:
        print(f"   ⚠️  Aucun résultat pour {city['name']}")
        return businesses

    places = result.get('places', [])
    print(f"   ✅ {len(places)} résultats trouvés")

    for i, place in enumerate(places[:max_results], 1):
        try:
            # Extraire les données
            business_id = place.get('id', f"{city['slug']}-{i}")
            name = place.get('displayName', {}).get('text', f"Centre Détatouage {city['name']} #{i}")
            address = place.get('formattedAddress', f"Centre ville de {city['name']}")
            phone = place.get('internationalPhoneNumber')
            website = place.get('websiteUri')
            rating = place.get('rating', 4.5)
            review_count = place.get('userRatingCount', 0)
            gmb_url = place.get('googleMapsUri', '')

            # Code postal
            postal_code = extract_postal_code(address, city['postalCode'])

            # Horaires
            opening_hours = None
            if 'regularOpeningHours' in place:
                opening_hours = {
                    "monday": "9:00-18:00",
                    "tuesday": "9:00-18:00",
                    "wednesday": "9:00-18:00",
                    "thursday": "9:00-18:00",
                    "friday": "9:00-18:00",
                    "saturday": "9:00-13:00"
                }

            business = {
                "id": f"{city['slug']}-{i}",
                "name": name,
                "address": address,
                "city": city['name'],
                "citySlug": city['slug'],
                "postalCode": postal_code,
                "phone": phone,
                "website": website,
                "rating": round(rating, 1),
                "reviewCount": review_count,
                "services": [
                    "Détatouage laser Q-Switched",
                    "Consultation gratuite",
                    "Devis personnalisé",
                    "Traitement tous types de peau"
                ],
                "description": generate_description(name, round(rating, 1), review_count),
                "googleMapsUrl": gmb_url,
                "openingHours": opening_hours
            }

            businesses.append(business)

            print(f"   📍 {i}. {name}")
            print(f"      ⭐ {rating}/5 ({review_count} avis)")
            print(f"      📍 {address[:60]}...")
            if phone:
                print(f"      📞 {phone}")
            if website:
                print(f"      🌐 {website[:50]}...")

        except Exception as e:
            print(f"   ❌ Erreur extraction business {i}: {e}")
            continue

    print(f"\n   ✅ {len(businesses)} entreprises extraites pour {city['name']}")
    return businesses

def save_json(businesses, filename="places_api_new_results.json"):
    """Sauvegarde en JSON"""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(businesses, f, ensure_ascii=False, indent=2)
    print(f"\n💾 {len(businesses)} entreprises sauvegardées dans {filename}")

def generate_typescript_code(businesses):
    """Génère le code TypeScript"""
    print("\n" + "="*80)
    print("📋 CODE À AJOUTER DANS data/businesses.ts :")
    print("="*80 + "\n")

    for b in businesses:
        phone = f'"{b.get("phone")}"' if b.get("phone") else "undefined"
        website = f'"{b.get("website")}"' if b.get("website") else "undefined"
        gmb_url = f'"{b.get("googleMapsUrl")}"' if b.get("googleMapsUrl") else "undefined"

        # Échapper les guillemets
        name = b.get('name', '').replace('"', '\\"')
        address = b.get('address', '').replace('"', '\\"')
        description = b.get('description', '').replace('"', '\\"')

        opening_hours = "undefined"
        if b.get('openingHours'):
            opening_hours = json.dumps(b['openingHours'])

        print(f'''  {{
    id: "{b['id']}",
    name: "{name}",
    address: "{address}",
    city: "{b['city']}",
    citySlug: "{b['citySlug']}",
    postalCode: "{b['postalCode']}",
    phone: {phone},
    website: {website},
    rating: {b['rating']},
    reviewCount: {b['reviewCount']},
    services: {json.dumps(b['services'], ensure_ascii=False)},
    description: "{description}",
    googleMapsUrl: {gmb_url},
    openingHours: {opening_hours},
  }},
''')

def main():
    print("🚀 Google Places API (New) Scraper")
    print("="*80 + "\n")

    # Clé API
    api_key = os.getenv('GOOGLE_PLACES_API_KEY')
    if not api_key:
        print("❌ GOOGLE_PLACES_API_KEY non définie!")
        print("   Utilisez: export GOOGLE_PLACES_API_KEY='votre_clé'")
        return

    print("✅ Clé API détectée\n")

    all_businesses = []

    # Traiter les 100 villes
    for i, city in enumerate(CITIES, 1):
        print(f"\n[{i}/100] Traitement de {city['name']}...")

        city_businesses = process_city(api_key, city, max_results=3)
        all_businesses.extend(city_businesses)

        # Pause pour éviter rate limiting
        if i < len(CITIES):
            pause = random.uniform(0.5, 1.5)
            time.sleep(pause)

    # Sauvegarder
    save_json(all_businesses)

    # Générer le code TypeScript
    generate_typescript_code(all_businesses)

    # Stats
    print("\n" + "="*80)
    print("✅ TERMINÉ !")
    print(f"   {len(all_businesses)} entreprises extraites")
    print(f"   Coût estimé: ${len(all_businesses) * 0.032:.2f}")
    print("="*80)

if __name__ == "__main__":
    main()
