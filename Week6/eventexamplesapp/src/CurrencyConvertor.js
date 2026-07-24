import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('Euro');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default page reload
    const convertedAmount = amount * 80; 
    alert(`Converting to ${currency} Amount is ${convertedAmount}`);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '80px' }}>Amount:</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '80px', verticalAlign: 'top' }}>Currency:</label>
          <textarea 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)} 
            rows="2"
          />
        </div>
        <button type="submit" style={{ marginLeft: '85px' }}>Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;