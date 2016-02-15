import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from '../components/list';
import Form from '../components/form';
import actions from '../actions/album-actions';

class App extends Component {

  render() {
    return (
        <div>
          <List albums={ this.props.albums } />
          <Form onSubmit={ actions.add } actions={ actions } />
        </div>
    );
  }

}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
