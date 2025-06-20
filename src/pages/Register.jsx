//import logo from './logo.svg';
import "../styles/Register.css";
import { useState } from "react";




function App() {

//Function for password eyes
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

function toggleConfirmPassword() {
  setShowConfirmPassword(!showConfirmPassword);
}

function togglePassword() {
  setShowPassword(!showPassword);
}
//____________________________


  return (
    <div className="form-container">
      <h2 className="form-title">Create an account</h2>
      <p className="form-description">Crea una cuenta</p>
      
      <form>
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="firstName">First name</label>
      <input type="text" id="firstName" placeholder="Goku" />
    </div>
    <br></br>
    <div className="form-group">
      <label htmlFor="lastName">Last name</label>
      <input type="text" id="lastName" placeholder="Son" />
    </div>
  </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="kamehameha@ejemplo.com" />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="+54 9 11-4321-5678" />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
          <input type={showPassword ? "text" : "password"}id="password" placeholder="Ingresá tu contraseña" />
            <button type="button" className="password-toggle" onClick={togglePassword}>{showPassword ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>}</button>

          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="password-input-container">
          <input type={showConfirmPassword ? "text" : "password"}id="confirmPassword" placeholder="Vuelve a ingresar tu contraseña" />
            <button type="button" className="password-toggle" onClick={toggleConfirmPassword}>{showConfirmPassword ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>}</button>

          </div>
        </div>
        
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
}

export default App;