import React from 'react';

class Form extends React.Component {

  render() {
    return (
        <form>
          <input type="text" placeholder="Artist" required />
          <input type="text" placeholder="Album" required />
          <button type="submit">Update</button>
        </form>
    );
  }

}

export default Form;