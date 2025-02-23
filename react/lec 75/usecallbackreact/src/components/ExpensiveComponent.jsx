import React, { useState, useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
const previousFunction =useRef(null);
  // Memoizing the function that calculates the expensive value
  const expensiveCalculation = useCallback(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, [count]); // Recalculates only when `count` changes
  useEffect(() => {
    if(previousFunction.current){
if(previousFunction.current===expensiveCalculation){
    console.log("No recreation in function");
}
else{
    console.log("Function re-created");
    }
    }else{
        previousFunction.current=expensiveCalculation;
    }
  }, [expensiveCalculation])
  

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Expensive Calculation Result: {expensiveCalculation()}</p>
      <button onClick={() => setCount(count + 1)}>Increment button</button>
    </div>
  );
};

export default ExpensiveComponent;
