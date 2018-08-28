import React, { Component } from "react";
import { apikey } from "./config/weatherApiKey";
import axios from "axios";
import propTypes from "prop-types";

class Weather extends Component {
  state = {
    data: {}
  };

  render() {
    let daynight = "";
    let weathertype = "";
    if (this.state.data.sys) {
      let time = (Date.now() - (Date.now() % 1000)) / 1000;
      let code = this.state.data.weather[0].id;
      if (
        time > this.state.data.sys.sunrise &&
        time < this.state.data.sys.sunset
      ) {
        daynight = "day";
      } else {
        daynight = "night";
      }
      if (code < 300) weathertype = "thunder";
      if ((code >= 300 && code < 500) || (code >= 512 && code < 600))
        weathertype = "rain";
      if (code >= 500 && code < 511) weathertype = "lightrain";
      if (code === 511 || (code >= 600 && code < 700)) weathertype = "snow";
      if (code >= 700 && code < 800) weathertype = "mist";
      if (code === 800) weathertype = "clear";
      if (code === 801) weathertype = "lightcloud";
      if (code > 801) weathertype = "cloud";
    }
    let imgpath = `/images/weather/${daynight}/${weathertype}.png`;
    return (
      <span>
        <img src={imgpath} alt="Weather icon" className="TopIconImage" />
      </span>
    );
  }

  componentDidMount = async () => {
    let data = await this.getWeatherData(this.props.setCity);
    this.setState({
      data: data
    });
  };

  componentDidUpdate = prevProps => {
    if (prevProps.setCity !== this.props.setCity) {
      this.getWeatherData(this.props.setCity).then(weatherData => {
        this.setState({
          data: weatherData
        });
      });
    }
  };

  getWeatherData = async setCity => {
    const city = setCity;
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apikey}`
    );
    return data;
  };
}

Weather.propTypes = {
  setCity: propTypes.string.isRequired
};

export default Weather;
