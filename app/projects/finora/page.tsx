"use client";

import ScrollReveal from "@/components/ScrollReveal";

/*
 * ============================================================
 * FINORA — UI / UX CASE STUDY
 * ============================================================
 *
 * Finora is a fictional fintech product concept created to
 * demonstrate product design, interface design, responsive
 * thinking and interaction design.
 */

const goals = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Make important financial information easy to identify without overwhelming the user.",
  },
  {
    number: "02",
    title: "Hierarchy",
    description:
      "Use typography, spacing and visual weight to guide attention toward the most important information.",
  },
  {
    number: "03",
    title: "Efficiency",
    description:
      "Keep common actions such as sending, receiving and reviewing transactions within easy reach.",
  },
  {
    number: "04",
    title: "Responsiveness",
    description:
      "Create an experience that remains useful and visually consistent across desktop and mobile screens.",
  },
];

const experience = [
  {
    number: "01",
    title: "Balance overview",
    description:
      "A prominent balance card gives users immediate visibility into their financial position.",
  },
  {
    number: "02",
    title: "Quick actions",
    description:
      "Frequently used actions are placed directly inside the primary financial card.",
  },
  {
    number: "03",
    title: "Spending insights",
    description:
      "Simple charts provide a quick visual understanding of recent spending behaviour.",
  },
  {
    number: "04",
    title: "Budget tracking",
    description:
      "A circular budget indicator communicates progress without introducing unnecessary complexity.",
  },
  {
    number: "05",
    title: "Transactions",
    description:
      "Recent activity is presented with clear categories, dates, amounts and transaction direction.",
  },
  {
    number: "06",
    title: "Responsive navigation",
    description:
      "Desktop sidebar navigation becomes a compact bottom navigation experience on smaller screens.",
  },
];

const interactions = [
  "Balance visibility",
  "Responsive navigation",
  "Quick-action feedback",
  "Interactive charts",
  "Hover states",
  "Transaction browsing",
];

