import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className='landing-top'>
        <Link to='/all'>
          <h4 className='landing-reader-writer'>OS Collection</h4>
        </Link>
        <Link to='/user-collection'>
          <h4 className='landing-reader-writer'>{`${this.props.name}'s Diary`}</h4>
        </Link>
      </div>
    );
  }
}
export default Landing;
