import CheckoutStepper from "./CheckoutStepper";
import YouMightAlsoLike from "../product/YouMightAlsoLike";
import bag from "../../assets/photo bag.png";

const shoppingItems = [
  { id: 1, name: "2 Pieces Mango set- Regular fit", price: "$25.99", colorClass: "bg-red-off" },
  { id: 2, name: "3 Pieces Mango set- Casual fit", price: "$32.99", colorClass: "bg-blue-400" },
  { id: 3, name: "Zara Cardigan-Regular fit", price: "$40.25", colorClass: "bg-emerald-600" },
];

const customerDetails = [
  ["Name", "Saina Ghasemi"],
  ["Country", "Australia"],
  ["Address", "10 Beach Street, 2281"],
  ["City", "Melbourne"],
  ["Phone", "(02) 5551 5678"],
];

function ProductConfirmation() {
  // L4 => View
  return (
    <main className="max-w-page mx-auto flex flex-col gap-8 px-4 py-8">
      <div className="overflow-hidden">
        <CheckoutStepper currentStep={3} />
      </div>

      <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <h1 className="text-2xl font-bold text-gray-800">Confirmation</h1>
          <div className="flex flex-col gap-5 bg-neutral-100 p-4 sm:p-6">
            <h2 className="text-sm text-gray-600">Shopping items</h2>
            <div className="flex flex-col divide-y divide-gray-300">
              {shoppingItems.map((item) => (
              <article key={item.id} className="grid grid-cols-1 items-center gap-3 border-b border-gray-300 py-4 sm:grid-cols-4">
                  <div className="flex items-center gap-3 sm:col-span-2">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded bg-white">
                      <img src={bag} alt="Temporary product image placeholder" className="size-full object-contain" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-bold text-gray-800">{item.name}</h3>
                      <p className="flex items-center gap-2 text-sm text-gray-600">
                        Color:
                        <span className={`size-3 rounded-full ${item.colorClass}`} />
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 sm:flex-col sm:items-end">
                    <span>{item.price}</span>
                    <span>x1</span>
                  </div>
                  <p className="text-right text-sm text-gray-600">{item.price}</p>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-300 py-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-sm text-gray-600">Payment method</h2>
                <p className="font-bold text-gray-800">Paypal</p>
              </div>
              <span className="font-bold text-blue-600">PayPal</span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-300 py-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-sm text-gray-600">Shipping company</h2>
                <p className="font-bold text-gray-800">RaceCouriers</p>
              </div>
              <span className="font-bold text-red-off">RACE COURIERS</span>
            </div>

            <dl className="flex flex-col gap-3 border-t border-gray-300 py-4">
              {customerDetails.map(([label, value]) => (
                <div key={label} className="flex flex-wrap justify-between gap-2 text-sm">
                  <dt className="text-gray-600">{label}</dt>
                  <dd className="text-gray-800">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <aside aria-labelledby="order-summary-heading" className="flex flex-col gap-4 rounded bg-neutral-200 p-5">
          <h2 id="order-summary-heading" className="font-bold text-gray-800">Order Summary</h2>
          <dl className="flex flex-col gap-3 text-sm">
            {[
              ["Price", "$99.23"],
              ["Shipping", "$0"],
              ["Tax", "$0"],
              ["Discount price", "$47.10"],
              ["Pack in a Gift Box", "$10.90"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-3 text-gray-600">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex justify-between border-t border-gray-300 pt-3 font-bold text-gray-800">
            <span>Total Price</span>
            <span>$110.13</span>
          </div>
          <button type="button" className="rounded-md bg-slate-500 px-4 py-3 text-sm font-bold text-white">
            SHOP NOW
          </button>
        </aside>
      </section>

      <YouMightAlsoLike />
    </main>
  );
}

export default ProductConfirmation;
