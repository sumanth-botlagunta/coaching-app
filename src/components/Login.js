import React, { Component } from "react";
import Header from "./Header";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <form className="container">
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
