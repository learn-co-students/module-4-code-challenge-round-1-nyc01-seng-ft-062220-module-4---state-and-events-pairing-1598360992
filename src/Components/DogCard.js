import React from "react";



function clickHandler () {
  console.log('clicked')
}


function DogCard(props) {


  

  console.log(props.dog)
  return (
    <div>
      <h2 >{props.dog.name}</h2>
      <img alt={props.dog.name} src={props.dog.img} />
      <button 
        className="bark"
        onClick={clickHandler}>Bark</button>
    </div>
  );
}

export default DogCard;
