// CMS Types - Based on Laravel API structure

export interface CMSMedia {
  id: number;
  url: string;
  name?: string;
  type?: string;
}

export interface CMSSection {
  id: number;
  page_id: number;
  name: string;
  slug: string;
  title?: string;
  subtitle?: string;
  content?: string;
  background_color?: string;
  background_image?: string;
  order: number;
  is_active: boolean;
  items?: CMSSectionItem[];
  media?: CMSMedia;
  created_at: string;
  updated_at: string;
}

export interface CMSSectionItem {
  id: number;
  section_id: number;
  title?: string;
  subtitle?: string;
  description?: string;
  content?: string;
  image?: string;
  icon?: string;
  link?: string;
  order: number;
  data?: Record<string, unknown>;
  // Dynamic fields that may come from CMS
  value?: string;
  label?: string;
  name?: string;
  role?: string;
  category?: string;
  variant?: string;
  number?: string;
  media?: CMSMedia;
  created_at?: string;
  updated_at?: string;
}

export interface CMSPage {
  id: number;
  title: string;
  slug: string;
  meta_title?: string;
  meta_description?: string;
  featured_image?: string;
  status?: 'published' | 'draft';
  sections?: CMSSection[];
  created_at?: string;
  updated_at?: string;
}

export interface CMSSetting {
  id: number;
  key: string;
  value: string | Record<string, unknown>;
  type: 'text' | 'json' | 'boolean' | 'number';
  group?: string;
  created_at: string;
  updated_at: string;
}

// API Response wrapper
export interface APIResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}
