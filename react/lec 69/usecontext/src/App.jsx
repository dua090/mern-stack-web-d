import React, { createContext, useState } from 'react';
import ChildA from './components/ChildA';
import './App.css';

// Step 1: Create context
const UserContext = createContext();
const ThemeContext=createContext();
function App() {
  const [user, setUser] = useState({ name: "manu" });
const[theme,setTheme]=useState('light');
  return (
    // Step 2 & 3: Wrap children inside the provider and pass a value
    <UserContext.Provider value={user}>
      {/* <ChildA /> */}
    
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>      
        <ChildA />
</div>
    </ThemeContext.Provider>
    </UserContext.Provider>


  );
}

export default App;
export { UserContext };
export{ThemeContext};
