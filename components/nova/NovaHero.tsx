"use client";

import { useEffect, useState } from "react";

export default function NovaHero() {
  // Store mouse position for the desktop interactive movement.
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Track mouse movement.
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-black/10">

      {/* ==================================================
          BACKGROUND ATMOSPHERE
          ================================================== */}
      <div className="pointer-events-none absolute inset-0">

        {/* Orange ambient glow. */}
        <div className="absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full bg-[#ff5c35]/15 blur-[130px]" />

        {/* Soft lower glow. */}
        <div className="absolute -bottom-64 left-[20%] h-[500px] w-[500px] rounded-full bg-[#ffb199]/20 blur-[150px]" />

        {/* Background grid. */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* ==================================================
          HERO CONTENT
          ================================================== */}
      <div className="relative mx-auto grid min-h-[700px] max-w-[1500px] items-center gap-10 px-5 pb-16 pt-20 sm:min-h-[760px] sm:gap-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">

        {/* ==================================================
            COPY
            ================================================== */}
        <div className="relative z-10">

          {/* Collection indicator. */}
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff5c35]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff5c35]">
              New Collection / 2026
            </p>
          </div>

          {/* Main heading. */}
          <h1 className="mt-6 text-[46px] font-black leading-[0.86] tracking-[-0.065em] min-[360px]:text-[52px] sm:mt-7 sm:text-7xl md:text-8xl lg:text-[105px]">
            LESS

            <span className="block">
              NOISE.
            </span>

            <span className="block text-[#ff5c35]">
              MORE USE.
            </span>
          </h1>

          {/* Description. */}
          <p className="mt-6 max-w-lg text-sm leading-7 text-black/55 sm:mt-8 sm:text-base sm:leading-8">
            Thoughtful technology designed around how you
            work, listen and move without getting in the way.
          </p>

          {/* Hero actions. */}
          <div className="mt-8 flex flex-col items-start gap-4 min-[380px]:flex-row min-[380px]:flex-wrap min-[380px]:items-center sm:mt-9 sm:gap-5">

            {/* Explore collection. */}
            <a
              href="#products"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-4 rounded-full bg-[#5A445E] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 active:scale-[0.98] min-[380px]:w-auto sm:px-7 sm:py-4 sm:hover:-translate-y-1 sm:hover:bg-[#ff5c35] sm:hover:shadow-[0_15px_40px_rgba(255,92,53,0.25)]"
            >
              Explore collection

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Discover button. */}
            <button
              type="button"
              className="group flex min-h-11 items-center gap-3 text-xs font-semibold active:scale-[0.98]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-[#ff5c35] group-hover:bg-[#ff5c35] group-hover:text-white">
                ▶
              </span>

              Discover NOVA
            </button>
          </div>

          {/* ==================================================
              STATS
              ================================================== */}
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-2 border-t border-black/10 pt-5 sm:mt-14 sm:gap-0 sm:pt-6">

            {/* Products. */}
            <div>
              <p className="text-lg font-black sm:text-xl">
                06
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-black/40">
                Products
              </p>
            </div>

            {/* Rating. */}
            <div>
              <p className="text-lg font-black sm:text-xl">
                4.9
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-black/40">
                Rating
              </p>
            </div>

            {/* Dispatch. */}
            <div>
              <p className="text-lg font-black sm:text-xl">
                24H
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-black/40">
                Dispatch
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================
            PRODUCT ART
            ================================================== */}
        <div className="relative flex min-h-[390px] items-center justify-center sm:min-h-[500px] lg:min-h-[650px]">

          {/* Large background typography. */}
          <span className="pointer-events-none absolute text-[145px] font-black tracking-[-0.1em] text-black/[0.025] min-[360px]:text-[165px] sm:text-[250px] lg:text-[330px]">
            N
          </span>

          {/* Orange orbital background. */}
          <div
            className="absolute h-[250px] w-[250px] rounded-full bg-[#ff5c35] min-[360px]:h-[280px] min-[360px]:w-[280px] sm:h-[420px] sm:w-[420px]"
            style={{
              transform: `translate(${mouse.x * -7}px, ${mouse.y * -7
                }px)`,
            }}
          />

          {/* Decorative orbit. */}
          <div className="absolute h-[290px] w-[290px] rounded-full border border-black/10 min-[360px]:h-[320px] min-[360px]:w-[320px] sm:h-[500px] sm:w-[500px]" />

          {/* Outer dashed orbit. */}
          <div className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-black/[0.07] min-[360px]:h-[370px] min-[360px]:w-[370px] sm:h-[580px] sm:w-[580px]" />

          {/* ==================================================
              PRODUCT
              ================================================== */}
          <div
            className="relative z-10 transition-transform duration-500 ease-out"
            style={{
              transform: `translate(${mouse.x * 13}px, ${mouse.y * 13
                }px) rotate(-9deg)`,
            }}
          >
            {/* Headband. */}
            <div className="absolute left-1/2 top-[-70px] h-[135px] w-[175px] -translate-x-1/2 rounded-t-[100px] border-[17px] border-b-0 border-[#181818] sm:top-[-95px] sm:h-[180px] sm:w-[230px] sm:rounded-t-[130px] sm:border-[22px]" />

            {/* Left cup. */}
            <div className="absolute -left-[72px] top-4 h-32 w-[88px] rounded-[36px] bg-[#222] shadow-2xl sm:-left-[100px] sm:top-5 sm:h-40 sm:w-28 sm:rounded-[45px]">
              <div className="absolute inset-3 rounded-[30px] border border-white/10 sm:rounded-[35px]" />
            </div>

            {/* Right cup. */}
            <div className="relative h-40 w-28 rounded-[42px] bg-[#222] shadow-[0_40px_70px_rgba(0,0,0,0.3)] sm:h-48 sm:w-36 sm:rounded-[52px]">

              {/* Inner cup. */}
              <div className="absolute inset-3 flex items-center justify-center rounded-[34px] bg-[#303030] sm:inset-4 sm:rounded-[40px]">

                {/* Orange center. */}
                <div className="h-12 w-12 rounded-full border-[10px] border-[#151515] bg-[#ff5c35] sm:h-16 sm:w-16 sm:border-[13px]" />
              </div>

              {/* NOVA label. */}
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[7px] font-bold tracking-[0.25em] text-white/30 sm:bottom-5 sm:text-[8px]">
                NOVA
              </span>
            </div>
          </div>

          {/* ==================================================
              PRODUCT INFORMATION
              ================================================== */}
          <div className="absolute right-1 top-[5%] z-20 rounded-xl border border-black/10 bg-white/80 p-3 shadow-xl backdrop-blur-xl sm:right-0 sm:top-[12%] sm:rounded-2xl sm:p-5">

            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#ff5c35]">
              Bestseller
            </p>

            <p className="mt-1.5 text-xs font-bold sm:mt-2 sm:text-sm">
              NovaPods Pro
            </p>

            <p className="mt-1 text-[10px] text-black/45 sm:text-xs">
              $189
            </p>
          </div>

          {/* ==================================================
              FEATURE LABEL
              ================================================== */}
          <div className="absolute bottom-[8%] left-1 z-20 rounded-xl border border-black/10 bg-white/75 px-3 py-3 shadow-xl backdrop-blur-xl sm:bottom-[15%] sm:left-0 sm:rounded-2xl sm:px-5 sm:py-4">

            <div className="flex items-center gap-3">

              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#161616] text-[8px] text-white sm:h-8 sm:w-8 sm:text-[9px]">
                40H
              </span>

              <div>
                <p className="text-[8px] font-bold sm:text-[9px]">
                  All-day battery
                </p>

                <p className="mt-0.5 text-[7px] text-black/40 sm:text-[8px]">
                  Keep moving longer
                </p>
              </div>
            </div>
          </div>

          {/* ==================================================
              FLOATING BADGE
              ================================================== */}
          <div className="absolute bottom-[1%] right-[5%] flex h-16 w-16 rotate-12 items-center justify-center rounded-full bg-[#161616] text-center text-[7px] font-bold uppercase leading-3 tracking-[0.1em] text-white shadow-xl transition-transform duration-500 sm:bottom-[5%] sm:right-[8%] sm:h-20 sm:w-20 sm:text-[8px] sm:leading-4 sm:tracking-[0.12em] sm:hover:rotate-0">
            Designed
            <br />
            for life
          </div>
        </div>
      </div>

      {/* ==================================================
          BOTTOM MARQUEE
          ================================================== */}
      <div className="overflow-hidden border-t border-black/10 bg-[#ff5c35] py-3">

        <div className="flex min-w-max animate-[novaMarquee_22s_linear_infinite] items-center">

          {[1, 2].map((group) => (
            <div
              key={group}
              className="flex items-center"
            >
              {[
                "DESIGN WITH PURPOSE",
                "FREE SHIPPING OVER $150",
                "BUILT FOR EVERYDAY",
                "2 YEAR WARRANTY",
              ].map((item) => (
                <div
                  key={`${group}-${item}`}
                  className="flex items-center"
                >
                  <span className="px-5 text-[9px] font-bold tracking-[0.14em] text-white sm:px-8 sm:text-[10px] sm:tracking-[0.16em]">
                    {item}
                  </span>

                  <span className="text-white/50">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ==================================================
          MARQUEE ANIMATION
          ================================================== */}
      <style jsx global>{`
        @keyframes novaMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}