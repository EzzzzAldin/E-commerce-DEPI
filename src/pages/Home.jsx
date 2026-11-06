import FlashSales from "../components/home/FlashSales";
import Trending from "../components/home/Trending";
import Top100 from "../components/home/Top100";
import CartRows from "../components/cart/CartRows";

function Home() {
  return (
    <>
      <FlashSales />
      <Top100 />
      <Trending />
      <CartRows />
    </>
  );
}

export default Home;
