import React from "react";
import styled from 'styled-components';

const CardStyle = styled.div`
    border: 0.5em solid #4D2113;
    padding: 0.5em;
    margin: 1em;
    display: flex;
    justify-content: center;
    width: 20em;
    height: 10em;
    border-radius: 1em;
`;

const Card = props => { 
    console.log("in element", props);
    return (
        <CardStyle>
            <div>
                <h1>
                    {props.characters.name}
                </h1> 
                <div>
                    <img src={props.characters.url}/>
                </div>
                <p>Height: {props.characters.height}</p>
            </div>
        </CardStyle>
    );
}

export default Card