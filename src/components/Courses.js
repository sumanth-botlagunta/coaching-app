import React, { Component } from "react";
import Header from "./Header";
import "./courses.css";
import JSON from "./db.json";
import Coursedisplay from "./Coursedisplay";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursedata: JSON,
    };
  }
  render() {
    return (
      <div className="courses">
        <Header />
        <div className="container">
          <div className="panel panel-success">
            <div className="panel-heading">
              <h4>Register your courses</h4>
            </div>
            <div className="panel-body">
              <div className="all-courses">
                <Coursedisplay data={this.state.coursedata} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Courses;
