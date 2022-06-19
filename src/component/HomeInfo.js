import React from 'react'
import '../styles/homeInfo.css'

function HomeInfo() {
  return(
    <section className="home-info">
      <h2>What's New?</h2>
      <div className="home-info-bg">
        <div className="home-info-container">
          <img className="info-img" src="./images/openHours.jpg" alt="opening hours img"/>
          <img className="info-img" src="./images/delivery.jpg" alt="delivery img"/>

          <div class="info-caption-img">
            <img className="info-img" src="./images/covidsafety.jpg" alt="delivery img"/>
            <h2 className="info-caption">All our staff are fully <span>vaccinated</span></h2>
          </div>
          <img className="info-img" src="./images/food.jpg" alt="delivery img"/>
          <img className="info-img-lg" src="./images/update.jpg" alt="img" />
          
        </div>
      </div>
    </section>
  )
}

export default HomeInfo