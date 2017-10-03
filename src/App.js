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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      selectedTodos: []
    }
  }

  deleteTasks = () => {
    const newTodos = this.state.todos.filter(
      todo => !this.state.selectedTodos.includes(todo.props.id)
    )
    this.setState({
      todos: newTodos,
      selectedTodos: []
    })
  }

  toggleSelected = (todoKey) => {
    let newSelectedTodos = this.state.selectedTodos.slice()
    if(this.state.selectedTodos.includes(todoKey)) {
      newSelectedTodos.splice(newSelectedTodos.findIndex(i => i === todoKey), 1)
    } else {
      newSelectedTodos.push(todoKey)
    }
    this.setState({
      todos: this.state.todos,
      selectedTodos: newSelectedTodos
    })
  }

  addTask = () => {
    let newTodos = this.state.todos.slice()
    const todoKey = Date.now()
    newTodos.push(
      <Todo key={todoKey} id={todoKey}
      onCheckBoxClick={this.toggleSelected} />
    )
    this.setState({
      todos: newTodos,
      selectedTodos: this.state.selectedTodos
    })
  }

  render() {
    return (
      <div>
        <div>
          { this.state.todos }
        </div>
        <Menu newTaskCB={this.addTask} deleteTasksCB={this.deleteTasks} />
      </div>
    );
  }
}

export default App;
