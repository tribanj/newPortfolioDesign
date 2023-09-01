import React from "react";
import Contact from "./components/contacts/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import vid from "../src/assets/bg.mp4";
const App = () => {
  return (
    <>
      <div className="app">
        <video autoPlay muted loop id="background-video">
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Your website content goes here */}
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
