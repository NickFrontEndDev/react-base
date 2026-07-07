import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./views/HomePage";
import logo from "./assets/react.svg";

function App() {
  const [theme, setTheme] = useState("light");
  const [height, setHeight] = useState(0);
  const navHight = useRef(null);

  useEffect(() => {
    setHeight(navHight.current.clientHeight);
  });

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
          <button className="navigation-btn_theme" onClick={toggleTheme}>
            {theme === "light" ? "Темная" : "Светлая"}
          </button>
        </div>
      </nav>

      <main style={{ marginTop: `${height}px` }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>

      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
