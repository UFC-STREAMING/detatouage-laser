export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatPostalCode(code: string): string {
  return code.replace(/(\d{2})(\d{3})/, "$1 $2");
}

export function getDepartmentNumber(postalCode: string): string {
  return postalCode.substring(0, 2);
}
