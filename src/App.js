import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AccountCreation from "./AccountCreation";
import Mirror from "./Mirror";
import Start from "./Start";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/AccountCreation" component={AccountCreation} />
            <Route path="/Mirror" component={Mirror} />
            <Route path eaxct="/" component={Start} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
