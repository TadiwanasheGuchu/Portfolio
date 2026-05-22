"use client";

import { motion } from "framer-motion";

const stack = [
  { label: "JAVA",        color: "#F05A28", opacity: 1    },
  { label: "SPRING BOOT", color: "#1A1A2E", opacity: 0.45 },
  { label: "REACT",       color: "#1A1A2E", opacity: 0.85 },
  { label: "NEXT.JS",     color: "#F05A28", opacity: 0.65 },
  { label: "FASTAPI",     color: "#1A1A2E", opacity: 0.35 },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen min-h-[600px] bg-[#FAE9E0] relative overflow-hidden"
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 rounded-full blur-[110px] opacity-25 bg-[#F05A28] pointer-events-none z-0"
      />

      {/* ── Mobile layout (below md) ── */}
      <div className="md:hidden h-full flex flex-col justify-between px-6 pt-20 pb-8 relative z-10">
        {/* Name */}
        <motion.div {...fade(0.1)}>
          <h1
            className="leading-none select-none text-[#1A1A2E] uppercase"
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(44px, 12vw, 72px)" }}
          >
            TADIWANASHE
          </h1>
          <h1
            className="leading-none select-none text-[#F05A28] uppercase"
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(44px, 12vw, 72px)" }}
          >
            GUCHU
          </h1>
        </motion.div>

        {/* Tech tower */}
        <motion.div
          {...fade(0.25)}
          className="flex flex-col items-center self-center"
          style={{ gap: "1px" }}
        >
          {stack.map(({ label, color, opacity }) => (
            <span
              key={label}
              className="select-none"
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: label === "JAVA" || label === "REACT" ? "clamp(38px, 10vw, 56px)" : "clamp(18px, 5vw, 28px)",
                color,
                opacity,
                lineHeight: 1,
              }}
            >
              {label}
            </span>
          ))}
        </motion.div>

        {/* Subtitle + CTA + social */}
        <motion.div {...fade(0.4)}>
          <p
            className="leading-snug mb-4"
            style={{ fontFamily: "var(--font-geist-sans)", fontSize: "16px", fontWeight: 400, color: "#1A1A2E" }}
          >
            I&apos;m a software developer<br />
            <span style={{ color: "#F05A28", fontWeight: 600 }}>based in Harare, Zimbabwe.</span>
          </p>
          <a
            href="#work"
            className="inline-block bg-[#F05A28] text-white font-bold uppercase tracking-widest rounded-lg hover:bg-[#d94e20] transition-colors duration-200 mb-6"
            style={{ fontSize: "11px", padding: "12px 24px" }}
          >
            SEE MY WORK
          </a>
          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/tadiwanashe-guchu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#1A1A2E] hover:text-[#F05A28] transition-colors duration-200">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/TadiwanasheGuchu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#1A1A2E] hover:text-[#F05A28] transition-colors duration-200">
              <GitHubIcon />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Desktop layout (md and above) ── */}
      <div className="hidden md:block h-full">

        {/* TADIWANASHE */}
        <motion.h1
          className="absolute left-6 leading-none select-none z-20 text-[#1A1A2E] uppercase"
          style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(42px, 7.2vw, 104px)", top: "16vh" }}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          TADIWANASHE
        </motion.h1>

        {/* Tech tower */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col items-center" style={{ gap: "2px" }}>
            {stack.map(({ label, color, opacity }) => (
              <span
                key={label}
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: label === "JAVA" || label === "REACT"
                    ? "clamp(52px, 8vw, 96px)"
                    : label === "NEXT.JS"
                    ? "clamp(28px, 3.8vw, 48px)"
                    : "clamp(22px, 3vw, 38px)",
                  color,
                  opacity,
                  lineHeight: 1,
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle + CTA */}
        <motion.div
          className="absolute left-6 z-20"
          style={{ bottom: "22vh" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.4 }}
        >
          <p
            className="text-[#1A1A2E] leading-snug"
            style={{ fontFamily: "var(--font-geist-sans)", fontSize: "17px", fontWeight: 400 }}
          >
            I&apos;m a software developer<br />
            <span style={{ color: "#F05A28", fontWeight: 600 }}>based in Harare, Zimbabwe.</span>
          </p>
          <a
            href="#work"
            className="mt-5 inline-block bg-[#F05A28] text-white font-bold uppercase tracking-widest rounded-lg hover:bg-[#d94e20] transition-colors duration-200"
            style={{ fontSize: "11px", padding: "12px 24px" }}
          >
            SEE MY WORK
          </a>
        </motion.div>

        {/* GUCHU */}
        <motion.h1
          className="absolute right-6 leading-none select-none z-20 text-[#F05A28] uppercase"
          style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(42px, 7.2vw, 104px)", bottom: "20vh" }}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          GUCHU
        </motion.h1>

        {/* Social icons */}
        <motion.div
          className="absolute bottom-7 right-8 z-20 flex items-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <a href="https://www.linkedin.com/in/tadiwanashe-guchu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#1A1A2E] hover:text-[#F05A28] transition-colors duration-200">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/TadiwanasheGuchu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#1A1A2E] hover:text-[#F05A28] transition-colors duration-200">
            <GitHubIcon />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}
