import Process from "../components/Process";
import CallToAction from "../components/CallToAction";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";

import About from "../components/About";

import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";






function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Process />
      <CallToAction />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default Home;