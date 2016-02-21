import React, { PropTypes } from 'react';
import List from '../components/list';
import Form from '../components/form';
import actions from '../actions/album-actions';

class App extends React.Component {

  handleFormSubmit({ artist, title }) {
    this.props.dispatch(actions.add({ artist, title }));
  }

  handleRemove(id) {
    this.props.dispatch(actions.remove(id));
  }

  render() {
    return (
        <div>
          <List albums={ this.props.albums } onRemove={ this.handleRemove.bind(this) } />
          <Form onSubmit={ this.handleFormSubmit.bind(this) } />
        </div>
    );
  }

}

App.proptypes = {
  dispatch: PropTypes.func.isRequired,
  albums: PropTypes.arrayOf(PropTypes.shape({
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
};

export default App;
