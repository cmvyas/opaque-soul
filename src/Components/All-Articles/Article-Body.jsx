import { render } from "@testing-library/react";
import React from "react";
import { Link, withRouter } from "react-router-dom";
class ArticleBody extends React.Component {
  render() {
    return (
      <div className='Article'>
        <div>
          <div className='body-article'>
            <div className='article-title'>
              <Link to='/save'>
                <button className='save'>BACK</button>
              </Link>
              <input
                readOnly={true}
                className='article-heading'
                type='text'
                placeholder='Title'
              ></input>
            </div>
            <div className='article-subheading'>
              <textarea
                readOnly={true}
                rows='2'
                type='text'
                className='article-subheading'
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

                  <img alt='' id='img' className='imgg' />
                </div>
              </div>
              <div className='Story'>
                <textarea
                  readOnly={true}
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

export default ArticleBody;
