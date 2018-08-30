import React, { Component } from "react";
import { apikey } from "./config/fixturesApiKey";

class Fixtures extends Component {
  state = {
    data: [],
    nextMatch: "",
    sportsTeam: ""
  };
  render() {
    if (this.state.data.length !== 0) {
      for (let i = 0; i < this.state.data.length; i++) {
        if (
          this.state.data[i].match_hometeam_name === this.state.sportsTeam ||
          this.state.data[i].match_awayteam_name === this.state.sportsTeam
        ) {
          let nextMatch = `${this.state.data[i].match_hometeam_name} vs ${
            this.state.data[i].match_awayteam_name
          } ${this.state.data[i].match_date} ${this.state.data[i].match_time}`;
          return nextMatch;
        }
      }
    }
    return <div />;
  }

  componentDidMount = async () => {
    Promise.all([JSON.parse(localStorage.getItem(this.props.name))]).then(
      user => {
        if (user !== null) {
          this.setState({ sportsTeam: user[0].sportsTeam });
        }
      }
    );
    let d = new Date();
    let date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    let date2 = `${d.getFullYear()}-${d.getMonth() + 2}-28`;
    fetch(
      `https://apifootball.com/api/?action=get_events&from=${date}&to=${date2}&league_id=63&APIkey=${apikey}`
    )
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  };
}

export default Fixtures;
