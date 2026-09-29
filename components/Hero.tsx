"use client";

import { useEffect, useState } from "react";

// Hero introduces Lightizer with a strong visual identity,
// responsive typography and an interactive technology visual.
export default function Hero() {
  // Store the cursor position used for subtle desktop movement.
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  // Track the mouse position for the interactive desktop visual.
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Convert the cursor position into a small movement range.
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      setMousePosition({ x, y });
    };

    // Listen for mouse movement.
    window.addEventListener("mousemove", handleMouseMove);

    // Remove the listener when the component is unmounted.
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    // Main Hero section.
    <section className="relative min-h-screen overflow-hidden border-b border-[var(--border)]">
      {/* =====================================================
          AMBIENT BACKGROUND GLOWS
          ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow. */}
        <div className="absolute -left-20 top-[8%] h-[300px] w-[300px] rounded-full bg-[#1687FF]/10 blur-[100px] sm:left-[5%] sm:h-[420px] sm:w-[420px] sm:blur-[120px]" />

        {/* Purple glow. */}
        <div className="absolute -right-32 top-[30%] h-[320px] w-[320px] rounded-full bg-[#7047FF]/10 blur-[110px] sm:right-[5%] sm:top-[20%] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
      </div>

      {/* =====================================================
          TECHNICAL BACKGROUND GRID
          ===================================================== */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}
      <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-5 pb-24 pt-28 sm:px-6 sm:pt-32 md:px-12 lg:pb-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* =================================================
              LEFT SIDE — HERO CONTENT
              ================================================= */}
          <div className="relative z-10">
            {/* Small brand indicator. */}
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              {/* Glowing status dot. */}
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#1687FF] shadow-[0_0_18px_#1687FF]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs sm:tracking-[0.25em]">
                Design · Development · AI
              </span>
            </div>

            {/* =================================================
                MAIN HEADING
                Responsive sizing prevents overflow on small phones.
                ================================================= */}
            <h1 className="max-w-4xl text-[clamp(2.65rem,12vw,3.75rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-[var(--foreground)] md:text-7xl lg:text-[88px]">
              <span className="block">
                DIGITAL
              </span>

              <span className="block">
                EXPERIENCES
              </span>

              {/* Gradient heading. */}
              <span className="mt-1 block bg-gradient-to-r from-[#1687FF] via-[#3D6FFF] to-[#7047FF] bg-clip-text text-transparent">
                &amp; INTELLIGENT
              </span>

              <span className="block bg-gradient-to-r from-[#1687FF] via-[#3D6FFF] to-[#7047FF] bg-clip-text text-transparent">
                IDEAS
              </span>
            </h1>

            {/* Supporting statement. */}
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
              I design, build and explore technology across interfaces,
              software, data and artificial intelligence.
            </p>

            {/* =================================================
                HERO ACTIONS
                Full width on small phones.
                ================================================= */}
            <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row min-[430px]:flex-wrap sm:mt-10 sm:gap-4">
              {/* Primary action. */}
              <a
                href="#work"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#1687FF] to-[#7047FF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(22,135,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(22,135,255,0.35)] min-[430px]:w-auto"
              >
                VIEW MY WORK

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Secondary action. */}
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)]/50 px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#1687FF]/50 min-[430px]:w-auto"
              >
                LET&apos;S CONNECT
                <span>↗</span>
              </a>
            </div>

            {/* =================================================
                CAPABILITY INDICATORS
                ================================================= */}
            <div className="mt-8 flex flex-wrap gap-2 sm:mt-12 sm:gap-3">
              {[
                "UI / UX",
                "FULL STACK",
                "PYTHON",
                "MACHINE LEARNING",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-[var(--border)] bg-[var(--card)]/40 px-3 py-2 text-[9px] font-medium tracking-[0.1em] text-[var(--muted)] backdrop-blur sm:text-[10px] sm:tracking-[0.12em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* =================================================
              MOBILE / TABLET LIGHTIZER VISUAL

              The old version completely hid the visual until
              desktop. This smaller version keeps the Lightizer
              identity visible on phones and tablets.
              ================================================= */}
          <div className="relative flex min-h-[290px] items-center justify-center lg:hidden">
            {/* Background glow. */}
            <div className="absolute h-[220px] w-[220px] rounded-full bg-gradient-to-r from-[#1687FF]/15 to-[#7047FF]/15 blur-[60px]" />

            {/* Main visual container. */}
            <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px]">

              {/* Outer rotating ring. */}
              <div className="absolute inset-0 animate-[spin_30s_linear_infinite] rounded-full border border-[#1687FF]/20" />

              {/* Inner ring. */}
              <div className="absolute inset-7 rounded-full border border-[#7047FF]/20 sm:inset-8" />

              {/* Dashed orbit. */}
              <div className="absolute inset-12 animate-[spin_22s_linear_infinite_reverse] rounded-full border border-dashed border-[#1687FF]/30 sm:inset-[55px]" />

              {/* Lightizer core. */}
              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#1687FF] via-[#3D6FFF] to-[#7047FF] shadow-[0_0_60px_rgba(22,135,255,0.3)] sm:h-32 sm:w-32">
                {/* Inner glass layer. */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/10 backdrop-blur-xl sm:h-24 sm:w-24">
                  <span className="text-4xl font-bold text-white sm:text-5xl">
                    L
                  </span>
                </div>
              </div>

              {/* Mobile floating labels. */}
              <div className="absolute left-0 top-8 rounded-lg border border-[var(--border)] bg-[var(--card)]/85 px-3 py-2 text-[9px] text-[var(--foreground)] shadow-lg backdrop-blur">
                UI / UX
              </div>

              <div className="absolute right-0 top-16 rounded-lg border border-[var(--border)] bg-[var(--card)]/85 px-3 py-2 text-[9px] text-[var(--foreground)] shadow-lg backdrop-blur">
                AI / ML
              </div>

              <div className="absolute bottom-10 left-2 rounded-lg border border-[var(--border)] bg-[var(--card)]/85 px-3 py-2 text-[9px] text-[var(--foreground)] shadow-lg backdrop-blur">
                PYTHON
              </div>

              <div className="absolute bottom-3 right-0 rounded-lg border border-[var(--border)] bg-[var(--card)]/85 px-3 py-2 text-[9px] text-[var(--foreground)] shadow-lg backdrop-blur">
                DEVELOPMENT
              </div>
            </div>
          </div>

          {/* =================================================
              DESKTOP INTERACTIVE LIGHTIZER VISUAL
              ================================================= */}
          <div className="relative hidden min-h-[520px] items-center justify-center lg:flex">
            {/* Outer glow. */}
            <div className="absolute h-[380px] w-[380px] rounded-full bg-gradient-to-r from-[#1687FF]/15 to-[#7047FF]/15 blur-[80px]" />

            {/* Main interactive visual. */}
            <div
              className="relative h-[390px] w-[390px] transition-transform duration-500 ease-out"
              style={{
                transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8
                  }px)`,
              }}
            >
              {/* Outer rotating ring. */}
              <div className="absolute inset-0 animate-[spin_35s_linear_infinite] rounded-full border border-[#1687FF]/20" />

              {/* Inner ring. */}
              <div className="absolute inset-8 rounded-full border border-[#7047FF]/20" />

              {/* Dashed orbit ring. */}
              <div className="absolute inset-[45px] animate-[spin_25s_linear_infinite_reverse] rounded-full border border-dashed border-[#1687FF]/30" />

              {/* Main Lightizer core. */}
              <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#1687FF] via-[#3D6FFF] to-[#7047FF] shadow-[0_0_80px_rgba(22,135,255,0.35)]">

                {/* Inner glass layer. */}
                <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-black/10 backdrop-blur-xl">
                  <span className="text-6xl font-bold text-white">
                    L
                  </span>
                </div>
              </div>

              {/* Floating technology labels. */}
              <div className="absolute left-0 top-16 rounded-lg border border-[var(--border)] bg-[var(--card)]/80 px-4 py-3 text-xs text-[var(--foreground)] shadow-xl backdrop-blur">
                UI / UX
              </div>

              <div className="absolute right-0 top-32 rounded-lg border border-[var(--border)] bg-[var(--card)]/80 px-4 py-3 text-xs text-[var(--foreground)] shadow-xl backdrop-blur">
                AI / ML
              </div>

              <div className="absolute bottom-16 left-8 rounded-lg border border-[var(--border)] bg-[var(--card)]/80 px-4 py-3 text-xs text-[var(--foreground)] shadow-xl backdrop-blur">
                PYTHON
              </div>

              <div className="absolute bottom-8 right-8 rounded-lg border border-[var(--border)] bg-[var(--card)]/80 px-4 py-3 text-xs text-[var(--foreground)] shadow-xl backdrop-blur">
                DEVELOPMENT
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM SCROLL INDICATOR
          Hidden on very small screens to prevent overlap.
          ===================================================== */}
      <div className="absolute bottom-7 left-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] sm:flex md:left-12">
        <span className="h-px w-8 bg-[var(--border)]" />
        Explore
      </div>
    </section>
  );
}