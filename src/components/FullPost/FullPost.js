import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import { ClipLoader } from "react-spinners";

class FullPost extends Component {
  state = {
    postData: null,
    loading: false
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
    swal({
      title: "Delete Post!! Are you sure?",
      text: "Once deleted, you will not be able to recover this Post!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.setState({ loading: true });

        axios
          .delete("https://jsonplaceholder.typicode.com/posts/" + postId)
          .then(response => {
            console.log(response);
            this.setState({ loading: false });
            swal("Yeah! Your Post has been deleted!", {
              icon: "success",
              timer: 2000
            });
            this.props.history.goBack();
          })
          .catch(error => {
            console.log(error);
            this.setState({ loading: false });
            swal("Oops", "Something went wrong!", "error", {
              timer: 3000
            });
          });
      } else {
        swal("Your Post is safe!");
      }
    });
  };
  render() {
    const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
`;
    var post;
    if (this.state.postData !== null) {
      if (this.state.loading) {
        // console.log("hi");
        post = (
          <ClipLoader
            key="kkk"
            css={override}
            sizeUnit={"px"}
            size={50}
            color={"black"}
            loading={this.state.loading}
            className={this.state.active > 0 ? "green" : "green"}
          />
        );
      }
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
