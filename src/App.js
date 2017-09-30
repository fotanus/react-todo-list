import React, { Component } from 'react';

class Todo extends Component {
  render () {
    return (
      <div>
        <input type="checkbox" />
        <input type="text" />
        <textarea />
      </div>
    )
  }
}

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTaskCB: this.props.newTaskCB
    }
  }

  render () {
    return (
      <div>
        <button onClick={this.state.newTaskCB}>New task</button>
        <button>Delete selected</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  addTask = () => {
    this.state.todos.push(<Todo key={Date.now()}/>)
    this.setState(this.state)
  }

  render() {
    return (
      <div>
        <div>
          { this.state.todos }
        </div>
        <Menu newTaskCB={this.addTask} />
      </div>
    );
  }
}

export default App;
