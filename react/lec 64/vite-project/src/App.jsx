import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons';
import Card from './components/card'
function App() {
  const [count,setCount]=useState(0);
  function handleclick(){
    setCount(count+1);
  }
  return (
    <div>
      <Buttons handleclick={handleclick} text="clickme">
<h1>{count}</h1>
      </Buttons>
      {/* <Card name="manu dua">
      <h1>Best person in the worls </h1>
      <p> try to connect with him </p>
      <p>he will be succesful more one day</p>
      </Card>
      <Card children="Main hu ek udta robot">
        {/* kaise hoo */}
      {/* </Card>  */}
      
          </div>
  )
}

export default App
