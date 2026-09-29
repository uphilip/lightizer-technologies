"use client";

import { useEffect, useRef, useState } from "react";

/*
 * ScrollReveal
 *
 * Reveals content whenever it enters the viewport.
 *
 * Unlike the previous version, this does NOT stop observing
 * the element after the first reveal. This means the animation
 * can play again whenever the visitor scrolls away and comes back.
 */

type ScrollRevealProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
};

export default function ScrollReveal({
    children,
    delay = 0,
    className = "",
}: ScrollRevealProps) {
    // Reference to the element being watched.
    const elementRef = useRef<HTMLDivElement>(null);

    // Controls whether the element is currently visible.
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        /*
         * Watch the element whenever it enters or leaves
         * the visitor's viewport.
         */
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Show the element when it enters the viewport.
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Hide it again after it leaves.
                    // This allows the animation to replay.
                    setIsVisible(false);
                }
            },
            {
                // Trigger when 10% of the element is visible.
                threshold: 0.1,
            }
        );

        observer.observe(element);

        // Clean up the observer when the component is removed.
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            className={`
                ${className}
                transition-all
                duration-700
                ease-out
                ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
            `}
            style={{
                // Controls the staggered entrance timing.
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}