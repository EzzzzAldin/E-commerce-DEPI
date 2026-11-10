import ProductCard from "./ProductCard";
import { products } from "../../data/products";

const categories = [
  { name: "Casual", checked: true },
  { name: "Business casual", checked: false },
  { name: "Bohemian", checked: true },
  { name: "Minimalist", checked: true },
  { name: "Uniqlo", checked: true },
  { name: "Zara", checked: false },
  { name: "Gucci", checked: true },
  { name: "Mango", checked: true },
  { name: "Ralph Lauren", checked: false },
  { name: "Calvin Klein", checked: false },
  { name: "Rachel Pally", checked: false },
];

const models = [
  { name: "Short", count: 60 },
  { name: "Mid-length", count: 10 },
  { name: "Sweater", count: 56 },
  { name: "Party Dresses", count: 80 },
  { name: "Regular Fit", count: 100 },
];

const colors = [
  { name: "Red", className: "bg-red-500" },
  { name: "Beige", className: "bg-orange-200" },
  { name: "Blue", className: "bg-blue-400", selected: true },
  { name: "Yellow", className: "bg-yellow-300" },
  { name: "Green", className: "bg-green-500" },
  { name: "Purple", className: "bg-purple-500" },
  { name: "Magenta", className: "bg-fuchsia-500" },
  { name: "Pink", className: "bg-pink-300" },
  { name: "Brown", className: "bg-amber-700" },
  { name: "Gray", className: "bg-gray-400" },
  { name: "Black", className: "bg-gray-900" },
];

const sizes = ["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"];

function ProductsSection({ onAddToCart, search = "" }) {
  // L1 => States & Global Data
  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );
  // L2 => API Call
  // L3 => Handler
  // L4 => View
  return (
    <section className="products-section max-w-page mx-auto mt-20 px-4">
      <div className="products-header flex flex-col gap-4 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-800">Women</h1>
          <span className="text-sm text-gray-600">
            {filterProducts.length} items
          </span>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sort-order" className="sr-only">
            Sort by order
          </label>
          <select
            id="sort-order"
            className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800"
          >
            <option>Sort by order</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start">
        <aside
          aria-label="Filters"
          className="products-sidebar w-full shrink-0 lg:w-64"
        >
          <h2 className="flex items-center gap-2 text-base font-bold text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
              aria-hidden="true"
            >
              <rect x="4" y="4" width="6" height="6" />
              <rect x="14" y="4" width="6" height="6" />
              <rect x="4" y="14" width="6" height="6" />
              <rect x="14" y="14" width="6" height="6" />
            </svg>
            All Categories
          </h2>

          <fieldset className="mt-6 border-t border-gray-200 pt-5">
            <legend className="text-sm font-bold text-gray-800">Brand</legend>
            <label htmlFor="brand-search" className="sr-only">
              Search brand
            </label>
            <input
              id="brand-search"
              type="search"
              placeholder="Search"
              className="mt-3 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400"
            />
          </fieldset>

          <fieldset className="mt-6 border-t border-gray-200 pt-5">
            <legend className="text-sm font-bold text-gray-800">Model</legend>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
              {models.map((model) => (
                <li
                  key={model.name}
                  className="flex items-center justify-between gap-4"
                >
                  <span>{model.name}</span>
                  <span>{model.count}</span>
                </li>
              ))}
            </ul>
          </fieldset>

          <fieldset className="mt-6 border-t border-gray-200 pt-5">
            <legend className="text-sm font-bold text-gray-800">Style</legend>
            <div className="mt-3 flex flex-col gap-3">
              {categories.map((category) => (
                <label
                  key={category.name}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <input
                    type="checkbox"
                    defaultChecked={category.checked}
                    className="size-4"
                  />
                  {category.name}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6 border-t border-gray-200 pt-5">
            <legend className="text-sm font-bold text-gray-800">Color</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  aria-label={color.name}
                  title={color.name}
                  className={`size-6 rounded-full border ${color.className} ${
                    color.selected
                      ? "border-2 border-gray-800"
                      : "border-gray-300"
                  }`}
                />
              ))}
              <button
                type="button"
                aria-label="No color"
                title="No color"
                className="flex size-6 items-center justify-center rounded-full border border-gray-300 bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-4 text-gray-400"
                  aria-hidden="true"
                >
                  <path
                    d="M5 19 19 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>
          </fieldset>

          <fieldset className="mt-6 border-t border-gray-200 pt-5">
            <legend className="text-sm font-bold text-gray-800">Size</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`min-w-9 rounded-md border px-2 py-1 text-xs ${
                    size === "M"
                      ? "border-gray-800 bg-blue-50 text-gray-800"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6 border-t border-gray-200 pt-5">
            <legend className="text-sm font-bold text-gray-800">Price</legend>
            <div className="mt-3 flex items-center gap-2">
              <label htmlFor="min-price" className="sr-only">
                Minimum price
              </label>
              <input
                id="min-price"
                type="number"
                placeholder="$60"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400"
              />
              <span className="text-gray-400">-</span>
              <label htmlFor="max-price" className="sr-only">
                Maximum price
              </label>
              <input
                id="max-price"
                type="number"
                placeholder="$450"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400"
              />
            </div>
            <p className="mt-3 flex items-center justify-between text-xs text-gray-400">
              <span>Minimum $200</span>
              <span>Maximum $500</span>
            </p>
            <p className="mt-3 text-xs text-gray-400">
              {filterProducts.length} products found
            </p>
          </fieldset>
        </aside>

        <div className="products-grid grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filterProducts.map((product) => (
            <ProductCard
              key={product.id}
              variant="top"
              title={product.title}
              price={product.price}
              description={product.description}
              discount={Math.round(product.discountPercentage)}
              oldPrice={(
                product.price /
                (1 - product.discountPercentage / 100)
              ).toFixed(2)}
              review={product.rating}
              onAddToCart={() => onAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
