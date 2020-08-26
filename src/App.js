import React, { Component } from "react";
import DogsList from './Containers/DogsList'
import FavoriteContainer from './Containers/FavoriteContainer'


import "./App.css";


class App extends Component {
  

  state = {
    hasBeenClicked: false,
    dogs: []
  }



  clickHandler = (dogObj) => {
    
    this.setState({ 
      hasBeenClicked: !this.state.hasBeenClicked,
      dogs: [...this.state.dogs, dogObj]
    })
    
  }
  
  
  render() {
    return <>
    <DogsList clickHandler={this.clickHandler}/>
    <FavoriteContainer dogs={this.state.dogs}/>
    </>
    
  }
}

export default App;
