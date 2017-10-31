export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

export function completeTodo(index) {
  return {
    type: 'COMPLETE_TODO',
    index
  }
}

export function rollbackTodo(index) {
  return {
    type: 'ROLLBACK_TODO',
    index
  }
}
