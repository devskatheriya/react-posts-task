import React, { Component } from "react";
class Post extends Component {
  render() {
    return (
        <div onClick={this.props.clicked} >
          <h1>{this.props.title}</h1>
          <div>
            <p>{this.props.body}</p>
          </div>
        </div>
    );
  }
}

export default Post;
