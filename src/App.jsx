import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import CartView from "./components/cart/CartView";
import NotFound from "./components/ui/NotFound";

function App() {
  // L1 => Data => (Sates & Global Data)
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  // L2 => API Calls
  // L3 => Handler

  const increaseCartHandler = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };
  const addToCartHandler = (product) => {
    // console.log(product.id);

    // Check Product
    const inCart = cart.some((item) => item.id === product.id);
    // If Not New product Call increaseCartHandler
    if (inCart) {
      increaseCartHandler(product.id);
    } else {
      // Add New Product
      setCart([...cart, { ...product, qty: 1 }]);
    }
    navigate("/cart");
  };

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  let cartCount = 0;
  for (const item of cart) {
    cartCount += item.qty;
  }

  // L4 => Jsx
  return (
    <>
      <Routes>
        <Route
          element={
            <Layout
              cartCount={cartCount}
              onSearchChange={searchHandler}
              searchValue={search}
            />
          }
        >
          <Route
            path="/"
            element={<Home onAddToCart={addToCartHandler} search={search} />}
          />
          <Route
            path="/cart"
            element={<CartView items={cart} onIncrease={increaseCartHandler} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
