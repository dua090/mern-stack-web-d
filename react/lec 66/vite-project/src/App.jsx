import { useState } from 'react'
import './App.css'
import Login from './Components/Login';
import Logout from './Components/Logout';

function App() {
const[isLoggedIN,setLoggedIN]=useState(false);
if(!isLoggedIN){
  return(
    <div> <div>fdngdihn</div>
      <Login /></div>
    
  )

}

// if (isLoggedIN) {
//   return(

//   <Logout />
//   )
// }else{
//   return(
//     <Login />
//   )
// }
// ternory
// return(
//   <div>
//     {isLoggedIN?<Logout/>:<Login/>}
//   </div>
// )
//logical operator
return(
  <div>
    <h1>Hor bhai kya chaal</h1>
    <div>
      {isLoggedIN&&<Logout/>}
    </div>
  </div>
)
}

export default App
