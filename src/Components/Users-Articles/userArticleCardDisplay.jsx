import React from "react";
import "../User-Profile/AddArticle/AddArticle.css";
import img from "./d3.jpeg";

class UserArticleCard extends React.Component {
  constructor() {
    super();
    this.state = {
      open: [],
    };
  }

  // onCardClick = () => {
  //   fetch(`http://localhost:4001/opaque-soul/readers`)
  //     .then((response) => response.json())
  //     .then((open) => this.setState({ open: open }));
  //   this.props.history.push("/open");
  // };
  render() {
    return (
      <div>
        <div className='Add'>
          {this.props.allArticles.map((articlebody) => (
            <div key={articlebody.id}>
              <div className='cardd'>
                <div>
                  <img className='cover-img' alt='img' src={img}></img>
                </div>

                <div>
                  <p className='display-heading'>{articlebody.title}</p>
                </div>
                <div>
                  <p className='display-sub'>{articlebody.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UserArticleCard;
