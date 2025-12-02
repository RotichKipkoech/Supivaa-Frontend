import { Target, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhoWeAre = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering solutions that align with your business goals and exceed expectations.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We work closely with you every step of the way.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of the curve, bringing cutting-edge technology to solve your challenges.",
    },
  ];

  return (
    <section id="who-we-are" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Supivaa is a team of passionate innovators, designers, and developers dedicated to 
              crafting digital experiences that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary smooth-transition hover:shadow-lg bg-card animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-serif font-bold text-charcoal">
                  Our Story
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Founded with a vision to bridge the gap between technology and business, 
                  Supivaa has grown into a trusted partner for organizations seeking digital transformation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in the power of collaboration, innovation, and excellence. 
                  Every project is an opportunity to create something remarkable.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl h-64 md:h-80 flex items-center justify-center">
                <p className="text-6xl font-serif font-bold text-primary/30">10+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
