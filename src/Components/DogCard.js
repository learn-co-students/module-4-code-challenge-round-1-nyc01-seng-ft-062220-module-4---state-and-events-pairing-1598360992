import React from "react";


class DogCard extends React.Component {  
  constructor() {
    super();
    this.state = {
      toggled: false
    };
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled
      }
    })
  }


  render(){
    return (
      <div>
        <h2 >{this.props.value.name}</h2>
        <img alt={this.props.value.name} src={this.props.value.img} />
        <button onClick={this.handleClick} className="bark">Bark</button>
        {this.state.toggled ? <h2>RUFF</h2> : null}
      </div>
    )
  }
}

export default DogCard;