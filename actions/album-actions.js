import types from '../action-types';

const actions = {

  add: ({ artist, title }) => {
    return {
      type: types.ADD,
      artist,
      title
    };
  }

};

export default actions;
