import React, { Component } from 'react';
import TodoCompleted from './TodoCompleted';

class TodoListCompleted extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {/* TODO: Clean me up */}
        {this.props.todos.filter((todo) => todo.completed == true ).map((todo, i) => <TodoCompleted {...this.props} key={this.props.todos.indexOf(todo)} i={this.props.todos.indexOf(todo)} todo={todo} />)}
      </ul>
    );
  }
}

export default TodoListCompleted;