export default function FinoraCaseStudy() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* =====================================================
          AMBIENT BACKGROUND
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-40 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-[#625bf6] opacity-[0.04] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed -right-40 top-2/3 -z-10 h-[500px] w-[500px] rounded-full bg-[var(--lightizer-blue)] opacity-[0.035] blur-[150px]"
      />


      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="mx-auto max-w-[1400px] px-5 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 md:px-12 md:pt-40">

        <ScrollReveal>

          {/* Back to portfolio */}
          <a
            href="/#playground"
            className="group inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to Playground
          </a>


          {/* Category */}
          <p className="mt-12 text-xs font-medium uppercase tracking-[0.2em] text-[#625bf6] sm:text-sm">
            UI / UX · Product Design · Fintech
          </p>


          {/* Title */}
          <h1 className="mt-5 max-w-5xl text-6xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[110px]">
            Finora
            <span className="text-[#625bf6]">.</span>
          </h1>


          {/* Intro */}
          <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            A fintech product concept exploring how financial
            information can be presented through a clean,
            approachable and responsive digital experience.
          </p>


          {/* Metadata */}
          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "UI / UX",
              "PRODUCT DESIGN",
              "RESPONSIVE",
              "INTERACTIVE",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[10px] font-medium tracking-[0.12em] text-[var(--text-secondary)]"
              >
                {item}
              </span>
            ))}
          </div>


          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/demos/finora"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#625bf6] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(98,91,246,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#554ee8]"
            >
              Launch Interactive Demo

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#case-study"
              className="inline-flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#625bf6]/50"
            >
              View Case Study
              <span>↓</span>
            </a>
          </div>
        </ScrollReveal>


        {/* =================================================
            PRODUCT PREVIEW
            ================================================= */}

        <ScrollReveal delay={150}>
          <div className="relative mt-16 overflow-hidden rounded-[28px] border border-[var(--border)] bg-[#ecebff] p-3 shadow-[0_30px_100px_rgba(98,91,246,0.08)] sm:p-5 md:mt-20 md:p-8">

            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#625bf6]/20 blur-[100px]" />


            {/* Fake browser */}
            <div className="relative overflow-hidden rounded-2xl border border-[#deddf0] bg-[#f5f7fb] shadow-2xl">

              {/* Browser bar */}
              <div className="flex items-center gap-2 border-b border-[#e6e9ef] bg-white px-5 py-4">

                <span className="h-2.5 w-2.5 rounded-full bg-[#e1e3e8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e1e3e8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e1e3e8]" />

                <div className="mx-auto hidden rounded-lg bg-[#f5f7fb] px-14 py-1.5 text-[9px] text-[#9aa1af] sm:block">
                  finora.app/dashboard
                </div>
              </div>


              {/* Dashboard preview */}
              <div className="flex min-h-[420px]">

                {/* Sidebar */}
                <div className="hidden w-[190px] border-r border-[#e6e9ef] bg-white p-5 md:block">

                  <div className="flex items-center gap-2">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#625bf6] text-xs font-bold text-white">
                      F
                    </div>

                    <span className="font-bold text-[#121826]">
                      finora
                    </span>
                  </div>


                  <div className="mt-10 space-y-3">

                    <div className="rounded-lg bg-[#625bf6] px-3 py-2.5 text-[10px] font-medium text-white">
                      Overview
                    </div>

                    {[
                      "Transactions",
                      "Analytics",
                      "Cards",
                      "Goals",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg px-3 py-2.5 text-[10px] text-[#697386]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>


                {/* Main dashboard */}
                <div className="min-w-0 flex-1 p-4 sm:p-6 md:p-8">

                  {/* Dashboard title */}
                  <div>
                    <p className="text-[9px] text-[#9aa1af]">
                      Friday, September 25
                    </p>

                    <h3 className="mt-1 text-xl font-bold tracking-[-0.03em] text-[#121826] sm:text-2xl">
                      Good morning, Alex.
                    </h3>
                  </div>


                  {/* Dashboard cards */}
                  <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">

                    {/* Balance */}
                    <div className="relative overflow-hidden rounded-2xl bg-[#17152f] p-5 text-white">

                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#625bf6]/50 blur-[50px]" />

                      <div className="relative">
                        <p className="text-[9px] text-white/50">
                          Total balance
                        </p>

                        <p className="mt-2 text-2xl font-bold">
                          $24,860.40
                        </p>

                        <span className="mt-4 inline-flex rounded-full bg-[#36d399]/15 px-2 py-1 text-[8px] text-[#72e8b7]">
                          ↑ 6.8%
                        </span>


                        <div className="mt-7 flex gap-2">

                          {["↑", "↓", "▣", "••"].map(
                            (item, index) => (
                              <div
                                key={index}
                                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[9px]"
                              >
                                {item}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>


                    {/* Income */}
                    <div className="rounded-2xl border border-[#e6e9ef] bg-white p-5">

                      <p className="text-[9px] text-[#697386]">
                        Monthly income
                      </p>

                      <p className="mt-2 text-xl font-bold text-[#121826]">
                        $6,420
                      </p>


                      <div className="mt-6 flex h-16 items-end gap-1.5">

                        {[35, 50, 42, 65, 55, 76, 88].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t bg-[#625bf6]/30"
                              style={{
                                height: `${height}%`,
                              }}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>


                  {/* Bottom cards */}
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">

                    <div className="rounded-2xl border border-[#e6e9ef] bg-white p-5">

                      <p className="text-xs font-semibold text-[#121826]">
                        Spending
                      </p>

                      <div className="mt-5 flex h-20 items-end gap-2">

                        {[45, 62, 48, 75, 58, 88, 67].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t bg-[#e5e3ff]"
                              style={{
                                height: `${height}%`,
                              }}
                            />
                          )
                        )}
                      </div>
                    </div>


                    <div className="rounded-2xl border border-[#e6e9ef] bg-white p-5">

                      <p className="text-xs font-semibold text-[#121826]">
                        Recent activity
                      </p>


                      <div className="mt-4 space-y-3">

                        {["Salary", "Amazon", "Spotify"].map(
                          (item, index) => (
                            <div
                              key={item}
                              className="flex items-center gap-2"
                            >

                              <div className="h-6 w-6 rounded-lg bg-[#f0efff]" />

                              <div className="flex-1">
                                <div className="h-1.5 w-12 rounded bg-[#d8dae1]" />
                              </div>

                              <span className="text-[8px] text-[#697386]">
                                {index === 0 ? "+$4,850" : "-$24"}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>


      {/* =====================================================
          CASE STUDY
          ===================================================== */}

      <div id="case-study">

        {/* ===================================================
            01 — OVERVIEW
            =================================================== */}

        <section className="border-y border-[var(--border)]">

          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28">

            <ScrollReveal>

              <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-20">

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#625bf6]">
                    01 — Overview
                  </p>

                  <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                    Making financial information easier to navigate.
                  </h2>
                </div>


                <div className="space-y-5 text-base leading-8 text-[var(--text-secondary)]">

                  <p>
                    Finora is a fictional personal-finance product
                    concept created to explore how a modern financial
                    dashboard could communicate complex information
                    through a simple interface.
                  </p>

                  <p>
                    The design focuses on balance visibility, spending,
                    budgeting and recent transactions while keeping
                    frequently used actions close to the user.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>


        {/* ===================================================
            02 — DESIGN CHALLENGE
            =================================================== */}

        <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28">

          <ScrollReveal>

            <div className="max-w-4xl">

              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#625bf6]">
                02 — Design Challenge
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl md:text-6xl">
                Financial dashboards contain a lot of information.
                The interface shouldn&apos;t feel like it.
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                The challenge was to establish enough hierarchy that
                users could understand their current position quickly,
                while still providing access to spending, budgeting
                and transaction information.
              </p>
            </div>
          </ScrollReveal>
        </section>


        {/* ===================================================
            03 — DESIGN GOALS
            =================================================== */}

        <section className="border-y border-[var(--border)]">

          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28">

            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#625bf6]">
                03 — Design Goals
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Four principles shaped the interface.
              </h2>
            </ScrollReveal>


            <div className="mt-12 grid gap-5 md:grid-cols-2">

              {goals.map((goal, index) => (
                <ScrollReveal
                  key={goal.number}
                  delay={100 + index * 80}
                >
                  <article className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#625bf6]/50 sm:p-7">

                    <div className="flex items-center justify-between">

                      <span className="text-xs tracking-[0.15em] text-[var(--text-secondary)]">
                        {goal.number}
                      </span>

                      <span className="h-2 w-2 rounded-full bg-[#625bf6]" />
                    </div>

                    <h3 className="mt-8 text-xl font-bold">
                      {goal.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                      {goal.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>


        {/* ===================================================
            04 — VISUAL SYSTEM
            =================================================== */}

        <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28">

          <ScrollReveal>

            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#625bf6]">
              04 — Visual System
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              Calm, clear and product-focused.
            </h2>


            {/* Color palette */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  name: "Finora Violet",
                  hex: "#625BF6",
                  color: "#625BF6",
                  light: false,
                },
                {
                  name: "Midnight",
                  hex: "#17152F",
                  color: "#17152F",
                  light: false,
                },
                {
                  name: "Cloud",
                  hex: "#F5F7FB",
                  color: "#F5F7FB",
                  light: true,
                },
                {
                  name: "Success",
                  hex: "#159A67",
                  color: "#159A67",
                  light: false,
                },
              ].map((color) => (
                <div
                  key={color.name}
                  className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
                >
                  <div
                    className="h-32"
                    style={{
                      backgroundColor: color.color,
                    }}
                  />

                  <div className="p-5">
                    <p className="text-sm font-semibold">
                      {color.name}
                    </p>

                    <p className="mt-1 text-xs text-[var(--text-secondary)]">
                      {color.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>


            {/* Typography / principles */}
            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-8">

                <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                  Typography
                </p>

                <p className="mt-8 text-5xl font-bold tracking-[-0.05em]">
                  Aa
                </p>

                <p className="mt-6 text-lg font-semibold">
                  Strong hierarchy.
                </p>

                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  Large numerical values and concise labels make
                  financial information easier to scan.
                </p>
              </div>


              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-8">

                <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                  Components
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <button className="rounded-xl bg-[#625bf6] px-5 py-3 text-xs font-semibold text-white">
                    Primary action
                  </button>

                  <button className="rounded-xl border border-[var(--border)] px-5 py-3 text-xs font-semibold">
                    Secondary
                  </button>
                </div>

                <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--secondary-background)] p-4">
                  <p className="text-xs font-semibold">
                    Consistent components
                  </p>

                  <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">
                    Rounded surfaces, subtle borders and restrained
                    shadows create separation without visual clutter.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>


        {/* ===================================================
            05 — DASHBOARD EXPERIENCE
            =================================================== */}

        <section className="border-y border-[var(--border)]">

          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28">

            <ScrollReveal>

              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#625bf6]">
                05 — Dashboard Experience
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Each component has a clear job.
              </h2>
            </ScrollReveal>


            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {experience.map((item, index) => (
                <ScrollReveal
                  key={item.number}
                  delay={80 + index * 60}
                >
                  <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">

                    <span className="text-xs text-[#625bf6]">
                      {item.number}
                    </span>

                    <h3 className="mt-6 text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>


        {/* ===================================================
            06 — RESPONSIVE DESIGN
            =================================================== */}

        <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28">

          <ScrollReveal>

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <div>

                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#625bf6]">
                  06 — Responsive Design
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                  The interface adapts, not just shrinks.
                </h2>

                <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
                  On larger screens, Finora uses persistent sidebar
                  navigation and wider information panels. On smaller
                  screens, the content stacks vertically and primary
                  navigation moves closer to the user through a mobile
                  bottom navigation pattern.
                </p>
              </div>


              {/* Device representation */}
              <div className="flex items-end justify-center gap-4 sm:gap-8">

                {/* Desktop */}
                <div className="w-[70%] rounded-xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-xl">

                  <div className="aspect-[16/10] rounded-lg bg-[#f5f7fb] p-3">

                    <div className="flex h-full gap-2">

                      <div className="w-[22%] rounded bg-white" />

                      <div className="flex-1">

                        <div className="h-[42%] rounded bg-[#17152f]" />

                        <div className="mt-2 grid h-[48%] grid-cols-2 gap-2">

                          <div className="rounded bg-white" />
                          <div className="rounded bg-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Mobile */}
                <div className="w-[24%] rounded-[18px] border-[3px] border-[#17152f] bg-[#17152f] p-1 shadow-xl">

                  <div className="aspect-[9/18] rounded-[13px] bg-[#f5f7fb] p-2">

                    <div className="h-[28%] rounded bg-[#17152f]" />

                    <div className="mt-2 h-[22%] rounded bg-white" />

                    <div className="mt-2 h-[28%] rounded bg-white" />

                    <div className="mt-2 h-[8%] rounded bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>


        {/* ===================================================
            07 — INTERACTION DESIGN
            =================================================== */}

        <section className="border-y border-[var(--border)]">

          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28">

            <ScrollReveal>

              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#625bf6]">
                07 — Interaction Design
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Small interactions make the concept feel real.
              </h2>


              <div className="mt-10 flex flex-wrap gap-3">

                {interactions.map((interaction) => (
                  <span
                    key={interaction}
                    className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#625bf6]/50"
                  >
                    {interaction}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>


        {/* ===================================================
            08 — FINAL PRODUCT
            =================================================== */}

        <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-32">

          <ScrollReveal>

            <div className="relative overflow-hidden rounded-[28px] bg-[#17152f] p-7 text-white sm:p-10 md:p-14">

              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#625bf6]/40 blur-[100px]" />

              <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#38bdf8]/15 blur-[100px]" />


              <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

                <div>

                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#aaa6ff]">
                    08 — Final Product
                  </p>

                  <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                    Experience Finora yourself.
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                    Explore the responsive dashboard and interact with
                    the product concept directly.
                  </p>
                </div>


                <a
                  href="/demos/finora"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#625bf6] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#706aff] sm:w-auto"
                >
                  Launch Interactive Demo

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </main>
  );
}