import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-bg navbar-dark">  
        <Link className="navbar-brand text" to="/">
          <span>
            <img className="nav-logo-img" src="./images/logo.jpg" alt="Logo"></img>
          </span> Homestyle
        </Link>

        <button
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarToggler" 
          aria-controls="navbarToggler" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"> 
            <Link className="nav-link" to="/about" >About</Link>  
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/menu" >Menu</Link>    
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us" >Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar