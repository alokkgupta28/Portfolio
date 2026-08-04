import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, FileWarning, ArrowUpRight } from "lucide-react";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  /** Place the file under /public/certificates/<filename>. Supports .png/.jpg/.pdf. */
  file?: string;
};

const certifications: Cert[] = [
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "2024",
    file: "/certificates/infosys-ai.pdf",
  },
  {
    title: "Introduction to MongoDB",
    issuer: "MongoDB",
    date: "2024",
    file: "/certificates/mongodb.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2024",
    file: "/certificates/cisco-cybersecurity.pdf",
  },
  {
    title: "Design Thinking for Innovation",
    issuer: "Coursera",
    date: "2024",
    file: "/certificates/design-thinking.pdf",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata · Forage",
    date: "2024",
    file: "/certificates/tata-forage-cybersecurity.pdf",
  },
  {
    title: "AI/ML Virtual Internship",
    issuer: "Edunet Foundation × AICTE",
    date: "2025",
    file: "/certificates/edunet-aiml.pdf",
  },
];

export function Certifications() {
  const [active, setActive] = useState<Cert | null>(null);
  const [errored, setErrored] = useState(false);

  const isPdf = active?.file?.toLowerCase().endsWith(".pdf");

  return (
    <section id="certifications" className="relative px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4">
        <span className="index-label col-span-12 mb-6 md:col-span-1 md:mb-0">05 — Credentials</span>

        <div className="col-span-12 md:col-start-3 md:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <h2 className="font-display text-4xl font-black tracking-tighter md:text-6xl">
              Certificates <span className="italic font-light">& courses.</span>
            </h2>
            <p className="index-label md:mb-3">Tap any card to view</p>
          </motion.div>

          <ol className="mt-12 border-t hairline">
            {certifications.map((c, idx) => (
              <motion.li
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group border-b hairline"
              >
                <button
                  type="button"
                  onClick={() => {
                    setErrored(false);
                    setActive(c);
                  }}
                  className="grid w-full grid-cols-12 gap-4 py-6 text-left transition-colors duration-500 hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)] md:py-8"
                >
                  <span className="col-span-2 pl-2 font-mono text-xs tabular-nums opacity-60 md:col-span-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10 md:col-span-7">
                    <h3 className="font-display text-lg font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-2xl">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest opacity-70">
                      {c.issuer}
                    </p>
                  </div>
                  <span className="col-span-6 hidden font-mono text-xs tabular-nums opacity-70 md:col-span-2 md:block">
                    {c.date}
                  </span>
                  <span className="col-span-6 flex items-center justify-end pr-2 md:col-span-2">
                    <ArrowUpRight className="h-5 w-5 opacity-40 transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100" />
                  </span>
                </button>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      {/* Viewer modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[color:var(--foreground)]/50 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden border hairline bg-[color:var(--card)]"
            >
              <div className="flex items-center justify-between border-b hairline p-4">
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">{active.title}</h3>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-widest opacity-70">
                    {active.issuer} · {active.date}
                  </p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="flex h-10 w-10 items-center justify-center border hairline hover:bg-[color:var(--primary)] hover:text-[color:var(--primary-foreground)]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1 overflow-auto bg-[color:var(--secondary)]">
                {!active.file || errored ? (
                  <div className="flex h-[60vh] flex-col items-center justify-center gap-3 p-8 text-center text-[color:var(--muted-foreground)]">
                    <FileWarning className="h-10 w-10" />
                    <p className="text-sm">
                      Certificate not uploaded yet. Add the file at:
                      <br />
                      <code className="mt-2 inline-block border hairline bg-[color:var(--background)] px-2 py-1 font-mono text-xs">
                        public{active.file ?? "/certificates/your-file.pdf"}
                      </code>
                    </p>
                  </div>
                ) : isPdf ? (
                  <object data={active.file} type="application/pdf" className="h-[75vh] w-full">
                    <iframe
                      src={active.file}
                      title={active.title}
                      className="h-[75vh] w-full"
                      onError={() => setErrored(true)}
                    />
                  </object>
                ) : (
                  <img
                    src={active.file}
                    alt={active.title}
                    className="mx-auto max-h-[75vh] w-auto"
                    onError={() => setErrored(true)}
                  />
                )}
              </div>
              {active.file && !errored && (
                <div className="border-t hairline p-3 text-right">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(active.file, '_blank', 'noopener,noreferrer');
                    }}
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest hover:text-[color:var(--primary)]"
                  >
                    Open in new tab <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
