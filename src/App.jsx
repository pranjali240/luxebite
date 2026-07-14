import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Success from "./pages/Success";

import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <BrowserRouter>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/menu" element={<Menu />} />
            <Route path="/success" element={<Success />} />
          </Routes>

          <Cart />
          <Checkout />
        </CartContextProvider>
      </UserProgressContextProvider>
    </BrowserRouter>
  );
}

export default App;
