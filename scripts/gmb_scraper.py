#!/usr/bin/env python3
"""
Script pour scraper les données Google My Business (GMB) des centres de détatouage
IMPORTANT: Ce script nécessite une utilisation éthique et respectueuse des ToS de Google.

Installation des dépendances:
    pip install playwright
    playwright install chromium

Usage:
    python gmb_scraper.py --city "Paris" --query "détatouage laser"
"""

import json
import time
import argparse
from playwright.sync_api import sync_playwright

def scrape_gmb_businesses(city, query, max_results=3):
    """
    Scrape les entreprises depuis Google Maps

    Args:
        city: Nom de la ville
        query: Terme de recherche (ex: "détatouage laser")
        max_results: Nombre max de résultats (défaut: 3)

    Returns:
        Liste des entreprises avec leurs données
    """
    businesses = []

    with sync_playwright() as p:
        # Lancer le navigateur
        browser = p.chromium.launch(headless=False)  # headless=True pour invisible
        page = browser.new_page()

        # Construire la recherche Google Maps
        search_query = f"{query} {city}"
        google_maps_url = f"https://www.google.com/maps/search/{search_query}"

        print(f"🔍 Recherche: {search_query}")
        print(f"🌐 URL: {google_maps_url}\n")

        # Aller sur Google Maps
        page.goto(google_maps_url)
        time.sleep(5)  # Attendre le chargement

        # Accepter les cookies si nécessaire
        try:
            accept_button = page.locator('button:has-text("Tout accepter")').first
            if accept_button.is_visible():
                accept_button.click()
                time.sleep(2)
        except:
            pass

        # Récupérer les résultats
        results = page.locator('div[role="feed"] > div').all()
        print(f"✅ {len(results)} résultats trouvés\n")

        for i, result in enumerate(results[:max_results]):
            print(f"📍 Entreprise {i+1}/{max_results}")

            try:
                # Cliquer sur le résultat pour ouvrir les détails
                result.click()
                time.sleep(3)

                # Extraire les données
                business_data = {
                    "id": f"{city.lower()}-{i+1}",
                    "citySlug": city.lower().replace(" ", "-"),
                    "city": city,
                }

                # Nom
                try:
                    name = page.locator('h1.fontHeadlineLarge').first.inner_text()
                    business_data["name"] = name
                    print(f"   Nom: {name}")
                except:
                    business_data["name"] = "Nom non disponible"

                # Note et nombre d'avis
                try:
                    rating_element = page.locator('div.fontBodyMedium > span[role="img"]').first
                    rating_text = rating_element.get_attribute('aria-label')
                    # Ex: "4,5 étoiles 127 avis"
                    parts = rating_text.split()
                    business_data["rating"] = float(parts[0].replace(',', '.'))
                    business_data["reviewCount"] = int(parts[2])
                    print(f"   Note: {business_data['rating']}/5 ({business_data['reviewCount']} avis)")
                except:
                    business_data["rating"] = 0.0
                    business_data["reviewCount"] = 0

                # Adresse
                try:
                    address_button = page.locator('button[data-item-id="address"]').first
                    address = address_button.get_attribute('aria-label').replace('Adresse: ', '')
                    business_data["address"] = address
                    print(f"   Adresse: {address}")
                except:
                    business_data["address"] = "Adresse non disponible"

                # Téléphone
                try:
                    phone_button = page.locator('button[data-item-id*="phone"]').first
                    phone = phone_button.get_attribute('aria-label').replace('Téléphone: ', '')
                    business_data["phone"] = phone
                    print(f"   Téléphone: {phone}")
                except:
                    business_data["phone"] = None

                # Site web
                try:
                    website_button = page.locator('a[data-item-id="authority"]').first
                    website = website_button.get_attribute('href')
                    business_data["website"] = website
                    print(f"   Site web: {website}")
                except:
                    business_data["website"] = None

                # URL Google Maps
                business_data["googleMapsUrl"] = page.url

                # Services (approximation depuis les avis)
                business_data["services"] = [
                    "Détatouage laser",
                    "Consultation gratuite",
                    "Devis personnalisé"
                ]

                # Description (à compléter manuellement en lisant les avis)
                business_data["description"] = "TODO: Lire les avis et créer un résumé condensé de 50-150 mots"

                # Code postal (à extraire de l'adresse)
                try:
                    # Essayer d'extraire le code postal de l'adresse
                    import re
                    postal_match = re.search(r'\b\d{5}\b', business_data["address"])
                    if postal_match:
                        business_data["postalCode"] = postal_match.group(0)
                    else:
                        business_data["postalCode"] = "00000"
                except:
                    business_data["postalCode"] = "00000"

                businesses.append(business_data)
                print("   ✅ Données extraites\n")

            except Exception as e:
                print(f"   ❌ Erreur: {e}\n")
                continue

        browser.close()

    return businesses

def export_to_json(businesses, output_file):
    """Exporter les données en JSON"""
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(businesses, f, ensure_ascii=False, indent=2)
    print(f"💾 Données exportées vers: {output_file}")

def export_to_typescript(businesses, city_slug):
    """Générer le code TypeScript à copier-coller"""
    print("\n" + "="*80)
    print("📋 CODE À COPIER DANS data/businesses.ts :")
    print("="*80 + "\n")

    for business in businesses:
        print(f"""  {{
    id: "{business['id']}",
    name: "{business['name']}",
    address: "{business['address']}",
    city: "{business['city']}",
    citySlug: "{business['citySlug']}",
    postalCode: "{business['postalCode']}",
    phone: "{business.get('phone', '')}",
    website: "{business.get('website', '')}",
    rating: {business['rating']},
    reviewCount: {business['reviewCount']},
    services: [
      "Détatouage laser Q-Switched",
      "Consultation gratuite",
      "Devis personnalisé",
    ],
    description: "TODO: Lire les avis sur GMB et créer un résumé de 50-150 mots",
    googleMapsUrl: "{business['googleMapsUrl']}",
  }},\n""")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Scraper GMB pour centres de détatouage')
    parser.add_argument('--city', required=True, help='Nom de la ville (ex: Paris)')
    parser.add_argument('--query', default='détatouage laser', help='Terme de recherche')
    parser.add_argument('--max', type=int, default=3, help='Nombre max de résultats')
    parser.add_argument('--output', default='gmb_results.json', help='Fichier de sortie JSON')

    args = parser.parse_args()

    print("🚀 GMB Scraper - Centres de détatouage")
    print("="*80 + "\n")

    # Scraper
    businesses = scrape_gmb_businesses(args.city, args.query, args.max)

    # Exporter
    if businesses:
        export_to_json(businesses, args.output)
        export_to_typescript(businesses, args.city.lower().replace(" ", "-"))
        print("\n✅ Terminé!")
    else:
        print("\n❌ Aucune donnée récupérée")
