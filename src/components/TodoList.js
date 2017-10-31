import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {/* TODO: Clean me up */}
        {this.props.todos.filter((todo) => todo.completed !== true ).map((todo, i) => <Todo {...this.props} key={this.props.todos.indexOf(todo)} i={this.props.todos.indexOf(todo)} todo={todo} />)}
      </ul>
    );
  }
}

export default TodoList;
