import React from "react";

class DogCard extends React.Component {
  
  state = {hasBeenClicked: false}

  handleClick = () => {
    if(this.state.hasBeenClicked === false) {
      this.setState({hasBeenClicked: true})
    } else {
      this.setState({hasBeenClicked: false})
    }
  }

  render(){
    return (
      <div>
        <h2 >{this.props.name}</h2>
        <img alt="dogpicture" src={this.props.image} />
        
          <button className="bark" onClick={this.handleClick}>Bark</button>
          <h2>{this.state.hasBeenClicked ? "RUFF" : null}</h2>
        
      </div>
    )};
}

export default DogCard;
