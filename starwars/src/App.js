import React from 'react';
import './App.css';
import StarWars from "./components/StarWars.js";
import styled from 'styled-components';



const App = () => {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <section>
        <StarWars limit={10} />
      </section>
    </div>
  );
}

export default App;
