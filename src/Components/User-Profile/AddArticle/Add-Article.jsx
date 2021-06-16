import React from "react";
import "./AddArticle.css";
import { Link } from "react-router-dom";

class AddArticle extends React.Component {
  render() {
    return (
      <div className='Add'>
        <div className='cardd'>
          <div className='cardd-body'>
            <button className='h1'>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddArticle;
