import React from "react";
import "./save.css";
import butterfly from "./butterfly.gif";
class Save extends React.Component {
  render() {
    return (
      <div className='article-save'>
        <h3 className='waiting'>
          Saved Succesfully, we are waiting to hear more from you{" "}
        </h3>
      </div>
    );
  }
}
export default Save;
