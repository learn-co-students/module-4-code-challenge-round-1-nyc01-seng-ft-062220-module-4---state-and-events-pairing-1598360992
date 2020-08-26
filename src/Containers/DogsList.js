import React, { Component } from "react";
import DogCard from '../Components/DogCard';
import {apiResponse} from '../api';

class DogList extends Component {

  renderDogCard = () => {
    return apiResponse.map(dog => <DogCard key={dog.id} dogObj={dog} clickHandler={this.props.clickHandler} />)
  }
  
  render() {
    return <div className="dogContainer">
        {this.renderDogCard()}
      </div>
  }
}

export default DogList;
