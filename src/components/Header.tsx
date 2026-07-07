import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "services", label: "Services" },
  { href: "contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.href));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3" : "py-5"
      }`}
      style={{
        background: isScrolled
          ? "hsl(220 50% 8% / 0.92)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid hsl(185 100% 55% / 0.1)" : "none",
        boxShadow: isScrolled ? "0 4px 30px hsl(185 100% 55% / 0.05)" : "none",
      }}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("home"); }}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, hsl(185 100% 55%) 0%, hsl(210 100% 60%) 100%)",
              boxShadow: "0 0 15px hsl(185 100% 55% / 0.5)",
            }}
          >
            <Sparkles className="w-4 h-4 text-slate-900" />
          </div>
          <span
            className="font-bold text-xl tracking-tight transition-all duration-300"
            style={{
              fontFamily: "var(--font-display)",
              color: isScrolled ? "hsl(210 40% 98%)" : "hsl(210 40% 98%)",
            }}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="relative px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300"
                style={{
                  color: isActive
                    ? "hsl(185 100% 55%)"
                    : "hsl(215 20% 70%)",
                  background: isActive ? "hsl(185 100% 55% / 0.1)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "hsl(185 100% 65%)";
                    (e.currentTarget as HTMLElement).style.background = "hsl(185 100% 55% / 0.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 70%)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "hsl(185 100% 55%)", boxShadow: "0 0 6px hsl(185 100% 55%)" }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle isScrolled={isScrolled} />
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}
            className="relative overflow-hidden px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, hsl(185 100% 50%) 0%, hsl(210 100% 60%) 100%)",
              color: "hsl(220 60% 8%)",
              boxShadow: "0 4px 15px hsl(185 100% 55% / 0.35)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 25px hsl(185 100% 55% / 0.55)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 15px hsl(185 100% 55% / 0.35)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Let's Talk →
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle isScrolled={isScrolled} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg transition-all duration-300"
            style={{
              background: "hsl(220 40% 14%)",
              border: "1px solid hsl(185 100% 55% / 0.2)",
              color: "hsl(185 100% 55%)",
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 animate-fade-in"
          style={{
            background: "hsl(220 50% 8% / 0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid hsl(185 100% 55% / 0.15)",
            boxShadow: "0 20px 40px hsl(220 60% 5% / 0.5)",
          }}
        >
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="py-3 px-4 rounded-xl transition-all duration-300 font-medium"
                  style={{
                    color: isActive ? "hsl(185 100% 55%)" : "hsl(215 20% 70%)",
                    background: isActive ? "hsl(185 100% 55% / 0.1)" : "transparent",
                    border: isActive ? "1px solid hsl(185 100% 55% / 0.2)" : "1px solid transparent",
                  }}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}
              className="mt-3 py-3 px-4 rounded-xl text-center font-semibold"
              style={{
                background: "linear-gradient(135deg, hsl(185 100% 50%) 0%, hsl(210 100% 60%) 100%)",
                color: "hsl(220 60% 8%)",
              }}
            >
              Let's Talk →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
