import React, {Component} from "react";

class Form extends Component {
  render() {
    return (
      <div className='col-12'>
        <form>
          <label htmlFor='itemName'>Enter Item Name</label>
          <input
            type='text'
            className='form-control'
            value={this.props.itemName}
            onChange={(e) =>
              this.props.updateParentState({itemName: e.target.value})
            }
          />
          <label htmlFor='itemPrice'>Enter Item Price</label>
          <input
            type='number'
            className='form-control'
            value={this.props.itemPrice}
            onChange={(e) =>
              this.props.updateParentState({itemPrice: e.target.value})
            }
          />
          <label htmlFor='itemQuantity'>Enter Item Quantity</label>
          <input
            type='number'
            className='form-control'
            value={this.props.itemQuantity}
            onChange={(e) =>
              this.props.updateParentState({itemQuantity: e.target.value})
            }
          />
          <label htmlFor='itemUnit'>Enter Item Unit</label>
          <select
            className='form-select p-1'
            onChange={(e) =>
              this.props.updateParentState({itemUnit: e.target.value})
            }>
            <option value='Number'>Number</option>
            <option value='Kilogram'>Kilogram</option>
            <option value='Box'>Box</option>
          </select>
          <h3 className='mt-3'>
            Total:{" "}
            <span className='badge bg-primary'>
              {this.props.itemPrice * this.props.itemQuantity}
            </span>{" "}
            Tomans
          </h3>
          <button
            type='submit'
            className='btn btn-success btn-lg pl-5 pr-5 mt-3'
            onClick={this.props.addItem}>
            Add
          </button>
        </form>
        <div>
          <span className='errorMessage mt-2'>{this.props.errorMessage}</span>
        </div>
      </div>
    );
  }
}

export default Form;
