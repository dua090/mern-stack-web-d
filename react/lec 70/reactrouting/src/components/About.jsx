import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate=useNavigate();
    function handleclick(){
        navigate("/dashboard");
    }
  return (
    <div>About
        <button onClick={handleclick}>
            mujhe nhi pata kidr jaunga
        </button>
    </div>
  )
}

export default About
