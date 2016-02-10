import React from 'react';

class Album extends React.Component {

  render() {
    return (
        <tr className="album">
          <td>{ this.props.artist }</td>
          <td>{ this.props.title }</td>
        </tr>
    );
  }

}

export default Album;
