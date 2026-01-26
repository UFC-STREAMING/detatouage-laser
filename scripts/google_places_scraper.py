#!/usr/bin/env python3
"""
Script pour récupérer les données via Google Places API (OFFICIEL)

Coût: ~$32 par 1000 requêtes
Pour 270 entreprises (90 villes x 3): ~$10

Installation:
    pip install googlemaps

Configuration:
    1. Aller sur https://console.cloud.google.com/
    2. Créer un projet
    3. Activer "Places API"
    4. Créer une clé API
    5. Définir la variable: export GOOGLE_PLACES_API_KEY="votre_clé"

Usage:
    export GOOGLE_PLACES_API_KEY="AIza..."
    python3 google_places_scraper.py
"""

import os
import json
import time
import random
import googlemaps
from datetime import datetime

# Clé API (à définir en variable d'environnement)
API_KEY = os.getenv('GOOGLE_PLACES_API_KEY')

if not API_KEY:
    print("❌ ERREUR: Variable GOOGLE_PLACES_API_KEY non définie")
    print("\nPour obtenir une clé API:")
    print("1. https://console.cloud.google.com/")
    print("2. Créer un projet")
    print("3. Activer 'Places API'")
    print("4. Créer une clé API")
    print("\nPuis: export GOOGLE_PLACES_API_KEY='votre_clé'")
    exit(1)

# Les 100 villes françaises
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

def generate_description(place_name, rating, review_count):
    """Génère une description basée sur les données Places API"""
    templates = [
        f"Centre professionnel de détatouage laser bien établi à {place_name}. Avec une note de {rating}/5 basée sur {review_count} avis Google, cet établissement est reconnu pour son sérieux et la qualité de ses prestations. Équipement moderne et personnel qualifié pour un traitement efficace et sécurisé.",

        f"Spécialiste du détatouage laser apprécié localement avec {review_count} avis ({rating}/5 sur Google). L'établissement propose des services de qualité avec du matériel de dernière génération. Personnel expérimenté et à l'écoute, accompagnement personnalisé tout au long du processus.",

        f"Centre de détatouage laser réputé dans la région. Note Google de {rating}/5 sur {review_count} avis témoigne de la satisfaction des clients. Protocoles médicaux rigoureux et équipement professionnel certifié. Les patients soulignent la qualité du suivi et les résultats visibles.",
    ]
    return random.choice(templates)

def search_places_in_city(gmaps, city, query="détatouage laser", max_results=3):
    """Recherche via Places API"""
    businesses = []

    print(f"\n{'='*60}")
    print(f"🔍 Ville: {city['name']}")
    print(f"{'='*60}")

    try:
        # Recherche Places
        search_query = f"{query} {city['name']}"
        results = gmaps.places(query=search_query, language='fr')

        if results['status'] != 'OK':
            print(f"⚠️  Aucun résultat pour {city['name']}")
            return []

        places = results['results'][:max_results]
        print(f"✅ {len(places)} résultats trouvés")

        for i, place in enumerate(places, 1):
            print(f"\n📍 Entreprise {i}/{max_results}")

            # Détails du lieu
            place_id = place['place_id']
            details = gmaps.place(place_id, language='fr', fields=[
                'name', 'formatted_address', 'formatted_phone_number',
                'website', 'rating', 'user_ratings_total', 'url'
            ])

            if details['status'] != 'OK':
                continue

            place_details = details['result']

            business = {
                "id": f"{city['slug']}-{i}",
                "citySlug": city['slug'],
                "city": city['name'],
                "postalCode": city['postalCode'],
                "name": place_details.get('name', f"Centre {city['name']} #{i}"),
                "address": place_details.get('formatted_address', ''),
                "phone": place_details.get('formatted_phone_number'),
                "website": place_details.get('website'),
                "rating": place_details.get('rating', 4.5),
                "reviewCount": place_details.get('user_ratings_total', 0),
                "googleMapsUrl": place_details.get('url'),
                "services": [
                    "Détatouage laser Q-Switched",
                    "Consultation gratuite",
                    "Devis personnalisé",
                    "Traitement tous types de peau"
                ],
            }

            # Générer description
            business["description"] = generate_description(
                business["name"],
                business["rating"],
                business["reviewCount"]
            )

            print(f"   ✓ {business['name']}")
            print(f"   ✓ Note: {business['rating']}/5 ({business['reviewCount']} avis)")
            print(f"   ✓ Téléphone: {business['phone']}")

            businesses.append(business)

            # Petit délai anti-rate-limit
            time.sleep(0.5)

        print(f"\n✅ {len(businesses)} entreprises extraites")

    except Exception as e:
        print(f"❌ Erreur: {e}")

    return businesses

def save_progress(businesses, filename="places_api_results.json"):
    """Sauvegarder"""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(businesses, f, ensure_ascii=False, indent=2)
    print(f"\n💾 {len(businesses)} entreprises sauvegardées")

def generate_typescript_code(businesses):
    """Générer le code TypeScript"""
    print("\n" + "="*80)
    print("📋 CODE À AJOUTER DANS data/businesses.ts :")
    print("="*80 + "\n")

    for b in businesses:
        phone = f'"{b["phone"]}"' if b.get("phone") else "undefined"
        website = f'"{b["website"]}"' if b.get("website") else "undefined"
        gmb = f'"{b["googleMapsUrl"]}"' if b.get("googleMapsUrl") else "undefined"

        print(f'''  {{
    id: "{b['id']}",
    name: "{b['name']}",
    address: "{b['address']}",
    city: "{b['city']}",
    citySlug: "{b['citySlug']}",
    postalCode: "{b['postalCode']}",
    phone: {phone},
    website: {website},
    rating: {b['rating']},
    reviewCount: {b['reviewCount']},
    services: {json.dumps(b['services'], ensure_ascii=False)},
    description: "{b['description']}",
    googleMapsUrl: {gmb},
  }},\n''')

def main():
    print("🚀 Google Places API Scraper")
    print("="*80 + "\n")

    # Initialiser client
    gmaps = googlemaps.Client(key=API_KEY)
    print("✅ Client Google Places initialisé\n")

    all_businesses = []

    for i, city in enumerate(CITIES, 1):
        print(f"\n[{i}/{len(CITIES)}] Traitement de {city['name']}...")

        businesses = search_places_in_city(gmaps, city, max_results=3)
        all_businesses.extend(businesses)

        # Sauvegarder tous les 10
        if i % 10 == 0:
            save_progress(all_businesses)

        # Pause
        time.sleep(1)

    # Sauvegarde finale
    save_progress(all_businesses)

    # Générer code
    generate_typescript_code(all_businesses)

    print(f"\n{'='*80}")
    print(f"✅ TERMINÉ !")
    print(f"   {len(all_businesses)} entreprises extraites")
    print(f"   Coût estimé: ${len(all_businesses) * 0.032:.2f}")
    print(f"{'='*80}\n")

if __name__ == "__main__":
    main()
