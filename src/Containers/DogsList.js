import React, { Component } from "react";
import {apiResponse} from '../api.js'
import DogCard from "../Components/DogCard"

class DogList extends Component {


    renderDogs = () => {
      return (
        apiResponse.map((dog, index) => <DogCard dogInfo = {dog} key={index} />)
      )
    }



  render() {

  
    return <div className="dogContainer">{this.renderDogs()}</div>;
  }
}

export default DogList;


