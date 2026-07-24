import React from 'react';
import { 
  players, 
  IndianPlayers, 
  ListofPlayers, 
  Scorebelow70, 
  OddPlayers, 
  EvenPlayers, 
  ListofIndianPlayers 
} from './CricketComponents';

function App() {
  // Toggle this flag to change the view (true or false)
  const flag = false;

  if (flag === true) {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Odd Players</h1>
        {OddPlayers(players)}
        <hr />
        <h1>Even Players</h1>
        {EvenPlayers(players)}
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers IndianPlayers={IndianPlayers} />
      </div>
    );
  }
}

export default App;