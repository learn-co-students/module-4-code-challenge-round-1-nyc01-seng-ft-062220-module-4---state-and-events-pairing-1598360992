import React from "react";

class DogCard extends React.Component {

  state = { clicked: false }

  render() {
    return (
      <div>
        <h2 className="bark">{this.state.clicked ? "Ruff" : ""}</h2>
        <h2 >{this.props.dog.name}</h2>
        <img alt="" src={this.props.dog.img} />
        <button onClick={this.clickHandler} className="bark">Bark</button>
        
      </div>
    );
  }

  
  clickHandler=()=> {
    this.setState({clicked: !this.state.clicked})
  }

}



export default DogCard;
