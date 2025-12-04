import { ChevronLeft, ChevronRight } from "lucide-react";

const Partners = () => {
  const partners = [
    { name: "African Guarantee Fund", logo: "AFRICAN GUARANTEE FUND" },
    { name: "MEDA", logo: "MEDA" },
    { name: "DARLEY", logo: "DARLEY" },
    { name: "CHECKUPS COVA", logo: "CHECKUPS COVA" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm tracking-widest mb-12">
          TRUSTED BY INDUSTRY LEADERS AND ECOSYSTEM BUILDERS
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="p-2 text-terracotta hover:text-terracotta/80 transition-colors">
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="text-muted-foreground/50 font-semibold text-lg hover:text-muted-foreground transition-colors"
              >
                {partner.logo}
              </div>
            ))}
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
