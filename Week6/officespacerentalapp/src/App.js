import React from 'react';
import './App.css';

function App() {
  // 1. Create an element for the heading
  const element = "Office Space";
  
  // 2. Create an attribute to display the image using a placeholder office image
  const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80";
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;
  
  // 3. Create an object for office details
  const ItemName = { Name: "DBS", Rent: 50000, Address: 'Chennai' };

  // 4. Apply conditional CSS logic
  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={colors.join(' ')}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;