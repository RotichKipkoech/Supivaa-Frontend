import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePageSection } from "@/hooks/usePageSection";

const Partners = () => {
  const { section, isLoading } = usePageSection("home", "partners");

  // Fallback data
  const fallbackPartners = [
    { name: "African Guarantee Fund", logo: "AFRICAN GUARANTEE FUND" },
    { name: "MEDA", logo: "MEDA" },
    { name: "DARLEY", logo: "DARLEY" },
    { name: "CHECKUPS COVA", logo: "CHECKUPS COVA" },
  ];

  const title =
    section?.title || "TRUSTED BY INDUSTRY LEADERS AND ECOSYSTEM BUILDERS";

  const partners = section?.items?.length ? section.items : fallbackPartners;

  if (isLoading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="h-6 bg-muted animate-pulse rounded w-96 mx-auto mb-12" />
          <div className="flex justify-center gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 bg-muted animate-pulse rounded w-32" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm tracking-widest mb-12">
          {title}
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="p-2 text-terracotta hover:text-terracotta/80 transition-colors">
            <ChevronLeft size={24} />
          </button>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {partners.map((partner: unknown, index: number) => {
              // Assert the shape of partner
              const item = partner as { name?: string; title?: string; logo?: string };

              return (
                <div
                  key={item.name || index}
                  className="text-muted-foreground/50 font-semibold text-lg hover:text-muted-foreground transition-colors"
                >
                  {item.logo || item.title || item.name}
                </div>
              );
            })}
          </div>

          <button className="p-2 text-terracotta hover:text-terracotta/80 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
