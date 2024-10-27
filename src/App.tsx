// App.tsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Store } from "modules/shoppingCart/view/components/Store/Store";
import { Navbar } from "modules/shoppingCart/view/components/Navbar/Navbar";
import { ShoppingCartProvider } from "modules/shoppingCart/context/ShoppingCartContext";
import Home from "modules/shoppingCart/view/pages/Home";
import About from "modules/shoppingCart/view/pages/About";
import * as S from "./App-styles";

const App: React.FC = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <S.Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </S.Container>
    </ShoppingCartProvider>
  );
};

export default App;
