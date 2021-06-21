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
            <p className='heading'>
              Hello i am chandramani vyas Hello i am chandramani vyas
            </p>
          </div>
          <div>
            <p className='sub'>Helloo Hello i am chandramani vyas</p>
          </div>
        </div>

        <div className='cardd'>
          <div>
            <img className='cover-img' alt='img' src={img}></img>
          </div>
          <div>
            <p className='heading'>
              Hello i am chandramani vyas Hello i am chandramani vyas
            </p>
          </div>
          <div>
            <p className='sub'>Helloo Hello i am chandramani vyas</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AddArticle;
