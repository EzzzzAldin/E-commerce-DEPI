import { BagIcon } from "../ui/Icons";

function OrderSummary({
  price = 99.23,
  shipping = 0,
  tax = 0,
  total = 110.13,
}) {
  // L4 => View
  return (
    <div className="order-summary w-full rounded-lg bg-neutral-100 p-5 lg:w-77.25">
      <h2 className="text-lg font-bold text-gray-800">Order Summary</h2>

      <div className="mt-5 flex flex-col gap-3 text-sm text-gray-800">
        <div className="flex items-center justify-between">
          <span>Price</span>
          <span>${price}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Tax</span>
          <span>${tax}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Discount price</span>
          <span>$47.10</span>
        </div>
        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked className="size-4" />
          <span>Pack in a Gift Box</span>
          <span className="ml-auto">$10.90</span>
        </label>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-gray-300 pt-4 text-base font-bold text-gray-800">
        <span>Total Price</span>
        <span>${total}</span>
      </div>

      <button
        type="button"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-neutral-200 py-3 text-sm font-bold text-white"
      >
        <BagIcon className="size-5" />
        SHOP NOW
      </button>
    </div>
  );
}

export default OrderSummary;
