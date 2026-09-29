"use client";

import { useEffect, useMemo, useState } from "react";

import NovaHero from "@/components/nova/NovaHero";
import ProductCard from "@/components/nova/ProductCard";
import ProductQuickView from "@/components/nova/ProductQuickView";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  icon: string;
  badge?: string;
};

type CartItem = Product & {
  quantity: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "NovaPods Pro",
    category: "Audio",
    price: 189,
    description:
      "Adaptive wireless audio built for everyday movement.",
    icon: "◉",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Arc Keyboard",
    category: "Workspace",
    price: 129,
    description:
      "Low-profile mechanical keyboard for focused work.",
    icon: "⌨",
  },
  {
    id: 3,
    name: "Orbit Mouse",
    category: "Workspace",
    price: 79,
    description:
      "Precision wireless control with an ergonomic profile.",
    icon: "◌",
    badge: "New",
  },
  {
    id: 4,
    name: "Pulse Watch",
    category: "Wearables",
    price: 249,
    description:
      "A minimal smart watch designed around health and focus.",
    icon: "◫",
  },
  {
    id: 5,
    name: "Beam Speaker",
    category: "Audio",
    price: 159,
    description:
      "Room-filling wireless sound in a compact form.",
    icon: "◍",
  },
  {
    id: 6,
    name: "Flux Hub",
    category: "Accessories",
    price: 89,
    description:
      "One compact hub for your essential desk connections.",
    icon: "✦",
  },
];

const categories = [
  "All",
  "Audio",
  "Workspace",
  "Wearables",
  "Accessories",
];

