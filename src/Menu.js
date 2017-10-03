import React, { Component } from 'react';

class Menu extends Component {
  render () {
    return (
      <div>
        <button onClick={this.props.newTaskCB}>New task</button>
        <button onClick={this.props.deleteTasksCB}>Delete selected</button>
      </div>
    )
  }
}

export default Menu
