<section className="hero" data-aos="fade-up"></section>
import "./Hero.css";
import heroImg from "../assets/images/hero.png";

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
          <button className="btn">Book Your Event</button>

          <button className="btn-outline">Call Now</button>
        </div>

        <div className="scroll">
          ↓ Scroll Down
        </div>

      </div>
    </section>
  );
}

export default Hero;