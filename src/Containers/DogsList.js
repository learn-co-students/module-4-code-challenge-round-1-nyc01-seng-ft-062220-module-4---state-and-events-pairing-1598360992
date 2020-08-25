import React, { Component } from "react";
import DogCard from "../Components/DogCard"
import {apiResponse} from "../api"

class DogList extends Component {

  
  
  render() {
   let fetchDog = apiResponse.map((dogObj) => <DogCard dogImage={dogObj.img} dogName={dogObj.name}/> ) 

    // console.log(apiResponse)
    return <div className="dogContainer">
      <p>{fetchDog}</p>
      <DogCard />
      
      </div>;
  }
}

export default DogList;
