import React from "react";
import styled from 'styled-components';

const CardStyle = styled.div`
    border: 0.25em solid #F5AF47;
    padding: 0.5em;
    margin: 1em;
    display: flex;
    justify-content: center;
    width: 20em;
    height: auto;
    border-radius: 1em;
    background: rgba(205, 178, 148, 0.5);
`;

const Header1 = styled.h1`
    text-shadow: 1px 1px 5px #fff;
`;

const Card = props => { 
    console.log("in element", props);
    return (
        <CardStyle>
            <div>
                <Header1>
                    {props.characters.name}
                </Header1> 
                <div>
                    <p>Gender: {props.characters.gender}</p>
                    <p>Eye Color: {props.characters.eye_color}</p>
                    <p>Height: {props.characters.height}</p>
                    <p>Weight: {props.characters.mass}</p>
                </div>
            </div>
        </CardStyle>
    );
}

export default Card