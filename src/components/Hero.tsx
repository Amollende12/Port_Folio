import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile-amol.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-primary overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Status badge */}
            <div className="animate-fade-up opacity-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-hero-foreground/90 text-sm font-medium">
                <Sparkles className="w-4 h-4 text-accent" />
                Open to Opportunities
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-accent font-semibold text-lg animate-fade-up opacity-0 stagger-1">
                Hello, I'm
              </p>

              <h1 className="text-hero-foreground text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] animate-fade-up opacity-0 stagger-2">
                Amol
                <span className="text-gradient block">Lende</span>
              </h1>

              <p className="text-hero-foreground/70 text-xl md:text-2xl font-light animate-fade-up opacity-0 stagger-2">
                Aspiring Developer & Analyst
              </p>
            </div>

            <p className="text-hero-foreground/80 text-lg max-w-lg leading-relaxed animate-fade-up opacity-0 stagger-3">
              A 3rd-year B.Tech Computer Engineering student passionate about
              building innovative solutions and transforming ideas into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 stagger-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
              >
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-hero-foreground font-semibold px-8 py-4 rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4 animate-fade-up opacity-0 stagger-4">
              <span className="text-hero-foreground/50 text-sm">Find me on</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-hero-foreground/70 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-hero-foreground/70 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:amol@example.com"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-hero-foreground/70 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Image & Stats */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-8 animate-scale-in opacity-0 stagger-2">
            {/* Profile Image */}
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/20 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-white/10 scale-125" />
              
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-2xl scale-110" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Amol Lende"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full font-semibold shadow-lg shadow-accent/30 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Fresher 2027
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm mt-4">
              {[
                { value: "2+", label: "Projects" },
                { value: "5+", label: "Technologies" },
                { value: "2027", label: "Graduation" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <span className="text-accent text-2xl md:text-3xl font-bold block">
                    {stat.value}
                  </span>
                  <span className="text-hero-foreground/60 text-xs md:text-sm mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-hero-foreground/40 text-xs uppercase tracking-widest">Scroll</span>
        <a href="#about" className="text-hero-foreground/50 hover:text-accent transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
