import React, { Component } from "react";
import { apikey } from "./config/fixturesApiKey";

class Fixtures extends Component {
  state = {
    data: [],
    sportsTeam: ""
  };
  render() {
    return (
      <div>
        {this.state.data.map(team => {
          if (team.team_name === this.state.sportsTeam)
            return (
              <div key={team.team_name}>
                <b>{this.state.sportsTeam}</b>
                <table>
                  <tbody>
                    <tr>
                      <td>Position </td>
                      <td>Played </td>
                      <td>Won </td>
                      <td>Lost </td>
                      <td>Points</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>{team.overall_league_position}</td>
                      <td>{team.overall_league_payed}</td>
                      <td>{team.overall_league_W}</td>
                      <td>{team.overall_league_L}</td>
                      <td>{team.overall_league_PTS}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
        })}
      </div>
    );
  }

  componentDidMount = async () => {
    Promise.all([JSON.parse(localStorage.getItem(this.props.name))]).then(
      user => {
        if (user !== null) {
          this.setState({ sportsTeam: user[0].sportsTeam });
        }
      }
    );
    fetch(
      `https://apifootball.com/api/?action=get_standings&league_id=63&APIkey=${apikey}`
    )
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  };
}

export default Fixtures;
