import { usePage } from './useCMS';
import type { CMSSection } from '@/types/cms';

export const usePageSection = (pageSlug: string, sectionSlug: string) => {
  const { data, isLoading, error } = usePage(pageSlug);
  
  const section = data?.data?.sections?.find(
    (s: CMSSection) => s.slug === sectionSlug
  );
  
  return {
    section,
    isLoading,
    error,
  };
};

export const usePageSections = (pageSlug: string) => {
  const { data, isLoading, error } = usePage(pageSlug);
  
  const getSectionBySlug = (sectionSlug: string): CMSSection | undefined => {
    return data?.data?.sections?.find(
      (s: CMSSection) => s.slug === sectionSlug
    );
  };
  
  return {
    sections: data?.data?.sections || [],
    getSectionBySlug,
    isLoading,
    error,
    page: data?.data,
  };
};
