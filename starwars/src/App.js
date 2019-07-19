import React from 'react';
import './App.css';
import StarWars from "./components/StarWars.js";
import styled from 'styled-components';

const Header = styled.div`
  background-color:	#4D2113;
  font-size: 3em;
`;

const App = () => {

  return (
    <div className="App">
      <Header className="Header">React Wars</Header>
      <section>
        <StarWars limit={10} />
      </section>
    </div>
  );
}

export default App;
