import React from "react";
import { Routes, Route } from "react-router-dom";

import { Catalog } from "modules/view/components/Catalog/Catalog";
import { Navbar } from "modules/view/components/Navbar/Navbar";
import { Footer } from "modules/view/components/Footer/Footer";
import CheckoutPage from "modules/view/components/CheckoutPage/CheckoutPage";
import * as S from "./App-styles";
import ConfirmationPage from "modules/view/pages/ConfirmationPage/ConfirmationPage";

const App: React.FC = () => {
  return (
    <S.AppWrapper>
      <Navbar />
      <S.ContentWrapper>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </S.ContentWrapper>
      <Footer />
    </S.AppWrapper>
  );
};

export default App;
