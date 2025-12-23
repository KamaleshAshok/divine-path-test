import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Trust Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center">
                <span className="text-primary-foreground font-heading text-lg font-bold">ॐ</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">Thatvamasi</h3>
                <p className="text-xs text-muted-foreground">Ayyappa Seva Trust</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              "Thatvamasi" — You are That. A sacred space for devotees to connect with Lord Ayyappa Swamy 
              through seva, devotion, and dharma.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Swamiye Saranam Ayyappa
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About the Trust" },
                { href: "/donations", label: "Sanhidi Donations" },
                { href: "/pooja-booking", label: "Book Pooja" },
                { href: "/slokhas", label: "Slokhas & Vrathas" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Devotee Services */}
          <div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-4">Devotee Services</h4>
            <ul className="space-y-2">
              {[
                { href: "/calendar", label: "Sacred Calendar" },
                { href: "/prasadam", label: "Prasadam Delivery" },
                { href: "/pilgrimage", label: "Darshanam Guide" },
                { href: "/contact", label: "Contact & Seva" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Under the guidance of</p>
              <p className="font-medium text-foreground">Manjunath Guru Swami</p>
              <p className="mt-4">For inquiries:</p>
              <a 
                href="mailto:seva@thatvamasi.org" 
                className="text-primary hover:underline block"
              >
                seva@thatvamasi.org
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Thatvamasi – Ayyappa Seva Trust. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for devotees worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
