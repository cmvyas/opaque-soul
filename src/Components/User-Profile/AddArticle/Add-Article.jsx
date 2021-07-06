import React from "react";
import "./AddArticle.css";
import img from "./d3.jpeg";

class AddArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      subtitle: "",
    };
  }
  render() {
    return (
      <div className='Add'>
        <div className='cardd'>
          <div>
            <img className='cover-img' alt='img' src={img}></img>
          </div>
          <div>
            <p className='display-heading'>{this.props.title}</p>
          </div>
          <div>
            <p className='display-sub'>{this.props.subtitle}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AddArticle;
