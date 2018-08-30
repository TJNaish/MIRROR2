import React, { Component } from "react";
import axios from "axios";

class Onthisday extends Component {
  state = {
    data: {}
  };
  componentDidMount = async () => {
    axios.get(`https://history.muffinlabs.com/date`).then(data => {
      this.setState({ data });
    });
  };

  render() {
    let onThisDay = "Loading...";
    if (Object.keys(this.state.data).length > 0) {
      let max = this.state.data.data.data.Events.length;
      let num = Math.floor(Math.random() * max);
      onThisDay = `${this.state.data.data.data.Events[num].year} - ${
        this.state.data.data.data.Events[num].text
      }`;
    }
    return <div>{onThisDay}</div>;
  }
}
export default Onthisday;
