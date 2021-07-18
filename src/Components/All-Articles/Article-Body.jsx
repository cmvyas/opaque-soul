//import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import "./ReadArticle.css";
class ArticleBody extends React.Component {
  render() {
    const { title, subtitle, highlight, story } = this.props.article;
    return (
      <div className='Read'>
        <div id='progressbar'> </div>
        <div id='scrollpath'></div>
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
            <p className='readsubheading'>By-{subtitle}</p>
          </div>
          <div className='blockquotes'>
            <p className='readquote'>{highlight}</p>
          </div>
          <div>
            <p className='storyread'>{story}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleBody;
