import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Header } from './components';

import store from './store';
import '../public/style.css';

render(
  <Provider store={store}>
    <Header />
  </Provider>,
  document.getElementById('app')
);
