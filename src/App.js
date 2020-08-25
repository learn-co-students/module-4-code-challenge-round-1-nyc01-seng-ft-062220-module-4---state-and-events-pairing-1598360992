import React, { Component } from "react";
import "./App.css";
//add import statements
import DogsList from './Containers/DogsList.js'

class App extends Component {
  render() {
    return <DogsList />;
  }
}

export default App;
