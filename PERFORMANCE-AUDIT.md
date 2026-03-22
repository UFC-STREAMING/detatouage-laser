# Performance Audit - tatouage-temporaire.fr

**Audit Date:** 22 mars 2026, 21h00  
**Site:** https://tatouage-temporaire.fr  
**Tool:** Google Lighthouse 13.0.3

---

## 📊 Lighthouse Scores (Current)

| Catégorie | Score | Grade |
|-----------|-------|-------|
| **Performance** | 98/100 | ⭐️⭐️⭐️⭐️⭐️ |
| **Accessibility** | 95/100 | ⭐️⭐️⭐️⭐️⭐️ |
| **Best Practices** | 100/100 | ⭐️⭐️⭐️⭐️⭐️ |
| **SEO** | 100/100 | ⭐️⭐️⭐️⭐️⭐️ |

### Performance Metrics (Detailed)

- **First Contentful Paint (FCP):** 1.0s ✅ (excellent < 1.8s)
- **Largest Contentful Paint (LCP):** 2.4s ⚠️ (bon mais optimisable < 2.5s)
- **Speed Index:** 2.1s ✅ (excellent < 3.4s)
- **Total Blocking Time (TBT):** Non renseigné
- **Cumulative Layout Shift (CLS):** Non renseigné

---

## 🔍 Issues Critiques Trouvées

### 1. **Images Secondaires Non-Optimisées (CRITIQUE)**

**Impact:** Très élevé (~43MB d'images PNG non compressées)

**Fichiers problématiques:**

```
public/images/avant-apres-detatouage.png    8.8 MB
public/images/1-seance-detatouage.png        7.5 MB
public/images/Accueil-detatouage.png         7.2 MB
public/images/Departement-detatouage.png     6.6 MB
public/images/Ville-detatouage.png           6.5 MB
public/images/Contact-detatouage.png         6.5 MB
```

**Problème:** Les images hero ont été optimisées (WebP), mais les images secondaires (pages internes, formulaires, départements) restent en PNG non compressé.

**Impact estimé:** -20-30 points Performance score, LCP degradé sur pages internes.

**Fix recommandé:**
```bash
# Convertir en WebP quality 85
for img in avant-apres-detatouage Accueil-detatouage Departement-detatouage \
           Ville-detatouage 1-seance-detatouage Contact-detatouage; do
  cwebp -q 85 public/images/$img.png -o public/images/$img.webp
done
```

**Estimation post-fix:** 
- Avant: 43 MB
- Après: ~4-6 MB (réduction 85-90%)
- Gain LCP: -1.5s sur pages internes

---

### 2. **JavaScript Non Utilisé**

**Impact:** Moyen (150ms temps sauvable)

**Détails:** 
- Unused JS: 150ms économisables
- Bootup time: 166ms (acceptable mais optimisable)

**Problème:** Certains composants importent du JS qui n'est pas utilisé sur toutes les pages.

**Fix recommandé:** 
- Activer code-splitting Next.js (déjà configuré)
- Ajouter dynamic imports pour composants lourds

**Composants à lazy-load:**
```typescript
// app/detatouage/[slug]/page.tsx
const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false })
const BeforeAfterSlider = dynamic(() => import('@/components/BeforeAfterSlider'), { loading: () => <Skeleton /> })
```

**Estimation post-fix:**
- Gain TBT: -100ms
- Gain FCP: -0.2s

---

### 3. **Absence de Lazy-Loading sur Images Secondaires**

**Impact:** Moyen (charge images hors viewport)

**Problème:** Les images non-hero n'utilisent pas de lazy-loading natif.

**Vérification:** Aucune occurrence de `loading="lazy"` trouvée dans les composants.

**Fix recommandé:**
```tsx
// components/DepartmentCard.tsx (exemple)
<Image
  src={`/images/${department}.webp`}
  alt={`Détatouage laser ${department}`}
  width={600}
  height={400}
  loading="lazy" // ← Ajouter
  quality={85}
/>
```

**Estimation post-fix:**
- Gain First Load JS: -30-50KB
- Amélioration FID: +10-15%

---

## 📋 Recommendations Fixes (Ordre de Priorité)

### 🔴 P0 - URGENT (Impact Élevé)

**1. Compression images secondaires PNG → WebP**
- Cibles: 6 fichiers (43MB)
- Effort: 15 min
- Gain estimé: +15-20 points Performance
- Impact LCP: -1.5s pages internes

**2. Lazy-loading images secondaires**
- Cibles: Tous les `<Image>` sauf hero
- Effort: 10 min
- Gain estimé: +5-8 points Performance
- Impact First Load: -40KB

---

### 🟡 P1 - Moyen Terme (Impact Modéré)

**3. Code-splitting componentisé**
- Cibles: ContactForm, BeforeAfterSlider, DepartmentGrid
- Effort: 20 min
- Gain estimé: +3-5 points Performance
- Impact TBT: -80-100ms

**4. Font-display: swap**
- Ajouter `&display=swap` aux Google Fonts
- Effort: 2 min
- Gain CLS: +0.02-0.05

---

### 🟢 P2 - Nice to Have (Impact Faible)

**5. Prefetch départements populaires**
```tsx
<link rel="prefetch" href="/detatouage/paris" />
```

**6. Service Worker pour cache images**
- Workbox + Next.js PWA
- Effort: 1h
- Gain visites récurrentes: +30% perf

---

## 🎯 Estimation Scores Post-Fixes

| Scénario | Perf | Access | BP | SEO | Notes |
|----------|------|--------|-----|-----|-------|
| **Actuel** | 98 | 95 | 100 | 100 | Excellent global |
| **+ P0 fixes** | **100** | 95 | 100 | 100 | Images optimisées + lazy |
| **+ P1 fixes** | 100 | 97 | 100 | 100 | Code-split + fonts |
| **+ P2 fixes** | 100 | 98 | 100 | 100 | Prefetch + SW |

---

## 🚀 Action Plan (30 min)

**Étape 1 (10 min):** Compression images
```bash
brew install webp  # si pas installé
cd ~/.openclaw/workspace/detatouage-laser
./scripts/optimize-images.sh  # à créer
```

**Étape 2 (10 min):** Lazy-loading
```bash
# Chercher/remplacer dans components/
<Image.*?(?!loading=)  → <Image loading="lazy"
```

**Étape 3 (10 min):** Code-split
```bash
# Ajouter dynamic() aux composants lourds
git commit -m "perf: lazy-load components + images WebP"
```

---

## 📌 Notes Techniques

- **Total Byte Weight:** 288 KB (excellent, déjà optimisé)
- **DOM Size:** Non critique (pas de limite dépassée)
- **Render-Blocking:** Aucune ressource bloquante détectée ✅
- **Unused CSS:** 0 (excellent) ✅

---

## ✅ Points Forts Actuels

- Performance déjà excellente (98/100)
- Aucune ressource render-blocking
- CSS optimisé (0 unused)
- Best Practices & SEO parfaits
- Hero images déjà en WebP

---

## 📞 Contact

Audit réalisé par: Frontend-Dev Agent  
Date: 22/03/2026 21:00 GMT+2  
Projet: Détatouage Laser (tatouage-temporaire.fr)
