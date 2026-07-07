<section className="hero" data-aos="fade-up"></section>
import "./Hero.css";
import heroImg from "../assets/images/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${heroImg})`,
      }}
    >
      <div className="hero-content">

        <h1>Making Every Event Memorable</h1>

        <p>
          Wedding • Birthday • Corporate • Engagement • Reception
        </p>

        <div className="hero-buttons">
          <Link to="/contact" className="btn">
             Book Your Event
          </Link>

          <a href="tel:+916356582936" className="btn-outline">
           Call Now
          </a>
        </div>

        <div className="scroll">
          ↓ Scroll Down
        </div>

      </div>
    </section>
  );
}

export default Hero;