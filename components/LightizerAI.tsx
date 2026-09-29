"use client";

import { useState } from "react";

// Questions visitors can quickly ask the assistant.
const suggestedQuestions = [
    "Tell me about Chukwuka",
    "What projects has he built?",
    "What is Lightizer Technologies?",
];

export default function LightizerAI() {
    // Controls whether the assistant panel is open.
    const [isOpen, setIsOpen] = useState(false);

    // Stores the visitor's current question.
    const [message, setMessage] = useState("");

    // Tracks whether the AI is generating a response.
    const [isLoading, setIsLoading] = useState(false);

    // Stores the conversation displayed inside the assistant.
    const [messages, setMessages] = useState<
        { role: "assistant" | "user"; text: string }[]
    >([]);

    // Sends the visitor's question to the Lightizer AI backend.
    const handleSubmit = async (question?: string) => {
        // Use either a suggested question or the typed message.
        const text = (question ?? message).trim();

        // Prevent empty messages or multiple requests.
        if (!text || isLoading) return;

        // Immediately display the visitor's message.
        setMessages((previous) => [
            ...previous,
            {
                role: "user",
                text,
            },
        ]);

        // Clear the input field.
        setMessage("");

        // Show the loading state.
        setIsLoading(true);

        try {
            // Send the question to our Next.js API route.
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: text,
                }),
            });

            // Read the response from the backend.
            const data = await response.json();

            // Handle an API error.
            if (!response.ok) {
                throw new Error(
                    data.error || "Unable to get a response."
                );
            }

            // Display the actual AI response.
            setMessages((previous) => [
                ...previous,
                {
                    role: "assistant",
                    text: data.response,
                },
            ]);
        } catch (error) {
            // Display a friendly error if the API cannot be reached.
            setMessages((previous) => [
                ...previous,
                {
                    role: "assistant",
                    text:
                        "I couldn't connect to Lightizer AI right now. Please try again.",
                },
            ]);

            // Log the technical error for development.
            console.error("Lightizer AI error:", error);
        } finally {
            // Stop the loading state.
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* =====================================================
                FLOATING AI BUTTON
                ===================================================== */}
            {!isOpen && (
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Lightizer AI assistant"
                    className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-medium shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--lightizer-blue)]"
                >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] text-white">
                        ✦
                    </span>

                    <span>Ask Lightizer</span>
                </button>
            )}

            {/* =====================================================
                AI ASSISTANT PANEL
                ===================================================== */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-[60] w-[calc(100%-3rem)] max-w-[390px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl">

                    {/* =================================================
                        HEADER
                        ================================================= */}
                    <div className="flex items-center justify-between border-b border-[var(--border)] p-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] text-white">
                                ✦
                            </div>

                            <div>
                                <p className="text-sm font-semibold">
                                    LIGHTIZER AI
                                </p>

                                <div className="mt-1 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                                    <span className="text-[10px] uppercase tracking-[0.12em] text-[var(--text-secondary)]">
                                        Assistant
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Close assistant */}
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close Lightizer AI assistant"
                            className="text-xl text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
                        >
                            ×
                        </button>
                    </div>

                    {/* =================================================
                        CONVERSATION
                        ================================================= */}
                    <div className="max-h-[420px] overflow-y-auto p-5">

                        {/* Welcome screen before the first question */}
                        {messages.length === 0 && (
                            <div>
                                <p className="text-base font-medium">
                                    Hi, I&apos;m Lightizer AI.
                                </p>

                                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                                    Ask me about Chukwuka, his work,
                                    projects, skills or Lightizer
                                    Technologies.
                                </p>

                                {/* Suggested questions */}
                                <div className="mt-6 space-y-2">
                                    {suggestedQuestions.map((question) => (
                                        <button
                                            key={question}
                                            type="button"
                                            onClick={() =>
                                                handleSubmit(question)
                                            }
                                            disabled={isLoading}
                                            className="group flex w-full items-center justify-between rounded-lg border border-[var(--border)] px-3 py-3 text-left text-xs text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--lightizer-blue)] hover:text-[var(--foreground)] disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <span>{question}</span>

                                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                                →
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Conversation messages */}
                        {messages.length > 0 && (
                            <div className="space-y-4">
                                {messages.map((item, index) => (
                                    <div
                                        key={`${item.role}-${index}`}
                                        className={`flex ${item.role === "user"
                                                ? "justify-end"
                                                : "justify-start"
                                            }`}
                                    >
                                        <div
                                            className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-6 ${item.role === "user"
                                                    ? "bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] text-white"
                                                    : "border border-[var(--border)] bg-[var(--secondary-background)] text-[var(--foreground)]"
                                                }`}
                                        >
                                            {item.text}
                                        </div>
                                    </div>
                                ))}

                                {/* Loading indicator */}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="rounded-xl border border-[var(--border)] bg-[var(--secondary-background)] px-4 py-3 text-sm text-[var(--text-secondary)]">
                                            Lightizer AI is thinking...
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* =================================================
                        INPUT
                        ================================================= */}
                    <div className="border-t border-[var(--border)] p-4">
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                handleSubmit();
                            }}
                            className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--secondary-background)] p-1.5"
                        >
                            <input
                                value={message}
                                onChange={(event) =>
                                    setMessage(event.target.value)
                                }
                                placeholder="Ask something..."
                                aria-label="Ask Lightizer AI something"
                                disabled={isLoading}
                                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-[var(--text-secondary)] disabled:opacity-50"
                            />

                            {/* Send button */}
                            <button
                                type="submit"
                                aria-label="Send message"
                                disabled={isLoading || !message.trim()}
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-[var(--lightizer-blue)] to-[var(--lightizer-purple)] text-white transition-transform duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isLoading ? "..." : "→"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}