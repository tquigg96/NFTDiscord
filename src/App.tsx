import React from 'react';
import logo from './images/mintcord_with_tagline.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo}  alt="Mintcord Logo" /> */}
        <h1>🌿 Mintcord</h1>
        <p> Mint NFTs without leaving discord</p>
        <a
          // className="App-link"
          href="https://mintcord.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="discord-button">Join the Wait</button>
        </a>
      </header>
    </div>
  );
}

export default App;
