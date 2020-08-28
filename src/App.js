// 1. Change the "bark" button on DogCard to a "favorite" button
// 2. The DogCard component will no longer render a new <h2> when the button is clicked
// 3. Create a FavoriteContainer
// 4. When a user clicks on the "favorite" button for a dog, that dog should be added to the FavoriteContainer
// 5. BONUS: figure out how to add multiple dogs to the FavoriteContainer

import React, { Component } from "react";
import "./App.css";
import DogsList from "./Containers/DogsList"
import FavoriteContainer from "./Containers/FavoriteContainer"
import {apiResponse} from './api.js'


class App extends Component {

  state = {
    dogsArray: apiResponse, 
    favoriteDog: []
  }

  dogClicks = (dogObj) => {
    //this recieves the object when I clicked it so I gave it the argument dogObj
    // console.log(dogObj)
    let newArray = this.state.favoriteDog
    newArray.push(dogObj)

    this.setState({
       ...this.state,
       favoriteDog: newArray
      })
    
  }

  louis = () => {
    //filter and reset state from favorite dog
    console.log("remove me!")
     
  }
  
  render() {
    return( <div>
    <DogsList dogClicks ={this.dogClicks} />
      <FavoriteContainer dogClicks= {this.louis} favArray = {this.state.favoriteDog}/>
    </div>
    )
   
  }
}

export default App;
