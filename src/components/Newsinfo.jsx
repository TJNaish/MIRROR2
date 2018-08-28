import React, { Component } from "react";
import axios from "axios";
import { apikey } from "./config/newsApiKey";

class Newsinfo extends Component {
  state = { articles: [] };
  render() {
    const articles = this.state.articles;
    return this.state.articles.length === 0 ? (
      <p>Loading...</p>
    ) : (
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
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=5&apiKey=${apikey}`
      )
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      });
  }
}

export default Newsinfo;
