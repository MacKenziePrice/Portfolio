import React from 'react';

import thumbnail from '../../public/images/checkers-green.png';

const Projects = () => (
  <div className="projects project-vh">
    <h1 className="section__title">PROJECTS</h1>
    <div className="project">
      <img className="project__image" src={thumbnail}/>
      <div className="project__info">
        <h1 className="project__title">OUTSIDER SIGNAL</h1>
        <h2 className="project__subtitle">Parkour Apparel Brand</h2>
        <p className="project__description">Outsider Signal is my own vision for an American parkour brand. After watching a compilation on YouTube many years ago, I have been training the sport as an amateur ever since. It's in very early stage development, and the website just launched in November 2019.</p>
        <p className="project__description">The site is built with Node, utilizing Express, Handlebars, and MongoDB. It features a custom e-commerce system, relying on Stripe as the only major third-party dependency.</p>
        <a className="project__url" href="https://www.outsidersignal.com"><b>outsidersignal.com</b></a>
      </div>
    </div>
  </div>
);

export default Projects;