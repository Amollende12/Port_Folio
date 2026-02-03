import { ArrowUpRight, Github } from "lucide-react";
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
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Healthcare Website",
    description:
      "A responsive website created to represent healthcare services, focusing on clean UI, structured content, and accessibility. Implements modern design principles.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: healthcareImage,
    github: "#",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium uppercase tracking-wider mb-2">
            My Recent Work
          </p>
          <h2 className="section-title text-foreground">
            Some of my
            <br />
            <span className="text-accent">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className="project-card group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quick Link */}
                <a
                  href={project.github}
                  className="absolute top-4 right-4 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-110"
                  aria-label="View project"
                >
                  <ArrowUpRight size={24} />
                </a>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More projects coming soon as I continue learning and building!
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            <Github size={20} />
            Follow my GitHub for updates
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
