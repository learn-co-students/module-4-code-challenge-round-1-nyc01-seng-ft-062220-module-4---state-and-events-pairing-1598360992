import React from "react";

class DogCard extends React.Component {
  state = {
    clicked: true
  }
  
  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }


  render() {
    let {dog} = this.props
    return (
      <div>
        <h2 >{dog.name}</h2>
        
        <img alt="" src={dog.img} />
        <button className="bark" onClick={this.clickHandler}>Bark</button>
        {this.state.clicked ? null : <h2>Ruff!</h2>}
      </div>
    );
  }
}

export default DogCard;
