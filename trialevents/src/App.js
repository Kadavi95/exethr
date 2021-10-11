import React, {Component} from 'react';
import './App.css';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "Ready"
    }
  }
  handleClick = () => {
    this.setState({
      message: this.state.message === "Ready" ? "Clicked" : "Ready"
    })
  }
  handleEvent = () => {
    console.log("Wywołano metodę handleEvent");
  }
  render(){
    return (
      <>
      <div className="m-2">
        <div className="h4 bg-primary text-white text-center p-2">
          {this.state.message}
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={this.handleEvent}>Click on me!</button>
        </div>
      </div>
      </>
    )
  }
}