import React from "./react";
import {render} from './react-dom'

// console.log(render())



function Card(props) {
    console.log(props)
    return (
        <div>
            <h1>My Card</h1>
            {props.children}
        </div>
    )
}


const root = document.querySelector("#root")
const h1 = <div id="heading" title="my Heading">{"Hello"} <b>Bold one</b></div>
render([h1,<div>{["index1","index2","index3"]}</div> ,"Haider Haider"], root);
render(<Card name="Fuzail" id="1234">{["child1","child1","child1"]}</Card>,root)
