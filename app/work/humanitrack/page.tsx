"use client";

import ScrollReveal from "@/components/ScrollReveal";

/*
 * ============================================================
 * HUMANITRACK AI CASE STUDY
 * ============================================================
 *
 * HumaniTrack AI is an active-development humanitarian
 * technology project.
 *
 * This page presents what has actually been implemented while
 * leaving room for the system to grow.
 */


/*
 * ============================================================
 * CURRENT FEATURES
 * ============================================================
 */
const features = [
  {
    number: "01",
    title: "Create organizations",
    description:
      "Adds organization records to the system through the API.",
  },
  {
    number: "02",
    title: "Retrieve organizations",
    description:
      "Provides endpoints for retrieving active organizations and individual organization records.",
  },
  {
    number: "03",
    title: "Update organizations",
    description:
      "Allows organization information to be updated through the API.",
  },
  {
    number: "04",
    title: "Soft deletion",
    description:
      "Organizations can be deactivated without permanently removing their historical records.",
  },
];


/*
 * ============================================================
 * ARCHITECTURE FLOW
 * ============================================================
 */
const architecture = [
  {
    number: "01",
    name: "Request",
    description: "Incoming API request",
  },
  {
    number: "02",
    name: "Route",
    description: "Request handling",
  },
  {
    number: "03",
    name: "Service",
    description: "Business logic",
  },
  {
    number: "04",
    name: "SQLAlchemy",
    description: "Database operations",
  },
  {
    number: "05",
    name: "PostgreSQL",
    description: "Persistence",
  },
];


/*
 * ============================================================
 * API ENDPOINTS
 * ============================================================
 */
const endpoints = [
  {
    method: "POST",
    endpoint: "/api/organizations/",
    description: "Create an organization",
  },
  {
    method: "GET",
    endpoint: "/api/organizations/",
    description: "Retrieve active organizations",
  },
  {
    method: "GET",
    endpoint: "/api/organizations/<organization_id>",
    description: "Retrieve an organization",
  },
  {
    method: "PUT",
    endpoint: "/api/organizations/<organization_id>",
    description: "Update an organization",
  },
  {
    method: "DELETE",
    endpoint: "/api/organizations/<organization_id>",
    description: "Soft-delete an organization",
  },
];


/*
 * ============================================================
 * TECHNOLOGY STACK
 * ============================================================
 */
const technologies = [
  "Python",
  "Flask",
  "SQLAlchemy",
  "PostgreSQL",
  "Flask-Migrate",
  "Alembic",
];


