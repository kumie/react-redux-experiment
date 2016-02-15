import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/app';
import store from './reducers/albums-store';
import styles from './albums.scss';

render(
    <Provider store={ createStore(store) }>
      <App />
    </Provider>,
    document.querySelector('.outlet')
);
