import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
  isScrolled?: boolean;
}

const ThemeToggle = ({ className = "", isScrolled = false }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className={`relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${className}`}
      style={{
        background: "hsl(220 40% 14%)",
        border: "1px solid hsl(185 100% 55% / 0.2)",
        color: "hsl(185 100% 55%)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "hsl(185 100% 55% / 0.15)";
        (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.45)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px hsl(185 100% 55% / 0.3)";
        (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "hsl(220 40% 14%)";
        (e.currentTarget as HTMLElement).style.borderColor = "hsl(185 100% 55% / 0.2)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
      }}
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
};

export default ThemeToggle;
