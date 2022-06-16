import React, {Component} from "react";

class Test extends Component {
  constructor() {
    super();
    this.state = {
      prop1: "Hello",
      todolist: [
        {action: "walk the dog", isDone: false},
        {action: "wash the cat", isDone: false},
        {action: "fuck the girl", isDone: true},
      ],
    };
  }

  // changeData = () => {
  //   this.setState({
  //     prop1: this.state.prop1 === "Hello" ? "Hey" : "Hello",
  //   });
  // };

  mapTodos = () => {
    this.state.todoItems.map((item, i) => {
      return (
        <tr key={i}>
          <td>{item.action}</td>
          <td>{item.done === false ? "Pending" : "Done"}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='bg-secondary text-center text-white p-2'>
              {this.state.prop1} To Do List
            </h2>
            {/* <button
              className='btn btn-primary p-2 m-2'
              onClick={this.changeData}>
              Change
            </button> */}
          </div>
        </div>
        <table className='table m-2'>
          <thead>
            <tr>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{this.mapTodos()}</tbody>
        </table>
      </div>
    );
  }
}

export default Test;
