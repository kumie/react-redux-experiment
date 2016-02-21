import React, { PropTypes } from 'react';

class Album extends React.Component {

  render() {
    return (
        <tr className="album">
          <td>{ this.props.artist }</td>
          <td>{ this.props.title }</td>
          <td>
            <button className="tiny alert" onClick={ this.props.onRemove }>x</button>
          </td>
        </tr>
    );
  }

}

Album.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Album;
