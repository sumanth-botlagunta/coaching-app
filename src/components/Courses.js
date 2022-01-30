import React, { Component } from "react";
import Header from "./Header";
import "./courses.css";

export default class Courses extends Component {
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
                <div className="course-info">
                  <div className="course-img">
                    <img
                      src="https://i.ibb.co/nPd3zqN/sci.png"
                      alt="science-course-image"
                    />
                  </div>
                  <div className="course-desc">
                    <h2>Science</h2>
                    <p className="desc-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <button className="btn btn-danger">Register here</button>
                  </div>
                </div>
                <div className="course-info">
                  <div className="course-img">
                    <img
                      src="https://i.ibb.co/nPd3zqN/sci.png"
                      alt="science-course-image"
                    />
                  </div>
                  <div className="course-desc">
                    <h2>Spoken English</h2>
                    <p className="desc-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <button className="btn btn-danger">Register here</button>
                  </div>
                </div>
                <div className="course-info">
                  <div className="course-img">
                    <img
                      src="https://i.ibb.co/nPd3zqN/sci.png"
                      alt="science-course-image"
                    />
                  </div>
                  <div className="course-desc">
                    <h2>Maths</h2>
                    <p className="desc-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <button className="btn btn-danger">Register here</button>
                  </div>
                </div>
                <div className="course-info">
                  <div className="course-img">
                    <img
                      src="https://i.ibb.co/nPd3zqN/sci.png"
                      alt="science-course-image"
                    />
                  </div>
                  <div className="course-desc">
                    <h2>General knowledge</h2>
                    <p className="desc-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <button className="btn btn-danger">Register here</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
