import React from 'react';
import './App.css';
import StarWars from "./components/StarWars.js";

const App = () => {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <section>
        <b>Build a card list here!</b>
        <StarWars limit={10} />
      </section>
    </div>
  );
}

export default App;
