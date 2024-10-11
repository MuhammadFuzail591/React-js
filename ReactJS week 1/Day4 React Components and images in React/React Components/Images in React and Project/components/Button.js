import React from 'react'
import './Button.css'
const Button = ({imageAddress,buttonTitle}) => {
  return (
    <button title={buttonTitle}>
      <img src={imageAddress} alt="Image"/>
    </button>
  )
}

export default Button
