import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adove PhotoShop</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adove XD</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Canva</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Logo Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Poster making</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>X</p>
            </li>
          </ul>
        </article>
        {/* End Of UI/UX  */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Dynamic Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Static Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SingalPage Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Multipage Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-Commarce Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Shopify development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Resturent Website</p>
            </li>
          </ul>
        </article>
        {/* End Of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Content For youtube</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content For youtube</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Not Avilable</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Not Avilable</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Not Avilable</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Not Avilable</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Not Avilable</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Not Avilable</p>
            </li>
          </ul>
        </article>
        {/* End Of Content Creation  */}
      </div>
    </section>
  );
};

export default Services;
