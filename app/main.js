import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import '../public/style.css';

render(
  <Provider store={store}>
    <div>Hello, World!</div>
  </Provider>,
  document.getElementById('app')
);
