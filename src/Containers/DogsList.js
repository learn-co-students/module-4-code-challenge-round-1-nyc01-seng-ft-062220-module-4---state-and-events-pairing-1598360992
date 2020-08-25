import React, { Component } from "react";
import DogCard from "../Components/DogCard";
import { apiResponse } from '../api'

class DogList extends Component {
  
  genDog = () => {
    return apiResponse.map(dogObj => <DogCard key={dogObj.id} dog={dogObj} />)
  }


  render() {
    return <div className="dogContainer">{this.genDog()}</div>;
  }
}

export default DogList;
