import React, { Component } from "react";
import DogCard from "../Components/DogCard";
import { apiResponse } from "../api.js"

class DogList extends Component {

    makeDogCards = () => {
        return (apiResponse.map(
            (dogCard) => <DogCard text = {dogCard} />)
        )
    }



  render() {

    return(
        <div className="dogContainer">
            {this.makeDogCards()}
        </div>
  )
  }
}

export default DogList;
