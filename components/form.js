import React from 'react';

class Form extends React.Component {

  handleSubmit(evt) {
    evt.preventDefault();
    const { artist, title } = this.refs;
    this.props.onSubmit({ artist: artist.value, title: title.value });
  }

  render() {
    return (
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" placeholder="Artist" ref="artist" required />
          <input type="text" placeholder="Album" ref="title" required />
          <button type="submit">Update</button>
        </form>
    );
  }

}

export default Form;