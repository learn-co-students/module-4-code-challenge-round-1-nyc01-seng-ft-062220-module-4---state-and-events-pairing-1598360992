import React, { Component } from "react";

class DogCard extends Component {

// state = {clicked: false}
  
  clickHandler =()=>{  
    this.props.dogClicks(this.props.dogObj) 
    //this sends the dogObj to dogClicks
    // let clicked = this.state.clicked
    // this.setState({clicked: !clicked}, () => console.log(vakas))
   }
  

  
  render() {
  //  console.log(this.props)
  return (

    <div>
      <h2 >{this.props.dogName}</h2>
      {/* {this.state.clicked ? <h2>Ruff</h2>: null } */}
      <img alt="" src={this.props.dogImage} />
      <button onClick={this.clickHandler} className="favorite">Favorite</button>
    </div>
  );
  }
}

export default DogCard;
