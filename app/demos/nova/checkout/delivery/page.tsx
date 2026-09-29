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

type CheckoutDetails = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
};

type DeliveryMethod = {
  id: string;
  name: string;
  description: string;
  time: string;
  price: number;
};

const deliveryMethods: DeliveryMethod[] = [
  {
    id: "standard",
    name: "Standard",
    description: "Reliable everyday delivery.",
    time: "3–5 business days",
    price: 0,
  },
  {
    id: "express",
    name: "Express",
    description: "Get your NOVA products sooner.",
    time: "1–2 business days",
    price: 15,
  },
  {
    id: "priority",
    name: "Priority",
    description: "Our fastest available delivery.",
    time: "Next business day",
    price: 28,
  },
];

export default function NovaDeliveryPage() {
  const router = useRouter();

  const [cart, setCart] = useState<CartItem[]>([]);
  const [details, setDetails] =
    useState<CheckoutDetails | null>(null);

  const [selectedDelivery, setSelectedDelivery] =
    useState("standard");

  const [loaded, setLoaded] = useState(false);

  // Load cart, customer details and any previously selected
  // delivery method.
  useEffect(() => {
    try {
      const savedCart =
        window.localStorage.getItem("nova-cart");

      const savedDetails =
        window.localStorage.getItem(
          "nova-checkout-details"
        );

      const savedDelivery =
        window.localStorage.getItem(
          "nova-delivery-method"
        );

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      }

      if (savedDetails) {
        setDetails(JSON.parse(savedDetails));
      }

      if (savedDelivery) {
        const parsedDelivery =
          JSON.parse(savedDelivery);

        if (
          deliveryMethods.some(
            (method) =>
              method.id === parsedDelivery.id
          )
        ) {
          setSelectedDelivery(
            parsedDelivery.id
          );
        }
      }
    } catch (error) {
      console.error(
        "Unable to load delivery information:",
        error
      );
    } finally {
      setLoaded(true);
    }
  }, []);

  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  }, [cart]);

  const currentDelivery =
    deliveryMethods.find(
      (method) =>
        method.id === selectedDelivery
    ) || deliveryMethods[0];

  const total =
    subtotal + currentDelivery.price;

  const continueToPayment = () => {
    window.localStorage.setItem(
      "nova-delivery-method",
      JSON.stringify(currentDelivery)
    );

    router.push(
      "/demos/nova/checkout/payment"
    );
  };

  if (!loaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f3ef]">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-black/10 border-t-[#ff5c35]" />

          <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">
            Loading delivery
          </p>
        </div>
      </main>
    );
  }

  if (
    cart.length === 0 ||
    !details
  ) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f3ef] px-6">
        <div className="max-w-md text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-black/10 bg-white text-2xl">
            ◌
          </div>

          <h1 className="mt-7 text-4xl font-black tracking-[-0.05em]">
            Checkout information missing.
          </h1>

          <p className="mt-4 text-sm leading-7 text-black/45">
            Return to checkout and complete your
            contact and shipping information.
          </p>

          <button
            type="button"
            onClick={() =>
              router.push(
                "/demos/nova/checkout"
              )
            }
            className="mt-8 rounded-full bg-[#161616] px-7 py-4 text-xs font-bold text-white transition hover:bg-[#ff5c35]"
          >
            Return to checkout →
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f3ef] text-[#161616]">

      {/* HEADER */}
      <header className="border-b border-black/10">

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

            <span className="hidden h-2 w-2 rounded-full bg-[#159a67] sm:block" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/40">
              Secure demo checkout
            </span>
          </div>
        </div>
      </header>


      {/* PROGRESS */}
      <div className="border-b border-black/10 bg-white/30">

        <div className="mx-auto flex max-w-2xl items-center px-5 py-6 sm:px-8">

          {/* Completed */}
          <button
            type="button"
            onClick={() =>
              router.push(
                "/demos/nova/checkout"
              )
            }
            className="flex items-center gap-3"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#159a67] text-[10px] font-bold text-white">
              ✓
            </span>

            <span className="hidden text-[9px] font-bold uppercase tracking-[0.14em] text-black/40 sm:block">
              Details
            </span>
          </button>


          <div className="mx-4 h-px flex-1 bg-[#159a67]/40 sm:mx-7" />


          {/* Current */}
          <div className="flex items-center gap-3">

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#161616] text-[10px] font-bold text-white">
              02
            </span>

            <span className="hidden text-[9px] font-bold uppercase tracking-[0.14em] sm:block">
              Delivery
            </span>
          </div>


          <div className="mx-4 h-px flex-1 bg-black/15 sm:mx-7" />


          {/* Future */}
          <div className="flex items-center gap-3">

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/15 text-[10px] font-bold text-black/35">
              03
            </span>

            <span className="hidden text-[9px] font-bold uppercase tracking-[0.14em] text-black/30 sm:block">
              Payment
            </span>
          </div>
        </div>
      </div>


      {/* =====================================================
    CONTENT
    Mobile responsive delivery layout.
    ===================================================== */}
      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[1.15fr_0.85fr]">

        {/* =================================================
        LEFT — DELIVERY DETAILS
        ================================================= */}
        <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-2xl lg:mx-0">

            {/* Current checkout step. */}
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ff5c35]" />

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ff5c35]">
                Step 02 / 03
              </p>
            </div>

            {/* Page heading. */}
            <h1 className="mt-5 text-3xl font-black leading-[1.05] tracking-[-0.05em] min-[360px]:text-4xl sm:text-5xl">
              How should we

              <span className="block text-black/25">
                deliver it?
              </span>
            </h1>

            {/* Supporting text. */}
            <p className="mt-5 max-w-lg text-sm leading-7 text-black/45">
              Select a delivery option for your NOVA order.
            </p>

            {/* =================================================
                DELIVERY ADDRESS
                ================================================= */}
            <div className="mt-8 rounded-2xl border border-black/10 bg-white/50 p-5 sm:mt-10 sm:p-6">

              <div className="flex items-start justify-between gap-4 sm:gap-5">

                {/* Customer address. */}
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/35">
                    Delivering to
                  </p>

                  <p className="mt-3 break-words text-sm font-bold">
                    {details.firstName}{" "}
                    {details.lastName}
                  </p>

                  <p className="mt-2 break-words text-xs leading-6 text-black/45">
                    {details.address}
                    <br />

                    {details.city},{" "}
                    {details.postalCode}
                    <br />

                    {details.country}
                  </p>
                </div>

                {/* Edit checkout information. */}
                <button
                  type="button"
                  onClick={() =>
                    router.push(
                      "/demos/nova/checkout"
                    )
                  }
                  className="shrink-0 rounded-full px-2 py-1 text-[10px] font-bold text-[#ff5c35] transition hover:text-black"
                >
                  Edit
                </button>
              </div>
            </div>

            {/* =================================================
                DELIVERY METHODS
                ================================================= */}
            <div className="mt-8 sm:mt-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">
                Delivery method
              </p>

              <div className="mt-5 space-y-3">
                {deliveryMethods.map((method) => {
                  const selected =
                    selectedDelivery === method.id;

                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() =>
                        setSelectedDelivery(
                          method.id
                        )
                      }
                      className={`group flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-300 active:scale-[0.99] sm:items-center sm:gap-5 sm:p-5 ${selected
                        ? "border-[#161616] bg-white shadow-md"
                        : "border-black/10 bg-white/40 hover:border-black/25 hover:bg-white/70"
                        }`}
                    >
                      {/* Selection indicator. */}
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border sm:mt-0 ${selected
                          ? "border-[#ff5c35]"
                          : "border-black/20"
                          }`}
                      >
                        {selected && (
                          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5c35]" />
                        )}
                      </span>

                      {/* Delivery information. */}
                      <div className="min-w-0 flex-1">

                        <div className="flex items-start justify-between gap-3 sm:items-center sm:gap-4">

                          <p className="text-sm font-bold">
                            {method.name}
                          </p>

                          <p className="shrink-0 text-xs font-black sm:text-sm">
                            {method.price === 0
                              ? "FREE"
                              : `$${method.price}`}
                          </p>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-black/40">
                          {method.description}
                        </p>

                        <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.12em] text-black/30">
                          {method.time}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                NAVIGATION
                ================================================= */}
            <div className="mt-8 flex flex-col-reverse gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">

              {/* Back to customer details. */}
              <button
                type="button"
                onClick={() =>
                  router.push(
                    "/demos/nova/checkout"
                  )
                }
                className="w-full px-4 py-3 text-center text-xs font-semibold text-black/45 transition hover:text-black sm:w-auto"
              >
                ← Back to details
              </button>

              {/* Continue to payment. */}
              <button
                type="button"
                onClick={continueToPayment}
                className="group flex min-h-12 w-full items-center justify-between gap-6 rounded-xl bg-[#161616] px-5 py-3.5 text-xs font-bold text-white transition-all duration-300 active:scale-[0.98] sm:w-auto sm:px-6 sm:py-4 sm:hover:-translate-y-1 sm:hover:bg-[#ff5c35] sm:hover:shadow-lg"
              >
                Continue to payment

                <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* =================================================
        RIGHT — ORDER SUMMARY
        ================================================= */}
        <aside className="border-t border-black/10 bg-[#eae8e1] px-5 py-10 sm:px-8 sm:py-14 lg:min-h-[calc(100vh-89px)] lg:border-l lg:border-t-0 lg:px-12 lg:py-20">

          <div className="mx-auto max-w-lg">

            {/* Order heading. */}
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">
                Your order
              </p>

              <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-[9px] font-bold">
                {cartCount}{" "}
                {cartCount === 1
                  ? "item"
                  : "items"}
              </span>
            </div>

            {/* =================================================
                ORDER ITEMS
                ================================================= */}
            <div className="mt-7 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  {/* Product icon. */}
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white text-lg sm:h-16 sm:w-16 sm:text-xl">
                    {item.icon}

                    {/* Quantity. */}
                    <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#161616] px-1 text-[8px] font-bold text-white">
                      {item.quantity}
                    </span>
                  </div>

                  {/* Product information. */}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold">
                      {item.name}
                    </p>

                    <p className="mt-1 text-[10px] text-black/40">
                      {item.category}
                    </p>
                  </div>

                  {/* Product price. */}
                  <p className="shrink-0 text-xs font-bold sm:text-sm">
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
                TOTALS
                ================================================= */}
            <div className="mt-8 space-y-4 border-t border-black/10 pt-7 sm:mt-10">

              {/* Subtotal. */}
              <div className="flex justify-between gap-4 text-xs">
                <span className="text-black/45">
                  Subtotal
                </span>

                <span className="shrink-0 font-semibold">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              {/* Selected delivery cost. */}
              <div className="flex justify-between gap-4 text-xs">
                <span className="text-black/45">
                  {currentDelivery.name} delivery
                </span>

                <span className="shrink-0 font-semibold">
                  {currentDelivery.price === 0
                    ? "FREE"
                    : `$${currentDelivery.price.toFixed(
                      2
                    )}`}
                </span>
              </div>

              {/* Final total. */}
              <div className="flex items-end justify-between gap-4 border-t border-black/10 pt-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.14em] text-black/35">
                    Total
                  </p>

                  <p className="mt-1 text-[9px] text-black/30">
                    USD
                  </p>
                </div>

                <p className="shrink-0 text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                  ${total.toFixed(2)}
                </p>
              </div>
            </div>

            {/* =================================================
                SELECTED DELIVERY
                ================================================= */}
            <div className="mt-8 rounded-2xl bg-[#161616] p-4 text-white sm:p-5">

              <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/40">
                Selected delivery
              </p>

              <div className="mt-3 flex items-end justify-between gap-4">

                <div className="min-w-0">
                  <p className="text-sm font-bold">
                    {currentDelivery.name}
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-white/40">
                    {currentDelivery.time}
                  </p>
                </div>

                <span className="shrink-0 text-[#ff7654]">
                  ●
                </span>
              </div>
            </div>

            {/* Demo disclaimer. */}
            <p className="mt-8 text-[9px] leading-5 text-black/30">
              This is a fictional checkout experience.
              No real delivery or transaction will be
              created.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}