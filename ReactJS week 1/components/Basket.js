import React from 'react'
import "./Basket.css"
const Basket = ({basketNumber, appleQuantity}) => {
  return (
    <div className='basket-div'>
      <h3>This is Basket {basketNumber}</h3>
        <br />
      <h2>{appleQuantity} apples</h2>
    </div>
  )
}

export default Basket
