"use client";

// Import the reusable scroll animation.
import ScrollReveal from "@/components/ScrollReveal";

/*
 * ============================================================
 * TYPES
 * ============================================================
 */

// Define the structure used by every Playground experiment.
type Experiment = {
    number: string;
    title: string;
    description: string;
    tag: string;
    visual: "finora" | "ai" | "data" | "system";
    href: string | null;
    demoHref?: string;
    demoLabel?: string;
};

/*
 * ============================================================
 * PLAYGROUND EXPERIMENTS
 * ============================================================
 *
 * These are presented as experiments rather than finished
 * products. This gives the portfolio room to grow as new
 * ideas are developed.
 */

const experiments: Experiment[] = [
    {
        number: "01",
        title: "Finora",
        description:
            "A responsive fintech product concept exploring dashboard design, financial data visualization, interaction design and modern UI/UX.",
        tag: "UI / UX",
        visual: "finora",
        href: "/projects/finora",
        demoHref: "/demos/finora",
    },
    {
        number: "02",
        title: "AI Interfaces",
        description:
            "Exploring how AI can become a more natural part of digital interfaces and user experiences.",
        tag: "EXPERIMENT",
        visual: "ai",
        href: null,
    },
    {
        number: "03",
        title: "Data Visualisation",
        description:
            "Testing different ways to turn datasets into visual experiences that are easier to understand.",
        tag: "EXPERIMENT",
        visual: "data",
        href: null,
    },
    {
        number: "04",
        title: "Interactive Systems",
        description:
            "Exploring responsive web experiences, interactions and digital systems through practical experiments like NOVA.",
        tag: "WEB DEVELOPMENT",
        visual: "system",
        href: null,
        demoHref: "/demos/nova",
        demoLabel: "Launch NOVA",
    },
];

/*
 * ============================================================
 * FINORA UI / UX VISUAL
 * ============================================================
 */

function FinoraVisual() {
    return (
        <div className="relative h-44 overflow-hidden rounded-xl border border-[var(--border)] bg-[#f5f7fb] p-4 sm:h-48 sm:p-5 lg:h-52">
            {/* Finora mini dashboard */}
            <div className="flex h-full overflow-hidden rounded-lg border border-[#e6e9ef] bg-white shadow-sm">

                {/* Mini sidebar */}
                <div className="hidden w-[25%] border-r border-[#e6e9ef] bg-white p-2 sm:block">

                    {/* Logo */}
                    <div className="flex items-center gap-1.5">
                        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#625bf6] text-[7px] font-bold text-white">
                            F
                        </div>

                        <span className="text-[7px] font-bold text-[#121826]">
                            finora
                        </span>
                    </div>

                    {/* Navigation */}
                    <div className="mt-4 space-y-2">
                        <div className="h-4 rounded bg-[#625bf6]" />
                        <div className="h-4 rounded bg-[#f2f3f7]" />
                        <div className="h-4 rounded bg-[#f2f3f7]" />
                        <div className="h-4 rounded bg-[#f2f3f7]" />
                    </div>
                </div>

                {/* Dashboard */}
                <div className="flex-1 p-3">

                    {/* Dashboard heading */}
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="h-1.5 w-12 rounded bg-[#dfe2e8]" />
                            <div className="mt-1.5 h-2 w-20 rounded bg-[#121826]" />
                        </div>

                        <div className="h-5 w-5 rounded-full bg-[#f0efff]" />
                    </div>

                    {/* Balance cards */}
                    <div className="mt-3 grid grid-cols-[1.3fr_0.7fr] gap-2">

                        {/* Main balance */}
                        <div className="relative overflow-hidden rounded-md bg-[#17152f] p-2.5">
                            <div className="absolute -right-3 -top-3 h-10 w-10 rounded-full bg-[#625bf6]/50 blur-lg" />

                            <div className="relative">
                                <div className="h-1 w-10 rounded bg-white/30" />
                                <div className="mt-2 h-2 w-16 rounded bg-white" />

                                <div className="mt-3 flex gap-1">
                                    <div className="h-4 w-4 rounded bg-white/10" />
                                    <div className="h-4 w-4 rounded bg-white/10" />
                                    <div className="h-4 w-4 rounded bg-white/10" />
                                </div>
                            </div>
                        </div>

                        {/* Income card */}
                        <div className="rounded-md border border-[#e6e9ef] bg-white p-2">
                            <div className="h-1 w-8 rounded bg-[#dfe2e8]" />
                            <div className="mt-2 h-2 w-10 rounded bg-[#121826]" />

                            <div className="mt-3 flex h-7 items-end gap-[2px]">
                                {[35, 55, 42, 70, 60].map(
                                    (height, index) => (
                                        <div
                                            key={index}
                                            className="flex-1 rounded-t-sm bg-[#625bf6]/30"
                                            style={{
                                                height: `${height}%`,
                                            }}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Transactions */}
                    <div className="mt-2 rounded-md border border-[#e6e9ef] p-2">
                        <div className="mb-2 h-1.5 w-14 rounded bg-[#121826]" />

                        <div className="space-y-1.5">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-1.5"
                                >
                                    <div className="h-3.5 w-3.5 rounded bg-[#f0efff]" />
                                    <div className="h-1 flex-1 rounded bg-[#e6e9ef]" />
                                    <div className="h-1 w-5 rounded bg-[#d4d7df]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#625bf6]/0 to-[#625bf6]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
    );
}

/*
 * ============================================================
 * AI INTERFACE VISUAL
 * ============================================================
 */

function AiVisual() {
    return (
        <div className="relative h-44 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--secondary-background)] sm:h-48 lg:h-52">

            {/* Ambient glow */}
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--lightizer-purple)] opacity-10 blur-[60px]"
            />

            {/* Outer animated orbit */}
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite] rounded-full border border-[var(--border)] opacity-60" />

            {/* Inner orbit */}
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)]" />

            {/* AI core */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--lightizer-blue)]/50 bg-[var(--card)] shadow-[0_0_30px_rgba(22,135,255,0.12)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(22,135,255,0.2)]">
                <span className="text-xs font-semibold">
                    AI
                </span>
            </div>

            {/* Orbit points */}
            <span className="absolute left-[27%] top-[32%] h-2 w-2 rounded-full bg-[var(--lightizer-blue)] shadow-[0_0_10px_var(--lightizer-blue)]" />
            <span className="absolute right-[25%] top-[35%] h-1.5 w-1.5 rounded-full bg-[var(--lightizer-purple)]" />
            <span className="absolute bottom-[25%] left-[35%] h-1.5 w-1.5 rounded-full bg-[var(--lightizer-blue)]" />
        </div>
    );
}

