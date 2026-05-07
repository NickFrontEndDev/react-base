import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./views/HomePage";

function App() {
  const id = useState[null];

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <footer>

      </footer>

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
