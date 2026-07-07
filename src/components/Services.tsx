import { Code, BarChart3, Lightbulb, GraduationCap, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const servicesData = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive and interactive web applications using modern technologies like React, HTML, CSS, and JavaScript.",
    status: "Learning",
    color: "hsl(185 100% 55%)",
    glow: "hsl(185 100% 55% / 0.25)",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Exploring data Analytics techniques using Python and SQL to derive meaningful insights from data.",
    status: "Learning",
    color: "hsl(210 100% 65%)",
    glow: "hsl(210 100% 65% / 0.25)",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Strong analytical skills developed through competitive programming and algorithmic challenges.",
    status: "Active",
    color: "hsl(38 100% 60%)",
    glow: "hsl(38 100% 60% / 0.25)",
  },
];

const Services = () => {
  const header = useScrollReveal();
  const grid = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const future = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{ background: "hsl(220 55% 6%)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-1/3 w-[350px] h-[350px] opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(260 80% 60%) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="absolute inset-0 mesh-bg opacity-25" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p
            className="font-semibold uppercase tracking-[0.3em] text-sm mb-3"
            style={{ color: "hsl(185 100% 55%)" }}
          >
            What I'm Working On
          </p>
          <h2 className="section-title" style={{ color: "hsl(210 40% 98%)" }}>
            My{" "}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Currently focusing on learning and building projects. Here are the
            areas I'm developing expertise in.
          </p>
          <div className="divider-gradient w-24 mx-auto mt-6" />
        </div>

        {/* Student Notice */}
        <div
          className="relative rounded-2xl p-6 md:p-8 mb-14 overflow-hidden"
          style={{
            background: "hsl(220 40% 10%)",
            border: "1px solid hsl(185 100% 55% / 0.2)",
            boxShadow: "0 0 40px hsl(185 100% 55% / 0.05)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, hsl(185 100% 55% / 0.5), transparent)" }}
          />
          <div className="flex items-start gap-5">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, hsl(185 100% 45%) 0%, hsl(210 100% 55%) 100%)",
                boxShadow: "0 8px 25px hsl(185 100% 55% / 0.35)",
              }}
            >
              <GraduationCap className="text-slate-900" size={26} />
            </div>
            <div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ fontFamily: "var(--font-display)", color: "hsl(210 30% 92%)" }}
              >
                Currently a Student
              </h3>
              <p style={{ color: "hsl(215 20% 55%)" }}>
                I'm actively learning and building my portfolio. While I'm not
                offering professional services yet, I'm open to internships,
                collaborative projects, and opportunities to apply my growing
                skills in real-world scenarios.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div
          ref={grid.ref}
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className="relative p-7 rounded-2xl transition-all duration-500 group cursor-default overflow-hidden"
              style={{
                background: "hsl(220 40% 10%)",
                border: "1px solid hsl(215 30% 17%)",
                transitionDelay: `${index * 0.08}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = service.color.replace(")", " / 0.4)");
                (e.currentTarget as HTMLElement).style.boxShadow = `0 15px 50px ${service.glow}`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(215 30% 17%)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Top corner glow */}
              <div
                className="absolute top-0 right-0 w-28 h-28 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${service.color.replace(")", " / 0.15)")}, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: service.color.replace(")", " / 0.12)"),
                  border: `1px solid ${service.color.replace(")", " / 0.25)")}`,
                }}
              >
                <service.icon size={26} style={{ color: service.color }} />
              </div>

              {/* Status Badge */}
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{
                  background: service.status === "Active"
                    ? "hsl(120 60% 45% / 0.15)"
                    : service.color.replace(")", " / 0.12)"),
                  color: service.status === "Active"
                    ? "hsl(120 60% 60%)"
                    : service.color,
                  border: `1px solid ${service.status === "Active"
                    ? "hsl(120 60% 45% / 0.3)"
                    : service.color.replace(")", " / 0.3)")}`,
                }}
              >
                {service.status === "Active" ? "● Active" : "⟳ Learning"}
              </span>

              <h3
                className="font-bold text-xl mb-3"
                style={{ fontFamily: "var(--font-display)", color: "hsl(210 30% 92%)" }}
              >
                {service.title}
              </h3>
              <p className="leading-relaxed text-sm" style={{ color: "hsl(215 20% 55%)" }}>
                {service.description}
              </p>

              {/* Bottom link */}
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: service.color }}
              >
                Explore <ArrowRight size={13} />
              </div>
            </div>
          ))}
        </div>

        {/* Future Goals */}
        <div
          ref={future.ref}
          className={`mt-16 text-center transition-all duration-700 delay-200 ${future.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h3
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "hsl(210 30% 92%)" }}
          >
            Future Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Full-Stack Development", color: "hsl(185 100% 55%)" },
              { label: "Data Analytics", color: "hsl(210 100% 65%)" },

            ].map(({ label, color }) => (
              <span
                key={label}
                className="px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 cursor-default"
                style={{
                  background: "hsl(220 40% 11%)",
                  border: `1px solid ${color.replace(")", " / 0.2)")}`,
                  color: "hsl(215 20% 65%)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = color.replace(")", " / 0.5)");
                  (e.currentTarget as HTMLElement).style.color = color;
                  (e.currentTarget as HTMLElement).style.background = color.replace(")", " / 0.1)");
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = color.replace(")", " / 0.2)");
                  (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 65%)";
                  (e.currentTarget as HTMLElement).style.background = "hsl(220 40% 11%)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
