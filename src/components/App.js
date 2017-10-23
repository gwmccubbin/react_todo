import React, { Component } from 'react';
import '../styles/App.css';
import TodoForm from './TodoForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
      </div>
    );
  }
}

export default App;
