import React from 'react'
import "./CountriesListShimmer.css"
export default function CountriesListShimmer() {

    // const array = new Array(10).fill("");
    // console.log(array)

    // console.log(Array.from({length: 10}))
    

  return (
    <div className='countries-container'>
    {Array.from({length:100}).map((el, i) => {
        return <div key={i} className="shimmer-card"></div> 
    })}
      
    </div>
  )
}
