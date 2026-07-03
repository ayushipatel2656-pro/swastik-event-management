<section className="why" data-aos="fade-up"></section>
import "./WhyChoose.css";
import { FaBullseye, FaPalette, FaFire, FaClock } from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why">

      <div className="why-title">
        <h4>WHY CHOOSE US</h4>

        <h2>Our Services</h2>

        <p>
          We make every celebration unique with creative decoration,
          professional planning and unforgettable special effects.
        </p>
      </div>

      <div className="why-container">

        <div className="why-card">

          <div className="icon">
            <FaBullseye />
          </div>

          <h3>Professional Planning</h3>

          <p>
            Complete event planning from beginning to end with perfection.
          </p>

        </div>

        <div className="why-card">

          <div className="icon">
            <FaPalette />
          </div>

          <h3>Creative Decoration</h3>

          <p>
            Attractive themes and elegant decorations for every occasion.
          </p>

        </div>

        <div className="why-card">

          <div className="icon">
            <FaFire />
          </div>

          <h3>Special Effects</h3>

          <p>
            Sparkular, Fireworks, Dry Ice, CO₂ Jet and many more effects.
          </p>

        </div>

        <div className="why-card">

          <div className="icon">
            <FaClock />
          </div>

          <h3>On Time Service</h3>

          <p>
            We value your time and always deliver our services on schedule.
          </p>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;