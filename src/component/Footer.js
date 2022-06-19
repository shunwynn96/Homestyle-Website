import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

function Footer() {
  return(
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h2>Homestyle</h2>
          <p>012-426 3355 (G.E)</p>
          <p>012-402 6504 (Izan)</p>
          <p>012-457 2650 (K.Long)</p>
        </div>
        <div className="footer-explore">
          <h2>Explore</h2>
          <ul>
            <li className="footer-li"><Link className="footer-content-link" to="/about">About Us</Link></li>
            <li className="footer-li"><Link className="footer-content-link" to="/contact-us">Contact Us</Link></li>
            <li className="footer-li"><Link className="footer-content-link" to="/menu">Menu</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h2>Connect With Us</h2>
          <button className="btn social-icon" type="button"><span className="fab fa-twitter"></span></button>
          <a 
            className="btn social-icon" 
            href="https://www.facebook.com/homestylekopitiam"
            target="_blank"
            rel="noreferrer">
            <span className="fab fa-facebook-f"></span>
          </a>
          <a 
            className="btn social-icon" 
            href="https://www.instagram.com/homestylekopitiam/?fbclid=IwAR34_oUIENlAfV0l55NN_q1am-DyhxpJQKwAHZG4ulCgWHpHrtVgkrqLvpI"
            target="_blank"
            rel="noreferrer">
            <span className="fab fa-instagram"></span>
          </a>
          <button className="btn social-icon" type="button"><span className="fas fa-envelope"></span></button>
        </div>
      </div>

    </footer>
  )
}

export default Footer