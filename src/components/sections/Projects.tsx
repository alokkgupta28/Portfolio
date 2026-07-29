import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import thumbPharma from "@/assets/thumb-pharma.png";
import thumbBreast from "@/assets/thumb-breast.jpg";
import thumbEvents from "@/assets/thumb-events.jpg";
import thumbSmartPS from "@/assets/thumb-smartps.png";
import thumbUrbanFix from "@/assets/thumb-urbanfix.png";
import thumbComing2 from "@/assets/thumb-coming2.jpg";

type Project = {
  title: string;
  category: "ML" | "Full Stack" | "Web";
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  highlights: string[];
  thumbnail: string;
  link?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "UrbanFix",
    category: "Full Stack",
    year: "2025",
    description: "Home service booking platform connecting customers with verified professionals.",
    longDescription:
      "UrbanFix is a full-stack platform for booking trusted home service professionals — electricians, plumbers, AC technicians, carpenters, painters, cleaners, and more. Built with a React frontend and a Spring Boot + PostgreSQL backend, it supports JWT authentication, secure Razorpay payments, and role-based dashboards for customers, providers, and admins.",
    tags: ["React", "Spring Boot", "PostgreSQL", "JWT", "Razorpay"],
    highlights: ["Role-based dashboards", "Razorpay payments", "JWT authentication"],
    thumbnail: thumbUrbanFix,
    link: "https://urbanfix-peach.vercel.app/",
    repo: "https://github.com/alokkgupta28/UrbanFix",
  },
  {
    title: "Pharma Guard",
    category: "Full Stack",
    year: "2024",
    description: "Pharmacy safety platform for verifying medicines and flagging risks.",
    longDescription:
      "Pharma Guard is a full-stack web application that helps users verify medicines, check for interactions, and stay safe from counterfeit or unsafe pharmaceutical products. Modern React frontend, deployed on Vercel for fast, reliable access.",
    tags: ["React", "TypeScript", "Tailwind", "Vercel"],
    highlights: ["Live deployment", "Medicine verification", "Responsive UI"],
    thumbnail: thumbPharma,
    link: "https://pharma-guard-topaz.vercel.app/",
    repo: "https://github.com/alokkgupta28/Pharma-Guard",
  },
  {
    title: "Breast Cancer Detection",
    category: "ML",
    year: "2025",
    description: "Random Forest model at 97% accuracy, deployed via Streamlit.",
    longDescription:
      "End-to-end ML pipeline that classifies tumors from medical datasets. Rigorous preprocessing, feature selection, and evaluation — wrapped in a Streamlit UI clinicians can actually use.",
    tags: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    highlights: ["97.08% accuracy", "Live web app", "Real-time predictions"],
    thumbnail: thumbBreast,
    link: "https://breast-cancer-predictionn.streamlit.app/",
    repo: "https://github.com/alokkgupta28/breast-cancer-prediction",
  },
  {
    title: "Smart Public Service",
    category: "Web",
    year: "2024",
    description: "Service request tracking app focused on accessibility.",
    longDescription:
      "A civic-tech web application that lets citizens raise and track service requests. Designed with accessibility-first principles so people of all backgrounds can navigate it confidently.",
    tags: ["HTML", "CSS", "JavaScript", "A11y"],
    highlights: ["Request tracking", "Accessibility-first", "Clean workflows"],
    thumbnail: thumbSmartPS,
    link: "https://smart-public-service-zeta.vercel.app/",
    repo: "https://github.com/alokkgupta28/Smart-Public-Service",
  },
  {
    title: "Event Management System",
    category: "Full Stack",
    year: "2024",
    description: "Event registration platform with full CRUD and responsive UI.",
    longDescription:
      "Complete event registration platform with admin and attendee flows. Handles user data, event lifecycle, and bookings with clean CRUD operations and a mobile-first interface.",
    tags: ["HTML", "CSS", "JavaScript", "CRUD"],
    highlights: ["Responsive UI", "Admin dashboard", "Data validation"],
    thumbnail: thumbEvents,
    repo: "https://github.com/alokkgupta28/Event-Management-System",
  },
  {
    title: "In Development · Slot 06",
    category: "ML",
    year: "Soon",
    description: "Placeholder for an upcoming ML project.",
    longDescription:
      "Reserved for an upcoming ML project. Edit src/components/sections/Projects.tsx when ready.",
    tags: ["TBA"],
    highlights: ["Coming soon"],
    thumbnail: thumbComing2,
  },
];

