import React from 'react';
import { shallow as shallowRenderer } from 'enzyme';
import App from '../containers/app';
import reducer from '../reducers/albums-store';
import actionTypes from '../action-types';
import dataFixture from '../data-fixture.json';

describe('Albums', () => {
  let albumsShallowWrapper;
  let albums;
  const dispatchStub = jasmine.createSpy('dispatch');

  beforeEach(() => {
    albumsShallowWrapper = shallowRenderer(<App dispatch={ dispatchStub } albums={ dataFixture } />);
    albums = albumsShallowWrapper.instance();
  });

  it('Should dispatch an action when the form is submitted', () => {
    const data = { artist: 'Dean Martin', title: 'Houston' };
    const expectedAction = { type: actionTypes.ADD, ...data };

    albums.handleFormSubmit(data);
    expect(albums.props.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('Should dispatch an action when an album is removed', () => {
    const expectedAction = { type: actionTypes.REMOVE, id: 1 };
    albums.handleRemove(1);

    expect(albums.props.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});