import React, { useState } from 'react'

const Counter = () => {
    
    // console.log(useState())
  const [count, setCount] = useState(0);

    return (
    <div>
      <h1 style={{textAlign: 'center', color: 'red'}}>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Increase Counter</button>
    </div>
  )
}

export default Counter
