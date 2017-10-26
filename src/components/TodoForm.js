import React, { Component } from 'react';

class TodoForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.refs.todo.value);
  }

  render() {
    return(
      <form ref="form" onSubmit={(e) => this.handleSubmit(e)} >
        <input type="text" className="form-control" ref="todo" placeholder="Add todo..." />
        <input type="submit" hidden />
      </form>
    )
  }
}

export default TodoForm;
