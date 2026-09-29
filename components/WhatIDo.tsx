"use client";

import ScrollReveal from "@/components/ScrollReveal";

/*
 * The three main areas represented in the
 * Lightizer Technologies portfolio.
 */
const services = [
  {
    number: "01",
    title: "DESIGN",
    description:
      "I think through interfaces and user experiences, focusing on clarity, structure and how people interact with digital products.",
    skills: ["UI / UX", "Interfaces", "Product Thinking"],
  },
  {
    number: "02",
    title: "DEVELOPMENT",
    description:
      "I build web applications and digital products, working across frontend and backend technologies.",
    skills: ["Frontend", "Backend", "Web Applications"],
  },
  {
    number: "03",
    title: "AI / ML",
    description:
      "I explore data, machine learning and intelligent systems to understand how AI can solve practical problems.",
    skills: ["Data", "Machine Learning", "Intelligent Systems"],
  },
];

export default function WhatIDo() {
  return (
    <section className="px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">

        {/* =====================================================
                    SECTION INTRO
                    ===================================================== */}
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)]">
              What I Do
            </p>

            <h2 className="text-4xl font-bold tracking-[-0.03em] md:text-6xl">
              Different disciplines.
              <br />
              One direction.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
              I bring design, development and AI together to
              explore ideas and build useful digital experiences.
            </p>
          </div>
        </ScrollReveal>

        {/* =====================================================
                    SERVICE CARDS
                    Each card gets a small staggered entrance.
                    ===================================================== */}
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.number}
              delay={150 + index * 150}
            >
              <article
                className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--lightizer-blue)] md:p-10"
              >
                {/* Subtle background glow on hover. */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--lightizer-blue)] opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-10"
                />

                {/* Card number. */}
                <div className="relative mb-16 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.18em] text-[var(--text-secondary)]">
                    {service.number}
                  </span>

                  {/* Decorative arrow. */}
                  <span className="text-lg text-[var(--text-secondary)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--lightizer-blue)]">
                    ↗
                  </span>
                </div>

                {/* Service title. */}
                <h3 className="relative text-2xl font-bold tracking-[-0.02em] md:text-3xl">
                  {service.title}
                </h3>

                {/* Service description. */}
                <p className="relative mt-5 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                  {service.description}
                </p>

                {/* Skills / capabilities. */}
                <div className="relative mt-8 flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[var(--border)] px-3 py-2 text-xs text-[var(--text-secondary)] transition-colors duration-200 group-hover:border-[var(--lightizer-blue)]/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line. */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] transition-all duration-500 group-hover:w-full" />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}