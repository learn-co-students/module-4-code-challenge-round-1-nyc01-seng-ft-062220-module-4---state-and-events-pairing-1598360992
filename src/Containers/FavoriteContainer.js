import React from 'react'
import DogCard from '../Components/DogCard'

class FavoriteContainer extends React.Component {
    render() {
        let favDogs = this.props.favArray.map((dogObj) => <DogCard key={dogObj.id} dogObj={dogObj} dogName={dogObj.name} dogImage={dogObj.img} breed={dogObj.breed} dogClicks={this.props.dogClicks} />)
        
        return(
            <div>
                <h1>Favorite Container</h1>  
                {favDogs}
            </div>
        )
 
        
    }
    
}

export default FavoriteContainer