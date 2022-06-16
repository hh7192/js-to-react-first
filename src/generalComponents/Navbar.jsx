import React, {Component} from "react";

class Navbar extends Component {
  render() {
    return (
      <div className='col-12'>
        <h2 className='bg-primary text-center text-white p-2'>
          Hamidreza {this.props.name}
        </h2>
      </div>
    );
  }
}

export default Navbar;
