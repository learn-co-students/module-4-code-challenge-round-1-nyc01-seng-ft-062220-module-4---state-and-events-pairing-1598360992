import React from "react";

class DogCard extends React.Component {
 
 
  state = {
        hasBeenClicked: false
  }
  
 
  clickHandler = () => {
    console.log(this.state.hasBeenClicked)
    this.setState({ hasBeenClicked: true}, () => console.log(this.state.hasBeenClicked))
  }

  render() {
    console.log("Hitting Render")

      return ( 
        <div>
          <h2>{this.props.dogObj.name}</h2>
          <img alt={this.props.dogObj.name} src={this.props.dogObj.img} />
          <button 
          className="bark"
          onClick={this.clickHandler}
          >Bark</button>
        </div>
      )
  }
}

export default DogCard;
