import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.js"

const StarWars = () => {
    const [charactersAll, setCharactersAll] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
          console.log("res", res);
          setCharactersAll(res.data.results);
        })
        .catch(err => console.log("That's not a planet, it's a space station!"));
    }, []);
  
    return (
      <div>
        <h1>Characters</h1>
        {charactersAll.map(characters => (
          <Card characters={characters} />
        ))}
      </div>
    );
  };
  
  export default StarWars;