import FlashSales from "../components/home/FlashSales";
import Trending from "../components/home/Trending";
import Top100 from "../components/home/Top100";
import ProductsSection from "../components/product/ProductsSection";

function Home({ onAddToCart }) {
  return (
    <>
      <ProductsSection onAddToCart={onAddToCart} />
      <FlashSales onAddToCart={onAddToCart} />
      <Top100 />
      <Trending />
    </>
  );
}

export default Home;
