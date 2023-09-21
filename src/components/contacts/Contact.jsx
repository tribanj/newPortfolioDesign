import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aryw26q",
        "template_wwtdc1l",
        form.current,
        "A454Mioe1Zr7nTb5v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Message Sent Successfully");
  };

  return (
    <section id="contact-us">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tribhuwanja@gmail.com</h5>
            <a
              href="mailto:tribhuwanja@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send me a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />

            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a
              href="http://m.me/profile.php?id=100051992145488"
              target="_blank"
              rel="noreferrer"
            >
              Send me a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Message here</h4>
            <h5>7700826056</h5>
            <a
              href="http://api.whatsapp.com/send?phone=7700826056"
              target="_blank"
              rel="noreferrer"
            >
              Send me a message
            </a>
          </article>
        </div>

        {/* End OF CONTACT OPTION  */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Write your message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
