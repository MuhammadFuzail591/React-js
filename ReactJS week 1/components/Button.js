import React from 'react'
import './Button.css'
const Button = ({imageAddress, buttonTitle, onClick}) => {
  return (
    <button title={buttonTitle} onClick={onClick}>
      <img src={imageAddress} alt="Image"/>
    </button>
  )
}

export default Button
