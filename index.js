import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/app';
import reducer from './reducers/albums-store';
import styles from './albums.scss';

const store = createStore(reducer);

render(
    <Provider store={ store }>
      <App />
    </Provider>,
    document.querySelector('.outlet')
);
