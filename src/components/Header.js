import React from 'react';
import { Link } from 'react-scroll';

import logo from '../../public/images/foxo5.png';

const Header = () => (
  <header>
    <Link
        activeClass="active"
        duration={500}
        smooth={true}
        spy={true}
        to="projects"
      >
      <img className="logo" src={logo}/>
    </Link>
    <div className="hamburger" id="js-hamburger">
      <span className="hamburger__stack"></span>
      <span className="hamburger__stack"></span>
      <span className="hamburger__stack"></span>
    </div>
    <ul className="main-menu" id="js-main-menu">
      <Link
        activeClass="active"
        duration={500}
        smooth={true}
        spy={true}
        to="projects"
      >
        <li className="main-menu__item">PROJECTS</li>
      </Link>
      <Link
        activeClass="active"
        duration={500}
        smooth={true}
        spy={true}
        to="about"
      >
        <li className="main-menu__item">ABOUT</li>
      </Link>
    </ul>
  </header>
);

export default Header;