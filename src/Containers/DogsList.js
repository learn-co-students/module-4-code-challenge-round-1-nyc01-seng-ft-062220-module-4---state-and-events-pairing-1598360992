import React, { Component } from "react";
import DogCard from "../Components/DogCard"
import {apiResponse} from "../api"

class DogList extends Component {

  vakas = (string) => {

  }
  
  render() {
   let fetchDog = apiResponse.map((dogObj) => <DogCard key = {dogObj.id} dogObj={dogObj} dogImage={dogObj.img} dogName={dogObj.name} dogClicks={this.props.dogClicks}/> ) 

    // console.log(apiResponse)
    return <div className="dogContainer">
      <p>{fetchDog}</p>
      {/* <DogCard /> */}
      
      </div>;
  }
}

export default DogList;
