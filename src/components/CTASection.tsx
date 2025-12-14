import { Button } from "@/components/ui/button";
import { usePageSection } from "@/hooks/usePageSection";

const CTASection = () => {
  const { section, isLoading } = usePageSection("home", "cta");

  const fallbackContent = {
    title: "Are You Investor-Ready?",
    subtitle:
      "Does your gender-climate strategy meet key funder metrics? Take our free diagnostic to get an instant benchmark and actionable next steps.",
    buttons: [
      { label: "Start Your Free Diagnostic →", variant: "primary" },
      { label: "Book a Consultation", variant: "outline" },
    ],
  };

  const title = section?.title || fallbackContent.title;
  const subtitle = section?.subtitle || fallbackContent.subtitle;
  const buttons = section?.items?.length ? section.items : fallbackContent.buttons;

  if (isLoading) {
    return (
      <section className="py-20 bg-primary/80">
        <div className="container mx-auto px-4 text-center">
          <div className="h-10 bg-white/20 animate-pulse rounded w-72 mx-auto mb-4" />
          <div className="h-6 bg-white/20 animate-pulse rounded w-[500px] mx-auto mb-8" />
          <div className="flex justify-center gap-4">
            <div className="h-12 bg-white/20 animate-pulse rounded w-48" />
            <div className="h-12 bg-white/20 animate-pulse rounded w-48" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-primary/80">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((btn: unknown, index: number) => {
            // Assert the shape of the button object
            const button = btn as { label?: string; title?: string; variant?: string };

            return (
              <Button
                key={index}
                size="lg"
                variant={button.variant === "outline" ? "outline" : "default"}
                className={
                  button.variant === "outline"
                    ? "border-2 border-white text-white hover:bg-white hover:text-primary"
                    : "bg-white text-primary hover:bg-white/90"
                }
              >
                {button.label || button.title}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
