import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/projects";
import Navbar from "../../components/navbar";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Tadiwanashe Guchu`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const { number, name, subtitle, tech, summary, details, link, linkLabel, screenshot } = project;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAE9E0] px-6 md:px-16 lg:px-24 pt-32 pb-20">

        {/* Back link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 mb-16 group"
          style={{ fontFamily: "var(--font-geist-sans)", fontSize: "12px", color: "#1A1A2E", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.5 }}
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200 inline-block">←</span>
          All Projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "12px", color: "#F05A28", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "8px" }}>
            {number}
          </p>
          <h1
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(48px, 8vw, 112px)", color: "#1A1A2E", lineHeight: 1 }}
          >
            {name}
          </h1>
          <p
            className="mt-2"
            style={{ fontFamily: "var(--font-geist-sans)", fontSize: "14px", color: "#1A1A2E", opacity: 0.45, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase" }}
          >
            {subtitle}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {tech.map((t) => (
            <span
              key={t}
              style={{ fontFamily: "var(--font-geist-sans)", fontSize: "12px", color: "#1A1A2E", background: "rgba(26,26,46,0.07)", padding: "5px 12px", borderRadius: "4px", fontWeight: 500 }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ height: "1px", background: "rgba(26,26,46,0.1)", marginBottom: "48px" }} />

        {/* Screenshot */}
        {screenshot && (
          <div className="mb-16 rounded-xl overflow-hidden" style={{ maxWidth: "900px" }}>
            <Image
              src={screenshot}
              alt={`${name} screenshot`}
              width={1440}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        )}

        {/* Summary */}
        <p
          className="mb-12"
          style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px", color: "#1A1A2E", lineHeight: 1.8, maxWidth: "720px" }}
        >
          {summary}
        </p>

        {/* What I built */}
        <h2
          className="mb-8"
          style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(24px, 3vw, 36px)", color: "#1A1A2E", lineHeight: 1 }}
        >
          WHAT I BUILT
        </h2>

        <ul className="flex flex-col gap-5 mb-16" style={{ maxWidth: "720px" }}>
          {details.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span style={{ color: "#F05A28", fontFamily: "var(--font-anton)", fontSize: "14px", lineHeight: "1.8", flexShrink: 0 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "16px", color: "#1A1A2E", opacity: 0.75, lineHeight: 1.75 }}>
                {item}
              </p>
            </li>
          ))}
        </ul>

        {/* External link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
          >
            <span
              className="bg-[#F05A28] text-white font-bold uppercase tracking-widest rounded-lg hover:bg-[#d94e20] transition-colors duration-200"
              style={{ fontFamily: "var(--font-geist-sans)", fontSize: "11px", padding: "14px 28px" }}
            >
              {linkLabel}
            </span>
            <span aria-hidden className="text-[#F05A28] group-hover:translate-x-1 transition-transform duration-200 inline-block text-lg">
              →
            </span>
          </a>
        )}

      </main>
    </>
  );
}
