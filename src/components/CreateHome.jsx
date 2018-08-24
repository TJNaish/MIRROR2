import React, { Component } from 'react';

export default class CreateHome extends Component {
  state = {
    houseNo: '',
    street: '',
    city: '',
    postCode: '',
    created: false,
    home: {}
  };

  componentDidMount = async () => {
    const home = JSON.parse(localStorage.getItem('home'));

    if (home !== null) {
      this.setState({ home });
      this.setState({ created: true });
    }
  };

  render() {
    const home = this.state.home;
    console.log(typeof home, '<<<<<<<<<<<<,,');
    if (!this.state.created) {
      return (
        <div>
          <h3>First create your home account</h3>
          <input type="text" onChange={this.handleNoChange} />
          <br />
          <br />
          <input type="text" onChange={this.handleStreetChange} />
          <br />
          <br />
          <input type="text" onChange={this.handleCityChange} />
          <br />
          <br />
          <input type="text" onChange={this.handlePostCodeChange} />
          <br />
          <br />
          <button onClick={this.handleButtonPress}>press</button>
        </div>
      );
    } else console.log('hitting');
    return (
      <div>
        <h3>
          {home.houseNo} {home.street}
        </h3>

        <h3>{home.city} </h3>
        <h3>{home.postCode} </h3>
      </div>
    );
  }
  handleStreetChange = event => {
    this.setState({ street: event.target.value });
  };
  handleNoChange = event => {
    this.setState({ houseNo: event.target.value });
  };
  handleCityChange = event => {
    this.setState({ city: event.target.value });
  };
  handlePostCodeChange = event => {
    this.setState({ postCode: event.target.value });
  };
  handleButtonPress = event => {
    localStorage.setItem('home', JSON.stringify(this.state));
    this.setState({ created: true });
  };
}
