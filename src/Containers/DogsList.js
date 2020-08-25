import React, { Component } from "react";
import DogCard from '../Components/DogCard.js' 
import {apiResponse} from '../api.js'  

class DogList extends Component {
  generateDogs = () => {
    return apiResponse.map((dog, index) => <DogCard
      key={index}
      name = {dog.name}
      img = {dog.img}
      breed = {dog.breed}
      />
    )
  }

  render() {
    console.log(apiResponse)
    return <div className="dogContainer">{this.generateDogs()}</div>;
  }
}

export default DogList;
