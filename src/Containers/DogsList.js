import React, { Component } from "react";
import DogCard from "../Components/DogCard";
import { apiResponse } from '../api'

class DogList extends Component {
  
  genDog = () => {
    return apiResponse.map(dogObj => <DogCard key={dogObj.id} dog={dogObj} appClickHandler={this.props.appClickHandler}/>)
  }


  render() {
    return (
    <div className="dogContainer">
      <h1>Dog List</h1>
      {this.genDog()}
    </div>
    )
  }
}

export default DogList;
