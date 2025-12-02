import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Ready to start your project? Get in touch with us today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-charcoal mb-1">Email Us</h3>
                  <p className="text-muted-foreground">contact@supivaa.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-charcoal mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-charcoal mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">123 Innovation Drive, Tech City, TC 12345</p>
                </div>
              </div>
            </div>

            <form className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="border-2 focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="border-2 focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your project"
                  rows={6}
                  className="border-2 focus:border-primary resize-none"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
