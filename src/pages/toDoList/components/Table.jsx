import React, {Component} from "react";

class Table extends Component {
  render() {
    return (
      <div className='col-12 mt-5'>
        <table className='table'>
          <thead>
            <tr>
              <th>Action</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todoItems.map((item, i) => {
              return (
                <tr key={i}>
                  <th
                    className={
                      this.props.todoItems[i].isDone === false ? "" : "done"
                    }>
                    {item.action.toUpperCase()}
                  </th>
                  <th>{item.isDone === false ? "Pending" : "Done"}</th>
                  <th>
                    <button
                      className='btn btn-danger btn-sm'
                      onClick={() => this.props.delete(i)}>
                      X
                    </button>
                  </th>
                  <th>
                    <button
                      className={
                        this.props.todoItems[i].isDone === false
                          ? "btn btn-warning btn-sm"
                          : "btn btn-success btn-sm"
                      }
                      onClick={() => this.props.done(i)}>
                      Done
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
