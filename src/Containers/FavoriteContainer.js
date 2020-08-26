import React from 'react';



export default class FavoriteContainer extends React.Component {

    renderDogsAgain = () => {
        return this.props.dogs.map(dog => <h1>{dog.name}</h1>)
        
    }
    render() {
        return <div>
    
           {this.renderDogsAgain()}
           
        </div>
       
    }
}