"use client";

import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  treatment: string;
  sessions?: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie M.",
    location: "Paris",
    rating: 5,
    date: "Janvier 2026",
    comment: "Résultat incroyable ! Mon tatouage au poignet a complètement disparu en 6 séances. L'équipe est professionnelle, rassurante et les explications sont claires. Je recommande vivement pour ceux qui veulent effacer un tatouage dont ils ne veulent plus.",
    treatment: "Détatouage poignet",
    sessions: 6
  },
  {
    id: 2,
    name: "Marc L.",
    location: "Lyon",
    rating: 5,
    date: "Décembre 2025",
    comment: "Après 8 séances, mon tatouage tribal sur l'épaule est presque invisible. La technologie laser est vraiment impressionnante et les douleurs sont tout à fait supportables. Prix transparent et service au top.",
    treatment: "Détatouage épaule",
    sessions: 8
  },
  {
    id: 3,
    name: "Julie R.",
    location: "Marseille",
    rating: 5,
    date: "Décembre 2025",
    comment: "Excellente expérience du début à la fin. Le processus était bien expliqué, pas de surprises sur les tarifs. Mon petit tatouage à la cheville a disparu en seulement 4 séances. Merci pour votre professionnalisme !",
    treatment: "Détatouage cheville",
    sessions: 4
  },
  {
    id: 4,
    name: "Alexandre D.",
    location: "Bordeaux",
    rating: 5,
    date: "Novembre 2025",
    comment: "J'avais un gros tatouage noir sur l'avant-bras que je voulais effacer. Après 10 séances, le résultat dépasse mes attentes. L'équipe est à l'écoute et très compétente. Je n'hésite pas à recommander !",
    treatment: "Détatouage avant-bras",
    sessions: 10
  },
  {
    id: 5,
    name: "Émilie B.",
    location: "Toulouse",
    rating: 5,
    date: "Novembre 2025",
    comment: "Service impeccable ! J'appréhendais beaucoup mais l'équipe m'a mise en confiance. Mon tatouage couleur s'efface progressivement, et je suis ravie du suivi personnalisé. Tarifs honnêtes et résultats visibles dès les premières séances.",
    treatment: "Détatouage couleur",
    sessions: 7
  },
  {
    id: 6,
    name: "Thomas V.",
    location: "Nantes",
    rating: 5,
    date: "Octobre 2025",
    comment: "Après 5 séances, mon tatouage de jeunesse a quasi disparu. La technologie utilisée est vraiment efficace et le personnel est très pro. Je recommande à 100% pour ceux qui veulent tourner la page !",
    treatment: "Détatouage dos",
    sessions: 5
  }
];

export function Testimonials() {
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="badge badge-primary">Témoignages</span>
          </div>

          <h2 className="mb-6">
            Ce que disent nos <span className="text-gradient">clients</span>
          </h2>

          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Découvrez les expériences de nos clients qui ont retrouvé une peau nette grâce à nos traitements laser de détatouage.
          </p>

          {/* Rating Overview */}
          <div className="flex items-center justify-center gap-6 mt-8 p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl font-bold" style={{ color: 'var(--color-primary)' }}>
                  {averageRating.toFixed(1)}
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                Basé sur {totalReviews} avis vérifiés
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    {testimonial.location} • {testimonial.date}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Treatment Info */}
              <div className="mb-4">
                <span className="badge" style={{ background: 'var(--color-primary-lighter)', color: 'var(--color-primary-dark)' }}>
                  {testimonial.treatment}
                  {testimonial.sessions && ` • ${testimonial.sessions} séances`}
                </span>
              </div>

              {/* Comment */}
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                "{testimonial.comment}"
              </p>

              {/* Verified Badge */}
              <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--color-grey-200)' }}>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    style={{ color: 'var(--color-success)' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs font-medium" style={{ color: 'var(--color-success)' }}>
                    Avis vérifié
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
            Rejoignez nos centaines de clients satisfaits
          </p>
          <a href="#quote-form" className="btn btn-primary btn-lg">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Obtenir mon devis gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
