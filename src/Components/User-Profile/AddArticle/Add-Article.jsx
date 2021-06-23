import React from "react";
import "./AddArticle.css";
import img from "./d3.jpeg";

class AddArticle extends React.Component {
  render() {
    return (
      <div className='Add'>
        <div className='cardd'>
          <div>
            <img className='cover-img' alt='img' src={img}></img>
          </div>
          <div>
            <p className='heading'>{heading}</p>
          </div>
          <div>
            <p className='sub'>{subheading}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AddArticle;
