import React from "react";
import { withRouter } from "react-router-dom";
import AddArticle from "../User-Profile/AddArticle/Article-Card-Display";

class AllArticles extends React.Component {
  constructor() {
    super();
    this.state = {
      allArticles: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:4001/opaque-soul/readers")
      .then((response) => response.json())
      .then((article) => this.setState({ allArticles: article }));
  }

  render() {
    return (
      <div>
        <AddArticle
          currentArticleId={this.props.currentArticleId}
          allArticles={this.state.allArticles}
        />
      </div>
    );
  }
}
export default withRouter(AllArticles);
