import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Logo from "./assets/logo512.png";
import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "./components/Cart";
import { PageNotFound } from "./components/PageNotFound";
function App() {
  const location = useLocation();
  const pathname =
    location.pathname.length > 1
      ? location.pathname.slice(1, location.pathname.length)
      : location.pathname;

  let pathExist = pathname.includes("/") || pathname.includes("cart");
  return (
    <div className="App">
      {pathExist && <Header icon={Logo} />}
      {pathExist && (
        <hr
          style={{
            opacity: 0.5,
          }}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {pathExist && <Footer />}
    </div>
  );
}

export default App;
