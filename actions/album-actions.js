import types from '../action-types';

const actions = {

  add: ({ artist, title }) => ({
    type: types.ADD,
    artist,
    title
  }),

  remove: (id) => ({ type: types.REMOVE, id })

};

export default actions;
