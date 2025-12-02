import { Linkedin, Youtube, Instagram, MapPin, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Logo className="w-12 h-12" />
                <div className="flex flex-col">
                  <span className="text-lg font-serif font-bold text-white leading-none">Supivaa</span>
                  <span className="text-xs text-white/60 leading-none">Advisory Group Ltd</span>
                </div>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Bridging strategy and execution at the nexus of gender and climate across Africa.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-primary smooth-transition">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-primary smooth-transition">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-primary smooth-transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-primary smooth-transition">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Navigate */}
            <div>
              <h4 className="font-bold mb-4">Navigate</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/who-we-are" className="text-white/70 hover:text-primary smooth-transition">Who We Are</a></li>
                <li><a href="/what-we-do" className="text-white/70 hover:text-primary smooth-transition">Our Services</a></li>
                <li><a href="#case-studies" className="text-white/70 hover:text-primary smooth-transition">Case Studies</a></li>
                <li><a href="#insights" className="text-white/70 hover:text-primary smooth-transition">Our Insights</a></li>
                <li><a href="#careers" className="text-white/70 hover:text-primary smooth-transition">Careers</a></li>
              </ul>
            </div>

            {/* Focus Areas */}
            <div>
              <h4 className="font-bold mb-4">Focus Areas</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-white/70">Agriculture</li>
                <li className="text-white/70">Healthcare</li>
                <li className="text-white/70">Climate Solutions</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-white/70">
                    3rd Floor, Nairobi Garage<br />
                    Promenade Building, Nairobi,<br />
                    Kenya
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-white/70">
                    Unit 300 - 420 W Hastings St<br />
                    Vancouver, BC, V6B 1L1
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Mail size={16} className="text-primary flex-shrink-0 mt-1" />
                  <a href="mailto:info@supivaa.com" className="text-white/70 hover:text-primary smooth-transition">
                    info@supivaa.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© {currentYear} Supivaa. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary smooth-transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary smooth-transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
