import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <TodoForm {...this.props} />
        <TodoList {...this.props} />
      </div>
    )
  }
};

export default Layout;
