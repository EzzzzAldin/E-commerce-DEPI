import ProductCard from "../product/ProductCard";
import Section from "../ui/Section";
import { products } from "../../data/products";

function FlashSales({ onAddToCart }) {
  // L1 => Data
  // const products = [
  //   { id: 1, title: "shoulder bag", price: 150 },
  //   { id: 2, title: "Laptop ", price: 30000 },
  //   { id: 3, title: "Screen ", price: 20000 },
  // ];
  const flashSalesProducts = products.slice(0, 3);
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
      {flashSalesProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </Section>
  );
}

export default FlashSales;
