import React, { Component } from "react";
export default class Coursedisplay extends Component {
  rendercourses = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div className="course-info" key={item._id}>
            <div className="course-img">
              <img src={item.thumb} alt="course" />
            </div>
            <div className="course-desc">
              <h2>{item.name}</h2>
              <p className="desc-text">{item.description}</p>
            </div>
            <button className="btn btn-danger" value={item.id}>
              Register here
            </button>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="panel panel-success">
            <div className="panel-heading">
              <h4>Register your courses</h4>
            </div>
            <div className="panel-body">
              <div className="all-courses">
                {this.rendercourses(this.props.coursedata)}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
