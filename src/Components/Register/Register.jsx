import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../Login/Login.css";
import Footer from "../footer/footer";
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      nameError: "",
      emailError: "",
      passwordError: "",
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
  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Name is required";
    }
    if (!this.state.password) {
      passwordError = "Password is required";
    }

    if (!this.state.email.includes("@gmail.com")) {
      emailError = "Invalid Email";
    }
    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }
    return true;
  };

  onSubmitRegister = () => {
    const isValid = this.validate();
    if (isValid) {
      fetch("https://immense-caverns-74957.herokuapp.com/register", {
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
            this.props.newUser(user);
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
            <button className='h1'>register</button>

            <div className='form'>
              <div>
                <input
                  value={this.state.name}
                  onChange={this.onNameChange}
                  className='form1'
                  type='text'
                  placeholder='Name'
                ></input>
                {this.state.nameError ? (
                  <div className='error'>{this.state.nameError}</div>
                ) : null}
              </div>

              <div>
                <input
                  value={this.state.email}
                  onChange={this.onEmailChange}
                  className='form1'
                  type='email'
                  placeholder='Email'
                ></input>
                {this.state.emailError ? (
                  <div className='error'>{this.state.emailError}</div>
                ) : null}
              </div>
              <div>
                <input
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                  className='form1'
                  type='password'
                  placeholder='Password'
                ></input>
                {this.state.passwordError ? (
                  <div className='error'>{this.state.passwordError}</div>
                ) : null}
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
        <Footer />
      </div>
    );
  }
}

export default withRouter(Register);
