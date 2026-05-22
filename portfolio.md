# Tadiwanashe Guchu — Developer Portfolio

**Full-Stack Developer** · Java & Spring Boot · Angular / React / Next.js · Python / FastAPI

📍 Harare, Zimbabwe &nbsp;|&nbsp; 📧 [Tadiwanasheguchu@gmail.com](mailto:Tadiwanasheguchu@gmail.com) &nbsp;|&nbsp; 💼 [LinkedIn](https://www.linkedin.com/in/tadiwanashe-guchu) &nbsp;|&nbsp; 🐙 [GitHub](https://github.com/TadiwanasheGuchu)

---

## About Me

I'm a results-driven software engineer with 2+ years of experience building and shipping full-stack web applications — from REST APIs and microservices to patient-facing mobile apps and school management portals used by real users in production.

My work spans the complete stack: Java/Spring Boot on the backend, Angular and React on the frontend, PostgreSQL for data, and Docker for deployment. I'm comfortable integrating third-party services (AI, SMS, email, payments), designing role-based access systems, and working in Agile teams. I care about writing clean, maintainable code that solves real problems.

---

## Projects

### 🏫 Auntysuetut School Management Portal
> A full-stack rebuild of a legacy PHP system into a modern, containerised platform serving 90+ real users.

**Tech:** FastAPI · React 19 · TypeScript · PostgreSQL · SQLAlchemy · Docker Compose · JWT · WebSockets · VAPID Push · Groq AI

**What I built:**
- Async REST API (FastAPI) with JWT access/refresh token auth and role-based access control across four user roles — admin, teacher, student, parent
- Role-specific dashboards: grade entry, attendance tracking, lesson creation, quiz management, fee tracking, and timetable building
- Real-time messaging via WebSockets and OS-level browser push notifications (VAPID) targeted by user role
- AI-powered student chatbot and automated quiz generation from uploaded PDFs using the Groq API
- Full data migration of 90+ users, 969 grades, and 27 parent-student links from legacy PHP/MySQL to PostgreSQL
- Containerised stack (FastAPI + React + PostgreSQL) with Docker Compose; deployed to Render with GitHub CI/CD auto-deploy

**GitHub:** [github.com/TadiwanasheGuchu/school-portal](https://github.com/TadiwanasheGuchu/school-portal)

---

### 🏥 Physioflex Web Platform
> A full-stack physiotherapy clinic platform — public website, booking wizard, patient portal, and admin dashboard in one Next.js application.

**Tech:** Next.js 16 · TypeScript · Supabase · PostgreSQL · Prisma ORM · Tailwind CSS · Groq AI · Twilio · Resend · React PDF

**What I built:**
- Multi-step booking wizard (service → therapist → date/time → details → confirmation) with rescheduling and cancellation support
- Patient portal with appointment history, real-time messaging, PDF invoice downloads, and pain score progress tracking
- Admin dashboard with booking management, patient and therapist tables, finance overview, and Recharts analytics
- AI symptom checker that streams responses from Groq LLM and converts to a booking CTA on completion
- Transactional emails via React Email + Resend; SMS appointment reminders via Twilio; server-generated PDF invoices
- Role-based access (PATIENT, THERAPIST, ADMIN) enforced via Prisma schema and server-side session checks

**Live:** [physioflex.na](https://physioflex.na)

---

### 📱 Physioflex Mobile App
> A cross-platform React Native app for physiotherapy patients to manage their rehabilitation from their phone.

**Tech:** React Native 0.81 · Expo 54 · TypeScript · Supabase · Expo Secure Store · Reanimated 4 · EAS

**What I built:**
- Exercise program tracker with therapist-assigned routines categorised by type (stretching, strengthening, mobility, cardio)
- Daily pain score logging (0–10) with a visual progress timeline and therapist session notes
- Real-time patient ↔ clinic messaging powered by Supabase Postgres Changes subscriptions — no polling
- Secure session persistence with Expo Secure Store and automatic token refresh
- Row-Level Security (RLS) on all database tables; TypeScript strict mode throughout with typed routes

**Live:** [physioflex.na](https://physioflex.na)

---

### 💼 Job Board REST API
> A containerised RESTful backend for a job board platform with employer and job seeker roles.

**Tech:** FastAPI · PostgreSQL · SQLAlchemy 2.0 · Pydantic v2 · JWT · Docker Compose · Uvicorn

**What I built:**
- JWT authentication with bcrypt password hashing and configurable token expiry; role-enforced access at every endpoint
- Filterable job listings (location, job type, skill) with case-insensitive search
- CV file upload handling on job applications with duplicate application prevention
- Auto schema creation via SQLAlchemy metadata on startup; full stack spins up with `docker-compose up`
- Auto-generated interactive API docs at `/docs`

---

## Technical Skills

| Area | Technologies |
|---|---|
| **Backend** | Java, Spring Boot, Spring Security, Spring Cloud, FastAPI, Node.js |
| **Frontend** | Angular, TypeScript, React, Next.js, React Native, HTML5, CSS3, Tailwind CSS |
| **Databases** | PostgreSQL, MySQL, MongoDB, Prisma ORM, SQLAlchemy, Supabase |
| **Cloud & DevOps** | Docker, Docker Compose, Git, GitHub, CI/CD (Render), EAS (Expo) |
| **APIs & Integrations** | RESTful API design, WebSockets, JWT auth, Groq AI SDK, Twilio, Resend |
| **Other Languages** | Python, PHP, Kotlin, C#, C++ |

---

## Work Experience

**IT Support Engineer** — InterAfrica Tobacco *(Jan 2025 – Jun 2025)*
Maintained a web-based buying system with 99.9% uptime for 200+ daily users. Resolved 50+ support tickets per cycle, integrated third-party APIs, and led software patch deployments.

**Software Engineer Attachment** — Ministry of ICT, Zimbabwe *(2023 – 2024)*
Co-developed a Java/Spring Boot web application. Built frontend components in React, designed RESTful APIs, and worked in a cross-functional Agile/Scrum team with daily stand-ups and sprint ceremonies.

---

## Education

**National Diploma in Software Engineering** — Telone Centre for Learning *(2024)*

**Certificate in Web Design** — Alison Online Learning *(2023)*

---

## Get In Touch

I'm open to full-stack, backend, or frontend roles — particularly in Java/Spring Boot or Angular/React environments.

📧 [Tadiwanasheguchu@gmail.com](mailto:Tadiwanasheguchu@gmail.com)
💼 [linkedin.com/in/tadiwanashe-guchu](https://www.linkedin.com/in/tadiwanashe-guchu)
🐙 [github.com/TadiwanasheGuchu](https://github.com/TadiwanasheGuchu)
