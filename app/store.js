import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

function dummyReducer(state = {}, action) {
  return state;
}

export default createStore(
  dummyReducer,
  composeWithDevTools(
    applyMiddleware([
      thunkMiddleware.withExtraArgument({ axios }),
      createLogger({ collapsed: true }),
    ])
  )
);
