import React from "react";

class DogCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ruff:false
    }
  }

  clickHandler = () => {
    // if (this.state.ruff === false) {
    //   return (<h2 className="bark">Ruff</h2>)
    // } else {
    //   document.querySelector(".bark").remove()
    // }
    this.setState({
      ruff: !this.state.ruff
    }, () => console.log(this.state.ruff))
  }

  render() {
    if (this.state.ruff === true) {
      return (
        <div> 
          <h2 >{this.props.name}</h2>
          <img alt={this.props.name} src={this.props.image} />
          <button className="bark" onClick={this.clickHandler}>Bark</button>
          <h2>Ruff</h2>
        </div>
      );
    } else {
      return (
        <div> 
          <h2 >{this.props.name}</h2>
          <img alt={this.props.name} src={this.props.image} />
          <button className="bark" onClick={this.clickHandler}>Bark</button>
        </div>
      );
    }   
  }
}

export default DogCard;
