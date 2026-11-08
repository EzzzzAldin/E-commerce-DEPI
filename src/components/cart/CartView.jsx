import CartRow from "./CartRow";
import { BagIcon } from "../ui/Icons";

const defaultItems = [
  {
    id: 1,
    title: "2 Pieces Mango set- Regular fit",
    price: 25.99,
    qty: 1,
    color: "bg-amber-200",
  },
  {
    id: 2,
    title: "3 Pieces Zara set- Casual fit",
    price: 32.99,
    qty: 1,
    color: "bg-gray-900",
  },
  {
    id: 3,
    title: "Zara Cardigan-Regular fit",
    price: 40.25,
    qty: 1,
    color: "bg-blue-400",
  },
];

function CartView({ items = defaultItems, onIncrease }) {
  // L4 => View
  return (
    <section className="cart-view max-w-page mx-auto px-4 py-10">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-gray-800">Card</h1>
        <span className="text-sm text-gray-600">{items.length}</span>
      </div>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="cart-list flex flex-1 flex-col gap-8">
          {items.map((item) => (
            <CartRow
              key={item.id}
              title={item.title}
              price={item.price}
              qty={item.qty}
              color={item.color}
              onIncrease={() => onIncrease(item.id)}
            />
          ))}
        </div>

        <div className="cart-side flex w-full flex-col gap-6 lg:w-77.25">
          <div className="order-summary rounded-lg bg-neutral-100 p-5">
            <h2 className="text-lg font-bold text-gray-800">Order Summary</h2>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-800">
              <div className="flex items-center justify-between">
                <span>Price</span>
                <span>$99.23</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tax</span>
                <span>$0</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-800">Discount Price</p>
              <p className="mt-2 flex items-start gap-1.5 text-xs text-red-off">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 size-4 shrink-0"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v5" />
                  <path d="M12 16h.01" />
                </svg>
                You must log in to use the discount code
              </p>
            </div>

            <label className="mt-4 flex items-center justify-between gap-3 text-sm text-gray-800">
              <span className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="size-4" />
                Pack in a Gift Box
              </span>
              <span>$10.90</span>
            </label>

            <div className="mt-4 flex items-center justify-between border-t border-gray-300 pt-4 text-base font-bold text-gray-800">
              <span>Total Price</span>
              <span>$110.13</span>
            </div>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-gray-800 py-3 text-sm font-bold text-white"
            >
              <BagIcon className="size-5" />
              CHECKOUT
            </button>
          </div>

          <div className="coupon flex">
            <label htmlFor="coupon-code" className="sr-only">
              Coupon code
            </label>
            <input
              id="coupon-code"
              type="text"
              placeholder="Enter coupon code"
              className="min-w-0 flex-1 rounded-l-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400"
            />
            <button
              type="button"
              className="rounded-r-md bg-gray-800 px-5 py-3 text-sm font-bold text-white"
            >
              Login and Apply code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartView;
