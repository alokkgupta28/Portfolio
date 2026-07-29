import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Theme = "dark" | "light";

function getInitial(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme") as Theme | null;
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [ripple, setRipple] = useState<{ x: number; y: number; color: string; id: number } | null>(
    null,
  );
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTheme(getInitial());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const rect = btnRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    // Fill = the target theme's background
    const color = next === "dark" ? "oklch(0.15 0 0)" : "oklch(0.972 0.004 80)";
    setRipple({ x, y, color, id: Date.now() });
    setTheme(next);
  };

  const maxRadius = ripple
    ? Math.hypot(
      Math.max(ripple.x, window.innerWidth - ripple.x),
      Math.max(ripple.y, window.innerHeight - ripple.y),
    )
    : 0;

  return (
    <>
      <button
        ref={btnRef}
        onClick={toggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className={`relative flex h-10 w-10 items-center justify-center overflow-hidden border hairline transition-transform hover:scale-105 active:scale-95 ${className}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center justify-center"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {ripple && (
          <motion.div
            key={ripple.id}
            initial={{ clipPath: `circle(0px at ${ripple.x}px ${ripple.y}px)` }}
            animate={{ clipPath: `circle(${maxRadius}px at ${ripple.x}px ${ripple.y}px)` }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            onAnimationComplete={() => setRipple(null)}
            className="pointer-events-none fixed inset-0 z-[9999]"
            style={{ background: ripple.color }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
