// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export const API_ENDPOINTS = {
  // Public API (v1 prefix)
  pages: '/v1/pages',
  page: (slug: string) => `/v1/pages/${slug}`,
  settings: '/v1/settings',
  analytics: '/v1/settings/analytics',
};
