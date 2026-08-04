import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { MagneticButton } from "@/components/MagneticButton";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type FormState = "idle" | "submitting" | "success" | "error";

const socials = [
  {
    label: "Email",
    href: "mailto:alokkkumargupta863@gmail.com",
    handle: "alokkkumargupta863@gmail.com",
  },
  { label: "GitHub", href: "https://github.com/alokkgupta28", handle: "@alokkgupta28" },
  { label: "LinkedIn", href: "https://linkedin.com/in/alokkgupta28", handle: "in/alokkgupta28" },
];

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      setState("error");
      return;
    }
    setErrors({});
    setState("submitting");

    const subject = `Portfolio contact from ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;
    const mailto = `mailto:alokkkumargupta863@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    await new Promise((r) => setTimeout(r, 600));
    setState("success");
    form.reset();
  };

  return (
    <section id="contact" className="relative px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4">
        <span className="index-label col-span-12 mb-6 md:col-span-1 md:mb-0">06 — Contact</span>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="col-span-12 md:col-start-3 md:col-span-9"
        >
          <h2 className="font-display font-black uppercase leading-[0.85] tracking-tighter text-[15vw] md:text-[9vw]">
            Say <span className="italic font-light">hello.</span>
          </h2>
        </motion.div>

        {/* Left column — socials + copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-12 mt-16 md:col-start-3 md:col-span-4"
        >
          <p className="max-w-md text-lg text-[color:var(--muted-foreground)] md:text-xl">
            Have a project, internship, or idea you&apos;d like to discuss? Drop a line — I read
            every message and reply within a day or two.
          </p>

          <ul className="mt-10 border-t hairline">
            {socials.map((s) => (
              <li key={s.label} className="border-b hairline">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between py-5 transition-colors hover:text-[color:var(--primary)]"
                >
                  <div>
                    <div className="index-label">{s.label}</div>
                    <div className="mt-1.5 text-base font-semibold md:text-lg">{s.handle}</div>
                  </div>
                  <span className="text-lg transition-transform group-hover:translate-x-1">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right column — form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={onSubmit}
          noValidate
          className="col-span-12 mt-16 md:col-start-8 md:col-span-4"
        >
          <div className="index-label mb-6 border-b hairline pb-3">Send a message</div>

          <div className="space-y-6">
            <Field id="name" label="01 · Name" error={errors.name}>
              <input
                id="name"
                name="name"
                required
                maxLength={100}
                autoComplete="name"
                className="w-full border-0 border-b hairline bg-transparent px-0 py-3 text-lg font-medium outline-none transition-colors placeholder:text-[color:var(--muted-foreground)]/60 focus:border-[color:var(--primary)]"
                placeholder="Your name"
              />
            </Field>
            <Field id="email" label="02 · Email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                autoComplete="email"
                className="w-full border-0 border-b hairline bg-transparent px-0 py-3 text-lg font-medium outline-none transition-colors placeholder:text-[color:var(--muted-foreground)]/60 focus:border-[color:var(--primary)]"
                placeholder="you@example.com"
              />
            </Field>
            <Field id="message" label="03 · Message" error={errors.message}>
              <textarea
                id="message"
                name="message"
                required
                maxLength={1000}
                rows={4}
                className="w-full resize-none border-0 border-b hairline bg-transparent px-0 py-3 text-lg font-medium outline-none transition-colors placeholder:text-[color:var(--muted-foreground)]/60 focus:border-[color:var(--primary)]"
                placeholder="Tell me about your project…"
              />
            </Field>

            <MagneticButton
              as="button"
              type="submit"
              disabled={state === "submitting"}
              className="mt-4 group w-full items-center justify-between gap-2 border border-[color:var(--foreground)] bg-[color:var(--foreground)] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--background)] transition-colors hover:bg-[color:var(--primary)] hover:border-[color:var(--primary)] disabled:opacity-60"
            >
              <span>
                {state === "submitting"
                  ? "Sending…"
                  : state === "success"
                    ? "Message sent ✓"
                    : "Send message"}
              </span>
              {state === "idle" && (
                <span className="transition-transform group-hover:translate-x-1">→</span>
              )}
            </MagneticButton>

            {state === "success" && (
              <p role="status" className="text-center text-sm text-[color:var(--primary)]">
                Thanks! I&apos;ll get back to you shortly.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="index-label mb-1 block">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-xs text-[color:var(--destructive)]">
          {error}
        </p>
      )}
    </div>
  );
}
