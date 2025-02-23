import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const[time,setTime]=useState(0);
let timeRef =useRef(null);

  function startTimer(){
    timeRef.current =setInterval(() => {
      setTime(time=>time+1)
    }, 1000);

  }
  function stopTimer(){
    clearInterval(timeRef.current);
    timeRef.current=null;
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }
//   const [count, setCount] = useState(0);
//   let val = useRef(0);
// let btref=useRef();
//   function handleIncrement() {
//     val.current = val.current + 1;
//     console.log("Value of val is", val.current);
//     setCount(count + 1);
//   }

//   // Runs only on initial render
//   useEffect(() => {
//     console.log("Component mounted (first render)");
//   }, []);
// function changecolor(){
// btref.current.style.backgroundColor='red'
// }
  return (
    <div>
      {/* //stopwatch making */}
      <h1>stopwatch :{time} seconds </h1>
      
<button onClick={startTimer}> Start</button><br /><br />
<button onClick={stopTimer}> Stop</button><br /><br />
<button onClick={resetTimer}> Reset</button><br /><br />
      {/* <button ref={btref} onClick={handleIncrement}>Increment</button> <br />
      <button onClick={changecolor}>change color of first button</button><br />
      <div>
        <p>Count is {count}</p>
      </div> */}
    </div>
  );
}

export default App;
