import React from 'react';

import '../styles/about.css';

import NavBar from './NavBar';
import HomeLocation from './HomeLocation';
import Footer from './Footer';


function About() {
  return (
    <div>
      <NavBar />
      <div className="about-container">
        <div className="about-content">
          <h1>About Homestyle</h1>
          <p>Homestyle Kopitiam is a family oriented modern kopitiam serving authentic local Malaysian cuisine</p>
          <HomeLocation />
        </div>
        
        
      </div>
      <Footer />
    </div>
  )
}

export default About;