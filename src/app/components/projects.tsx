"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

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

              {/* Number + external link */}
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

              {/* Project name — links to detail page */}
              <Link href={`/projects/${project.slug}`} className="group block">
                <h3
                  className="group-hover:text-[#F05A28] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(32px, 5.5vw, 72px)", color: "#1A1A2E", lineHeight: 1 }}
                >
                  {project.name}
                </h3>
              </Link>

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
                {project.summary}
              </p>

              {/* Detail page link */}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 mt-5 hover:gap-3 transition-all duration-200"
                style={{ fontFamily: "var(--font-geist-sans)", fontSize: "11px", color: "#1A1A2E", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.5 }}
              >
                View Details <span aria-hidden>→</span>
              </Link>

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
