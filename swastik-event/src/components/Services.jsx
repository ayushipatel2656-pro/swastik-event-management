<section className="services" data-aos="zoom-in"></section>
import "./Services.css";
import { Link } from "react-router-dom";

import specialist from "../assets/images/specialist.png";
import machines from "../assets/images/machines.png";
import otherservices from "../assets/images/otherservices.png";

function Services() {
  return (
    <section className="services">

      <div className="section-title">
        <h4>OUR SERVICES</h4>
        <h2>Everything You Need For A Memorable Celebration</h2>
        <p>
          We provide complete event planning, decoration, special effects and
          entertainment services for all types of events.
        </p>
      </div>

      <div className="services-container">

        {/* Specialist */}

        <div className="service-card">

          <img src={specialist} alt="Specialist" />

          <h3>⭐ Specialist</h3>

          <ul>
            <li>Marriage Function</li>
            <li>Birthday Party</li>
            <li>Varmala Stage</li>
            <li>Ganpati Agman</li>
            <li>Ganpati Visarjan</li>
            <li>Navratri Celebration</li>
            <li>Bride-Groom Entry</li>
            <li>Engagement Function</li>
            <li>Anniversary Celebration</li>
            <li>DJ Night</li>
            <li>School & College Event</li>
            <li>Celebrity Night</li>
            <li>Flower & Car Decoration</li>
            <li>Flower Bouquet Making</li>
            <li>All Event Decoration</li>
            <li>SFX Fire Works</li>
          </ul>

        </div>

        {/* Machines */}

        <div className="service-card">

          <img src={machines} alt="Machines" />

          <h3>🔥 Machines</h3>

          <ul>
            <li>Fire Flame Machine</li>
            <li>Five Way Fire Flame Machine</li>
            <li>Fire Works Operating System</li>
            <li>Sparkular Machine</li>
            <li>Pyro Fan Machine</li>
            <li>Smoke Machine</li>
            <li>CO₂ Jumbo Blower</li>
            <li>LED CO₂ Jet</li>
            <li>Bubble Machine</li>
            <li>Smoke Bubble Machine</li>
            <li>Remote Pyro Machine</li>
            <li>Low Fog Machine</li>
            <li>Dry Ice Pot</li>
            <li>Liquid co2 Jet</li>
          </ul>

        </div>

        {/* Other Services */}

        <div className="service-card">

          <img src={otherservices} alt="Other Services" />

          <h3>🎉 Other Services</h3>

          <ul>
            <li>Pyro Fitting Service</li>
            <li>Fire Flame Operator</li>
            <li>Sparkular Operator</li>
            <li>Fireworks Operator</li>
            <li>Control Service</li>
            <li>Confetti Paper</li>
            <li>Fire Works</li>
            <li>Important Pyro Available</li>
            <li>Important Mines & Tails Available</li>
          </ul>

        </div>

      </div>

      <div className="service-btn-container">
  <Link to="/contact" className="service-btn">
    Book Your Event
  </Link>
</div>
    </section>
  );
}

export default Services;