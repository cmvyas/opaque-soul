import React from "react";
import "./AddArticle.css";
import img from "./d3.jpeg";

class AddArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      subtitle: "",
      story: "",
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
            <p className='heading'></p>
          </div>
          <div>
            <p className='sub'></p>
          </div>
        </div>
      </div>
    );
  }
}

export default AddArticle;
