import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AccountCreation from './AccountCreation';
import Mirror from './Mirror';
import Start from '../src/components/Start';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Start />
      </div>
    );
  }
}

{
  /* <BrowserRouter>
  <Switch>
    <Route path="/AccountCreation" component={AccountCreation} />
    <Route path exact="/users" component={Mirror} />
  </Switch>
</BrowserRouter>; */
}

export default App;
