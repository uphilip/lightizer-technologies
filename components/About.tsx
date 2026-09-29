"use client";

// Import Next.js Image for optimized profile images.
import Image from "next/image";

// Import the reusable scroll animation.
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    // Main About section.
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40"
    >
      {/* =====================================================
          BACKGROUND AMBIENT GLOWS
          Add depth without distracting from the content.
          ===================================================== */}

      {/* Blue ambient glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[var(--lightizer-blue)] opacity-[0.04] blur-[120px]"
      />

      {/* Purple ambient glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[var(--lightizer-purple)] opacity-[0.04] blur-[120px]"
      />

      {/* Main About content container. */}
      <div className="relative mx-auto max-w-[1400px]">

        {/* =================================================
            SECTION LABEL
            ================================================= */}
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)]">
              About
            </p>
          </div>
        </ScrollReveal>

        {/* =================================================
            MAIN ABOUT GRID
            ================================================= */}
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center">

          {/* =================================================
              PROFILE IMAGE AREA
              ================================================= */}
          <ScrollReveal delay={100}>
            <div className="group relative">

              {/* Decorative frame behind the profile image. */}
              <div className="absolute -inset-3 rounded-2xl border border-[var(--border)] opacity-60 transition-all duration-500 group-hover:-inset-5 group-hover:border-[var(--lightizer-blue)]/40" />

              {/* Profile photo container. */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--secondary-background)]">

                {/* Actual profile photo. */}
                <Image
                  src="/images/chukwuka-profile.jpg"
                  alt="Chukwuka Uchenna"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Subtle gradient over the profile image on hover. */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--lightizer-blue)]/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Small decorative indicator. */}
              <div className="absolute -bottom-5 -right-5 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] shadow-xl">
                <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)]" />
              </div>
            </div>
          </ScrollReveal>

          {/* =================================================
              ABOUT CONTENT
              ================================================= */}
          <ScrollReveal delay={200}>
            <div>

              {/* Main heading. */}
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.035em] md:text-6xl">
                I enjoy turning ideas into things people can
                actually use.
              </h2>

              {/* About description. */}
              <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                <p>
                  My interests sit across UI/UX, software
                  development and artificial intelligence.
                </p>

                <p>
                  I enjoy understanding problems, designing
                  thoughtful solutions and bringing those
                  ideas to life through technology.
                </p>
              </div>

              {/* =================================================
                  PERSONAL DETAILS
                  ================================================= */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {/* Name card. */}
                <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--lightizer-blue)]/50">
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                    Name
                  </p>

                  <p className="mt-2 font-medium">
                    Chukwuka Uchenna
                  </p>
                </div>

                {/* Role card. */}
                <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--lightizer-purple)]/50">
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                    Role
                  </p>

                  <p className="mt-2 font-medium">
                    Founder — Lightizer Technologies
                  </p>
                </div>
              </div>

              {/* =================================================
                  FOCUS AREAS
                  ================================================= */}
              <div className="mt-8 flex flex-wrap gap-2">
                {["Design", "Development", "AI / ML"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--lightizer-blue)] hover:text-[var(--foreground)]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}