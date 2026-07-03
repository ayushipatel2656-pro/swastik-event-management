<section className="faq" data-aos="fade-right"></section>
import "./FAQ.css";
import { useState } from "react";

function FAQ() {

  const [open, setOpen] = useState(0);

  const faqData = [
    {
      question: "How can I book an event?",
      answer:
        "You can contact us through phone, WhatsApp, email or by filling out the contact form on our website.",
    },
    {
      question: "Which events do you organize?",
      answer:
        "We organize weddings, engagements, birthdays, corporate events, baby showers, DJ nights and many more celebrations.",
    },
    {
      question: "Do you provide decoration services?",
      answer:
        "Yes, we provide premium decoration, stage setup, flower decoration and theme-based event decoration.",
    },
    {
      question: "Do you provide fireworks and special effects?",
      answer:
        "Yes, we provide Sparkular, Fireworks, CO₂ Jet, Dry Ice, Bubble Machine, LED Effects and many more.",
    },
    {
      question: "How much does an event cost?",
      answer:
        "The cost depends on the event type, decoration theme and services you choose. Contact us for a customized quotation.",
    },
  ];

  return (
    <section className="faq">

      <div className="faq-title">

        <h4>FAQ</h4>

        <h2>Frequently Asked Questions</h2>

      </div>

      <div className="faq-container">

        {faqData.map((item, index) => (

          <div
            key={index}
            className="faq-item"
          >

            <div
              className="faq-question"
              onClick={() => setOpen(open === index ? -1 : index)}
            >

              <h3>{item.question}</h3>

              <span>{open === index ? "-" : "+"}</span>

            </div>

            {open === index && (

              <div className="faq-answer">

                <p>{item.answer}</p>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;