import { Linkedin, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-hero-foreground py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-2xl font-bold">
              AMOL<span className="text-accent">.</span>
            </a>
            <p className="text-hero-foreground/70 text-sm mt-2">
              © {currentYear} Amol Lende. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/amol-lende"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-hero-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/amol-lende"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-hero-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:amol.lende@email.com"
              className="w-10 h-10 rounded-full bg-hero-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Made with Love */}
          <p className="text-hero-foreground/70 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-accent fill-accent" /> in India
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-hero-foreground/10">
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "About", "Skills", "Projects", "Services", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-hero-foreground/70 hover:text-accent transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
