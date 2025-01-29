import React, { useState } from 'react'; // Import useState
import Card from './components/Card';

import './App.css';

function App() {
  // Create state
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  return (
    <div> 
      {/* Pass the state and the setter function to the Card component */}
      <Card name={name} setName={setName} />
      <Card title="card2 " name={title} setName={setTitle} />
      <Card name={name} setName={setName} />

      <p>i am inside the parent component and value of name is {name} </p>
    </div>
  );
}

export default App;
