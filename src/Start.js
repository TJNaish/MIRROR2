import React, { Component } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import Mirror from "./Mirror";
import Clockpage from "./components/Clockpage";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import AccountCreation from "./AccountCreation";

export default class Start extends Component {
  state = {
    imageData: [],
    user: "",
    match: false
  };
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ imageData: imageSrc });
  };

  componentDidMount() {
    setTimeout(this.handlePhotoRecur, 2000);
  }
  render() {
    const videoConstraints = {
      width: 150,
      height: 150,
      facingMode: "user",
      screenshotQuality: 1
    };
    if (this.state.match) {
      return (
        <div>
          <Mirror name={this.state.user} />
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
        </div>
      );
    } else {
      return (
        <div className="Clock">
          <Clockpage className="startClock" />
          <div className="hidden">
            <Webcam
              audio={false}
              height={350}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={350}
              videoConstraints={videoConstraints}
            />
          </div>
          <BrowserRouter>
            <Route path="/createAcc" component={AccountCreation} />
          </BrowserRouter>
        </div>
      );
    }
  }

  handlePhotoRecur = setInterval(() => {
    this.capture();
    axios
      .post(`http://192.168.230.109:3001/write`, {
        imageData: this.state.imageData
      })
      .then(res => {
        console.log(res, "<><><><><><><><><><");
        console.log(res.data.prediction.distance);
        if (res.data.prediction.distance < 0.6) {
          if (!this.state.match) {
            return this.setState({
              user: res.data.prediction.className,
              match: true
            });
          }
        }
        if (
          res.data.prediction === "no match!" ||
          res.data.prediction.distance >= 0.6
        ) {
          return this.setState({ match: false });
        }
      });
  }, 3000);
}
