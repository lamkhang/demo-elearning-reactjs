import React, { Component } from 'react';

class CourseItem extends Component {
  render() {
    let { couseItem } = this.props;
    return (
      <div className="col-6 col-md-3 course-item">
            <div className="card">
              <img src={couseItem.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{couseItem.title}</h5>
                <p className="card-text">
                  {couseItem.detail}
          </p>
                <a href="#x" className="btn btn-primary">
                  Go Detail
          </a>
              </div>
            </div>
          </div>
    );
  }
}

export default CourseItem;