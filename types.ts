import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlight: boolean;
  cta: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}