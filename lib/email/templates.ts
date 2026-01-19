import { QuoteFormData } from "@/lib/validation/quote-schema";

export function generateLeadEmailHTML(data: QuoteFormData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouvelle demande de devis</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f8f9fa;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #0077b6;
      color: #ffffff;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 30px;
      text-align: center;
    }
    h1 {
      margin: 0;
      font-size: 24px;
    }
    .section {
      margin-bottom: 25px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e9ecef;
    }
    .section:last-child {
      border-bottom: none;
    }
    .section-title {
      color: #0077b6;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    .field {
      margin-bottom: 12px;
    }
    .field-label {
      font-weight: 600;
      color: #6c757d;
      display: inline-block;
      min-width: 150px;
    }
    .field-value {
      color: #333;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      color: #6c757d;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 Nouvelle demande de devis</h1>
    </div>

    <div class="section">
      <div class="section-title">👤 Informations du contact</div>
      <div class="field">
        <span class="field-label">Nom complet:</span>
        <span class="field-value">${data.firstName} ${data.lastName}</span>
      </div>
      <div class="field">
        <span class="field-label">Email:</span>
        <span class="field-value"><a href="mailto:${data.email}">${data.email}</a></span>
      </div>
      <div class="field">
        <span class="field-label">Téléphone:</span>
        <span class="field-value"><a href="tel:${data.phone}">${data.phone}</a></span>
      </div>
      <div class="field">
        <span class="field-label">Code postal:</span>
        <span class="field-value">${data.postalCode}</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">🎨 Informations sur le tatouage</div>
      <div class="field">
        <span class="field-label">Zone du corps:</span>
        <span class="field-value">${data.bodyZone}</span>
      </div>
      <div class="field">
        <span class="field-label">Couleur:</span>
        <span class="field-value">${data.tattooColor}</span>
      </div>
      <div class="field">
        <span class="field-label">Taille:</span>
        <span class="field-value">${data.tattooSize}</span>
      </div>
      ${
        data.message
          ? `
      <div class="field">
        <span class="field-label">Message:</span>
        <div class="field-value" style="margin-top: 8px; padding: 12px; background-color: #f8f9fa; border-radius: 4px;">
          ${data.message.replace(/\n/g, "<br>")}
        </div>
      </div>
      `
          : ""
      }
    </div>

    <div class="footer">
      <p>Cette demande a été envoyée depuis le site web Détatouage Laser</p>
      <p>Date: ${new Date().toLocaleString("fr-FR", {
        dateStyle: "full",
        timeStyle: "short",
      })}</p>
    </div>
  </div>
</body>
</html>
  `;
}

export function generateLeadEmailText(data: QuoteFormData): string {
  return `
NOUVELLE DEMANDE DE DEVIS
========================

INFORMATIONS DU CONTACT
-----------------------
Nom: ${data.firstName} ${data.lastName}
Email: ${data.email}
Téléphone: ${data.phone}
Code postal: ${data.postalCode}

INFORMATIONS SUR LE TATOUAGE
----------------------------
Zone du corps: ${data.bodyZone}
Couleur: ${data.tattooColor}
Taille: ${data.tattooSize}
${data.message ? `\nMessage:\n${data.message}` : ""}

Date: ${new Date().toLocaleString("fr-FR")}
  `;
}
