"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Backend",      items: ["Java", "Spring Boot", "Spring Security", "FastAPI", "Node.js"] },
  { category: "Frontend",     items: ["React", "Next.js", "Angular", "TypeScript", "React Native", "Tailwind CSS"] },
  { category: "Databases",    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "SQLAlchemy", "Supabase"] },
  { category: "DevOps",       items: ["Docker", "Docker Compose", "GitHub", "CI/CD (Render)", "EAS (Expo)"] },
  { category: "Integrations", items: ["WebSockets", "JWT Auth", "Groq AI SDK", "Twilio", "Resend", "REST APIs"] },
];

const stats = [
  { value: "2+",  label: "Years Experience" },
  { value: "90+", label: "Production Users" },
  { value: "4",   label: "Shipped Projects" },
];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function About() {
  return (
    <section id="about" className="bg-[#FAE9E0] px-6 md:px-16 lg:px-24 py-20 md:py-24 scroll-mt-20">

      <div style={{ height: "1px", background: "rgba(26,26,46,0.1)", marginBottom: "56px" }} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 xl:gap-24">

        {/* Bio */}
        <div>
          <motion.h2
            {...inView()}
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(44px, 7vw, 88px)", color: "#1A1A2E", lineHeight: 1 }}
            className="mb-8 md:mb-10"
          >
            ABOUT ME
          </motion.h2>

          <motion.p
            {...inView(0.1)}
            style={{ fontFamily: "var(--font-geist-sans)", fontSize: "17px", color: "#1A1A2E", lineHeight: 1.8, maxWidth: "580px" }}
            className="mb-5"
          >
            Results-driven software engineer with 2+ years of experience building and shipping
            full-stack web applications — from REST APIs and microservices to patient-facing mobile
            apps and school management portals used by real users in production.
          </motion.p>

          <motion.p
            {...inView(0.15)}
            style={{ fontFamily: "var(--font-geist-sans)", fontSize: "17px", color: "#1A1A2E", opacity: 0.6, lineHeight: 1.8, maxWidth: "580px" }}
          >
            I work across the complete stack: Java/Spring Boot on the backend, Angular and React on
            the frontend, PostgreSQL for data, Docker for deployment. Comfortable integrating
            third-party services — AI, SMS, email, payments — and designing role-based access
            systems in Agile teams.
          </motion.p>

          {/* Stats */}
          <motion.div {...inView(0.2)} className="flex gap-10 md:gap-14 mt-12">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(32px, 4vw, 56px)", color: "#F05A28", lineHeight: 1 }}>
                  {value}
                </p>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "11px", color: "#1A1A2E", opacity: 0.45, fontWeight: 500, letterSpacing: "0.09em", textTransform: "uppercase", marginTop: "6px" }}>
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div {...inView(0.1)}>
          <h2
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(28px, 3vw, 42px)", color: "#1A1A2E", lineHeight: 1 }}
            className="mb-8 md:mb-10"
          >
            SKILLS
          </h2>

          <div className="flex flex-col gap-7">
            {skills.map(({ category, items }, i) => (
              <motion.div key={category} {...inView(0.05 * i)}>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "10px", color: "#F05A28", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "6px" }}>
                  {category}
                </p>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "14px", color: "#1A1A2E", opacity: 0.7, lineHeight: 1.8 }}>
                  {items.join(" · ")}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
