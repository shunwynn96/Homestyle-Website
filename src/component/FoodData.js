import React, { useEffect, useState } from 'react'

import '../styles/itemcard.css'
import { client } from './client'
import ItemCard from './ItemCard'

function FoodData() {
  const [ food, setFood ] = useState([])

  useEffect(() => {
    client.getEntries({ content_type: 'food' })
    .then((response) => {
      setFood(response.items)
    })
    .catch((error) => {
      console.log('Something went wrong with food client')
    })
  },[])

  return (
    <div>
      <p id="platter" className="food-catagory-first-title">Platters</p>
      <div className="item-card-container">  
        {food.map((item) => {
          if(item.fields.foodCatagory === "Platter") {
            return (
              <ItemCard 
                key={item.sys.id}
                id={item.sys.id}
                catagory={item.fields.foodCatagory}
                itemCode={item.fields.itemCode}
                price={item.fields.price}
                title={item.fields.title}
                image={item.fields.thumbnail.fields.file.url}
              />
            )
          }
        })}
      </div>

        <p id="sandwich" className="achor-link-offset"></p>
        <p className="food-catagory-title">Sandwiches</p>
        <div className="item-card-container">
          {food.map((item) => {
            if(item.fields.foodCatagory === "Sandwich") {
              return (
              <ItemCard 
                key={item.sys.id}
                id={item.sys.id}
                catagory={item.fields.foodCatagory}
                itemCode={item.fields.itemCode}
                price={item.fields.price}
                title={item.fields.title}
                image={item.fields.thumbnail.fields.file.url}
              />
              )
            }
          })}
        </div>

        {/* <p id="eggToast" className="achor-link-offset"></p>
        <p className="food-catagory-title">Egg & Toast</p>
        <div className="item-card-container">
          
        </div> */}
        
        <p id="soup" className="achor-link-offset"></p>
        <p className="food-catagory-title">Soup</p>
        <div  className="item-card-container">
          {food.map((item) => {
            if(item.fields.foodCatagory === "Soup") {
              return (
              <ItemCard 
                key={item.sys.id}
                id={item.sys.id}
                catagory={item.fields.foodCatagory}
                itemCode={item.fields.itemCode}
                price={item.fields.price}
                title={item.fields.title}
                image={item.fields.thumbnail.fields.file.url}
              />
              )
            }
          })}
        </div>

        {/* <p className="food-catagory-title">Burgers</p>
        <div id="burger" className="item-card-container">
          {food.map((item) => {
            if(item.fields.foodCatagory === "Burger") {
              return (
              <ItemCard 
                key={item.sys.id}
                id={item.sys.id}
                catagory={item.fields.foodCatagory}
                itemCode={item.fields.itemCode}
                price={item.fields.price}
                title={item.fields.title}
                image={item.fields.thumbnail.fields.file.url}
              />
              )
            }
          })}
        </div> */}
        
        <p id="noodle" className="achor-link-offset"></p>
        <p className="food-catagory-title">Noodles</p>
        <div className="item-card-container">
          {food.map((item) => {
            if(item.fields.foodCatagory === "Noodle") {
              return (
              <ItemCard 
                key={item.sys.id}
                id={item.sys.id}
                catagory={item.fields.foodCatagory}
                itemCode={item.fields.itemCode}
                price={item.fields.price}
                title={item.fields.title}
                image={item.fields.thumbnail.fields.file.url}
              />
              )
            }
          })}
        </div>
        
        <p id="rice" className="achor-link-offset"></p>
        <p className="food-catagory-title">Rice</p>
        <div className="item-card-container">
          {food.map((item) => {
            if(item.fields.foodCatagory === "Rice") {
              return (
              <ItemCard 
                key={item.sys.id}
                id={item.sys.id}
                catagory={item.fields.foodCatagory}
                itemCode={item.fields.itemCode}
                price={item.fields.price}
                title={item.fields.title}
                image={item.fields.thumbnail.fields.file.url}
              />
              )
            }
          })}
        </div>
        
        <p id="pasta" className="achor-link-offset"></p>
        <p className="food-catagory-title">Pasta</p>
        <div className="item-card-container">
          {food.map((item) => {
            if(item.fields.foodCatagory === "Pasta") {
              return (
              <ItemCard 
                key={item.sys.id}
                id={item.sys.id}
                catagory={item.fields.foodCatagory}
                itemCode={item.fields.itemCode}
                price={item.fields.price}
                title={item.fields.title}
                image={item.fields.thumbnail.fields.file.url}
              />
              )
            }
          })}
        </div>

        <p id="western" className="achor-link-offset"></p>
        <p className="food-catagory-title">Western Delights</p>
        <div className="item-card-container">
          {food.map((item) => {
            if(item.fields.foodCatagory === "Western") {
              return (
              <ItemCard 
                key={item.sys.id}
                id={item.sys.id}
                catagory={item.fields.foodCatagory}
                itemCode={item.fields.itemCode}
                price={item.fields.price}
                title={item.fields.title}
                image={item.fields.thumbnail.fields.file.url}
              />
              )
            }
          })}
        </div>
        
        {/* <p id="fingerFood" className="achor-link-offset"></p>
        <p className="food-catagory-title">Finger Food</p>
        <div className="item-card-container">
          {food.map((item) => {
            if(item.fields.foodCatagory === "Finger Food") {
              return (
              <ItemCard 
                key={item.sys.id}
                id={item.sys.id}
                catagory={item.fields.foodCatagory}
                itemCode={item.fields.itemCode}
                price={item.fields.price}
                title={item.fields.title}
                image={item.fields.thumbnail.fields.file.url}
              />
              )
            }
          })}
        </div> */}

    </div>
  )
}

export default FoodData