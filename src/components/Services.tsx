import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const packages = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses and startups",
      features: [
        "Responsive Website Design",
        "5 Pages",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month Support",
      ],
    },
    {
      name: "Professional",
      price: "$7,999",
      description: "Ideal for growing businesses",
      features: [
        "Custom Web Application",
        "15 Pages",
        "Advanced SEO & Analytics",
        "CMS Integration",
        "E-commerce Ready",
        "3 Months Support",
        "Performance Optimization",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale projects",
      features: [
        "Full-Stack Development",
        "Unlimited Pages",
        "Custom Integrations",
        "Advanced Security",
        "Dedicated Team",
        "12 Months Support",
        "Cloud Infrastructure",
        "24/7 Monitoring",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-charcoal text-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Services
            </h2>
            <p className="text-xl text-cream/80 max-w-3xl mx-auto text-balance">
              Choose the perfect package for your needs, or let's build a custom solution together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 smooth-transition animate-in fade-in slide-in-from-bottom-4 ${
                  pkg.featured
                    ? "border-primary bg-primary/5 scale-105 shadow-2xl"
                    : "border-cream/20 hover:border-primary/50 bg-charcoal/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.featured && (
                  <div className="text-primary text-sm font-bold mb-2">MOST POPULAR</div>
                )}
                <h3 className="text-2xl font-serif font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-2 text-primary">{pkg.price}</div>
                <p className="text-cream/70 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-sage flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-cream/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    pkg.featured
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-cream text-charcoal hover:bg-cream/90"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
