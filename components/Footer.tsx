"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
    // Automatically keep the copyright year current.
    const year = new Date().getFullYear();

    // Main navigation links.
    const navigation = [
        { name: "Work", href: "#work" },
        { name: "About", href: "#about" },
        { name: "Playground", href: "#playground" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-[var(--border)] px-5 py-10 sm:px-6 sm:py-12 md:px-12 md:py-14">

            {/* =====================================================
          BACKGROUND DETAILS
          ===================================================== */}

            {/* Subtle blue glow. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-[var(--lightizer-blue)] opacity-[0.025] blur-[100px]"
            />

            {/* Subtle purple glow. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[var(--lightizer-purple)] opacity-[0.025] blur-[100px]"
            />

            {/* Main footer container. */}
            <div className="relative mx-auto max-w-[1400px]">
                <ScrollReveal>

                    {/* =================================================
              MAIN FOOTER AREA
              ================================================= */}
                    <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">

                        {/* =================================================
                BRAND
                ================================================= */}
                        <div>

                            {/* Lightizer logo. */}
                            <a
                                href="/"
                                aria-label="Lightizer Technologies home"
                                className="group inline-flex items-center gap-3"
                            >
                                {/* Logo icon. */}
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] shadow-[0_0_25px_rgba(22,135,255,0.15)] transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
                                    <span className="text-base font-bold text-white">
                                        L
                                    </span>
                                </div>

                                {/* Brand name. */}
                                <div>
                                    <div className="text-lg font-bold tracking-tight">
                                        LIGHTIZER
                                    </div>

                                    <div className="text-[9px] font-medium tracking-[0.18em] text-[var(--text-secondary)]">
                                        TECHNOLOGIES
                                    </div>
                                </div>
                            </a>

                            {/* Brand statement. */}
                            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
                                Building digital experiences, exploring intelligent
                                systems and turning ideas into useful technology.
                            </p>

                            {/* Focus areas. */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {["DESIGN", "DEVELOPMENT", "DATA", "AI"].map(
                                    (item) => (
                                        <span
                                            key={item}
                                            className="rounded-md border border-[var(--border)] px-2.5 py-1.5 text-[9px] font-medium tracking-[0.12em] text-[var(--text-secondary)]"
                                        >
                                            {item}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>

                        {/* =================================================
                NAVIGATION
                ================================================= */}
                        <div className="md:text-right">

                            {/* Navigation label. */}
                            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                                Navigation
                            </p>

                            {/* Navigation links. */}
                            <div className="flex flex-wrap gap-x-6 gap-y-4 md:justify-end">
                                {navigation.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="group relative text-sm font-medium text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--foreground)]"
                                    >
                                        {link.name}

                                        {/* Animated underline. */}
                                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] transition-all duration-300 group-hover:w-full" />
                                    </a>
                                ))}
                            </div>

                            {/* =================================================
                  SOCIAL LINKS
                  ================================================= */}
                            <div className="mt-8 flex items-center gap-5 md:justify-end">

                                {/* GitHub */}
                                <a
                                    href="https://github.com/uphilip"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 text-xs text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--foreground)]"
                                >
                                    GitHub

                                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                        ↗
                                    </span>
                                </a>

                                {/* Separator */}
                                <span className="h-3 w-px bg-[var(--border)]" />

                                {/* LinkedIn
                    Replace # with your actual LinkedIn profile later.
                */}
                                <a
                                    href="#"
                                    className="group inline-flex items-center gap-2 text-xs text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--foreground)]"
                                >
                                    LinkedIn

                                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                        ↗
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
              BOTTOM FOOTER
              ================================================= */}
                    <div className="mt-10 border-t border-[var(--border)] pt-6 sm:mt-12">

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                            {/* Copyright. */}
                            <span className="text-xs leading-6 text-[var(--text-secondary)]">
                                © {year} Lightizer Technologies. All rights reserved.
                            </span>

                            {/* Status indicator. */}
                            <div className="flex items-center gap-3">

                                {/* Animated online/building indicator. */}
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lightizer-blue)] opacity-40" />

                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lightizer-blue)]" />
                                </span>

                                <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                                    Design · Development · AI
                                </span>
                            </div>
                        </div>
                    </div>

                </ScrollReveal>
            </div>
        </footer>
    );
}