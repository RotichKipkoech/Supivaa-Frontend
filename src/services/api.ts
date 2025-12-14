import { API_BASE_URL, API_ENDPOINTS } from '@/config/api';
import type { 
  CMSPage, 
  CMSSetting,
  APIResponse,
} from '@/types/cms';

// Generic fetch wrapper
async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
}

// Pages API
export const pagesAPI = {
  getAll: () => fetchAPI<APIResponse<CMSPage[]>>(API_ENDPOINTS.pages),
  getBySlug: (slug: string) => fetchAPI<APIResponse<CMSPage>>(API_ENDPOINTS.page(slug)),
};

// Settings API
export const settingsAPI = {
  getAll: () => fetchAPI<APIResponse<CMSSetting[]>>(API_ENDPOINTS.settings),
  getAnalytics: () => fetchAPI<APIResponse<Record<string, unknown>>>(API_ENDPOINTS.analytics),
};
