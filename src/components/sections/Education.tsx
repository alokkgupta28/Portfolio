import { motion } from "framer-motion";

const education = [
  {
    school: "Noida Institute of Engineering and Technology",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2022 — 2027",
    detail: "CGPA 7.84 / 10. Coursework: DSA, OOP, DBMS, Operating Systems, Machine Learning.",
    tag: "In progress",
  },
  {
    school: "Senior Secondary · CBSE",
    degree: "Physics, Chemistry, Mathematics",
    period: "2022",
    detail: "Scored 82% with Computer Science as an elective.",
    tag: "Class XII",
  },
  {
    school: "Secondary · CBSE",
    degree: "All subjects",
    period: "2020",
    detail: "Scored 88%. First introduction to programming via Python.",
    tag: "Class X",
  },
];

export function Education() {
  return (
    <section id="education" className="relative px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4">
        <span className="index-label col-span-12 mb-6 md:col-span-1 md:mb-0">04 — Education</span>

        <div className="col-span-12 md:col-start-3 md:col-span-9">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-black tracking-tighter md:text-6xl"
          >
            Where I <span className="italic font-light">studied and grew.</span>
          </motion.h2>

          <ol className="mt-14 border-t hairline">
            {education.map((e, idx) => (
              <motion.li
                key={e.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group grid grid-cols-12 gap-4 border-b hairline py-10 transition-colors duration-500 hover:bg-[color:var(--card)] md:py-14"
              >
                <div className="col-span-4 md:col-span-2">
                  <div className="font-mono text-xs tabular-nums opacity-60">{e.period}</div>
                  <div className="mt-2 inline-block border hairline px-2 py-1 font-mono text-[10px] uppercase tracking-widest">
                    {e.tag}
                  </div>
                </div>
                <div className="col-span-8 md:col-span-7">
                  <h3 className="font-display text-2xl font-bold tracking-tight md:text-4xl">
                    {e.school}
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-widest opacity-70">
                    {e.degree}
                  </p>
                  <p className="mt-4 max-w-xl text-[color:var(--muted-foreground)]">{e.detail}</p>
                </div>
                <div className="col-span-12 flex items-end justify-end md:col-span-3">
                  <span className="font-display text-6xl font-black tabular-nums opacity-15 transition-opacity duration-500 group-hover:opacity-100 group-hover:text-[color:var(--primary)] md:text-8xl">
                    0{idx + 1}
                  </span>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
