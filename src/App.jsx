// Archivo: App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  return (
    <div>
      <nav>
  <ul style={{ listStyle: "none", display: "flex", gap: "20px", padding: 0 }}>
    <li>
      <Link to="/">
        <i className="bi bi-house" style={{ marginRight: "6px" }}></i>
        Home
      </Link>
    </li>
    <li>
      <Link to="/register">
      <i className="bi bi-door-open" style={{ marginRight: "6px" }}></i>
      Register</Link>
    </li>
    <li>
      <Link to="/login">
      <i className="bi bi-check2-circle" style={{ marginRight: "6px" }}></i>
      Login</Link>
    </li>
  </ul>
</nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}