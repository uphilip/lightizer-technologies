"use client";

import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  icon: string;
  badge?: string;
};

type ProductQuickViewProps = {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
};

const productDetails: Record<
  number,
  {
    rating: string;
    reviews: number;
    feature: string;
    features: string[];
    colors: string[];
  }
> = {
  1: {
    rating: "4.9",
    reviews: 184,
    feature: "Immersive audio. Less distraction.",
    features: [
      "Adaptive noise control",
      "40-hour battery life",
      "Spatial audio",
    ],
    colors: ["#161616", "#e8e2d8", "#ff5c35"],
  },

  2: {
    rating: "4.8",
    reviews: 126,
    feature: "Built for focused work.",
    features: [
      "Low-profile mechanical keys",
      "Multi-device connection",
      "USB-C charging",
    ],
    colors: ["#161616", "#d8d4ca", "#7d817b"],
  },

  3: {
    rating: "4.7",
    reviews: 98,
    feature: "Precision without the clutter.",
    features: [
      "Precision tracking",
      "Silent switches",
      "Ergonomic design",
    ],
    colors: ["#161616", "#e6e2d8", "#6f9f96"],
  },

  4: {
    rating: "4.9",
    reviews: 211,
    feature: "Your day, simplified.",
    features: [
      "Health monitoring",
      "Always-on display",
      "Water resistant",
    ],
    colors: ["#161616", "#ff5c35", "#d8d4ca"],
  },

  5: {
    rating: "4.8",
    reviews: 143,
    feature: "Big sound. Small footprint.",
    features: [
      "360° room audio",
      "Wireless pairing",
      "18-hour battery",
    ],
    colors: ["#161616", "#704b91", "#e8e2d8"],
  },

  6: {
    rating: "4.8",
    reviews: 87,
    feature: "One hub. Everything connected.",
    features: [
      "USB-C power delivery",
      "HDMI output",
      "High-speed data",
    ],
    colors: ["#161616", "#47658e", "#d8d4ca"],
  },
};

