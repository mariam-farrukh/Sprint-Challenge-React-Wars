import React from "react";
import styled from 'styled-components';

const CardStyle = styled.div`
    border: 0.25em solid #F5AF47;
    padding: 0.5em;
    margin: 1em;
    display: flex;
    justify-content: center;
    width: 20em;
    height: 10em;
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
                    <img src={props.characters.url}/>
                </div>
                <p>Height: {props.characters.height}</p>
            </div>
        </CardStyle>
    );
}

export default Card