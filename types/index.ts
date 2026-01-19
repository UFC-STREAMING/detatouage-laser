export interface City {
  id: string;
  name: string;
  slug: string;
  postalCode: string;
  department: {
    name: string;
    number: string;
    slug: string;
  };
  population?: number;
  proximity?: string[];
}

export interface Department {
  name: string;
  number: string;
  slug: string;
  cities: City[];
}

export interface QuoteFormData {
  bodyZone: string;
  tattooColor: string;
  tattooSize: string;
  postalCode: string;
  photos?: File[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
  consent: boolean;
}
