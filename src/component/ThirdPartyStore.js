import React from 'react'
import '../styles/ThirdPartyStore.css'

function ThirdPartyStore() {
  return (
      <div className="container store-container">
        <div className="row">
          <h2 className="store-title">Delivery Options & Our Online Store</h2>
          <hr></hr>
          <div className="col-lg-4 store-box">
            <img className="grabfood-logo" src="./images/grabfoodlogo.jpg" alt="Grab Food Logo"></img>
            <a 
              className="btn btn-outline-success btn-lg store-btn"
              href="https://food.grab.com/my/en/restaurant/homestyle-kopitiam-taman-inderawasih-delivery/1-CZDYL6T1J2VZAT?ltclid="
              target="_blank"
              rel="noreferrer"
              >Homestyle Inderawasih
            </a>
            <a 
              className="btn btn-outline-success btn-lg store-btn" 
              href="https://food.grab.com/my/en/restaurant/homestyle-kopitiam-bandar-perda-delivery/1-CZDYL6T1RVLAFA?ltclid="
              target="_blank"
              rel="noreferrer"
              >Homestyle Perda
            </a>
            
          </div>
          
          <div className="col-lg-4 store-box">
            <img className="foodpanda-logo" src="./images/foodpandalogo.jpg" alt="Food Panda Logo"></img>
            <a 
              className="btn btn-outline-danger btn-lg store-btn foodpanda-btn"
              href="https://www.foodpanda.my/restaurant/r7xw/homestyle-inderawasih"
              target="_blank"
              rel="noreferrer"
              >Homestyle Inderawasih
            </a>
            <a 
              className="btn btn-outline-danger btn-lg store-btn foodpanda-btn"
              href="https://www.foodpanda.my/restaurant/r9xw/homestyle-bandar-perda"
              target="_blank"
              rel="noreferrer"
              >Homestyle Perda
            </a>
            
          </div>
          
          <div className="col-lg-4 store-box">
            <img className="shopee-logo" src="./images/shopeelogo.jpg" alt="Shopee Logo"></img>
            <a 
              className="btn btn-outline-light btn-lg store-btn shopee-btn"
              href="https://shopee.com.my/homestylekopitiam?ltclid="
              target="_blank"
              rel="noreferrer"
              >Visit Store
            </a>
          </div>
        </div>
      </div>
  )
}

export default ThirdPartyStore;