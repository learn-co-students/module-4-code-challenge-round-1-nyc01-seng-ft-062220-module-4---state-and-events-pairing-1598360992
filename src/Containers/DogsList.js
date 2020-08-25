import React, { Component } from "react";
import DogCard from '../Components/DogCard'
import {apiResponse} from '../api.js'

class DogList extends Component {
  dogCards = () => {
    return apiResponse.map(dogObject => <DogCard key={dogObject.id} dog={dogObject}/>)
  }
  
  render() {
    return <div className="dogContainer">{this.dogCards()}</div>;
  }
}

export default DogList;
