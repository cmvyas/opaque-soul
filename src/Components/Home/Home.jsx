import React from "react";
import home from "./4.png";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div id='app'>
        <div class='image'>
          <img src={home} alt=''></img>
        </div>
        <div class='title'>
          <div class='title-inner'>
            <div class='cafe'>
              <div class='cafe-inner '>Welcome To</div>
            </div>
            <div class='mozart'>
              <div class='mozart-inner'>Opaque-Soul</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
