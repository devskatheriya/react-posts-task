import React, { Component } from "react";
import axios from "axios";
import Post from "../Posts/Post/Post";
// import swal from "sweetalert";

class Posts extends Component {
  state = {
    postsData: [],
    postId: null
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({
        postsData: response.data.slice(0, 10)
      });
    });
  }

  myclickhandler = id => {
    console.log(id);
    console.log(this.props.history.post);
    this.props.history.push({ pathname: "/post/" + id });
  };

  render() {
    return this.state.postsData.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          clicked={() => this.myclickhandler(post.id)}
        />
      );
    });
  }
}

export default Posts;
