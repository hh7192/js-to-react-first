import React, {Component} from "react";
import "./RandomGradientBG.css";
import MainNavbar from "../../generalComponents/MainNavbar";

class RandomGradientBG extends Component {
  constructor() {
    super();
    this.state = {
      color1: "",
      color2: "",
      color3: "",
      hexNumbers: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ],
    };
  }

  getColor = () => {
    let color1Clone = "#",
      color2Clone = "#",
      color3Clone = "#";

    for (let i = 0; i < 6; i++) {
      let random1 = Math.floor(Math.random() * this.state.hexNumbers.length);
      color1Clone += this.state.hexNumbers[random1];
      let random2 = Math.floor(Math.random() * this.state.hexNumbers.length);
      color2Clone += this.state.hexNumbers[random2];
      let random3 = Math.floor(Math.random() * this.state.hexNumbers.length);
      color3Clone += this.state.hexNumbers[random3];
    }

    this.setState({
      color1: color1Clone,
      color2: color2Clone,
      color3: color3Clone,
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div className='container'>
        <div className='row'>
          <MainNavbar />
          <div
            className='col-12 bgContainer'
            style={{
              background: `linear-gradient(to left, ${this.state.color1}, ${this.state.color2}, ${this.state.color3}`,
            }}>
            <button className='btn btn-success' onClick={this.getColor}>
              Click Me
            </button>
            <h3 className='text-white mt-3'>
              Gradient Color:{" "}
              <span>
                linear-gradient(to left, {this.state.color1},{" "}
                {this.state.color2}, {this.state.color3})
              </span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomGradientBG;
