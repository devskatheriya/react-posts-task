import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
// import {} from 'react-bootstrap';
import swal from "sweetalert";

class Login extends Component {
  state = {
    username: "sachin",
    pass: "sach"
  };
  myLoginHandler = () => {
    console.log(this.props);
    if (document.getElementById("username").value === this.state.username) {
      if (document.getElementById("password").value === this.state.pass) {
        let path = this.props.location.state
          ? this.props.location.state.from.pathname
          : "/login";

        this.props.clicking();
        swal("Done!", "You are Logged in Now !", "success", {
          timer: 1000
        }).then(response => {
          //   console.log(response);
          this.props.history.push(path);
        });
      } else {
      }
    } else {
    }
  };
  render() {
    let view;
    if (this.props.auth) {
      view = (
        <h1 key="logged info" style={{ textAlign: "center", margin: "20px" }}>
          Your are Logged In !
        </h1>
      );
    } else {
      view = (
        <Form
          style={{
            width: "300px",
            alignItems: "center",
            margin: "auto",
            "margin-top": "20px",
            border: "1px solid blue",
            padding: "20px"
          }}
        >
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              id="username"
              type="email"
              placeholder="Enter Username"
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Control
              id="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button onClick={this.myLoginHandler}>Submit</Button>
        </Form>
      );
    }
    return [view];
  }
}

export default Login;
