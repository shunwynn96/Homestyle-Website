import React from 'react'

import '../styles/desktopLayoutMenu.css'

import NavBar from './NavBar'
import MenuSideBar from './MenuSideBar'
import MenuList from './MenuList'
import Footer from './Footer'


function DesktopLayoutMenu() {

  return(
    <div>
      <section id="desktop-menu__navbar">
        <NavBar />
      </section>

      <div className="menu-container">
        <MenuSideBar />
        <MenuList />
      </div>
      <Footer />
    </div>
  )
}

export default DesktopLayoutMenu