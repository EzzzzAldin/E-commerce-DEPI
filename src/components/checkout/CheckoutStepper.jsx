const checkoutSteps = [
  "CARD(3)",
  "CUSTOMER INFO",
  "SHIPPING & PAYMENT",
  "PRODUCT CONFIRMATION",
];

function CheckoutStepper({ steps = checkoutSteps, currentStep = 1 }) {
  // L4 => View
  return (
    <nav
      aria-label="Checkout steps"
      className="checkout-stepper border-b border-gray-300"
    >
      <ol className="flex h-10 flex-wrap items-center justify-center gap-16 text-sm">
        {steps.map((step, index) => (
          <li key={step}>
            <span
              className={
                index === currentStep
                  ? "font-bold text-gray-800"
                  : "text-gray-400"
              }
              aria-current={index === currentStep ? "step" : undefined}
            >
              {step}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default CheckoutStepper;
