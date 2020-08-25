import React, { Component } from "react";
import "./App.css";
import DogsList from "./Containers/DogsList"
import { apiResponse } from './api'

class App extends Component {
  render() {
    return <DogsList values={apiResponse}/>;
  }
}

export default App;
