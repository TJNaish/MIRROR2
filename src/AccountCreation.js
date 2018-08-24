import React, { Component } from 'react';
import CreatePersonal from './components/CreatePersonal';
import CreateHome from './components/CreateHome';

class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <header>
          <CreateHome />
        </header>
        <div className="personal">
          <CreatePersonal />
        </div>
      </div>
    );
  }
}

export default App;
