import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile-amol.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-primary hero-pattern overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-accent font-medium mb-4 animate-fade-up opacity-0">
              👋 Hello, I'm
            </p>

            <h1 className="text-hero-foreground text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4 animate-fade-up opacity-0 stagger-1">
              WELCOME TO
              <br />
              MY PORTFOLIO
              <br />
              I AM <span className="text-gradient">AMOL</span>
            </h1>

            <p className="text-hero-foreground/80 text-lg md:text-xl max-w-lg mb-8 animate-fade-up opacity-0 stagger-2">
              A 3rd-year B.Tech Computer Engineering student passionate about
              software development and analytical thinking. Building skills
              through academic and personal projects.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 stagger-3">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2"
              >
                View Projects
                <span>→</span>
              </a>
              <a
                href="#contact"
                className="btn-outline text-hero-foreground border-hero-foreground/50 hover:border-accent hover:text-accent inline-flex items-center gap-2"
              >
                Contact Me
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-hero-foreground/20 animate-fade-up opacity-0 stagger-4">
              <div>
                <span className="text-accent text-3xl font-bold">2+</span>
                <p className="text-hero-foreground/70 text-sm mt-1">Projects Built</p>
              </div>
              <div>
                <span className="text-accent text-3xl font-bold">5+</span>
                <p className="text-hero-foreground/70 text-sm mt-1">Technologies</p>
              </div>
              <div>
                <span className="text-accent text-3xl font-bold">2027</span>
                <p className="text-hero-foreground/70 text-sm mt-1">Graduation</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in opacity-0 stagger-2">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-110" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Amol Lende"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-lg animate-float">
                Fresher 🎓
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-hero-foreground/50 hover:text-accent transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
