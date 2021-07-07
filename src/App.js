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
import { allArticle } from "./Components/All-Articles/All-Articles";
import Save from "./Components/Writer/Article-Save/article-save";
import Landing from "./Components/Landing/landing";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
      user: {
        id: "",
        name: "",
        email: "",
        joined: "",
      },
      article: {
        id: "",
        title: "",
        subtitle: "",
        story: "",
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
  newArticle = (newArticle) => {
    this.setState({
      article: {
        id: newArticle.id,
        title: newArticle.title,
        subtitle: newArticle.subtitle,
        story: newArticle.story,
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
          <Route path='/landing'>
            <Landing name={this.state.user.name} />
          </Route>
          <Route path='/writer'>
            {!this.state.login ? (
              <Redirect to='/login' />
            ) : (
              <Writer newArticle={this.newArticle} />
            )}
          </Route>
          <Route path='/save'>
            <Save />
          </Route>
          <Route path='/addArticle'>
            <AddArticle
              title={this.state.article.title}
              subtitle={this.state.article.subtitle}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
