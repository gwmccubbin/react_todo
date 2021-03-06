import React, { Component } from 'react';

class Todo extends Component {
  handleClick() {
    this.props.completeTodo(this.props.i);
  }

  render() {
    return(
      <div className="checkbox" ref="todo">
        <label>
          <input type="checkbox" onClick={() => this.handleClick()} />
          {this.props.todo.text}
        </label>
      </div>
    )
  }
};

export default Todo;
