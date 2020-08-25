import React, { Component } from "react";
import DogCard from "../Components/DogCard";

class DogList extends Component {
  
  genDog = () => {
    return this.props.values.map(dog => <DogCard value={dog} />)
  }


  render() {
    return <div className="dogContainer">{this.genDog()}</div>;
  }
}

export default DogList;
