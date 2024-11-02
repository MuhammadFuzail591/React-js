import React, { useState } from "./react";
import { render } from './react-dom'

function App() {

  const [count, setCount] = useState(10)
  const [count2, setCount2] = useState(10)
  // const count = 10
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center", userSelect: "none", cursor: "pointer" }} onclick={() => {
        setCount(count + 1)
      }}>{count}</h1>
      <h1 style={{ color: "red", textAlign: "center", userSelect: "none", cursor: "pointer" }} onclick={() => {
        setCount2(count2 + 1)
      }}>{count2}</h1>
    </div>

  )
}

render(<App />, document.getElementById('root'))
export default App