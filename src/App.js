import React from "react";
import Login from "./Components/Login/Login";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Writer from "./Components/Writer/Writer";
import Register from "./Components/Register/Register";
import Background from "./Components/Background/background";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
    };
  }

  onRouteChange = () => {
    this.setState((currentState) => ({
      login: !currentState.login,
    }));
  };

  render() {
    console.log(this.state.login);
    return (
      <Router>
        <div className='app'>
          <Background />
          <Navigation
            login={this.state.login}
            onRouteChange={this.onRouteChange}
          />
          <Switch>
            <Route path='/' exact component={Home}></Route>

            <Route
              path='/login'
              component={() => <Login onRouteChange={this.onRouteChange} />}
            />
            <Route
              path='/register'
              component={() => <Register onRouteChange={this.onRouteChange} />}
            />
            <Route path='/writer' component={Writer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
