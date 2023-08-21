import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header-socials">
      <a href="http://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="http://instagram.com" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
