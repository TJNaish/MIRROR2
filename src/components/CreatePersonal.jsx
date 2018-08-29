import React, { Component } from "react";
import WebcamCapture from "./Webcam";
import Login from "./Google";

import "../App2.css";

export default class CreatePersonal extends Component {
  state = {
    firstname: "",
    lastname: "",
    screenname: "",
    workStreetNo: "",
    workStreet: "",
    workCity: "",
    workPostcode: "",
    calendar: "",
    newsInput: "",
    newsPref: [],
    accs: [],
    home: {}
  };

  // componentDidMount = async () => {
  //   const all = JSON.parse(localStorage);

  //   if (Object.values(home).length > 0) {
  //     this.setState({ home });
  //     this.setState({ created: true });
  //   }
  // };

  render() {
    return (
      <div className="row">
        <div className="column">
          <h1>Create your account</h1>

          <p>Firstname: </p>
          <input
            type="text"
            onChange={this.handleFirstnameChange}
            value={this.state.firstname}
          />

          <p>Lastname: </p>
          <input
            type="text"
            onChange={this.handleLastnameChange}
            value={this.state.lastname}
          />

          <p>Screenname: </p>
          <input
            type="text"
            onChange={this.handleScreennameChange}
            value={this.state.screenname}
          />

          <h3>Work/School address </h3>
          <p>Street No: </p>
          <input
            type="text"
            onChange={this.handleWorkStreetNoChange}
            value={this.state.workStreetNo}
          />

          <p>Street: </p>
          <input
            type="text"
            onChange={this.handleWorkStreetChange}
            value={this.state.workStreet}
          />

          <p>City: </p>
          <input
            type="text"
            onChange={this.handleWorkCityChange}
            value={this.state.workCity}
          />

          <p>Postcode: </p>
          <input
            type="text"
            onChange={this.handleWorkPostcodeChange}
            value={this.state.workPostcode}
          />

          <p>Add subjects to your news feed: </p>
          {this.state.newsPref.map(function(n) {
            return <p>{n}</p>;
          })}
          <input
            type="text"
            onChange={this.handleNewsInput}
            onKeyUp={this.handleSubmitNews}
            value={this.state.newsInput}
          />

          <p>Login with Google to authorise calendar access</p>
          <Login />

          <p>Google calendar id</p>
          <input
            type="text"
            onChange={this.handleCalendar}
            value={this.state.calendar}
          />

          <button onClick={this.handleButtonSubmit}>Submit</button>
          <button onClick={this.handleButtonPress}>press</button>

          <WebcamCapture name={this.state.firstname} />
        </div>
        <div className="column">
          <h3>Created Accounts</h3>
          {[...this.state.accs].map(function(name) {
            return (
              <p>
                {name.firstname} {name.lastname}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
  handleFirstnameChange = event => {
    this.setState({ firstname: event.target.value });
  };
  handleLastnameChange = event => {
    this.setState({ lastname: event.target.value });
  };
  handleScreennameChange = event => {
    this.setState({ screenname: event.target.value });
  };
  handleWorkStreetNoChange = event => {
    this.setState({ workStreetNo: event.target.value });
  };
  handleWorkStreetChange = event => {
    this.setState({ workStreet: event.target.value });
  };
  handleWorkCityChange = event => {
    this.setState({ workCity: event.target.value });
  };
  handleWorkPostcodeChange = event => {
    this.setState({ workPostcode: event.target.value });
  };
  handleNewsInput = event => {
    this.setState({ newsInput: event.target.value });
  };
  handleSubmitNews = event => {
    if (event.keyCode === 13) {
      console.log("hitENter<<<<<<<<<<<<<<<<<<<<,,,");
      this.setState({ newsPref: [...this.state.newsPref, event.target.value] });
      this.setState({ newsInput: "" });
    }
  };
  handleCalendar = event => {
    this.setState({ calendar: event.target.value });
  };
  handleButtonSubmit = event => {
    console.log("hit function");

    localStorage.setItem(this.state.firstname, JSON.stringify(this.state));
    this.setState({
      accs: [
        ...this.state.accs,
        { firstname: this.state.firstname, lastname: this.state.lastname }
      ]
    });
    this.setState({
      firstname: "",
      lastname: "",
      screenname: "",
      workStreetNo: "",
      workStreet: "",
      workCity: "",
      workPostcode: "",
      calendar: "",
      newsInput: "",
      newsPref: []
    });
  };

  handleButtonPress = event => {
    console.log(localStorage);
  };
}
