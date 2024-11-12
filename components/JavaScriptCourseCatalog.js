import React from 'react';
import Course from './Course';

const javascriptcourses = [
  {
    imageSrc: '/course-images/javascript/course-1.jpg',
    title: 'The Complete Javascript Course: From Beginning to Expert',
    provider: 'Udemy',
    rate: '₹ 3,999',
  },
  {
    imageSrc: '/course-images/javascript/course-2.jpg',
    title: 'The Complete 2024 Web Development Bootcamp',
    provider: 'Udemy',
    rate: '₹ 2,499',
  },
  {
    imageSrc: '/course-images/javascript/course-3.jpeg',
    title: 'JavaScript - The Complete Guide 2024 (Beginner + Advanced)',
    provider: 'Udemy',
    rate: '₹ 1,999',
  },
  {
    imageSrc: '/course-images/javascript/course-4.jpeg',
    title: 'The Complete Javascript Course: From Beginning to Expert',
    provider: 'Udemy',
    rate: '₹ 3,999',
  },
  {
    imageSrc: '/course-images/javascript/course-5.jpg',
    title: 'Modern JavaScript From The Beginning 2.0 (2024)',
    provider: 'Udemy',
    rate: '₹ 999',
  },
  {
    imageSrc: '/course-images/javascript/course-6.jpeg',
    title: 'The Complete Javascript Course: From Beginning to Expert',
    provider: 'Udemy',
    rate: '₹ 3,999',
  },
  {
    imageSrc: '/course-images/javascript/course-7.jpeg',
    title: 'The Complete Javascript Course: From Beginning to Expert',
    provider: 'Udemy',
    rate: '₹ 3,999',
  },
];

const JavaScriptCourseCatalog = () => (
  <div className="course-catalog">
    <h2 className=" font-sans ml-3 mb-2 font-extrabold text-2xl">JavaScript</h2>
    <div className="course-list flex ">
      {javascriptcourses.map((course, index) => (
        <Course
          key={index}
          imageSrc={course.imageSrc}
          title={course.title}
          provider={course.provider}
          rate={course.rate}
        />
      ))}
    </div>
  </div>
);

export default JavaScriptCourseCatalog;