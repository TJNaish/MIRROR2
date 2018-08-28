import React, { Component } from "react";
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
} from "./components";
import "./App.css";
import "./App.css";
class App extends Component {
  state = {
    username: "Tim",
    sportsteam: "Wigan Athletic",
    weathercity: "Manchester"
  };
  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <div className="Clock">
            <Clockpage />
          </div>
          <div className="Name">
            <Name username={this.state.username} />
          </div>
          <div className="Weather">
            <div className="WeatherIcon">
              <Weathericon setCity={this.state.weathercity} />
            </div>
            <div className="area-overlap WeatherInfo">
              <Weatherinfo setCity={this.state.weathercity} />
            </div>
          </div>
          {this.state.username && (
            <div className="Todo">
              <Todo />
            </div>
          )}
          {this.state.username && (
            <div className="Route">
              <div className="RouteIcon">
                <Routeicon />
              </div>
              <div className="area-overlap RouteInfo">
                <Routeinfo />
              </div>
            </div>
          )}
          {this.state.username && (
            <div className="Calendar">
              <div className="area-overlap Caldate">
                <Caldate />
              </div>
              <div className="CalInfo">
                <Calinfo />
              </div>
            </div>
          )}
          {this.state.sportsteam && (
            <div className="Sport">
              <div className="Table">
                <Sporttable setTeam={this.state.sportsteam} />
              </div>
              <div className="Fixture">
                <Sportfixture setTeam={this.state.sportsteam} />
              </div>
              <div className="area-overlap Sporticon">
                <Sporticon />
              </div>
            </div>
          )}
          {this.state.username && (
            <div className="News">
              <div className="area-overlap Newsicon">
                <Newsicon />
              </div>
              <div className="newsinfo">
                <Newsinfo />
              </div>
            </div>
          )}
          {this.state.username && (
            <div className="Twitter">
              <div className="area-overlap TwitIcon">
                <Twittericon />
              </div>
              <div className="Twitinfo">
                <Twitterinfo />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
