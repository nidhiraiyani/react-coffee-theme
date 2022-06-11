import React from "react";
import "../src/css/style.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/Abouts";
import Products from "./pages/Products";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="bg-img">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/store" element={<Store />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
