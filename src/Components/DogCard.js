import React from "react";



class DogCard extends React.Component {

  constructor(){
    super()
    this.state = {
      button: "Bark"
    }
  }
  


  clickHandler = () => {
    if (this.state.button === "Bark"){
      this.setState({
        button: "Ruff"
      })
    }else{
    this.setState({
      button: "Bark"
    })
  }
}

  render() {

    return (
    
      <div>
        <h2 >{this.props.dogInfo.name}</h2>
        <img alt={this.props.dogInfo.name} src={this.props.dogInfo.img} />
        <button onClick={this.clickHandler} className="bark">Bark</button>
        
        <h2>{this.state.button === "Bark" ? null : "Ruff"}</h2>
      </div>
    );
  }

  }



export default DogCard;

//When a User clicks on the "Bark" button it should render an <h2> to the screen. The <h2> innerText should say "Ruff" and its class should be "bark"
// When a User clicks on the button a second time the "Ruff" should be removed from the DOM
