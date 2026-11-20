import { Link, Outlet } from "react-router";
import YouMightAlsoLike from "./YouMightAlsoLike";

const productDetails = [
  "Length | Regular",
  "Pattern | Floral",
  "Size | 38",
  "Fit | Regular fit",
  "Age group | Adult",
  "Leg opening | Wide leg",
  "Sleeve length | Long sleeve",
  "Package contents | 2 pcs",
];

const careInstructions = [
  "Machine wash at max. 30ºC/86ºF with short spin cycle",
  "Iron at a maximum of 110ºC/230ºF",
  "Do not dry clean",
  "Do not tumble dry",
  "Wash inside out",
  "Wash separately",
];

function ProductDetails({ product }) {
  // L4 => View
  return (
    <main className="max-w-page mx-auto mt-8 flex flex-col gap-12 px-4">
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex min-w-0 items-center justify-center bg-neutral-100 p-4">
          <img
            src={product.thumbnail}
            alt="Temporary product image placeholder"
            className="aspect-square w-full max-w-140 object-contain"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-gray-800">
              {product.title}
            </h1>
            <p className="text-xl text-gray-800">$39.99</p>
          </div>

          <section aria-label="Product options" className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="w-16 text-sm text-gray-800">Size</h2>
              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <span
                    key={size}
                    className="flex h-10 w-11 items-center justify-center rounded border border-gray-300 text-sm text-gray-800"
                  >
                    {size}
                  </span>
                ))}
              </div>
              <span className="text-xs text-[#ff7a00]">Size guideline</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <h2 className="w-16 text-sm text-gray-800">Color</h2>
              <div
                className="flex items-center gap-3"
                aria-label="Available colors"
              >
                <span className="size-3 rounded-full bg-red-off" />
                <span className="size-3 rounded-full bg-emerald-600" />
                <span className="size-3 rounded-full bg-blue-400" />
                <span className="size-3 rounded-full bg-slate-500" />
              </div>
            </div>

            <div className="flex flex-wrap items-start gap-4">
              <h2 className="w-16 text-sm text-gray-800">Shipping</h2>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-800">
                  Free Shipping to Victoria territory
                </p>
                <p className="text-xs text-gray-600">
                  Delivery Time: 14–17 days
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <h2 className="w-16 text-sm text-gray-800">Quantity</h2>
              <div className="flex h-10 items-center gap-4 rounded border border-gray-300 px-3 text-sm text-gray-800">
                <span aria-hidden="true">−</span>
                <span>2</span>
                <span aria-hidden="true">+</span>
              </div>
              <p className="text-xs text-gray-600">50 available / 104 sold</p>
            </div>
          </section>

          <div className="flex flex-col gap-4 rounded bg-neutral-100 p-5">
            <p className="text-xl font-bold text-gray-800">$79.98</p>
            <p className="border-t border-gray-300 pt-3 text-xs text-gray-600">
              Add shipping insurance for $9 (declared value only if the package
              gets lost, stolen or damaged.)
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="rounded-md bg-blue-600 px-4 py-3 text-sm font-bold text-white"
            >
              SHOP NOW
            </button>
            <button
              type="button"
              className="rounded-md border border-gray-600 bg-white px-4 py-3 text-sm font-bold text-gray-800"
            >
              ADD TO BASKET
            </button>
          </div>
        </div>
      </section>

      <section aria-labelledby="product-description-heading">
        <div className="flex flex-wrap justify-center gap-8 border-b border-gray-300 py-4 text-sm font-bold text-gray-600">
          <span className="text-gray-800">PRODUCT DETAILS</span>
          <Link to="reviews">REVIEWS (5)</Link>
          <span>SHIPPING &amp; PAYMENT</span>
        </div>

        <div className="grid grid-cols-1 gap-8 py-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2
                id="product-description-heading"
                className="font-bold text-gray-800"
              >
                Product Description
              </h2>
              <p className="text-sm leading-6 text-gray-600">
                Short dress with a plunging V-neckline and tie detail. Wide
                sleeves falling below the elbow. Contrast bead details.
                Invisible back zip fastening.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-gray-800">Product Description</h2>
              <ul className="flex flex-col gap-3 text-sm text-gray-600">
                {productDetails.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-gray-800">Composition</h2>
              <p className="text-sm leading-6 text-gray-600">
                We work with monitoring programmes to ensure compliance with our
                social, environmental and health and safety standards for our
                products. To assess compliance, we have developed a programme of
                audits and continuous improvement plans.
              </p>
              <p className="text-sm text-gray-600">OUTER SHELL</p>
              <p className="text-sm text-gray-600">90% cotton 10% linen</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-gray-800">Care instructions</h2>
              <ul className="flex flex-col gap-3 text-sm text-gray-600">
                {careInstructions.map((instruction) => (
                  <li key={instruction}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 border-t border-gray-300 py-3 text-sm font-bold text-gray-800">
          <span aria-hidden="true">↑</span>
          <span>SHOW LESS</span>
        </div>
      </section>

      <Outlet />
      <YouMightAlsoLike />
    </main>
  );
}

export default ProductDetails;
