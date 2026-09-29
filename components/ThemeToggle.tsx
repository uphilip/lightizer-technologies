"use client";

import { useEffect, useState } from "react";

// ThemeToggle controls the Lightizer website's light and dark modes.
export default function ThemeToggle() {
  // Stores the currently selected theme.
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Read the saved theme when the component loads.
  useEffect(() => {
    // Check whether the visitor already selected a theme.
    const savedTheme = localStorage.getItem("lightizer-theme");

    // Use the saved preference when available.
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);

      // Apply the saved theme to the document.
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  // Switch between light and dark themes.
  const toggleTheme = () => {
    // Determine the next theme.
    const nextTheme = theme === "dark" ? "light" : "dark";

    // Update React state.
    setTheme(nextTheme);

    // Apply the theme to the HTML element.
    document.documentElement.dataset.theme = nextTheme;

    // Remember the visitor's preference.
    localStorage.setItem("lightizer-theme", nextTheme);
  };

  return (
    // Theme button.
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${
        theme === "dark" ? "light" : "dark"
      } mode`}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-sm text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)]"
    >
      {/* Show a sun in dark mode and a moon in light mode. */}
      {theme === "dark" ? "☀" : "◐"}
    </button>
  );
}