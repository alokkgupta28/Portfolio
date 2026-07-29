import { motion } from "framer-motion";

const stats = [
  { value: "7.84", label: "CGPA / 10" },
  { value: "97%", label: "Model accuracy" },
  { value: "04+", label: "Projects built" },
  { value: "06+", label: "Certifications" },
];

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4">
        <span className="index-label col-span-12 mb-6 md:col-span-1 md:mb-0">01 — About</span>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-start-3 md:col-span-6"
        >
          <h2 className="font-display text-4xl font-black tracking-tighter md:text-6xl">
            A builder at heart, <span className="italic font-light">obsessed with creating.</span>
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[color:var(--muted-foreground)]">
            I&apos;m a Computer Science undergrad at{" "}
            <span className="font-semibold text-[color:var(--foreground)]">
              Noida Institute of Engineering &amp; Technology
            </span>
            , blending full-stack development with machine learning. I take ideas from rough
            sketches to real, working apps that people can actually use.
          </p>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-[color:var(--muted-foreground)]">
            Most recently, I trained as an{" "}
            <span className="font-semibold text-[color:var(--foreground)]">
              AI/ML Intern at Edunet Foundation × AICTE
            </span>
            , where I built a breast-cancer prediction system at 97% accuracy and launched it as a
            live app. Off-screen: new frameworks, systems design, side projects.
          </p>
        </motion.div>

        {/* Stats column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 mt-12 md:col-start-10 md:col-span-3 md:mt-0"
        >
          <div className="index-label mb-6 border-b hairline pb-3">Snapshot</div>
          <ul>
            {stats.map((s, i) => (
              <li
                key={s.label}
                className={`flex items-baseline justify-between py-4 ${i !== stats.length - 1 ? "border-b hairline" : ""}`}
              >
                <span className="font-display text-3xl font-black tabular-nums md:text-4xl">
                  {s.value}
                </span>
                <span className="index-label text-right">{s.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
