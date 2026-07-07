import { Linkedin, Github, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "hsl(220 60% 5%)" }}
    >
      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(185 100% 55% / 0.4), hsl(260 80% 60% / 0.4), transparent)" }}
      />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 mesh-bg opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 group mb-2"
            >
              <span
                className="font-bold text-2xl tracking-tight transition-all duration-300"
                style={{ fontFamily: "var(--font-display)", color: "hsl(210 40% 98%)" }}
              >
                AMOL
                <span
                  style={{
                    background: "linear-gradient(135deg, hsl(185 100% 55%) 0%, hsl(260 80% 65%) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  .
                </span>
              </span>
            </a>
            <p className="text-sm" style={{ color: "hsl(215 20% 40%)" }}>
              © {currentYear} Amol Lende. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { href: "https://www.linkedin.com/in/amol-lende-247b57288/", icon: Linkedin, label: "LinkedIn", color: "hsl(210 100% 65%)" },
              { href: "https://github.com/amollende12", icon: Github, label: "GitHub", color: "hsl(215 20% 80%)" },
              { href: "mailto:amollende02@email.com", icon: Mail, label: "Email", color: "hsl(185 100% 55%)" },
            ].map(({ href, icon: Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: "hsl(220 40% 10%)",
                  border: "1px solid hsl(215 30% 16%)",
                  color: "hsl(215 20% 50%)",
                }}
                aria-label={label}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = color.replace(")", " / 0.15)");
                  (e.currentTarget as HTMLElement).style.borderColor = color.replace(")", " / 0.4)");
                  (e.currentTarget as HTMLElement).style.color = color;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 15px ${color.replace(")", " / 0.3)")}`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "hsl(220 40% 10%)";
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(215 30% 16%)";
                  (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 50%)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>

          {/* Made with Love */}
          {/* <p className="text-sm flex items-center gap-1.5" style={{ color: "hsl(215 20% 40%)" }}>
            Made with{" "}
            <Heart
              size={14}
              style={{ color: "hsl(0 70% 60%)", fill: "hsl(0 70% 60%)" }}
            />{" "}
            in India
          </p> */}
        </div>

        {/* Quick Links Divider */}
        <div
          className="mt-8 pt-8"
          style={{ borderTop: "1px solid hsl(215 30% 14%)" }}
        >
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "About", "Skills", "Projects", "Services", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="transition-all duration-300 font-medium"
                style={{ color: "hsl(215 20% 40%)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "hsl(185 100% 55%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 40%)";
                }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
        style={{
          background: "hsl(220 40% 12%)",
          border: "1px solid hsl(185 100% 55% / 0.2)",
          color: "hsl(185 100% 55%)",
        }}
        aria-label="Back to top"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "hsl(185 100% 55% / 0.15)";
          (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.5)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px hsl(185 100% 55% / 0.3)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "hsl(220 40% 12%)";
          (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.2)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        <ArrowUp size={17} />
      </button>
    </footer>
  );
};

export default Footer;
