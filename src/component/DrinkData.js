import React, { useEffect, useState } from 'react'

import "../styles/itemcard.css"
import { client } from './client'
import ItemCard from './ItemCard'

function DrinkData() {
  const [ drinks, setDrink ] = useState([])
  useEffect(() => {
    client.getEntries({ content_type: 'drink' })
    .then((response) => {
      setDrink(response.items)
    })
    .catch((error) => {
      console.log('Something went wrong with drink data')
    })
  }, [])
  

  return (
    <div>
      <p id="drink" className="achor-link-offset">offset</p>
      <p className="food-catagory-title">Drinks</p>
      <div className="item-card-container">
        {drinks.map((item) => {
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
        })}
      </div>
    </div>
  )

}

export default DrinkData