import React, { Component } from "react";
import FavoriteCard from "../Components/FavoriteCard";

class FavoriteList extends Component {

    render() {
        let dogs = this.props.dogs.map(dogObj => <FavoriteCard key={dogObj.id} dog={dogObj} />)

        return(
            <div className="favoriteContainer">
                <h1>Favorite Dogs</h1>
                { dogs }
            </div>
        )
  }
}

export default FavoriteList;