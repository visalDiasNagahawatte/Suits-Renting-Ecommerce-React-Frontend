// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { CartProvider } from "react-use-cart";
import ItemInfoPage from "./pages/ItemInfoPage";
import CartPage from "./pages/CartPage";
import { useSelector } from "react-redux";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:title" element={<ItemInfoPage />} />
          {isLoggedIn ? (
            <Route path="/cartpage" element={<CartPage />} />
          ) : (
            <Navigate to="/login" />
          )}
        </Routes>
      </CartProvider>
    </div>
  );
};

export default App;
