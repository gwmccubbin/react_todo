import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, i) => <Todo {...this.props} key={i} i={i} todo={todo} />)}
      </ul>
    );
  }
}

export default TodoList;
