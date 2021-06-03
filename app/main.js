import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Header } from './components';

import store from './store';
import '../public/style.css';

render(
  <Provider store={store}>
    <Header />
    <section class="section">
      <div class="container">
        <h1 class="title">Hello World</h1>
        <p class="subtitle">
          My first website with <strong>Bulma</strong>!
        </p>
        <a class="button">Button</a>
        <div>
          <h1 class="title">Bulma</h1>
          <p class="subtitle">
            Modern CSS framework based on{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
              Flexbox
            </a>
          </p>
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Input"></input>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Provider>,
  document.getElementById('app')
);
