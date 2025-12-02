import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary/80">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          Are You Investor-Ready?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Does your gender-climate strategy meet key funder metrics? Take our free diagnostic to get an instant benchmark and actionable next steps.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Start Your Free Diagnostic →
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
