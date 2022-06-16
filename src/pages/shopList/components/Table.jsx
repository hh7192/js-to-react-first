import React, {Component} from "react";

class Table extends Component {
  render() {
    return (
      <div className='col-12'>
        <table className='table table-dark mt-3'>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Delete</th>
              <th>Bought</th>
            </tr>
          </thead>
          <tbody>
            {this.props.shoplist.map((item, i) => {
              return (
                <tr key={i}>
                  <td
                    className={
                      this.props.shoplist[i].isBought === true
                        ? "bought"
                        : "notBought"
                    }>
                    {item.name}
                  </td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>
                    <button
                      className='btn btn-danger btn-sm'
                      onClick={() => this.props.deleteItem(i)}>
                      X
                    </button>
                  </td>
                  <td>
                    <button
                      className={
                        this.props.shoplist[i].isBought === false
                          ? "btn btn-warning btn-sm"
                          : "btn btn-success btn-sm"
                      }
                      onClick={() => this.props.boughtItem(i)}>
                      Bought
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h3 className='mb-4'>
          Total Spent:<span></span>
        </h3>
      </div>
    );
  }
}

export default Table;
