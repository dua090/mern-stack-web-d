import React from 'react'
import { useNavigate } from 'react-router-dom'

const home = () => {
    const mnau=useNavigate();
        function handleclick(){
            manu('./About');
        }
    
  return (
    <div>home
         <button onClick={handleclick}>
            move toabout page
         </button>
    </div>
  )
}

export default home