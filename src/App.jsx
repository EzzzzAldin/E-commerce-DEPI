import { useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/layouts/Navbar";
import CartView from "./components/cart/CartView";

function App() {
  // L1 => Data => (Sates & Global Data)
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
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
      <Navbar
        cartCount={cartCount}
        onSearchChange={searchHandler}
        searchValue={search}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home onAddToCart={addToCartHandler} search={search} />}
          />
          <Route
            path="/cart"
            element={<CartView items={cart} onIncrease={increaseCartHandler} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
