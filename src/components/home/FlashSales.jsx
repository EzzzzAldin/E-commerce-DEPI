import ProductCard from "../product/ProductCard";
import Section from "../ui/Section";

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
  // <div className="flex gap-5">
  //   {products.map((product) => (
  //     <ProductCard
  //       key={product.id}
  //       title={product.title}
  //       price={product.price}
  //     />
  //   ))}
  // </div>;
  return (
    <Section title="Flash Sales" classSection="flash-sales">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </Section>
  );
}

export default FlashSales;
