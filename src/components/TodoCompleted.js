import React, { Component } from 'react';

class TodoCompleted extends Component {
  handleClick() {
    this.props.rollbackTodo(this.props.i);
  }

  render() {
    return(
      <div className="checkbox" ref="todo">
        <label className="completed">
          <input type="checkbox" onClick={() => this.handleClick()} />
          {this.props.todo.text}
        </label>
      </div>
    )
  }
};

export default TodoCompleted;
