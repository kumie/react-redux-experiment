import actionTypes from '../action-types';
import fixture from '../data-fixture';
import assign from 'lodash/assign';
import map from 'lodash/map';

const initialState = {
  albums: fixture
};

const store = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD:
      //const data = _.without(action, 'type');
      const id = Math.max.apply(Math, map(state.albums, 'id')) + 1;

      return assign(
          {},
          state,
          { albums: [{ id: action.id, artist: action.artist, title: action.title }], ...state.albums }
      );

    default:
      return state;
  }
};

export default store;
