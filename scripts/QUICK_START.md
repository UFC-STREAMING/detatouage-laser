# 🚀 Quick Start - Remplir les 100 villes

## ✅ ÉTAPE 1 : Scraping GMB (10 villes) - EN COURS

**Script lancé en arrière-plan !**

```bash
# Suivre la progression
cd /Users/leofortier/Downloads/Détatouage/detatouage/scripts
tail -f top10_log.txt
```

**Durée : 30-45 minutes**

Le script va créer :
- Paris_results.json
- Marseille_results.json
- Lyon_results.json
- etc.

---

## ⏳ PENDANT CE TEMPS : Préparer l'API Google Places

### 1. Créer un compte Google Cloud (si pas déjà fait)

https://console.cloud.google.com/

### 2. Créer un projet

1. Cliquer sur "Sélectionner un projet" (en haut)
2. "Nouveau projet"
3. Nom : "Detatouage Lead Gen"
4. Créer

### 3. Activer Places API

1. Menu ☰ → "APIs & Services" → "Library"
2. Rechercher "Places API"
3. Cliquer dessus
4. "Activer"

### 4. Créer une clé API

1. Menu ☰ → "APIs & Services" → "Credentials"
2. "+ CREATE CREDENTIALS" → "API key"
3. Copier la clé (commence par AIza...)

### 5. Restreindre la clé (sécurité)

1. Cliquer sur la clé créée
2. "API restrictions" → "Restrict key"
3. Sélectionner "Places API" uniquement
4. Save

### 6. Activer la facturation

⚠️ **Important** : L'API nécessite un compte avec facturation

1. Menu ☰ → "Billing"
2. "Link a billing account"
3. Ajouter carte bancaire

**Coût pour ce projet : ~$10** (270 entreprises × $0.032)

---

## 📝 ÉTAPE 2 : Lancer l'API Google Places (90 villes)

### Une fois la clé API prête :

```bash
cd /Users/leofortier/Downloads/Détatouage/detatouage/scripts

# Installer la bibliothèque
pip3 install googlemaps

# Définir la clé
export GOOGLE_PLACES_API_KEY="AIza_VOTRE_CLE_ICI"

# Lancer le script
python3 google_places_scraper.py
```

**Durée : 10-15 minutes**

---

## 📊 ÉTAPE 3 : Vérifier les résultats

### Après ~45 minutes, vous aurez :

**Scraping GMB (10 villes)** :
- `Paris_results.json`
- `Marseille_results.json`
- ... (10 fichiers)

**API Places (90 villes)** :
- `places_api_results.json`

### Total : 300 entreprises !

---

## 🔄 ÉTAPE 4 : Intégrer dans le code

Je vais créer un script qui :
1. Fusionne tous les JSON
2. Génère le fichier `data/businesses.ts` complet
3. Prêt à déployer !

```bash
python3 merge_results.py
```

Cela va générer `data/businesses.ts` avec les 300 entreprises.

---

## ✅ ÉTAPE 5 : Tester et déployer

```bash
# Build
npm run build

# Commit
git add .
git commit -m "Add 300 businesses from GMB + Places API"

# Push (déploie automatiquement sur Vercel)
git push
```

---

## 📈 Résultat final

- ✅ 100 villes couvertes
- ✅ 300 entreprises (3 par ville)
- ✅ Données réelles (nom, tel, adresse, note, avis)
- ✅ Prêt pour la génération de leads

**Coût total : ~$10**
**Temps total : ~1h**

---

## 🆘 Besoin d'aide ?

Vérifier la progression :
```bash
tail -f /Users/leofortier/Downloads/Détatouage/detatouage/scripts/top10_log.txt
```

Vérifier que le processus tourne :
```bash
ps aux | grep gmb_scraper
```

---

Bon courage ! 💪
