"use client";

import { useState } from "react";

/*
 * ============================================================
 * FINORA
 * UI / UX PRODUCT DESIGN DEMO
 * ============================================================
 *
 * Finora is a fictional fintech interface created as a
 * Lightizer Technologies UI/UX portfolio demonstration.
 *
 * The goal is to demonstrate:
 * - Product interface design
 * - Information hierarchy
 * - Dashboard design
 * - Responsive design
 * - Interaction design
 * - Visual systems
 */


/* ------------------------------------------------------------
   TRANSACTION DATA
   ------------------------------------------------------------ */

const transactions = [
  {
    id: 1,
    name: "Salary",
    category: "Income",
    date: "Today",
    amount: 4850,
    type: "income",
    icon: "↓",
  },
  {
    id: 2,
    name: "Amazon",
    category: "Shopping",
    date: "Today",
    amount: 86.2,
    type: "expense",
    icon: "A",
  },
  {
    id: 3,
    name: "Spotify",
    category: "Entertainment",
    date: "Yesterday",
    amount: 12.99,
    type: "expense",
    icon: "S",
  },
  {
    id: 4,
    name: "Cloud Workspace",
    category: "Software",
    date: "Sep 23",
    amount: 24,
    type: "expense",
    icon: "C",
  },
];


/* ------------------------------------------------------------
   SPENDING DATA
   ------------------------------------------------------------ */

const spending = [
  { label: "Mon", height: 38 },
  { label: "Tue", height: 62 },
  { label: "Wed", height: 46 },
  { label: "Thu", height: 78 },
  { label: "Fri", height: 55 },
  { label: "Sat", height: 90 },
  { label: "Sun", height: 68 },
];


/* ============================================================
   FINORA PAGE
   ============================================================ */

