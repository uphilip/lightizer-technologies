"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";

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

type PaymentForm = {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};

export default function NovaPaymentPage() {
  const router = useRouter();

  const [cart, setCart] = useState<CartItem[]>([]);
  const [details, setDetails] =
    useState<CheckoutDetails | null>(null);

  const [delivery, setDelivery] =
    useState<DeliveryMethod | null>(null);

  const [loaded, setLoaded] = useState(false);
  const [processing, setProcessing] = useState(false);

  const [sameBillingAddress, setSameBillingAddress] =
    useState(true);

  const [form, setForm] = useState<PaymentForm>({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] =
    useState<Record<string, string>>({});

  // =====================================================
  // LOAD CHECKOUT INFORMATION
  // =====================================================

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
        setDelivery(JSON.parse(savedDelivery));
      }
    } catch (error) {
      console.error(
        "Unable to load payment information:",
        error
      );
    } finally {
      setLoaded(true);
    }
  }, []);

  // =====================================================
  // TOTALS
  // =====================================================

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

  const deliveryPrice = delivery?.price ?? 0;

  const total = subtotal + deliveryPrice;

  // =====================================================
  // CARD FORMATTING
  // =====================================================

  const formatCardNumber = (value: string) => {
    const numbersOnly = value
      .replace(/\D/g, "")
      .slice(0, 16);

    return numbersOnly
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const formatExpiry = (value: string) => {
    const numbersOnly = value
      .replace(/\D/g, "")
      .slice(0, 4);

    if (numbersOnly.length <= 2) {
      return numbersOnly;
    }

    return `${numbersOnly.slice(
      0,
      2
    )}/${numbersOnly.slice(2)}`;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    let nextValue = value;

    if (name === "cardNumber") {
      nextValue = formatCardNumber(value);
    }

    if (name === "expiry") {
      nextValue = formatExpiry(value);
    }

    if (name === "cvv") {
      nextValue = value
        .replace(/\D/g, "")
        .slice(0, 4);
    }

    setForm((current) => ({
      ...current,
      [name]: nextValue,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  // =====================================================
  // VALIDATION
  // =====================================================

  const validatePayment = () => {
    const nextErrors: Record<string, string> = {};

    const cardDigits =
      form.cardNumber.replace(/\s/g, "");

    if (!form.cardName.trim()) {
      nextErrors.cardName =
        "Cardholder name is required.";
    }

    if (!cardDigits) {
      nextErrors.cardNumber =
        "Card number is required.";
    } else if (cardDigits.length !== 16) {
      nextErrors.cardNumber =
        "Enter a 16-digit demo card number.";
    }

    if (!form.expiry) {
      nextErrors.expiry =
        "Expiry date is required.";
    } else if (
      !/^(0[1-9]|1[0-2])\/\d{2}$/.test(
        form.expiry
      )
    ) {
      nextErrors.expiry =
        "Use MM/YY format.";
    }

    if (!form.cvv) {
      nextErrors.cvv = "CVV is required.";
    } else if (
      form.cvv.length < 3
    ) {
      nextErrors.cvv =
        "Enter at least 3 digits.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  // =====================================================
  // PLACE DEMO ORDER
  // =====================================================

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!validatePayment()) {
      return;
    }

    if (!details || !delivery) {
      return;
    }

    setProcessing(true);

    // Generate a fictional order reference.
    const orderNumber = `NV-${Date.now()
      .toString()
      .slice(-8)}`;

    // IMPORTANT:
    // We intentionally do NOT save the card number or CVV.
    // Only non-sensitive demo order information is stored.

    const demoOrder = {
      orderNumber,
      customer: {
        firstName: details.firstName,
        lastName: details.lastName,
        email: details.email,
      },
      shippingAddress: {
        address: details.address,
        city: details.city,
        country: details.country,
        postalCode: details.postalCode,
      },
      delivery,
      items: cart,
      subtotal,
      total,
      createdAt: new Date().toISOString(),
    };

    window.localStorage.setItem(
      "nova-last-order",
      JSON.stringify(demoOrder)
    );

    // Small simulated processing delay.
    window.setTimeout(() => {
      router.push(
        "/demos/nova/checkout/success"
      );
    }, 1200);
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (!loaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f3ef]">

        <div className="text-center">

          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-black/10 border-t-[#ff5c35]" />

          <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">
            Loading payment
          </p>
        </div>
      </main>
    );
  }

  // =====================================================
  // MISSING CHECKOUT INFORMATION
  // =====================================================

  if (
    cart.length === 0 ||
    !details ||
    !delivery
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
            Complete the previous checkout steps
            before continuing to payment.
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

      {/* =================================================
          HEADER
          ================================================= */}

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


      {/* =================================================
          PROGRESS
          ================================================= */}

      <div className="border-b border-black/10 bg-white/30">

        <div className="mx-auto flex max-w-2xl items-center px-5 py-6 sm:px-8">

          {/* DETAILS COMPLETE */}
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


          {/* DELIVERY COMPLETE */}
          <button
            type="button"
            onClick={() =>
              router.push(
                "/demos/nova/checkout/delivery"
              )
            }
            className="flex items-center gap-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#159a67] text-[10px] font-bold text-white">
              ✓
            </span>

            <span className="hidden text-[9px] font-bold uppercase tracking-[0.14em] text-black/40 sm:block">
              Delivery
            </span>
          </button>


          <div className="mx-4 h-px flex-1 bg-[#159a67]/40 sm:mx-7" />


          {/* PAYMENT CURRENT */}
          <div className="flex items-center gap-3">

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#161616] text-[10px] font-bold text-white">
              03
            </span>

            <span className="hidden text-[9px] font-bold uppercase tracking-[0.14em] sm:block">
              Payment
            </span>
          </div>
        </div>
      </div>



      {/* =================================================
    CONTENT
    Responsive payment experience.
    ================================================= */}
      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[1.15fr_0.85fr]">

          {/* =================================================
              LEFT — PAYMENT
              ================================================= */}
          <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
              <div className="mx-auto max-w-2xl lg:mx-0">

                  {/* Current checkout step. */}
                  <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#ff5c35]" />

                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ff5c35]">
                          Step 03 / 03
                      </p>
                  </div>

                  {/* Page heading. */}
                  <h1 className="mt-5 text-3xl font-black leading-[1.05] tracking-[-0.05em] min-[360px]:text-4xl sm:text-5xl">
                      Complete your

                      <span className="block text-black/25">
                          demo order.
                      </span>
                  </h1>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-black/45">
                      This payment form is for demonstration
                      purposes only. Do not enter real payment
                      information.
                  </p>

                  {/* =================================================
                      DEMO WARNING
                      ================================================= */}
                  <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#ff5c35]/20 bg-[#ff5c35]/[0.07] p-4 sm:mt-8 sm:gap-4 sm:p-5">

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ff5c35] text-xs font-bold text-white sm:h-9 sm:w-9 sm:text-sm">
                          !
                      </div>

                      <div className="min-w-0">
                          <p className="text-xs font-bold">
                              Demo payment
                          </p>

                          <p className="mt-1 text-[11px] leading-5 text-black/45">
                              Use fictional numbers only. No payment
                              information is transmitted or stored.
                          </p>
                      </div>
                  </div>

                  {/* =================================================
                      PAYMENT FORM
                      ================================================= */}
                  <form
                      onSubmit={handleSubmit}
                      className="mt-8 sm:mt-10"
                  >
                      {/* Payment card container. */}
                      <div className="rounded-[20px] border border-black/10 bg-white/55 p-4 sm:rounded-[24px] sm:p-7">

                          {/* Payment method heading. */}
                          <div className="flex items-center justify-between gap-4">

                              <div>
                                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/40 sm:text-[10px]">
                                      Payment method
                                  </p>

                                  <p className="mt-2 text-sm font-bold">
                                      Demo card
                                  </p>
                              </div>

                              {/* Demo card brands. */}
                              <div className="flex shrink-0 gap-2">

                                  <span className="rounded-md bg-[#161616] px-2 py-1.5 text-[7px] font-black text-white sm:px-2.5 sm:text-[8px]">
                                      VISA
                                  </span>

                                  <span className="flex h-6 w-9 items-center justify-center rounded-md border border-black/10 bg-white">
                                      <span className="h-3 w-3 rounded-full bg-[#ff5c35]" />
                                      <span className="-ml-1 h-3 w-3 rounded-full bg-[#f0b33a]/80" />
                                  </span>
                              </div>
                          </div>

                          {/* =================================================
                              CARDHOLDER
                              ================================================= */}
                          <div className="mt-6 sm:mt-7">
                              <label className="text-xs font-semibold">
                                  Name on card
                              </label>

                              <input
                                  type="text"
                                  name="cardName"
                                  value={form.cardName}
                                  onChange={handleChange}
                                  autoComplete="off"
                                  placeholder="Demo User"
                                  className={`mt-2 w-full rounded-xl border bg-white px-4 py-3.5 text-sm outline-none transition sm:px-5 sm:py-4 ${
                                      errors.cardName
                                          ? "border-red-400"
                                          : "border-black/10 focus:border-[#ff5c35]"
                                  }`}
                              />

                              {errors.cardName && (
                                  <p className="mt-2 text-[10px] text-red-500">
                                      {errors.cardName}
                                  </p>
                              )}
                          </div>

                          {/* =================================================
                              CARD NUMBER
                              ================================================= */}
                          <div className="mt-5">
                              <label className="text-xs font-semibold">
                                  Card number
                              </label>

                              <div className="relative">
                                  <input
                                      type="text"
                                      inputMode="numeric"
                                      name="cardNumber"
                                      value={form.cardNumber}
                                      onChange={handleChange}
                                      autoComplete="off"
                                      placeholder="4242 4242 4242 4242"
                                      className={`mt-2 w-full rounded-xl border bg-white px-4 py-3.5 pr-14 text-sm tracking-[0.04em] outline-none transition min-[360px]:tracking-[0.08em] sm:px-5 sm:py-4 sm:pr-16 ${
                                          errors.cardNumber
                                              ? "border-red-400"
                                              : "border-black/10 focus:border-[#ff5c35]"
                                      }`}
                                  />

                                  <span className="absolute right-3 top-1/2 mt-1 -translate-y-1/2 text-[8px] font-black text-black/25 sm:right-4 sm:text-[9px]">
                                      CARD
                                  </span>
                              </div>

                              {errors.cardNumber && (
                                  <p className="mt-2 text-[10px] text-red-500">
                                      {errors.cardNumber}
                                  </p>
                              )}
                          </div>

                          {/* =================================================
                              EXPIRY + CVV
                              ================================================= */}
                          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">

                              {/* Expiry. */}
                              <div className="min-w-0">
                                  <label className="text-xs font-semibold">
                                      Expiry
                                  </label>

                                  <input
                                      type="text"
                                      inputMode="numeric"
                                      name="expiry"
                                      value={form.expiry}
                                      onChange={handleChange}
                                      autoComplete="off"
                                      placeholder="MM/YY"
                                      className={`mt-2 w-full min-w-0 rounded-xl border bg-white px-3 py-3.5 text-sm outline-none transition sm:px-5 sm:py-4 ${
                                          errors.expiry
                                              ? "border-red-400"
                                              : "border-black/10 focus:border-[#ff5c35]"
                                      }`}
                                  />

                                  {errors.expiry && (
                                      <p className="mt-2 text-[10px] leading-4 text-red-500">
                                          {errors.expiry}
                                      </p>
                                  )}
                              </div>

                              {/* CVV. */}
                              <div className="min-w-0">
                                  <label className="text-xs font-semibold">
                                      CVV
                                  </label>

                                  <input
                                      type="text"
                                      inputMode="numeric"
                                      name="cvv"
                                      value={form.cvv}
                                      onChange={handleChange}
                                      autoComplete="off"
                                      placeholder="123"
                                      className={`mt-2 w-full min-w-0 rounded-xl border bg-white px-3 py-3.5 text-sm outline-none transition sm:px-5 sm:py-4 ${
                                          errors.cvv
                                              ? "border-red-400"
                                              : "border-black/10 focus:border-[#ff5c35]"
                                      }`}
                                  />

                                  {errors.cvv && (
                                      <p className="mt-2 text-[10px] leading-4 text-red-500">
                                          {errors.cvv}
                                      </p>
                                  )}
                              </div>
                          </div>
                      </div>

                      {/* =================================================
                          BILLING ADDRESS
                          ================================================= */}
                      <button
                          type="button"
                          onClick={() =>
                              setSameBillingAddress(
                                  (current) => !current
                              )
                          }
                          className="mt-4 flex w-full items-start gap-3 rounded-xl border border-black/10 bg-white/40 p-4 text-left transition hover:bg-white/60 sm:mt-5 sm:items-center sm:gap-4 sm:p-5"
                      >
                          {/* Checkbox. */}
                          <span
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition sm:mt-0 ${
                                  sameBillingAddress
                                      ? "border-[#161616] bg-[#161616] text-white"
                                      : "border-black/20"
                              }`}
                          >
                              {sameBillingAddress && (
                                  <span className="text-[10px]">
                                      ✓
                                  </span>
                              )}
                          </span>

                          <div className="min-w-0">
                              <p className="text-xs font-bold">
                                  Billing address same as shipping
                              </p>

                              <p className="mt-1 break-words text-[10px] leading-5 text-black/35">
                                  {details.address},{" "}
                                  {details.city}
                              </p>
                          </div>
                      </button>

                      {/* Alternate billing notice. */}
                      {!sameBillingAddress && (
                          <div className="mt-3 rounded-xl border border-dashed border-black/15 p-4 sm:p-5">
                              <p className="text-xs font-bold">
                                  Alternate billing address
                              </p>

                              <p className="mt-2 text-[11px] leading-5 text-black/40">
                                  For this portfolio demo, alternate
                                  billing-address entry is not required.
                                  Select the option above to continue.
                              </p>
                          </div>
                      )}

                      {/* =================================================
                          NAVIGATION
                          ================================================= */}
                      <div className="mt-8 flex flex-col-reverse gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">

                          {/* Back to delivery. */}
                          <button
                              type="button"
                              onClick={() =>
                                  router.push(
                                      "/demos/nova/checkout/delivery"
                                  )
                              }
                              disabled={processing}
                              className="w-full px-4 py-3 text-center text-xs font-semibold text-black/45 transition hover:text-black disabled:opacity-40 sm:w-auto"
                          >
                              ← Back to delivery
                          </button>

                          {/* Place demo order. */}
                          <button
                              type="submit"
                              disabled={
                                  processing ||
                                  !sameBillingAddress
                              }
                              className="group flex min-h-12 w-full items-center justify-between gap-6 rounded-xl bg-[#161616] px-5 py-3.5 text-xs font-bold text-white transition-all duration-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100 sm:min-w-[220px] sm:w-auto sm:px-6 sm:py-4 sm:hover:-translate-y-1 sm:hover:bg-[#ff5c35] sm:hover:shadow-lg sm:disabled:hover:translate-y-0 sm:disabled:hover:bg-[#161616]"
                          >
                              <span>
                                  {processing
                                      ? "Processing demo..."
                                      : "Place demo order"}
                              </span>

                              {processing ? (
                                  <span className="h-4 w-4 shrink-0 animate-spin rounded-full border border-white/30 border-t-white" />
                              ) : (
                                  <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                                      →
                                  </span>
                              )}
                          </button>
                      </div>
                  </form>

                  {/* Payment safety message. */}
                  <div className="mt-7 flex items-center gap-3 text-[8px] uppercase tracking-[0.1em] text-black/30 sm:mt-8 sm:text-[9px] sm:tracking-[0.12em]">
                      <span className="shrink-0">
                          ◇
                      </span>

                      <span>
                          No real payment is processed
                      </span>
                  </div>
              </div>
          </section>

          {/* =================================================
              RIGHT — ORDER SUMMARY
              ================================================= */}
          <aside className="border-t border-black/10 bg-[#eae8e1] px-5 py-10 sm:px-8 sm:py-14 lg:min-h-[calc(100vh-89px)] lg:border-l lg:border-t-0 lg:px-12 lg:py-20">

              <div className="mx-auto max-w-lg">

                  {/* Summary heading. */}
                  <div className="flex items-center justify-between gap-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">
                          Final order
                      </p>

                      <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-[9px] font-bold">
                          {cartCount}{" "}
                          {cartCount === 1
                              ? "item"
                              : "items"}
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
                              {/* Product icon. */}
                              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white text-lg sm:h-16 sm:w-16 sm:text-xl">
                                  {item.icon}

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
                      <div className="flex justify-between gap-4 text-xs">
                          <span className="text-black/45">
                              Subtotal
                          </span>

                          <span className="shrink-0 font-semibold">
                              ${subtotal.toFixed(2)}
                          </span>
                      </div>

                      {/* Delivery. */}
                      <div className="flex justify-between gap-4 text-xs">
                          <span className="text-black/45">
                              {delivery.name} delivery
                          </span>

                          <span className="shrink-0 font-semibold">
                              {deliveryPrice === 0
                                  ? "FREE"
                                  : `$${deliveryPrice.toFixed(
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
                      SHIPPING SUMMARY
                      ================================================= */}
                  <div className="mt-8 rounded-2xl border border-black/10 bg-white/45 p-4 sm:p-5">

                      <div className="flex items-start justify-between gap-4 sm:gap-5">

                          <div className="min-w-0">
                              <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-black/35">
                                  Shipping to
                              </p>

                              <p className="mt-3 break-words text-xs font-bold">
                                  {details.firstName}{" "}
                                  {details.lastName}
                              </p>

                              <p className="mt-1 break-words text-[10px] leading-5 text-black/40">
                                  {details.address}
                                  <br />

                                  {details.city},{" "}
                                  {details.postalCode}
                                  <br />

                                  {details.country}
                              </p>
                          </div>

                          {/* Edit shipping information. */}
                          <button
                              type="button"
                              onClick={() =>
                                  router.push(
                                      "/demos/nova/checkout"
                                  )
                              }
                              className="shrink-0 rounded-full px-2 py-1 text-[9px] font-bold text-[#ff5c35] transition hover:text-black"
                          >
                              Edit
                          </button>
                      </div>
                  </div>

                  {/* =================================================
                      DELIVERY SUMMARY
                      ================================================= */}
                  <div className="mt-3 rounded-2xl bg-[#161616] p-4 text-white sm:p-5">

                      <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/40">
                          Delivery
                      </p>

                      <div className="mt-3 flex items-end justify-between gap-4">

                          <div className="min-w-0">
                              <p className="text-sm font-bold">
                                  {delivery.name}
                              </p>

                              <p className="mt-1 text-[10px] leading-5 text-white/40">
                                  {delivery.time}
                              </p>
                          </div>

                          <span className="shrink-0 text-[#ff7654]">
                              ●
                          </span>
                      </div>
                  </div>

                  {/* Demo disclaimer. */}
                  <p className="mt-8 text-[9px] leading-5 text-black/30">
                      NOVA is a fictional e-commerce experience
                      created as a web-development demonstration.
                      No card is charged and no real order is
                      created.
                  </p>
              </div>
          </aside>
      </div>
    </main>
  );
}