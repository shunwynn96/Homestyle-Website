import React from 'react'
import '../styles/itemcard.css'

function ItemCard(props) {
  return(
    <div className="item-card">
      <img className="item-card-img" src={props.image} alt="food-img"></img>
      <div className="item-card-details">
        <div className="details-1">
          <h4 className="item-card-title">{props.title}</h4>
        </div>
        <div className="details-2">
          <p className="item-card-price">RM {props.price}</p>
          {/* <button type="button" className="item-card-button btn btn-outline-dark btn-sm"> Add to Cart</button> */}
        </div>
      </div>
    </div>
  )
}

export default ItemCard

