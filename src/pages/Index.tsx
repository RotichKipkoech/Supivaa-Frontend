import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import GapSection from "@/components/GapSection";
import IntegratedApproach from "@/components/IntegratedApproach";
import PartnershipStories from "@/components/PartnershipStories";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Partners />
        <GapSection />
        <IntegratedApproach />
        <PartnershipStories />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
