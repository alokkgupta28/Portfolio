import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Marquee } from "@/components/Marquee";
import { CursorFollower } from "@/components/CursorFollower";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alok Kumar Gupta — Full-Stack & ML Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Alok Kumar Gupta — CS undergrad building full-stack web apps and machine learning projects that solve real problems.",
      },
      { property: "og:title", content: "Alok Kumar Gupta — Full-Stack & ML Developer" },
      {
        property: "og:description",
        content: "Full-stack and ML projects I've built, and ways to get in touch.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alokgupta.dev/" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Alok Kumar Gupta — Full-Stack & ML Developer" },
      {
        name: "twitter:description",
        content: "Full-stack and ML projects, projects I've built, and ways to get in touch.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://alokgupta.dev/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alok Kumar Gupta",
          jobTitle: "Full-Stack & ML Developer",
          email: "mailto:alokkkumargupta863@gmail.com",
          url: "/",
          sameAs: ["https://github.com/alokkgupta28", "https://linkedin.com/in/alokkgupta28"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <CursorFollower />
      <Navbar />
      <main>
        <Hero />
        <Marquee
          items={[
            "Full-stack Developer",
            "Machine Learning",
            "React · Python",
            "Systems Thinker",
            "Available 2025",
            "Build & learn",
          ]}
          className="mt-16 md:mt-24"
        />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
