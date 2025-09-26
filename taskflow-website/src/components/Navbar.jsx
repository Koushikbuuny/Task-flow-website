import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="brand">
        TaskFlow
      </div>
      <nav>
        <ul>
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/features" className={location.pathname === "/features" ? "active" : ""}>Features</Link></li>
          <li><Link to="/pricing" className={location.pathname === "/pricing" ? "active" : ""}>Pricing</Link></li>
          <li><Link to="/faqs" className={location.pathname === "/faqs" ? "active" : ""}>FAQs</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
        </ul>
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
