import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts/Posts";
import FullPost from "./components/FullPost/FullPost";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

class App extends Component {
  state={
    isAuthenticate:false,
  }
  componentWillUnmount(){
    
  }
  updateAuth=()=>{
    console.log('auth update',!this.state.isAuthenticate )
    this.setState({isAuthenticate: !this.state.isAuthenticate })
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header auth={this.state} clicking={this.updateAuth} />
          <Switch>
            <Route path="/" exact component={(props)=><Home isAuth={this.state.isAuthenticate} {...props}/>} />
            <Route path="/posts" exact strict component={(props)=><Posts isAuth={this.state.isAuthenticate} {...props}/>} />
            <Route path="/post/:id" component={(props)=><FullPost isAuth={this.state.isAuthenticate} {...props}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
