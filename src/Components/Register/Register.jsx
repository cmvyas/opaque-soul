import React from "react";
import { Link, withRouter } from "react-router-dom";
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
    this.setState({ password: e.target.value });
  };

  onSubmitRegister = () => {
    fetch("http://localhost:4001/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          this.props.newUser();
          this.props.onLoginChange();
        }
      });
  };
  render() {
    return (
      <div className='Login'>
        <div className='card'>
          <div className='img'>
            <img alt='register'></img>
          </div>
          <div className='card-body'>
            <button className='h1'>register</button>

            <div className='form'>
              <div>
                <input
                  onChange={this.onNameChange}
                  className='form1'
                  type='text'
                  placeholder='Name'
                ></input>
              </div>
              <div>
                <input
                  onChange={this.onEmailChange}
                  className='form1'
                  type='email'
                  placeholder='Email'
                ></input>
              </div>
              <div>
                <input
                  onChange={this.onPasswordChange}
                  className='form1'
                  type='password'
                  placeholder='Password'
                ></input>
              </div>
              <div>
                <button
                  onClick={this.onSubmitRegister}
                  className='login-button'
                  type='submit'
                >
                  Register
                </button>
              </div>
              <div className='text'>
                Already have an account ?<Link to='/login'> Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
