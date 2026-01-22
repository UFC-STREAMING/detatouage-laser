/**
 * Retourne l'article approprié pour un département français
 * @param departmentName - Le nom du département
 * @returns L'article correct (le, la, l', ou les)
 */
export function getDepartmentArticle(departmentName: string): string {
  // Départements féminins commençant par une consonne
  const feminineConsonant = [
    "Somme",
    "Seine-Maritime",
    "Seine-Saint-Denis",
    "Savoie",
    "Haute-Savoie",
    "Loire",
    "Loire-Atlantique",
    "Haute-Loire",
    "Marne",
    "Haute-Marne",
    "Manche",
    "Mayenne",
    "Meurthe-et-Moselle",
    "Meuse",
    "Moselle",
    "Nièvre",
    "Sarthe",
    "Saône-et-Loire",
    "Haute-Saône",
    "Seine-et-Marne",
    "Vendée",
    "Vienne",
    "Haute-Vienne",
    "Charente",
    "Charente-Maritime",
    "Corrèze",
    "Creuse",
    "Dordogne",
    "Drôme",
    "Gironde",
    "Haute-Garonne",
    "Lozère",
    "Manche",
    "Réunion",
  ];

  // Départements féminins commençant par une voyelle (utilise l')
  const feminineVowel = [
    "Aisne",
    "Allier",
    "Ardèche",
    "Ariège",
    "Aube",
    "Aude",
    "Aveyron", // masculin mais commence par voyelle
    "Essonne",
    "Eure",
    "Eure-et-Loir",
    "Indre",
    "Indre-et-Loire",
    "Isère",
    "Oise",
    "Orne",
    "Haute-Corse",
    "Corse-du-Sud",
  ];

  // Départements masculins commençant par une voyelle (utilise l')
  const masculineVowel = [
    "Aveyron",
    "Hérault",
  ];

  // Départements avec "les" (pluriel)
  const plural = [
    "Alpes-de-Haute-Provence",
    "Hautes-Alpes",
    "Alpes-Maritimes",
    "Ardennes",
    "Bouches-du-Rhône",
    "Côtes-d'Armor",
    "Deux-Sèvres",
    "Landes",
    "Pyrénées-Atlantiques",
    "Hautes-Pyrénées",
    "Pyrénées-Orientales",
    "Vosges",
    "Yvelines",
  ];

  // Vérifier si c'est un département avec article pluriel
  if (plural.includes(departmentName)) {
    return "les";
  }

  // Vérifier si commence par une voyelle
  const firstChar = departmentName[0].toLowerCase();
  const isVowel = ["a", "e", "i", "o", "u", "é", "è", "ê"].includes(firstChar);

  if (isVowel) {
    // Tous les départements commençant par une voyelle utilisent l'
    return "l'";
  }

  // Départements féminins avec consonne
  if (feminineConsonant.includes(departmentName)) {
    return "la";
  }

  // Par défaut, article masculin
  return "le";
}

/**
 * Retourne le texte complet avec l'article approprié
 * @param departmentName - Le nom du département
 * @returns Le texte avec l'article (ex: "dans le Nord", "dans la Somme", "dans l'Essonne")
 */
export function getDepartmentWithArticle(departmentName: string): string {
  const article = getDepartmentArticle(departmentName);
  return `${article} ${departmentName}`;
}

/**
 * Retourne le texte avec préposition et article
 * @param departmentName - Le nom du département
 * @param preposition - La préposition à utiliser (default: "dans")
 * @returns Le texte complet (ex: "dans le Nord", "dans la Somme")
 */
export function getDepartmentWithPreposition(
  departmentName: string,
  preposition: string = "dans"
): string {
  const article = getDepartmentArticle(departmentName);
  return `${preposition} ${article} ${departmentName}`;
}
