import React from "react";
import {useCallback, useState } from "react";
const App = () => {
  const [count, setCount] = useState("I need to be updated from my child");
  const handleUpdate = useCallback((newMsg) => {
    setMessage(newMsg);
  }, []); // no dependencies = stable reference

  return (
    <div>
      <h1>update parent state challenge (usecallback)
      </h1>

      <h2>parent</h2>
      
    </div>
  );
};

export default App;