import React from 'react';
import Album from './album';
class List extends React.Component {

  renderAlbums() {
    return <Album artist="Pink Floyd" title="Wish You Were Here" />;
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

export default List;