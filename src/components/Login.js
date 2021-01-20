import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      data:""
    };
  }

  handleEmail = (e) => {
    e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  };

  handlePassword = (e) => {
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    var url = "http://localhost:5000/api/login";
    axios
      .post(url, user)
      .then(res =>{
          this.setState({
            data: res.data[0].email
          })
          sessionStorage.setItem('email',this.state.data);
          sessionStorage.setItem('loggedIn','true');
          this.props.history.push('/');
      })
      .catch((error) => {
        alert('error in email or password');
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  };

  render() {
    return (
      <div>
        <Header></Header>
      <div className="container mt-5">
        <h3>Login Form</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={this.handleEmail}
            className="form-control mt-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={this.handlePassword}
            className="form-control mt-2"
          />
          <button type="submit" className="btn btn-primary mt-2">submit</button>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;
