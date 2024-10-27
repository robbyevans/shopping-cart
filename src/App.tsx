// App.tsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Store } from "modules/shoppingCart/view/components/Store/Store";
import { Navbar } from "modules/shoppingCart/view/components/Navbar/Navbar";
import { Footer } from "modules/shoppingCart/view/components/Footer/Footer";
import { ShoppingCartProvider } from "modules/shoppingCart/context/ShoppingCartContext";
// import Home from "modules/shoppingCart/view/pages/Home";
import About from "modules/shoppingCart/view/pages/About";
import CheckoutPage from "modules/shoppingCart/view/components/CheckoutPage/CheckoutPage";
import * as S from "./App-styles";

const App: React.FC = () => {
  return (
    <ShoppingCartProvider>
      <S.AppWrapper>
        <Navbar />
        <S.ContentWrapper>
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </S.ContentWrapper>
        <Footer />
      </S.AppWrapper>
    </ShoppingCartProvider>
  );
};

export default App;
