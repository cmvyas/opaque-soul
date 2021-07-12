import React from "react";
import Login from "./Components/Login/Login";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Writer from "./Components/Writer/Writer";
import Register from "./Components/Register/Register";
import Background from "./Components/Background/background";
import { Switch, Route, Redirect } from "react-router-dom";
import AddArticle from "./Components/User-Profile/AddArticle/Article-Card-Display";
import AllArticles from "./Components/All-Articles/All-Articles";
import Save from "./Components/Writer/Article-Save/article-save";
import Landing from "./Components/Landing/landing";
import UserArticles from "./Components/Users-Articles/userArticleCollection";

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
        <UserArticles email={this.state.user.email} />
        {/* <UserArticles id={this.state.user.id} /> */}
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/save'>
            <AllArticles
              title={this.state.article.title}
              subtitle={this.state.article.subtitle}
              id={this.state.user.email}
            />
          </Route>

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
              <Writer
                email={this.state.user.email}
                newArticle={this.newArticle}
              />
            )}
          </Route>
          <Route path='/wait'>
            <Save />
          </Route>
          <Route path='/addArticle'></Route>
          <Route path='/save'></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
