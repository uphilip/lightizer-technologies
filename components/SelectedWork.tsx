"use client";

import ScrollReveal from "@/components/ScrollReveal";

/*
 * Featured projects shown in the Lightizer Technologies portfolio.
 *
 * The information here is kept factual and concise.
 * More detailed information lives on each project's case-study page.
 */
const projects = [
  {
    number: "01",
    title: "HumaniTrack AI",
    category: "AI · BACKEND · HUMANITARIAN TECHNOLOGY",
    description:
      "An AI-powered humanitarian aid management system currently under development for NGOs and humanitarian organizations.",
    technologies: ["Python", "Flask", "SQLAlchemy", "PostgreSQL"],
    status: "ACTIVE DEVELOPMENT",
    link: "/work/humanitrack",
    type: "humanitrack",
  },
  {
    number: "02",
    title: "Customer Churn Predictor",
    category: "MACHINE LEARNING · DATA ANALYSIS",
    description:
      "A machine learning application that predicts the likelihood of customer churn from customer information.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
    ],
    status: "COMPLETED PROJECT",
    link: "/work/customer-churn",
    type: "churn",
  },
  {
    number: "03",
    title: "AQI Explorer",
    category: "DATA · PYTHON · VISUALIZATION",
    description:
      "Exploring air-quality data and transforming raw information into something easier to understand.",
    technologies: ["Python", "Pandas", "Data Analysis"],
    status: "DATA PROJECT",
    link: "#",
    type: "aqi",
  },
];

/*
 * ============================================================
 * HUMANITRACK VISUAL
 * ============================================================
 *
 * A visual representation of the system architecture.
 * This is an interface concept, not a screenshot of the application.
 */
function HumanitrackVisual() {
  return (
    <div className="relative flex h-full min-h-[280px] items-center justify-center overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--secondary-background)] sm:min-h-[340px] lg:min-h-[360px]">

      {/* Ambient background glow. */}
      <div
        aria-hidden="true"
        className="absolute h-48 w-48 rounded-full bg-[var(--lightizer-blue)] opacity-10 blur-[90px]"
      />

      {/* Decorative orbit lines. */}
      <div className="absolute h-44 w-44 rounded-full border border-[var(--border)] sm:h-56 sm:w-56" />

      <div className="absolute h-64 w-64 rounded-full border border-[var(--border)] opacity-50 sm:h-80 sm:w-80" />

      {/* Central system node. */}
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--lightizer-blue)]/40 bg-[var(--card)] shadow-[0_0_50px_rgba(22,135,255,0.12)] sm:h-24 sm:w-24">
        <div className="text-center">

          {/* AI status indicator. */}
          <div className="mx-auto mb-2 h-3 w-3 rounded-full bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)]" />

          <span className="text-[10px] font-semibold tracking-wider sm:text-xs">
            AI CORE
          </span>
        </div>
      </div>

      {/* Connected system nodes. */}
      <div className="absolute left-[7%] top-[22%] rounded-lg border border-[var(--border)] bg-[var(--card)] px-2 py-2 text-[9px] text-[var(--text-secondary)] sm:left-[10%] sm:top-[25%] sm:px-3 sm:text-[10px]">
        NGOs
      </div>

      <div className="absolute right-[7%] top-[22%] rounded-lg border border-[var(--border)] bg-[var(--card)] px-2 py-2 text-[9px] text-[var(--text-secondary)] sm:right-[10%] sm:top-[25%] sm:px-3 sm:text-[10px]">
        DATA
      </div>

      <div className="absolute bottom-[18%] left-[7%] rounded-lg border border-[var(--border)] bg-[var(--card)] px-2 py-2 text-[8px] text-[var(--text-secondary)] sm:bottom-[20%] sm:left-[12%] sm:px-3 sm:text-[10px]">
        ORGANIZATIONS
      </div>

      <div className="absolute bottom-[18%] right-[7%] rounded-lg border border-[var(--border)] bg-[var(--card)] px-2 py-2 text-[9px] text-[var(--text-secondary)] sm:bottom-[20%] sm:right-[12%] sm:px-3 sm:text-[10px]">
        SYSTEMS
      </div>

      {/* Small development status indicator. */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[9px] uppercase tracking-wider text-[var(--text-secondary)] sm:bottom-5 sm:left-5 sm:text-[10px]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--lightizer-blue)]" />
        Active development
      </div>
    </div>
  );
}

