import { Button } from "@/components/ui/button";
import { usePage } from "@/hooks/useCMS";
import { Skeleton } from "@/components/ui/skeleton";

interface HeroProps {
  pageSlug?: string;
}

const Hero = ({ pageSlug = "home" }: HeroProps) => {
  const { data: pageData, isLoading, error } = usePage(pageSlug);
  
  // Find the hero section from the page data
  const heroSection = pageData?.data?.sections?.find(
    (section) => section.slug === "hero" || section.name?.toLowerCase().includes("hero")
  );

  // Fallback content if CMS data not available
  const title = heroSection?.title || "Powering Africa's Gender-Forward Future";
  const subtitle = heroSection?.subtitle || "We coach our clients to move from being gender accidental to gender-intentional to gender champions.";
  const backgroundImage = heroSection?.background_image || "https://images.unsplash.com/photo-1522071820081-009f0129c71c";
  
  // Get CTA buttons from section items
  const ctaButtons = heroSection?.items || [];

  if (isLoading) {
    return (
      <section id="home" className="relative pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="relative rounded-3xl overflow-hidden bg-charcoal min-h-[500px] md:min-h-[600px] p-8 md:p-16">
            <Skeleton className="h-16 w-3/4 mb-6 bg-white/20" />
            <Skeleton className="h-8 w-2/3 mb-8 bg-white/20" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-40 bg-white/20" />
              <Skeleton className="h-12 w-40 bg-white/20" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-charcoal to-charcoal/90 min-h-[500px] md:min-h-[600px]">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40" 
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {ctaButtons.length > 0 ? (
                ctaButtons.map((item, index) => (
                  <Button
                    key={item.id}
                    size="lg"
                    variant={index === 0 ? "default" : "outline"}
                    className={index === 0 
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "border-2 border-white text-white hover:bg-white hover:text-charcoal"
                    }
                    asChild={!!item.link}
                  >
                    {item.link ? (
                      <a href={item.link}>{item.title}</a>
                    ) : (
                      <span>{item.title}</span>
                    )}
                  </Button>
                ))
              ) : (
                <>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Ventures & SMEs
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-charcoal">
                    Funders & Partners
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
