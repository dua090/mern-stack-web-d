import { useState } from 'react'
import './App.css'

function App() {
  function handleClick(){
  alert("i am click");
  }
  function onhover(){
    alert("tera mouse upr agya uske upr");

  }
  function onchanging(e){
    console.log("vehle lok km kum krlo",e.target.value);
  }
  function oyesubmitbhai(){
    alert("bhai submit ho gaya");
    e.preventDefault();
  }

  return (
   <div>
    <form onSubmit={oyesubmitbhai}>
      {/* <input type="text" onChange={onchanging}/> */}
      <input type="text" onChange={onchanging
      }/>
      <button type='submit'>Submit</button>

    </form>
{/* <p onMouseOver={onhover}
    style={{border:"1px solid black"}}>i am para sing </p>
{/* <button onClick={()=>{alert("hgfiu")}}>CLick me</button> 
<button
onClick={handleClick}
>click me</button>*/}
 </div>
  )
}

export default App
