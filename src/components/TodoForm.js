import React, { Component } from 'react';

class TodoForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.refs.todo.value);
  }

  render() {
    return(
      <form onSubmit={(e) => this.handleSubmit(e)} >
        <input type="text" ref="todo" placeholder="Add todo..." />
        <input type="submit" hidden />
      </form>
    )
  }
}

export default TodoForm;
