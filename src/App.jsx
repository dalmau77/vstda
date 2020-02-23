import React, { Component } from 'react';
import Task from './task'
import View from './view'

class App extends Component {

  render() {
    return (
      <div className='container'>
        <Task/>
      </div>
    );
  }
}

export default App;
