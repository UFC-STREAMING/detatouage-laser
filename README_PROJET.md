# Site Web Détatouage Laser - Documentation

## 🎉 Site Créé avec Succès !

Votre site web de détatouage laser est maintenant prêt à l'emploi. Il comprend :

- ✅ **100 pages ville** générées statiquement avec SEO optimisé
- ✅ **54 pages département** pour organiser les villes
- ✅ **Formulaire de devis** avec validation Zod et envoi d'emails
- ✅ **Design médical/clinique** professionnel et rassurant
- ✅ **Sitemap.xml et robots.txt** pour le référencement
- ✅ **Maillage interne** fort avec liens de proximité

## 📊 Statistiques du Build

```
✓ 161 pages générées statiquement
✓ 100 pages ville (SSG)
✓ 54 pages département (SSG)
✓ 1 page d'accueil
✓ 1 page de remerciement
✓ Sitemap et Robots configurés
```

## 🚀 Démarrage Rapide

### 1. Configurer l'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
cp .env.example .env.local
```

Puis éditez `.env.local` avec vos vraies valeurs :

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASSWORD=votre-app-password-gmail
SMTP_FROM=detatouage@example.com
SMTP_TO=leads@example.com
NEXT_PUBLIC_SITE_URL=https://www.votre-domaine.fr
```

### 2. Configurer Gmail pour l'envoi d'emails

1. Connectez-vous à votre compte Gmail
2. Allez dans **Paramètres du compte Google** → **Sécurité**
3. Activez la **Validation en deux étapes**
4. Allez dans **Mots de passe d'applications**
5. Créez un nouveau mot de passe pour "Mail"
6. Copiez le mot de passe de 16 caractères dans `.env.local` (`SMTP_PASSWORD`)

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 4. Tester le formulaire

1. Allez sur n'importe quelle page ville (ex: http://localhost:3000/ville/paris)
2. Remplissez le formulaire de devis
3. Soumettez le formulaire
4. Vérifiez que vous recevez bien l'email à l'adresse configurée dans `SMTP_TO`

## 📁 Structure du Projet

```
detatouage/
├── app/                          # Pages Next.js (App Router)
│   ├── layout.tsx               # Layout principal avec Navbar/Footer
│   ├── page.tsx                 # Page d'accueil
│   ├── ville/[slug]/page.tsx    # 100 pages ville dynamiques
│   ├── departement/[slug]/      # 54 pages département
│   ├── merci/page.tsx           # Page de remerciement
│   ├── actions/send-quote.ts    # Server Action pour emails
│   ├── sitemap.ts               # Génération sitemap.xml
│   └── robots.ts                # Fichier robots.txt
├── components/
│   ├── layout/                  # Navbar, Footer
│   ├── ui/                      # StickyCTA, QuoteForm, etc.
│   └── icons/Logo.tsx           # Logo SVG personnalisé
├── data/
│   └── cities.ts                # Base de données des 100 villes
├── lib/
│   ├── email/                   # Configuration Nodemailer
│   ├── validation/              # Schémas Zod
│   └── utils.ts                 # Fonctions utilitaires
└── types/index.ts               # Types TypeScript
```

## 🎨 Charte Graphique

