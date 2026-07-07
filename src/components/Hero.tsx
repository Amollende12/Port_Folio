import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Download, Code2, Cpu, Zap } from "lucide-react";
import profileImage from "@/assets/profile-amol.jpg";

const roles = [
  "Full-Stack Developer",
  "Web Developer",
  "Problem Solver",
  "Tech Enthusiast",
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 90;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "hsl(220 60% 7%)" }}
    >
      {/* ── Layered Background ── */}
      <div className="absolute inset-0">
        {/* Gradient radials */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full opacity-25"
            style={{
              background: "radial-gradient(circle, hsl(185 100% 55% / 0.3) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, hsl(260 80% 60% / 0.35) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(220 50% 18% / 0.6) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </div>

        {/* 3D Mesh grid */}
        <div className="absolute inset-0 mesh-bg opacity-60" />

        {/* Floating 3D orbs */}
        <div
          className="absolute top-1/4 right-[15%] w-4 h-4 rounded-full animate-float"
          style={{
            background: "hsl(185 100% 55%)",
            boxShadow: "0 0 25px hsl(185 100% 55%), 0 0 50px hsl(185 100% 55% / 0.5)",
          }}
        />
        <div
          className="absolute top-[60%] left-[8%] w-3 h-3 rounded-full animate-float-slow"
          style={{
            background: "hsl(260 80% 65%)",
            boxShadow: "0 0 20px hsl(260 80% 65%), 0 0 40px hsl(260 80% 65% / 0.5)",
          }}
        />
        <div
          className="absolute top-[20%] left-[25%] w-2 h-2 rounded-full animate-float"
          style={{
            animationDelay: "3s",
            background: "hsl(185 100% 55%)",
            boxShadow: "0 0 15px hsl(185 100% 55%)",
          }}
        />
        <div
          className="absolute bottom-[25%] right-[30%] w-2 h-2 rounded-full animate-float-slow"
          style={{
            animationDelay: "1.5s",
            background: "hsl(260 80% 65%)",
            boxShadow: "0 0 15px hsl(260 80% 65%)",
          }}
        />

        {/* 3D Rotating geometric lines */}
        <div
          className="absolute top-1/2 right-[12%] -translate-y-1/2 w-64 h-64 opacity-10 animate-spin-slow"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 rounded-full border border-cyan-400" />
          <div className="absolute inset-4 rounded-full border border-violet-500" />
          <div className="absolute inset-8 rounded-full border border-cyan-400" />
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div className="order-2 lg:order-1 space-y-8">

            {/* Status Badge */}
            <div className="animate-fade-up opacity-0">
              <span className="floating-badge">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "hsl(185 100% 55%)", boxShadow: "0 0 8px hsl(185 100% 55%)" }}
                />
                <Sparkles className="w-3.5 h-3.5" />
                Available for Internships & Opportunities
              </span>
            </div>

            {/* Name */}
            <div className="space-y-3">
              <p
                className="font-semibold text-lg animate-fade-up opacity-0 stagger-1 tracking-widest uppercase"
                style={{ color: "hsl(185 100% 55%)" }}
              >
                Hello, I'm
              </p>

              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.0] animate-fade-up opacity-0 stagger-2"
                style={{ fontFamily: "var(--font-display)", color: "hsl(210 40% 98%)" }}
              >
                Amol
                <span className="block text-gradient" style={{ lineHeight: 1.15 }}>Lende</span>
              </h1>

              {/* Typed text */}
              <div
                className="text-xl md:text-2xl font-light animate-fade-up opacity-0 stagger-2 h-9 flex items-center gap-1"
                style={{ color: "hsl(215 20% 65%)" }}
              >
                <span>{displayText}</span>
                <span
                  className="inline-block w-0.5 h-6 animate-pulse"
                  style={{ background: "hsl(185 100% 55%)", boxShadow: "0 0 6px hsl(185 100% 55%)" }}
                />
              </div>
            </div>

            {/* Bio */}
            <p
              className="text-lg max-w-lg leading-relaxed animate-fade-up opacity-0 stagger-3"
              style={{ color: "hsl(215 20% 65%)" }}
            >
              A Final Year  B.Tech Computer Engineering student passionate about
              building innovative solutions and transforming ideas into reality through code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 stagger-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
              >
                View My Projects
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="Amollende_Resume (4).pdf"
                download="Amol_Lende_Resume.pdf"
                className="btn-outline"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2 animate-fade-up opacity-0 stagger-4">
              <span className="text-sm" style={{ color: "hsl(215 20% 45%)" }}>Find me on</span>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/amollende12", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/amol-lende", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:amol.lende@email.com", icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="group relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "hsl(220 40% 14%)",
                      border: "1px solid hsl(185 100% 55% / 0.15)",
                      color: "hsl(215 20% 60%)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "hsl(185 100% 55% / 0.15)";
                      (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.5)";
                      (e.currentTarget as HTMLElement).style.color = "hsl(185 100% 55%)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px hsl(185 100% 55% / 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "hsl(220 40% 14%)";
                      (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.15)";
                      (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 60%)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: 3D Profile ── */}
          <div
            className="order-1 lg:order-2 flex flex-col items-center gap-8 animate-scale-in opacity-0 stagger-2 perspective-2000"
            style={{
              transform: `perspective(2000px) rotateY(${mousePos.x * 0.3}deg) rotateX(${-mousePos.y * 0.3}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* 3D Profile Image Container */}
            <div className="relative" style={{ transformStyle: "preserve-3d" }}>

              {/* Outer glow rings */}
              <div
                className="absolute -inset-8 rounded-full opacity-30 animate-pulse"
                style={{ background: "radial-gradient(circle, hsl(185 100% 55% / 0.3) 0%, transparent 70%)" }}
              />
              <div
                className="absolute -inset-4 rounded-full border animate-spin-slow"
                style={{ borderColor: "hsl(185 100% 55% / 0.3)", borderStyle: "dashed" }}
              />
              <div
                className="absolute -inset-2 rounded-full border opacity-50"
                style={{ borderColor: "hsl(260 80% 60% / 0.4)" }}
              />

              {/* Profile Image */}
              <div
                className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                style={{
                  border: "3px solid hsl(185 100% 55% / 0.4)",
                  boxShadow: "0 0 40px hsl(185 100% 55% / 0.3), 0 0 80px hsl(185 100% 55% / 0.15), inset 0 0 30px hsl(185 100% 55% / 0.05)",
                }}
              >
                <img
                  src={profileImage}
                  alt="Amol Lende"
                  className="w-full h-full object-cover"
                />
                {/* Overlay shimmer */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, hsl(185 100% 55% / 0.08) 0%, transparent 50%, hsl(260 80% 60% / 0.08) 100%)",
                  }}
                />
              </div>

              {/* Floating Icon Badges */}
              <div
                className="absolute -top-2 -right-2 w-12 h-12 rounded-xl flex items-center justify-center animate-float"
                style={{
                  background: "linear-gradient(135deg, hsl(185 100% 40%) 0%, hsl(210 100% 50%) 100%)",
                  boxShadow: "0 8px 25px hsl(185 100% 55% / 0.5)",
                  transform: "translateZ(20px)",
                }}
              >
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div
                className="absolute -bottom-2 -left-4 w-12 h-12 rounded-xl flex items-center justify-center animate-float-slow"
                style={{
                  background: "linear-gradient(135deg, hsl(260 80% 50%) 0%, hsl(285 70% 50%) 100%)",
                  boxShadow: "0 8px 25px hsl(260 80% 60% / 0.5)",
                }}
              >
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div
                className="absolute top-1/2 -right-6 w-10 h-10 rounded-lg flex items-center justify-center animate-float"
                style={{
                  background: "linear-gradient(135deg, hsl(38 100% 50%) 0%, hsl(25 100% 45%) 100%)",
                  boxShadow: "0 6px 20px hsl(38 100% 50% / 0.5)",
                  animationDelay: "2s",
                }}
              >
                <Zap className="w-5 h-5 text-white" />
              </div>

              {/* Status Badge */}
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, hsl(185 100% 45%) 0%, hsl(210 100% 55%) 100%)",
                  color: "hsl(220 60% 8%)",
                  boxShadow: "0 8px 30px hsl(185 100% 55% / 0.4)",
                }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Fresher 2027 · Open to Work
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs mt-6">
              {[
                { value: "2+", label: "Projects" },
                { value: "5+", label: "Technologies" },
                { value: "2027", label: "Graduation" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl transition-all duration-300 cursor-default card-3d"
                  style={{
                    background: "hsl(220 40% 12% / 0.8)",
                    border: "1px solid hsl(185 100% 55% / 0.12)",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.35)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px hsl(185 100% 55% / 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.12)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <span
                    className="text-2xl font-bold block"
                    style={{ color: "hsl(185 100% 55%)", fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs mt-1 block" style={{ color: "hsl(215 20% 50%)" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: "hsl(215 20% 40%)" }}
        >
          Scroll
        </span>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-1 transition-colors duration-300 animate-bounce"
          style={{ color: "hsl(215 20% 40%)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(185 100% 55%)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 40%)"; }}
        >
          <ArrowDown size={22} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
