import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import "./App.css";
import { Navbar, Button, Nav } from "react-bootstrap";
import Posts from "./components/Posts/Posts";
import FullPost from "./components/FullPost/FullPost";
import Home from './components/Home/Home';
// import Section from "./components/Section";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="dark" variant="dark">
            <Nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/posts" exact  strict>Posts</NavLink>
              {/* <NavLink to="/posts?id=">FullPost</NavLink> */}
            </Nav>
           
            <Button variant="outline-info" className="pull-right">Login</Button>
           
          </Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact strict component={Posts} />
            <Route path="/post/:id"   component={FullPost} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
