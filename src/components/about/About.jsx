import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";
const About = () => {
  return (
    <section id="about">
      <h5>Get TO Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="ME" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>50+ worldWide</small>
            </article>

            <article className="about__card">
              <BsFolderCheck className="about_icon" />
              <h5>Project </h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            ducimus, rem atque, eligendi ut repellendus temporibus tempore
            reprehenderit accusamus reiciendis ex minima rerum obcaecati beatae
            at ullam voluptatibus, magnam voluptatum!
          </p>
          <a href="#contact-us" id="contact" className="btn btn-primary"> Let's Talk </a>
        </div>
      </div>
    </section>
  );
};

export default About;
