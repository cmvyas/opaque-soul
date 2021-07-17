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
      .then(
        (article) => this.setState({ allArticles: article }),
        console.log(this.state.allArticles)
      );
  }
  render() {
    return (
      <div className='Add'>
        <UserArticleCard allArticles={this.state.allArticles} />
      </div>
    );
  }
}
export default UserArticles;
