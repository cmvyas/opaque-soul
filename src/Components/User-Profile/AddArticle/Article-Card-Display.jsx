import React from "react";
import Landing from "../../Landing/landing";
import "./AddArticle.css";
import img from "./d3.jpeg";
import { Link, withRouter } from "react-router-dom";

class AddArticle extends React.Component {
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
        <div className='landing-top'>
          <Link to='/all'>
            <h4 className='landing-reader-writer'>OS Collection</h4>
          </Link>
          <Link to='/user-collection'>
            <h4 className='landing-reader-writer'>{`${this.props.name}'s Diary`}</h4>
          </Link>
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
                  className='save'
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

export default withRouter(AddArticle);
