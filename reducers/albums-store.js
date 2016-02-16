import map from 'lodash/map';
import omit from 'lodash/omit';
import reject from 'lodash/reject';
import actionTypes from '../action-types';
import fixture from '../data-fixture';

const initialState = {
  albums: fixture
};

const createAlbum = (data, state) => {
  let { albums } = state;

  data.id = albums.length ? Math.max.apply(Math, map(albums, 'id')) + 1 : 1;

  albums = albums.slice(0);
  albums.push(data);

  const newState = { ...state };
  newState.albums = albums;

  return newState;
};

const removeAlbum = (id, state) => {
  const newState = { ...state };

  newState.albums = reject(newState.albums, { id });

  return newState;
};

const store = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return createAlbum(omit(action, 'type'), state);

    case actionTypes.REMOVE:
      return removeAlbum(action.id, state);

    default:
      return state;
  }
};

export default store;
