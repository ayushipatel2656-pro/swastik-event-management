<section className="cta" data-aos="fade-up"></section>
import "./CallToAction.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="cta">

      <div className="cta-overlay">

        <h4>BOOK YOUR EVENT TODAY</h4>

        <h2>
          Ready To Make Your Celebration
          <br />
          Truly Unforgettable?
        </h2>

        <p>
          From weddings and birthdays to corporate events, we create
          beautiful moments with creativity, elegance and perfection.
        </p>
<br></br><br></br><br></br><br></br>
       <Link to="/contact" className="cta-btn">
    Book Your Event
</Link>

      </div>

    </section>
  );
}

export default CallToAction;