import bag from "../../assets/photo bag.png";

const recommendedProducts = [
  { id: 1, price: 39 },
  { id: 2, price: 65 },
  { id: 3, price: 42 },
  { id: 4, price: 28 },
];

function YouMightAlsoLike() {
  // L4 => View
  return (
    <section aria-labelledby="recommended-products-heading" className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <h2 id="recommended-products-heading" className="font-bold text-gray-800">
          YOU MIGHT ALSO LIKE
        </h2>
        <div className="flex gap-1" aria-hidden="true">
          <span className="flex size-9 items-center justify-center rounded border border-gray-300 text-gray-600">‹</span>
          <span className="flex size-9 items-center justify-center rounded border border-gray-300 text-gray-600">›</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {recommendedProducts.map((product) => (
          <article key={product.id} className="flex min-w-0 gap-3">
            <div className="flex aspect-square w-20 shrink-0 items-center justify-center bg-neutral-100">
              <img
                src={bag}
                alt="Temporary product image placeholder"
                className="size-full object-contain"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <h3 className="text-sm font-bold text-gray-800">SHORT PRINTED DRESS</h3>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-red-off">$69.99</span>
                <del className="text-gray-600">$129.99</del>
                <span className="rounded bg-red-off px-1.5 py-0.5 text-white">-40%</span>
              </div>
              <button
                type="button"
                className="rounded border border-gray-600 px-2 py-1 text-xs font-bold text-gray-800"
              >
                ${product.price} &nbsp; Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default YouMightAlsoLike;
