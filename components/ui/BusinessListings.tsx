import { Business } from "@/data/businesses";
import { Star, MapPin, Phone, Globe, Clock } from "lucide-react";

interface BusinessListingsProps {
  businesses: Business[];
  cityName: string;
}

export function BusinessListings({ businesses, cityName }: BusinessListingsProps) {
  if (businesses.length === 0) {
    return null;
  }

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mx-auto mb-16 max-w-3xl">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{
                  background: 'var(--color-primary-lighter)',
                  color: 'var(--color-primary-dark)'
                }}>
            ⭐ Top entreprises
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Les meilleurs centres de <span className="text-gradient">détatouage à {cityName}</span>
          </h2>
          <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
            Découvrez les {businesses.length} centres les mieux notés pour votre détatouage laser à {cityName}.
            Comparez leurs services et demandez votre devis gratuit.
          </p>
        </div>

        {/* Business Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {businesses.map((business, index) => (
            <div
              key={business.id}
              className="group bg-white rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl border-2"
              style={{
                borderColor: index === 0 ? 'var(--color-primary)' : 'rgba(0, 119, 182, 0.1)',
              }}
            >
              {/* Badge "Meilleur choix" pour le premier */}
              {index === 0 && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                     style={{
                       background: 'linear-gradient(135deg, #0077b6, #0096c7)',
                       color: 'white'
                     }}>
                  <span className="text-lg">🏆</span>
                  <span className="text-sm font-bold">Meilleur choix</span>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-6">
                {/* Colonne gauche - Infos principales */}
                <div className="md:col-span-2">
                  {/* Nom et notation */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                      {business.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(business.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>
                        {business.rating}/5
                      </span>
                      <span style={{ color: 'var(--text-tertiary)' }}>
                        ({business.reviewCount} avis)
                      </span>
                    </div>
                  </div>

                  {/* Description condensée des avis */}
                  <p className="mb-6 leading-relaxed text-base" style={{ color: 'var(--text-secondary)' }}>
                    {business.description}
                  </p>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-bold mb-3 text-sm uppercase tracking-wide"
                        style={{ color: 'var(--color-primary)' }}>
                      Services proposés
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {business.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium"
                          style={{
                            background: 'var(--color-primary-lighter)',
                            color: 'var(--color-primary-dark)'
                          }}
                        >
                          ✓ {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Infos de contact */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>
                        {business.address}, {business.postalCode} {business.city}
                      </span>
                    </div>

                    {business.phone && (
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                        <a href={`tel:${business.phone}`}
                           className="hover:underline"
                           style={{ color: 'var(--text-secondary)' }}>
                          {business.phone}
                        </a>
                      </div>
                    )}

                    {business.openingHours && (
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                        <span style={{ color: 'var(--text-secondary)' }}>
                          Lun-Ven: {business.openingHours.monday || 'Horaires variables'}
                        </span>
                      </div>
                    )}

                    {business.website && (
                      <div className="flex items-center gap-3 text-sm">
                        <Globe className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                        <a
                          href={business.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          Visiter le site web
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Colonne droite - CTA */}
                <div className="flex flex-col justify-center gap-4">
                  {/* CTA Principal - Devis */}
                  <a
                    href="#quote-form"
                    className="block text-center px-6 py-4 rounded-lg font-bold transition-all duration-200 hover:shadow-xl hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #0077b6 0%, #0096c7 100%)',
                      color: 'white'
                    }}
                  >
                    Obtenir un devis gratuit
                  </a>

                  {/* Bouton secondaire - Voir sur GMB */}
                  {business.googleMapsUrl && (
                    <a
                      href={business.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-200 hover:shadow-md"
                      style={{
                        borderColor: 'var(--color-primary)',
                        color: 'var(--color-primary)',
                        background: 'white'
                      }}
                    >
                      Voir sur Google Maps
                    </a>
                  )}

                  {/* Info badge */}
                  <div className="text-center p-4 rounded-lg"
                       style={{ background: 'var(--color-primary-lighter)' }}>
                    <p className="text-xs font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                      💡 Devis gratuit et sans engagement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Global en bas */}
        <div className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-2xl"
             style={{ background: 'var(--bg-secondary)' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Vous n'arrivez pas à choisir ?
          </h3>
          <p className="mb-6 text-lg" style={{ color: 'var(--text-secondary)' }}>
            Remplissez notre formulaire et recevez jusqu'à 3 devis personnalisés
            des meilleurs centres de {cityName}.
          </p>
          <a
            href="#quote-form"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #0077b6 0%, #0096c7 100%)',
              color: 'white'
            }}
          >
            Comparer les devis gratuitement
          </a>
        </div>
      </div>
    </section>
  );
}
