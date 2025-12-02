import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Users } from "lucide-react";
import WhoWeAreHero from "@/components/WhoWeAreHero";
import WhoWeAreCTA from "@/components/WhoWeAreCTA";

const WhoWeAre = () => {
  const teamMembers = [
    {
      name: "Ayomide Oloja",
      role: "Managing Partner",
      category: "Management & Governance",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    },
    {
      name: "Jane Doe",
      role: "Senior Advisor",
      category: "Management & Governance",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    },
    {
      name: "John Smith",
      role: "Partner",
      category: "Management & Governance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
      name: "Sarah Johnson",
      role: "Director",
      category: "Management & Governance",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
    {
      name: "Michael Brown",
      role: "Lead Consultant",
      category: "Consultants, Analysts & Associates",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Expertise",
      description: "Years of deep experience in gender lens investing and climate finance.",
    },
    {
      icon: Eye,
      title: "Partnership-led Approach",
      description: "We believe in collaboration and co-creating solutions with our clients.",
    },
    {
      icon: Lightbulb,
      title: "Local Expertise",
      description: "Rooted in Africa with a deep understanding of local contexts and challenges.",
    },
    {
      icon: Users,
      title: "Impact-Oriented",
      description: "Every engagement is designed to create measurable social and environmental impact.",
    },
  ];

  const partners = [
    "AfricInvest", "MEDA", "GAFID", "DABLEY", "COVA", "Africa Map",
    "Climate Finance", "Impact Fund",
  ];

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
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-4">
                  Supivaa was founded on a mission to bridge gaps in capital access for women-led and climate-focused ventures across Africa. Our founder, having worked extensively in impact investing, recognized that many promising ventures lacked the operational readiness and investor connections to scale.
                </p>
                <p className="text-muted-foreground mb-4">
                  We established Supivaa to provide hands-on support—building financial models, strengthening governance structures, and crafting investor pitches that resonate. Our story is one of collaboration. We've grown from a solo consultancy to a team of experts working alongside fund managers, development partners, and enterprises across multiple sectors.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to contribute to the mobilization of climate and gender-smart capital across Africa, creating lasting impact in communities that need it most.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
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
                <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To bridge the gap in execution and access to sustainable climate capital for women-led enterprises through innovative, gender-responsive frameworks.
                </p>
              </Card>
              
              <Card className="p-8">
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                  <Eye className="text-sage" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Our Value</h3>
                <p className="text-muted-foreground">
                  A future where African ventures and fund managers lead in climate action, supported by gender-smart capital and robust implementation strategies.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* What Guides Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
              What Guides Us
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Our work is driven by core values that ensure we deliver meaningful, lasting impact.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value) => (
                <Card key={value.title} className="p-6 text-center hover:shadow-lg smooth-transition">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20 bg-sage/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
              Meet Our Team
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              A collective of advisors and associates helping ventures and fund managers scale.
            </p>

            <div className="max-w-6xl mx-auto">
              <h3 className="text-xl font-semibold mb-6">Management & Governance</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {teamMembers.filter(m => m.category === "Management & Governance").map((member) => (
                  <Card key={member.name} className="overflow-hidden hover:shadow-lg smooth-transition">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-6">Consultants, Analysts & Associates</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.filter(m => m.category === "Consultants, Analysts & Associates").map((member) => (
                  <Card key={member.name} className="overflow-hidden hover:shadow-lg smooth-transition">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Network & Partners */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              Our Network & Partners
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              We collaborate with leading organizations across the impact ecosystem.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="flex items-center justify-center p-6 bg-muted/30 rounded-lg hover:shadow-md smooth-transition"
                >
                  <span className="text-muted-foreground font-semibold">{partner}</span>
                </div>
              ))}
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
