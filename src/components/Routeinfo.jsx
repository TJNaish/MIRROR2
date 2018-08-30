import React, { Component } from "react";
// import API_KEY from "../config/index";
import superagent from "superagent";

const agent = superagent.agent();

class RouteInfo extends Component {
  state = {
    travelTime: {},
    newOb: {},
    time: "",
    duration: "",
    name: "",
    work: ""
  };
  componentDidMount = async () => {
    Promise.all([
      JSON.parse(localStorage.getItem(this.props.name)),
      JSON.parse(localStorage.getItem("home"))
    ])
      .then(([name, work]) => {
        if (name !== null) {
          this.setState({ name, work });
        }
      })
      .then(() => {
        superagent
          .get(
            `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${
              this.state.name.workPostcode
            }&destinations=${
              this.state.work.postCode
            }&key=AIzaSyDDGkLxA6U_nJaXu1H3mPmCI9sDYWu2cXw`
          )
          .then((error, response) => {
            console.log(error);
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

export default RouteInfo;
