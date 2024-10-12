import React from "react";
import "./App.css";
import Button from "./components/Button";
import Basket from "./components/Basket";
import LeftArrow from "./assets/images/arrow-left-line.png";
import RightArrow from "./assets/images/arrow-right-line.png";
import { createRoot } from "react-dom/client";
import Counter from "./components/Counter";

const App = () => {
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
    <div className="app-div">

      <Counter />
      <Basket basketNumber={1} appleQuantity={leftAppleCount} />
      <Button
        imageAddress={LeftArrow}
        buttonTitle="Left Arrow"
        onClick={leftClickHandler}
      />
      <Button
        imageAddress={RightArrow}
        buttonTitle="Right Arrow"
        onClick={rightClickHandler}
      />
      <Basket basketNumber={2} appleQuantity={rightAppleCount} />
    </div>
  );
};

export default App;
