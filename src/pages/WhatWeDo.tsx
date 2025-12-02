import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building2, Key, Target } from "lucide-react";
import WhatWeDoCTA from "@/components/WhatWeDoCTA";

const WhatWeDo = () => {
  const services = [
    {
      icon: Users,
      title: "For Ventures & SMEs",
      description: "Investment readiness, gender-smart strategies, and capital connections for feminal enterprises and women-led businesses seeking to scale their impact.",
      link: "Learn More →",
    },
    {
      icon: Building2,
      title: "For Funders & Partners",
      description: "Gender-lens investing frameworks, due diligence support, and portfolio impact measurement for investors and development partners.",
      link: "Learn More →",
    },
  ];

  const ourServices = [
    {
      icon: Key,
      title: "Our Services",
      description: "Comprehensive consulting services from strategy development to implementation support, capacity building, and impact measurement.",
      link: "Learn More →",
    },
    {
      icon: Target,
      title: "Our Focus Areas",
      description: "Specialized expertise at the intersection of gender-lens investing and climate action across key sectors in Africa.",
      link: "Learn More →",
    },
  ];

  const approach = [
    {
      number: "01",
      title: "Listen & Understand",
      description: "We start by closely understanding your context, challenges, and aspirations.",
    },
    {
      number: "02",
      title: "Co-Create Solutions",
      description: "We work alongside you to develop strategies that are practical and achievable.",
    },
    {
      number: "03",
      title: "Build Capacity",
      description: "We transfer knowledge and skills so you can sustain impact beyond our engagement.",
    },
    {
      number: "04",
      title: "Measure & Adapt",
      description: "We track progress, measure outcomes, and adapt strategies based on feedback.",
    },
  ];

  const differentiators = [
    {
      title: "Africa-Rooted Expertise",
      description: "We understand African markets, gender dynamics, and climate realities because we're on the ground here.",
    },
    {
      title: "Gender-Climate Nexus Focus",
      description: "We specialize in the intersection of gender-smart investing and climate action—a critical but underserved space.",
    },
    {
      title: "Implementation Support",
      description: "We stay with you beyond strategy development to ensure execution and measured impact.",
    },
    {
      title: "Evidence-Based Methods",
      description: "We use proven frameworks (2X Global, IRIS+) while adapting to local contexts.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-warm-beige/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  What We Do
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  We bridge the gap between gender-smart strategy and execution, helping female enterprises access capital and enabling Fund Managers and Programme Partners to maximize their gender-climate impact across Africa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    For Ventures & SMEs
                  </Button>
                  <Button size="lg" variant="outline">
                    For Funders & Partners
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600"
                  alt="What We Do"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
              Who We Serve
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              We work with ventures, funders, and partners across the gender-climate ecosystem.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service) => (
                <Card key={service.title} className="p-8 hover:shadow-xl smooth-transition">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <a href="#" className="text-primary hover:underline font-medium">
                    {service.link}
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Focus Areas */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {ourServices.map((service) => (
                <Card key={service.title} className="p-8 hover:shadow-xl smooth-transition">
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-6">
                    <service.icon className="text-sage" size={24} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <a href="#" className="text-primary hover:underline font-medium">
                    {service.link}
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
              Our Approach
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              We partner with you from strategy to execution.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {approach.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="text-6xl font-serif text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-warm-beige/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                  What Makes Us Different
                </h2>
                <div className="space-y-6">
                  {differentiators.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                  alt="What Makes Us Different"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <WhatWeDoCTA />
      </main>
      <Footer />
    </div>
  );
};

export default WhatWeDo;
