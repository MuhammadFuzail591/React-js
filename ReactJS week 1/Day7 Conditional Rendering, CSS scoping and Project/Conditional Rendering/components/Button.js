import React from 'react'
import styles from "./Button.module.css";
const Button = ({imageAddress, buttonTitle, onClick, children}) => {
  return (
    <button className={[styles.button, styles.text].join(" ")} title={buttonTitle} onClick={onClick}>
      {children}
      <img src={imageAddress} alt="Image"/>
    </button>
  )
}

export default Button
