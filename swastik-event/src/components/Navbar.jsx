import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="Swastik Logo" />
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>

        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
        </li>

        <li>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>

      </ul>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}

export default Navbar;