"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    name: "AUNTYSUETUT",
    subtitle: "School Management Portal",
    tech: ["FastAPI", "React 19", "PostgreSQL", "Docker Compose", "WebSockets", "Groq AI", "JWT"],
    description:
      "Full-stack rebuild of a legacy PHP system now serving 90+ real users in production. Async REST API with JWT auth and role-based access across four roles — admin, teacher, student, parent. Real-time WebSocket messaging, browser push notifications, an AI-powered student chatbot via Groq, and full data migration of 969 grades from legacy MySQL.",
    link: "https://github.com/TadiwanasheGuchu/school-portal",
    linkLabel: "GitHub",
  },
  {
    number: "02",
    name: "PHYSIOFLEX WEB",
    subtitle: "Physiotherapy Clinic Platform",
    tech: ["Next.js 16", "Supabase", "Prisma ORM", "Tailwind CSS", "Groq AI", "Twilio", "Resend", "React PDF"],
    description:
      "Full-stack clinic platform — public website, multi-step booking wizard, patient portal, and admin dashboard in one Next.js application. AI symptom checker streams responses from Groq and converts to a booking CTA. SMS reminders via Twilio, transactional emails via Resend, and server-generated PDF invoices.",
    link: "https://physioflex.na",
    linkLabel: "Live Site",
  },
  {
    number: "03",
    name: "PHYSIOFLEX MOBILE",
    subtitle: "Cross-Platform Patient App",
    tech: ["React Native 0.81", "Expo 54", "TypeScript", "Supabase", "Reanimated 4", "EAS"],
    description:
      "Mobile app for physiotherapy patients to manage their rehabilitation from their phone. Exercise program tracker with therapist-assigned routines, daily pain score logging with a visual progress timeline, and real-time patient ↔ clinic messaging via Supabase Realtime — no polling.",
    link: "https://physioflex.na",
    linkLabel: "Live Site",
  },
  {
    number: "04",
    name: "JOB BOARD API",
    subtitle: "Containerised RESTful Backend",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy 2.0", "Pydantic v2", "JWT", "Docker Compose", "Uvicorn"],
    description:
      "RESTful backend for a job board platform with employer and job seeker roles. JWT auth with bcrypt hashing, filterable job listings by location, type and skill, CV file upload on applications, and auto-generated interactive API docs. Full stack spins up with a single docker-compose up.",
    link: null,
    linkLabel: null,
  },
];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

export default function Projects() {
  return (
    <section id="work" className="bg-[#FAE9E0] px-6 md:px-16 lg:px-24 pt-20 md:pt-24 pb-8 scroll-mt-20">

      <motion.div {...inView()} className="flex items-baseline gap-6 mb-12 md:mb-16">
        <h2
          style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(44px, 7vw, 88px)", color: "#1A1A2E", lineHeight: 1 }}
        >
          MY WORK
        </h2>
        <span style={{ fontFamily: "var(--font-geist-sans)", fontSize: "12px", color: "#1A1A2E", opacity: 0.35, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {projects.length} projects
        </span>
      </motion.div>

      <div>
        {projects.map((project, i) => (
          <div key={project.number}>
            <motion.div {...inView(i * 0.08)} className="py-8 md:py-12">

              <div className="flex items-center justify-between mb-3">
                <span style={{ fontFamily: "var(--font-geist-sans)", fontSize: "12px", color: "#F05A28", fontWeight: 600, letterSpacing: "0.1em" }}>
                  {project.number}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:gap-3 transition-all duration-200"
                    style={{ fontFamily: "var(--font-geist-sans)", fontSize: "11px", color: "#F05A28", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    {project.linkLabel}<span aria-hidden>→</span>
                  </a>
                )}
              </div>

              <h3 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(32px, 5.5vw, 72px)", color: "#1A1A2E", lineHeight: 1 }}>
                {project.name}
              </h3>

              <p className="mt-1 mb-5" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "12px", color: "#1A1A2E", opacity: 0.45, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase" }}>
                {project.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} style={{ fontFamily: "var(--font-geist-sans)", fontSize: "11px", color: "#1A1A2E", background: "rgba(26,26,46,0.07)", padding: "4px 10px", borderRadius: "4px", fontWeight: 500 }}>
                    {t}
                  </span>
                ))}
              </div>

              <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "15px", color: "#1A1A2E", opacity: 0.65, lineHeight: 1.75, maxWidth: "680px" }}>
                {project.description}
              </p>

            </motion.div>
            {i < projects.length - 1 && (
              <div style={{ height: "1px", background: "rgba(26,26,46,0.1)" }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
