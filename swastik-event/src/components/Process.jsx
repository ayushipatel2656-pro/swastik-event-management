<section className="process" data-aos="zoom-in"></section>
import "./Process.css";
import {
  FaPhoneAlt,
  FaClipboardList,
  FaPaintBrush,
  FaGlassCheers,
} from "react-icons/fa";

function Process() {
  return (
    <section className="process">

      <div className="process-title">

        <h4>OUR PROCESS</h4>

        <h2>How We Make Your Event Special</h2>

        <p>
          From your first inquiry to the final celebration, we take care of every detail.
        </p>

      </div>

      <div className="process-container">

        <div className="process-card">

          <div className="process-icon">
            <FaPhoneAlt />
          </div>

          <h3>Contact Us</h3>

          <p>
            Reach out to us by phone, WhatsApp or our contact form to discuss your event.
          </p>

        </div>

        <div className="process-card">

          <div className="process-icon">
            <FaClipboardList />
          </div>

          <h3>Planning</h3>

          <p>
            We understand your requirements and create a customized event plan.
          </p>

        </div>

        <div className="process-card">

          <div className="process-icon">
            <FaPaintBrush />
          </div>

          <h3>Decoration</h3>

          <p>
            Our team creates stunning decorations and special effects to match your theme.
          </p>

        </div>

        <div className="process-card">

          <div className="process-icon">
            <FaGlassCheers />
          </div>

          <h3>Celebrate</h3>

          <p>
            Enjoy your special day while we manage everything professionally.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Process;