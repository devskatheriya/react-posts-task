import React, { Component } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";


class Header extends Component {


  render() {
    var btnText;
    if(this.props.auth.isAuthenticate){
      btnText='Logout';
    }else{
      btnText='Login';
    }
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Blog Posts</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/posts">Posts</Nav.Link>
        </Nav>
        <Button variant="outline-info" className="pull-right" onClick={this.props.clicking}>
          {btnText}
        </Button>
      </Navbar>
    );
  }
}

export default Header;
