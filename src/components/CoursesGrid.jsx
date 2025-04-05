import React from "react";
import "./CoursesGrid.css";

const CoursesGrid = ({ courses }) => {
  return (
    <div className="courses-container">
      <h2 className="courses-title">Explore Our Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.icon} alt={`${course.name} icon`} className="course-icon" />
            <h3 className="course-name">{course.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesGrid;
