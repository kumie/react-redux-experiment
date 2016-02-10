import React from 'react';
import styles from './albums.scss';
import List from './list';
import Form from './form';

class Albums extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <List />
        <Form />
      </div>
    );
  }
}

export default Albums;
