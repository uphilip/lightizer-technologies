"use client";

// Reusable scroll-reveal animation.
import ScrollReveal from "@/components/ScrollReveal";

export default function LightizerTechnologies() {
    return (
        <section className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40">
            {/* =====================================================
                AMBIENT BACKGROUND
                Adds a subtle brand glow behind the section.
                ===================================================== */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--lightizer-blue)] opacity-[0.035] blur-[150px]"
            />

            <div className="relative mx-auto max-w-[1400px]">

                {/* =====================================================
                    SECTION INTRO
                    ===================================================== */}
                <ScrollReveal>
                    <div className="mb-16 max-w-3xl">
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)]">
                            Lightizer Technologies
                        </p>

                        <h2 className="text-4xl font-bold tracking-[-0.03em] md:text-6xl">
                            A space for ideas,
                            <br />
                            technology and building.
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
                            Lightizer Technologies is the space behind the
                            work that explore's how design, software, data and
                            artificial intelligence can come together to create
                            useful digital products.
                        </p>
                    </div>
                </ScrollReveal>

                {/* =====================================================
                    MAIN BRAND PANEL
                    ===================================================== */}
                <ScrollReveal delay={150}>
                    <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">

                        {/* Decorative grid */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 opacity-[0.04]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                                backgroundSize: "48px 48px",
                            }}
                        />

                        <div className="relative grid min-h-[480px] md:grid-cols-[1.1fr_0.9fr]">

                            {/* =================================================
                                LEFT SIDE
                                Brand statement.
                                ================================================= */}
                            <div className="flex flex-col justify-between p-8 md:p-14">

                                <div>
                                    <div className="mb-10 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--secondary-background)]">
                                            <span className="bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] bg-clip-text text-lg font-bold text-transparent">
                                                L
                                            </span>
                                        </div>

                                        <div>
                                            <p className="text-sm font-bold tracking-tight">
                                                LIGHTIZER
                                            </p>

                                            <p className="text-[9px] font-medium tracking-[0.18em] text-[var(--text-secondary)]">
                                                TECHNOLOGIES
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.03em] md:text-5xl">
                                        Building at the intersection of
                                        <span className="bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] bg-clip-text text-transparent">
                                            {" "}design, code and intelligence.
                                        </span>
                                    </h3>

                                    <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                                        The goal is simple: understand real
                                        problems, experiment with technology
                                        and turn promising ideas into things
                                        people can actually use.
                                    </p>
                                </div>

                                {/* Brand principles */}
                                <div className="mt-12 grid gap-3 sm:grid-cols-3">
                                    {[
                                        "Think",
                                        "Build",
                                        "Explore",
                                    ].map((item, index) => (
                                        <div
                                            key={item}
                                            className="rounded-lg border border-[var(--border)] bg-[var(--secondary-background)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--lightizer-blue)]/50"
                                        >
                                            <span className="text-xs text-[var(--text-secondary)]">
                                                0{index + 1}
                                            </span>

                                            <p className="mt-3 text-sm font-medium">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* =================================================
                                RIGHT SIDE
                                Interactive technology visual.
                                ================================================= */}
                            <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden border-t border-[var(--border)] md:border-l md:border-t-0">

                                {/* Outer glow */}
                                <div
                                    aria-hidden="true"
                                    className="absolute h-56 w-56 rounded-full bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] opacity-10 blur-[80px]"
                                />

                                {/* Outer orbit */}
                                <div className="absolute h-64 w-64 animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-[var(--border)] md:h-72 md:w-72" />

                                {/* Middle orbit */}
                                <div className="absolute h-44 w-44 animate-[spin_20s_linear_infinite_reverse] rounded-full border border-[var(--border)]" />

                                {/* Central core */}
                                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--secondary-background)] shadow-2xl">
                                    <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] opacity-20 blur-md" />

                                    <span className="relative bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] bg-clip-text text-4xl font-bold text-transparent">
                                        L
                                    </span>
                                </div>

                                {/* Floating technology labels */}
                                <div className="absolute left-[12%] top-[25%] rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-xs text-[var(--text-secondary)] shadow-lg animate-[float_5s_ease-in-out_infinite]">
                                    DESIGN
                                </div>

                                <div className="absolute right-[10%] top-[32%] rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-xs text-[var(--text-secondary)] shadow-lg animate-[float_6s_ease-in-out_infinite]">
                                    DEVELOPMENT
                                </div>

                                <div className="absolute bottom-[25%] left-[18%] rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-xs text-[var(--text-secondary)] shadow-lg animate-[float_5.5s_ease-in-out_infinite]">
                                    DATA
                                </div>

                                <div className="absolute bottom-[18%] right-[18%] rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-xs text-[var(--text-secondary)] shadow-lg animate-[float_6.5s_ease-in-out_infinite]">
                                    AI / ML
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}