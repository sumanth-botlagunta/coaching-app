import React, { Component } from "react";
import banner from "./Banner.jpg"
export default class Coursedisplay extends Component {
  rendercourses = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div className="course-info" key={item._id}>
            <div className="course-img">
              <img src={item.image} alt="course" />
            </div>
            <div className="course-desc">
              <h2>{item.name}</h2>
              <p className="desc-text">{item.description}</p>
            </div>
            <div className="medi-cost">
            ₹{item.cost}
            </div>
            <button className="btn btn-danger" value={item.id}>
              Buy Now
            </button>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="covid-banner">
            <img src={banner} alt="_covidbanner_" />
          </div>
          <div className="panel panel-success">
            <div className="panel-heading">
              <h4>Buy the Best Quality Products at Medimax</h4>
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
