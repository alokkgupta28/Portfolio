import { motion } from "framer-motion";
import { Download } from "lucide-react";

import { MagneticButton } from "@/components/MagneticButton";

const reveal = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay: 0.15 + i * 0.08,
    },
  }),
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-dvh pt-28 md:pt-36">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4 px-5 md:px-10">
        {/* Left index rail */}
        <div className="col-span-12 mb-6 flex items-center justify-between md:col-span-1 md:mb-0 md:block">
          <span className="index-label">00 — Index</span>
          <span className="index-label md:mt-6 md:block">Vol. 01</span>
        </div>

        {/* Headline */}
        <div className="col-span-12 md:col-start-3 md:col-span-9 lg:col-span-9">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="index-label mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-current" />
            Personal Portfolio · Est. 2024
          </motion.p>

          <h1 className="font-display font-black uppercase leading-[0.82] tracking-[-0.045em] text-[18vw] md:text-[11.5vw] lg:text-[10.5vw]">
            <span className="block overflow-hidden">
              <motion.span
                variants={reveal}
                initial="hidden"
                animate="show"
                custom={0}
                className="block"
              >
                Alok
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={reveal}
                initial="hidden"
                animate="show"
                custom={1}
                className="block pl-[10vw] italic font-light"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Kumar
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={reveal}
                initial="hidden"
                animate="show"
                custom={2}
                className="block"
              >
                Gupta<span className="text-[color:var(--primary)]">.</span>
              </motion.span>
            </span>
          </h1>

          {/* Meta bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 flex flex-col gap-8 border-t hairline pt-6 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-lg font-medium leading-tight md:text-2xl">
              Full-stack developer &amp; ML enthusiast who loves turning ideas into
              <span className="italic font-normal" style={{ fontFamily: "var(--font-display)" }}>
                {" "}
                real projects
              </span>{" "}
              — from classroom concepts to working apps.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--primary)] opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--primary)]" />
                </span>
                <span className="index-label">Open to work · 2025</span>
              </div>
              <div className="index-label hidden md:block">Based in India · Working remote</div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="/Alok-Kumar-Gupta-Resume.pdf"
              download="Alok-Kumar-Gupta-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group items-center gap-3 border border-[color:var(--foreground)] bg-[color:var(--foreground)] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--background)] transition-colors hover:bg-[color:var(--primary)] hover:border-[color:var(--primary)]"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download Résumé
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="items-center gap-3 border border-[color:var(--foreground)] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)]"
            >
              Get in touch →
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right meta column */}
        <aside className="col-span-12 mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t hairline pt-8 md:col-start-3 md:col-span-10 md:grid-cols-4">
          {[
            ["Role", "Full-stack + ML"],
            ["Focus", "React · Python · Systems"],
            ["Study", "B.Tech CSE, NIET"],
            ["CGPA", "7.84 / 10"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="index-label">{k}</div>
              <div className="mt-2 text-sm font-semibold md:text-base">{v}</div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