/*
 * ============================================================
 * DATA VISUALISATION
 * ============================================================
 */

function DataVisual() {
    // Heights used for the experimental data chart.
    const bars = [35, 52, 44, 72, 58, 82, 64, 90];

    return (
        <div className="relative h-44 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--secondary-background)] p-4 sm:h-48 sm:p-6 lg:h-52">

            {/* Horizontal chart guide lines */}
            <div className="absolute inset-x-4 top-8 border-t border-[var(--border)] sm:inset-x-6" />
            <div className="absolute inset-x-4 top-1/2 border-t border-[var(--border)] sm:inset-x-6" />
            <div className="absolute inset-x-4 bottom-8 border-t border-[var(--border)] sm:inset-x-6" />

            {/* Data bars */}
            <div className="relative flex h-full items-end gap-1.5 sm:gap-2">
                {bars.map((height, index) => (
                    <div
                        key={index}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-[var(--lightizer-blue)]/20 to-[var(--lightizer-purple)]/70 transition-all duration-500 group-hover:from-[var(--lightizer-blue)]/40 group-hover:to-[var(--lightizer-purple)]"
                        style={{
                            height: `${height}%`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

/*
 * ============================================================
 * INTERACTIVE SYSTEM / NOVA VISUAL
 * ============================================================
 */

function SystemVisual() {
    return (
        <div className="relative h-44 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--secondary-background)] sm:h-48 lg:h-52">

            {/* Horizontal connecting line */}
            <div className="absolute left-1/2 top-1/2 h-px w-[65%] -translate-x-1/2 bg-[var(--border)]" />

            {/* Vertical connecting line */}
            <div className="absolute left-1/2 top-1/2 h-[65%] w-px -translate-x-1/2 -translate-y-1/2 bg-[var(--border)]" />

            {/* Central system node */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-[#ff5c35]/50 bg-[var(--card)] shadow-[0_0_25px_rgba(255,92,53,0.12)] transition-all duration-500 group-hover:scale-110 group-hover:border-[#ff5c35]">
                <span className="text-[10px] font-bold sm:text-xs">
                    NOVA
                </span>
            </div>

            {/* Left connected node */}
            <div className="absolute left-[12%] top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] text-[9px] transition-transform duration-500 group-hover:-translate-x-1 sm:left-[15%]">
                UI
            </div>

            {/* Right connected node */}
            <div className="absolute right-[12%] top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] text-[8px] transition-transform duration-500 group-hover:translate-x-1 sm:right-[15%]">
                CART
            </div>

            {/* Top connected node */}
            <div className="absolute left-1/2 top-[10%] flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] text-[7px] transition-transform duration-500 group-hover:-translate-y-1 sm:top-[15%] sm:text-[8px]">
                SHOP
            </div>

            {/* Bottom connected node */}
            <div className="absolute bottom-[10%] left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] text-[7px] transition-transform duration-500 group-hover:translate-y-1 sm:bottom-[15%] sm:text-[8px]">
                WEB
            </div>

            {/* NOVA accent glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5c35]/10 blur-[45px]"
            />
        </div>
    );
}

/*
 * ============================================================
 * EXPERIMENT VISUAL SELECTOR
 * ============================================================
 */

function ExperimentVisual({ type }: { type: Experiment["visual"] }) {
    if (type === "finora") {
        return <FinoraVisual />;
    }

    if (type === "ai") {
        return <AiVisual />;
    }

    if (type === "data") {
        return <DataVisual />;
    }

    return <SystemVisual />;
}

/*
 * ============================================================
 * PLAYGROUND SECTION
 * ============================================================
 */

export default function Playground() {
    return (
        <section
            id="playground"
            className="relative overflow-hidden px-5 py-24 sm:px-6 sm:py-28 md:px-12 md:py-40"
        >
            {/* =================================================
                BACKGROUND DETAILS
                ================================================= */}

            {/* Blue ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/4 top-1/2 h-80 w-80 rounded-full bg-[var(--lightizer-blue)] opacity-[0.025] blur-[130px]"
            />

            {/* Purple ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[var(--lightizer-purple)] opacity-[0.025] blur-[130px]"
            />

            {/* Main section container */}
            <div className="relative mx-auto max-w-[1400px]">

                {/* =================================================
                    SECTION INTRODUCTION
                    ================================================= */}

                <ScrollReveal>
                    <div className="mb-12 max-w-3xl sm:mb-16">

                        {/* Section label */}
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--lightizer-purple)]">
                            Playground
                        </p>

                        {/* Main heading */}
                        <h2 className="text-3xl font-bold tracking-[-0.035em] sm:text-4xl md:text-6xl">
                            Ideas in progress.
                            <br />
                            Experiments in motion.
                        </h2>

                        {/* Section description */}
                        <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:mt-6 sm:text-base md:text-lg">
                            A space for testing ideas, exploring new
                            technologies and building small experiments
                            outside of the main projects.
                        </p>
                    </div>
                </ScrollReveal>

                {/* =================================================
                    EXPERIMENT CARDS

                    Mobile: 1 column
                    Tablet: 2 columns
                    Desktop: 3 columns
                    ================================================= */}

                <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {experiments.map((experiment, index) => (
                        <ScrollReveal
                            key={experiment.number}
                            delay={150 + index * 120}
                        >
                            {/* Individual experiment card */}
                            <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--lightizer-purple)]/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-5">

                                {/* Experiment visual */}
                                <ExperimentVisual type={experiment.visual} />

                                {/* Experiment information */}
                                <div className="px-1 pb-3 pt-6 sm:px-2 sm:pt-7">

                                    {/* Number and status */}
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-xs tracking-[0.16em] text-[var(--text-secondary)]">
                                            {experiment.number}
                                        </span>

                                        <span className="rounded-md border border-[var(--border)] px-2.5 py-1 text-[8px] tracking-[0.1em] text-[var(--text-secondary)] sm:text-[9px] sm:tracking-[0.12em]">
                                            {experiment.tag}
                                        </span>
                                    </div>

                                    {/* Experiment title */}
                                    <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                                        {experiment.title}
                                    </h3>

                                    {/* Experiment description */}
                                    <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                                        {experiment.description}
                                    </p>

                                    {/* =================================================
                                        EXPERIMENT ACTIONS
                                        ================================================= */}

                                    {experiment.href || experiment.demoHref ? (
                                        <div className="mt-6 flex flex-wrap items-center gap-5 sm:mt-7">

                                            {/* Case study button */}
                                            {experiment.href && (
                                                <a
                                                    href={experiment.href}
                                                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--lightizer-purple)]"
                                                >
                                                    View Case Study

                                                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                                                        →
                                                    </span>
                                                </a>
                                            )}

                                            {/* Demo button */}
                                            {experiment.demoHref && (
                                                <a
                                                    href={experiment.demoHref}
                                                    className="group/demo inline-flex items-center gap-2 text-sm font-medium text-[var(--lightizer-purple)] transition-colors duration-300 hover:text-[var(--foreground)]"
                                                >
                                                    {experiment.demoLabel ?? "Launch Demo"}

                                                    <span className="transition-transform duration-300 group-hover/demo:translate-x-1 group-hover/demo:-translate-y-1">
                                                        ↗
                                                    </span>
                                                </a>
                                            )}
                                        </div>
                                    ) : (
                                        /* Experiment without a live destination */
                                        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] sm:mt-7">
                                            Exploring

                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lightizer-purple)] opacity-40" />

                                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--lightizer-purple)]" />
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Animated bottom gradient line */}
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] transition-all duration-700 group-hover:w-full" />
                            </article>
                        </ScrollReveal>
                    ))}
                </div>

                {/* =================================================
                    EXPERIMENT STATUS
                    ================================================= */}

                <ScrollReveal delay={500}>
                    <div className="mt-12 flex flex-col gap-5 border-t border-[var(--border)] pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">

                        {/* Status */}
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lightizer-purple)] opacity-40" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lightizer-purple)]" />
                            </span>

                            <span className="text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                                Playground active
                            </span>
                        </div>

                        {/* Supporting text */}
                        <p className="max-w-md text-sm leading-6 text-[var(--text-secondary)] sm:text-right">
                            New ideas, interfaces and technical experiments
                            is all we are about.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}