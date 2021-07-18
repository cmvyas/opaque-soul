import React from "react";
import Login from "./Components/Login/Login";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Writer from "./Components/Writer/Writer";
import Register from "./Components/Register/Register";
import Background from "./Components/Background/background";
import { Switch, Route, Redirect } from "react-router-dom";
//import AddArticle from "./Components/User-Profile/AddArticle/Article-Card-Display";
import AllArticles from "./Components/All-Articles/All-Articles";
import Save from "./Components/Writer/Article-Save/article-save";
import Landing from "./Components/Landing/landing";
// import UserArticles from "./Components/Users-Articles/userArticleCollection";
import ArticleBody from "./Components/All-Articles/Article-Body";
import ReadArticle from "./Components/All-Articles/Read-Article";
import UserArticles from "./Components/Users-Articles/userArticleCollection";
import UserArticleCard from "./Components/Users-Articles/userArticleCardDisplay";

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

        {/* <UserArticles id={this.state.user.id} /> */}
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
          <Route path='/opaque-soul'>
            <Landing name={this.state.user.name} />
          </Route>
          <Route path='/all'>
            <AllArticles
              name={this.state.user.name}
              currentArticleId={this.currentArticleId}
            />
          </Route>
          <Route path='/user-collection'>
            <UserArticles
              name={this.state.user.name}
              currentArticleId={this.currentArticleId}
              email={this.state.user.email}
            />
          </Route>

          <Route path='/readArticle'>
            <ReadArticle currentArticleId={this.state.currentArticleId} />
          </Route>
          <Route path='/write'>
            {!this.state.login ? (
              <Redirect to='/login' />
            ) : (
              <Writer
                email={this.state.user.email}
                newArticle={this.newArticle}
              />
            )}
          </Route>
          <Route path='/save'>
            <Save />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
