"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  icon: string;
  badge?: string;
};

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
};

const productStyles: Record<
  number,
  {
    background: string;
    accent: string;
    dark: boolean;
  }
> = {
  1: {
    background:
      "linear-gradient(145deg, #ffddd4 0%, #ffb49f 45%, #ff7048 100%)",
    accent: "#ff5c35",
    dark: false,
  },

  2: {
    background:
      "linear-gradient(145deg, #dedbd3 0%, #aaa79f 100%)",
    accent: "#161616",
    dark: false,
  },

  3: {
    background:
      "linear-gradient(145deg, #d9e9e7 0%, #9fc8c1 100%)",
    accent: "#326c63",
    dark: false,
  },

  4: {
    background:
      "linear-gradient(145deg, #242424 0%, #0e0e0e 100%)",
    accent: "#ff5c35",
    dark: true,
  },

  5: {
    background:
      "linear-gradient(145deg, #e8d9f5 0%, #b998d5 100%)",
    accent: "#704b91",
    dark: false,
  },

  6: {
    background:
      "linear-gradient(145deg, #dce5f3 0%, #9cb2d2 100%)",
    accent: "#47658e",
    dark: false,
  },
};

export default function ProductCard({
  product,
  onAddToCart,
  onQuickView,
}: ProductCardProps) {
  const [favorite, setFavorite] = useState(false);
  const [added, setAdded] = useState(false);

  const style = productStyles[product.id] || productStyles[1];

  const handleAdd = () => {
    onAddToCart(product);

    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.10)]">

      {/* ====================================================
          PRODUCT VISUAL
          ==================================================== */}

      <div
        className="relative flex aspect-[4/3] min-h-[230px] items-center justify-center overflow-hidden sm:min-h-0"
        style={{
          background: style.background,
        }}
      >
        {/* Decorative giant number */}
        <span
          className={`pointer-events-none absolute -bottom-10 -right-3 text-[150px] font-black leading-none tracking-[-0.08em] ${
            style.dark ? "text-white/[0.04]" : "text-black/[0.035]"
          }`}
        >
          0{product.id}
        </span>

        {/* Top category */}
        <span
          className={`absolute left-5 top-5 text-[8px] font-bold uppercase tracking-[0.2em] ${
            style.dark ? "text-white/50" : "text-black/45"
          }`}
        >
          NOVA / {product.category}
        </span>

        {/* Badge */}
        {product.badge && (
          <span className="absolute right-16 top-4 rounded-full bg-[#161616] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-white">
            {product.badge}
          </span>
        )}

        {/* Favorite */}
        <button
          type="button"
          aria-label={
            favorite
              ? `Remove ${product.name} from favorites`
              : `Add ${product.name} to favorites`
          }
          onClick={() => setFavorite(!favorite)}
          className={`absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${
            favorite
              ? "border-[#ff5c35] bg-[#ff5c35] text-white"
              : style.dark
              ? "border-white/15 bg-white/10 text-white"
              : "border-black/10 bg-white/60 text-black"
          }`}
        >
          {favorite ? "♥" : "♡"}
        </button>

        {/* Ambient ring */}
        <div
          className={`absolute h-44 w-44 rounded-full border transition-transform duration-700 group-hover:scale-125 ${
            style.dark ? "border-white/10" : "border-black/[0.06]"
          }`}
        />

        <div
          className={`absolute h-56 w-56 rounded-full border border-dashed transition-transform duration-700 group-hover:-rotate-45 ${
            style.dark ? "border-white/10" : "border-black/[0.05]"
          }`}
        />

        {/* ==================================================
            PRODUCT ILLUSTRATIONS
            ================================================== */}

        <div className="relative z-10 transition-all duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-105">

          {/* NovaPods */}
          {product.id === 1 && (
            <div className="relative h-40 w-40">

              <div className="absolute left-1/2 top-0 h-28 w-32 -translate-x-1/2 rounded-t-[80px] border-[14px] border-b-0 border-[#1b1b1b]" />

              <div className="absolute bottom-0 left-2 h-24 w-16 rounded-[25px] bg-[#202020] shadow-xl">
                <div className="absolute inset-2 rounded-[19px] border border-white/10" />
              </div>

              <div className="absolute bottom-0 right-2 flex h-24 w-16 items-center justify-center rounded-[25px] bg-[#202020] shadow-xl">
                <div className="h-8 w-8 rounded-full border-[7px] border-[#111] bg-[#ff5c35]" />
              </div>
            </div>
          )}

          {/* Keyboard */}
          {product.id === 2 && (
            <div className="rotate-[-8deg] rounded-xl bg-[#202020] p-3 shadow-[0_25px_40px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:rotate-[-3deg]">

              <div className="grid w-48 grid-cols-8 gap-1">

                {Array.from({ length: 32 }).map(
                  (_, index) => (
                    <span
                      key={index}
                      className="aspect-square rounded-[3px] bg-[#454545] shadow-inner"
                    />
                  )
                )}
              </div>

              <div className="mx-auto mt-1 h-3 w-20 rounded-sm bg-[#454545]" />
            </div>
          )}

          {/* Mouse */}
          {product.id === 3 && (
            <div className="relative h-40 w-28 rounded-[60px] bg-[#252525] shadow-[0_30px_45px_rgba(0,0,0,0.25)]">

              <div className="absolute left-1/2 top-0 h-16 w-px bg-white/10" />

              <div className="absolute left-1/2 top-8 h-6 w-2 -translate-x-1/2 rounded-full bg-[#ff5c35]" />

              <div className="absolute bottom-7 left-1/2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/10" />
            </div>
          )}

          {/* Watch */}
          {product.id === 4 && (
            <div className="relative flex h-44 w-28 items-center justify-center">

              <div className="absolute h-full w-12 rounded-[20px] bg-[#2e2e2e]" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-[30px] border-[5px] border-[#333] bg-[#080808] shadow-[0_30px_50px_rgba(0,0,0,0.6)]">

                <div>
                  <p className="text-center text-[8px] text-white/40">
                    09:41
                  </p>

                  <p className="mt-1 text-center text-xl font-bold text-white">
                    72
                  </p>

                  <div className="mx-auto mt-2 h-1 w-8 rounded-full bg-[#ff5c35]" />
                </div>
              </div>
            </div>
          )}

          {/* Speaker */}
          {product.id === 5 && (
            <div className="relative flex h-40 w-40 items-center justify-center rounded-[38px] bg-[#252525] shadow-[0_30px_50px_rgba(0,0,0,0.3)]">

              <div className="absolute h-28 w-28 rounded-full border border-white/10" />

              <div className="absolute h-20 w-20 rounded-full border-[12px] border-[#393939] bg-[#151515]" />

              <div
                className="relative h-8 w-8 rounded-full"
                style={{
                  backgroundColor: style.accent,
                }}
              />

              <span className="absolute bottom-4 text-[6px] font-bold tracking-[0.3em] text-white/30">
                NOVA
              </span>
            </div>
          )}

          {/* Hub */}
          {product.id === 6 && (
            <div className="relative h-32 w-48 rotate-[-6deg] rounded-[28px] bg-[#242424] shadow-[0_30px_50px_rgba(0,0,0,0.3)]">

              <div className="absolute left-6 top-1/2 flex -translate-y-1/2 gap-2">

                {[1, 2, 3].map((port) => (
                  <span
                    key={port}
                    className="h-4 w-7 rounded-sm border border-white/15 bg-[#101010]"
                  />
                ))}
              </div>

              <div className="absolute right-6 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border border-white/20" />

              <span className="absolute bottom-4 right-6 text-[6px] tracking-[0.25em] text-white/30">
                FLUX
              </span>
            </div>
          )}
        </div>

        {/* Color swatches */}
        <div className="absolute bottom-5 left-5 flex items-center gap-1.5">

          <span className="h-2.5 w-2.5 rounded-full border border-white/40 bg-[#161616]" />

          <span className="h-2.5 w-2.5 rounded-full border border-black/10 bg-[#e4e0d7]" />

          <span
            className="h-2.5 w-2.5 rounded-full border border-white/30"
            style={{
              backgroundColor: style.accent,
            }}
          />
        </div>

        {/* Quick view */}
        <button
            type="button"
            onClick={() => onQuickView(product)}
            className="absolute bottom-4 right-4 z-20 rounded-full bg-white px-4 py-2.5 text-[9px] font-bold text-black shadow-lg transition-all duration-300 active:scale-95 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
        >
            Quick view ↗
        </button>
      </div>


      {/* ====================================================
          PRODUCT INFORMATION
          ==================================================== */}

      <div className="p-4 sm:p-6">

        <div className="flex items-center justify-between">

          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/35">
            {product.category}
          </span>

          <div className="flex items-center gap-1">
            <span className="text-[10px] text-[#ff5c35]">
              ★
            </span>

            <span className="text-[9px] font-semibold text-black/50">
              {product.id === 1
                ? "4.9"
                : product.id === 2
                ? "4.8"
                : product.id === 3
                ? "4.7"
                : product.id === 4
                ? "4.9"
                : "4.8"}
            </span>
          </div>
        </div>


        <div className="mt-3 flex items-start justify-between gap-3 sm:gap-5">

          <div>
            <h3 className="text-lg font-black tracking-[-0.035em] sm:text-xl">
              {product.name}
            </h3>

            <p className="mt-1 text-[10px] text-black/35">
              Free delivery · 2 year warranty
            </p>
          </div>

          <p className="shrink-0 whitespace-nowrap text-base font-black sm:text-lg">
            ${product.price}
          </p>
        </div>


        <p className="mt-4 text-[13px] leading-6 text-black/50 sm:min-h-[48px] sm:text-sm">
          {product.description}
        </p>


        {/* Add button */}
        <button
          type="button"
          onClick={handleAdd}
          className={`mt-5 flex min-h-12 w-full items-center justify-between rounded-xl px-5 py-3.5 text-xs font-bold transition-all duration-300 active:scale-[0.98] sm:mt-6 ${
              added
                  ? "bg-[#ff5c35] text-white"
                  : "bg-[#161616] text-white hover:-translate-y-0.5 hover:bg-[#ff5c35]"
          }`}
        >
          <span>
            {added ? "Added to bag" : "Add to bag"}
          </span>

          <span
            className={`text-base transition-transform duration-300 ${
              added ? "rotate-0" : "group-hover:rotate-90"
            }`}
          >
            {added ? "✓" : "+"}
          </span>
        </button>
      </div>
    </article>
  );
}