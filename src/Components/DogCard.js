import React, { Component } from "react";

class DogCard extends Component {

state = {clicked: false}
  // clickHandler =()=>{

  //   console.log("clicked")
  // }
  clickHandler =()=>{  
    let clicked = this.state.clicked
    this.setState({clicked: !clicked}, () => console.log(this.state))
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
      {this.state.clicked ? <h2>Ruff</h2>: null }
      <img alt="" src={this.props.dogImage} />
      <button onClick={this.clickHandler} className="bark">Bark</button>
    </div>
  );
  }
}

export default DogCard;
