import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
    const[count,setCount]=useState(0);
    // count++;
  return (
    <div className='Counter-Container'>
        <p id='para'>You have clicked {count} times</p>
        <button id='button' onClick={()=>{setCount(count+1)}}>Click me!</button>
    </div>
  )
}

export default Counter