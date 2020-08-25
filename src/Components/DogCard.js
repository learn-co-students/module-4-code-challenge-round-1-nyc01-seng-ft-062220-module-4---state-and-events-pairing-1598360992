import React from "react";

class DogCard extends React.Component {

  state = {
    toggled: false
  };

  handleClick = () => {
    this.props.appClickHandler(this.props.dog)
  }

  render(){
    let { dog } = this.props
    return (
      <div className="dogCard">
        <h4 >Name: {dog.name}</h4>
        <img alt={dog.name} src={dog.img} />
        <br></br>
        <button onClick={this.handleClick}>Favorite</button>
      </div>
    )
  }
  
}

export default DogCard;