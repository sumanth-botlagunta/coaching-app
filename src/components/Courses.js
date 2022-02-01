import React, { Component } from "react";
import Header from "./Header";
import "./courses.css";
import Coursedisplay from "./Coursedisplay";
//api url for courses
const url = "http://localhost:5000/courses";
class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursedata: "",
    };
  }
  render() {
    return (
      <div className="courses">
        <Header />
        <Coursedisplay coursedata={this.state.coursedata} />
      </div>
    );
  }
  componentWillMount() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ coursedata: data });
      });
  }
}
export default Courses;
