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
  render () {
    return (
      <div>
        <button>New task</button>
        <button>Delete selected</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Todo/>
        <Menu/>
      </div>
    );
  }
}

export default App;
