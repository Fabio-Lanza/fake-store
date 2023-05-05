import "./App.css";
import Header from "./component/header/Header";
import Home from "./pages/Home/Home";
import Footer from "./component/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:productId" element={<ProductDetails />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
 