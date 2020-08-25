import React, { Component } from "react";
import DogCard from '../Components/DogCard'
import apiResponse from '../api'

class DogList extends Component {

    dogCards = () => {
      return (apiResponse.map(dog => {
      console.log(dog)
      const dogName = dog.name 
      console.log(dogName)
      return <DogCard dogName={dog.name} dogImg={dog.img}/> 
     }))
    }

  render() {
    
    return <div className="dogContainer">
    {this.dogCards()}
    </div>;
  }
}

export default DogList;
