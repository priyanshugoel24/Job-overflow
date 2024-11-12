import React from 'react';
import Image from 'next/image';
import './course.css';  // Adjust the path according to your directory structure

const Course = ({ imageSrc, title, provider, rate }) => (
  <div className="course">
    <Image src={imageSrc} alt={title} height={100} width={150} className="course-img" />
    <div className="course-info">
      <div className="title">{title}</div>
      <div className="provider">{provider}</div>
      <div className="rate">{rate}</div>
    </div>
  </div>
);

export default Course;