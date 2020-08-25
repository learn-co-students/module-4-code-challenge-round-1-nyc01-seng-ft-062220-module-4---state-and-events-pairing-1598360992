import React from "react";

class DogCard extends React.Component {


  clickHandler = () => {
    console.log("hiya")
    return <h2>Ruff</h2>
  }

  

  render() {
    
      return (
        <div>
          <h2 >{this.props.dogName}</h2>
          <img alt="" src={this.props.dogImg} />
          <button onClick={this.clickHandler} className="bark">Bark</button>
        </div>
      );
    }
  }


export default DogCard;
