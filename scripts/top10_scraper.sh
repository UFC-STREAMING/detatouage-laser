#!/bin/bash
# Scraper les 10 villes principales

export PATH="$PATH:/Users/leofortier/Library/Python/3.9/bin"

cities=("Paris" "Marseille" "Lyon" "Toulouse" "Nice" "Nantes" "Montpellier" "Strasbourg" "Bordeaux" "Lille")

echo "🚀 Scraping des 10 villes principales"
echo "======================================"

for city in "${cities[@]}"; do
  echo ""
  echo "🏙️  Traitement de $city..."
  python3 gmb_scraper.py --city "$city" --max 3 --output "${city}_results.json"
  
  # Pause de 20-30 secondes
  sleep $((20 + RANDOM % 10))
done

echo ""
echo "✅ Terminé !"
echo "Les résultats sont dans *_results.json"
