import React from "react";
import UserArticle from "./userArticle";

class UserArticles extends React.Component {
  constructor() {
    super();
    this.state = {
      allArticles: [],
    };
  }
  componentDidMount() {
    fetch(
      `https://immense-caverns-74957.herokuapp.com/opaque-soul/writers/${this.props.email}`
    )
      .then((response) => response.json())
      .then((article) => this.setState({ allArticles: article }));
  }
  render() {
    return (
      <div className='Add'>
        <UserArticle
          allArticles={this.state.allArticles}
          name={this.props.name}
          currentArticleId={this.props.currentArticleId}
        />
      </div>
    );
  }
}
export default UserArticles;
