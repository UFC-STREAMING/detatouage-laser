# Guide de Configuration Email et Déploiement

## 📧 PARTIE 1 : Configuration des Emails

### Option A : Gmail (Recommandé pour démarrer)

#### 1. Créer un mot de passe d'application Gmail

1. Allez sur votre compte Google : https://myaccount.google.com/
2. Cliquez sur "Sécurité" dans le menu de gauche
3. Activez la validation en 2 étapes si ce n'est pas déjà fait
4. Recherchez "Mots de passe des applications"
5. Sélectionnez "Autre (nom personnalisé)" et tapez "Détatouage Laser"
6. Copiez le mot de passe de 16 caractères généré

#### 2. Configurer le fichier .env.local

Créez ou modifiez le fichier `.env.local` à la racine du projet :

```env
# Email Configuration
EMAIL_FROM="contact@detatouage-laser.fr"
EMAIL_TO="votre.email@gmail.com"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="votre.email@gmail.com"
SMTP_PASS="votre_mot_de_passe_application_16_caracteres"

# Site URL
NEXT_PUBLIC_SITE_URL="https://www.detatouage-laser.fr"
```

**⚠️ Important :** Remplacez les valeurs par :
- `EMAIL_TO` : Votre adresse email où vous voulez recevoir les demandes de devis
- `SMTP_USER` : Votre adresse Gmail complète
- `SMTP_PASS` : Le mot de passe d'application que vous avez généré

#### 3. Tester l'envoi d'emails en local

```bash
cd detatouage
npm run dev
```

Allez sur http://localhost:3000 et remplissez le formulaire de devis pour tester.

---

### Option B : Service Email Professionnel (Recommandé pour production)

