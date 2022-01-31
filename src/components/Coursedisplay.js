import React, { Component } from "react";

export default class Coursedisplay extends Component {
  constructor(props) {
    super(props);
  }
  rendercourses = (data) => {
    console.log("data in course display>>>", data);
    return data.map((item) => {
      console.log("item is >>>", item);
      return (
        <div className="course-info">
          <div className="course-img">
            <img src={item.thumb} alt="course" />
          </div>
          <div className="course-desc">
            <h2>{item.name}</h2>
            <p className="desc-text">{item.description}</p>
            <button className="btn btn-danger">Register here</button>
          </div>
        </div>
      );
    });
  };
  render() {
    return <>{this.rendercourses(this.props.data)}</>;
  }
}
