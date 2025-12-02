import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-charcoal to-charcoal/90 min-h-[500px] md:min-h-[600px]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center opacity-40" />
          
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Powering Africa's Gender-Forward Future
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              We coach our clients to move from being gender accidental to gender-intentional to gender champions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Ventures & SMEs
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-charcoal">
                Funders & Partners
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
