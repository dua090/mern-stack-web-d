import { useState,useMemo } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensivetask(input){
    console.log("inside expensive task")
    for(let i=0;i<1000000000;i++){}
    return input*2;
  }
let doublevalue =useMemo(() =>expensivetask(input), [input])

  return (
    <div>
     <button onClick={() => setCount(count + 1)}>Increment</button>
     <p>Count: {count}</p>
     
     <input type="number" 
     placeholder='enter number'
     value={input}
     onChange={(e)=>setInput(e.target.value)}
     />
     <p>Double Value: {doublevalue}</p>
    </div>
  )
}

export default App
