import FlashSales from "../components/home/FlashSales";
import Trending from "../components/home/Trending";
import Top100 from "../components/home/Top100";
import ProductsSection from "../components/product/ProductsSection";
import Hero from "../components/home/Hero";

function Home({ onAddToCart, search = "" }) {
  return (
    <>
      <Hero />
      <ProductsSection onAddToCart={onAddToCart} search={search} />
      <FlashSales onAddToCart={onAddToCart} />
      <Top100 />
      <Trending />
    </>
  );
}

export default Home;
