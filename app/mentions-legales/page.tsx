import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site Détatouage Laser",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0077b6] mb-8">Mentions Légales</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">1. Éditeur du site</h2>
            <p className="text-[#6c757d]">
              <strong>Raison sociale :</strong> LBS Affiliate EOOD<br />
              <strong>Forme juridique :</strong> Société à responsabilité limitée unipersonnelle (Bulgarie)<br />
              <strong>Capital social :</strong> 200 BGN<br />
              <strong>Siège social :</strong> 93 Ekzarh Yosif, rez-de-chaussée, 1000 Sofia, Bulgarie<br />
              <strong>UIC :</strong> 208363125<br />
              <strong>Email :</strong> contact@tatouage-temporaire.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">2. Directeur de la publication</h2>
            <p className="text-[#6c757d]">
              <strong>Nom :</strong> Leo Pierre Joris Fortier<br />
              <strong>Email :</strong> contact@tatouage-temporaire.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">3. Hébergement</h2>
            <p className="text-[#6c757d]">
              <strong>Hébergeur :</strong> Vercel Inc.<br />
              <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
              <strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#0077b6] hover:underline">vercel.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">4. Propriété intellectuelle</h2>
            <p className="text-[#6c757d]">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est la propriété exclusive de Détatouage Laser, sauf mention contraire.
            </p>
            <p className="text-[#6c757d] mt-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">5. Responsabilité</h2>
            <p className="text-[#6c757d]">
              Les informations fournies sur ce site le sont à titre informatif. Détatouage Laser s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, mais ne peut en garantir l'exhaustivité et l'exactitude.
            </p>
            <p className="text-[#6c757d] mt-4">
              Détatouage Laser ne saurait être tenu responsable des erreurs, d'une absence de disponibilité des informations et des services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">6. Liens hypertextes</h2>
            <p className="text-[#6c757d]">
              Le site peut contenir des liens hypertextes vers d'autres sites. Détatouage Laser n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">7. Droit applicable</h2>
            <p className="text-[#6c757d]">
              Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">8. Contact</h2>
            <p className="text-[#6c757d]">
              Pour toute question concernant les mentions légales, vous pouvez nous contacter à l'adresse suivante :<br />
              <strong>Email :</strong> <a href="mailto:contact@tatouage-temporaire.fr" className="text-[#0077b6] hover:underline">contact@tatouage-temporaire.fr</a>
            </p>
          </section>

          <p className="text-sm text-[#6c757d] mt-12">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}
