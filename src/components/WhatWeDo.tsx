import { Code, Palette, Smartphone, Cloud, TrendingUp, Shield } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies for scalability and performance.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that create memorable user experiences.",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile apps that engage users on any device.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions that grow with your business needs.",
    },
    {
      icon: TrendingUp,
      title: "Digital Strategy",
      description: "Data-driven strategies to optimize your digital presence and ROI.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures to protect your digital assets.",
    },
  ];

  return (
    <section id="what-we-do" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              We offer comprehensive digital services to help your business thrive in the modern landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl border-2 border-border hover:border-primary smooth-transition bg-card hover:shadow-xl animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
