import React, { Component } from "react";
import { apikey } from "./config/weathericonApiKey";
import axios from "axios";
import propTypes from "prop-types";

class Weather extends Component {
  state = {
    data: { data: {} },
    name: {},
    work: {}
  };

  render() {
    let daynight = "";
    let weathertype = "";
    if (this.state.data.data.sys) {
      let time = (Date.now() - (Date.now() % 1000)) / 1000;
      let code = this.state.data.data.weather[0].id;
      if (
        time > this.state.data.data.sys.sunrise &&
        time < this.state.data.data.sys.sunset
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
