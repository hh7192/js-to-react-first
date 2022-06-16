import React, {Component} from "react";

class Form extends Component {
  render() {
    return (
      <div className='col-12 mt-5'>
        <form>
          <label htmlFor='input'>Enter New Item</label>
          <input
            type='text'
            className='form-control'
            value={this.props.input}
            onChange={(e) => this.props.update({inputValue: e.target.value})}
          />
          <button
            type='submit'
            className='btn btn-success m-2'
            onClick={this.props.add}>
            Add
          </button>
        </form>
        <span className='errorMessage'>{this.props.errorMessage}</span>
      </div>
    );
  }
}

export default Form;
