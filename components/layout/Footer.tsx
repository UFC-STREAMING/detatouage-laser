import Link from "next/link";
import { Logo } from "@/components/icons/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8f9fa] border-t border-[#e9ecef] mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-8 h-8" />
              <span className="font-bold text-lg text-[#0077b6]">Détatouage Laser</span>
            </div>
            <p className="text-[#6c757d] text-sm">
              Spécialiste du retrait de tatouage par laser dans toute la France.
              Technologie de pointe pour des résultats optimaux.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0077b6] mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#6c757d] hover:text-[#0077b6] transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-[#6c757d] hover:text-[#0077b6] transition">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-[#6c757d] hover:text-[#0077b6] transition">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#0077b6] mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-[#6c757d]">
              <li>Email: contact@detatouage-laser.fr</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#e9ecef] text-center text-sm text-[#6c757d]">
          <p>&copy; {currentYear} Détatouage Laser. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
