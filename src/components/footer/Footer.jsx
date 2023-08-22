import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        Tribhuwan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com">
          <FaFacebookF />
        </a>
        <a href="http://instagram.com">
          <FaInstagram />
        </a>
        <a href="http://twitter.com">
          <FaTwitter />
        </a>
        <a href="http://youtube.com">
          <FaYoutube />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Tribhuwan Personal Portfolio 2023 All right reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
