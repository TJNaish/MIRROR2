import React, { Component } from "react";
import axios from "axios";

class Onthisday extends Component {
  state = {
    data: {},
    text: ""
  };
  componentDidMount = async () => {
    axios.get(`https://history.muffinlabs.com/date`).then(data => {
      this.setState({ data });
      if (Object.keys(this.state.data).length > 0) {
        let max = this.state.data.data.data.Events.length;
        let num = Math.floor(Math.random() * max);
        let text = `On ${this.state.data.data.date} ${
          this.state.data.data.data.Events[num].year
        }: ${this.state.data.data.data.Events[num].text}`;
        this.setState({ text });
      }
    });
  };

  render() {
    return <div>{this.state.text}</div>;
  }
}
export default Onthisday;
