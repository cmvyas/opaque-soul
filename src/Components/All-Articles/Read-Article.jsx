import React from "react";
import ArticleBody from "./Article-Body";
class ReadArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      article: {},
    };
  }
  componentDidMount() {
    fetch(
      `https://immense-caverns-74957.herokuapp.com/opaque-soul/readers/${this.props.currentArticleId}`
    )
      .then((response) => response.json())
      .then((article) => this.setState({ article: article }))
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div>
        <ArticleBody article={this.state.article} />
      </div>
    );
  }
}
export default ReadArticle;
