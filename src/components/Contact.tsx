import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "amollende02@gmail.com",
    href: "mailto:amollende02@gmail.com",
    color: "hsl(185 100% 55%)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8862008956",
    href: "tel:+91 8862008956",
    color: "hsl(120 60% 55%)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gavthan Babhulwandi , At/Post :- Pimparkane - 422604 ,Maharashtra, India",
    href: "#",
    color: "hsl(38 100% 60%)",
  },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/amol-lende-247b57288/", color: "hsl(210 100% 65%)" },
  { icon: Github, label: "GitHub", href: "https://github.com/Amollende12", color: "hsl(215 20% 80%)" },
];

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const header = useScrollReveal();
  const left = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const right = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: "hsl(220 50% 8%)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(185 100% 55%) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[300px] h-[300px] opacity-10"
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
          className={`text-center mb-20 transition-all duration-700 ${header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p
            className="font-semibold uppercase tracking-[0.3em] text-sm mb-3"
            style={{ color: "hsl(185 100% 55%)" }}
          >
            Get In Touch
          </p>
          <h2 className="section-title" style={{ color: "hsl(210 40% 98%)" }}>
            Let's Work{" "}
            <span className="text-gradient">Together</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            I'm always open to discussing new opportunities, collaborations, or
            just having a friendly chat about technology.
          </p>
          <div className="divider-gradient w-24 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            ref={left.ref}
            className={`transition-all duration-700 delay-100 ${left.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
          >
            <h3
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: "var(--font-display)", color: "hsl(210 30% 92%)" }}
            >
              Contact Information
            </h3>

            <div className="space-y-5 mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 group p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: "hsl(220 40% 10%)",
                    border: "1px solid hsl(215 30% 17%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = info.color.replace(")", " / 0.4)");
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${info.color.replace(")", " / 0.1)")}`;
                    (e.currentTarget as HTMLElement).style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(215 30% 17%)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: info.color.replace(")", " / 0.12)"),
                      border: `1px solid ${info.color.replace(")", " / 0.25)")}`,
                      color: info.color,
                    }}
                  >
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "hsl(215 20% 45%)" }}>
                      {info.label}
                    </p>
                    <p className="font-semibold" style={{ color: "hsl(210 30% 88%)" }}>
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4" style={{ color: "hsl(215 20% 55%)" }}>
                Connect on Social
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                    style={{
                      background: "hsl(220 40% 11%)",
                      border: `1px solid ${social.color.replace(")", " / 0.2)")}`,
                      color: social.color,
                    }}
                    aria-label={social.label}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = social.color.replace(")", " / 0.12)");
                      (e.currentTarget as HTMLElement).style.borderColor = social.color.replace(")", " / 0.45)");
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${social.color.replace(")", " / 0.2)")}`;
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "hsl(220 40% 11%)";
                      (e.currentTarget as HTMLElement).style.borderColor = social.color.replace(")", " / 0.2)");
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <social.icon size={18} />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={right.ref}
            className={`transition-all duration-700 delay-200 ${right.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            <div
              className="relative rounded-2xl p-7 md:p-10 overflow-hidden"
              style={{
                background: "hsl(220 40% 10%)",
                border: "1px solid hsl(185 100% 55% / 0.15)",
                boxShadow: "0 0 60px hsl(185 100% 55% / 0.05), inset 0 0 40px hsl(185 100% 55% / 0.02)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, hsl(185 100% 55% / 0.5), transparent)" }}
              />

              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, hsl(185 100% 45%) 0%, hsl(210 100% 55%) 100%)",
                  }}
                >
                  <MessageSquare className="text-slate-900" size={18} />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "hsl(210 30% 92%)" }}
                >
                  Send a Message
                </h3>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{
                      background: "hsl(185 100% 55% / 0.15)",
                      border: "1px solid hsl(185 100% 55% / 0.3)",
                    }}
                  >
                    <CheckCircle
                      size={40}
                      style={{ color: "hsl(185 100% 55%)" }}
                    />
                  </div>
                  <h4
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "hsl(210 30% 92%)" }}
                  >
                    Message Sent! 🎉
                  </h4>
                  <p style={{ color: "hsl(215 20% 55%)" }}>
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: "name", label: "Your Name", type: "text", placeholder: "Enter Your Name" },
                    { id: "email", label: "Your Email", type: "email", placeholder: "Enter Your Email" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block text-sm font-medium mb-2"
                        style={{ color: "hsl(215 20% 65%)" }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        value={formState[field.id as keyof typeof formState]}
                        onChange={(e) =>
                          setFormState({ ...formState, [field.id]: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                        style={{
                          background: "hsl(220 45% 8%)",
                          border: "1px solid hsl(215 30% 18%)",
                          color: "hsl(210 30% 90%)",
                        }}
                        placeholder={field.placeholder}
                        required
                        onFocus={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.5)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px hsl(185 100% 55% / 0.08)";
                        }}
                        onBlur={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "hsl(215 30% 18%)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "none";
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "hsl(215 20% 65%)" }}
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
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none"
                      style={{
                        background: "hsl(220 45% 8%)",
                        border: "1px solid hsl(215 30% 18%)",
                        color: "hsl(210 30% 90%)",
                      }}
                      placeholder="Hi Amol, I'd like to discuss..."
                      required
                      onFocus={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.5)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px hsl(185 100% 55% / 0.08)";
                      }}
                      onBlur={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "hsl(215 30% 18%)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, hsl(185 100% 50%) 0%, hsl(210 100% 60%) 100%)",
                      color: "hsl(220 60% 8%)",
                      boxShadow: "0 6px 25px hsl(185 100% 55% / 0.35)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 35px hsl(185 100% 55% / 0.55)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 25px hsl(185 100% 55% / 0.35)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
