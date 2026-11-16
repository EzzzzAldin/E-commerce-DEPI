import CheckoutStepper from "./CheckoutStepper";
import CustomerInfoForm from "./CustomerInfoForm";
import OrderSummary from "./OrderSummary";

function CheckoutView() {
  // L4 => View
  return (
    <section className="checkout-view max-w-page mx-auto px-4 py-10">
      <CheckoutStepper />

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <CustomerInfoForm />
        <OrderSummary />
      </div>
    </section>
  );
}

export default CheckoutView;
