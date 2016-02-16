import React from 'react';

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

export default Album;
