export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  id?: string;
  errors?: Record<string, string>;
}

export interface NavLink {
  label: string;
  href: string;
}
