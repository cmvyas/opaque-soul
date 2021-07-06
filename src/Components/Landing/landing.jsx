import React from "react";
import "./landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className='landing-top'>
        <h4 className='landing-reader-writer'>OS Collection</h4>
        <h4 className='landing-reader-writer'>{`${this.props.name}'s Diary`}</h4>
      </div>
    );
  }
}
export default Landing;
