import React from "react";

class DogCard extends React.Component {
 
 
  state = {
        hasBeenClicked: false
  }
  
 
  clickHandler = () => {
    
    this.setState({ hasBeenClicked: !this.state.hasBeenClicked}, () => console.log(this.state.hasBeenClicked))
    
    
  }

  render() {
      return ( 
        <div>
          <h2>{this.props.dog.name}</h2>
          {(this.state.hasBeenClicked === true) ? <h2 className='bark'>Ruff!</h2> : null}
          <img alt={this.props.dog.name} src={this.props.dog.img} />
          <button 
          className="bark"
          onClick={this.clickHandler}
          >Bark</button>
        </div>
      )
  }
}

export default DogCard;
