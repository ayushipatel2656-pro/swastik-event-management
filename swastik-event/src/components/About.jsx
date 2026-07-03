import "./About.css";
import aboutImg from "../assets/images/about.png";

function About() {
  return (
    <section className="about">

      {/* About Image */}

      <div className="about-image">
        <img src={aboutImg} alt="Swastik Event Management" />
      </div>

      {/* About Content */}

      <div className="about-content">

        <h4>ABOUT US</h4>

        <h2>Creating Beautiful Memories That Last Forever</h2>

        <p>
          Swastik Event Management is a professional event planning company
          dedicated to making every celebration memorable and unique.
          We specialize in weddings, birthdays, engagements,
          corporate events, anniversaries and all types of celebrations.
        </p>

        <p>
          Our experienced team manages decoration, stage setup,
          entertainment, lighting, catering coordination and complete
          event planning so you can enjoy every special moment without stress.
        </p>

        <div className="about-list">

          <div>✔ Wedding & Reception Events</div>

          <div>✔ Birthday Celebrations</div>

          <div>✔ Engagement Decoration</div>

          <div>✔ Stage & Flower Decoration</div>

          <div>✔ DJ & Entertainment</div>

          <div>✔ Sparkular & Fire Effects</div>

          <div>✔ Corporate Events</div>

          <div>✔ Professional Event Planning</div>

        </div>

        <a
          href="https://wa.me/916356582936?text=Hello%20Swastik%20Event%20Management,%20I%20want%20to%20book%20an%20event."
          target="_blank"
          rel="noopener noreferrer"
          className="about-btn"
        >
          Book Your Event
        </a>

      </div>

    </section>
  );
}

export default About;