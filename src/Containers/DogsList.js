import React, { Component } from "react";
import {apiResponse} from '../api'
import DogCard from '../Components/DogCard'

class DogsList extends Component {
  

  dogCardCreator = () => {
      return apiResponse.map(dogObj => { 
          return <DogCard id={dogObj.id} name={dogObj.name} image={dogObj.img} />
      })
  }
  
  render() {  
    return (
      <div className="dogContainer">
        Doglist reporting for duty!
        {this.dogCardCreator()}
        
        
      </div>)
  }
}

export default DogsList;
