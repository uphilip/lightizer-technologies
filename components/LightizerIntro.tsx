"use client";

import { useEffect, useState } from "react";

export default function LightizerIntro() {
    // Controls the exit transition.
    const [leaving, setLeaving] = useState(false);

    // Removes the intro from the DOM after the transition finishes.
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
    // Give visitors enough time to see and read
    // the complete Lightizer brand introduction.
    const exitTimer = window.setTimeout(() => {
        setLeaving(true);
    }, 5000);

    // Remove the intro only after the exit
    // transition has completely finished.
    const hideTimer = window.setTimeout(() => {
        setHidden(true);
    }, 5750);

    return () => {
        window.clearTimeout(exitTimer);
        window.clearTimeout(hideTimer);
    };
}, []);

    // Do not keep an invisible full-screen layer over the website.
    if (hidden) {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 z-[9999] flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[var(--background)] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                leaving
                    ? "-translate-y-full opacity-0"
                    : "translate-y-0 opacity-100"
            }`}
        >
            {/* =====================================================
                BACKGROUND ATMOSPHERE
                ===================================================== */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                {/* Blue glow. */}
                <div className="absolute left-[-35vw] top-[-18vh] h-[70vw] w-[70vw] min-w-[300px] max-w-[850px] rounded-full bg-[var(--lightizer-blue)] opacity-[0.10] blur-[90px] sm:left-[-20vw] sm:blur-[130px]" />

                {/* Purple glow. */}
                <div className="absolute bottom-[-25vh] right-[-35vw] h-[75vw] w-[75vw] min-w-[320px] max-w-[900px] rounded-full bg-[var(--lightizer-purple)] opacity-[0.10] blur-[100px] sm:right-[-20vw] sm:blur-[140px]" />

                {/* Central ambient light. */}
                <div className="absolute left-1/2 top-1/2 h-[45vw] w-[45vw] min-h-[220px] min-w-[220px] max-h-[620px] max-w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] opacity-[0.035] blur-[100px]" />

                {/* Responsive grid. */}
                <div className="lightizer-intro-grid absolute inset-0 opacity-[0.035]" />

                {/* Top accent. */}
                <div className="absolute left-1/2 top-0 h-px w-[70%] max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--lightizer-blue)]/30 to-transparent" />

                {/* Bottom accent. */}
                <div className="absolute bottom-0 left-1/2 h-px w-[70%] max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--lightizer-purple)]/30 to-transparent" />
            </div>

            {/* =====================================================
                RESPONSIVE ORBIT SYSTEM
                ===================================================== */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[72vw] min-w-[245px] max-w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] opacity-50"
            />

            <div
                aria-hidden="true"
                className="lightizer-orbit pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[58vw] min-w-[205px] max-w-[455px] rounded-full border border-[var(--border)] opacity-70"
            >
                {/* Moving blue light. */}
                <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--lightizer-blue)] shadow-[0_0_22px_var(--lightizer-blue)]" />

                {/* Opposite purple light. */}
                <span className="absolute bottom-[-3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--lightizer-purple)] shadow-[0_0_18px_var(--lightizer-purple)]" />
            </div>

            {/* =====================================================
                MAIN BRAND CONTENT
                ===================================================== */}
            <main className="relative z-10 flex w-full max-w-[1500px] flex-col items-center justify-center px-4 py-16 text-center min-[360px]:px-5 sm:px-8 md:px-12">

                {/* =================================================
                    TOP INDICATOR
                    ================================================= */}
                <div className="lightizer-eyebrow flex max-w-full items-center justify-center gap-2.5 sm:gap-4">

                    <span className="h-px w-6 bg-gradient-to-r from-transparent to-[var(--lightizer-blue)] min-[360px]:w-8 sm:w-12" />

                    <p className="whitespace-nowrap text-[7px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)] min-[360px]:text-[8px] min-[360px]:tracking-[0.24em] sm:text-[9px] sm:tracking-[0.3em]">
                        Digital Experiences
                    </p>

                    <span className="h-px w-6 bg-gradient-to-l from-transparent to-[var(--lightizer-purple)] min-[360px]:w-8 sm:w-12" />
                </div>

                {/* =================================================
                    LIGHTIZER WORDMARK
                    ================================================= */}
                <div className="mt-4 w-full overflow-hidden sm:mt-6">
                    <h1 className="lightizer-title mx-auto whitespace-nowrap text-[clamp(2.35rem,12.5vw,9rem)] font-black leading-[0.9] tracking-[-0.065em] text-[var(--foreground)]">
                        LIGHTIZER
                    </h1>
                </div>

                {/* =================================================
                    TECHNOLOGIES
                    ================================================= */}
                <div className="mt-2 w-full overflow-hidden sm:mt-3">
                    <p className="lightizer-technologies mx-auto bg-gradient-to-r from-[var(--lightizer-blue)] via-[var(--lightizer-blue)] to-[var(--lightizer-purple)] bg-clip-text text-[clamp(0.48rem,1.5vw,0.8rem)] font-bold uppercase tracking-[clamp(0.18em,1vw,0.55em)] text-transparent">
                        TECHNOLOGIES
                    </p>
                </div>

                {/* =================================================
                    LIGHT SWEEP
                    ================================================= */}
                <div className="lightizer-line relative mt-6 h-px w-[60vw] min-w-[190px] max-w-[390px] overflow-hidden bg-[var(--border)] sm:mt-9">

                    <span className="lightizer-sweep absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent via-[var(--lightizer-blue)] to-transparent sm:w-32" />
                </div>

                {/* =================================================
                    TAGLINE
                    ================================================= */}
                <p className="lightizer-tagline mt-5 max-w-[280px] text-[7px] font-medium uppercase leading-5 tracking-[0.14em] text-[var(--text-secondary)] min-[360px]:max-w-sm min-[360px]:text-[8px] min-[360px]:tracking-[0.17em] sm:mt-6 sm:max-w-xl sm:text-[10px] sm:tracking-[0.22em]">
                    Digital Experiences &amp; Intelligent Ideas
                </p>

                {/* =================================================
                    DISCIPLINES
                    ================================================= */}
                <div className="lightizer-disciplines mt-5 flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1.5 sm:mt-6 sm:gap-x-3">

                    {["Design", "Development", "Data", "AI"].map(
                        (item, index) => (
                            <div
                                key={item}
                                className="flex items-center gap-2 sm:gap-3"
                            >
                                <span className="text-[7px] font-medium uppercase tracking-[0.12em] text-[var(--text-secondary)] opacity-60 sm:text-[8px] sm:tracking-[0.16em]">
                                    {item}
                                </span>

                                {index < 3 && (
                                    <span className="h-1 w-1 rounded-full bg-[var(--lightizer-blue)] opacity-50" />
                                )}
                            </div>
                        )
                    )}
                </div>

                {/* =================================================
                    MINIMAL ACTIVITY INDICATOR
                    ================================================= */}
                <div
                    aria-hidden="true"
                    className="lightizer-loader mt-7 flex items-center justify-center gap-1.5 sm:mt-9"
                >
                    <span className="h-1 w-1 rounded-full bg-[var(--lightizer-blue)]" />

                    <span className="h-1 w-1 rounded-full bg-[var(--foreground)] opacity-25" />

                    <span className="h-1 w-1 rounded-full bg-[var(--lightizer-purple)]" />
                </div>
            </main>

            {/* =====================================================
                CORNER DETAILS
                Hidden automatically on very small screens.
                ===================================================== */}
            <div className="lightizer-corner pointer-events-none absolute bottom-6 left-6 hidden sm:block lg:bottom-8 lg:left-10">
                <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)] opacity-45">
                    Lightizer / 2026
                </p>
            </div>

            <div className="lightizer-corner pointer-events-none absolute bottom-6 right-6 hidden sm:block lg:bottom-8 lg:right-10">
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--lightizer-blue)]" />

                    <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)] opacity-45">
                        Building forward
                    </p>
                </div>
            </div>

            {/* =====================================================
                ANIMATION SYSTEM
                ===================================================== */}
            <style jsx global>{`
                /* Responsive grid background. */
                .lightizer-intro-grid {
                    background-image:
                        linear-gradient(
                            var(--foreground) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            var(--foreground) 1px,
                            transparent 1px
                        );

                    background-size: clamp(38px, 5vw, 70px)
                        clamp(38px, 5vw, 70px);
                }

                /* Main wordmark reveal. */
                @keyframes lightizerTitleReveal {
                    from {
                        opacity: 0;
                        transform: translateY(110%);
                        filter: blur(8px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                        filter: blur(0);
                    }
                }

                /* General upward reveal. */
                @keyframes lightizerFadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(12px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Horizontal light sweep. */
                @keyframes lightizerSweep {
                    0% {
                        left: -45%;
                        opacity: 0;
                    }

                    20% {
                        opacity: 1;
                    }

                    80% {
                        opacity: 1;
                    }

                    100% {
                        left: 110%;
                        opacity: 0;
                    }
                }

                /* Rotating orbit. */
                @keyframes lightizerOrbit {
                    from {
                        transform: translate(-50%, -50%)
                            rotate(0deg);
                    }

                    to {
                        transform: translate(-50%, -50%)
                            rotate(360deg);
                    }
                }

                /* Small loading dots. */
                @keyframes lightizerPulse {
                    0%,
                    100% {
                        opacity: 0.25;
                        transform: scale(0.75);
                    }

                    50% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                /* Eyebrow enters first. */
                .lightizer-eyebrow {
                    opacity: 0;
                    animation: lightizerFadeUp 0.55s ease 0.12s
                        forwards;
                }

                /* Main brand reveal. */
                .lightizer-title {
                    opacity: 0;
                    animation: lightizerTitleReveal 0.85s
                        cubic-bezier(0.22, 1, 0.36, 1) 0.3s
                        forwards;
                }

                /* Technologies follows the main brand. */
                .lightizer-technologies {
                    opacity: 0;
                    animation: lightizerFadeUp 0.65s ease 0.9s
                        forwards;
                }

                /* Divider appears. */
                .lightizer-line {
                    opacity: 0;
                    animation: lightizerFadeUp 0.45s ease 1.08s
                        forwards;
                }

                /* Light travels through the divider. */
                .lightizer-sweep {
                    animation: lightizerSweep 1.15s ease-in-out
                        1.2s forwards;
                }

                /* Tagline enters. */
                .lightizer-tagline {
                    opacity: 0;
                    animation: lightizerFadeUp 0.6s ease 1.38s
                        forwards;
                }

                /* Disciplines enter slightly later. */
                .lightizer-disciplines {
                    opacity: 0;
                    animation: lightizerFadeUp 0.55s ease 1.62s
                        forwards;
                }

                /* Activity dots enter last. */
                .lightizer-loader {
                    opacity: 0;
                    animation: lightizerFadeUp 0.45s ease 1.85s
                        forwards;
                }

                .lightizer-loader span {
                    animation: lightizerPulse 1.05s ease-in-out
                        infinite;
                }

                .lightizer-loader span:nth-child(2) {
                    animation-delay: 0.15s;
                }

                .lightizer-loader span:nth-child(3) {
                    animation-delay: 0.3s;
                }

                /* Corner details. */
                .lightizer-corner {
                    opacity: 0;
                    animation: lightizerFadeUp 0.6s ease 1.75s
                        forwards;
                }

                /* Slowly rotating orbit. */
                .lightizer-orbit {
                    animation: lightizerOrbit 20s linear infinite;
                }

                /* =============================================
                    SHORT SCREEN SUPPORT
                    Useful for landscape phones and small laptops.
                    ============================================= */
                @media (max-height: 620px) {
                    .lightizer-tagline {
                        margin-top: 1rem;
                    }

                    .lightizer-disciplines {
                        margin-top: 0.75rem;
                    }

                    .lightizer-loader {
                        margin-top: 1rem;
                    }
                }

                /* Extremely short landscape devices. */
                @media (max-height: 480px) {
                    .lightizer-disciplines,
                    .lightizer-loader,
                    .lightizer-corner {
                        display: none;
                    }

                    .lightizer-tagline {
                        margin-top: 0.75rem;
                    }
                }

                /* =============================================
                    REDUCED MOTION ACCESSIBILITY
                    ============================================= */
                @media (prefers-reduced-motion: reduce) {
                    .lightizer-title,
                    .lightizer-eyebrow,
                    .lightizer-technologies,
                    .lightizer-line,
                    .lightizer-tagline,
                    .lightizer-disciplines,
                    .lightizer-loader,
                    .lightizer-corner {
                        opacity: 1;
                        animation: none !important;
                        transform: none;
                        filter: none;
                    }

                    .lightizer-orbit,
                    .lightizer-sweep,
                    .lightizer-loader span {
                        animation: none !important;
                    }
                }
            `}</style>
        </div>
    );
}