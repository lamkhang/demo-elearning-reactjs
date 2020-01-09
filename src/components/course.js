import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourseItem from "./course-item";
class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseType: "online",
      rowCourse: 1,
    }
  }
  componentDidMount() {
  }
  renderListCourse = () => {
    let { courseListOnline, courseListOffline } = this.props;
    let { rowCourse, courseType } = this.state;
    let array = require('lodash');
    let courseView = [];
    if(courseType === "online"){
      courseView = array.chunk(courseListOnline, 4*rowCourse);
    }
    else if(courseType === "offline"){
      courseView = array.chunk(courseListOffline, 4*rowCourse);
    }

    if(courseView.length > 0){
      return courseView[0].map((item, index) => {
        return (<CourseItem couseItem={item} key={index} />)
      })
    }
  }
  handleShowMore = () => {
    let { rowCourse }= this.state;
    rowCourse++;
    this.setState({
      rowCourse
    })
  }
  handleCourseType = (courseType) => {
    this.setState({
      courseType,
      rowCourse: 1,
    })
  }
  render() {
    return (
      <section className="course container">
        <div className="d-flex align-items-center">
          <div className="logo w-25">
            <img
              src="http://www.dasedesigns.com/wp-content/uploads/2018/05/Icon-1.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="course-deatil">
            <ul className="nav nav-tabs">
              <li className="nav-item course-list-title" onClick={() => this.handleCourseType("online")}>
                <a className="nav-link active" href="#x" data-toggle="tab">
                  Online Course
          </a>
              </li>
              <li className="nav-item course-list-title" onClick={() => this.handleCourseType("offline")}>
                <a className="nav-link" href="#x" data-toggle="tab">
                  Offline course
          </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mx-0 course-list mt-5">
          {this.renderListCourse()}
        </div>
        <div className="d-flex justify-content-center mt-4 btnShow mb-4">
          <button className="btn" onClick={this.handleShowMore}>
            <i className="fa fa-arrow-down mr-2" />
            Show more
    </button>
        </div>
      </section>
    );
  }
}
const mapStateToDrops = state => {
  return {
    courseListOnline: state.courseReducer.courseListOnline,
    courseListOffline: state.courseReducer.courseListOffline
  }
}
export default connect(mapStateToDrops, null)(Course);