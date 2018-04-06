import React, { Component } from 'react';
import AddOptionForm from './AddOption.scss';

class AddOption extends Component {
  state = {
    error: undefined
  };
  handleAddOption = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.addOption(option);
    this.setState(() => {
      return {
        error: error
      }
    });
    if(!error) {
      event.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div className="AddOptionDiv">
        {this.state.error && <p>{this.state.error}</p>}
        <form
          onSubmit={this.handleAddOption}>
          <button className="AddOptionButton">Add Option</button>
          <input type="text" name="option" className="AddOptionForm"/>
        </form>
      </div>
    );
  }
}

export default AddOption;