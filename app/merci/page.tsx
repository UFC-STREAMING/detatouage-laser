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
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-[#48cae4]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-16 h-16 text-[#48cae4]" />
        </div>

        <h1 className="text-4xl font-bold text-[#0077b6] mb-4">
          Merci pour votre demande !
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg text-[#6c757d] mb-6">
            Nous avons bien reçu votre demande de devis pour le détatouage laser.
          </p>

          <div className="bg-[#f8f9fa] rounded-lg p-6 mb-6">
            <h2 className="font-semibold text-lg text-[#0077b6] mb-3">
              Que se passe-t-il maintenant ?
            </h2>
            <ul className="text-left space-y-3 text-[#6c757d]">
              <li className="flex items-start gap-3">
                <span className="bg-[#0077b6] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  1
                </span>
                <span>
                  Notre équipe va étudier votre demande et préparer un devis personnalisé
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#0077b6] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  2
                </span>
                <span>
                  Nous vous recontacterons sous 24-48 heures par email ou téléphone
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#0077b6] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  3
                </span>
                <span>
                  Nous pourrons ensuite planifier votre consultation gratuite
                </span>
              </li>
            </ul>
          </div>

          <div className="border-t border-[#e9ecef] pt-6">
            <p className="text-[#6c757d]">
              Nous vous répondrons dans les plus brefs délais par email.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#48cae4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00b4d8] transition"
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>
        </div>

        <p className="text-sm text-[#6c757d] mt-8">
          Un email de confirmation a été envoyé à l'adresse que vous avez fournie.
        </p>
      </div>
    </div>
  );
}
