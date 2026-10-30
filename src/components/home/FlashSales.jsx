import ProductCard from "../product/ProductCard";

function FlashSales() {
  // L1 => Data
  const products = [
    { id: 1, title: "shoulder bag", price: 150 },
    { id: 2, title: "Laptop ", price: 30000 },
    { id: 3, title: "Screen ", price: 20000 },
  ];
  // L2 => Api Call
  // L3 => Logic
  // L4 => View
  return (
    <section className="flash-sales flex flex-col gap-12 max-w-page mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-medium text-black">Flash Sales</h2>
        <a href="#">View All</a>
      </div>
      <div className="flex gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default FlashSales;
