import React, { Component } from "react";
import {apiResponse} from '../api.js'
import DogCard from '../Components/DogCard'

class DogsList extends Component {

  
  render() {
    let dogInfo = apiResponse.map(dogObj => <DogCard dog={dogObj}/>)
    return (<div className="dogContainer">
        {dogInfo}
      </div>)
  }
}

export default DogsList;
