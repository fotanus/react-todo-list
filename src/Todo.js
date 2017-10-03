import React, { Component } from 'react';

class Todo extends Component {
  handleCheckBox = () => {
    this.props.onCheckBoxClick(this.props.id)
  }

  render () {
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheckBox}/>
        <input type="text" />
        <textarea />
      </div>
    )
  }
}

export default Todo
