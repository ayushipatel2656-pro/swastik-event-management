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

        <button className="about-btn">
          Book Your Event
        </button>

      </div>

      {/* Mission & Vision */}

      <div className="mission-vision">

        <div className="mv-card">

          <h3>🎯 Our Mission</h3>

          <p>
            Our mission is to create unforgettable celebrations
            with creativity, elegance and complete customer satisfaction.
          </p>

        </div>

        <div className="mv-card">

          <h3>👁 Our Vision</h3>

          <p>
            To become one of the leading event management companies
            by delivering memorable experiences for every client.
          </p>

        </div>

      </div>

      {/* Statistics */}

      {/* Statistics */}



    </section>
  );
}

export default About;