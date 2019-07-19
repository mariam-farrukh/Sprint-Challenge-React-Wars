import React from "react";

const Card = props => { 
    console.log("in element", props);
    return (
      <div>
        {props.characters.url} {props.characters.name} {props.characters.height}
      </div>
    );
}

export default Card