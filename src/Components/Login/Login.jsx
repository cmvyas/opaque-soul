import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.css";
import Footer from "../footer/footer";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      nameError: "",
      noUser: false,
    };
  }

  onUserChange = (e) => {
    this.setState({ email: e.target.value });
  };
  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  validate = () => {
    let nameError = "";

    if (!this.state.email || !this.state.password) {
      nameError = "Try Again";
    }

    if (nameError) {
      this.setState({ nameError });
      return false;
    }
    return true;
  };

  onSubmitLoginIn = () => {
    const isValid = this.validate();
    if (isValid) {
      fetch("https://immense-caverns-74957.herokuapp.com/signin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.id) {
            this.props.newUser(data);
            this.props.onLoginChange();
            this.props.history.push("/opaque-soul-collection");
          }
        });
    }
  };

  render() {
    return (
      <div className='Login'>
        <div className='card'>
          <div className='img'>
            <img></img>
          </div>
          <div className='card-body'>
            <button className='h1'>Login</button>

            <div className='form'>
              <div>
                {this.state.nameError ? (
                  <div className='error'>{this.state.nameError}</div>
                ) : null}
                <input
                  required
                  value={this.state.email}
                  onChange={this.onUserChange}
                  className='form1'
                  type='text'
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
                  onClick={this.onSubmitLoginIn}
                  className='login-button'
                  type='submit'
                >
                  Login
                </button>
              </div>
              <div className='text'>
                Don't have an account?<Link to='/register'> Register</Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Login);