- **Couleur Primaire:** Bleu Clinique (#0077b6)
- **Couleur Secondaire:** Vert d'Eau (#48cae4)
- **Fond:** Blanc (#ffffff) et Gris clair (#f8f9fa)
- **Police:** Inter (Google Fonts)
- **Style:** Médical, propre, rassurant

## 🔍 SEO

### Pages Générées

- **Homepage:** `/`
- **Pages Ville:** `/ville/paris`, `/ville/marseille`, etc. (100 pages)
- **Pages Département:** `/departement/paris`, `/departement/bouches-du-rhone`, etc. (54 pages)
- **Page Merci:** `/merci` (noindex, nofollow)

### Sitemap

Le sitemap est généré automatiquement à l'URL : [http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml)

### Robots.txt

Le fichier robots.txt est disponible à : [http://localhost:3000/robots.txt](http://localhost:3000/robots.txt)

### Metadata

Chaque page a des metadata optimisées :
- **Title** dynamique avec nom de ville/département
- **Description** unique pour chaque page
- **Canonical URL** pour éviter le duplicate content
- **Open Graph tags** pour les réseaux sociaux

## 📧 Gestion des Leads

### Formulaire de Devis

Le formulaire capture les informations suivantes :
- Zone du corps (select)
- Couleur du tatouage (select)
- Taille approximative (select)
- Prénom, Nom
- Email, Téléphone
- Code postal (pré-rempli sur les pages ville)
- Message optionnel
- Consentement (checkbox obligatoire)

### Validation

Validation côté serveur avec Zod :
- Code postal français (5 chiffres)
- Email valide
- Téléphone français (format flexible)
- Tous les champs requis

### Email de Lead

Format HTML professionnel avec :
- En-tête bleu avec titre
- Sections organisées (Contact, Tatouage)
- Design responsive
- Boutons cliquables (tel:, mailto:)
- Date et heure de soumission

### Tracking des Conversions

Après soumission réussie, l'utilisateur est redirigé vers `/merci` :
- Installez Google Analytics sur cette page
- Configurez un événement de conversion
- Utilisez cette URL pour le tracking Google Ads

## 🚀 Déploiement

### Option 1: Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

Avantages :
- Déploiement en 1 commande
- HTTPS automatique
- CDN global
- Environnement de prévisualisation

### Option 2: Netlify

```bash
# Installer Netlify CLI
npm i -g netlify-cli

# Déployer
netlify deploy --prod
```

### Option 3: VPS (Docker)

Créez un `Dockerfile` :

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Puis :

```bash
docker build -t detatouage .
docker run -p 3000:3000 --env-file .env.local detatouage
```

### Configuration du Domaine

1. Pointez votre domaine vers le serveur
2. Mettez à jour `NEXT_PUBLIC_SITE_URL` dans `.env.local`
3. Configurez SSL/HTTPS (Let's Encrypt ou Cloudflare)
4. Testez le site en production

## 📈 Après le Déploiement

### 1. Google Search Console

1. Allez sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajoutez votre propriété (domaine)
3. Vérifiez la propriété
4. Soumettez le sitemap : `https://votre-domaine.fr/sitemap.xml`

### 2. Google Analytics

1. Créez un compte Google Analytics
2. Obtenez votre ID de mesure (G-XXXXXXXXXX)
3. Ajoutez le script dans `app/layout.tsx` :

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 3. Google Ads (Optionnel)

- Créez des campagnes sur les mots-clés locaux
- Ciblez les villes spécifiques
- Trackez les conversions sur `/merci`

## 🔧 Personnalisation

### Changer les numéros de téléphone

Recherchez et remplacez `0123456789` par votre vrai numéro dans :
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/ui/StickyCTA.tsx`
- `app/page.tsx`
- Toutes les pages ville

### Ajouter des villes

Éditez `data/cities.ts` et ajoutez des villes supplémentaires :

```typescript
{
  id: "101",
  name: "Votre Ville",
  slug: "votre-ville",
  postalCode: "12345",
  department: { name: "Votre Département", number: "12", slug: "votre-departement" },
  population: 50000,
  proximity: ["ville-proche-1", "ville-proche-2"],
}
```

### Modifier le contenu SEO

Les templates de contenu sont dans :
- `app/ville/[slug]/page.tsx` - Contenu des pages ville
- `app/departement/[slug]/page.tsx` - Contenu des pages département
- `app/page.tsx` - Contenu de la homepage

## 🐛 Dépannage

### Le formulaire ne s'envoie pas

1. Vérifiez que `.env.local` existe et contient les bonnes valeurs
2. Vérifiez le mot de passe d'application Gmail
3. Regardez les logs du serveur pour voir les erreurs
4. Testez l'envoi d'email directement avec votre SMTP

### Erreur de build

```bash
# Nettoyer et reconstruire
rm -rf .next node_modules
npm install
npm run build
```

### Pages ville ne se génèrent pas

Vérifiez que `data/cities.ts` exporte correctement le tableau `cities`.

## 📝 Licence

Ce projet est créé pour un usage commercial de détatouage laser.

## 🆘 Support

Pour toute question ou problème :
1. Vérifiez ce README
2. Consultez la documentation Next.js : [nextjs.org/docs](https://nextjs.org/docs)
3. Vérifiez les logs dans la console

---

**Bon succès avec votre site de détatouage laser ! 🚀**
