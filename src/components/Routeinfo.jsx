import React, { Component } from "react";
import API_KEY from "./config/routeApiKey";
import superagent from "superagent";

const agent = superagent.agent();

class TravelTimeApi extends Component {
  state = {
    travelTime: {},
    newOb: {},
    time: "",
    distance: ""
  };
  componentDidMount = async () => {
    await superagent
      .get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${
          this.props.home
        }&destinations=${this.props.work}&key=${API_KEY}`
      )

      .then((error, response) => {
        if (error) {
          console.error(error);
          this.setState({ travelTime: JSON.parse(error.text) });
          const ob = { ...this.state.travelTime.rows };
          const ob2 = ob[0];
          this.setState({ newOb: ob2 });

          this.setState({
            distance: this.state.newOb.elements[0].distance.text,
            time: this.state.newOb.elements[0].duration.text
          });
        } else {
          console.log(response);
        }
      });
  };

  render() {
    return (
      <div>
        <p className="travelTime">
          Your travel time is {this.state.time} to travel {this.state.distance}
        </p>
      </div>
    );
  }
}

export default TravelTimeApi;
