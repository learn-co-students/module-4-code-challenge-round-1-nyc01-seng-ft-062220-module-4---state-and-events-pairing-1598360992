import React from "react";


function DogCard(props) {
  return (
    <div>
      <h2 >{props.name}</h2>
      <img alt="" src={props.img} />
      <button onClick={woof} className="bark">Bark</button>
    </div>
  );
}

export default DogCard;
