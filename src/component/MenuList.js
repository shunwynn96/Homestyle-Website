import React from 'react'

import '../styles/menuList.css'
import FoodData from './FoodData'
import DrinkData from './DrinkData'

function MenuList() {
  return(
    <div className="menu-list__container">
      <FoodData />
      <DrinkData />
    </div>
  )
}

export default MenuList
