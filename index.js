import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import App from './containers/app';
import reducer from './reducers/albums-store';
import styles from './albums.scss';

const store = createStore(reducer);

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({ dispatch });
const AlbumsApp = connect(mapStateToProps, mapDispatchToProps)(App);

render(
    <Provider store={ store }>
      <AlbumsApp />
    </Provider>,
    document.querySelector('.outlet')
);
