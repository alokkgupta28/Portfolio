import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t hairline px-5 pt-14 pb-8 md:px-10 md:pt-20 md:pb-10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-10">
        {/* Brand column */}
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-black uppercase tracking-tighter">
              Alok
            </span>
            <span className="text-[color:var(--primary)]">/</span>
            <span className="font-display text-2xl font-black uppercase tracking-tighter">
              Gupta
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[color:var(--muted-foreground)]">
            4th-year B.Tech CSE student who enjoys building real projects with code.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-[color:var(--muted-foreground)]">
              Open to internships & collaborations
            </span>
          </div>
        </div>

        {/* Links column */}
        <div className="col-span-6 sm:col-span-3 md:col-span-3">
          <div className="index-label mb-3">Navigate</div>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <a href="#hero" className="hover:text-[color:var(--primary)] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[color:var(--primary)] transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[color:var(--primary)] transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[color:var(--primary)] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social column */}
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <div className="index-label mb-3">Connect</div>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <a
                href="https://github.com/alokkgupta28"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[color:var(--primary)] transition-colors"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/alokkgupta28"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[color:var(--primary)] transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:alokkkumargupta863@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-[color:var(--primary)] transition-colors"
              >
                <Mail className="h-3.5 w-3.5" /> Email
              </a>
            </li>
          </ul>
        </div>

        {/* Tech stack column */}
        <div className="col-span-12 sm:col-span-6 md:col-span-2 md:text-right">
          <div className="index-label mb-3">Built with</div>
          <p className="text-sm text-[color:var(--muted-foreground)]">
            React · Tailwind · TypeScript
          </p>
          <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">Vite · shadcn/ui</p>
        </div>

        {/* Bottom bar */}
        <div className="col-span-12 mt-10 flex flex-col items-center justify-between gap-4 border-t hairline pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--muted-foreground)] sm:flex-row">
          <span>© {new Date().getFullYear()} Alok Kumar Gupta</span>
          <span>Designed & built by hand</span>
        </div>
      </div>
    </footer>
  );
}
