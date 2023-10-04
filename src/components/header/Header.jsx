import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tribuwan Kumar</h1>
        <h5 className="text-light BLD">MERN STACK developer, YouTuber</h5>
        <span className="exp">Work experience:- Intern at "Headway Vision" (May(22) - current)</span>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="ME" className="meimg"  style={{height:"18rem", width:"17rem"}}/>
        </div>

        <a href="#contact-us" className="scrol__down">
          Scrol Down
        </a>
      </div>
    </header>
  );
};

export default Header;
