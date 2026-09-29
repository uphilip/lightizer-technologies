"use client";

// Reusable scroll-reveal animation.
import ScrollReveal from "@/components/ScrollReveal";

// Topics currently being explored.
const explorations = [
    {
        number: "01",
        title: "AI Interfaces",
        description:
            "Exploring how AI can become a more natural part of digital products and user experiences.",
        tag: "AI / UX",
    },
    {
        number: "02",
        title: "Intelligent Systems",
        description:
            "Learning how data, machine learning and software can work together to solve practical problems.",
        tag: "MACHINE LEARNING",
    },
    {
        number: "03",
        title: "Data & Visualisation",
        description:
            "Working with data to discover patterns, communicate insights and build useful visual experiences.",
        tag: "PYTHON / DATA",
    },
    {
        number: "04",
        title: "Full-Stack Development",
        description:
            "Building stronger foundations across frontend, backend systems, APIs and application architecture.",
        tag: "DEVELOPMENT",
    },
];

export default function CurrentlyExploring() {
    return (
        <section className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40">
            {/* Ambient background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[var(--lightizer-purple)] opacity-[0.04] blur-[130px]"
            />

            <div className="relative mx-auto max-w-[1400px]">

                {/* =====================================================
                    SECTION INTRO
                    ===================================================== */}
                <ScrollReveal>
                    <div className="mb-16 max-w-3xl">
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)]">
                            Currently Exploring
                        </p>

                        <h2 className="text-4xl font-bold tracking-[-0.03em] md:text-6xl">
                            Still building.
                            <br />
                            Still exploring.
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
                            Technology keeps changing, so I keep experimenting.
                            These are some of the areas currently shaping what
                            I build and learn.
                        </p>
                    </div>
                </ScrollReveal>

                {/* =====================================================
                    EXPLORATION GRID
                    ===================================================== */}
                <div className="grid gap-4 md:grid-cols-2">
                    {explorations.map((item, index) => (
                        <ScrollReveal
                            key={item.number}
                            delay={150 + index * 100}
                        >
                            <article
                                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--lightizer-blue)]/60 md:p-9"
                            >
                                {/* Subtle hover glow */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[var(--lightizer-blue)] opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-10"
                                />

                                <div className="relative flex items-start justify-between">
                                    <span className="text-xs font-medium tracking-[0.18em] text-[var(--text-secondary)]">
                                        {item.number}
                                    </span>

                                    <span className="text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--lightizer-blue)]">
                                        {item.tag}
                                    </span>
                                </div>

                                <div className="relative mt-14">
                                    <h3 className="text-2xl font-bold tracking-[-0.02em] md:text-3xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom progress line */}
                                <div className="relative mt-8 h-px w-full overflow-hidden bg-[var(--border)]">
                                    <div className="h-full w-0 bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] transition-all duration-700 group-hover:w-full" />
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>

                {/* =====================================================
                    STATUS INDICATOR
                    ===================================================== */}
                <ScrollReveal delay={550}>
                    <div className="mt-8 flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lightizer-blue)] opacity-40" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--lightizer-blue)]" />
                        </span>

                        <span>Always exploring · Always building</span>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}