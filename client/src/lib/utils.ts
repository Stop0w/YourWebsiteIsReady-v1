import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCategoryColor(category: string) {
  switch (category) {
    case 'golfclub':
      return {
        primary: 'green-600',
        light: 'green-50',
        border: 'green-200',
        text: 'green-800'
      };
    case 'tradesman':
      return {
        primary: 'red-600',
        light: 'red-50',
        border: 'red-200',
        text: 'red-800'
      };
    default:
      return {
        primary: 'slate-600',
        light: 'slate-50',
        border: 'slate-200',
        text: 'slate-800'
      };
  }
}

export function formatPrice(price: number, interval: string) {
  return `$${price}${interval === 'monthly' ? '/month' : interval === 'yearly' ? '/year' : ''}`;
}

export function generateTemplateUrl(businessSlug: string, templateNumber: number) {
  return `/${businessSlug}/website-${templateNumber}`;
}

export function generateBusinessUrl(businessSlug: string) {
  return `/${businessSlug}`;
}

export function generateServicesUrl(businessSlug: string) {
  return `/${businessSlug}/services`;
}
