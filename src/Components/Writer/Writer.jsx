import React from "react";
import { Link } from "react-router-dom";
import flower from "./tulip.jpeg";
import add from "./add.png";
import "./Writer.css";

class Writer extends React.Component {
  state = {
    coverImage: flower,
  };
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
                className='heading'
                type='text'
                placeholder='Title'
              ></input>
            </div>
            <progress
              id='reading-progress'
              class='bf-progress'
              value='6745'
              aria-valuenow='6745'
              aria-valuemin='0'
              aria-valuemax='22218.4'
              max='22218.4'
            >
              <div class='bf-progress-container'>
                <span class='bf-progress-bar'></span>
              </div>
            </progress>
            <div className='sub'>
              <textarea
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
