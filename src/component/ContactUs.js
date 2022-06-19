import React from 'react';

import '../styles/contactUs.css';

import NavBar from './NavBar';
import Footer from './Footer';


function ContactUs() {
  return (
    <div>
      <NavBar />
      <div className="contactUs-container">
        <div className="contactUs-number">
          <h2>Phone Numbers</h2>
          <p>012-426-3355 (G E)</p>
          <p>012-402-6504 (Izan)</p>
          <p>012-457-2650 (K.Long)</p>
        </div>

        <div className="contactUs-email">
          <h2>Email</h2>
          <p><span className="fas fa-envelope"></span>&emsp;homestyle2u@gmail.com</p>
        </div>

        <div className="contactUs-socialMedia">
          <h2>Social Media</h2>
          <a 
            className="btn facebook-icon" 
            href="https://www.facebook.com/homestylekopitiam"
            target="_blank"
            rel="noreferrer">
            <span className="fab fa-facebook-f"></span>&emsp;Homestyle Kopitiam
          </a>
          <a 
            className="btn instagram-icon" 
            href="https://www.instagram.com/homestylekopitiam/?fbclid=IwAR34_oUIENlAfV0l55NN_q1am-DyhxpJQKwAHZG4ulCgWHpHrtVgkrqLvpI"
            target="_blank"
            rel="noreferrer">
            <span className="fab fa-instagram"></span>&ensp;@homestylekopitiam
          </a>
        </div>
        

      </div>
      
      <Footer />
    </div>
  )
}

export default ContactUs;