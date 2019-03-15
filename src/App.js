import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts/Posts";
import FullPost from "./components/FullPost/FullPost";
import Home from "./components/Home/Home";
import _Header from "./components/Header/Header";
// import swal from "sweetalert";
import Login from "./components/Login/login";

class App extends Component {
  state = {
    isAuthenticated: false
  };

  changeAuthentication = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };

  render() {
    let Header = withRouter(_Header);
    const PrivateRoute = ({ component: Component, ...rest }) => {
      // console.log("in private route");
      // console.log(rest.isAuth);
      return (
        <Route
          {...rest}
          render={props =>
            rest.isAuth ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      );
    };
    return (
      <BrowserRouter>
        <div>
          <Header
            auth={this.state.isAuthenticated}
            clicking={() => this.changeAuthentication()}
          />
          <Switch>
            <Route
              path="/login"
              component={props => (
                <Login
                  auth={this.state.isAuthenticated}
                  clicking={() => this.changeAuthentication()}
                  {...props}
                />
              )}
            />

            {/* <Route
              path="/"
              exact
              component={props => (
                <Home isAuth={this.state.isAuthenticated} {...props} />
              )}
            /> */}
            <PrivateRoute
              path="/"
              isAuth={this.state.isAuthenticated}
              component={props => <Posts {...props} />}
            />
            <PrivateRoute
              path="/post/:id"
              isAuth={this.state.isAuthenticated}
              component={props => <FullPost {...props} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
