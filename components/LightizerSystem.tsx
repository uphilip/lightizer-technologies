"use client";

import { useState } from "react";

// Reusable scroll-reveal animation for the section.
import ScrollReveal from "@/components/ScrollReveal";

// The different disciplines that make up the Lightizer System.
const areas = [
    {
        name: "DESIGN",
        items: ["UI / UX", "Interfaces", "Product Thinking"],
    },
    {
        name: "DEVELOPMENT",
        items: ["Frontend", "Backend", "Web Applications"],
    },
    {
        name: "DATA",
        items: ["Python", "Analysis", "Visualization"],
    },
    {
        name: "AI",
        items: ["Machine Learning", "Intelligent Systems", "AI Interfaces"],
    },
];

export default function LightizerSystem() {
    // Keep track of the discipline currently selected by the visitor.
    const [active, setActive] = useState("DESIGN");

    // Find the information belonging to the selected discipline.
    const activeArea = areas.find((area) => area.name === active);

    return (
        <section className="px-6 py-32 md:px-12 md:py-40">
            <div className="mx-auto max-w-[1400px]">

                {/* =====================================================
                    SECTION INTRO
                    Reveals when the visitor scrolls to this section.
                    ===================================================== */}
                <ScrollReveal>
                    <div className="mb-16 max-w-2xl">
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)]">
                            The Lightizer System
                        </p>

                        <h2 className="text-4xl font-bold tracking-[-0.03em] md:text-6xl">
                            Where ideas become
                            <br />
                            digital experiences.
                        </h2>

                        <p className="mt-6 text-base leading-7 text-[var(--text-secondary)] md:text-lg">
                            I work across design, development, data and AI,
                            connecting different disciplines to build useful
                            digital experiences.
                        </p>
                    </div>
                </ScrollReveal>

                {/* =====================================================
                    INTERACTIVE SYSTEM
                    Appears shortly after the section introduction.
                    ===================================================== */}
                <ScrollReveal delay={150}>
                    <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--secondary-background)]">

                        {/* Background glow behind the interactive system. */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--lightizer-blue)] opacity-[0.06] blur-[100px]"
                        />

                        <div className="relative grid min-h-[420px] md:grid-cols-[1fr_1.2fr]">

                            {/* =================================================
                                LEFT SIDE
                                Discipline navigation.
                                ================================================= */}
                            <div className="flex flex-col justify-center border-b border-[var(--border)] p-8 md:border-b-0 md:border-r md:p-12">

                                <p className="mb-8 text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                                    Explore the system
                                </p>

                                <div className="space-y-2">
                                    {areas.map((area, index) => (
                                        <ScrollReveal
                                            key={area.name}
                                            delay={250 + index * 100}
                                        >
                                            <button
                                                type="button"
                                                onClick={() => setActive(area.name)}
                                                className={`group flex w-full items-center justify-between border-b border-[var(--border)] py-5 text-left transition-all duration-200 ${active === area.name
                                                        ? "text-[var(--foreground)]"
                                                        : "text-[var(--text-secondary)]"
                                                    }`}
                                            >
                                                {/* Number + discipline name. */}
                                                <span className="flex items-center gap-4">
                                                    <span className="text-xs opacity-50">
                                                        0{index + 1}
                                                    </span>

                                                    <span className="text-lg font-medium md:text-xl">
                                                        {area.name}
                                                    </span>
                                                </span>

                                                {/* Arrow appears on the active discipline. */}
                                                <span
                                                    className={`text-xl transition-all duration-200 ${active === area.name
                                                            ? "translate-x-0 opacity-100"
                                                            : "-translate-x-2 opacity-0"
                                                        }`}
                                                >
                                                    →
                                                </span>
                                            </button>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>

                            {/* =================================================
                                RIGHT SIDE
                                Displays information for the selected area.
                                ================================================= */}
                            <div className="flex items-center p-8 md:p-12">
                                <div className="w-full">

                                    {/* Active discipline indicator. */}
                                    <div className="mb-10 flex items-center gap-4">
                                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)]" />

                                        <span className="text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                                            {activeArea?.name}
                                        </span>
                                    </div>

                                    {/* Active discipline heading. */}
                                    <h3 className="text-3xl font-bold tracking-[-0.02em] md:text-5xl">
                                        {activeArea?.name}
                                    </h3>

                                    {/* Skills belonging to the selected discipline. */}
                                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                        {activeArea?.items.map((item, index) => (
                                            <ScrollReveal
                                                key={item}
                                                delay={350 + index * 100}
                                            >
                                                <div
                                                    className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-sm text-[var(--text-secondary)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--lightizer-blue)]"
                                                >
                                                    {item}
                                                </div>
                                            </ScrollReveal>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}