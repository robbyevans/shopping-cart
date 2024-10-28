import React from "react";
import { Routes, Route } from "react-router-dom";

import { Catalog } from "modules/view/components/Catalog/Catalog";
import { Navbar } from "modules/view/components/Navbar/Navbar";
import { Footer } from "modules/view/components/Footer/Footer";
import CheckoutPage from "modules/view/components/CheckoutPage/CheckoutPage";
import * as S from "./App-styles";

const App: React.FC = () => {
  return (
    <S.AppWrapper>
      <Navbar />
      <S.ContentWrapper>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </S.ContentWrapper>
      <Footer />
    </S.AppWrapper>
  );
};

export default App;
