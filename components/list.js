import React, { PropTypes } from 'react';
import Album from './album';

class List extends React.Component {

  renderAlbums() {
    return this.props.albums.map((album) => {
      const { id } = album;
      return <Album
              artist={ album.artist }
              title={ album.title }
              key={ id }
              onRemove={ this.props.onRemove.bind(this, id) }
            />;
    });
  }

  render() {
    return (
        <table className="albums">
          <thead>
            <tr>
              <td>Artist</td>
              <td>Title</td>
              <td />
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
