# 🔍 PROBLÈMES IDENTIFIÉS - REDESIGN PHASE 2

**Date :** 21 mars 2026  
**Feedback Leo :** Design encore merdique, pas un vrai redesign

---

## ❌ PROBLÈMES CRITIQUES

### **1. CENTRAGE (Priorité 1)**

**Problèmes observés :**
- Sections non centrées uniformément
- Conteneurs width inconsistants
- Padding asymétriques

**Action requise :**
```css
/* Forcer centrage parfait sur TOUS les containers */
.container {
  width: 100% !important;
  max-width: 1200px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: 2rem;
  padding-right: 2rem;
}

/* Sections */
.section {
  width: 100%;
  display: flex;
  justify-content: center;
}

.section > .container {
  text-align: center; /* Par défaut centré */
}
```

---

### **2. ICÔNES (Priorité 1)**

**Problèmes :**
- ❌ Aucune icône personnalisée
- ❌ Utilise Lucide-React basique
- ❌ Pas d'identité visuelle

**Action requise :**
- [ ] Créer set d'icônes custom SVG (médical + sympathique)
- [ ] Icônes : laser, peau, cicatrisation, médecin, calendrier, prix
- [ ] Style : outlined, 2px stroke, arrondis
- [ ] Couleur : Or #C9A961 avec gradient subtil

**Exemples à créer :**
```tsx
// components/icons/LaserIcon.tsx
export const LaserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
    {/* Custom laser beam icon */}
  </svg>
);
```

---

### **3. LOOK "AI GENERIC" (Priorité 1)**

**Problèmes :**
- ❌ Layout trop "template"
- ❌ Grid uniformes (3 cols partout)
- ❌ Cards toutes identiques
- ❌ Espacements robotiques

**Action requise :**

**A. Layout Asymétrique** (moins template) :
```tsx
// Au lieu de grid-cols-3 uniforme
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  // Monotone
</div>

// Utiliser layouts variés
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
  <div className="md:col-span-7">Feature principale</div>
  <div className="md:col-span-5">Sidebar</div>
</div>
```

**B. Cards Non-Uniformes** :
- Tailles variables (large, medium, small)
- Positions décalées (offset)
- Backgrounds variés (white, cream, transparent)

**C. Espacements Organiques** :
```css
/* Au lieu de */
gap: 32px; /* Uniforme */

/* Utiliser */
gap: clamp(24px, 4vw, 48px); /* Fluide */
margin-top: calc(var(--space-xl) + 1rem); /* Variation */
```

---

## 🎯 PLAN D'ACTION CORRIGÉ

### **Étape 1 : Fix Centrage (15 min)**

**Fichiers à modifier :**
1. `app/globals.css` → Renforcer .container
2. `app/page.tsx` → Wrapper sections
3. Tous composants → Vérifier padding/margin

**Test :** Ligne rouge verticale au centre (1200px max-width)

---

### **Étape 2 : Icônes Custom (30 min)**

**Créer :**
```
components/icons/
  ├── LaserIcon.tsx
  ├── SkinIcon.tsx
  ├── CalendarIcon.tsx
  ├── PriceIcon.tsx
  ├── DoctorIcon.tsx
  └── index.ts
```

**Style guide :**
- Stroke: 2px
- Rounded corners
- Size: 24x24 base
- Color: currentColor (hérite)

**Remplacer partout :**
- Lucide icons → Custom icons
- Benefits section
- Process steps
- Features cards

---

### **Étape 3 : Layout Anti-Template (45 min)**

**A. Hero Asymétrique :**
```tsx
<section className="hero">
  <div className="container grid md:grid-cols-12 gap-12">
    {/* Texte 7 cols */}
    <div className="md:col-span-7">
      <h1>Title</h1>
      <p>Subtitle</p>
      <CTA />
    </div>
    
    {/* Image 5 cols décalée */}
    <div className="md:col-span-5 md:translate-y-12">
      <Image />
    </div>
  </div>
</section>
```

**B. Benefits Grid Brisée :**
```tsx
// Au lieu de 3x uniforme
<div className="grid gap-8">
  <div className="md:col-span-8">Large card principale</div>
  <div className="md:col-span-4 space-y-8">
    <div>Small card 1</div>
    <div>Small card 2</div>
  </div>
</div>
```

**C. Testimonials Masonry :**
```tsx
// Au lieu de grid uniforme
<div className="columns-1 md:columns-2 lg:columns-3 gap-8">
  {testimonials.map(...)} // Auto-flow masonry
</div>
```

---

### **Étape 4 : Micro-Interactions (20 min)**

**Ajouter :**
```css
/* Hover subtils */
.card:hover {
  transform: translateY(-4px) rotate(-0.5deg); /* Slight tilt */
}

/* Gradients animés */
.btn-primary::before {
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  animation: shimmer 2s infinite;
}

/* Shadows dynamiques */
.card:hover {
  box-shadow: 
    0 20px 40px rgba(0,0,0,0.1),
    0 0 0 1px rgba(201,169,97,0.2) inset;
}
```

---

## 📸 VALIDATION PAR LEO

**Process :**
1. Je fais UN changement (ex: centrage)
2. Screenshot
3. Envoie à Leo
4. Leo valide → je continue
5. Leo rejette → je corrige

**Pas de batch de 10 changements d'un coup.**

---

## 🚨 CRITÈRES VALIDATION

**Pour que Leo valide :**

✅ **Centrage** → Tout aligné sur axe central 1200px  
✅ **Icônes** → Custom, sympathiques, cohérentes  
✅ **Layout** → Asymétrique, non-template  
✅ **Espacements** → Organiques, variés  
✅ **Micro-interactions** → Hover, animations subtiles  
✅ **Hiérarchie** → Cards différenciées (taille/style)  
✅ **Typographie** → Playfair bien intégré, sizes variées  
✅ **Couleurs** → Or/Noir/Violet bien dosés, pas trop chargé

---

## ⏱️ TIMING ESTIMÉ

| Étape | Temps | Output |
|-------|-------|--------|
| Fix centrage | 15 min | Screenshot alignement |
| Icônes custom | 30 min | 6-8 icônes SVG |
| Layout anti-template | 45 min | Hero + Benefits refaits |
| Micro-interactions | 20 min | Hovers + animations |
| **TOTAL** | **1h50** | **Site pro non-AI** |

---

## 🎯 PROCHAINE ACTION

**JE COMMENCE PAR :**
1. Fix centrage globals.css
2. Screenshot pour validation Leo
3. Attends OK avant de continuer

**ETA première validation : 15 min**
