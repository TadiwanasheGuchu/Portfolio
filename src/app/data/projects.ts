export type Project = {
  slug: string;
  number: string;
  name: string;
  subtitle: string;
  tech: string[];
  summary: string;
  details: string[];
  link: string | null;
  linkLabel: string | null;
  screenshot?: string;
};

export const projects: Project[] = [
  {
    slug: "auntysuetut",
    number: "01",
    name: "AUNTYSUETUT",
    subtitle: "School Management Portal",
    tech: ["FastAPI", "React 19", "PostgreSQL", "Docker Compose", "WebSockets", "VAPID Push", "Groq AI", "JWT", "SQLAlchemy"],
    summary:
      "Full-stack rebuild of a legacy PHP system now serving 90+ real users in production. Async REST API with JWT auth and role-based access across four roles — admin, teacher, student, parent. Real-time WebSocket messaging, browser push notifications, an AI-powered student chatbot via Groq, and full data migration of 969 grades from legacy MySQL.",
    details: [
      "Async REST API (FastAPI) with JWT access/refresh token auth and role-based access control across four user roles — admin, teacher, student, parent.",
      "Role-specific dashboards: grade entry, attendance tracking, lesson creation, quiz management, fee tracking, and timetable building.",
      "Real-time messaging via WebSockets and OS-level browser push notifications (VAPID) targeted by user role.",
      "AI-powered student chatbot and automated quiz generation from uploaded PDFs using the Groq API.",
      "Full data migration of 90+ users, 969 grades, and 27 parent-student links from legacy PHP/MySQL to PostgreSQL.",
      "Containerised stack (FastAPI + React + PostgreSQL) with Docker Compose; deployed to Render with GitHub CI/CD auto-deploy.",
    ],
    link: "https://github.com/TadiwanasheGuchu/school-portal",
    linkLabel: "GitHub",
  },
  {
    slug: "physioflex-web",
    number: "02",
    name: "PHYSIOFLEX WEB",
    subtitle: "Physiotherapy Clinic Platform",
    tech: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Groq AI", "Twilio", "Resend", "React PDF"],
    summary:
      "Full-stack clinic platform — public website, multi-step booking wizard, patient portal, and admin dashboard in one Next.js application. AI symptom checker streams responses from Groq and converts to a booking CTA. SMS reminders via Twilio, transactional emails via Resend, and server-generated PDF invoices.",
    details: [
      "Multi-step booking wizard (service → therapist → date/time → details → confirmation) with rescheduling and cancellation support.",
      "Patient portal with appointment history, real-time messaging, PDF invoice downloads, and pain score progress tracking.",
      "Admin dashboard with booking management, patient and therapist tables, finance overview, and Recharts analytics.",
      "AI symptom checker that streams responses from Groq LLM and converts to a booking CTA on completion.",
      "Transactional emails via React Email + Resend; SMS appointment reminders via Twilio; server-generated PDF invoices.",
      "Role-based access (PATIENT, THERAPIST, ADMIN) enforced via Prisma schema and server-side session checks.",
    ],
    link: "https://physioflex.na",
    linkLabel: "Live Site",
    screenshot: "/screenshots/physioflex-web.png",
  },
  {
    slug: "physioflex-mobile",
    number: "03",
    name: "PHYSIOFLEX MOBILE",
    subtitle: "Cross-Platform Patient App",
    tech: ["React Native 0.81", "Expo 54", "TypeScript", "Supabase", "Expo Secure Store", "Reanimated 4", "EAS"],
    summary:
      "Cross-platform mobile app for physiotherapy patients to manage their rehabilitation from their phone. Exercise program tracker with therapist-assigned routines, daily pain score logging with a visual progress timeline, and real-time patient ↔ clinic messaging via Supabase Realtime — no polling.",
    details: [
      "Exercise program tracker with therapist-assigned routines categorised by type — stretching, strengthening, mobility, cardio.",
      "Daily pain score logging (0–10) with a visual progress timeline and therapist session notes.",
      "Real-time patient ↔ clinic messaging powered by Supabase Postgres Changes subscriptions — no polling.",
      "Secure session persistence with Expo Secure Store and automatic token refresh.",
      "Row-Level Security (RLS) on all database tables; TypeScript strict mode throughout with typed routes.",
    ],
    link: "https://physioflex.na",
    linkLabel: "Live Site",
  },
  {
    slug: "job-board-api",
    number: "04",
    name: "JOB BOARD API",
    subtitle: "Containerised RESTful Backend",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy 2.0", "Pydantic v2", "JWT", "Docker Compose", "Uvicorn"],
    summary:
      "RESTful backend for a job board platform with employer and job seeker roles. JWT auth with bcrypt hashing, filterable job listings by location, type and skill, CV file upload on applications, and auto-generated interactive API docs. Full stack spins up with a single docker-compose up.",
    details: [
      "JWT authentication with bcrypt password hashing and configurable token expiry; role-enforced access at every endpoint.",
      "Filterable job listings by location, job type, and skill with case-insensitive search.",
      "CV file upload handling on job applications with duplicate application prevention.",
      "Auto schema creation via SQLAlchemy metadata on startup; full stack spins up with docker-compose up.",
      "Auto-generated interactive API docs at /docs via FastAPI's built-in OpenAPI support.",
    ],
    link: null,
    linkLabel: null,
  },
];
