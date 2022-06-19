import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/home.css';

import ThirdPartyStore from './ThirdPartyStore';
import HomeInfo from './HomeInfo';
import Footer from './Footer';
import NavBar from './NavBar';

function Home() {
  return (
    <div>
      <NavBar />
      <div className="title-bg-img">
        <div className="title">
          <h1>Welcome to Homestyle. <span>We bring homecooked food to you.</span></h1>
        </div>
      </div>
      <ThirdPartyStore />
      <HomeInfo />
      <Footer />

    </div>
  );
}

export default Home;