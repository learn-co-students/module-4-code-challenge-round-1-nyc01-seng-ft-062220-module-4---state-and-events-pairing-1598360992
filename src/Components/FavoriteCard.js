import React from "react";

class FavoriteCard extends React.Component {

  render(){
    let { dog } = this.props
    return (
      <>
        <li>{dog.name}</li>
      </>
    )
  }
  
}

export default FavoriteCard;