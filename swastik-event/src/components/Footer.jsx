import "./Footer.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">

          <h2>Swastik Event Management</h2>

          <p>
            Creating unforgettable memories with beautiful decorations,
            creative planning and premium event management services.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>

        </div>

        {/* Services */}

        <div className="footer-box">

          <h3>Our Services</h3>

          <ul>
            <li>Wedding Events</li>
            <li>Birthday Party</li>
            <li>Corporate Events</li>
            <li>Stage Decoration</li>
            <li>DJ & Entertainment</li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact Us</h3>

          <p><FaPhoneAlt /> +91 63565 82936</p>

          <p><FaEnvelope /> dhavalpatel011006@gmail.com</p>

          <p><FaMapMarkerAlt /> Areth, Surat, Gujarat</p>

          <div className="social-icons">

  <a href="https://www.instagram.com/swastik_event_?igsh=MXFhcDltc3h3Z3N6Yw=="
   target="_blank"
  rel="noreferrer"
  >
    <FaInstagram />
  </a>

  <a
    href="https://wa.me/916356582936"
    target="_blank"
    rel="noreferrer"
  >
    <FaWhatsapp />
  </a>

</div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Swastik Event Management | All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;