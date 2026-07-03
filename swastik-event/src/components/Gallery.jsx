<section className="gallery" data-aos="fade-up"></section>
import "./Gallery.css";

import gallery1 from "../assets/images/gallery1.png";
import gallery2 from "../assets/images/gallery2.png";
import gallery3 from "../assets/images/gallery3.png";
import gallery4 from "../assets/images/gallery4.png";
import gallery5 from "../assets/images/gallery5.png";
import gallery6 from "../assets/images/gallery6.png";

function Gallery() {

  return (

    <section className="gallery">

      <div className="gallery-title">

        <h4>OUR GALLERY</h4>

        <h2>Our Memorable Events</h2>

        <p>
          Take a look at some of our beautiful decorations and unforgettable celebrations.
        </p>

      </div>

      <div className="gallery-container">

        <div className="gallery-card">
          <img src={gallery1} alt="Wedding" />
        </div>

        <div className="gallery-card">
          <img src={gallery2} alt="Birthday" />
        </div>

        <div className="gallery-card">
          <img src={gallery3} alt="Fireworks" />
        </div>

        <div className="gallery-card">
          <img src={gallery4} alt="Decoration" />
        </div>

        <div className="gallery-card">
          <img src={gallery5} alt="Car Decoration" />
        </div>

        <div className="gallery-card">
          <img src={gallery6} alt="DJ Event" />
        </div>

      </div>

    </section>

  );
}

export default Gallery;