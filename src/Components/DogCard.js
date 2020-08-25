import React from "react";
import {apiResponse} from '../api';

class DogCard extends React.Component {
  construct(props)
  
  clickHandler = () => {
    console.log("clickyyy")
  }

  render() {
    return apiResponse.map(dog => {
      return ( 
        <div>
          <h2>{dog.name}</h2>
          <img alt={dog.name} src={dog.img} />
          <button 
          className="bark"
          onClick={this.clickHandler}
          >Bark</button>
        </div>
      )
    })
  }
}

export default DogCard;
