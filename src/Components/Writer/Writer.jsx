import React from "react";
import flower from "./tulip.jpeg";
import "./Writer.css";
import { Link, withRouter } from "react-router-dom";
class Writer extends React.Component {
  constructor() {
    super();
    this.state = {
      coverImage: flower,
      title: "",
      subtitle: "",
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
    this.setState({ subtitle: e.target.value });
  };
  updateStory = (e) => {
    this.setState({ story: e.target.value });
  };

  onSubmitSaveButton = () => {
    fetch("http://localhost:4001/newArticle", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.state.title,
        subtitle: this.state.subtitle,
        story: this.state.story,
      }),
    })
      .then((response) => response.json())
      .then((article) => {
        if (article) {
          this.props.newArticle(article);
          //this.props.succesfulSubmission();
          this.props.history.push("/addArticle");
          console.log("success");
        }
      });
  };

  render() {
    const { coverImage } = this.state;
    return (
      <div className='Article'>
        <div></div>
        <div>
          <div className='body-article'>
            <div className='article-title'>
              <button className='save' onClick={this.onSubmitSaveButton}>
                Save
              </button>
              <input
                onChange={this.updateTitle}
                className='article-heading'
                type='text'
                placeholder='Title'
              ></input>
            </div>
            <div className='article-subheading'>
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

export default withRouter(Writer);
