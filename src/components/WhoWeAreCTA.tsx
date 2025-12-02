import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhoWeAreCTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Want to Work With Us?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a feminist enterprise seeking investment readiness support or a 
            funder looking to strengthen your gender-climate impact, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-primary bg-white hover:bg-white/90"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreCTA;