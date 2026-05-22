"use client";

import { useState, useEffect } from "react";

const sections = ["home", "work", "about", "experience", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 80;
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const link = (id: string, label: string) => (
    <a
      href={`#${id}`}
      className="transition-colors duration-200"
      style={{ color: active === id ? "#F05A28" : "#1A1A2E" }}
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAE9E0] flex items-center justify-between px-8 py-5">
      <LogoMark />
      <nav className="hidden sm:flex items-center gap-10 text-sm font-medium">
        {link("work", "My Work")}
        {link("about", "About")}
        {link("experience", "Experience")}
      </nav>
      <a
        href="#contact"
        className="text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors duration-200"
        style={{ background: active === "contact" ? "#d94e20" : "#F05A28" }}
      >
        Hire Me
      </a>
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-label="Logo">
      <circle cx="9"  cy="9"  r="5.5" fill="#F05A28" fillOpacity="0.90" />
      <circle cx="22" cy="7"  r="4.0" fill="#F05A28" fillOpacity="0.70" />
      <circle cx="15" cy="20" r="6.5" fill="#F05A28" fillOpacity="0.80" />
      <circle cx="27" cy="19" r="4.5" fill="#F05A28" fillOpacity="0.55" />
      <circle cx="9"  cy="27" r="3.5" fill="#F05A28" fillOpacity="0.45" />
    </svg>
  );
}
