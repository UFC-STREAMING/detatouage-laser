# 🚀 Setup Hybride - 100 villes en 2h

## 📋 Plan

- **10 villes principales** (Paris, Lyon, Marseille, Toulouse, Nice, Nantes, Montpellier, Strasbourg, Bordeaux, Lille) → Scraping GMB réel
- **90 autres villes** → API Google Places officielle

## ⚙️ ÉTAPE 1 : Scraping GMB (10 villes) - 30 min

### Lancer le script

```bash
cd scripts
export PATH="$PATH:/Users/leofortier/Library/Python/3.9/bin"

# Scraper les 10 villes principales
python3 bulk_gmb_scraper.py
```

Le script va :
- Scraper Google Maps pour chaque ville
- Extraire les 3 meilleurs centres
- Sauvegarder dans `businesses_progress.json`
- Pause de 20-30s entre chaque ville

**Durée : 30-45 minutes**

---

## ⚙️ ÉTAPE 2 : API Google Places (90 villes) - 15 min

### 2.1 Obtenir une clé API

1. Aller sur https://console.cloud.google.com/
2. Créer un nouveau projet "Detatouage Lead Gen"
3. Activer "Places API"
4. Créer une clé API
5. Restreindre la clé à "Places API" uniquement

**Coût : ~$10 pour 270 entreprises**

### 2.2 Lancer le script

```bash
# Installer la bibliothèque
pip3 install googlemaps

# Définir la clé API
export GOOGLE_PLACES_API_KEY="AIza..."

# Lancer
python3 google_places_scraper.py
```

**Durée : 10-15 minutes**

---

## ⚙️ ÉTAPE 3 : Fusionner les résultats

Les 2 scripts génèrent du code TypeScript.

1. Copier le code du scraping GMB (businesses_progress.json)
2. Copier le code de l'API Places (places_api_results.json)
3. Coller dans `data/businesses.ts`

**Total : 300 entreprises (100 villes × 3)**

---

## ⚙️ ÉTAPE 4 : Améliorer les descriptions (Optionnel)

Pour les 10 villes principales, améliorer les descriptions :

1. Ouvrir le lien Google Maps de l'entreprise
2. Lire les 10-15 premiers avis
3. Réécrire la description (50-150 mots)

**Exemple de bonne description :**

```
Centre réputé pour son expertise en détatouage laser avec plus de 10 ans d'expérience.
Les clients apprécient particulièrement le professionnalisme de l'équipe, la qualité
des résultats et le suivi personnalisé. Équipement de dernière génération et protocoles
médicaux stricts. Excellents retours sur la gestion de la douleur et l'efficacité du
traitement.
```

---

## 📊 Résumé

| Méthode | Villes | Entreprises | Temps | Coût | Qualité |
|---------|--------|-------------|-------|------|---------|
| GMB Scraping | 10 | 30 | 30-45 min | Gratuit | ⭐⭐⭐⭐⭐ |
| API Places | 90 | 270 | 10-15 min | ~$10 | ⭐⭐⭐⭐ |
| **TOTAL** | **100** | **300** | **~1h** | **~$10** | **⭐⭐⭐⭐** |

---

## 🎯 Prochaines étapes

1. Build et test : `npm run build`
2. Commit : `git add . && git commit -m "Add 300 businesses"`
3. Push : `git push`
4. Vérifier sur Vercel

---

Bon courage ! 💪
