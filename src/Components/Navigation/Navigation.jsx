import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import pen from "./o.png";

const Navigation = ({ login, onLoginChange }) => {
  return (
    <div>
      <nav>
        <p className='icon' style={{ float: "left" }}>
          <img alt='Opaque-Soul' className='logo-img' src={pen}></img>
        </p>
        {login ? (
          <div className='logout'>
            <Link to='/login'>
              <p
                onClick={() => {
                  onLoginChange();
                }}
                className='login'
                style={{ float: "right" }}
              >
                LogOut
              </p>
            </Link>
          </div>
        ) : (
          <div className='login-register'>
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
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navigation;
