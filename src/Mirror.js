import React, { Component } from 'react';
import {
  Clockpage,
  Name,
  Weathericon,
  Weatherinfo,
  Routeicon,
  Routeinfo,
  Todo,
  Caldate,
  Calinfo,
  Sporttable,
  Sportfixture,
  Sporticon,
  Newsinfo,
  Newsicon,
  Twitterinfo,
  Twittericon
} from './components';

import './App.css';

class App extends Component {
  state = { username: 'Tim' };
  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <div className="Clock">
            <Clockpage />
          </div>
          <div className="Name">
            <Name username={this.props.name} />
          </div>
          <div className="Todo">
            <Todo />
          </div>
          <div className="Weather">
            <div className="WeatherIcon">
              <Weathericon />
            </div>
            <div className="area-overlap WeatherInfo">
              <Weatherinfo />
            </div>
          </div>
          <div className="Route">
            <div className="RouteIcon">
              <Routeicon />
            </div>
            <div className="area-overlap RouteInfo">
              <Routeinfo />
            </div>
          </div>
          <div className="Calendar">
            <div className="area-overlap Caldate">
              <Caldate />
            </div>
            <div className="CalInfo">
              <Calinfo />
            </div>
          </div>
          <div className="Sport">
            <div className="Table">
              <Sporttable />
            </div>
            <div className="Fixture">
              <Sportfixture />
            </div>
            <div className="area-overlap Sporticon">
              <Sporticon />
            </div>
          </div>
          <div className="News">
            <div className="area-overlap Newsicon">
              <Newsicon />
            </div>
            <div className="newsinfo">
              <Newsinfo />
            </div>
          </div>
          <div className="Twitter">
            <div className="area-overlap TwitIcon">
              <Twittericon />
            </div>
            <div className="Twitinfo">
              <Twitterinfo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
