import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import pen from "./o.png";

const Navigation = () => {
  return (
    <div>
      <nav>
        <p className='icon' style={{ float: "left" }}>
          <img className='logo-img' src={pen}></img>
        </p>
        <Link to='/login'>
          <p className='login' style={{ float: "right" }}>
            LogIn
          </p>
        </Link>
        <Link to='/register'>
          <p className='login' style={{ float: "right" }}>
            Register
          </p>
        </Link>
      </nav>
    </div>
  );
};
export default Navigation;
