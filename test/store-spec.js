import last from 'lodash/last';
import reducer from '../reducers/albums-store';
import actions from '../actions/album-actions';
import actionTypes from '../action-types';
import { createStore } from 'redux';
import dataFixture from '../data-fixture.json';

describe('Store', () => {
  let store;
  const newAlbumData = { title: 'In the Court of the Crimson King', artist: 'King Crimson' };

  beforeEach(() => {
    store = createStore(reducer);
  });

  it('Should add an album to the store', () => {
    const expectedState = { ...newAlbumData, id: 4 };

    store.dispatch(actions.add(newAlbumData));
    const lastStoreItem = last(store.getState().albums);
    expect(lastStoreItem).toEqual(expectedState);
  });

  it('Should remove an album from the store', () => {
    const albums = store.getState().albums;

    expect(albums.length).toBe(3);
    expect(last(albums)).toEqual(last(dataFixture));

    store.dispatch(actions.remove(3));
    const newAlbumsState = store.getState().albums;
    expect(last(newAlbumsState)).toEqual(dataFixture[1]);
    expect(newAlbumsState.length).toBe(2);
  });
});
