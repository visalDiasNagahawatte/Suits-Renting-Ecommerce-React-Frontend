import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import WeddingPage from "./pages/WeddingPage";
import SignupPage from "./pages/SignupPage";
import ItemInfoPage from "./pages/ItemInfoPage";
import RentHomePage01 from "./pages/RentHomePage01";
import AboutPage from "./pages/AboutPage";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/weddings" element={<WeddingPage />} />
        <Route path="/renthomepage01" element={<RentHomePage01 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/weddings" element={<WeddingPage />} />
        <Route path="/item/:id" element={<ItemInfoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
