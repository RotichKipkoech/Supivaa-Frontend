import { useQuery } from '@tanstack/react-query';
import { pagesAPI, settingsAPI } from '@/services/api';

// Pages hooks
export const usePages = () => {
  return useQuery({
    queryKey: ['pages'],
    queryFn: pagesAPI.getAll,
  });
};

export const usePage = (slug: string) => {
  return useQuery({
    queryKey: ['page', slug],
    queryFn: () => pagesAPI.getBySlug(slug),
    enabled: !!slug,
  });
};

// Settings hooks
export const useSettings = () => {
  return useQuery({
    queryKey: ['settings'],
    queryFn: settingsAPI.getAll,
  });
};

export const useAnalytics = () => {
  return useQuery({
    queryKey: ['analytics'],
    queryFn: settingsAPI.getAnalytics,
  });
};
