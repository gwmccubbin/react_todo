function todos(state = [], action) {
  const i = action.index;
  switch(action.type) {
    case 'ADD_TODO' :
      return [...state, {
        type: action.type,
        text: action.text
      }];
    case 'COMPLETE_TODO' :
      return [
        ...state.slice(0,i),
        {...state[i], completed: true},
        ...state.slice(i + 1)
      ]
    default:
      return state;
  }
};

export default todos;
