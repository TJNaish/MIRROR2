import React, { Component } from 'react';
import Webcam from 'react-webcam';

export default class WebcamCapture extends Component {
  state = {
    images: []
  };
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    const ob = {
      newUserData: {
        name: this.props.name,
        images: [...this.state.images, imageSrc]
      }
    };
    // ob[this.props.name] = imageSrc;
    this.setState({ images: [...this.state.images, ob] });
    console.log(this.state);
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user'
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
      </div>
    );
  }
}