const filters: Array<Project["category"] | "All"> = ["All", "ML", "Full Stack", "Web"];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4">
        <span className="index-label col-span-12 mb-6 md:col-span-1 md:mb-0">03 — Projects</span>

        <div className="col-span-12 md:col-start-3 md:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <h2 className="font-display text-4xl font-black tracking-tighter md:text-6xl">
              Projects I&apos;m <span className="italic font-light">proud of.</span>
            </h2>
            <span className="index-label md:mb-3">Vol. 01 · {projects.length} projects</span>
          </motion.div>

          {/* Filter rail */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-y hairline py-4">
            <span className="index-label mr-2">Filter</span>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${filter === f
                  ? "text-[color:var(--primary)]"
                  : "text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
                  }`}
              >
                {f}
                {filter === f && <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />}
              </button>
            ))}
          </div>

          {/* Project list — editorial rows with inline thumbnails */}
          <ul className="border-b hairline">
            <AnimatePresence mode="popLayout">
              {visible.map((p, idx) => (
                <ProjectRow
                  key={p.title}
                  project={p}
                  idx={idx}
                  onOpen={() => setActive(p)}
                />
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>

      {/* Case study modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[color:var(--foreground)]/40 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto border hairline bg-[color:var(--card)]"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close project details"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border hairline bg-[color:var(--background)] hover:bg-[color:var(--primary)] hover:text-[color:var(--primary-foreground)]"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="aspect-[16/9] overflow-hidden border-b hairline bg-[color:var(--secondary)]">
                <img
                  src={active.thumbnail}
                  alt={`${active.title} preview`}
                  className="h-full w-full object-cover"
                  width={1280}
                  height={720}
                />
              </div>
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <span className="index-label">{active.category} · {active.year}</span>
                </div>
                <h3 className="mt-4 font-display text-3xl font-black tracking-tighter md:text-5xl">{active.title}</h3>
                <p className="mt-5 max-w-xl text-[color:var(--muted-foreground)] md:text-lg">{active.longDescription}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {active.link && (
                    <a
                      href={active.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[color:var(--foreground)] bg-[color:var(--foreground)] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--background)] transition-colors hover:bg-[color:var(--primary)] hover:border-[color:var(--primary)]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live demo
                    </a>
                  )}
                  {active.repo && (
                    <a
                      href={active.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[color:var(--foreground)] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)]"
                    >
                      <Github className="h-3.5 w-3.5" /> Source code
                    </a>
                  )}
                </div>

                <div className="mt-10 grid gap-8 border-t hairline pt-8 md:grid-cols-2">
                  <div>
                    <div className="index-label mb-4">Highlights</div>
                    <ul className="space-y-2">
                      {active.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm">
                          <span className="mt-2 h-1 w-4 shrink-0 bg-[color:var(--primary)]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="index-label mb-4">Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {active.tags.map((t) => (
                        <span key={t} className="border hairline px-3 py-1 font-mono text-[11px] uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * Editorial project row.
 */
function ProjectRow({ project, idx, onOpen }: { project: Project; idx: number; onOpen: () => void }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: idx * 0.04 }}
      onClick={onOpen}
      className="group relative cursor-pointer overflow-hidden border-t hairline transition-colors duration-500 hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)]"
      data-cursor="hover"
    >
      <div className="relative z-10 grid grid-cols-12 items-center gap-4 px-2 py-8 md:py-12">
        <span className="col-span-2 font-mono text-xs tabular-nums opacity-60 md:col-span-1">
          {String(idx + 1).padStart(2, "0")}
        </span>
        <h3 className="col-span-10 font-display text-3xl font-black tracking-tighter transition-transform duration-500 group-hover:translate-x-3 md:col-span-6 md:text-6xl">
          {project.title}
        </h3>
        <span className="col-span-6 hidden text-xs font-semibold uppercase tracking-[0.2em] opacity-70 md:col-span-3 md:block">
          {project.category}
        </span>
        <span className="col-span-6 hidden font-mono text-xs tabular-nums opacity-70 md:col-span-2 md:block md:text-right">
          {project.year}
        </span>
        <span className="col-span-12 mt-3 flex items-center gap-4 text-xs uppercase tracking-widest opacity-60 md:hidden">
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.year}</span>
        </span>
      </div>
    </motion.li>
  );
}