import React from "react";
import { Link } from "react-router-dom";
import flower from "./tulip.jpeg";

import "./Writer.css";

class Writer extends React.Component {
  constructor() {
    super();
    this.state = {
      coverImage: flower,
      title: "",
      subTitle: "",
      story: "",
    };
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ coverImage: reader.result });
        console.log(reader);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  updateTitle = (e) => {
    this.setState({ title: e.target.value }, console.log(this.state.title));
  };
  updatesubTitle = (e) => {
    this.setState(
      { subTitle: e.target.value },
      console.log(this.state.subTitle)
    );
  };
  updateStory = (e) => {
    this.setState({ story: e.target.value }, console.log(this.state.story));
  };

  render() {
    const { coverImage } = this.state;
    return (
      <div className='Article'>
        <div></div>
        <div>
          <div className='body-article'>
            <div className='headingg'>
              <button className='button'>Save</button>
              <input
                onChange={this.updateTitle}
                className='heading'
                type='text'
                placeholder='Title'
              ></input>
            </div>
            <div className='sub'>
              <textarea
                onChange={this.updatesubTitle}
                rows='2'
                type='text'
                className='sub'
                placeholder='Sub-Heading'
              ></textarea>
              <div>
                <div className='img-holder'>
                  <input
                    type='file'
                    name='image-upload'
                    id='input'
                    accept='image/*'
                    onChange={this.imageHandler}
                  ></input>
                  <label className='image-upload' htmlFor='input'>
                    <p className='p'>+</p>
                  </label>

                  <img alt='' id='img' src={coverImage} className='imgg' />
                </div>
              </div>
              <div className='Story'>
                <textarea
                  onChange={this.updateStory}
                  className='story'
                  rows='40'
                  cols='80'
                  placeholder='Your Story....'
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Writer;
