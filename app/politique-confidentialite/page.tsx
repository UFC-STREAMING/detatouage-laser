import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et protection des données du site Détatouage Laser",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0077b6] mb-8">
          Politique de Confidentialité
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">1. Introduction</h2>
            <p className="text-[#6c757d]">
              La présente politique de confidentialité décrit la façon dont Détatouage Laser collecte,
              utilise et protège les données personnelles que vous nous fournissez lors de l'utilisation
              de notre site web.
            </p>
            <p className="text-[#6c757d] mt-4">
              Nous nous engageons à protéger votre vie privée et à respecter les dispositions du
              Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">2. Responsable du traitement</h2>
            <p className="text-[#6c757d]">
              <strong>Responsable :</strong> Détatouage Laser<br />
              <strong>Email :</strong> contact@detatouage-laser.fr<br />
              <strong>Adresse :</strong> [Adresse à compléter]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">
              3. Données collectées
            </h2>
            <p className="text-[#6c757d] mb-4">
              Lorsque vous utilisez notre formulaire de demande de devis, nous collectons les
              informations suivantes :
            </p>
            <ul className="list-disc pl-6 text-[#6c757d] space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Code postal</li>
              <li>Informations sur le tatouage (zone, couleur, taille)</li>
              <li>Message optionnel</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">
              4. Finalité du traitement
            </h2>
            <p className="text-[#6c757d] mb-4">
              Les données collectées sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 text-[#6c757d] space-y-2">
              <li>Traiter votre demande de devis</li>
              <li>Vous contacter par email ou téléphone pour répondre à votre demande</li>
              <li>Vous fournir des informations sur nos services</li>
              <li>Améliorer nos services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">
              5. Base légale du traitement
            </h2>
            <p className="text-[#6c757d]">
              Le traitement de vos données personnelles est basé sur votre consentement, donné au
              moment de la soumission du formulaire de contact. Vous avez le droit de retirer votre
              consentement à tout moment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">
              6. Durée de conservation
            </h2>
            <p className="text-[#6c757d]">
              Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter
              de notre dernier contact, sauf obligation légale de conservation plus longue.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">
              7. Destinataires des données
            </h2>
            <p className="text-[#6c757d]">
              Vos données personnelles sont destinées uniquement à notre équipe interne et ne sont
              jamais vendues, louées ou partagées avec des tiers à des fins commerciales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">8. Vos droits</h2>
            <p className="text-[#6c757d] mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-[#6c757d] space-y-2">
              <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> Vous pouvez demander la limitation du traitement</li>
              <li><strong>Droit à la portabilité :</strong> Vous pouvez demander le transfert de vos données</li>
              <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
            </ul>
            <p className="text-[#6c757d] mt-4">
              Pour exercer ces droits, contactez-nous à l'adresse :
              <a href="mailto:contact@detatouage-laser.fr" className="text-[#0077b6] hover:underline ml-1">
                contact@detatouage-laser.fr
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">9. Cookies</h2>
            <p className="text-[#6c757d]">
              Notre site utilise des cookies techniques essentiels au fonctionnement du site.
              Ces cookies ne collectent pas de données personnelles et ne nécessitent pas votre
              consentement préalable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">10. Sécurité</h2>
            <p className="text-[#6c757d]">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données personnelles contre tout accès non autorisé, modification,
              divulgation ou destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">
              11. Modifications de la politique
            </h2>
            <p className="text-[#6c757d]">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
              Les modifications prendront effet dès leur publication sur cette page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">12. Contact</h2>
            <p className="text-[#6c757d]">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits,
              contactez-nous :
            </p>
            <p className="text-[#6c757d] mt-4">
              <strong>Email :</strong>
              <a href="mailto:contact@detatouage-laser.fr" className="text-[#0077b6] hover:underline ml-1">
                contact@detatouage-laser.fr
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">
              13. Réclamation
            </h2>
            <p className="text-[#6c757d]">
              Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire
              une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
            </p>
            <p className="text-[#6c757d] mt-4">
              <strong>CNIL</strong><br />
              3 Place de Fontenoy<br />
              TSA 80715<br />
              75334 PARIS CEDEX 07<br />
              Téléphone : 01 53 73 22 22<br />
              Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#0077b6] hover:underline">www.cnil.fr</a>
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
