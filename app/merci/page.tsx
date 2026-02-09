import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Merci pour votre demande",
  description: "Nous avons bien reçu votre demande de devis pour le détatouage laser.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8" style={{ background: 'var(--color-primary-lighter)' }}>
          <CheckCircle2 className="w-16 h-16" style={{ color: 'var(--color-primary-light)' }} />
        </div>

        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
          Merci pour votre demande !
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
            Nous avons bien reçu votre demande de devis pour le détatouage laser.
          </p>

          <div className="rounded-lg p-6 mb-6" style={{ background: 'var(--bg-secondary)' }}>
            <h2 className="font-semibold text-lg mb-3" style={{ color: 'var(--color-primary)' }}>
              Que se passe-t-il maintenant ?
            </h2>
            <ul className="text-left space-y-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="flex items-start gap-3">
                <span className="text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold" style={{ background: 'var(--color-primary)' }}>
                  1
                </span>
                <span>
                  Notre équipe va étudier votre demande et préparer un devis personnalisé
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold" style={{ background: 'var(--color-primary)' }}>
                  2
                </span>
                <span>
                  Nous vous recontacterons sous 24-48 heures par email ou téléphone
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold" style={{ background: 'var(--color-primary)' }}>
                  3
                </span>
                <span>
                  Nous pourrons ensuite planifier votre consultation gratuite
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-6" style={{ borderTop: '1px solid var(--color-grey-200)' }}>
            <p style={{ color: 'var(--text-secondary)' }}>
              Nous vous répondrons dans les plus brefs délais par email.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition hover:opacity-90"
            style={{ background: 'var(--color-primary-light)' }}
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>
        </div>

        <p className="text-sm mt-8" style={{ color: 'var(--text-secondary)' }}>
          Un email de confirmation a été envoyé à l'adresse que vous avez fournie.
        </p>
      </div>
      </div>
    </div>
  );
}
