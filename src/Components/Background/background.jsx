import React from "react";

import "./Background.css";

class Background extends React.Component {
  render() {
    return (
      <div>
        <div class='ripple-background'>
          <div class='circle xxlarge shade1'></div>
          <div class='circle xlarge shade2'></div>
          <div class='circle large shade3'></div>
          <div class='circle mediun shade4'></div>
          <div class='circle small shade5'></div>
        </div>
      </div>
    );
  }
}
export default Background;