/*
 * ============================================================
 * CUSTOMER CHURN VISUAL
 * ============================================================
 *
 * A small analytics dashboard representation based on
 * the project's documented machine-learning results.
 */
function ChurnVisual() {
  // Heights used to create the small activity chart.
  const bars = [38, 62, 48, 78, 58];

  return (
    <div className="relative h-full min-h-[280px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--secondary-background)] p-4 sm:min-h-[340px] sm:p-6 lg:min-h-[360px]">

      {/* Dashboard header. */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-[0.16em] text-[var(--text-secondary)] sm:text-[10px]">
            Model Analytics
          </p>

          <p className="mt-2 text-lg font-semibold sm:text-xl">
            Churn Prediction
          </p>
        </div>

        {/* ML badge. */}
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] text-xs sm:h-9 sm:w-9 sm:text-sm">
          ML
        </div>
      </div>

      {/* Main model metric. */}
      <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 sm:mt-8 sm:p-5">
        <p className="text-xs text-[var(--text-secondary)]">
          ROC-AUC
        </p>

        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          84.16%
        </p>

        {/* Metric progress bar. */}
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[var(--border)]">
          <div className="h-full w-[84.16%] rounded-full bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)]" />
        </div>
      </div>

      {/* Prediction activity chart. */}
      <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 sm:mt-5 sm:p-5">
        <p className="mb-4 text-xs text-[var(--text-secondary)] sm:mb-5">
          Prediction activity
        </p>

        <div className="flex h-20 items-end gap-2 sm:h-28 sm:gap-3">
          {bars.map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-[var(--lightizer-blue)]/30 to-[var(--lightizer-purple)]/80 transition-all duration-500 hover:opacity-70"
              style={{
                height: `${height}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Secondary model metric. */}
      <div className="absolute bottom-4 right-4 text-right sm:bottom-5 sm:right-6">
        <p className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] sm:text-[10px]">
          Recall
        </p>

        <p className="mt-1 text-xs font-semibold sm:text-sm">
          78.34%
        </p>
      </div>
    </div>
  );
}

/*
 * ============================================================
 * AQI VISUAL
 * ============================================================
 *
 * A simple data visualization treatment for the AQI project.
 */
function AqiVisual() {
  // Heights used to create the AQI data chart.
  const bars = [42, 68, 55, 82, 60, 74, 48, 88];

  return (
    <div className="relative h-full min-h-[280px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--secondary-background)] p-4 sm:min-h-[340px] sm:p-6 lg:min-h-[360px]">

      {/* Chart header. */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-[0.16em] text-[var(--text-secondary)] sm:text-[10px]">
            Data Explorer
          </p>

          <p className="mt-2 text-lg font-semibold sm:text-xl">
            Air Quality
          </p>
        </div>

        {/* AQI badge. */}
        <span className="rounded-md border border-[var(--border)] px-2 py-1 text-[9px] text-[var(--text-secondary)] sm:text-[10px]">
          AQI
        </span>
      </div>

      {/* Chart area. */}
      <div className="relative mt-8 h-40 sm:mt-10 sm:h-52">

        {/* Horizontal guide lines. */}
        <div className="absolute inset-x-0 top-0 border-t border-[var(--border)]" />

        <div className="absolute inset-x-0 top-1/3 border-t border-[var(--border)]" />

        <div className="absolute inset-x-0 top-2/3 border-t border-[var(--border)]" />

        <div className="absolute inset-x-0 bottom-0 border-t border-[var(--border)]" />

        {/* AQI data bars. */}
        <div className="absolute inset-0 flex items-end gap-1.5 px-1 pb-1 sm:gap-2 sm:px-2">
          {bars.map((height, index) => (
            <div
              key={index}
              className="group relative flex h-full flex-1 items-end"
            >
              <div
                className="w-full rounded-t-sm bg-gradient-to-t from-[var(--lightizer-blue)]/20 to-[var(--lightizer-blue)] transition-all duration-500 group-hover:from-[var(--lightizer-blue)]/40 group-hover:to-[var(--lightizer-purple)]"
                style={{
                  height: `${height}%`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Chart footer labels. */}
      <div className="mt-4 flex justify-between text-[8px] uppercase tracking-wider text-[var(--text-secondary)] sm:mt-5 sm:text-[10px]">
        <span>Low</span>
        <span>Moderate</span>
        <span>High</span>
      </div>
    </div>
  );
}

/*
 * Select the correct visual representation
 * for each portfolio project.
 */
function ProjectVisual({ type }: { type: string }) {
  if (type === "humanitrack") {
    return <HumanitrackVisual />;
  }

  if (type === "churn") {
    return <ChurnVisual />;
  }

  return <AqiVisual />;
}

/*
 * ============================================================
 * SELECTED WORK SECTION
 * ============================================================
 */
export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden px-5 py-24 sm:px-6 sm:py-28 md:px-12 md:py-40"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
          ===================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[var(--lightizer-purple)] opacity-[0.035] blur-[140px]"
      />

      {/* Main section container. */}
      <div className="relative mx-auto max-w-[1400px]">

        {/* =================================================
            SECTION INTRODUCTION
            ================================================= */}
        <ScrollReveal>
          <div className="mb-14 flex flex-col justify-between gap-6 sm:mb-16 md:mb-20 md:flex-row md:items-end">

            {/* Section heading. */}
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)]">
                Selected Work
              </p>

              <h2 className="text-3xl font-bold tracking-[-0.035em] sm:text-4xl md:text-6xl">
                Things I&apos;ve built
                <br />
                and explored.
              </h2>
            </div>

            {/* Supporting description. */}
            <p className="max-w-md text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              A selection of projects across software,
              machine learning, data and humanitarian
              technology.
            </p>
          </div>
        </ScrollReveal>

        {/* =================================================
            PROJECT LIST
            ================================================= */}
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.number}
              delay={100 + index * 100}
            >
              {/* Individual project card. */}
              <article className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--lightizer-blue)]/40">

                {/*
                 * Keep cards stacked on phones AND tablets.
                 *
                 * The two-column layout now begins at lg instead
                 * of md, giving the content more room.
                 */}
                <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

                  {/* =========================================
                      PROJECT INFORMATION
                      ========================================= */}
                  <div className="flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-12">

                    {/* Project number and status. */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-medium tracking-[0.18em] text-[var(--text-secondary)]">
                        {project.number}
                      </span>

                      <span className="rounded-md border border-[var(--border)] px-2 py-1.5 text-[8px] font-medium uppercase tracking-[0.1em] text-[var(--text-secondary)] sm:px-3 sm:text-[9px] sm:tracking-[0.12em]">
                        {project.status}
                      </span>
                    </div>

                    {/* Main project information. */}
                    <div className="mt-10 sm:mt-12 lg:mt-14">

                      {/* Project category. */}
                      <p className="text-[9px] font-medium uppercase leading-5 tracking-[0.14em] text-[var(--lightizer-blue)] sm:text-[10px] sm:tracking-[0.16em]">
                        {project.category}
                      </p>

                      {/* Project title. */}
                      <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                        {project.title}
                      </h3>

                      {/* Project description. */}
                      <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--text-secondary)] lg:text-base">
                        {project.description}
                      </p>

                      {/* Technology tags. */}
                      <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                        {project.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="rounded-md border border-[var(--border)] px-2.5 py-1.5 text-[10px] text-[var(--text-secondary)] sm:px-3 sm:text-[11px]"
                            >
                              {technology}
                            </span>
                          )
                        )}
                      </div>

                      {/* Case-study link. */}
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          className="mt-7 inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3 hover:text-[var(--lightizer-blue)] sm:mt-8"
                        >
                          View case study
                          <span>→</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* =========================================
                      PROJECT VISUAL
                      ========================================= */}
                  <div className="p-3 pt-0 sm:p-4 sm:pt-0 lg:p-5 lg:pl-0 lg:pt-5">
                    <ProjectVisual type={project.type} />
                  </div>
                </div>

                {/* Animated gradient line on hover. */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] transition-all duration-700 group-hover:w-full" />
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* =================================================
            MORE WORK
            ================================================= */}
        <ScrollReveal delay={200}>
          <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-7 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-8">

            {/* Future project message. */}
            <p className="text-sm text-[var(--text-secondary)]">
              More projects and experiments are being developed.
            </p>

            {/* Playground link. */}
            <a
              href="#playground"
              className="text-sm font-medium transition-colors duration-200 hover:text-[var(--lightizer-blue)]"
            >
              Explore more →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}