"use client";

import { motion } from "framer-motion";

const work = [
  {
    period: "Jan 2025 – Jun 2025",
    title: "IT Support Engineer",
    company: "InterAfrica Tobacco",
    description:
      "Maintained a web-based buying system with 99.9% uptime for 200+ daily users. Resolved 50+ support tickets per cycle, integrated third-party APIs, and led software patch deployments.",
  },
  {
    period: "2023 – 2024",
    title: "Software Engineer Attachment",
    company: "Ministry of ICT, Zimbabwe",
    description:
      "Co-developed a Java/Spring Boot web application. Built frontend components in React, designed RESTful APIs, and worked in a cross-functional Agile/Scrum team with daily stand-ups and sprint ceremonies.",
  },
];

const education = [
  { year: "2024", degree: "National Diploma in Software Engineering", institution: "Telone Centre for Learning" },
  { year: "2023", degree: "Certificate in Web Design",                institution: "Alison Online Learning" },
];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

export default function Experience() {
  return (
    <section id="experience" className="bg-[#FAE9E0] px-6 md:px-16 lg:px-24 py-20 md:py-24 scroll-mt-20">

      <div style={{ height: "1px", background: "rgba(26,26,46,0.1)", marginBottom: "56px" }} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-24">

        {/* Work */}
        <div>
          <motion.h2
            {...inView()}
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 64px)", color: "#1A1A2E", lineHeight: 1 }}
            className="mb-10 md:mb-12"
          >
            EXPERIENCE
          </motion.h2>

          <div className="flex flex-col gap-10">
            {work.map((item, i) => (
              <motion.div key={item.title} {...inView(0.1 + i * 0.1)}>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "11px", color: "#F05A28", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
                  {item.period}
                </p>
                <h3 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "17px", color: "#1A1A2E", fontWeight: 600, lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "14px", color: "#1A1A2E", opacity: 0.45, fontWeight: 400, marginBottom: "10px" }}>
                  {item.company}
                </p>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "14px", color: "#1A1A2E", opacity: 0.62, lineHeight: 1.75, maxWidth: "480px" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h2
            {...inView(0.1)}
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 64px)", color: "#1A1A2E", lineHeight: 1 }}
            className="mb-10 md:mb-12"
          >
            EDUCATION
          </motion.h2>

          <div className="flex flex-col gap-9">
            {education.map((item, i) => (
              <motion.div key={item.degree} {...inView(0.2 + i * 0.1)}>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "11px", color: "#F05A28", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
                  {item.year}
                </p>
                <h3 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "16px", color: "#1A1A2E", fontWeight: 600, lineHeight: 1.4, maxWidth: "360px" }}>
                  {item.degree}
                </h3>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "14px", color: "#1A1A2E", opacity: 0.45, fontWeight: 400, marginTop: "4px" }}>
                  {item.institution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
