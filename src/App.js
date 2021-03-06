import React, { Component } from 'react';
import Menu from './Menu'
import Todo from './Todo'


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
