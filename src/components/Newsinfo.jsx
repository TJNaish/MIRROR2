import React, { Component } from "react";
import axios from "axios";

class Newsinfo extends Component {
  state = { articles: [] };
  render() {
    return (
      <div>
        {this.state.articles.map(article => {
          return (
            <span>
              {article.title}
              <br />
            </span>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=5&apiKey=ce019594880f43fb91e02ce8b26ee9e2"
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({ articles: data.articles });
      });
  }
}

export default Newsinfo;
