import ProductCard from "../product/ProductCard";

function FlashSales() {
  // Layer 1 => States (Management Data)
  // Layer 2 => Effect (API Call)
  // Layer 3 => Handlers (Logic)
  // Layer 4 => View (Jsx)
  return (
    <section className="flash-sales flex flex-col gap-12 max-w-page mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-medium text-black">Flash Sales</h2>
        <a href="#">View All</a>
      </div>
      <div className="flex gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default FlashSales;
