# 📖 Guide d'utilisation du GMB Scraper

## 🎯 Objectif

Ce script permet de récupérer automatiquement les données des 3 meilleurs centres de détatouage par ville depuis Google My Business :
- Nom, adresse, téléphone
- Note Google et nombre d'avis
- Site web
- Lien Google Maps

## ⚠️ AVERTISSEMENT LÉGAL

**Ce script est fourni à titre éducatif uniquement.**

Le scraping de Google Maps peut violer les Terms of Service de Google. Utilisez ce script :
- ✅ Pour usage personnel/interne uniquement
- ✅ Avec modération (pauses entre requêtes)
- ✅ En respectant les robots.txt
- ❌ PAS pour revente de données
- ❌ PAS pour scraping massif

**Alternative recommandée :** Utilisez l'API Google Places (officielle, payante mais légale).

---

## 📦 Installation

### 1. Installer Python (si pas déjà fait)

```bash
# Vérifier si Python est installé
python3 --version

# Si non installé, télécharger depuis python.org
```

### 2. Installer les dépendances

```bash
cd /Users/leofortier/Downloads/Détatouage/detatouage/scripts

# Installer Playwright
pip3 install playwright

# Installer le navigateur Chromium
playwright install chromium
```

---

## 🚀 Utilisation

### Scraper une ville

```bash
# Exemple : Paris
python3 gmb_scraper.py --city "Paris" --query "détatouage laser" --max 3

# Exemple : Lyon
python3 gmb_scraper.py --city "Lyon" --query "détatouage laser" --max 3

# Exemple : Marseille
python3 gmb_scraper.py --city "Marseille" --query "détatouage laser" --max 3
```

### Ce que fait le script

1. **Ouvre Google Maps** dans Chrome
2. **Recherche** "détatouage laser [ville]"
3. **Extrait les 3 premiers résultats** :
   - Nom
   - Adresse
   - Téléphone
   - Note (ex: 4.5/5)
   - Nombre d'avis (ex: 127)
   - Site web
   - Lien Google Maps

4. **Génère le code TypeScript** à copier dans `data/businesses.ts`

### Exemple de sortie

```typescript
  {
    id: "paris-1",
    name: "Centre Laser Médical Paris",
    address: "123 Avenue des Champs-Élysées, 75008 Paris",
    city: "Paris",
    citySlug: "paris",
    postalCode: "75008",
    phone: "+33 1 42 XX XX XX",
    website: "https://exemple.com",
    rating: 4.8,
    reviewCount: 156,
    services: [
      "Détatouage laser Q-Switched",
      "Consultation gratuite",
      "Devis personnalisé",
    ],
    description: "TODO: Lire les avis sur GMB et créer un résumé de 50-150 mots",
    googleMapsUrl: "https://maps.google.com/?cid=XXXXXX",
  },
```

---

## 📝 Étape suivante : Créer les descriptions

Le script ne peut pas générer automatiquement les descriptions (résumés des avis).

### Comment créer une bonne description :

1. **Ouvrir le lien Google Maps** fourni par le script
2. **Lire les 10-15 premiers avis** (les plus utiles)
3. **Identifier les thèmes récurrents** :
   - Professionnalisme
   - Résultats
   - Propreté
   - Accueil
   - Efficacité
   - Prix
   - Suivi

4. **Écrire un résumé de 50-150 mots** qui condense ces avis

### Exemple de bonne description :

```
Centre réputé pour son expertise en détatouage laser avec plus de 10 ans d'expérience.
Les clients apprécient particulièrement le professionnalisme de l'équipe, la qualité
des résultats et le suivi personnalisé. Équipement de dernière génération et protocoles
médicaux stricts. Excellents retours sur la gestion de la douleur et l'efficacité du
traitement. Tarifs transparents et possibilité de facilités de paiement.
```

---

## 🔄 Workflow complet pour 100 villes

### Option 1 : Manuel (Recommandé pour commencer)

1. Faire les 10 plus grandes villes manuellement :
   - Paris, Lyon, Marseille, Toulouse, Nice, Nantes, Strasbourg, Montpellier, Bordeaux, Lille

2. Ces 10 villes représentent ~40% du trafic potentiel

3. Ajouter progressivement les autres villes au fil du temps

### Option 2 : Semi-automatique

1. Créer un script bash pour boucler sur toutes les villes :

```bash
#!/bin/bash
cities=("Paris" "Lyon" "Marseille" "Toulouse" "Nice")

for city in "${cities[@]}"; do
  echo "Scraping $city..."
  python3 gmb_scraper.py --city "$city" --max 3
  sleep 30  # Pause de 30 secondes entre chaque ville
done
```

2. Puis compléter manuellement les descriptions

### Option 3 : API Google Places (Officiel)

**Coût :** ~$32 par 1000 requêtes
**Pour 300 entreprises (100 villes × 3)** : ~$10

Avantages :
- ✅ Légal et officiel
- ✅ Données fiables
- ✅ Pas de risque de blocage

[Documentation API](https://developers.google.com/maps/documentation/places/web-service/overview)

---

## 🛠️ Troubleshooting

### Erreur : "playwright not found"

```bash
pip3 install playwright
playwright install chromium
```

### Le navigateur ne s'ouvre pas

Vérifier que Chromium est installé :
```bash
playwright install chromium
```

### Données manquantes

Certaines entreprises n'ont pas toutes les informations (téléphone, site web).
C'est normal, le script gère ces cas avec des valeurs par défaut.

### Google bloque les requêtes

**Solutions :**
1. Augmenter les pauses (`time.sleep()`)
2. Utiliser un VPN
3. Faire moins de requêtes par jour
4. **Mieux : Utiliser l'API Google Places officielle**

---

## 📊 Estimation du temps

- **1 ville (manuel)** : 5-10 minutes
  - 2 min : Scraping automatique
  - 5 min : Lire les avis et écrire les descriptions
  - 1 min : Copier dans businesses.ts

- **10 villes** : 1-2 heures
- **100 villes** : 8-15 heures (réparties sur plusieurs jours)

**Conseil :** Commencer par les 10 villes principales qui génèrent le plus de trafic.

---

## 🎓 Ressources

- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Playwright Documentation](https://playwright.dev/python/)
- [Outscraper (Service de scraping GMB payant)](https://outscraper.com/)

---

## ✅ Checklist par ville

- [ ] Exécuter le script
- [ ] Vérifier les données (nom, adresse, téléphone)
- [ ] Lire les 10-15 premiers avis Google
- [ ] Écrire description condensée (50-150 mots)
- [ ] Vérifier les services proposés
- [ ] Copier dans `data/businesses.ts`
- [ ] Tester la page ville en local
- [ ] Commit et push

---

Bon courage ! 💪
