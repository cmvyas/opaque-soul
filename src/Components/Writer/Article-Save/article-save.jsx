import React from "react";
import "./save.css";
import { withRouter } from "react-router-dom";
class Save extends React.Component {
  onBack = () => {
    this.props.history.push("/landing");
  };
  render() {
    return (
      <div>
        <div className='article-save'>
          <h3 className='waiting'>
            Saved Succesfully,
            <br /> We are waiting To hear more from you{" "}
          </h3>
        </div>
        <div className='save-button'>
          <button className='back-button' onClick={this.onBack}>
            BACK
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(Save);
