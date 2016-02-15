import React, { Component, PropTypes } from 'react';
import Album from './album';

class List extends Component {

  renderAlbums() {
    return this.props.albums.map((album, i) => {
      return <Album artist={ album.artist } title={ album.title } key={ i } />;
    });
  }

  render() {
    return (
        <table className="albums">
          <thead>
            <tr>
              <td>Artist</td>
              <td>Title</td>
            </tr>
          </thead>
          <tbody>
            { this.renderAlbums() }
          </tbody>
        </table>
    );
  }

}

List.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    artist: PropTypes.string,
    title: PropTypes.string
  }))
};

export default List;
