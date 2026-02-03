import { Code, BarChart3, Lightbulb, GraduationCap } from "lucide-react";

const servicesData = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive and interactive web applications using modern technologies like React, HTML, CSS, and JavaScript.",
    status: "Learning",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Exploring data analysis techniques using Python and SQL to derive meaningful insights from data.",
    status: "Learning",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Strong analytical skills developed through competitive programming and algorithmic challenges.",
    status: "Active",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium uppercase tracking-wider mb-2">
            What I'm Working On
          </p>
          <h2 className="section-title text-foreground">My Services</h2>
          <p className="section-subtitle mx-auto mt-4">
            Currently focusing on learning and building projects. Here are the
            areas I'm developing expertise in.
          </p>
        </div>

        {/* Student Notice */}
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8 mb-12 flex items-start gap-4">
          <GraduationCap className="text-accent shrink-0 mt-1" size={28} />
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">
              Currently a Student
            </h3>
            <p className="text-muted-foreground">
              I'm actively learning and building my portfolio. While I'm not
              offering professional services yet, I'm open to internships,
              collaborative projects, and opportunities to apply my growing
              skills in real-world scenarios.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className="bg-card p-6 md:p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <service.icon size={28} />
              </div>

              {/* Status Badge */}
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  service.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {service.status}
              </span>

              {/* Content */}
              <h3 className="font-display font-semibold text-xl text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
            Future Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Full-Stack Development",
              "Cloud Technologies",
              "Machine Learning",
              "System Design",
            ].map((interest) => (
              <span
                key={interest}
                className="px-5 py-2 bg-card text-card-foreground rounded-full font-medium shadow-sm border border-border hover:border-accent transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
