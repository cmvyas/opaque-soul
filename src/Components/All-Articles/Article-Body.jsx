//import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import "./ReadArticle.css";
class ArticleBody extends React.Component {
  render() {
    const { title, subtitle, story } = this.props.article;
    return (
      <div className='Read'>
        <div className='bodyarticle'>
          <div className='article-title'>
            <Link to='/opaque-soul'>
              <button className='save'>BACK</button>
            </Link>
          </div>
          <div>
            <p className='readheading'>{title}</p>
          </div>
          <div>
            <p className='readsubheading'>{subtitle}</p>
          </div>

          <div>
            <p className='story'>{story}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleBody;
