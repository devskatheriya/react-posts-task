import React, { Component } from "react";
import "./Post.css";
import { Card } from "react-bootstrap";
class Post extends Component {
  render() {
    console.log(this.props.clicked);
    return (
      // <div className="row">
      //   <div className="postDiv container" onClick={this.props.clicked}>
      //     <h1 className="postTitle">{this.props.title}</h1>
      //     <div className="postBodyDiv float-right">
      //       <p className="postBodyPara">{this.props.body}</p>
      //     </div>
      //   </div>
      // </div>
      <Card className="container" onClick={this.props.clicked}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.body}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Post;
