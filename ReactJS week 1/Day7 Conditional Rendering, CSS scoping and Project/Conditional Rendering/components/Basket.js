import React from "react";
import "./Basket.css";
const Basket = ({ basketNumber, appleQuantity }) => {
  // let resultLogic;
  // if (appleQuantity === 10) {
  //   resultLogic = "full";
  // } else {
  //   resultLogic = "empty";
  // }

  return (
    <div className="basket-div">
      <h3>This is Basket {basketNumber}</h3>
      <br />
      <h2>{appleQuantity} apples</h2>
      {/* Conditional rendering by logic inside JSX */}
      <h3>{appleQuantity === 10 && "full"} {appleQuantity === 0 && "empty"}</h3> 
      {/* Conditional rendering using outside logic */}
      {/* <h3>{resultLogic}</h3>  */}
    </div>
  );
};

export default Basket;
