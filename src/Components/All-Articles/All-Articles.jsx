import React from "react";
import AddArticle from "../User-Profile/AddArticle/Article-Card-Display";

class AllArticles extends React.Component {
  constructor() {
    super();
    this.state = {
      allArticles: [],
    };
  }
  componentDidMount() {
    fetch("https://immense-caverns-74957.herokuapp.com/opaque-soul/readers")
      .then((response) => response.json())
      .then((article) => this.setState({ allArticles: article }));
  }

  render() {
    return (
      <div>
        <AddArticle
          currentArticleId={this.props.currentArticleId}
          allArticles={this.state.allArticles}
          name={this.props.name}
        />
      </div>
    );
  }
}
export default AllArticles;