export default function ProductQuickView({
  product,
  onClose,
  onAddToCart,
}: ProductQuickViewProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [added, setAdded] = useState(false);

  // Reset options whenever another product is opened.
  useEffect(() => {
    setSelectedColor(0);
    setAdded(false);
  }, [product]);

  // Close modal with Escape.
  useEffect(() => {
    if (!product) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Stop the page scrolling behind the modal.
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) {
    return null;
  }

  const details = productDetails[product.id];

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (
    <>
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close product quick view"
        onClick={onClose}
        className="fixed inset-0 z-[70] bg-black/55 backdrop-blur-md"
      />

      {/* Modal wrapper */}
      <div className="pointer-events-none fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">

        <div className="pointer-events-auto relative grid max-h-[94dvh] w-full max-w-[1050px] overflow-x-hidden overflow-y-auto rounded-t-[28px] bg-[#f4f3ef] shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:max-h-[92vh] sm:rounded-[30px] md:grid-cols-2">

          {/* Close */}
          <button
            type="button"
            aria-label="Close quick view"
            onClick={onClose}
            className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-lg shadow-sm backdrop-blur transition-all duration-300 hover:rotate-90 hover:bg-black hover:text-white sm:right-4 sm:top-4 sm:h-11 sm:w-11"
          >
            ×
          </button>

          {/* ===============================================
              PRODUCT VISUAL
              =============================================== */}

          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#e7e4dc] px-5 py-10 sm:min-h-[390px] sm:p-10 md:min-h-[620px]">

            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#ff5c35]/20 blur-[90px]" />

            <div className="absolute bottom-[-100px] right-[-80px] h-72 w-72 rounded-full bg-black/[0.05] blur-[80px]" />

            {/* Giant product number */}
            <span className="pointer-events-none absolute bottom-[-15px] right-0 text-[120px] font-black leading-none tracking-[-0.08em] text-black/[0.035] sm:bottom-[-25px] sm:text-[180px]">
              0{product.id}
            </span>

            {/* Product category */}
            <span className="absolute left-4 top-4 text-[8px] font-bold uppercase tracking-[0.18em] text-black/40 sm:left-7 sm:top-7 sm:text-[9px] sm:tracking-[0.2em]">
              NOVA / {product.category}
            </span>

            {/* Decorative rings */}
            <div className="absolute h-52 w-52 rounded-full border border-black/[0.07] sm:h-64 sm:w-64" />

            <div className="absolute h-64 w-64 rounded-full border border-dashed border-black/[0.06] sm:h-80 sm:w-80" />

            {/* Product visual */}
            <div className="relative z-10">

              {product.id === 1 && (
                <div className="relative h-52 w-52">

                  <div className="absolute left-1/2 top-0 h-36 w-40 -translate-x-1/2 rounded-t-[100px] border-[18px] border-b-0 border-[#1b1b1b]" />

                  <div className="absolute bottom-0 left-1 h-32 w-20 rounded-[30px] bg-[#202020] shadow-2xl">
                    <div className="absolute inset-2 rounded-[22px] border border-white/10" />
                  </div>

                  <div className="absolute bottom-0 right-1 flex h-32 w-20 items-center justify-center rounded-[30px] bg-[#202020] shadow-2xl">
                    <div
                      className="h-10 w-10 rounded-full border-[8px] border-[#111]"
                      style={{
                        backgroundColor:
                          details.colors[selectedColor],
                      }}
                    />
                  </div>
                </div>
              )}

              {product.id === 2 && (
                <div className="rotate-[-7deg] rounded-2xl bg-[#202020] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.3)]">

                  <div className="grid w-60 grid-cols-8 gap-1.5">

                    {Array.from({ length: 32 }).map(
                      (_, index) => (
                        <span
                          key={index}
                          className="aspect-square rounded bg-[#454545]"
                        />
                      )
                    )}
                  </div>

                  <div
                    className="mx-auto mt-2 h-4 w-24 rounded"
                    style={{
                      backgroundColor:
                        details.colors[selectedColor],
                    }}
                  />
                </div>
              )}

              {product.id === 3 && (
                <div
                  className="relative h-52 w-36 rounded-[75px] shadow-[0_35px_60px_rgba(0,0,0,0.3)]"
                  style={{
                    backgroundColor:
                      details.colors[selectedColor],
                  }}
                >
                  <div className="absolute left-1/2 top-0 h-20 w-px bg-white/15" />

                  <div className="absolute left-1/2 top-10 h-7 w-2.5 -translate-x-1/2 rounded-full bg-[#ff5c35]" />

                  <div className="absolute bottom-9 left-1/2 h-2 w-14 -translate-x-1/2 rounded-full bg-white/10" />
                </div>
              )}

              {product.id === 4 && (
                <div className="relative flex h-56 w-36 items-center justify-center">

                  <div
                    className="absolute h-full w-16 rounded-[28px]"
                    style={{
                      backgroundColor:
                        details.colors[selectedColor],
                    }}
                  />

                  <div className="relative flex h-32 w-32 items-center justify-center rounded-[38px] border-[6px] border-[#333] bg-[#080808] shadow-[0_35px_60px_rgba(0,0,0,0.5)]">

                    <div className="text-center">
                      <p className="text-[9px] text-white/40">
                        09:41
                      </p>

                      <p className="mt-1 text-3xl font-black text-white">
                        72
                      </p>

                      <div className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-[#ff5c35]" />
                    </div>
                  </div>
                </div>
              )}

              {product.id === 5 && (
                <div
                  className="relative flex h-52 w-52 items-center justify-center rounded-[50px] shadow-[0_35px_60px_rgba(0,0,0,0.3)]"
                  style={{
                    backgroundColor:
                      details.colors[selectedColor],
                  }}
                >
                  <div className="absolute h-36 w-36 rounded-full border border-white/10" />

                  <div className="absolute h-28 w-28 rounded-full border-[15px] border-black/25 bg-[#151515]" />

                  <div className="relative h-10 w-10 rounded-full bg-[#ff5c35]" />

                  <span className="absolute bottom-5 text-[7px] font-bold tracking-[0.3em] text-white/30">
                    NOVA
                  </span>
                </div>
              )}

              {product.id === 6 && (
                <div
                  className="relative h-40 w-60 rotate-[-6deg] rounded-[35px] shadow-[0_35px_60px_rgba(0,0,0,0.3)]"
                  style={{
                    backgroundColor:
                      details.colors[selectedColor],
                  }}
                >
                  <div className="absolute left-8 top-1/2 flex -translate-y-1/2 gap-2">

                    {[1, 2, 3].map((port) => (
                      <span
                        key={port}
                        className="h-5 w-9 rounded border border-white/15 bg-[#101010]"
                      />
                    ))}
                  </div>

                  <div className="absolute right-8 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full border border-white/30" />

                  <span className="absolute bottom-5 right-8 text-[7px] tracking-[0.25em] text-white/30">
                    FLUX
                  </span>
                </div>
              )}
            </div>

            <span className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.12em] text-black/35 sm:bottom-7 sm:left-7 sm:text-[9px] sm:tracking-[0.15em]">
              Designed for everyday
            </span>
          </div>


          {/* ===============================================
              PRODUCT DETAILS
              =============================================== */}

          <div className="flex flex-col p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:p-10 md:p-12">

            {/* Badge */}
            <div className="flex items-center gap-3">

              {product.badge && (
                <span className="rounded-full bg-[#161616] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.13em] text-white">
                  {product.badge}
                </span>
              )}

              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/35">
                {product.category}
              </span>
            </div>


            {/* Product */}
            <h2 className="mt-5 break-words text-3xl font-black leading-[0.95] tracking-[-0.05em] sm:mt-7 sm:text-5xl">
              {product.name}
            </h2>

            <p className="mt-3 text-lg font-black">
              ${product.price}
            </p>


            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">

              <span className="text-sm tracking-[0.08em] text-[#ff5c35]">
                ★★★★★
              </span>

              <span className="text-xs font-semibold">
                {details.rating}
              </span>

              <span className="text-xs text-black/35">
                ({details.reviews} reviews)
              </span>
            </div>

            {/* divider */}
            <div className="my-6 h-px bg-black/10 sm:my-8" />


            <p className="text-lg font-bold leading-snug tracking-[-0.02em] sm:text-xl">
              {details.feature}
            </p>

            <p className="mt-4 text-sm leading-7 text-black/50">
              {product.description}
            </p>


            {/* Features */}
            <div className="mt-7 space-y-3">

              {details.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff5c35]/10 text-[8px] font-bold text-[#ff5c35]">
                    ✓
                  </span>

                  <span className="text-xs font-medium text-black/60">
                    {feature}
                  </span>
                </div>
              ))}
            </div>


            {/* Color */}
            <div className="mt-9">

              <div className="flex items-center justify-between">

                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/40">
                  Select finish
                </p>

                <span className="text-[9px] text-black/30">
                  {selectedColor + 1} / {details.colors.length}
                </span>
              </div>


              <div className="mt-4 flex gap-3">

                {details.colors.map((color, index) => (
                  <button
                    key={color}
                    type="button"
                    aria-label={`Select color ${index + 1}`}
                    onClick={() =>
                      setSelectedColor(index)
                    }
                    className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 active:scale-95 ${selectedColor === index
                      ? "scale-110 border-black"
                      : "border-black/10 hover:scale-105"
                      }`}
                  >
                    <span
                      className="h-7 w-7 rounded-full border border-black/10"
                      style={{
                        backgroundColor: color,
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/*Delivery + Warranty*/}
            {/* Shipping */}
            <div className="mt-7 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:mt-8">

              <div className="rounded-xl border border-black/10 bg-white/50 p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-black/35">
                  Delivery
                </p>

                <p className="mt-2 text-xs font-semibold">
                  Free shipping
                </p>
              </div>

              <div className="rounded-xl border border-black/10 bg-white/50 p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-black/35">
                  Warranty
                </p>

                <p className="mt-2 text-xs font-semibold">
                  2 years
                </p>
              </div>
            </div>


            {/* Add to bag */}
            <button
              type="button"
              onClick={handleAdd}
              className={`mt-7 flex min-h-12 w-full items-center justify-between gap-4 rounded-xl px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 active:scale-[0.98] sm:mt-8 sm:px-6 sm:py-4 ${added
                ? "bg-[#159a67]"
                : "bg-[#161616] hover:-translate-y-1 hover:bg-[#ff5c35]"
                }`}
            >
              <span>
                {added ? "Added to bag" : "Add to bag"}
              </span>

              <span className="shrink-0">
                {added ? "✓" : `$${product.price} →`}
              </span>
            </button>


            <p className="mt-4 px-2 text-center text-[9px] leading-5 text-black/35">
              Free delivery · 30-day returns · 2-year warranty
            </p>
          </div>
        </div>
      </div>
    </>
  );
}