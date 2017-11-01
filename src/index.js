
import React from 'react';
import { render } from 'react-dom';

// styles
import './styles/index.css';

// components
import Layout from './components/Layout';

// redux
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import store from './store';

// action creators
import * as actionCreators from './actions/actionCreators';

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Layout);

const provider = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(provider, document.getElementById('root'));
