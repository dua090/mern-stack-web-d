import UserCard from "./components/UserCard"
import './App.css'
import manu1 from './assets/manu1.jpg'
import manu2 from './assets/manu2.jpg'
import manu3 from'./assets/manu3.jpg'
function App() {
  

  return (
    <>
    <div className="container">
      <UserCard name="manudua" desc="manu kesa h" img={manu1} style={{"border-radius":"20px"}}/>
      <UserCard name="mnnudua" desc="manu to bdiya" img={manu2} style={{"border-radius":"20px"}}/>
      <UserCard name="mehakdua" desc="mehak kesa h" img={manu3} style={{"border-radius":"20px"}}/>
    </div>
      
    </>
  )
}

export default App
