import "./Contact.css";
import { useState } from "react";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    date: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {

    if (
      !formData.name ||
      !formData.phone ||
      !formData.event ||
      !formData.date ||
      !formData.location
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const text = `
🌸 *New Event Booking* 🌸

👤 Name : ${formData.name}

📞 Phone : ${formData.phone}

📧 Email : ${formData.email}

🎉 Event Type : ${formData.event}

📅 Event Date : ${formData.date}

📍 Event Location : ${formData.location}

💬 Message :
${formData.message}
`;

    const url = `https://wa.me/916356582936?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contact" data-aos="fade-left">

      <div className="contact-heading">

        <h4>GET IN TOUCH</h4>

        <h2>Let's Create Your Dream Event</h2>

        <p>
          We are always ready to make your special moments unforgettable.
          Contact us today and let's plan something amazing together.
        </p>

      </div>

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <h3>Contact Information</h3>

          <div className="info-box">
            <div className="icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>Phone</h4>
              <p>+91 63565 82936</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">
              <FaWhatsapp />
            </div>

            <div>
              <h4>WhatsApp</h4>
              <p>+91 63565 82936</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">
              <FaEnvelope />
            </div>

            <div>
              <h4>Email</h4>
              <p>dhavalpatel011006@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Location</h4>
              <p>
                 Tadkeshwar, Main Road,<br />
                 Areth, Surat,<br />
                 Gujarat, India
              </p>
            </div>
          </div>

        </div>

        {/* Contact Form */}

        <div className="contact-form">

          <h3>Book Your Event</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
          >
            <option value="">Select Event Type</option>
            <option>Wedding</option>
            <option>Reception</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Corporate Event</option>
            <option>Anniversary</option>
            <option>Baby Shower</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Event Location"
            value={formData.location}
            onChange={handleChange}
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write Your Message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button onClick={handleSubmit}>
            Book on WhatsApp
          </button>

        </div>

      </div>

      {/* Google Map */}

      <div className="map-section">

        <h2>Our Location</h2>

        <iframe
          title="Swastik Event Management Location"
          src="https://www.google.com/maps?q=Tadkeshwar+Main+Road+Areth+Surat+Gujarat+India&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>

      </div>

    </section>
  );
}

export default Contact;