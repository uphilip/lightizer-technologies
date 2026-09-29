"use client";

// Import the reusable scroll-reveal animation.
import ScrollReveal from "@/components/ScrollReveal";

/*
 * ============================================================
 * CONTACT SECTION
 * ============================================================
 */

export default function Contact() {
    // Main contact email.
    const email = "chukwukauchenna23@gmail.com";

    // GitHub profile.
    const github = "https://github.com/uphilip";

    // Replace this with your real LinkedIn profile URL later.
    const linkedin = "#";

    // Prefilled Gmail subject.
    const emailSubject = encodeURIComponent(
        "Project Inquiry — Lightizer Technologies"
    );

    // Gmail compose link.
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${emailSubject}`;

    return (
        <section
            id="contact"
            className="relative overflow-hidden px-5 py-24 sm:px-6 sm:py-28 md:px-12 md:py-40"
        >
            {/* =====================================================
                AMBIENT BACKGROUND
                ===================================================== */}

            {/* Main blue glow. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--lightizer-blue)] opacity-[0.035] blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]"
            />

            {/* Additional purple glow. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[var(--lightizer-purple)] opacity-[0.035] blur-[120px]"
            />

            {/* Main content container. */}
            <div className="relative mx-auto max-w-[1400px]">

                {/* =================================================
                    CONTACT INTRODUCTION
                    ================================================= */}

                <ScrollReveal>
                    <div className="max-w-4xl">

                        {/* Section label. */}
                        <div className="mb-5 flex items-center gap-3">

                            {/* Status indicator. */}
                            <span className="h-2 w-2 rounded-full bg-[var(--lightizer-blue)] shadow-[0_0_14px_var(--lightizer-blue)]" />

                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--lightizer-blue)] sm:text-sm">
                                Contact
                            </p>
                        </div>

                        {/* Main heading. */}
                        <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-7xl">
                            Have an idea?
                            <br />

                            <span className="bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] bg-clip-text text-transparent">
                                Let&apos;s build it.
                            </span>
                        </h2>

                        {/* Supporting text. */}
                        <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
                            Whether it is a project, collaboration, research
                            idea or something worth exploring, I&apos;d be
                            happy to hear about it.
                        </p>
                    </div>
                </ScrollReveal>

                {/* =================================================
                    CONTACT CARDS
                    ================================================= */}

                <ScrollReveal delay={150}>
                    <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">

                        {/* =================================================
                            EMAIL CARD
                            ================================================= */}

                        <a
                            href={gmailLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative min-w-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--lightizer-blue)]/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-7"
                        >
                            {/* Card heading. */}
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--text-secondary)] sm:text-xs">
                                    Email
                                </span>

                                {/* Animated arrow. */}
                                <span className="text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--lightizer-blue)]">
                                    ↗
                                </span>
                            </div>

                            {/* Contact email. */}
                            <p className="mt-8 break-words text-xs font-medium transition-colors duration-300 group-hover:text-[var(--lightizer-blue)] sm:text-sm md:text-base">
                                {email}
                            </p>

                            {/* Bottom hover line. */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--lightizer-blue)] transition-all duration-500 group-hover:w-full" />
                        </a>

                        {/* =================================================
                            GITHUB CARD
                            ================================================= */}

                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative min-w-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--lightizer-purple)]/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-7"
                        >
                            {/* Card heading. */}
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--text-secondary)] sm:text-xs">
                                    GitHub
                                </span>

                                {/* Animated arrow. */}
                                <span className="text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--lightizer-purple)]">
                                    ↗
                                </span>
                            </div>

                            {/* GitHub username. */}
                            <p className="mt-8 break-words text-sm font-medium transition-colors duration-300 group-hover:text-[var(--lightizer-purple)] sm:text-base">
                                github.com/uphilip
                            </p>

                            {/* Bottom hover line. */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--lightizer-purple)] transition-all duration-500 group-hover:w-full" />
                        </a>

                        {/* =================================================
                            LINKEDIN CARD
                            ================================================= */}

                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative min-w-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--lightizer-blue)]/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:col-span-2 sm:p-7 lg:col-span-1"
                        >
                            {/* Card heading. */}
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--text-secondary)] sm:text-xs">
                                    LinkedIn
                                </span>

                                {/* Animated arrow. */}
                                <span className="text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--lightizer-blue)]">
                                    ↗
                                </span>
                            </div>

                            {/* LinkedIn description. */}
                            <p className="mt-8 text-sm font-medium transition-colors duration-300 group-hover:text-[var(--lightizer-blue)] sm:text-base">
                                Connect on LinkedIn
                            </p>

                            {/* Bottom hover line. */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] transition-all duration-500 group-hover:w-full" />
                        </a>
                    </div>
                </ScrollReveal>

                {/* =================================================
                    MAIN CALL TO ACTION
                    ================================================= */}

                <ScrollReveal delay={300}>
                    <div className="mt-8 flex flex-col gap-5 border-t border-[var(--border)] pt-8 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">

                        {/* Start conversation button. */}
                        <a
                            href={gmailLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(22,135,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(22,135,255,0.3)] active:translate-y-0 active:scale-[0.98] sm:w-auto"
                        >
                            Start a conversation

                            {/* Animated arrow. */}
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>

                        {/* Areas of work. */}
                        <div className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lightizer-blue)]" />

                            <span className="text-xs uppercase tracking-[0.12em] text-[var(--text-secondary)] sm:text-sm">
                                Design · Development · AI
                            </span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}