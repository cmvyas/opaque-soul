import React from "react";
import UserArticleCard from "./userArticleCardDisplay";

class UserArticles extends React.Component {
  constructor() {
    super();
    this.state = {
      allArticles: [],
    };
  }
  componentDidMount() {
    fetch(`http://localhost:4001/opaque-soul/writers/${this.props.email}`)
      .then((response) => response.json())
      .then((article) => this.setState({ allArticles: article }));
  }
  render() {
    return (
      <div className='Add'>
        <UserArticleCard
          allArticles={this.state.allArticles}
          currentArticleId={this.props.currentArticleId}
          name={this.props.name}
        />
      </div>
    );
  }
}
export default UserArticles;
