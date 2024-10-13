import React, { useState,Fragment } from "react";
import "./AppleCounter.css";
import Button from "./Button";
import Basket from "./Basket";
import LeftArrow from "../assets/images/arrow-left-line.png";
import RightArrow from "../assets/images/arrow-right-line.png";
import Counter from "./Counter";
import { Fragment } from "react";


const AppleCounter = () => {
    const leftClickHandler = () => {
        if(leftAppleCount >= 0 && rightAppleCount > 0){
          setLeftAppleCount(leftAppleCount + 1);
          setRightAppleCount(rightAppleCount - 1);
        }
      };
    
      const rightClickHandler = () => {
        if(leftAppleCount > 0){
          setLeftAppleCount(leftAppleCount - 1);
          setRightAppleCount(rightAppleCount + 1);
        }
      };
    const [rightAppleCount,setRightAppleCount] = React.useState(0);
    const [leftAppleCount, setLeftAppleCount] = React.useState(10);
  
    return (
    <Fragment>
      <div className="app-div">
      <Counter />
      <Basket basketNumber={1} appleQuantity={leftAppleCount} />
      <Button
        imageAddress={LeftArrow}
        buttonTitle="Left Arrow"
        onClick={leftClickHandler}
      > Left Arrow</Button>
      <Button
        imageAddress={RightArrow}
        buttonTitle="Right Arrow"
        onClick={rightClickHandler}
      >Right Arrow</Button>
      <Basket basketNumber={2} appleQuantity={rightAppleCount} />
      </div>
    </Fragment>
  )
}

export default AppleCounter
