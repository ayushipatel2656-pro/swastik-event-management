<section className="testimonials" data-aos="fade-left"></section>
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonial-title">

        <h4>OUR FOUNDERS</h4>

        <h2>Meet Our Team</h2>

        <p>
          Dedicated professionals committed to making every event memorable.
        </p>

      </div>

      <div className="testimonial-container">

        <div className="testimonial-card">

          <div className="stars">★★★★★</div>

          <p>
            Our goal is to create unforgettable memories with creativity,
            perfection and complete customer satisfaction. Every event is
            planned with passion and attention to every detail.
          </p>

          <h3>Dhaval Patel</h3>

          <span>Founder</span>

        </div>

        <div className="testimonial-card">

          <div className="stars">★★★★★</div>

          <p>
            We believe every celebration is unique. From planning to
            decoration, our team works with dedication to deliver elegant
            and memorable events for every client.
          </p>

          <h3>Jignesh Patel</h3>

          <span>Co-Founder</span>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;