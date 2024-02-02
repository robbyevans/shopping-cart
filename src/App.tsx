import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Store } from "./modules/shoppingCart/slices/Store";
import { Navbar } from "./modules/shoppingCart/view/components/Navbar";
import { ShoppingCartProvider } from "./modules/shoppingCart/context/ShoppingCartContext";
import Home from "./modules/shoppingCart/view/pages/Home";
import About from "./modules/shoppingCart/view/pages/About";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
