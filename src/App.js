import React from "react";
import Login from "./Components/Login/Login";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Writer from "./Components/Writer/Writer";
import Register from "./Components/Register/Register";
import Background from "./Components/Background/background";
import { Switch, Route, Redirect } from "react-router-dom";
import AddArticle from "./Components/User-Profile/AddArticle/Add-Article";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
      user: {
        id: "",
        name: "0",
        email: "",
        joined: "",
      },
    };
  }
  newUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined,
      },
    });
  };
  onLoginChange = () => {
    this.setState((currentState) => ({
      login: !currentState.login,
    }));
  };

  render() {
    console.log(this.state.login);
    return (
      <div className='app'>
        <Background />
        <Navigation
          name={this.state.user.name}
          login={this.state.login}
          onLoginChange={this.onLoginChange}
        />
        <Switch>
          <Route path='/' exact component={Home}></Route>

          <Route path='/login'>
            <Login newUser={this.newUser} onLoginChange={this.onLoginChange} />
          </Route>
          <Route path='/register'>
            <Register
              newUser={this.newUser}
              onLoginChange={this.onLoginChange}
            />
          </Route>
          <Route path='/writer'>
            {!this.state.login ? <Redirect to='/login' /> : <AddArticle />}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
