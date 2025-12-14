import { DollarSign, Users, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { usePageSection } from "@/hooks/usePageSection";
import React from "react";

const iconMap: Record<string, unknown> = {
  DollarSign,
  Users,
  Target,
  TrendingUp,
};

const IntegratedApproach = () => {
  const { section, isLoading } = usePageSection("home", "integrated-approach");

  const fallbackApproaches = [
    {
      icon: "DollarSign",
      title: "Capital Raising",
      description:
        "We align with stakeholders and structure deals to connect climate-focused ventures to raised capital.",
    },
    {
      icon: "Users",
      title: "Advisory Services",
      description:
        "We accompany on development strategy to plan for impact and action steps to make each investors meeting.",
    },
    {
      icon: "Target",
      title: "Impact Management",
      description:
        "We work alongside you to develop gender-responsive approaches and data-driven outcomes and opportunities.",
    },
    {
      icon: "TrendingUp",
      title: "Capacity Development",
      description:
        "We deliver organizational and leadership skills enhancement to accelerate programs, fund management.",
    },
  ];

  const title =
    section?.title || "Our Integrated Approach to Impact";

  const subtitle =
    section?.subtitle ||
    "We partner with ventures across Africa's innovation ecosystem to scale that value proposition, all through the gender-smart integrations, with social change that cultivates investment for impact";

  const approaches =
    section?.items?.length ? section.items : fallbackApproaches;

  if (isLoading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="h-10 bg-muted animate-pulse rounded w-96 mx-auto mb-4" />
          <div className="h-6 bg-muted animate-pulse rounded w-[600px] mx-auto mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-48 bg-muted animate-pulse rounded" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
          {title}
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          {subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {approaches.map((approach: unknown, index: number) => {
            // Safe cast for unknown data
            const item = approach as {
              icon?: string;
              title?: string;
              description?: string;
            };

            const IconComponent =
              (iconMap[item.icon || ""] as React.ElementType) ||
              DollarSign;

            return (
              <Card
                key={item.title || index}
                className="p-6 hover:shadow-lg smooth-transition"
              >
                <div className="w-12 h-12 rounded-lg bg-sage/20 flex items-center justify-center mb-4">
                  <IconComponent className="text-sage" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            );
          })}
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
