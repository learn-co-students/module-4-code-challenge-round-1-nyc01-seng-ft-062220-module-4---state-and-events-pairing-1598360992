import React, { Component } from "react";

class DogCard extends Component {

state = {text: "Ruff"}
  // clickHandler =()=>{

  //   console.log("clicked")
  // }
  clickHandler =()=>{  
    
   }

  // const buttonToggle = {
  //    if (clickHandler){
  //     <h2></h2>
  //    }
  // }
  render() {
  return (

    <div>
      <h2 >{this.props.dogName}</h2>
      <img alt="" src={this.props.dogImage} />
      <button onClick={this.clickHandler} className="bark">Bark</button>
    </div>
  );
  }
}

export default DogCard;
