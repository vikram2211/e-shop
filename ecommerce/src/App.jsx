import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyOrders from "./components/MyOrders";
import "./styles/App.css";

function App() {
  return (
    <>
      <CartProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      </CartProvider>
    </>
  );
}

export default App;
