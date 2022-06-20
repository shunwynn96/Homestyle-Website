import React from 'react'

import '../styles/mobileLayoutMenu.css'

import NavBar from './NavBar'
import MenuList from './MenuList'
import Footer from './Footer'

function MobileLayoutMenu() {
  return (
    <div>
      <section id="mobile-menu__navbar">
        <NavBar />
      </section>
      <div className="dropdown mobile-menu__dropdown">
        <span 
          className="btn btn-secondary dropdown-toggle mobile-menu__dropdown-btn" 
          role="button" 
          id="dropdownMenuLink" 
          data-bs-toggle="dropdown" 
          aria-expanded="false"
          >
          Homestyle Menu
        </span>
        <ul className="dropdown-menu mobile-menu__dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a href="#platters" className="dropdown-item" aria-current="page">Platters</a></li>
          <li><a href="#sandwich" className="dropdown-item">Sandwiches</a></li>
          {/* <li><a href="#eggToast" className="dropdown-item">Egg & Toast</a></li> */}
          <li><a href="#soup" className="dropdown-item">Soup</a></li>
          <li><a href="#noodle" className="dropdown-item">Noodles</a></li>
          <li><a href="#rice" className="dropdown-item">Rice</a></li>
          <li><a href="#pasta" className="dropdown-item">Pasta</a></li>
          <li><a href="#western" className="dropdown-item">Western Delights</a></li>
          {/* <li><a href="#fingerFood" className="dropdown-item">Finger Food</a></li> */}
          <li><a href="#drink" className="dropdown-item">Drinks</a></li>
        </ul>
      </div>

        <div className="row container-fluid mobile-menu__container">
          <MenuList />
        </div>
      <Footer />
    </div>
  )
}

export default MobileLayoutMenu

