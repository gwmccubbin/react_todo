function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO' :
      return [...state, {
        type: action.type,
        text: action.text
      }];
    default:
      return state;
  }
};

export default todos;
