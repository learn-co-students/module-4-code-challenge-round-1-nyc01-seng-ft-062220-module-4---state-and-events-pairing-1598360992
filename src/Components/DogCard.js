import React from "react";

class DogCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bark: null
        }
    }


    barkingButton = () => {
        if (this.state.bark === null) {
            this.setState({
                bark: "woof"
            })
        } else {
            this.setState({
                bark: null
            })
        }
    }

    render()
    {

        return (
            <div>
                <h2 className="bark">{this.state.bark}</h2>
                <h2>{this.props.text.name}</h2>
                <img alt="" src={this.props.text.img}/>
                <button className="bark" onClick={this.barkingButton}>Bark</button>

            </div>
        );
    }
}

export default DogCard;
