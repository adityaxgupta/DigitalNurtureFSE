import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(5);

  // 1. Increment and invoke multiple methods
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    alert("Hello! Member1");
  };

  // 2. Decrement
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // 3. Pass an argument to an event handler
  const sayWelcome = (message) => {
    alert(message);
  };

  // 4. Handle a synthetic event
  const handleSyntheticEvent = (event) => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <p><b>{count}</b></p>
      <div>
        <button onClick={handleIncrement} style={{ display: 'block', marginBottom: '5px' }}>Increment</button>
        <button onClick={handleDecrement} style={{ display: 'block', marginBottom: '5px' }}>Decrement</button>
        <button onClick={() => sayWelcome("welcome")} style={{ display: 'block', marginBottom: '5px' }}>Say welcome</button>
        <button onClick={handleSyntheticEvent} style={{ display: 'block' }}>Click on me</button>
      </div>
      
      <CurrencyConvertor />
    </div>
  );
}

export default App;