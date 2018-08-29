import React, { Component } from "react";
import { apikey } from "./config/weatherApiKey";
import axios from "axios";
import propTypes from "prop-types";

class Weather extends Component {
  state = {
    data: { data: {} },
    name: {},
    work: {}
  };
  componentDidMount = async () => {
    Promise.all([
      JSON.parse(localStorage.getItem(this.props.name)),
      JSON.parse(localStorage.getItem("home"))
    ]).then(([name, work]) => {
      console.log(name + "<>" + work);
      this.setState({ name, work });
    });
  };

  componentDidUpdate = prevState => {
    if (prevState.work !== this.state.work) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            this.state.name.workCity
          },uk&appid=${apikey}`
        )
        .then(data => {
          this.setState({ data });
        });
    }
  };

  render() {
    const weather = this.state.data.data;
    return !this.state.data.data.main ? (
      <p>Loading... </p>
    ) : (
      <div>
        <p>
          {weather.name} <br />
          {this.state.data.data.weather[0].description[0].toUpperCase() +
            this.state.data.data.weather[0].description.slice(1)}{" "}
          <br />
          {(this.state.data.data.main.temp - 273.15).toFixed(0)} °C
        </p>
      </div>
    );
  }

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
