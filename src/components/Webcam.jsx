import React, { Component } from "react";
import Webcam from "react-webcam";
import axios from "axios";

export default class WebcamCapture extends Component {
  state = {
    images: [],
    newUserData: {}
  };
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();

    this.setState({ images: [...this.state.images, imageSrc] });
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
        <button onClick={this.handleButton}>Submit photos</button>
      </div>
    );
  }
  handleButton = async () => {
    const User = this.state.newUserData;
    axios.post(`http://192.168.230.109:3001/newUser`, {
      newUserData: { name: this.props.name, images: [...this.state.images] }
    });
  };
}