export default function NovaPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [quickViewProduct, setQuickViewProduct] =
    useState<Product | null>(null);

  const [cartLoaded, setCartLoaded] = useState(false);

  const router = useRouter();

  // Load the NOVA cart from the browser when the page first opens.
  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem("nova-cart");

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      }
    } catch (error) {
      console.error("Unable to load NOVA cart:", error);
    } finally {
      setCartLoaded(true);
    }
  }, []);

  // Save cart changes after the original saved cart has loaded.
  useEffect(() => {
    if (!cartLoaded) {
      return;
    }

    try {
      window.localStorage.setItem(
        "nova-cart",
        JSON.stringify(cart)
      );
    } catch (error) {
      console.error("Unable to save NOVA cart:", error);
    }
  }, [cart, cartLoaded]);


  // Filter products using category and search.
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const searchValue = search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  // Add product to cart.
  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  };

  // Increase or decrease quantity.
  const updateQuantity = (id: number, change: number) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
              ...item,
              quantity: item.quantity + change,
            }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product completely.
  const removeFromCart = (id: number) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // Total number of products.
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Cart subtotal.
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-[#f4f3ef] text-[#161616]">

      {/* =====================================================
          LIGHTIZER RETURN BAR
          ===================================================== */}

      <div className="border-b border-black/10 bg-[#161616] px-4 py-3 text-white sm:px-8">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">

          {/* Return to Lightizer portfolio. */}
          <a
            href="/#playground"
            className="shrink-0 text-[10px] text-white/60 transition hover:text-white sm:text-xs"
          >
            ← Lightizer Technologies
          </a>

          {/* Demo label. */}
          <span className="text-right text-[8px] font-medium uppercase tracking-[0.14em] text-white/50 sm:text-[9px] sm:tracking-[0.2em]">
            Web Development Demo
          </span>

        </div>
      </div>


      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f4f3ef]/90 backdrop-blur-xl">

        <nav className="mx-auto flex max-w-[1500px] items-center gap-6 px-5 py-5 sm:px-8 lg:px-12">

          {/* Logo */}
          <a
            href="/demos/nova"
            className="text-xl font-black tracking-[-0.06em]"
          >
            NOVA
            <span className="text-[#ff5c35]">.</span>
          </a>


          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 text-xs font-medium md:flex">

            <a
              href="#products"
              className="transition hover:text-[#ff5c35]"
            >
              Shop
            </a>

            <a
              href="#products"
              className="transition hover:text-[#ff5c35]"
            >
              New arrivals
            </a>

            <a
              href="#about"
              className="transition hover:text-[#ff5c35]"
            >
              About
            </a>
          </div>


          {/* Search + Cart */}
          <div className="ml-auto flex items-center gap-3">

            <div className="hidden sm:block">
              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search products..."
                className="w-48 rounded-full border border-black/10 bg-white/60 px-4 py-2.5 text-xs outline-none transition-all duration-300 focus:w-56 focus:border-black/30 focus:bg-white"
              />
            </div>


            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative rounded-full border border-black/10 bg-white px-4 py-2.5 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              Cart

              {cartCount > 0 && (
                <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ff5c35] px-1 text-[9px] text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>


      {/* =====================================================
          PREMIUM NOVA HERO
          ===================================================== */}

      <NovaHero />


      {/* =====================================================
          PRODUCTS
          ===================================================== */}

      <section
        id="products"
        className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >

        {/* Section heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ff5c35]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff5c35]">
                The Collection
              </p>
            </div>

            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">
              Built to be
              <br />
              <span className="text-black/25">
                useful.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-black/50">
              Everyday technology designed with purpose,
              simplicity and attention to detail.
            </p>
          </div>


          {/* Categories */}
          <div className="flex flex-wrap gap-2">

            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.08em] transition-all duration-300 ${category === item
                  ? "bg-[#161616] text-white shadow-lg"
                  : "border border-black/10 bg-white/40 text-black/55 hover:border-black/20 hover:bg-white hover:text-black"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>


        {/* Mobile search */}
        <div className="mt-8 sm:hidden">

          <input
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search products..."
            className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#ff5c35]"
          />
        </div>


        {/* Result information */}
        <div className="mt-12 flex items-center justify-between border-b border-black/10 pb-4">

          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-black/35">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "Product"
              : "Products"}
          </p>

          <p className="hidden text-[10px] uppercase tracking-[0.14em] text-black/30 sm:block">
            NOVA / Collection 01
          </p>
        </div>


        {/* =================================================
            PRODUCT GRID
            ================================================= */}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>


        {/* No search results */}
        {filteredProducts.length === 0 && (
          <div className="py-28 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white text-xl">
              ◌
            </div>

            <p className="mt-6 text-xl font-black">
              Nothing here yet.
            </p>

            <p className="mt-2 text-sm text-black/45">
              Try another search or product category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-6 rounded-full bg-[#161616] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#ff5c35]"
            >
              View all products
            </button>
          </div>
        )}
      </section>


      {/* =====================================================
          BRAND STATEMENT
          ===================================================== */}

      <section className="overflow-hidden border-y border-black/10 bg-[#ff5c35] text-white">

        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-3 lg:px-12">

          <div>
            <p className="text-3xl font-black">
              01
            </p>

            <h3 className="mt-5 font-bold">
              Designed with purpose.
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-white/65">
              Every feature exists for a reason.
            </p>
          </div>


          <div>
            <p className="text-3xl font-black">
              02
            </p>

            <h3 className="mt-5 font-bold">
              Nothing unnecessary.
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-white/65">
              Clear products without needless complexity.
            </p>
          </div>


          <div>
            <p className="text-3xl font-black">
              03
            </p>

            <h3 className="mt-5 font-bold">
              Built for everyday.
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-white/65">
              Technology designed to fit naturally into life.
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          ABOUT
          ===================================================== */}

      <section
        id="about"
        className="relative overflow-hidden bg-[#161616] text-white"
      >

        {/* Glow */}
        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#ff5c35]/15 blur-[140px]" />


        <div className="relative mx-auto grid max-w-[1500px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12 lg:py-32">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff7654]">
              About Nova
            </p>

            <p className="mt-4 text-xs text-white/30">
              EST. 2026
            </p>
          </div>


          <div>

            <h2 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Technology should fit into life,
              <span className="text-white/25">
                {" "}
                not take it over.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              Nova is a fictional commerce experience created
              to demonstrate responsive frontend development,
              application state, product filtering, search and
              interactive shopping functionality.
            </p>


            <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">

              <div>
                <p className="text-2xl font-black">
                  06
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/30">
                  Products
                </p>
              </div>

              <div>
                <p className="text-2xl font-black">
                  04
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/30">
                  Categories
                </p>
              </div>

              <div>
                <p className="text-2xl font-black">
                  100%
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/30">
                  Responsive
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="bg-[#161616] px-5 pb-10 text-white sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1500px] border-t border-white/10 pt-8">

          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-3xl font-black tracking-[-0.06em]">
                NOVA
                <span className="text-[#ff5c35]">
                  .
                </span>
              </p>

              <p className="mt-3 text-xs text-white/35">
                Technology for everyday life.
              </p>
            </div>


            <a
              href="/#playground"
              className="group inline-flex items-center gap-2 text-xs text-white/45 transition hover:text-white"
            >
              Built by Lightizer Technologies

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>


          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.15em] text-white/25 sm:flex-row sm:justify-between">

            <span>
              NOVA / Web Development Demo
            </span>

            <span>
              © 2026 Lightizer Technologies
            </span>
          </div>
        </div>
      </footer>


      {/* =====================================================
          CART BACKDROP
          ===================================================== */}

      <button
        type="button"
        aria-label="Close cart"
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${cartOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      />


      {/* =====================================================
    CART DRAWER
    ===================================================== */}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-[100dvh] w-full max-w-[430px] flex-col bg-[#f8f7f3] shadow-2xl transition-transform duration-500 ${cartOpen
          ? "translate-x-0"
          : "translate-x-full"
          }`}
      >
        {/* =================================================
            CART HEADER
            ================================================= */}
        <div className="flex shrink-0 items-center justify-between border-b border-black/10 p-4 sm:p-6">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#ff5c35]">
              NOVA / Bag
            </p>

            <p className="mt-1.5 text-lg font-black tracking-[-0.04em] sm:mt-2 sm:text-xl">
              Your cart
            </p>

            <p className="mt-1 text-[11px] text-black/45 sm:text-xs">
              {cartCount} {cartCount === 1 ? "item" : "items"}
            </p>
          </div>

          {/* Close cart button. */}
          <button
            type="button"
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-lg transition-all duration-300 hover:rotate-90 hover:bg-black hover:text-white"
          >
            ×
          </button>
        </div>

        {/* =================================================
            CART CONTENT
            ================================================= */}
        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
          {cart.length === 0 ? (
            /* Empty cart. */
            <div className="flex h-full flex-col items-center justify-center px-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white text-xl shadow-sm sm:h-20 sm:w-20 sm:text-2xl">
                ◌
              </div>

              <p className="mt-5 text-lg font-black sm:mt-6 sm:text-xl">
                Your bag is empty.
              </p>

              <p className="mt-2 max-w-xs text-sm leading-6 text-black/45">
                Add something from the NOVA collection and it
                will appear here.
              </p>

              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="mt-6 rounded-full bg-[#161616] px-6 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff5c35]"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            /* Products currently in cart. */
            <div className="space-y-3 sm:space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-black/10 bg-white p-3.5 transition-all duration-300 hover:shadow-md sm:p-4"
                >
                  <div className="flex gap-3 sm:gap-4">
                    {/* Product icon. */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#e9e8e3] text-lg sm:h-16 sm:w-16 sm:text-xl">
                      {item.icon}
                    </div>

                    {/* Product information. */}
                    <div className="min-w-0 flex-1">
                      <div className="flex min-w-0 items-start justify-between gap-2 sm:gap-3">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold sm:text-base">
                            {item.name}
                          </p>

                          <p className="mt-1 text-[11px] text-black/40 sm:text-xs">
                            ${item.price} each
                          </p>
                        </div>

                        {/* Product total. */}
                        <p className="shrink-0 text-xs font-bold sm:text-sm">
                          $
                          {(
                            item.price *
                            item.quantity
                          ).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity and remove controls. */}
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 sm:mt-4">
                        <div className="flex items-center rounded-full border border-black/10">
                          {/* Decrease quantity. */}
                          <button
                            type="button"
                            aria-label={`Decrease ${item.name} quantity`}
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                -1
                              )
                            }
                            className="flex h-9 w-9 items-center justify-center transition hover:text-[#ff5c35]"
                          >
                            −
                          </button>

                          {/* Current quantity. */}
                          <span className="min-w-6 text-center text-xs font-semibold">
                            {item.quantity}
                          </span>

                          {/* Increase quantity. */}
                          <button
                            type="button"
                            aria-label={`Increase ${item.name} quantity`}
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                1
                              )
                            }
                            className="flex h-9 w-9 items-center justify-center transition hover:text-[#ff5c35]"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove product. */}
                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                          className="py-2 text-[10px] font-medium text-black/40 transition hover:text-[#ff5c35]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* =================================================
            CART TOTAL
            ================================================= */}
        {cart.length > 0 && (
          <div className="shrink-0 border-t border-black/10 bg-white p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6">
            {/* Subtotal. */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-black/50">
                Subtotal
              </span>

              <span className="text-lg font-black">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            {/* Shipping information. */}
            <div className="mt-3 flex items-start gap-2 rounded-xl bg-[#f4f3ef] px-3.5 py-3 sm:mt-4 sm:px-4">
              <span className="shrink-0 text-[#ff5c35]">
                ✦
              </span>

              <p className="text-[10px] leading-5 text-black/45">
                Free shipping included on orders over $150.
              </p>
            </div>

            {/* Checkout button. */}
            <button
              type="button"
              onClick={() =>
                router.push("/demos/nova/checkout")
              }
              className="mt-4 flex w-full items-center justify-between gap-4 rounded-xl bg-[#ff5c35] px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e94d29] hover:shadow-lg sm:mt-5 sm:px-5 sm:py-4"
            >
              <span>Checkout</span>

              <span className="shrink-0">
                ${subtotal.toFixed(2)} →
              </span>
            </button>

            <p className="mt-3 text-center text-[9px] text-black/35">
              Secure demo checkout
            </p>
          </div>
        )}
      </aside>
      {/* Product Quick View */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(product) => {
          addToCart(product);
          setQuickViewProduct(null);
        }}
      />
    </main>
  );
}