import { DollarSign, Users, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const IntegratedApproach = () => {
  const approaches = [
    {
      icon: DollarSign,
      title: "Capital Raising",
      description: "We align with stakeholders and structure deals to connect climate-focused ventures to raised capital.",
    },
    {
      icon: Users,
      title: "Advisory Services",
      description: "We accompany on development strategy to plan for impact and action steps to make each investors meeting.",
    },
    {
      icon: Target,
      title: "Impact Management",
      description: "We work alongside you to develop gender-responsive approaches and data-driven outcomes and opportunities.",
    },
    {
      icon: TrendingUp,
      title: "Capacity Development",
      description: "We deliver organizational and leadership skills enhancement to accelerate programs, fund management.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
          Our Integrated Approach to Impact
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          We partner with ventures across Africa's innovation ecosystem to scale that value
          proposition, all through the gender-smart integrations, with social change that cultivates
          investment for impact
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {approaches.map((approach) => (
            <Card key={approach.title} className="p-6 hover:shadow-lg smooth-transition">
              <div className="w-12 h-12 rounded-lg bg-sage/20 flex items-center justify-center mb-4">
                <approach.icon className="text-sage" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{approach.title}</h3>
              <p className="text-sm text-muted-foreground">{approach.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-primary hover:underline font-medium">
            Explore Our Services →
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegratedApproach;
