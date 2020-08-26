import React from "react";

class DogCard extends React.Component {


  dogCardClickHandler = () => {
    this.props.clickHandler(this.props.dogObj)
  }

  render() {

    

    return (
      <div>
        <img alt={this.props.dogObj.name} src={this.props.dogObj.img} />
        <button
          className="favorite"
          onClick={this.dogCardClickHandler}
        >♥</button>
      </div>
    )
  }
}

export default DogCard;
