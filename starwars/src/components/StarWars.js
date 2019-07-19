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

const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 1em;
`;

const Button = styled.button`
    padding: 0.5em;
    margin: 5px;
    border: 0.05em solid #402F23;
    border-radius: 1em;
    color: white;
    background-color: #998A79;
`;

const StarWars = () => {
    const [charactersAll, setCharactersAll] = useState([]);
    const [page, setPage] = useState(1)

    const Click = e => {
        console.log(page)
        e.target.value === 'next' ? setPage(page + 1) : setPage(page - 1)
      }
  
    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/?page=${page}`)
        .then(res => {
          console.log("res", res);
          setCharactersAll(res.data.results);
        })
        .catch(err => console.log("This is not working!"));
    }, [page]);
  
    return (
        <div>
            <ButtonDiv>
                <Button disabled={charactersAll.previous === null ? true : false} onClick={Click}value='previous'>Previous</Button>
                <Button disabled={charactersAll.next === null ? true : false} onClick={Click} value='next'>Next</Button>
            </ButtonDiv>
            <CardBox>
                
                {charactersAll.map(characters => (
                <Card characters={characters}/>
                ))}
            </CardBox>
        </div>
    );
  }
  
export default StarWars;