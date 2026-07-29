import { motion } from "framer-motion";

const groups = [
  { label: "Languages", items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind", "HTML / CSS", "Framer Motion"] },
  { label: "Backend & Data", items: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"] },
  { label: "ML & Tools", items: ["Scikit-learn", "Pandas", "NumPy", "Streamlit", "Git / GitHub"] },
];

const also = [
  "Data Structures",
  "OOP",
  "DBMS",
  "Random Forest",
  "Bootstrap",
  "VS Code",
  "Linux",
  "Vercel",
];

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4">
        <span className="index-label col-span-12 mb-6 md:col-span-1 md:mb-0">
          02 — Capabilities
        </span>

        <div className="col-span-12 md:col-start-3 md:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl font-black tracking-tighter md:text-6xl">
              Technical <span className="italic font-light">stack &amp; craft.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base text-[color:var(--muted-foreground)] md:text-lg">
              Technologies I&apos;ve picked up from coursework, projects, and my internship. I enjoy
              both the logic behind the scenes and the design up front.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-0 border-t hairline md:grid-cols-2">
            {groups.map((g, idx) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className={`group relative border-b hairline p-7 transition-colors duration-500 hover:bg-[color:var(--card)] md:p-9 ${
                  idx % 2 === 0 ? "md:border-r hairline" : ""
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                    {g.label}
                  </h3>
                  <span className="font-mono text-xs opacity-40">0{idx + 1}</span>
                </div>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="group/i flex items-baseline gap-2 text-lg font-medium transition-colors hover:text-[color:var(--primary)] md:text-xl"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--foreground)] opacity-40 group-hover/i:bg-[color:var(--primary)] group-hover/i:opacity-100" />
                      {it}
                    </li>
                  ))}
                </ul>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[color:var(--primary)] transition-transform duration-700 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <div className="index-label mb-4 flex items-center gap-3">
              Also fluent in
              <span className="h-px flex-1 bg-current opacity-30" />
            </div>
            <div className="flex flex-wrap gap-2">
              {also.map((t) => (
                <span
                  key={t}
                  className="border hairline px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors hover:border-[color:var(--foreground)] hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
