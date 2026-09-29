"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
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

export default function NovaCheckoutPage() {
  const router = useRouter();

  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Load the same cart created on the NOVA store page.
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
      console.error("Unable to load checkout cart:", error);
    } finally {
      setLoaded(true);
    }
  }, []);

  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cart]);

  const shipping = subtotal >= 150 ? 0 : 12;

  const total = subtotal + shipping;

  const updateField = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    // Remove the error as the user corrects the field.
    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Record<string, string> = {};

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!form.email.includes("@")) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = "Last name is required.";
    }

    if (!form.address.trim()) {
      nextErrors.address = "Address is required.";
    }

    if (!form.city.trim()) {
      nextErrors.city = "City is required.";
    }

    if (!form.country.trim()) {
      nextErrors.country = "Country is required.";
    }

    if (!form.postalCode.trim()) {
      nextErrors.postalCode = "Postal code is required.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // Save checkout information for the next checkout stage.
    window.localStorage.setItem(
      "nova-checkout-details",
      JSON.stringify(form)
    );

    router.push("/demos/nova/checkout/delivery");
  };

  if (!loaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f3ef]">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-black/10 border-t-[#ff5c35]" />

          <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">
            Loading checkout
          </p>
        </div>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f3ef] px-6">

        <div className="max-w-md text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-black/10 bg-white text-2xl">
            ◌
          </div>

          <h1 className="mt-7 text-4xl font-black tracking-[-0.05em]">
            Your bag is empty.
          </h1>

          <p className="mt-4 text-sm leading-7 text-black/45">
            Add something from the NOVA collection before
            continuing to checkout.
          </p>

          <button
            type="button"
            onClick={() => router.push("/demos/nova")}
            className="mt-8 rounded-full bg-[#161616] px-7 py-4 text-xs font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#ff5c35]"
          >
            Return to shop →
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f3ef] text-[#161616]">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="border-b border-black/10">

        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">

          <button
            type="button"
            onClick={() => router.push("/demos/nova")}
            className="text-2xl font-black tracking-[-0.06em]"
          >
            NOVA
            <span className="text-[#ff5c35]">.</span>
          </button>

          <div className="flex items-center gap-3">

            <span className="hidden h-2 w-2 rounded-full bg-[#159a67] sm:block" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/40">
              Secure demo checkout
            </span>
          </div>
        </div>
      </header>


      {/* =====================================================
          CHECKOUT PROGRESS
          ===================================================== */}

      <div className="border-b border-black/10 bg-white/30">

        <div className="mx-auto flex max-w-2xl items-center px-5 py-6 sm:px-8">

          {/* Step 1 */}
          <div className="flex items-center gap-3">

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#161616] text-[10px] font-bold text-white">
              01
            </span>

            <span className="hidden text-[9px] font-bold uppercase tracking-[0.14em] sm:block">
              Details
            </span>
          </div>


          <div className="mx-4 h-px flex-1 bg-black/15 sm:mx-7" />


          {/* Step 2 */}
          <div className="flex items-center gap-3">

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/15 text-[10px] font-bold text-black/35">
              02
            </span>

            <span className="hidden text-[9px] font-bold uppercase tracking-[0.14em] text-black/30 sm:block">
              Delivery
            </span>
          </div>


          <div className="mx-4 h-px flex-1 bg-black/15 sm:mx-7" />


          {/* Step 3 */}
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
    CHECKOUT CONTENT
    ===================================================== */}
      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[1.15fr_0.85fr]">

        {/* =================================================
        LEFT — FORM
        ================================================= */}
        <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-2xl lg:mx-0">

            {/* Step indicator. */}
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ff5c35]" />

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ff5c35]">
                Step 01 / 03
              </p>
            </div>

            {/* Checkout heading. */}
            <h1 className="mt-5 text-3xl font-black leading-[1.05] tracking-[-0.05em] min-[360px]:text-4xl sm:text-5xl">
              Where should we
              <span className="block text-black/25">
                send your order?
              </span>
            </h1>

            {/* Supporting description. */}
            <p className="mt-5 max-w-lg text-sm leading-7 text-black/45">
              Enter your contact and delivery information.
              This is a portfolio demo and no real order will
              be placed.
            </p>

            {/* =================================================
                CHECKOUT FORM
                ================================================= */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 sm:mt-12"
            >
              {/* =================================================
                    CONTACT
                    ================================================= */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">
                  Contact
                </p>

                {/* Email. */}
                <div className="mt-5">
                  <label className="text-xs font-semibold">
                    Email address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    placeholder="you@example.com"
                    className={`mt-2 w-full rounded-xl border bg-white/60 px-4 py-3.5 text-sm outline-none transition focus:bg-white sm:px-5 sm:py-4 ${errors.email
                      ? "border-red-400"
                      : "border-black/10 focus:border-[#ff5c35]"
                      }`}
                  />

                  {errors.email && (
                    <p className="mt-2 text-[10px] text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* =================================================
                    SHIPPING INFORMATION
                    ================================================= */}
              <div className="mt-8 border-t border-black/10 pt-8 sm:mt-10 sm:pt-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">
                  Shipping information
                </p>

                {/* First and last name. */}
                <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-5">

                  {/* First name. */}
                  <div>
                    <label className="text-xs font-semibold">
                      First name
                    </label>

                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={updateField}
                      placeholder="First name"
                      className={`mt-2 w-full rounded-xl border bg-white/60 px-4 py-3.5 text-sm outline-none transition focus:bg-white sm:px-5 sm:py-4 ${errors.firstName
                        ? "border-red-400"
                        : "border-black/10 focus:border-[#ff5c35]"
                        }`}
                    />

                    {errors.firstName && (
                      <p className="mt-2 text-[10px] text-red-500">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  {/* Last name. */}
                  <div>
                    <label className="text-xs font-semibold">
                      Last name
                    </label>

                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={updateField}
                      placeholder="Last name"
                      className={`mt-2 w-full rounded-xl border bg-white/60 px-4 py-3.5 text-sm outline-none transition focus:bg-white sm:px-5 sm:py-4 ${errors.lastName
                        ? "border-red-400"
                        : "border-black/10 focus:border-[#ff5c35]"
                        }`}
                    />

                    {errors.lastName && (
                      <p className="mt-2 text-[10px] text-red-500">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Address. */}
                <div className="mt-5">
                  <label className="text-xs font-semibold">
                    Address
                  </label>

                  <input
                    name="address"
                    value={form.address}
                    onChange={updateField}
                    placeholder="Street address"
                    className={`mt-2 w-full rounded-xl border bg-white/60 px-4 py-3.5 text-sm outline-none transition focus:bg-white sm:px-5 sm:py-4 ${errors.address
                      ? "border-red-400"
                      : "border-black/10 focus:border-[#ff5c35]"
                      }`}
                  />

                  {errors.address && (
                    <p className="mt-2 text-[10px] text-red-500">
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* City, country and postal code. */}
                <div className="mt-5 grid gap-4 sm:grid-cols-3 sm:gap-5">

                  {/* City. */}
                  <div>
                    <label className="text-xs font-semibold">
                      City
                    </label>

                    <input
                      name="city"
                      value={form.city}
                      onChange={updateField}
                      placeholder="City"
                      className={`mt-2 w-full rounded-xl border bg-white/60 px-4 py-3.5 text-sm outline-none transition focus:bg-white sm:px-5 sm:py-4 ${errors.city
                        ? "border-red-400"
                        : "border-black/10 focus:border-[#ff5c35]"
                        }`}
                    />

                    {errors.city && (
                      <p className="mt-2 text-[10px] text-red-500">
                        {errors.city}
                      </p>
                    )}
                  </div>

                  {/* Country. */}
                  <div>
                    <label className="text-xs font-semibold">
                      Country
                    </label>

                    <select
                      name="country"
                      value={form.country}
                      onChange={updateField}
                      className={`mt-2 w-full rounded-xl border bg-white/60 px-4 py-3.5 text-sm outline-none transition focus:bg-white sm:py-4 ${errors.country
                        ? "border-red-400"
                        : "border-black/10 focus:border-[#ff5c35]"
                        }`}
                    >
                      <option value="">
                        Select
                      </option>

                      <option value="Nigeria">
                        Nigeria
                      </option>

                      <option value="United States">
                        United States
                      </option>

                      <option value="United Kingdom">
                        United Kingdom
                      </option>

                      <option value="Canada">
                        Canada
                      </option>

                      <option value="Germany">
                        Germany
                      </option>
                    </select>

                    {errors.country && (
                      <p className="mt-2 text-[10px] text-red-500">
                        {errors.country}
                      </p>
                    )}
                  </div>

                  {/* Postal code. */}
                  <div>
                    <label className="text-xs font-semibold">
                      Postal code
                    </label>

                    <input
                      name="postalCode"
                      value={form.postalCode}
                      onChange={updateField}
                      placeholder="Postal code"
                      className={`mt-2 w-full rounded-xl border bg-white/60 px-4 py-3.5 text-sm outline-none transition focus:bg-white sm:px-5 sm:py-4 ${errors.postalCode
                        ? "border-red-400"
                        : "border-black/10 focus:border-[#ff5c35]"
                        }`}
                    />

                    {errors.postalCode && (
                      <p className="mt-2 text-[10px] text-red-500">
                        {errors.postalCode}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* =================================================
                    FORM ACTIONS
                    ================================================= */}
              <div className="mt-8 flex flex-col-reverse gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">

                {/* Return to shop. */}
                <button
                  type="button"
                  onClick={() =>
                    router.push("/demos/nova")
                  }
                  className="w-full px-4 py-3 text-center text-xs font-semibold text-black/45 transition hover:text-black sm:w-auto"
                >
                  ← Return to shop
                </button>

                {/* Continue to delivery. */}
                <button
                  type="submit"
                  className="group flex min-h-12 w-full items-center justify-between gap-6 rounded-xl bg-[#161616] px-5 py-3.5 text-xs font-bold text-white transition-all duration-300 active:scale-[0.98] sm:w-auto sm:px-6 sm:py-4 sm:hover:-translate-y-1 sm:hover:bg-[#ff5c35] sm:hover:shadow-lg"
                >
                  Continue to delivery

                  <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* =================================================
        RIGHT — ORDER SUMMARY
        ================================================= */}
        <aside className="border-t border-black/10 bg-[#eae8e1] px-5 py-10 sm:px-8 sm:py-14 lg:min-h-[calc(100vh-89px)] lg:border-l lg:border-t-0 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-lg">

            {/* Order summary heading. */}
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">
                Your order
              </p>

              <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-[9px] font-bold">
                {cartCount}{" "}
                {cartCount === 1 ? "item" : "items"}
              </span>
            </div>

            {/* =================================================
                PRODUCTS
                ================================================= */}
            <div className="mt-7 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  {/* Product visual. */}
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white text-lg sm:h-16 sm:w-16 sm:text-xl">
                    {item.icon}

                    {/* Quantity badge. */}
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

                  {/* Product total. */}
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
              <div className="flex justify-between text-xs">
                <span className="text-black/45">
                  Subtotal
                </span>

                <span className="font-semibold">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              {/* Shipping. */}
              <div className="flex justify-between text-xs">
                <span className="text-black/45">
                  Shipping
                </span>

                <span className="font-semibold">
                  {shipping === 0
                    ? "FREE"
                    : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              {/* Free shipping notification. */}
              {shipping === 0 && (
                <div className="rounded-xl border border-[#159a67]/20 bg-[#159a67]/10 px-4 py-3">
                  <p className="text-[10px] font-semibold text-[#11754f]">
                    ✓ Free shipping unlocked
                  </p>
                </div>
              )}

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
                TRUST INFORMATION
                ================================================= */}
            <div className="mt-8 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:mt-10">

              {/* Returns. */}
              <div className="rounded-xl border border-black/10 bg-white/40 p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-black/35">
                  Returns
                </p>

                <p className="mt-2 text-xs font-semibold">
                  30 days
                </p>
              </div>

              {/* Warranty. */}
              <div className="rounded-xl border border-black/10 bg-white/40 p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-black/35">
                  Warranty
                </p>

                <p className="mt-2 text-xs font-semibold">
                  2 years
                </p>
              </div>
            </div>

            {/* Demo disclaimer. */}
            <p className="mt-8 text-[9px] leading-5 text-black/30">
              NOVA is a fictional e-commerce experience created
              by Lightizer Technologies as a web-development
              demonstration. No real purchase will be processed.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}