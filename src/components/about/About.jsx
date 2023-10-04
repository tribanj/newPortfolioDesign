import React from "react";
import "./About.css";
import ME from "../../assets/me1.png";
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
            My name is Tribhuwan kumar. I am a student of B.tech Computer
            Science & Engineering. I am pursuing my b.tech degree from IKGPTU
            main campus Kapurthala. I am a final year student.I am an
            innovative, creative thinker
          </p>
          <a href="#contact-us" id="contact" className="btn btn-primary">
            {" "}
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