export default function HumaniTrackPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* =====================================================
          GLOBAL PROJECT ATMOSPHERE
          ===================================================== */}

      {/* Blue glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-[var(--lightizer-blue)] opacity-[0.035] blur-[150px]"
      />

      {/* Purple glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed right-0 top-2/3 -z-10 h-[500px] w-[500px] rounded-full bg-[var(--lightizer-purple)] opacity-[0.035] blur-[150px]"
      />


      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="relative mx-auto max-w-[1400px] px-5 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 md:px-12 md:pt-40">

        <ScrollReveal>

          {/* Back navigation. */}
          <a
            href="/#work"
            className="group mb-12 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--foreground)]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to projects
          </a>


          {/* Project status. */}
          <div className="mb-6 flex items-center gap-3">

            {/* Animated development indicator. */}
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lightizer-blue)] opacity-40" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lightizer-blue)]" />
            </span>

            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)] sm:text-xs">
              Active Development
            </p>
          </div>


          {/* Project category. */}
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)] sm:text-sm sm:tracking-[0.2em]">
            AI · Backend · Humanitarian Technology
          </p>


          {/* Project title. */}
          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[88px]">
            HumaniTrack
            <span className="ml-3 bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] bg-clip-text text-transparent">
              AI
            </span>
          </h1>


          {/* Project introduction. */}
          <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:mt-8 sm:text-lg">
            An AI-powered humanitarian aid management system
            currently under development for NGOs and humanitarian
            organizations.
          </p>


          {/* Hero actions. */}
          <div className="mt-10 flex flex-wrap gap-4">

            {/* GitHub button. */}
            <a
              href="https://github.com/uphilip/HumaniTrack-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(22,135,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(22,135,255,0.25)]"
            >
              View on GitHub

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>


            {/* Development badge. */}
            <div className="inline-flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)]/60 px-5 py-3.5 text-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lightizer-blue)]" />

              Backend foundation
            </div>
          </div>
        </ScrollReveal>


        {/* =================================================
            HERO SYSTEM VISUAL
            ================================================= */}
        <ScrollReveal delay={150}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 p-5 backdrop-blur sm:p-8 md:mt-20 md:p-10">

            {/* Background glow. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--lightizer-blue)] opacity-[0.05] blur-[100px]"
            />


            {/* System header. */}
            <div className="relative flex flex-col gap-4 border-b border-[var(--border)] pb-6 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                  System
                </p>

                <p className="mt-2 font-semibold">
                  Organization Management API
                </p>
              </div>


              {/* System status. */}
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--lightizer-blue)]" />

                <span className="text-xs text-[var(--text-secondary)]">
                  Development
                </span>
              </div>
            </div>


            {/* Visual system flow. */}
            <div className="relative mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">

              {architecture.map((item, index) => (
                <div
                  key={item.name}
                  className="group relative"
                >

                  {/* Architecture node. */}
                  <div className="relative z-10 h-full rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--lightizer-blue)]/50">

                    <span className="text-[10px] tracking-[0.15em] text-[var(--text-secondary)]">
                      {item.number}
                    </span>

                    <h3 className="mt-4 font-semibold">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>


                  {/* Desktop flow arrow. */}
                  {index < architecture.length - 1 && (
                    <span className="absolute -right-[11px] top-1/2 z-20 hidden -translate-y-1/2 text-[var(--lightizer-blue)] lg:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>


      {/* =====================================================
          01 — OVERVIEW
          ===================================================== */}
      <section className="border-y border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12">

          <ScrollReveal>
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">

              {/* Heading. */}
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)] sm:text-sm">
                  01 — Overview
                </p>

                <h2 className="mt-4 max-w-lg text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                  Building a system for humanitarian operations
                </h2>
              </div>


              {/* Description. */}
              <div className="flex items-center">
                <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                  HumaniTrack AI is being developed as a management
                  system for humanitarian organizations. The project
                  focuses on creating a structured foundation for
                  managing organizations and, over time, expanding
                  into a broader humanitarian technology platform.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* =====================================================
          02 — CURRENT IMPLEMENTATION
          ===================================================== */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28">

        <ScrollReveal>
          <div className="max-w-3xl">

            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)] sm:text-sm">
              02 — Current Implementation
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              Organization management
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
              The current implementation establishes the foundation
              for managing organizations within the platform. It
              includes API operations, validation, database
              persistence, and soft-delete handling.
            </p>
          </div>
        </ScrollReveal>


        {/* Current feature cards. */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.number}
              delay={100 + index * 80}
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--lightizer-blue)]/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:p-7">

                {/* Feature number. */}
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.16em] text-[var(--text-secondary)]">
                    {feature.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)]" />
                </div>

                {/* Feature title. */}
                <h3 className="mt-8 text-xl font-semibold sm:text-2xl">
                  {feature.title}
                </h3>

                {/* Description. */}
                <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--text-secondary)]">
                  {feature.description}
                </p>

                {/* Hover accent. */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] transition-all duration-500 group-hover:w-full" />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>


      {/* =====================================================
          03 — ARCHITECTURE
          ===================================================== */}
      <section className="border-y border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28">

          <ScrollReveal>
            <div className="max-w-3xl">

              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)] sm:text-sm">
                03 — Architecture
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                A layered backend structure
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
                The backend separates request handling, business
                logic, database operations, and persistence into
                distinct layers.
              </p>
            </div>
          </ScrollReveal>


          {/* Architecture pipeline. */}
          <ScrollReveal delay={150}>
            <div className="relative mt-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-8">

              {/* Pipeline label. */}
              <div className="mb-8 flex items-center justify-between border-b border-[var(--border)] pb-5">

                <span className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                  Request flow
                </span>

                <span className="text-xs text-[var(--text-secondary)]">
                  Backend Architecture
                </span>
              </div>


              {/* Architecture nodes. */}
              <div className="grid gap-3 lg:grid-cols-5">

                {architecture.map((item, index) => (
                  <div
                    key={item.name}
                    className="relative"
                  >
                    <div className="group h-full rounded-xl border border-[var(--border)] bg-[var(--secondary-background)] p-5 transition-all duration-300 hover:border-[var(--lightizer-blue)]/50">

                      <span className="text-[10px] text-[var(--lightizer-blue)]">
                        {item.number}
                      </span>

                      <h3 className="mt-4 font-semibold">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">
                        {item.description}
                      </p>
                    </div>


                    {/* Flow connector. */}
                    {index < architecture.length - 1 && (
                      <div className="my-2 flex justify-center text-[var(--lightizer-blue)] lg:absolute lg:-right-[11px] lg:top-1/2 lg:z-10 lg:my-0 lg:-translate-y-1/2">
                        <span className="rotate-90 lg:rotate-0">
                          →
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* =====================================================
          04 — API
          ===================================================== */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28">

        <ScrollReveal>
          <div className="max-w-3xl">

            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)] sm:text-sm">
              04 — API
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              Organization endpoints
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
              The current API exposes operations for creating,
              retrieving, updating and deactivating organization
              records.
            </p>
          </div>
        </ScrollReveal>


        {/* API panel. */}
        <ScrollReveal delay={150}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">

            {/* API window header. */}
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4 sm:px-6">

              {/* Window dots. */}
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                Organizations API
              </span>
            </div>


            {/* Endpoint rows. */}
            <div>
              {endpoints.map((endpoint, index) => (
                <div
                  key={`${endpoint.method}-${endpoint.endpoint}`}
                  className={`group grid gap-3 px-5 py-5 transition-colors duration-300 hover:bg-[var(--secondary-background)] sm:px-6 md:grid-cols-[90px_1fr_1fr] md:items-center ${
                    index !== endpoints.length - 1
                      ? "border-b border-[var(--border)]"
                      : ""
                  }`}
                >

                  {/* HTTP method. */}
                  <div>
                    <span className="inline-flex rounded-md border border-[var(--lightizer-blue)]/20 bg-[var(--lightizer-blue)]/5 px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-[var(--lightizer-blue)]">
                      {endpoint.method}
                    </span>
                  </div>


                  {/* Endpoint. */}
                  <code className="overflow-x-auto text-xs sm:text-sm">
                    {endpoint.endpoint}
                  </code>


                  {/* Description. */}
                  <span className="text-xs leading-5 text-[var(--text-secondary)] md:text-right">
                    {endpoint.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>


      {/* =====================================================
          05 — TECHNOLOGY
          ===================================================== */}
      <section className="border-y border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28">

          <ScrollReveal>
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">

              {/* Heading. */}
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)] sm:text-sm">
                  05 — Technology
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                  Built with
                </h2>
              </div>


              {/* Technology tags. */}
              <div className="flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2.5 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--lightizer-blue)]/50"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* =====================================================
          06 — DEVELOPMENT STATUS
          ===================================================== */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28">

        <ScrollReveal>
          <div className="max-w-3xl">

            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)] sm:text-sm">
              06 — Development
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              Still being built
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
              HumaniTrack AI is an ongoing project. The current
              work establishes the backend foundation while
              additional humanitarian management capabilities are
              developed and integrated over time.
            </p>
          </div>
        </ScrollReveal>


        {/* Development status panel. */}
        <ScrollReveal delay={150}>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">

            {/* Status heading. */}
            <div className="flex items-center gap-3">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lightizer-blue)] opacity-40" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--lightizer-blue)]" />
              </span>

              <p className="font-medium">
                Active development
              </p>
            </div>


            {/* Status description. */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
              The project will continue to evolve as new modules
              and capabilities are implemented.
            </p>


            {/* Development progress visual. */}
            <div className="mt-8">

              <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.12em] text-[var(--text-secondary)]">
                <span>Current focus</span>
                <span>Backend foundation</span>
              </div>

              {/* Decorative progress line.
                  This is intentionally NOT a percentage because
                  the project does not claim a completion percentage.
              */}
              <div className="h-1 overflow-hidden rounded-full bg-[var(--secondary-background)]">
                <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)]" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>


      {/* =====================================================
          FINAL CTA
          ===================================================== */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12">

          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-10 md:p-12">

              {/* CTA glow. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--lightizer-purple)] opacity-[0.06] blur-[100px]"
              />


              <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                {/* CTA copy. */}
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)]">
                    Source Code
                  </p>

                  <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                    Explore the project
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                    Follow the development, inspect the source
                    code, and see how HumaniTrack AI evolves.
                  </p>
                </div>


                {/* GitHub CTA. */}
                <a
                  href="https://github.com/uphilip/HumaniTrack-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(22,135,255,0.25)] sm:w-auto"
                >
                  Open GitHub Repository

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}