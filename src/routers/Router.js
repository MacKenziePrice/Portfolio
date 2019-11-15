import React from 'react';

import About from '../components/About';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const Router = () => ( 
   <div>
      <Header/>
      <Banner/>
      <Projects/>
      <About/>
      <Footer/>
   </div>
 );

export default Router;