import { useCallback,useState} from 'react'
// import ChildComponent from './components/ChildComponent'
import './App.css'
import ExpensiveComponent from './components/ExpensiveComponent';


function App() {
  const [count, setCount] = useState(0);

const handleclick= useCallback(()=>{
  setCount(count+1)
},[count]);
  return (

   <div>
    <div>
      <ExpensiveComponent />
    </div>
    {/* <div>
      count :{count}
    </div><br />
    <div>
      <button onClick={handleclick}>Increment</button>
    </div><br /><br />
    <div>
      <ChildComponent buttonName='Click me'
      handleclick={handleclick}
      />
    </div> */}
   </div>
  )
}

export default App
