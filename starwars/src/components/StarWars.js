import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.js"
import styled from 'styled-components';

const CardBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content:center;
`;

const StarWars = () => {
    const [charactersAll, setCharactersAll] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
          console.log("res", res);
          setCharactersAll(res.data.results);
        })
        .catch(err => console.log("This is not working!"));
    }, []);
  
    return (
        <div>
        <h1>Participants</h1>
            <CardBox>
                
                {charactersAll.map(characters => (
                <Card characters={characters}/>
                ))}
            </CardBox>
      </div>
    );
  }
  
export default StarWars;