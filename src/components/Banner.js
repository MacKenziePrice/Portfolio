import React from 'react';
import { Link } from 'react-scroll';

const Banner = () => (
  <div className="banner banner-vh">
    <Link
        activeClass="active"
        duration={500}
        smooth={true}
        spy={true}
        to="projects"
      >
        <a className="banner__button">View Work</a>
      </Link>
  </div>
);

export default Banner;