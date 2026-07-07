import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Import images properly
import libraryImage from "@/assets/project-library.jpg";
import healthcareImage from "@/assets/project-healthcare.jpg";

const projectsData = [
  {
    id: 1,
    title: "Library Management System",
    description:
      "A comprehensive mini project designed to manage books, users, and transactions efficiently. Features include book cataloging, user registration, and borrowing history tracking.",
    technologies: ["Java", "MySQL", "JDBC"],
    image: libraryImage,
    github: "https://github.com/amollende12/library-management-system",
    live: "#", // Add live demo link if available, or remove if not
    accent: "hsl(185 100% 55%)",
    glow: "hsl(185 100% 55% / 0.3)",
    featured: true,
  },
  {
    id: 2,
    title: "Healthcare Website",
    description:
      "A responsive website created to represent healthcare services, focusing on clean UI, structured content, and accessibility. Implements modern design principles.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    image: healthcareImage,
    github: "https://github.com/Tushar-3612/Projects/tree/main/Good_Health_And_Well_Being",
    live: "https://healthyhealth.netlify.app/", // Add live demo link
    accent: "hsl(260 80% 65%)",
    glow: "hsl(260 80% 65% / 0.3)",
    featured: true,
  },
  {
    id: 3,
    title: "Balvirt IT Solution",
    description:
      "Official company website for Balvirt IT Solutions. A professional business website with contact forms, services showcase, and responsive design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "PHP Mailer"],
    image: "https://tusharnagare.netlify.app/images/balvirt.png",
    github: "https://github.com/Amollende12/fullstackprojectbalvirt",
    live: "https://balvirt.com",
    accent: "hsl(15 100% 60%)",
    glow: "hsl(15 100% 60% / 0.3)",
    featured: true,
  }
];

const Projects = () => {
  const header = useScrollReveal();
  const grid = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
      style={{ background: "hsl(220 50% 8%)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 right-0 w-[400px] h-[400px] opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(185 100% 55%) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div className="absolute inset-0 mesh-bg opacity-25" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-20 transition-all duration-700 ${header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p
            className="font-semibold uppercase tracking-[0.3em] text-sm mb-3"
            style={{ color: "hsl(185 100% 55%)" }}
          >
            My Recent Work
          </p>
          <h2 className="section-title" style={{ color: "hsl(210 40% 98%)" }}>
            Some of My{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="divider-gradient w-24 mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div
          ref={grid.ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500"
              style={{
                background: "hsl(220 40% 10%)",
                border: `1px solid hsl(215 30% 17%)`,
                transitionDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = project.accent.replace(")", " / 0.4)");
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${project.glow}, 0 0 0 1px ${project.accent.replace(")", " / 0.1)")}`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(215 30% 17%)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={typeof project.image === 'string' ? project.image : project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(to top, hsl(220 60% 7% / 0.95) 0%, hsl(220 60% 7% / 0.5) 60%, transparent 100%)",
                  }}
                />

                {/* Featured badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: project.accent.replace(")", " / 0.2)"),
                    border: `1px solid ${project.accent.replace(")", " / 0.4)")}`,
                    color: project.accent,
                  }}
                >
                  Featured
                </div>

                {/* Live Demo Button */}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-11 h-11 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    style={{
                      background: project.accent,
                      color: "hsl(220 60% 8%)",
                      boxShadow: `0 8px 25px ${project.glow}`,
                    }}
                    aria-label="View live demo"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                )}
              </div>

              {/* Project Info */}
              <div className="p-7">
                <h3
                  className="text-xl font-bold mb-3 transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "hsl(210 30% 92%)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = project.accent; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(210 30% 92%)"; }}
                >
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed line-clamp-3" style={{ color: "hsl(215 20% 55%)" }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: project.accent.replace(")", " / 0.1)"),
                        border: `1px solid ${project.accent.replace(")", " / 0.25)")}`,
                        color: project.accent,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-5 pt-4" style={{ borderTop: "1px solid hsl(215 30% 17%)" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                    style={{ color: "hsl(215 20% 55%)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = project.accent; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 55%)"; }}
                  >
                    <Github size={16} />
                    Source Code
                  </a>

                  {/* Live Demo Link - Only show if live link exists */}
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                      style={{ color: "hsl(215 20% 55%)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = project.accent; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 55%)"; }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-14">
          <p className="mb-5" style={{ color: "hsl(215 20% 45%)" }}>
            More projects coming soon as I continue learning and building!
          </p>
          <a
            href="https://github.com/amollende12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold transition-all duration-300 px-6 py-3 rounded-xl"
            style={{
              background: "hsl(220 40% 12%)",
              border: "1px solid hsl(185 100% 55% / 0.2)",
              color: "hsl(185 100% 55%)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "hsl(185 100% 55% / 0.12)";
              (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.5)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px hsl(185 100% 55% / 0.2)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "hsl(220 40% 12%)";
              (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.2)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <Github size={18} />
            Follow my GitHub for updates
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;