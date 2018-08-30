import React, { Component } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import Mirror from '../Mirror';
import Clockpage from '../components/Clockpage';

export default class Start extends Component {
  state = {
    imageData: [],
    user: ''
  };
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ imageData: imageSrc });
  };

  componentDidMount() {
    setTimeout(() => {
      this.handlePhotoRecur();
    }, 2000);
  }
  render() {
    console.log(this.state);
    const videoConstraints = {
      width: 150,
      height: 150,
      facingMode: 'user',
      screenshotQuality: 0.5
    };
    if (this.state.user.length > 0) {
      return (
        <div>
          <Mirror name={this.state.user} />
        </div>
      );
    } else {
      return (
        <div>
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
       
        </div>
      );
    }
  }
  handlePhotoRecur = async () => {
    this.capture();

    console.log(this.imageData, 'imagesdata');

    console.log('hit');
    setTimeout(() => {
      await axios
        .post(`http://192.168.230.109:3000/write`, {
          imageData: this.state.imageData
        })})
      .then(res => {
        console.log(res);
        console.log(res.data.prediction.distance);
        if (res.data.prediction.distance < 0.6) {
          this.setState({ user: res.data.prediction.className });
        }
        if (
          res.data.prediction === 'no match!' ||
          res.data.prediction.distance >= 0.6
        ) {
          console.log(res);
          return setTimeout(() => {
            this.handlePhotoRecur();
          }, 3500);
        }
      });
  };
}
