import SectionTitle from "../ui/Section";
import ProductCard from "../product/ProductCard";

function Top100() {
  const products = [
    { id: 1, title: "Mango", price: 280, description: "test description", oldPrice: 300, review: 250, discount: 10 },
    { id: 2, title: "Zara", price: 95, description: "Chain shoulder bag - Beige - Daily fit", oldPrice: 145, review: 523, discount: 7 },
    { id: 3, title: "Uniqlo", price: 125, description: "Mini shoulder bag - Black - Slim fit", oldPrice: 156, review: 86, discount: 8 },
    { id: 4, title: "Mango bag", price: 365, description: "Classic shoulder bag - Cream - Timeless fit", oldPrice: 487, review: 121, discount: 15 },
  ];
  return (
    <SectionTitle title="Top100" classSection="top-100">
      {products.map((product) => (

         <ProductCard variant="top"
      title={product.title}
      price={product.price}
      description={product.description}
      oldPrice={product.oldPrice}
      review={product.review}
      discount={product.discount}/>
        
      )
    )}
     

    </SectionTitle>

    
  );
}

export default Top100;
