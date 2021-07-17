import React from "react";
import flower from "./tulip.jpeg";
import "./Writer.css";
import { Link, withRouter } from "react-router-dom";
import firebase from "../Firebase/firebase";
class Writer extends React.Component {
  constructor() {
    super();
    this.state = {
      coverImage: flower,
      title: "",
      subtitle: "",
      story: "",
      email: "",
      files: null,
    };
  }

  componentDidMount() {
    this.setState({ email: this.props.email });
  }

  imageHandler = (files) => {
    this.setState({
      files: files,
    });
  };

  imageSave = () => {
    let bucketName = "images";
    let file = this.state.files[0];
    let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
      let downloadURL = uploadTask.snapshot.downloadURL;
    });
  };
  showImage = () => {
    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child("images/" + this.state.files[0].name);
    storageRef
      .child("images/" + this.state.files[0].name)
      .getDownloadURL()
      .then((url) => {
        document.getElementById("new_image").src = url;
        console.log(url);
      });
  };
  updateTitle = (e) => {
    this.setState({ title: e.target.value });
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
  // succesfulSubmission = () => {
  //   this.props.history.push("/save");
  // };
  wrapperFunction = () => {
    this.imageSave();
    this.onSubmitSaveButton();
  };
  onSubmitSaveButton = () => {
    fetch("http://localhost:4001/newArticle", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.state.title,
        subtitle: this.state.subtitle,
        story: this.state.story,
        email: this.state.email,
        coverImage: this.state.file,
      }),
    })
      .then((response) => response.json())
      .then((article) => {
        if (article) {
          this.props.newArticle(article);
        }
      });
  };

  render() {
    return (
      <div className='Article'>
        <div></div>
        <div>
          <div className='body-article'>
            <div className='article-title'>
              <Link to='/save'>
                <button className='save' onClick={this.onSubmitSaveButton}>
                  Save
                </button>
              </Link>
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
                className='article-subheading'
                placeholder='Sub-Heading'
              ></textarea>

              <div></div>
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
