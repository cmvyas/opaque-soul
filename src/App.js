import React from "react";
import Login from "./Components/Login/Login";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Writer from "./Components/Writer/Writer";
import Register from "./Components/Register/Register";
import AddArticle from "./Components/User-Profile/AddArticle/Add-Article";
import Background from "./Components/Background/background";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "login",
    };
  }
  onRouteChange = () => {};
  render() {
    return (
      <Router>
        <div className='app'>
          <Background />
          <Navigation />
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/writer' component={Writer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
