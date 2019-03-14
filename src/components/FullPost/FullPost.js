import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";
import { Button } from "react-bootstrap";

class FullPost extends Component {
  state = {
    postData: null
  };

  componentDidMount() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts?id=" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          postData: response.data[0]
        });
      });
  }
  deletePostHandler = postId => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
      console.log(this.props.history.goBack())
  };
  render() {
    var post;
    if (this.state.postData !== null) {
      // console.log("hi");
      post = (
        <div className="outerDiv relative" key={this.state.postData.id}>
          <h1 className="title">{this.state.postData.title}</h1>
          <div className="bodyDiv">
            <p className="bodyPara">{this.state.postData.body}</p>
          </div>
          <div className="absolute">
            <Button variant="secondary" className="float-right edit ">
              Edit
            </Button>
            <Button
              variant="danger"
              className="float-right delete "
              onClick={() => this.deletePostHandler(this.state.postData.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      );
    }
    // console.log(post);
    return [post];
  }
}

export default FullPost;
