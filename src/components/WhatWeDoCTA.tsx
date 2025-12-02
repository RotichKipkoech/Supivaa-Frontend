import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhatWeDoCTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to turn your vision into measurable impact. Reach out 
            to discuss your needs and explore how we can support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-primary bg-white hover:bg-white/90"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/impact">See Our Impact</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoCTA;
