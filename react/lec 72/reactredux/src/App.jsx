import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { reset, incrementByAmount, decrement, increment } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('');
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncrementAmountClick() {
    if (!isNaN(amount) && amount !== '') {
      dispatch(incrementByAmount(Number(amount)));
    }
  }

  return (
    <div className='container'>
      <button onClick={handleIncrementClick}> + </button>
      <p>Count: {count} </p>
      <button onClick={handleDecrementClick}> - </button>
      <br /> <br />
      <button onClick={handleResetClick}> Reset </button>
      <br /><br />
      <input 
        type="number" 
        value={amount} 
        placeholder='Enter amount' 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <button onClick={handleIncrementAmountClick}> Increment by Value </button>
      <br /><br />
    </div>
  );
}

export default App;
