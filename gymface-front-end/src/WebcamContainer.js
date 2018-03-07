import React, { Component } from 'react';
import Webcam from 'react-webcam'

class WebcamContainer extends Component {

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.generateBuffer(imageSrc)
  };

  generateBuffer = (base64img) => {
    var matches = base64img.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var type = matches[1]; // e.g. 'image/jpeg'
    var buffer = new Buffer(matches[2], 'base64');
    // ^^ img content converted to binary buffer stream
    this.props.webcamCallback(buffer, base64img)
  }

render() {
    return (
<<<<<<< HEAD
      <div onClick={this.capture}>
        <Webcam audio={false} ref={this.setRef} screenshotFormat="image/jpeg" height="300"/>
        <button className="button" onClick={this.capture}>Capture Image</button>
=======
      <div>
        <Webcam audio={false} ref={this.setRef} screenshotFormat="image/jpeg" height="300"/><br/>
        <button onClick={this.capture}>Capture Image</button>
>>>>>>> 1ba19b15e1ab8dbe0c7c24b00e5e63d65f41cb8d
      </div>
    );
  }

}

export default WebcamContainer;
