// Enable client-side functionality for scrolling,
// mobile menu state and interactive navigation.
"use client";

import { useEffect, useState } from "react";

// Import the existing functional theme toggle.
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
    // Track whether the visitor has scrolled down the page.
    const [scrolled, setScrolled] = useState(false);

    // Track whether the mobile navigation menu is open.
    const [menuOpen, setMenuOpen] = useState(false);

    // Main navigation links.
    const links = [
        { name: "WORK", href: "#work" },
        { name: "ABOUT", href: "#about" },
        { name: "PLAYGROUND", href: "#playground" },
        { name: "CONTACT", href: "#contact" },
    ];

    /*
     * Detect page scrolling.
     *
     * Once the visitor scrolls slightly, the navbar receives
     * a background, border and blur effect.
     */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        // Check the initial scroll position.
        handleScroll();

        // Listen for future scrolling.
        window.addEventListener("scroll", handleScroll);

        // Remove the listener when the navbar is unmounted.
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    /*
     * Prevent the page behind the mobile menu from scrolling
     * while the navigation is open.
     */
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        // Restore normal scrolling when the component unmounts.
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    /*
     * Close the mobile menu if the screen becomes desktop-sized.
     *
     * This prevents an open mobile menu from remaining active
     * after resizing the browser.
     */
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        // Fixed navigation header.
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled || menuOpen
                ? "border-b border-[var(--border)] bg-[var(--background)]/85 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                : "bg-transparent"
                }`}
        >
            {/* =====================================================
                MAIN NAVIGATION BAR
                ===================================================== */}
            <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-6 sm:py-5 md:px-12">

                {/* =================================================
                    LIGHTIZER LOGO
                    ================================================= */}
                <a
                    href="/"
                    aria-label="Lightizer Technologies home"
                    className="group relative z-10 leading-none"
                >
                    <div className="flex items-center gap-2.5">

                        {/* Small brand symbol. */}
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1687FF] to-[#7047FF] shadow-[0_0_20px_rgba(22,135,255,0.18)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                            <span className="text-sm font-bold text-white">
                                L
                            </span>
                        </div>

                        {/* Brand name. */}
                        <div>
                            <div className="text-base font-bold tracking-tight sm:text-lg">
                                LIGHTIZER
                            </div>

                            <div className="mt-0.5 text-[8px] font-medium tracking-[0.18em] text-[var(--text-secondary)] sm:text-[9px]">
                                TECHNOLOGIES
                            </div>
                        </div>
                    </div>
                </a>

                {/* =================================================
                    DESKTOP NAVIGATION
                    ================================================= */}
                <div className="hidden items-center gap-7 md:flex lg:gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="group relative py-2 text-xs font-medium tracking-[0.08em] text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--foreground)] lg:text-sm"
                        >
                            {link.name}

                            {/* Animated underline. */}
                            <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#1687FF] to-[#7047FF] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    {/* Divider before theme control. */}
                    <div className="h-5 w-px bg-[var(--border)]" />

                    {/* Existing functional light/dark theme toggle. */}
                    <ThemeToggle />
                </div>

                {/* =================================================
                    MOBILE CONTROLS
                    ================================================= */}
                <div className="relative z-10 flex items-center gap-2 md:hidden">

                    {/* Existing theme toggle. */}
                    <ThemeToggle />

                    {/* Mobile menu button. */}
                    <button
                        type="button"
                        aria-label={
                            menuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setMenuOpen((previous) => !previous)}
                        className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)]/60 backdrop-blur transition-all duration-300 hover:border-[#1687FF]/50"
                    >
                        {/* Custom animated hamburger icon. */}
                        <div className="relative h-4 w-5">
                            <span
                                className={`absolute left-0 top-0 h-[1.5px] w-5 bg-[var(--foreground)] transition-all duration-300 ${menuOpen
                                    ? "top-[7px] rotate-45"
                                    : ""
                                    }`}
                            />

                            <span
                                className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-[var(--foreground)] transition-all duration-300 ${menuOpen
                                    ? "scale-x-0 opacity-0"
                                    : ""
                                    }`}
                            />

                            <span
                                className={`absolute bottom-0 left-0 h-[1.5px] w-5 bg-[var(--foreground)] transition-all duration-300 ${menuOpen
                                    ? "bottom-[7px] -rotate-45"
                                    : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* =====================================================
                MOBILE NAVIGATION PANEL
                ===================================================== */}
            <div
                id="mobile-navigation"
                className={`absolute left-0 top-full w-full overflow-hidden border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-2xl transition-all duration-500 ease-out md:hidden ${menuOpen
                    ? "pointer-events-auto max-h-[calc(100vh-70px)] border-t opacity-100"
                    : "pointer-events-none max-h-0 border-t-0 opacity-0"
                    }`}
            >
                {/* Mobile menu content. */}
                <div className="mx-auto flex min-h-[calc(100vh-70px)] max-w-[1400px] flex-col px-6 pb-10 pt-8">

                    {/* Small menu label. */}
                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1687FF] shadow-[0_0_12px_#1687FF]" />

                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                            Navigation
                        </span>
                    </div>

                    {/* Mobile navigation links. */}
                    <div className="border-t border-[var(--border)]">
                        {links.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="group flex items-center justify-between border-b border-[var(--border)] py-5 transition-all duration-300"
                                style={{
                                    transitionDelay: menuOpen
                                        ? `${index * 60}ms`
                                        : "0ms",
                                }}
                            >
                                {/* Link number and name. */}
                                <div className="flex items-center gap-5">
                                    <span className="text-[10px] text-[var(--text-secondary)]">

                                    </span>

                                    <span className="text-xl font-semibold tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#1687FF]">
                                        {link.name}
                                    </span>
                                </div>

                                {/* Navigation arrow. */}
                                <span className="text-lg text-[var(--text-secondary)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1687FF]">
                                    →
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* =================================================
                        MOBILE MENU FOOTER
                        ================================================= */}
                    <div className="mt-auto pt-10">

                        {/* Brand statement. */}
                        <p className="max-w-xs text-sm leading-6 text-[var(--text-secondary)]">
                            Design, development, data and artificial
                            intelligence — connected through technology.
                        </p>

                        {/* Small status area. */}
                        <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-5">

                            <div className="flex items-center gap-2">
                                {/* Animated status indicator. */}
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1687FF] opacity-40" />

                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1687FF]" />
                                </span>

                                <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                                    Lightizer Technologies
                                </span>
                            </div>

                            <span className="text-[10px] text-[var(--text-secondary)]">
                                © {new Date().getFullYear()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}