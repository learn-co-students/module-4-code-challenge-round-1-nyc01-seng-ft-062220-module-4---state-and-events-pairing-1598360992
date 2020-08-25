import React, { Component } from "react";
import "./App.css";
import DogsList from "./Containers/DogsList"
import FavoriteList from "./Containers/FavoriteList"

class App extends Component {

  state = { dogs: [] }

  appClickHandler = (dogObj) => {
    let newArray = this.state.dogs.concat(dogObj)
    this.setState({dogs: newArray})
  }

  render() {
    return (
      <>
        <DogsList appClickHandler={this.appClickHandler}/>
        <FavoriteList dogs={this.state.dogs} />
      </>
    )
  }
}

export default App;
