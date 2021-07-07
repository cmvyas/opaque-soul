import React from "react";
import AddArticle from "../User-Profile/AddArticle/Add-Article";

class AllArticles extends React.Component {
  constructor() {
    super();
    this.state = {
      allArticles: [
        {
          title: "ranu",
          id: "1",
        },
        {
          title: "kannu",
          id: "2",
        },
        {
          title: "shyam",
          id: "3",
        },
      ],
    };
  }
  render() {
    return (
      <div className='allarticles-card'>
        {this.state.allArticles.map((articlebody) => (
          <h1 key={articlebody.id}>{articlebody.title}</h1>
        ))}
      </div>
    );
  }
}
