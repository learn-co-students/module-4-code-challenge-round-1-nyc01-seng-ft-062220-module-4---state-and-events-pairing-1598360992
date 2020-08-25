import React from "react";


class DogCard extends React.Component {

  state = {
    toggled: false
  };

  handleClick = () => {
    this.setState(lastState => {
      return {
        toggled: !lastState.toggled
      }
    })
  }


  render(){
    let { dog } = this.props
    return (
      <div>
        <h2 >{dog.name}</h2>
        <img alt={dog.name} src={dog.img} />
        <button onClick={this.handleClick} className="bark">Bark</button>
        {this.state.toggled ? <h2>RUFF</h2> : null}
      </div>
    )
  }
}

export default DogCard;