export default function FinoraPage() {
  const [balanceVisible, setBalanceVisible] = useState(true);

  const [activeNav, setActiveNav] = useState("Overview");

  const [notification, setNotification] = useState("");

  /*
   * Display a small interaction message.
   */
  const showMessage = (message: string) => {
    setNotification(message);

    window.setTimeout(() => {
      setNotification("");
    }, 2200);
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-[#121826]">

      {/* ======================================================
          DEMO LABEL
          ====================================================== */}

      <div className="border-b border-[#e6e9ef] bg-white px-5 py-3 sm:px-8">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">

          <a
            href="/#work"
            className="text-xs font-medium text-[#697386] transition-colors hover:text-[#121826]"
          >
            ← Lightizer Technologies
          </a>

          <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#625bf6] sm:text-[10px]">
            UI / UX Demo
          </span>
        </div>
      </div>


      {/* ======================================================
          PRODUCT SHELL
          ====================================================== */}

      <div className="mx-auto flex min-h-[calc(100vh-45px)] max-w-[1500px]">

        {/* ====================================================
            DESKTOP SIDEBAR
            ==================================================== */}

        <aside className="hidden w-[250px] shrink-0 border-r border-[#e6e9ef] bg-white p-6 lg:flex lg:flex-col">

          {/* Finora logo. */}
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#625bf6] text-lg font-bold text-white shadow-lg shadow-[#625bf6]/20">
              F
            </div>

            <div>
              <p className="text-lg font-bold tracking-[-0.03em]">
                finora
              </p>

              <p className="text-[9px] uppercase tracking-[0.16em] text-[#9aa1af]">
                Smart Finance
              </p>
            </div>
          </div>


          {/* Navigation. */}
          <nav className="mt-12 space-y-2">

            {[
              ["Overview", "⌂"],
              ["Transactions", "↔"],
              ["Analytics", "◫"],
              ["Cards", "▣"],
              ["Goals", "◎"],
            ].map(([name, icon]) => {
              const active = activeNav === name;

              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => {
                    setActiveNav(name);

                    if (name !== "Overview") {
                      showMessage(`${name} preview selected`);
                    }
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                    active
                      ? "bg-[#625bf6] text-white shadow-lg shadow-[#625bf6]/15"
                      : "text-[#697386] hover:bg-[#f5f7fb] hover:text-[#121826]"
                  }`}
                >
                  <span className="w-5 text-center">
                    {icon}
                  </span>

                  {name}
                </button>
              );
            })}
          </nav>


          {/* Upgrade panel. */}
          <div className="mt-auto rounded-2xl bg-[#f3f1ff] p-5">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm">
              ✦
            </div>

            <p className="mt-4 text-sm font-semibold">
              Finora Plus
            </p>

            <p className="mt-2 text-xs leading-5 text-[#697386]">
              Unlock deeper insights into your financial activity.
            </p>

            <button
              type="button"
              onClick={() =>
                showMessage("Finora Plus is part of this UI concept")
              }
              className="mt-4 text-xs font-semibold text-[#625bf6]"
            >
              Explore Plus →
            </button>
          </div>
        </aside>


        {/* ====================================================
            MAIN DASHBOARD
            ==================================================== */}

        <div className="min-w-0 flex-1">

          {/* ==================================================
              DASHBOARD HEADER
              ================================================== */}

          <header className="border-b border-[#e6e9ef] bg-white/90 px-5 py-4 backdrop-blur sm:px-8">

            <div className="flex items-center justify-between gap-5">

              {/* Mobile logo. */}
              <div className="flex items-center gap-3 lg:hidden">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#625bf6] font-bold text-white">
                  F
                </div>

                <span className="font-bold">
                  finora
                </span>
              </div>


              {/* Desktop page title. */}
              <div className="hidden lg:block">
                <p className="text-xs text-[#9aa1af]">
                  Dashboard
                </p>

                <p className="mt-1 font-semibold">
                  {activeNav}
                </p>
              </div>


              {/* Header controls. */}
              <div className="ml-auto flex items-center gap-3">

                {/* Search. */}
                <button
                  type="button"
                  onClick={() =>
                    showMessage("Search interaction preview")
                  }
                  aria-label="Search"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e6e9ef] bg-white text-sm transition hover:bg-[#f5f7fb]"
                >
                  ⌕
                </button>


                {/* Notification. */}
                <button
                  type="button"
                  onClick={() =>
                    showMessage("You're all caught up")
                  }
                  aria-label="Notifications"
                  className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#e6e9ef] bg-white text-sm transition hover:bg-[#f5f7fb]"
                >
                  ♢

                  <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#625bf6]" />
                </button>


                {/* Profile. */}
                <button
                  type="button"
                  onClick={() =>
                    showMessage("Profile interaction preview")
                  }
                  className="flex items-center gap-3 rounded-xl border border-[#e6e9ef] bg-white p-1.5 pr-3 transition hover:bg-[#f5f7fb]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#121826] text-[10px] font-semibold text-white">
                    AJ
                  </div>

                  <span className="hidden text-xs font-medium sm:block">
                    Alex Johnson
                  </span>
                </button>
              </div>
            </div>
          </header>


          {/* ==================================================
              DASHBOARD CONTENT
              ================================================== */}

          <div className="p-5 sm:p-8">

            {/* Welcome area. */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <p className="text-sm text-[#697386]">
                  Friday, September 25
                </p>

                <h1 className="mt-2 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                  Good morning, Alex.
                </h1>

                <p className="mt-2 text-sm text-[#697386]">
                  Here&apos;s what&apos;s happening with your money.
                </p>
              </div>


              {/* Main action. */}
              <button
                type="button"
                onClick={() =>
                  showMessage("Send money interaction opened")
                }
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#625bf6] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#625bf6]/20 transition hover:-translate-y-0.5 hover:bg-[#554ee8]"
              >
                <span className="text-lg">
                  +
                </span>

                Send money
              </button>
            </div>


            {/* ==================================================
                SUMMARY CARDS
                ================================================== */}

            <div className="mt-8 grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">

              {/* Main balance card. */}
              <div className="relative overflow-hidden rounded-[24px] bg-[#17152f] p-6 text-white shadow-xl shadow-[#17152f]/10 sm:p-8">

                {/* Decorative gradients. */}
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#625bf6] opacity-50 blur-[70px]" />

                <div className="pointer-events-none absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-[#38bdf8] opacity-20 blur-[80px]" />


                <div className="relative">

                  {/* Card top. */}
                  <div className="flex items-start justify-between">

                    <div>
                      <p className="text-xs text-white/60">
                        Total balance
                      </p>

                      <div className="mt-3 flex items-center gap-3">

                        <p className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                          {balanceVisible
                            ? "$24,860.40"
                            : "••••••••"}
                        </p>

                        <button
                          type="button"
                          aria-label="Toggle balance visibility"
                          onClick={() =>
                            setBalanceVisible(!balanceVisible)
                          }
                          className="text-sm text-white/60 transition hover:text-white"
                        >
                          {balanceVisible ? "◉" : "○"}
                        </button>
                      </div>
                    </div>


                    <div className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-medium backdrop-blur">
                      USD
                    </div>
                  </div>


                  {/* Monthly movement. */}
                  <div className="mt-7 flex items-center gap-2">
                    <span className="rounded-full bg-[#36d399]/15 px-2.5 py-1 text-[10px] font-semibold text-[#72e8b7]">
                      ↑ 6.8%
                    </span>

                    <span className="text-xs text-white/50">
                      from last month
                    </span>
                  </div>


                  {/* Quick actions. */}
                  <div className="mt-10 grid grid-cols-4 gap-3">

                    {[
                      ["↑", "Send"],
                      ["↓", "Receive"],
                      ["▣", "Pay"],
                      ["•••", "More"],
                    ].map(([icon, label]) => (
                      <button
                        key={label}
                        type="button"
                        onClick={() =>
                          showMessage(`${label} action selected`)
                        }
                        className="group flex flex-col items-center gap-2"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sm backdrop-blur transition group-hover:-translate-y-1 group-hover:bg-white/15">
                          {icon}
                        </span>

                        <span className="text-[10px] text-white/60">
                          {label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>


              {/* Monthly income card. */}
              <div className="rounded-[24px] border border-[#e6e9ef] bg-white p-6 sm:p-7">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-xs text-[#697386]">
                      Monthly income
                    </p>

                    <p className="mt-3 text-2xl font-bold tracking-[-0.03em]">
                      $6,420
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9fbf3] text-[#159a67]">
                    ↗
                  </div>
                </div>


                {/* Mini chart. */}
                <div className="mt-9 flex h-20 items-end gap-2">

                  {[32, 48, 40, 62, 54, 75, 86].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t bg-[#625bf6]/15 transition-all duration-300 hover:bg-[#625bf6]"
                        style={{
                          height: `${height}%`,
                        }}
                      />
                    )
                  )}
                </div>


                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-[#697386]">
                    September
                  </span>

                  <span className="text-xs font-semibold text-[#159a67]">
                    +12.8%
                  </span>
                </div>
              </div>
            </div>


            {/* ==================================================
                ANALYTICS + SPENDING
                ================================================== */}

            <div className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">

              {/* Spending overview. */}
              <div className="rounded-[24px] border border-[#e6e9ef] bg-white p-5 sm:p-7">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="font-semibold">
                      Spending overview
                    </p>

                    <p className="mt-1 text-xs text-[#9aa1af]">
                      Your activity this week
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      showMessage("Analytics period selected")
                    }
                    className="rounded-lg border border-[#e6e9ef] px-3 py-2 text-[10px] font-medium text-[#697386]"
                  >
                    This week ▾
                  </button>
                </div>


                {/* Spending chart. */}
                <div className="mt-8 flex h-44 items-end gap-3 sm:gap-5">

                  {spending.map((item) => (
                    <div
                      key={item.label}
                      className="flex h-full flex-1 flex-col justify-end gap-3"
                    >
                      <div className="flex h-full items-end">
                        <div
                          className="w-full rounded-t-lg bg-[#e8e7ff] transition-all duration-300 hover:bg-[#625bf6]"
                          style={{
                            height: `${item.height}%`,
                          }}
                        />
                      </div>

                      <span className="text-center text-[9px] text-[#9aa1af] sm:text-[10px]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>


              {/* Budget card. */}
              <div className="rounded-[24px] border border-[#e6e9ef] bg-white p-5 sm:p-7">

                <div className="flex items-center justify-between">
                  <p className="font-semibold">
                    Monthly budget
                  </p>

                  <span className="text-xs text-[#697386]">
                    68%
                  </span>
                </div>


                {/* Budget ring. */}
                <div className="relative mx-auto mt-8 flex h-40 w-40 items-center justify-center rounded-full bg-[conic-gradient(#625bf6_0deg,#625bf6_245deg,#eeeff4_245deg,#eeeff4_360deg)]">

                  <div className="flex h-[118px] w-[118px] flex-col items-center justify-center rounded-full bg-white">

                    <span className="text-2xl font-bold">
                      $2,720
                    </span>

                    <span className="mt-1 text-[10px] text-[#9aa1af]">
                      of $4,000
                    </span>
                  </div>
                </div>


                <p className="mt-7 text-center text-xs leading-5 text-[#697386]">
                  You have{" "}
                  <span className="font-semibold text-[#121826]">
                    $1,280
                  </span>{" "}
                  remaining this month.
                </p>
              </div>
            </div>


            {/* ==================================================
                RECENT TRANSACTIONS
                ================================================== */}

            <div className="mt-5 rounded-[24px] border border-[#e6e9ef] bg-white">

              {/* Transactions header. */}
              <div className="flex items-center justify-between border-b border-[#eef0f4] px-5 py-5 sm:px-7">

                <div>
                  <p className="font-semibold">
                    Recent transactions
                  </p>

                  <p className="mt-1 text-xs text-[#9aa1af]">
                    Your latest financial activity
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    showMessage("All transactions selected")
                  }
                  className="text-xs font-semibold text-[#625bf6]"
                >
                  View all →
                </button>
              </div>


              {/* Transaction list. */}
              <div>
                {transactions.map((transaction, index) => (
                  <div
                    key={transaction.id}
                    className={`flex items-center gap-4 px-5 py-4 transition hover:bg-[#fafbfc] sm:px-7 ${
                      index !== transactions.length - 1
                        ? "border-b border-[#f0f1f4]"
                        : ""
                    }`}
                  >

                    {/* Transaction icon. */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                        transaction.type === "income"
                          ? "bg-[#e9fbf3] text-[#159a67]"
                          : "bg-[#f3f1ff] text-[#625bf6]"
                      }`}
                    >
                      {transaction.icon}
                    </div>


                    {/* Transaction details. */}
                    <div className="min-w-0 flex-1">

                      <p className="truncate text-sm font-semibold">
                        {transaction.name}
                      </p>

                      <p className="mt-1 truncate text-[10px] text-[#9aa1af]">
                        {transaction.category} · {transaction.date}
                      </p>
                    </div>


                    {/* Amount. */}
                    <p
                      className={`text-sm font-semibold ${
                        transaction.type === "income"
                          ? "text-[#159a67]"
                          : "text-[#121826]"
                      }`}
                    >
                      {transaction.type === "income"
                        ? "+"
                        : "-"}
                      ${transaction.amount.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>


            {/* ==================================================
                MOBILE BOTTOM NAVIGATION
                ================================================== */}

            <div className="sticky bottom-4 z-30 mt-6 rounded-2xl border border-[#e6e9ef] bg-white/90 p-2 shadow-xl shadow-black/5 backdrop-blur lg:hidden">

              <div className="grid grid-cols-5">

                {[
                  ["Overview", "⌂"],
                  ["Transactions", "↔"],
                  ["Analytics", "◫"],
                  ["Cards", "▣"],
                  ["Goals", "◎"],
                ].map(([name, icon]) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => {
                      setActiveNav(name);

                      if (name !== "Overview") {
                        showMessage(`${name} preview selected`);
                      }
                    }}
                    className={`flex flex-col items-center gap-1 rounded-xl py-2 text-[9px] transition ${
                      activeNav === name
                        ? "bg-[#f3f1ff] font-semibold text-[#625bf6]"
                        : "text-[#9aa1af]"
                    }`}
                  >
                    <span className="text-sm">
                      {icon}
                    </span>

                    <span className="max-w-full truncate px-1">
                      {name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ======================================================
          INTERACTION NOTIFICATION
          ====================================================== */}

      <div
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
          notification
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="whitespace-nowrap rounded-xl bg-[#121826] px-5 py-3 text-xs font-medium text-white shadow-2xl">
          {notification}
        </div>
      </div>
    </main>
  );
}