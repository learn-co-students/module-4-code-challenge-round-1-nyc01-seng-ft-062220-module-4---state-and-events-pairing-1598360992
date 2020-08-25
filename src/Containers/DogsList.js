import React, { Component } from "react";
import DogCard from '../Components/DogCard.js'
import {apiResponse} from '../api.js'

class DogList extends Component {

  createDogCards = () => {
    const dogArray = []
    for (const dog of apiResponse) {
      dogArray.push(
        <DogCard 
          key = {dog.id}
          name= {dog.name}
          image = {dog.img} 
          breed = {dog.breed}
        />
      )
    }
    return dogArray
  } 

  render() {
    return <div className="dogContainer">{this.createDogCards()}</div>;
  }
}

export default DogList;
