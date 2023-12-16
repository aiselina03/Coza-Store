import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import MainLayout from "./layout/MainLayout";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/home/:id" element={<Detail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
