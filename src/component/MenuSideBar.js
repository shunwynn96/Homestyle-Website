import React from "react";
import '../styles/menuSideBar.css'

function MenuSideBar() {

  return (
    <div className="sidebar-container">
      <p className="text-dark fs-4 sidebar-title">Menu</p>
      <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
        <li><a href="#platters" className="nav-link link-dark sidebar-link" aria-current="page">Platters</a></li>
        <li><a href="#sandwich" className="nav-link link-dark sidebar-link">Sandwiches</a></li>
        {/* <li><a href="#eggToast" className="nav-link link-dark sidebar-link">Egg & Toast</a></li> */}
        <li><a href="#soup" className="nav-link link-dark sidebar-link">Soup</a></li>
        <li><a href="#noodle" className="nav-link link-dark sidebar-link">Noodles</a></li>
        <li><a href="#rice" className="nav-link link-dark sidebar-link">Rice</a></li>
        <li><a href="#pasta" className="nav-link link-dark sidebar-link">Pasta</a></li>
        <li><a href="#western" className="nav-link link-dark sidebar-link">Western Delights</a></li>
        {/* <li><a href="#fingerFood" className="nav-link link-dark sidebar-link">Finger Food</a></li> */}
        <li><a href="#drink" className="nav-link link-dark sidebar-link">Drinks</a></li>
      </ul>
    </div>
  );
}

export default MenuSideBar;

// d-flex flex-column flex-shrink-0 p-3 bg-light 