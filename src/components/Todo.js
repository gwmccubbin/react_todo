import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return(
      <div className="checkbox">
        <label>
          <input type="checkbox" value="" />
          {this.props.todo.text}
        </label>
      </div>
    )
  }
};

export default Todo;


