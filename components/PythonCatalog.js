import React from "react";
import Course from "./Course";

const pythoncourses = [
    {
      imageSrc: '/course-images/Python/course-1.jpg',
      title: 'The Complete Python Bootcamp',
      provider: 'Udemy',
      rate: '₹ 1,999',
    },
    {
      imageSrc: '/course-images/Python/course-2.webp',
      title: 'Python for Data Science and Machine Learning',
      provider: 'Udemy',
      rate: '₹ 2,499',
    },
    {
      imageSrc: '/course-images/Python/course-3.gif',
      title: 'Learn Python Programming Masterclass',
      provider: 'Udemy',
      rate: '₹ 4,999',
    },
    {
      imageSrc: '/course-images/Python/course-4.jpg',
      title: 'Python Mega Course',
      provider: 'Udemy',
      rate: '₹ 2,999',
    },
    {
      imageSrc: '/course-images/Python/course-5.jpeg',
      title: 'Programming for Everybody',
      provider: 'Coursera',
      rate: '₹ 1,999',
    },
    {
      imageSrc: '/course-images/Python/course-6.jpg',
      title: 'Capstone- Python',
      provider: 'Coursera',
      rate: '₹ 3,999',
    },
    {
      imageSrc: '/course-images/Python/course-7.avif',
      title: 'The Complete Python Developer',
      provider: 'Udemy',
      rate: '₹ 999',
    },
  ];

  const PythonCatalog = () => (
    <div className="course-catalog">
      <h2 className=" font-sans ml-3 mb-2 font-extrabold text-2xl">Python</h2>
      <div className="course-list flex ">
        {pythoncourses.map((course, index) => (
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
  
  export default PythonCatalog;
  