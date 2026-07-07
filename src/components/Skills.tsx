import {
  Code2,
  Globe,
  Database,
  Brain,
  Terminal,
  Palette,
  Server,
  Users,
  GitBranch,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const skillsData = {
  programming: {
    title: "Programming Languages",
    icon: Code2,
    color: "hsl(185 100% 55%)",
    glow: "hsl(185 100% 55% / 0.3)",
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  web: {
    title: "Web Technologies",
    icon: Globe,
    color: "hsl(210 100% 65%)",
    glow: "hsl(210 100% 65% / 0.3)",
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  database: {
    title: "Databases",
    icon: Database,
    color: "hsl(260 80% 70%)",
    glow: "hsl(260 80% 70% / 0.3)",
    skills: ["MySQL", "MongoDB"],
  },
  other: {
    title: "Other Skills",
    icon: Brain,
    color: "hsl(38 100% 60%)",
    glow: "hsl(38 100% 60% / 0.3)",
    skills: ["Problem-solving", "Analytical Thinking", "Teamwork", "Git & GitHub"],
  },
};

const toolsData = [
  { name: "VS Code", icon: Terminal, color: "hsl(207 90% 54%)" },
  { name: "React", icon: Globe, color: "hsl(193 95% 68%)" },
  { name: "Git", icon: GitBranch, color: "hsl(14 100% 50%)" },
  { name: "Figma", icon: Palette, color: "hsl(260 80% 65%)" },
  { name: "MySQL", icon: Database, color: "hsl(38 100% 52%)" },
  { name: "Node.js", icon: Server, color: "hsl(120 60% 50%)" },
];

const Skills = () => {
  const header = useScrollReveal();
  const grid = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const tools = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const soft = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
      style={{ background: "hsl(220 55% 6%)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[300px] opacity-10"
          style={{
            background: "radial-gradient(ellipse, hsl(185 100% 55%) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="absolute inset-0 mesh-bg opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-20 transition-all duration-700 ${
            header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="font-semibold uppercase tracking-[0.3em] text-sm mb-3"
            style={{ color: "hsl(185 100% 55%)" }}
          >
            What I Know
          </p>
          <h2 className="section-title" style={{ color: "hsl(210 40% 98%)" }}>
            My{" "}
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A collection of technologies and skills I've acquired through
            coursework and personal projects.
          </p>
          <div className="divider-gradient w-24 mx-auto mt-6" />
        </div>

        {/* Skills Grid */}
        <div
          ref={grid.ref}
          className={`grid md:grid-cols-2 gap-6 mb-16 transition-all duration-700 delay-100 ${
            grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {Object.entries(skillsData).map(([key, category], index) => (
            <div
              key={key}
              className="relative p-7 rounded-2xl transition-all duration-500 group cursor-default"
              style={{
                background: "hsl(220 40% 10%)",
                border: "1px solid hsl(215 30% 18%)",
                transitionDelay: `${index * 80}ms`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${category.color.replace(")", " / 0.4)")}`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 40px ${category.glow}, inset 0 0 40px ${category.glow.replace("0.3", "0.05")}`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(215 30% 18%)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Card glow corner */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at top right, ${category.color.replace(")", " / 0.1)")}, transparent 70%)`,
                }}
              />

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: `${category.color.replace(")", " / 0.12)")}`,
                    border: `1px solid ${category.color.replace(")", " / 0.25)")}`,
                  }}
                >
                  <category.icon size={22} style={{ color: category.color }} />
                </div>
                <h3
                  className="font-bold text-xl"
                  style={{ fontFamily: "var(--font-display)", color: "hsl(210 30% 92%)" }}
                >
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-default"
                    style={{
                      background: "hsl(220 40% 14%)",
                      border: `1px solid ${category.color.replace(")", " / 0.15)")}`,
                      color: "hsl(215 20% 70%)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${category.color.replace(")", " / 0.2)")}`;
                      (e.currentTarget as HTMLElement).style.color = category.color;
                      (e.currentTarget as HTMLElement).style.borderColor = `${category.color.replace(")", " / 0.5)")}`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 12px ${category.glow}`;
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "hsl(220 40% 14%)";
                      (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 70%)";
                      (e.currentTarget as HTMLElement).style.borderColor = `${category.color.replace(")", " / 0.15)")}`;
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div
          ref={tools.ref}
          className={`transition-all duration-700 delay-150 ${
            tools.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3
            className="text-center text-2xl font-bold mb-8"
            style={{ fontFamily: "var(--font-display)", color: "hsl(210 30% 92%)" }}
          >
            Tools & Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {toolsData.map((tool, index) => (
              <div
                key={tool.name}
                className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 cursor-default group"
                style={{
                  background: "hsl(220 40% 11%)",
                  border: "1px solid hsl(215 30% 18%)",
                  transitionDelay: `${index * 50}ms`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${tool.color.replace(")", " / 0.4)")}`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${tool.color.replace(")", " / 0.2)")}`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.background = "hsl(220 40% 13%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(215 30% 18%)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.background = "hsl(220 40% 11%)";
                }}
              >
                <tool.icon size={18} style={{ color: tool.color }} />
                <span className="font-semibold text-sm" style={{ color: "hsl(215 20% 75%)" }}>
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div
          ref={soft.ref}
          className={`mt-16 rounded-3xl p-8 md:p-12 text-center transition-all duration-700 delay-200 relative overflow-hidden ${
            soft.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            background: "linear-gradient(135deg, hsl(220 60% 10%) 0%, hsl(240 50% 12%) 50%, hsl(220 60% 10%) 100%)",
            border: "1px solid hsl(185 100% 55% / 0.2)",
            boxShadow: "0 0 60px hsl(185 100% 55% / 0.08), inset 0 0 60px hsl(260 80% 60% / 0.05)",
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px"
            style={{ background: "linear-gradient(90deg, transparent, hsl(185 100% 55% / 0.6), transparent)" }}
          />
          <Users
            className="mx-auto mb-4"
            size={40}
            style={{ color: "hsl(185 100% 55%)" }}
          />
          <h3
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "hsl(210 30% 92%)" }}
          >
            Soft Skills & Values
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Quick Learner", "Team Player", "Detail-Oriented", "Adaptable", "Communicative"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 cursor-default"
                  style={{
                    background: "hsl(185 100% 55% / 0.08)",
                    border: "1px solid hsl(185 100% 55% / 0.2)",
                    color: "hsl(185 100% 75%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "hsl(185 100% 55% / 0.18)";
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.5)";
                    (e.currentTarget as HTMLElement).style.color = "hsl(185 100% 55%)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px hsl(185 100% 55% / 0.2)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "hsl(185 100% 55% / 0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.2)";
                    (e.currentTarget as HTMLElement).style.color = "hsl(185 100% 75%)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
