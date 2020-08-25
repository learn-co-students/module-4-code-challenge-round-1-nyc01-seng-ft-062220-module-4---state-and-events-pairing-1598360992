import React from "react";

class DogCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ruff:false
    }
  }

  clickHandler = () => {
    this.setState({
      ruff: !this.state.ruff
    }, () => console.log(this.state.ruff))
  }

  render() {
    return (
      <div> 
          <h2 >{this.props.name}</h2>
          <img alt={this.props.name} src={this.props.image} />
          <button className="bark" onClick={this.clickHandler}>Bark</button>
          {this.state.ruff === true ? <h2>Ruff</h2> : null }
      </div>
    )
  }
}

export default DogCard;
