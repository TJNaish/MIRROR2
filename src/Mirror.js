import React, { Component } from "react";
import {
  Clockpage,
  Name,
  Weathericon,
  Weatherinfo,
  Routeicon,
  Routeinfo,
  Sporttable,
  Sportfixture,
  Sporticon,
  Newsinfo,
  Newsicon,
  Onthisdayinfo,
  Twittericon
} from "./components";
import "./App.css";
import "./App.css";
class App extends Component {
  state = {};
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
          <div className="Weather">
            <div className="WeatherIcon">
              <Weathericon name={this.props.name} />
            </div>
            <div className="area-overlap WeatherInfo">
              <Weatherinfo name={this.props.name} />
            </div>
          </div>

          <div className="Route">
            <div className="RouteIcon">
              <Routeicon />
            </div>
            <div className="area-overlap RouteInfo">
              <Routeinfo name={this.props.name} />
            </div>
          </div>
          <div className="Sport">
            <div className="Table">
              <Sporttable name={this.props.name} />
            </div>
            <div className="Fixture">
              <Sportfixture name={this.props.name} />
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
              <Onthisdayinfo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
