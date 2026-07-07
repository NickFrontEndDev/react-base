import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./views/HomePage";
import ProductsPage from "./views/ProductsPage";
import ContactPage from "./views/ContactPage";
import logo from "./assets/react.svg";

function App() {
  const [theme, setTheme] = useState("light");
  const [height, setHeight] = useState(0);
  const navHight = useRef(null);

  useEffect(() => {
    setHeight(navHight.current.clientHeight);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <nav ref={navHight} className="navigation">
        <div className="navigation-left_group">
          <img src={logo} alt="logo" className="navigatin_logo" />
        </div>
        <div className="navigation-right_group">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          
          <label className="switch">
            <input 
              className="switch__input" 
              type="checkbox" 
              role="switch"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <span className="switch__icon">
              <span className="switch__icon-part switch__icon-part--1"></span>
              <span className="switch__icon-part switch__icon-part--2"></span>
              <span className="switch__icon-part switch__icon-part--3"></span>
              <span className="switch__icon-part switch__icon-part--4"></span>
              <span className="switch__icon-part switch__icon-part--5"></span>
              <span className="switch__icon-part switch__icon-part--6"></span>
              <span className="switch__icon-part switch__icon-part--7"></span>
              <span className="switch__icon-part switch__icon-part--8"></span>
              <span className="switch__icon-part switch__icon-part--9"></span>
              <span className="switch__icon-part switch__icon-part--10"></span>
              <span className="switch__icon-part switch__icon-part--11"></span>
            </span>
            <span className="switch__sr">Dark Mode</span>
          </label>
        </div>
      </nav>

      <main style={{ marginTop: `${height}px` }}>
        <Routes>
          <Route path="/" element={<HomePage height={height} />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer></footer>
    </BrowserRouter>
  );
}

export default App;