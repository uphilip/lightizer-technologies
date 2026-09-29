"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  icon: string;
  badge?: string;
  quantity: number;
};

type DeliveryMethod = {
  id: string;
  name: string;
  description: string;
  time: string;
  price: number;
};

type DemoOrder = {
  orderNumber: string;

  customer: {
    firstName: string;
    lastName: string;
    email: string;
  };

  shippingAddress: {
    address: string;
    city: string;
    country: string;
    postalCode: string;
  };

  delivery: DeliveryMethod;
  items: CartItem[];
  subtotal: number;
  total: number;
  createdAt: string;
};

export default function NovaSuccessPage() {
  const router = useRouter();

  const [order, setOrder] =
    useState<DemoOrder | null>(null);

  const [loaded, setLoaded] = useState(false);

  // =====================================================
  // LOAD COMPLETED ORDER
  // =====================================================

  useEffect(() => {
    try {
      const savedOrder =
        window.localStorage.getItem(
          "nova-last-order"
        );

      if (savedOrder) {
        const parsedOrder =
          JSON.parse(savedOrder);

        setOrder(parsedOrder);

        // The order has safely been saved,
        // so the active shopping cart can now be cleared.
        window.localStorage.removeItem(
          "nova-cart"
        );

        // Clear temporary checkout information.
        window.localStorage.removeItem(
          "nova-checkout-details"
        );

        window.localStorage.removeItem(
          "nova-delivery-method"
        );
      }
    } catch (error) {
      console.error(
        "Unable to load NOVA order:",
        error
      );
    } finally {
      setLoaded(true);
    }
  }, []);

  const itemCount = useMemo(() => {
    if (!order) {
      return 0;
    }

    return order.items.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  }, [order]);

  // =====================================================
  // LOADING
  // =====================================================

  if (!loaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f3ef]">

        <div className="text-center">

          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-black/10 border-t-[#ff5c35]" />

          <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">
            Confirming demo order
          </p>
        </div>
      </main>
    );
  }

  // =====================================================
  // NO ORDER FOUND
  // =====================================================

  if (!order) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f3ef] px-6">

        <div className="max-w-md text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-black/10 bg-white text-2xl">
            ◌
          </div>

          <h1 className="mt-7 text-4xl font-black tracking-[-0.05em]">
            No recent order found.
          </h1>

          <p className="mt-4 text-sm leading-7 text-black/45">
            Complete the NOVA demo checkout to see
            an order confirmation here.
          </p>

          <button
            type="button"
            onClick={() =>
              router.push("/demos/nova")
            }
            className="mt-8 rounded-full bg-[#161616] px-7 py-4 text-xs font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#ff5c35]"
          >
            Explore NOVA →
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f3ef] text-[#161616]">

      {/* =================================================
          AMBIENT BACKGROUND
          ================================================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#ff5c35]/10 blur-[140px]" />

        <div className="absolute -right-40 top-0 h-[550px] w-[550px] rounded-full bg-[#7047ff]/[0.06] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#161616 1px, transparent 1px), linear-gradient(90deg, #161616 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>


      {/* =================================================
          HEADER
          ================================================= */}

      <header className="relative z-10 border-b border-black/10">

        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">

          <button
            type="button"
            onClick={() =>
              router.push("/demos/nova")
            }
            className="text-2xl font-black tracking-[-0.06em]"
          >
            NOVA
            <span className="text-[#ff5c35]">
              .
            </span>
          </button>


          <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-[#159a67]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/40">
              Demo order complete
            </span>
          </div>
        </div>
      </header>


    {/* =================================================
    SUCCESS CONTENT
    Responsive order confirmation experience.
    ================================================= */}
      <div className="relative z-10 mx-auto max-w-[1250px] px-5 py-10 sm:px-8 sm:py-14 md:py-20 lg:px-12">

          {/* =================================================
              SUCCESS HERO
              ================================================= */}
          <section className="text-center">

              {/* Animated success check. */}
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">

                  {/* Soft pulse animation. */}
                  <div className="absolute inset-0 animate-ping rounded-full bg-[#159a67]/10" />

                  {/* Outer ring. */}
                  <div className="absolute inset-3 rounded-full border border-[#159a67]/20" />

                  {/* Main success circle. */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#159a67] shadow-[0_20px_50px_rgba(21,154,103,0.25)] sm:h-20 sm:w-20">

                      <span className="text-2xl font-bold text-white sm:text-3xl">
                          ✓
                      </span>
                  </div>
              </div>

              {/* Confirmation label. */}
              <p className="mt-5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#159a67] sm:mt-7 sm:text-[9px] sm:tracking-[0.22em]">
                  Demo order confirmed
              </p>

              {/* Main heading. */}
              <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.055em] min-[360px]:text-5xl sm:text-6xl md:text-7xl">
                  Thank you,

                  <span className="block break-words text-black/20">
                      {order.customer.firstName}.
                  </span>
              </h1>

              {/* Supporting text. */}
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-black/45 sm:mt-6">
                  Your fictional NOVA order has been
                  successfully created. A real transaction
                  has not taken place.
              </p>

              {/* =================================================
                  ORDER NUMBER
                  ================================================= */}
              <div className="mt-7 inline-flex max-w-full items-center gap-3 rounded-full border border-black/10 bg-white/60 px-4 py-3 backdrop-blur sm:mt-8 sm:gap-4 sm:px-5">

                  <span className="shrink-0 text-[8px] font-bold uppercase tracking-[0.15em] text-black/30">
                      Order
                  </span>

                  <span className="h-4 w-px shrink-0 bg-black/10" />

                  <span className="min-w-0 break-all text-[10px] font-black tracking-[0.05em] sm:text-xs sm:tracking-[0.08em]">
                      {order.orderNumber}
                  </span>
              </div>
          </section>

          {/* =================================================
              ORDER INFORMATION
              ================================================= */}
          <section className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr]">

              {/* =================================================
                  ORDER SUMMARY
                  ================================================= */}
              <div className="rounded-[22px] border border-black/10 bg-white/60 p-4 backdrop-blur sm:rounded-[28px] sm:p-8">

                  {/* Summary heading. */}
                  <div className="flex items-start justify-between gap-4 sm:items-center">

                      <div className="min-w-0">
                          <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-black/35 sm:text-[9px] sm:tracking-[0.17em]">
                              Order summary
                          </p>

                          <h2 className="mt-2 text-xl font-black tracking-[-0.04em] sm:text-2xl">
                              Your NOVA gear.
                          </h2>
                      </div>

                      {/* Item count. */}
                      <span className="shrink-0 rounded-full bg-[#161616] px-3 py-1.5 text-[8px] font-bold text-white">
                          {itemCount}{" "}
                          {itemCount === 1
                              ? "ITEM"
                              : "ITEMS"}
                      </span>
                  </div>

                  {/* =================================================
                      ITEMS
                      ================================================= */}
                  <div className="mt-6 divide-y divide-black/[0.07] sm:mt-8">

                      {order.items.map((item) => (
                          <div
                              key={item.id}
                              className="flex items-center gap-3 py-4 first:pt-0 sm:gap-4 sm:py-5"
                          >
                              {/* Product visual. */}
                              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#eae8e1] text-lg sm:h-20 sm:w-20 sm:rounded-2xl sm:text-2xl">

                                  {item.icon}

                                  {/* Quantity badge. */}
                                  <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ff5c35] px-1 text-[8px] font-bold text-white">
                                      {item.quantity}
                                  </span>
                              </div>

                              {/* Product information. */}
                              <div className="min-w-0 flex-1">

                                  <p className="truncate text-xs font-bold sm:text-sm">
                                      {item.name}
                                  </p>

                                  <p className="mt-1 truncate text-[8px] uppercase tracking-[0.1em] text-black/35 sm:text-[9px] sm:tracking-[0.12em]">
                                      {item.category}
                                  </p>

                                  <p className="mt-1.5 text-[9px] text-black/35 sm:mt-2 sm:text-[10px]">
                                      ${item.price.toFixed(2)} each
                                  </p>
                              </div>

                              {/* Product total. */}
                              <p className="shrink-0 text-xs font-black sm:text-sm">
                                  $
                                  {(
                                      item.price *
                                      item.quantity
                                  ).toFixed(2)}
                              </p>
                          </div>
                      ))}
                  </div>

                  {/* =================================================
                      TOTAL
                      ================================================= */}
                  <div className="mt-3 border-t border-black/10 pt-5 sm:mt-4 sm:pt-6">

                      {/* Subtotal. */}
                      <div className="flex justify-between gap-4 text-xs">

                          <span className="text-black/40">
                              Subtotal
                          </span>

                          <span className="shrink-0 font-semibold">
                              ${order.subtotal.toFixed(2)}
                          </span>
                      </div>

                      {/* Delivery. */}
                      <div className="mt-4 flex justify-between gap-4 text-xs">

                          <span className="min-w-0 text-black/40">
                              {order.delivery.name} delivery
                          </span>

                          <span className="shrink-0 font-semibold">
                              {order.delivery.price === 0
                                  ? "FREE"
                                  : `$${order.delivery.price.toFixed(
                                      2
                                  )}`}
                          </span>
                      </div>

                      {/* Demo total. */}
                      <div className="mt-5 flex items-end justify-between gap-4 border-t border-black/10 pt-5 sm:mt-6 sm:pt-6">

                          <div>
                              <p className="text-[8px] uppercase tracking-[0.13em] text-black/30 sm:text-[9px] sm:tracking-[0.15em]">
                                  Demo total
                              </p>

                              <p className="mt-1 text-[9px] text-black/25">
                                  USD
                              </p>
                          </div>

                          <p className="shrink-0 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
                              ${order.total.toFixed(2)}
                          </p>
                      </div>
                  </div>
              </div>

              {/* =================================================
                  RIGHT INFORMATION
                  ================================================= */}
              <div className="space-y-4 sm:space-y-5">

                  {/* =================================================
                      DELIVERY
                      ================================================= */}
                  <div className="rounded-[22px] bg-[#161616] p-5 text-white sm:rounded-[28px] sm:p-7">

                      <div className="flex items-center justify-between gap-4">

                          <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-white/40">
                              Delivery
                          </p>

                          <span className="shrink-0 text-[#ff7654]">
                              ●
                          </span>
                      </div>

                      <h3 className="mt-4 text-xl font-black tracking-[-0.04em] sm:mt-5 sm:text-2xl">
                          {order.delivery.name}
                      </h3>

                      <p className="mt-2 text-xs text-white/40">
                          {order.delivery.time}
                      </p>

                      <div className="my-5 h-px bg-white/10 sm:my-6" />

                      {/* Destination. */}
                      <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/30">
                          Destination
                      </p>

                      <p className="mt-3 break-words text-sm font-semibold">
                          {order.customer.firstName}{" "}
                          {order.customer.lastName}
                      </p>

                      <p className="mt-2 break-words text-xs leading-6 text-white/40">
                          {order.shippingAddress.address}
                          <br />

                          {order.shippingAddress.city},{" "}
                          {order.shippingAddress.postalCode}
                          <br />

                          {order.shippingAddress.country}
                      </p>
                  </div>

                  {/* =================================================
                      CONFIRMATION EMAIL
                      ================================================= */}
                  <div className="rounded-[22px] border border-black/10 bg-white/50 p-5 sm:rounded-[28px] sm:p-7">

                      <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-black/30">
                          Confirmation
                      </p>

                      <h3 className="mt-4 text-lg font-black tracking-[-0.03em]">
                          Order details
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-black/40">
                          In a real store, an order confirmation
                          would be sent to:
                      </p>

                      <p className="mt-4 break-all text-xs font-bold sm:text-sm">
                          {order.customer.email}
                      </p>
                  </div>
              </div>
          </section>

          {/* =================================================
              NEXT ACTIONS
              ================================================= */}
          <section className="mt-6 flex flex-col gap-5 rounded-[22px] border border-black/10 bg-white/40 p-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:rounded-[28px] sm:p-8">

              <div className="min-w-0">

                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#ff5c35]">
                      Keep exploring
                  </p>

                  <p className="mt-2 text-base font-black tracking-[-0.03em] sm:text-lg">
                      There&apos;s more in the NOVA collection.
                  </p>
              </div>

              {/* Return to NOVA store. */}
              <button
                  type="button"
                  onClick={() =>
                      router.push("/demos/nova")
                  }
                  className="group flex min-h-12 w-full shrink-0 items-center justify-between gap-6 rounded-xl bg-[#161616] px-5 py-3.5 text-xs font-bold text-white transition-all duration-300 active:scale-[0.98] sm:w-auto sm:gap-10 sm:px-6 sm:py-4 sm:hover:-translate-y-1 sm:hover:bg-[#ff5c35] sm:hover:shadow-lg"
              >
                  Continue shopping

                  <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                      →
                  </span>
              </button>
          </section>

          {/* =================================================
              DEMO LABEL
              ================================================= */}
          <div className="mt-8 text-center sm:mt-10">

              <p className="mx-auto max-w-lg text-[9px] leading-5 text-black/25">
                  NOVA is a fictional e-commerce experience
                  created by Lightizer Technologies.
                  No real purchase, payment or delivery has
                  occurred.
              </p>
          </div>
      </div>
    </main>
  );
}