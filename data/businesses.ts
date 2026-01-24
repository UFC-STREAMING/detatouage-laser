// Structure de données pour les entreprises de détatouage par ville
export interface Business {
  id: string;
  name: string;
  address: string;
  city: string;
  citySlug: string;
  postalCode: string;
  phone?: string;
  website?: string;
  rating: number; // Note sur 5
  reviewCount: number; // Nombre d'avis
  services: string[]; // Liste des services offerts
  description: string; // Résumé condensé des avis (50-150 mots)
  googleMapsUrl?: string; // Lien vers la fiche GMB
  openingHours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
}

// Base de données des entreprises par ville
// TODO: Remplir avec les données scrapées depuis GMB
export const businesses: Business[] = [
  // EXEMPLE - Paris
  {
    id: "paris-1",
    name: "Centre Laser Médical Paris",
    address: "123 Avenue des Champs-Élysées",
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
      "Traitement tous types de peau",
      "Détatouage coloré",
    ],
    description: "Centre réputé pour son expertise en détatouage laser avec plus de 10 ans d'expérience. Les clients apprécient particulièrement le professionnalisme de l'équipe, la qualité des résultats et le suivi personnalisé. Équipement de dernière génération et protocoles médicaux stricts. Excellents retours sur la gestion de la douleur et l'efficacité du traitement.",
    googleMapsUrl: "https://maps.google.com/?cid=XXXXXX",
    openingHours: {
      monday: "09:00-19:00",
      tuesday: "09:00-19:00",
      wednesday: "09:00-19:00",
      thursday: "09:00-19:00",
      friday: "09:00-19:00",
      saturday: "10:00-17:00",
    },
  },
  {
    id: "paris-2",
    name: "Skin Laser Expert",
    address: "45 Rue de Rivoli",
    city: "Paris",
    citySlug: "paris",
    postalCode: "75001",
    phone: "+33 1 43 XX XX XX",
    rating: 4.6,
    reviewCount: 89,
    services: [
      "Détatouage professionnel",
      "Laser picoseconde",
      "Séances express",
      "Devis gratuit",
    ],
    description: "Spécialiste reconnu du détatouage laser à Paris. Les avis soulignent l'accueil chaleureux, la transparence des tarifs et les résultats visibles dès les premières séances. Utilisation de technologies avancées pour minimiser la douleur. Personnel qualifié et à l'écoute des besoins spécifiques de chaque client.",
    googleMapsUrl: "https://maps.google.com/?cid=YYYYYY",
    openingHours: {
      monday: "08:30-18:30",
      tuesday: "08:30-18:30",
      wednesday: "08:30-18:30",
      thursday: "08:30-18:30",
      friday: "08:30-18:30",
    },
  },
  {
    id: "paris-3",
    name: "Paris Détatouage Clinique",
    address: "78 Boulevard Saint-Germain",
    city: "Paris",
    citySlug: "paris",
    postalCode: "75005",
    phone: "+33 1 44 XX XX XX",
    rating: 4.7,
    reviewCount: 112,
    services: [
      "Détatouage médical",
      "Consultation dermatologique",
      "Traitement cicatrices",
      "Suivi post-traitement",
    ],
    description: "Clinique spécialisée alliant expertise médicale et technologie de pointe. Les patients apprécient la rigueur du diagnostic initial et le plan de traitement personnalisé. Excellente réputation pour le traitement des tatouages difficiles (colorés, anciens). Accompagnement complet avec conseils de soin détaillés.",
    googleMapsUrl: "https://maps.google.com/?cid=ZZZZZZ",
    openingHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "09:00-13:00",
    },
  },

  // EXEMPLE - Lyon
  {
    id: "lyon-1",
    name: "Lyon Laser Dermatologie",
    address: "12 Cours Lafayette",
    city: "Lyon",
    citySlug: "lyon",
    postalCode: "69003",
    phone: "+33 4 72 XX XX XX",
    rating: 4.9,
    reviewCount: 203,
    services: [
      "Détatouage Q-Switch",
      "Laser Nd:YAG",
      "Consultation gratuite",
      "Paiement échelonné",
    ],
    description: "Centre lyonnais de référence avec d'excellentes évaluations. Les clients soulignent le professionnalisme exceptionnel, la propreté impeccable et les résultats remarquables. Équipe très pédagogue qui explique chaque étape. Tarifs transparents et possibilité de facilités de paiement. Service client irréprochable.",
    googleMapsUrl: "https://maps.google.com/?cid=AAAAAA",
  },

  // EXEMPLE - Marseille
  {
    id: "marseille-1",
    name: "Marseille Skin Center",
    address: "34 La Canebière",
    city: "Marseille",
    citySlug: "marseille",
    postalCode: "13001",
    phone: "+33 4 91 XX XX XX",
    rating: 4.5,
    reviewCount: 78,
    services: [
      "Détatouage laser",
      "Traitement multicolore",
      "Consultation dermatologique",
      "Forfaits avantageux",
    ],
    description: "Centre moderne au cœur de Marseille proposant des traitements de détatouage de qualité. Les avis mentionnent la rapidité des rendez-vous, l'efficacité du traitement et le rapport qualité-prix. Personnel attentif et disponible pour répondre aux questions. Bon suivi entre les séances.",
    googleMapsUrl: "https://maps.google.com/?cid=BBBBBB",
  },

  // TODO: Ajouter les 97 autres villes
  // Pour chaque ville, ajouter 3 entreprises avec leurs données GMB
];

// Fonction pour récupérer les entreprises d'une ville
export function getBusinessesByCity(citySlug: string): Business[] {
  return businesses
    .filter((business) => business.citySlug === citySlug)
    .slice(0, 3); // Limiter à 3 entreprises
}

// Fonction pour vérifier si une ville a des entreprises
export function hasCityBusinesses(citySlug: string): boolean {
  return businesses.some((business) => business.citySlug === citySlug);
}
