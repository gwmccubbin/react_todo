import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoListCompleted from './TodoListCompleted';

class Layout extends Component {
  render() {
    return (
      <div className="layout container">
        <div className="row">
          <div className="col-md-12">
            <h1>Todos</h1>
            <TodoForm {...this.props} />
            <TodoList {...this.props} />
            <h2>Completed</h2>
            <TodoListCompleted {...this.props} />
          </div>
        </div>
      </div>
    )
  }
};

export default Layout;
