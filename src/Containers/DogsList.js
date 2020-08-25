import React, { Component } from "react";
import DogCard from '../Components/DogCard.js'
import {apiResponse} from '../api.js'

class DogList extends Component {

  createDogCards = () => {
    return (apiResponse.map((dog) => <DogCard 
        key = {dog.id}
        name= {dog.name}
        image = {dog.img} 
        breed = {dog.breed}
      />))
  }

  render() {
    return <div className="dogContainer">{this.createDogCards()}</div>;
  }
}

export default DogList;
