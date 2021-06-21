import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
    };
  }
  onUserChange = (e) => {
    this.setState({ user: e.target.value }, console.log(this.state.user));
  };
  onPasswordChange = (e) => {
    this.setState(
      { password: e.target.value },
      console.log(this.state.password)
    );
  };

  onSubmitLoginIn = () => {
    fetch();
  };

  render() {
    return (
      <div className='Login'>
        <div className='card'>
          <div className='img'>
            <img alt='login'></img>
          </div>
          <div className='card-body'>
            <button className='h1'>Login</button>

            <div className='form'>
              <form>
                <div>
                  <input
                    onChange={this.onUserChange}
                    className='form1'
                    type='text'
                    placeholder='User'
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
                  <Link to='/writer'>
                    <button
                      onClick={() => {
                        this.props.onRouteChange();
                      }}
                      className='login-button'
                      type='submit'
                    >
                      Login
                    </button>
                  </Link>
                </div>
                <div className='text'>
                  Don't have an account?<Link to='/register'> Register</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
