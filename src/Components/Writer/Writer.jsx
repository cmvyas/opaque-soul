import React from "react";
import Footer from "../footer/footer";
import "./Writer.css";
import { Link, withRouter } from "react-router-dom";

class Writer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      subtitle: "",
      story: "",
      email: "",
      highlight: "",
      titleError: "",
      storyError: "",
      highlightError: "",
      byError: "",
    };
  }
  validate = () => {
    let titleError = "";
    let storyError = "";
    let highlightError = "";
    let byError = "";

    if (!this.state.title) {
      titleError = "title is blank";
    }
    if (!this.state.story) {
      storyError = "write your story";
    }
    if (!this.state.subtitle) {
      byError = "your name";
    }
    if (!this.state.highlight) {
      highlightError = "highlight of your story";
    }
    if (titleError || storyError || highlightError || byError) {
      this.setState({ titleError, highlightError, storyError, byError });
      return false;
    }
    return true;
  };
  componentDidMount() {
    this.setState({ email: this.props.email });
  }
  updateTitle = (e) => {
    this.setState({ title: e.target.value }, console.log(this.state.title));
  };
  updatesubTitle = (e) => {
    this.setState({ subtitle: e.target.value });
  };
  updateStory = (e) => {
    this.setState({ story: e.target.value });
  };
  updateEmail = () => {
    this.setState({ email: this.props.email });
  };
  updateHighlight = (e) => {
    this.setState(
      { highlight: e.target.value },
      console.log(this.state.highlight)
    );
  };

  onSubmitSaveButton = () => {
    const isValid = this.validate();
    if (isValid) {
      fetch("https://immense-caverns-74957.herokuapp.com/newArticle", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.state.title,
          subtitle: this.state.subtitle,
          story: this.state.story,
          email: this.state.email,
          highlight: this.state.highlight,
        }),
      })
        .then((response) => response.json())
        .then((article) => {
          if (article) {
            this.props.newArticle(article);
          }
        })
        .then(this.props.history.push("/saved"));
    }
  };

  render() {
    return (
      <div className='Article'>
        <div></div>
        <div>
          <div className='body-article'>
            <div className='article-title'>
              <button className='save' onClick={this.onSubmitSaveButton}>
                Save
              </button>

              {this.state.titleError ? (
                <div className='storyerror'>{this.state.titleError}</div>
              ) : null}
              <textarea
                rows='2'
                onChange={this.updateTitle}
                className='article-heading'
                type='text'
                placeholder='Title'
              ></textarea>
            </div>
            <div className='article-subheading'>
              {this.state.byError ? (
                <div className='storyerror'>{this.state.byError}</div>
              ) : null}
              <input
                onChange={this.updatesubTitle}
                type='text'
                className='article-subheading'
                placeholder='By -'
              ></input>

              <div className='blockquote'>
                {this.state.highlightError ? (
                  <div className='storyerror'>{this.state.highlightError}</div>
                ) : null}
                <textarea
                  onChange={this.updateHighlight}
                  maxLength='300'
                  className='highlight'
                  placeholder='Highlight Of Your Writing'
                  rows='6'
                  cols='60'
                ></textarea>
              </div>
              <div className='Story'>
                {this.state.storyError ? (
                  <div className='storyerror'>{this.state.storyError}</div>
                ) : null}
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
        <Footer />
      </div>
    );
  }
}

export default withRouter(Writer);
