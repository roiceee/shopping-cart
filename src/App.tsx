import React, { useState } from "react";
import NavigationBar from "./components/navbar/navbar";
import "./assets/styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Footer from "./components/footer";
import Shop from "./components/shop/shop";
import CartContext from "./utils/context/cart-context";
import { defaultCartObject } from "./utils/defaults";
import CartPage from "./components/cart/cart-page";


function App() {
  const [cartState, setCartState] = useState<CartObject>(defaultCartObject);

  
  return (
    <div className="App">
      <BrowserRouter>
        <div
          style={{ minHeight: "100vh" }}
          className="d-flex flex-column justify-content-between gap-1"
        >
          <div>
            <CartContext.Provider value={{ cartState, setCartState }}>
              <NavigationBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop/:id" element={<Shop />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </CartContext.Provider>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
