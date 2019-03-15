import React, { Component } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(props);
  // }
  clicked = () => {
    if (this.props.auth) {
      this.props.clicking();
    } else {
      this.props.history.push({
        pathname: "/login",
        state: { from: this.props.history.location }
      });
    }
  };
  render() {
    var btnText;
    // console.log(this.props);
    if (this.props.auth) {
      btnText = "Logout";
    } else {
      btnText = "Login";
    }
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Blog Posts</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link>
            <NavLink to="/posts">Home</NavLink>
          </Nav.Link> */}
          {/* <Nav.Link> */}
          <NavLink to="/posts">Posts</NavLink>
          {/* </Nav.Link> */}
        </Nav>
        <Button
          variant="outline-info"
          className="pull-right"
          onClick={this.clicked}
        >
          {btnText}
        </Button>
      </Navbar>
    );
  }
}

export default Header;
