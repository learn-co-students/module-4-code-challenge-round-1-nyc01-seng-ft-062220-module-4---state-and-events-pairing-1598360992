import React, { Component } from "react";
import { apiResponse } from '../api.js';
import DogCard from '../Components/DogCard.js';

class DogList extends Component {
  render() {

    let allDogs = apiResponse.map(dogObj => <DogCard key={dogObj.id} dog={dogObj}/>)
    
    return <div className="dogContainer">{allDogs}</div>;
  }
}

export default DogList;
