import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Users } from "lucide-react";
import WhoWeAreHero from "@/components/WhoWeAreHero";
import WhoWeAreCTA from "@/components/WhoWeAreCTA";
import { usePageSections } from "@/hooks/usePageSection";
import React from "react";

// Icon map
const iconMap: Record<string, unknown> = {
  Target,
  Eye,
  Lightbulb,
  Users,
};

const WhoWeAre: React.FC = () => {
  const { getSectionBySlug } = usePageSections("who-we-are");

  // Fallback data
  const fallbackTeamMembers: unknown[] = [
    { name: "Ayomide Oloja", role: "Managing Partner", category: "Management & Governance", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
    { name: "Jane Doe", role: "Senior Advisor", category: "Management & Governance", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" },
    { name: "John Smith", role: "Partner", category: "Management & Governance", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
    { name: "Sarah Johnson", role: "Director", category: "Management & Governance", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" },
    { name: "Michael Brown", role: "Lead Consultant", category: "Consultants, Analysts & Associates", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
  ];

  const fallbackValues: unknown[] = [
    { icon: "Target", title: "Expertise", description: "Years of deep experience in gender lens investing and climate finance." },
    { icon: "Eye", title: "Partnership-led Approach", description: "We believe in collaboration and co-creating solutions with our clients." },
    { icon: "Lightbulb", title: "Local Expertise", description: "Rooted in Africa with a deep understanding of local contexts and challenges." },
    { icon: "Users", title: "Impact-Oriented", description: "Every engagement is designed to create measurable social and environmental impact." },
  ];

  const fallbackPartners: unknown[] = ["AfricInvest", "MEDA", "GAFID", "DABLEY", "COVA", "Africa Map", "Climate Finance", "Impact Fund"];

  // CMS Sections
  const storySection = getSectionBySlug("our-story");
  const missionSection = getSectionBySlug("mission");
  const visionSection = getSectionBySlug("vision");
  const valuesSection = getSectionBySlug("values");
  const teamSection = getSectionBySlug("team");
  const partnersSection = getSectionBySlug("partners");

  const storyContent =
    storySection?.content ||
    `Supivaa was founded on a mission to bridge gaps in capital access for women-led and climate-focused ventures across Africa...`;

  // Use unknown
  const values: unknown[] = valuesSection?.items?.length ? valuesSection.items : fallbackValues;
  const teamMembers: unknown[] = teamSection?.items?.length ? teamSection.items : fallbackTeamMembers;
  const partners: unknown[] = partnersSection?.items?.length ? partnersSection.items : fallbackPartners;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <WhoWeAreHero />

        {/* Our Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  {storySection?.title || "Our Story"}
                </h2>
                {storyContent.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={storySection?.media?.url || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"}
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{missionSection?.title || "Our Mission"}</h3>
                <p className="text-muted-foreground">
                  {missionSection?.subtitle || "To bridge the gap in execution and access to sustainable climate capital for women-led enterprises through innovative, gender-responsive frameworks."}
                </p>
              </Card>

              <Card className="p-8">
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                  <Eye className="text-sage" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{visionSection?.title || "Our Vision"}</h3>
                <p className="text-muted-foreground">
                  {visionSection?.subtitle || "A future where African ventures and fund managers lead in climate action, supported by gender-smart capital and robust implementation strategies."}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* What Guides Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
              {valuesSection?.title || "What Guides Us"}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              {valuesSection?.subtitle || "Our work is driven by core values that ensure we deliver meaningful, lasting impact."}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((item, index) => {
                const valueItem = item as { icon?: string; title?: string; description?: string };
                const IconComponent = iconMap[valueItem.icon || "Target"] as unknown as React.ComponentType<{ size?: number; className?: string }>;
                return (
                  <Card key={valueItem.title || index} className="p-6 text-center hover:shadow-lg smooth-transition">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{valueItem.title}</h3>
                    <p className="text-sm text-muted-foreground">{valueItem.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20 bg-sage/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
              {teamSection?.title || "Meet Our Team"}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              {teamSection?.subtitle || "A collective of advisors and associates helping ventures and fund managers scale."}
            </p>

            <div className="max-w-6xl mx-auto">
              {["Management & Governance", "Consultants, Analysts & Associates"].map((category) => (
                <React.Fragment key={category}>
                  <h3 className="text-xl font-semibold mb-6">{category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {teamMembers
                      .filter((m) => (m as unknown as { category?: string }).category === category)
                      .map((member, index) => {
                        const m = member as { name?: string; title?: string; role?: string; description?: string; category?: string; image?: string; media?: { url?: string } };
                        return (
                          <Card key={m.name || m.title || index} className="overflow-hidden hover:shadow-lg smooth-transition">
                            <div className="h-64 overflow-hidden">
                              <img
                                src={m.image || m.media?.url}
                                alt={m.name || m.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="font-semibold">{m.name || m.title}</h4>
                              <p className="text-sm text-muted-foreground">{m.role || m.description}</p>
                            </div>
                          </Card>
                        );
                      })}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Our Network & Partners */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              {partnersSection?.title || "Our Network & Partners"}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              {partnersSection?.subtitle || "We collaborate with leading organizations across the impact ecosystem."}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {partners.map((partner, index) => {
                const p = typeof partner === "string" ? { name: partner } : (partner as { name?: string; title?: string });
                return (
                  <div
                    key={p.name || `partner-${index}`}
                    className="flex items-center justify-center p-6 bg-muted/30 rounded-lg hover:shadow-md smooth-transition"
                  >
                    <span className="text-muted-foreground font-semibold">{p.name || p.title || `Partner ${index}`}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <WhoWeAreCTA />
      </main>
      <Footer />
    </div>
  );
};

export default WhoWeAre;
