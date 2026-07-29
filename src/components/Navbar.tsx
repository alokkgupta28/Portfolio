import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About", num: "01" },
  { href: "#skills", label: "Stack", num: "02" },
  { href: "#projects", label: "Projects", num: "03" },
  { href: "#education", label: "Education", num: "04" },
  { href: "#certifications", label: "Certifications", num: "05" },
  { href: "#contact", label: "Contact", num: "06" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "border-b hairline bg-[color:var(--background)]/85 backdrop-blur-md py-3"
        : "py-5 bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a
          href="#home"
          className="group flex items-baseline gap-2 font-display font-black uppercase tracking-tighter"
        >
          <span className="text-xl md:text-2xl">Alok</span>
          <span className="text-xl md:text-2xl text-[color:var(--primary)]">/</span>
          <span className="text-xl md:text-2xl">Gupta</span>
          <span className="index-label ml-3 hidden md:inline">Portfolio · 2025</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group flex items-baseline gap-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-[color:var(--primary)]"
              >
                <span className="font-mono text-[10px] font-normal opacity-50">{l.num}</span>
                <span>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-none border border-[color:var(--foreground)] bg-[color:var(--foreground)] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--background)] transition-colors hover:bg-[color:var(--primary)] hover:border-[color:var(--primary)] lg:inline-flex"
          >
            Let's talk
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center border hairline lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-5 bg-[color:var(--foreground)] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-[color:var(--foreground)] transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-[color:var(--foreground)] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-5 mt-3 flex flex-col border hairline bg-[color:var(--background)] lg:hidden">
          {links.map((l) => (
            <li key={l.href} className="border-b hairline last:border-b-0">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] hover:bg-[color:var(--secondary)]"
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] font-normal opacity-50">{l.num}</span>
                  {l.label}
                </span>
                <span className="text-[color:var(--primary)]">→</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
