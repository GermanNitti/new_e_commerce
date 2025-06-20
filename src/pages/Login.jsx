// Archivo: /pages/Login.jsx
import '../styles/login.css';
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Please login</h2>
      <p className="form-description">Por favor inicia sesión</p>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Ingresá tu email" required />
        </div>


        <div className="form-group">
  <label htmlFor="password">Password</label>
  <div className="password-input-container">
    <input
      type={showPassword ? "text" : "password"}
      id="password"
      placeholder="Ingresá tu contraseña"
      required
    />
    <button
      type="button"
      className="password-toggle"
      onClick={togglePassword}
    >
      {showPassword ? (
        <i className="bi bi-eye"></i>
      ) : (
        <i className="bi bi-eye-slash"></i>
      )}
    </button>
  </div>
</div>



        <button type="submit" className="register-button">
          Login
        </button>
      </form>
    </div>
  );
}
