import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "amol.lende@email.com",
    href: "mailto:amol.lende@email.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maharashtra, India",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/amol-lende",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/amol-lende",
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium uppercase tracking-wider mb-2">
            Get In Touch
          </p>
          <h2 className="section-title text-foreground">
            Let's Work
            <br />
            <span className="text-accent">Together</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            I'm always open to discussing new opportunities, collaborations, or
            just having a friendly chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 md:p-10 rounded-2xl shadow-card">
            <h3 className="font-display text-2xl font-semibold text-card-foreground mb-6">
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="mx-auto text-accent mb-4" size={48} />
                <h4 className="font-display text-xl font-semibold text-card-foreground mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Hi Amol, I'd like to discuss..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
