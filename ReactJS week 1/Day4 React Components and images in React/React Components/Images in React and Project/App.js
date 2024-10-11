import React from 'react'
import './App.css'
import Button from './components/Button'
import Basket from "./components/Basket"
import LeftArrow from "./assets/images/arrow-left-line.png"
import RightArrow from "./assets/images/arrow-right-line.png"
import { useState } from 'react'

const App = () => {

  const [appleQuantity, setAppleQuantity] = useState(0)
  return (
    <div className="app-div">
        <Basket basketNumber={1} appleQuantity={appleQuantity} />
        <Button imageAddress={LeftArrow} buttonTitle="Left Arrow" />
        <Button imageAddress={RightArrow} buttonTitle="Right Arrow" />
        <Basket basketNumber={2} appleQuantity={appleQuantity} />
        
    </div>
  )
}

export default App
