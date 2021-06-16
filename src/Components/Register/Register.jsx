import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  onPasswordChange = (e) => {
    this.setState(
      { password: e.target.value },
      console.log(this.state.password)
    );
  };
  render() {
    return (
      <div className='Login'>
        <div className='card'>
          <div className='img'>
            <img></img>
          </div>
          <div className='card-body'>
            <button className='h1'>register</button>

            <div className='form'>
              <form>
                <div>
                  <input
                    className='form1'
                    type='text'
                    placeholder='Name'
                  ></input>
                </div>
                <div>
                  <input
                    className='form1'
                    type='email'
                    placeholder='Email'
                  ></input>
                </div>
                <div>
                  <input
                    className='form1'
                    type='password'
                    placeholder='Password'
                  ></input>
                </div>
                <div>
                  <button className='login-button' type='submit'>
                    Register
                  </button>
                </div>
                <div className='text'>
                  Already have an account ?<Link to='/login'> Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
