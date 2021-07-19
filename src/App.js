import React from "react";
import Login from "./Components/Login/Login";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Writer from "./Components/Writer/Writer";
import Register from "./Components/Register/Register";
import Background from "./Components/Background/background";
import { Switch, Route, Redirect } from "react-router-dom";
import AllArticles from "./Components/All-Articles/All-Articles";
import Save from "./Components/Writer/Article-Save/article-save";

import ReadArticle from "./Components/All-Articles/Read-Article";
import UserArticle from "./Components/Users-Articles/userArticleCollection";

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
        highlight: "",
        story: "",
      },
      currentArticleId: null,
    };
  }
  newUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
      },
    });
  };
  newArticle = (newArticle) => {
    this.setState({
      article: {
        id: newArticle.id,
        title: newArticle.title,
        subtitle: newArticle.subtitle,
        highlight: newArticle.highlight,
        story: newArticle.story,
      },
    });
  };
  onLoginChange = () => {
    this.setState((currentState) => ({
      login: !currentState.login,
    }));
  };

  currentArticleId = (id) => {
    this.setState({ currentArticleId: id });
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
          <Route path='/' exact component={Home} />

          <Route path='/login'>
            <Login newUser={this.newUser} onLoginChange={this.onLoginChange} />
          </Route>
          <Route path='/register'>
            <Register
              name={this.state.user.name}
              newUser={this.newUser}
              onLoginChange={this.onLoginChange}
            />
          </Route>

          <Route path='/opaque-soul-collection'>
            {!this.state.login ? (
              <Redirect to='/login' />
            ) : (
              <AllArticles
                name={this.state.user.name}
                currentArticleId={this.currentArticleId}
              />
            )}
          </Route>
          <Route path='/user-collection'>
            {!this.state.login ? (
              <Redirect to='/login' />
            ) : (
              <UserArticle
                name={this.state.user.name}
                currentArticleId={this.currentArticleId}
                email={this.state.user.email}
              />
            )}
          </Route>

          <Route path='/readArticle'>
            <ReadArticle currentArticleId={this.state.currentArticleId} />
          </Route>
          <Route path='/writeArticle'>
            {!this.state.login ? (
              <Redirect to='/login' />
            ) : (
              <Writer
                email={this.state.user.email}
                newArticle={this.newArticle}
              />
            )}
          </Route>
          <Route path='/saved'>
            <Save />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
