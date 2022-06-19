import React from 'react'
import '../styles/homeCarousel.css'

function HomeCarousel() {
  return(
    <div className="container carousel-container">
      <div id="info-carousel" class="carousel slide" data-bs-ride="false" data-bs-interval="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#info-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#info-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="carousel-img" src="./images/update.jpg" alt="dog-img"/>
          </div>
          <div class="carousel-item">
            <img class="carousel-double-img" src="./images/openHours.jpg" alt="opening hours img"/>
            <img class="carousel-double-img" src="./images/delivery.jpg" alt="delivery img"/>
          </div>
        </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#info-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#info-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
    </div>
            
  )
}

export default HomeCarousel;