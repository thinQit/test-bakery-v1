export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  dietary?: string[];
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface Testimonial {
  name: string;
  title?: string;
  quote: string;
  location?: string;
}

export interface OrderCatalogItem {
  sku: string;
  name: string;
  price: number;
  category: string;
}

export interface OrderLineItem {
  sku: string;
  quantity: number;
}

export interface PickupOrderPayload {
  fullName: string;
  phone: string;
  email: string;
  pickupDate: string;
  pickupTime: string;
  items: OrderLineItem[];
  slicing?: boolean;
  notes?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
}
