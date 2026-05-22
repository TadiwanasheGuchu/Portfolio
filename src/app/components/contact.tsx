"use client";

import { motion } from "framer-motion";

const links = [
  { label: "tadiwanasheguchu@gmail.com",       href: "mailto:tadiwanasheguchu@gmail.com" },
  { label: "linkedin.com/in/tadiwanashe-guchu", href: "https://www.linkedin.com/in/tadiwanashe-guchu" },
  { label: "github.com/TadiwanasheGuchu",       href: "https://github.com/TadiwanasheGuchu" },
];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FAE9E0] px-6 md:px-16 lg:px-24 pt-20 md:pt-24 pb-14 scroll-mt-20">

      <div style={{ height: "1px", background: "rgba(26,26,46,0.1)", marginBottom: "56px" }} />

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-14">

        <motion.h2
          {...inView()}
          style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(48px, 8vw, 104px)", color: "#1A1A2E", lineHeight: 1 }}
        >
          LET&apos;S WORK<br />TOGETHER
        </motion.h2>

        <motion.div {...inView(0.15)} className="flex flex-col gap-5">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-3 group w-fit"
            >
              <span
                className="group-hover:text-[#F05A28] transition-colors duration-200"
                style={{ fontFamily: "var(--font-geist-sans)", fontSize: "15px", color: "#1A1A2E", fontWeight: 500 }}
              >
                {label}
              </span>
              <span aria-hidden className="text-[#F05A28] group-hover:translate-x-1 transition-transform duration-200 inline-block">
                →
              </span>
            </a>
          ))}

          <a
            href="mailto:tadiwanasheguchu@gmail.com"
            className="mt-5 inline-block bg-[#F05A28] text-white font-bold uppercase tracking-widest rounded-lg w-fit hover:bg-[#d94e20] transition-colors duration-200"
            style={{ fontFamily: "var(--font-geist-sans)", fontSize: "11px", padding: "14px 28px" }}
          >
            HIRE ME
          </a>
        </motion.div>

      </div>

      <motion.p
        {...inView(0.25)}
        className="mt-16 md:mt-20"
        style={{ fontFamily: "var(--font-geist-sans)", fontSize: "12px", color: "#1A1A2E", opacity: 0.3, letterSpacing: "0.04em" }}
      >
        © 2025 Tadiwanashe Guchu. All rights reserved.
      </motion.p>

    </section>
  );
}
