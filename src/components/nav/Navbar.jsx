import React, { useState } from 'react';
import './nav.css'; // Make sure you have the appropriate CSS file for styling
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home'); // Initialize activeNav with '#'

  return (
    <nav>
      {/* Home */}
      <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>

      {/* About */}
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>

      {/* Experience */}
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>

      {/* Services */}
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>

      {/* Contact */}
      <a
       href="#contact-us"
       onClick={() => setActiveNav('#contact-us')}
       className={activeNav === '#contact-us' ? 'active' : ''}
        >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;
