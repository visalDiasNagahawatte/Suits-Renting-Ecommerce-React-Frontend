// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { CartProvider } from "react-use-cart";
import ItemInfoPage from "./pages/ItemInfoPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:title" element={<ItemInfoPage />} />
          <Route path="/cartpage" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </div>
  );
};

export default App;
