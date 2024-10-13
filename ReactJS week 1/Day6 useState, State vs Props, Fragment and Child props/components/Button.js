import React from 'react'
import './Button.css'
const Button = ({imageAddress, buttonTitle, onClick, children}) => {
  return (
    <button title={buttonTitle} onClick={onClick}>
      {children}
      <img src={imageAddress} alt="Image"/>
    </button>
  )
}

export default Button
