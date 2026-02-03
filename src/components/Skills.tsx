import { 
  Code2, 
  Globe, 
  Database, 
  Brain,
  Terminal,
  Palette,
  Server,
  Users
} from "lucide-react";

const skillsData = {
  programming: {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  web: {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  database: {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
  },
  other: {
    title: "Other Skills",
    icon: Brain,
    skills: ["Problem-solving", "Analytical Thinking", "Teamwork", "Git & GitHub"],
  },
};

const toolsData = [
  { name: "VS Code", icon: Terminal },
  { name: "React", icon: Globe },
  { name: "Git", icon: Code2 },
  { name: "Figma", icon: Palette },
  { name: "MySQL", icon: Database },
  { name: "Node.js", icon: Server },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium uppercase tracking-wider mb-2">
            What I Know
          </p>
          <h2 className="section-title text-foreground">My Skills</h2>
          <p className="section-subtitle mx-auto mt-4">
            A collection of technologies and skills I've acquired through
            coursework and personal projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {Object.entries(skillsData).map(([key, category], index) => (
            <div
              key={key}
              className="bg-card p-6 md:p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <category.icon size={24} />
                </div>
                <h3 className="font-display font-semibold text-xl text-card-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="text-center">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
            Tools & Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {toolsData.map((tool, index) => (
              <div
                key={tool.name}
                className="flex items-center gap-3 bg-card px-6 py-4 rounded-xl shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <tool.icon size={20} className="text-accent" />
                <span className="font-medium text-card-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16 bg-primary rounded-3xl p-8 md:p-12 text-center">
          <Users className="mx-auto mb-4 text-accent" size={40} />
          <h3 className="font-display text-2xl font-semibold text-hero-foreground mb-4">
            Soft Skills & Values
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Quick Learner", "Team Player", "Detail-Oriented", "Adaptable", "Communicative"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 bg-hero-foreground/10 text-hero-foreground rounded-full font-medium"
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