#### Services recommandés :
- **Resend** (https://resend.com) - 100 emails/jour gratuits
- **SendGrid** (https://sendgrid.com) - 100 emails/jour gratuits
- **Mailgun** (https://mailgun.com) - 5000 emails/mois gratuits

#### Exemple avec Resend (le plus simple) :

1. Créez un compte sur https://resend.com
2. Vérifiez votre domaine (detatouage-laser.fr)
3. Créez une clé API
4. Modifiez `.env.local` :

```env
# Configuration Resend
EMAIL_FROM="contact@detatouage-laser.fr"
EMAIL_TO="votre.email@gmail.com"
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxx"

NEXT_PUBLIC_SITE_URL="https://www.detatouage-laser.fr"
```

5. Installez le package Resend :
```bash
npm install resend
```

6. Modifiez `/app/api/quote/route.ts` pour utiliser Resend au lieu de Nodemailer.

---

## 🚀 PARTIE 2 : Déploiement du Site

### Étape 1 : Initialiser Git (si pas déjà fait)

```bash
cd detatouage
git init
git add .
git commit -m "Initial commit - Site détatouage laser"
```

### Étape 2 : Créer un dépôt GitHub

1. Allez sur https://github.com
2. Cliquez sur "New repository"
3. Nommez-le "detatouage-laser"
4. Laissez-le en privé
5. Ne cochez rien d'autre
6. Cliquez sur "Create repository"

7. Liez votre projet local :
```bash
git remote add origin https://github.com/VOTRE_USERNAME/detatouage-laser.git
git branch -M main
git push -u origin main
```

---

### Étape 3 : Déployer sur Vercel (Recommandé - Gratuit)

#### A. Créer un compte Vercel

1. Allez sur https://vercel.com
2. Cliquez sur "Sign Up"
3. Connectez-vous avec GitHub

#### B. Importer le projet

1. Cliquez sur "Add New..." → "Project"
2. Sélectionnez votre dépôt "detatouage-laser"
3. Cliquez sur "Import"

#### C. Configurer les variables d'environnement

Dans les paramètres du projet Vercel :
1. Allez dans "Settings" → "Environment Variables"
2. Ajoutez chaque variable de votre `.env.local` :

```
EMAIL_FROM = contact@detatouage-laser.fr
EMAIL_TO = votre.email@gmail.com
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = votre.email@gmail.com
SMTP_PASS = votre_mot_de_passe_application
NEXT_PUBLIC_SITE_URL = https://www.detatouage-laser.fr
```

#### D. Déployer

1. Cliquez sur "Deploy"
2. Attendez 2-3 minutes
3. Votre site sera disponible sur une URL type `detatouage-laser.vercel.app`

---

### Étape 4 : Configurer votre nom de domaine

#### A. Acheter un nom de domaine

Achetez `detatouage-laser.fr` chez :
- **OVH** (https://ovh.com)
- **Gandi** (https://gandi.net)
- **Namecheap** (https://namecheap.com)

#### B. Configurer le DNS dans Vercel

1. Dans Vercel, allez dans "Settings" → "Domains"
2. Cliquez sur "Add Domain"
3. Entrez `detatouage-laser.fr` et `www.detatouage-laser.fr`
4. Vercel vous donnera des enregistrements DNS à ajouter

#### C. Ajouter les enregistrements DNS chez votre registrar

Dans le panneau de votre registrar (OVH, Gandi, etc.), ajoutez :

**Type A** :
```
@ → 76.76.21.21
```

**Type CNAME** :
```
www → cname.vercel-dns.com
```

⏱️ **Attendez 24-48h** pour la propagation DNS

---

## 📝 PARTIE 3 : Après le Déploiement

### 1. Ajouter l'image avant-après

Une fois le fichier image copié, renommez-le en `evolution-detatouage.jpg` et placez-le dans `/public/images/`

```bash
# Si l'image s'appelle différemment
mv ~/Downloads/[NOM_IMAGE].jpg detatouage/public/images/evolution-detatouage.jpg
```

Puis redéployez :
```bash
git add .
git commit -m "Ajout image avant-après"
git push
```

Vercel redéploiera automatiquement !

---

### 2. Tester le formulaire de contact

1. Allez sur votre site déployé
2. Remplissez le formulaire de devis
3. Vérifiez que vous recevez l'email dans votre boîte

---

### 3. Configuration SEO finale

#### A. Google Search Console

1. Allez sur https://search.google.com/search-console
2. Ajoutez votre propriété `detatouage-laser.fr`
3. Vérifiez la propriété avec la méthode DNS
4. Soumettez le sitemap : `https://detatouage-laser.fr/sitemap.xml`

#### B. Google Analytics (optionnel)

1. Créez un compte sur https://analytics.google.com
2. Obtenez votre ID de mesure (G-XXXXXXXXXX)
3. Ajoutez-le dans votre site

---

## 🔒 Sécurité

### Fichiers à NE JAMAIS commiter sur Git :

Assurez-vous que `.gitignore` contient :
```
.env
.env.local
.env*.local
```

### Vérifier avant de push :
```bash
git status
# Ne doit PAS montrer .env.local
```

---

## 🎉 Récapitulatif

✅ **Configuration Email** : Variables d'environnement configurées
✅ **GitHub** : Code versionné et sauvegardé
✅ **Vercel** : Site déployé et accessible
✅ **Domaine** : DNS configuré (attendre propagation)
✅ **SEO** : Sitemap soumis à Google
✅ **Formulaire** : Emails reçus correctement

---

## 📞 Besoin d'aide ?

Si vous rencontrez des problèmes :
1. Vérifiez les logs Vercel (onglet "Deployments" → cliquez sur le déploiement → "Functions")
2. Testez les emails en local d'abord avec `npm run dev`
3. Vérifiez que toutes les variables d'environnement sont bien configurées dans Vercel

---

## 🔄 Mises à jour futures

Pour mettre à jour le site :
```bash
# Faites vos modifications
git add .
git commit -m "Description des changements"
git push
```

Vercel redéploiera automatiquement en 2-3 minutes !
