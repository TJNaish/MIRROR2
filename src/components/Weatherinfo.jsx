import React, { Component } from "react";
import { apikey } from "./config/weatherApiKey";
import axios from "axios";
import propTypes from "prop-types";

class Weather extends Component {
  state = {
    data: {}
  };

  render() {
    const weather = this.state.data;
    return !this.state.data.main ? (
      <p>Loading... </p>
    ) : (
      <div>
        <p>
          {weather.name} <br />
          {this.state.data.weather[0].description[0].toUpperCase() +
            this.state.data.weather[0].description.slice(1)}{" "}
          <br />
          {(this.state.data.main.temp - 273.15).toFixed(0)} °C
        </p>
      </div>
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
