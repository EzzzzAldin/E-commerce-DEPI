import Section from "../ui/Section";
import ProductCard from "../product/ProductCard";

function Top100() {
  // L1 => Data
  const products = [
    {
      id: 1,
      title: "Mango",
      price: 280,
      description: "plaplapla",
      oldPrice: 300,
      review: 250,
      discount: 10,
    },
    {
      id: 2,
      title: "Mango",
      price: 280,
      description: "plaplapla",
      oldPrice: 300,
      review: 250,
      discount: 10,
    },
    {
      id: 3,
      title: "Mango",
      price: 280,
      description: "plaplapla",
      oldPrice: 300,
      review: 250,
      discount: 10,
    },
    {
      id: 4,
      title: "Mango",
      price: 280,
      description: "plaplapla",
      oldPrice: 300,
      review: 250,
      discount: 10,
    },
  ];
  // L2 => Effects
  // L3 => Logic
  // L4 => View
  return (
    <Section title="Top 100" classSection="top-100">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          variant="top"
          title={product.title}
          price={product.price}
          description={product.description}
          oldPrice={product.oldPrice}
          review={product.review}
          discount={product.discount}
        />
      ))}
    </Section>
  );
}

export default Top100;
