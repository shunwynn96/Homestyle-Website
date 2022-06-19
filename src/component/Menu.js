import React, { useEffect, useState } from 'react'

import '../styles/menu.css'

import DesktopLayoutMenu from './DesktopLayoutMenu'
import MobileLayoutMenu from './MobileLayoutMenu'

// function debounce(fn, ms) {
//   let timer
//   return _ => {
//     clearTimeout(timer)
//     timer = setTimeout(_ => {
//       timer = null
//       fn.apply(this, arguments)
//     }, ms)
//   };
// }

function Menu() {

  const [ width, setWidth ] = useState(window.innerWidth)
  const breakpoint = 991
  
  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth)
    }
      window.addEventListener("resize", handleWindowResize)
      console.log(width)
      return () => window.removeEventListener("resize", handleWindowResize)
  })

  let layout = width < breakpoint ? <MobileLayoutMenu /> : <DesktopLayoutMenu />


  return(
    <div className="menu-bg">
      {layout}
    </div>
    
  )
}

export default Menu