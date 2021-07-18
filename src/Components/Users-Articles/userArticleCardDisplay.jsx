import React from "react";
import "../User-Profile/AddArticle/AddArticle.css";
import Landing from "../Landing/landing";
import { withRouter } from "react-router-dom";
class UserArticleCard extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  componentDidMount() {
    this.setState({ name: this.props.name });
  }

  render() {
    return (
      <div>
        <div>
          <Landing name={this.props.name} />
        </div>
        <div className='Add'>
          {this.props.allArticles.map((articlebody) => (
            <div key={articlebody.id}>
              <div className='cardd'>
                <div>
                  <p className='display-heading'>{articlebody.title}</p>
                </div>
                <div>
                  <p className='display-sub'>{articlebody.subtitle}</p>
                </div>
                <button
                  className='readhere'
                  onClick={async () => {
                    await this.props.currentArticleId(articlebody.id);
                    this.props.history.push("/readArticle");
                  }}
                >
                  read
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(UserArticleCard);
