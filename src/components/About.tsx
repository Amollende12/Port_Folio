import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium uppercase tracking-wider mb-2">
            Get to Know Me
          </p>
          <h2 className="section-title text-foreground">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Aspiring Software Developer & Analyst
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Computer Engineering student with a strong foundation
                in programming and web technologies. My journey in tech started with
                curiosity about how software shapes our world, and it has grown into
                a dedicated pursuit of excellence in development.
              </p>
              <p>
                I believe in continuous learning and applying theoretical knowledge
                to practical projects. Whether it's building a web application or
                solving complex algorithmic problems, I approach each challenge with
                enthusiasm and analytical thinking.
              </p>
              <p>
                My goal is to become a professional developer who creates impactful
                software solutions. I'm actively seeking opportunities to grow,
                contribute to meaningful projects, and collaborate with like-minded
                professionals.
              </p>
            </div>

            {/* Personal Info */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-accent">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-medium text-foreground">Open to Internships</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <GraduationCap className="text-accent" />
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-border" />

              {/* Education Cards */}
              <div className="space-y-6">
                <div className="relative pl-12">
                  <div className="absolute left-2 top-2 w-5 h-5 rounded-full bg-accent border-4 border-background shadow" />
                  <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-3">
                      2023 - 2027
                    </span>
                    <h4 className="font-display font-semibold text-lg text-card-foreground">
                      B.Tech in Computer Engineering
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      Sanjivani College of Engineering
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Currently in 3rd year, focusing on software development,
                      data structures, and web technologies.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-2 top-2 w-5 h-5 rounded-full bg-secondary border-4 border-background shadow" />
                  <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow">
                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-3">
                      Completed
                    </span>
                    <h4 className="font-display font-semibold text-lg text-card-foreground">
                      Higher Secondary Education
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      Science Stream (PCM)
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Built strong foundation in mathematics and physics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
