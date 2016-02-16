import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(App);
