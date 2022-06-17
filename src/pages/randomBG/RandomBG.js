import React, {Component} from "react";
import "./RandomBG.css";
import MainNavbar from "../../generalComponents/MainNavbar";

class RandomBG extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
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
    let colorClone = "#";

    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * this.state.hexNumbers.length);
      colorClone += this.state.hexNumbers[random];
    }

    this.setState({color: colorClone});
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <MainNavbar />
          <div
            className='col-12 bgContainer'
            style={{backgroundColor: this.state.color}}>
            <button
              type='submit'
              className='btn btn-success'
              onClick={this.getColor}>
              Click Me
            </button>
            <h3 className='mt-3'>
              HEX Color: <span>{this.state.color}</span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomBG;
